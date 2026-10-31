import { Question, SubjectName, QuestionType, DifficultyLevel, ProvenanceType, VerificationStatus } from '../../types/question';

export interface RawImportQuestion {
  id?: string;
  sourcePaper: string;
  sourceYear?: number;
  sourceSession?: string;
  questionNumber?: number;
  subject: SubjectName;
  topic: string;
  type: QuestionType;
  marks: 1 | 2;
  negativeMarks?: number;
  statement: string;
  figureSvg?: string;
  figureCaption?: string;
  options?: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
  officialAnswerKey: string | string[] | [number, number] | number;
  officialAnswerKeyReference: string;
  detailedSolution?: {
    understandingTheQuestion: string;
    givenInformationAndAssumptions: string[];
    relevantConcept: string;
    formulaAndTermExplanation: { formula: string; terms: { term: string; explanation: string }[] }[];
    stepByStepDerivation: string[];
    finalAnswerWithUnits: string;
    alternativeApproachOrShortcut?: string;
    commonMistakes: string[];
    relatedQuestions?: { id: string; title: string }[];
  };
  difficulty?: DifficultyLevel;
  tags?: string[];
  estimatedSolvingTimeSeconds?: number;
  provenanceType?: ProvenanceType;
  independentCheckNotes?: string;
  isVerifiedByExpert?: boolean;
}

export interface DuplicateDetectionResult {
  isDuplicate: boolean;
  duplicateOfId?: string;
  similarityScore: number;
  reason?: string;
}

export interface QuarantinedQuestion {
  rawQuestion: RawImportQuestion;
  errors: string[];
  timestamp: string;
}

export interface TopicCoverageItem {
  topic: string;
  importedCount: number;
  verifiedCount: number;
  provisionalCount: number;
  missingCount: number;
  status: 'well_covered' | 'needs_attention' | 'critical_gap';
}

export interface SubjectCoverageReport {
  subject: SubjectName;
  totalImported: number;
  verifiedCount: number;
  provisionalCount: number;
  topics: TopicCoverageItem[];
}

export interface ImportReport {
  timestamp: string;
  batchId: string;
  totalProcessed: number;
  authenticPyqCount: number;
  authoredPracticeCount: number;
  aiPracticeCount: number;
  matchedOfficialAnswersCount: number;
  verifiedSolutionsCount: number;
  provisionalSolutionsCount: number;
  duplicatesDetectedCount: number;
  quarantinedCount: number;
  duplicateDetails: { newQuestionId: string; existingQuestionId: string; similarity: number }[];
  quarantinedErrors: { questionId?: string; statementPreview: string; errors: string[] }[];
  subjectCoverage: SubjectCoverageReport[];
}
