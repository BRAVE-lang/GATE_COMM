import { Question, SubjectName } from '../../types/question';
import { RawImportQuestion, ImportReport, QuarantinedQuestion, SubjectCoverageReport, TopicCoverageItem } from './types';
import { questionDeduplicator } from './deduplicator';
import { questionValidator } from './validator';
import { GATE_EC_SUBJECTS } from '../../data/subjects';

export class QuestionImportPipeline {
  /**
   * Imports a batch of raw questions, running deduplication, validation,
   * official answer key matching, and generates an exhaustive import audit report.
   */
  public processBatch(
    rawBatch: RawImportQuestion[],
    existingQuestions: Question[] = []
  ): {
    importedQuestions: Question[];
    quarantined: QuarantinedQuestion[];
    report: ImportReport;
  } {
    const importedQuestions: Question[] = [];
    const quarantined: QuarantinedQuestion[] = [];
    const duplicateDetails: { newQuestionId: string; existingQuestionId: string; similarity: number }[] = [];
    const quarantinedErrors: { questionId?: string; statementPreview: string; errors: string[] }[] = [];

    // Combined working list for intra-batch duplicate detection
    const currentPool = [...existingQuestions];

    let authenticPyqCount = 0;
    let authoredPracticeCount = 0;
    let aiPracticeCount = 0;
    let matchedOfficialAnswersCount = 0;
    let verifiedSolutionsCount = 0;
    let provisionalSolutionsCount = 0;

    for (let i = 0; i < rawBatch.length; i++) {
      const raw = rawBatch[i];
      const qId = raw.id || `EC-${raw.sourceYear || 'GEN'}-${String(raw.questionNumber || i + 1).padStart(3, '0')}`;
      const statementPreview = raw.statement ? raw.statement.slice(0, 70) + '...' : '(empty statement)';

      // 1. Validation check
      const validation = questionValidator.validate(raw);
      if (!validation.isValid) {
        quarantined.push({
          rawQuestion: raw,
          errors: validation.errors,
          timestamp: new Date().toISOString(),
        });
        quarantinedErrors.push({
          questionId: qId,
          statementPreview,
          errors: validation.errors,
        });
        continue;
      }

      // 2. Duplicate detection check
      const dupCheck = questionDeduplicator.checkDuplicate(raw.statement, currentPool);
      if (dupCheck.isDuplicate && dupCheck.duplicateOfId) {
        duplicateDetails.push({
          newQuestionId: qId,
          existingQuestionId: dupCheck.duplicateOfId,
          similarity: dupCheck.similarityScore,
        });
        quarantined.push({
          rawQuestion: raw,
          errors: [`Duplicate detected: ${dupCheck.reason}`],
          timestamp: new Date().toISOString(),
        });
        quarantinedErrors.push({
          questionId: qId,
          statementPreview,
          errors: [`Duplicate of ${dupCheck.duplicateOfId} (Similarity: ${dupCheck.similarityScore})`],
        });
        continue;
      }

      // 3. Official answer key & verification status
      const provenanceType = raw.provenanceType || (raw.sourceYear ? 'authentic_pyq' : 'authored_practice');
      if (provenanceType === 'authentic_pyq') authenticPyqCount++;
      else if (provenanceType === 'authored_practice') authoredPracticeCount++;
      else aiPracticeCount++;

      // Official answer key check
      if (raw.officialAnswerKey !== undefined && raw.officialAnswerKey !== null) {
        matchedOfficialAnswersCount++;
      }

      const isVerified = Boolean(raw.isVerifiedByExpert);
      if (isVerified) verifiedSolutionsCount++;
      else provisionalSolutionsCount++;

      // 4. Construct complete Question object
      const figure = raw.figureSvg
        ? {
            type: 'svg' as const,
            content: raw.figureSvg,
            caption: raw.figureCaption || 'Circuit Diagram / System Representation',
          }
        : undefined;

      const questionObj: Question = {
        id: qId,
        source: raw.sourcePaper,
        sourceReference: raw.officialAnswerKeyReference || `${raw.sourcePaper} Q.${raw.questionNumber || i + 1}`,
        examYear: raw.sourceYear,
        examSession: raw.sourceSession,
        subject: raw.subject,
        topic: raw.topic,
        type: raw.type,
        marks: raw.marks,
        negativeMarks: validation.sanitizedNegativeMarks,
        statement: raw.statement,
        figure,
        options: raw.options,
        officialAnswer: validation.sanitizedOfficialAnswer,
        detailedSolution: raw.detailedSolution!,
        solutionVerificationStatus: isVerified ? 'verified' : 'provisional',
        provenance:
          provenanceType === 'authentic_pyq'
            ? `Official GATE EC ${raw.sourceYear || ''} Paper (${raw.sourcePaper})`
            : `Original Authored Practice Item (${raw.sourcePaper})`,
        licence:
          provenanceType === 'authentic_pyq'
            ? 'Public Domain / Educational Fair Use (Official Examination Archive Reference)'
            : 'Creative Commons Attribution-ShareAlike 4.0 International',
        difficulty: raw.difficulty || (raw.marks === 2 ? 'Hard' : 'Medium'),
        tags: raw.tags || [raw.subject, raw.topic, raw.type],
        estimatedSolvingTimeSeconds: raw.estimatedSolvingTimeSeconds || (raw.marks === 2 ? 180 : 120),
        provenanceType,
        importMetadata: {
          rawSourcePaper: raw.sourcePaper,
          rawQuestionNumber: raw.questionNumber,
          officialAnswerKeyRef: raw.officialAnswerKeyReference,
          hash: questionDeduplicator.getHash(raw.statement),
          extractedAt: new Date().toISOString(),
          independentCheckNotes: raw.independentCheckNotes,
          validationStatus: validation.warnings.length > 0 ? 'warning' : 'pass',
          validationErrors: validation.warnings,
        },
      };

      importedQuestions.push(questionObj);
      currentPool.push(questionObj);
    }

    // 5. Generate Subject & Topic Coverage Report
    const subjectCoverage = this.generateCoverageReport(currentPool);

    const report: ImportReport = {
      timestamp: new Date().toISOString(),
      batchId: `BATCH-${Date.now()}`,
      totalProcessed: rawBatch.length,
      authenticPyqCount,
      authoredPracticeCount,
      aiPracticeCount,
      matchedOfficialAnswersCount,
      verifiedSolutionsCount,
      provisionalSolutionsCount,
      duplicatesDetectedCount: duplicateDetails.length,
      quarantinedCount: quarantined.length,
      duplicateDetails,
      quarantinedErrors,
      subjectCoverage,
    };

    return {
      importedQuestions,
      quarantined,
      report,
    };
  }

  /**
   * Generates a topic coverage matrix across all 10 GATE EC subjects.
   */
  public generateCoverageReport(questions: Question[]): SubjectCoverageReport[] {
    return GATE_EC_SUBJECTS.map((subject) => {
      const subjectQuestions = questions.filter((q) => q.subject === subject.name);
      const verifiedCount = subjectQuestions.filter((q) => q.solutionVerificationStatus === 'verified').length;
      const provisionalCount = subjectQuestions.filter((q) => q.solutionVerificationStatus === 'provisional').length;

      const topics: TopicCoverageItem[] = subject.topics.map((t) => {
        const topicQuestions = subjectQuestions.filter((q) => q.topic.toLowerCase() === t.name.toLowerCase());
        const tVerified = topicQuestions.filter((q) => q.solutionVerificationStatus === 'verified').length;
        const tProvisional = topicQuestions.filter((q) => q.solutionVerificationStatus === 'provisional').length;
        const count = topicQuestions.length;

        let status: 'well_covered' | 'needs_attention' | 'critical_gap' = 'critical_gap';
        if (count >= 3 && tVerified >= 2) status = 'well_covered';
        else if (count >= 1) status = 'needs_attention';

        return {
          topic: t.name,
          importedCount: count,
          verifiedCount: tVerified,
          provisionalCount: tProvisional,
          missingCount: Math.max(0, 3 - count),
          status,
        };
      });

      return {
        subject: subject.name,
        totalImported: subjectQuestions.length,
        verifiedCount,
        provisionalCount,
        topics,
      };
    });
  }
}

export const questionImportPipeline = new QuestionImportPipeline();

