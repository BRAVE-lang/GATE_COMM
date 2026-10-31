import { describe, it, expect } from 'vitest';
import { questionDeduplicator } from '../services/pipeline/deduplicator';
import { questionValidator } from '../services/pipeline/validator';
import { questionImportPipeline } from '../services/pipeline/importer';
import { questionRepository } from '../services/questionRepository';
import { RawImportQuestion } from '../services/pipeline/types';
import { Question } from '../types/question';

describe('Milestone 2: Question Bank & Ingestion Pipeline Tests', () => {
  describe('QuestionDeduplicator', () => {
    it('normalizes mathematical statements by stripping math delimiters and LaTeX tokens', () => {
      const statement = 'The value of closed-loop output voltage $V_o$ with $A = 1000$ and $R_1 = 1\\text{ k}\\Omega$.';
      const normalized = questionDeduplicator.normalizeText(statement);
      expect(normalized).not.toContain('$');
      expect(normalized).not.toContain('\\text');
      expect(normalized).toContain('closed loop output voltage');
    });

    it('detects exact statement duplicates via hash fingerprint', () => {
      const qA = 'Find the resonant frequency of a series RLC circuit with R=10, L=1mH, C=1uF.';
      const existing: Question[] = [
        {
          id: 'TEST-1',
          source: 'GATE 2023',
          sourceReference: 'Q1',
          subject: 'Network Theory',
          topic: 'Resonance',
          type: 'NAT',
          marks: 1,
          negativeMarks: 0,
          statement: qA,
          officialAnswer: [5000, 5000],
          detailedSolution: {} as any,
          solutionVerificationStatus: 'verified',
          provenance: 'GATE 2023',
          licence: 'Public',
          difficulty: 'Easy',
          tags: [],
          estimatedSolvingTimeSeconds: 60,
          provenanceType: 'authentic_pyq',
        },
      ];

      const res = questionDeduplicator.checkDuplicate(qA, existing);
      expect(res.isDuplicate).toBe(true);
      expect(res.similarityScore).toBe(1.0);
      expect(res.duplicateOfId).toBe('TEST-1');
    });

    it('detects fuzzy duplicates with Jaccard word similarity above threshold', () => {
      const statement1 = 'Find the resonant frequency of a series RLC circuit with resistor R=10, inductor L=1mH, capacitor C=1uF.';
      const statement2 = 'Calculate the resonant frequency of a series RLC circuit with resistor R=10, inductor L=1mH, and capacitor C=1uF.';

      const sim = questionDeduplicator.computeJaccardSimilarity(statement1, statement2);
      expect(sim).toBeGreaterThanOrEqual(0.8);
    });

    it('recognizes completely distinct questions as non-duplicate', () => {
      const statement1 = 'Find the resonant frequency of a series RLC circuit.';
      const statement2 = 'Determine the bit error rate of coherent BPSK modulation over AWGN channel.';
      const existing: Question[] = [
        {
          id: 'TEST-1',
          source: 'GATE 2024',
          sourceReference: 'Q2',
          subject: 'Communications',
          topic: 'Modulation',
          type: 'NAT',
          marks: 2,
          negativeMarks: 0,
          statement: statement2,
          officialAnswer: [0.001, 0.001],
          detailedSolution: {} as any,
          solutionVerificationStatus: 'verified',
          provenance: 'GATE 2024',
          licence: 'Public',
          difficulty: 'Medium',
          tags: [],
          estimatedSolvingTimeSeconds: 90,
          provenanceType: 'authentic_pyq',
        },
      ];

      const res = questionDeduplicator.checkDuplicate(statement1, existing);
      expect(res.isDuplicate).toBe(false);
      expect(res.similarityScore).toBeLessThan(0.4);
    });
  });

  describe('QuestionValidator', () => {
    const validRaw: RawImportQuestion = {
      sourcePaper: 'GATE 2024 EC',
      sourceYear: 2024,
      questionNumber: 28,
      subject: 'Analog Circuits',
      topic: 'BJT & MOSFET Amplifiers',
      type: 'NAT',
      marks: 2,
      statement: 'In the small-signal common-source amplifier circuit shown below, find voltage gain.',
      officialAnswerKey: [16.5, 16.8],
      officialAnswerKeyReference: 'GATE 2024 Official Key Q.28',
      detailedSolution: {
        understandingTheQuestion: 'Calculate CS stage small signal gain with finite ro.',
        givenInformationAndAssumptions: ['gm = 2 mA/V', 'ro = 50k', 'RD = 10k'],
        relevantConcept: 'Equivalent drain load is RD parallel ro.',
        formulaAndTermExplanation: [
          { formula: '|Av| = gm (RD || ro)', terms: [{ term: 'gm', explanation: 'Transconductance' }] },
        ],
        stepByStepDerivation: ['Step 1: Req = 8.33k', 'Step 2: Gain = 16.67'],
        finalAnswerWithUnits: '16.67',
        alternativeApproachOrShortcut: 'Conductance addition',
        commonMistakes: ['Neglecting ro'],
      },
      isVerifiedByExpert: true,
    };

    it('passes completely valid raw questions', () => {
      const res = questionValidator.validate(validRaw);
      expect(res.isValid).toBe(true);
      expect(res.errors.length).toBe(0);
      expect(res.sanitizedNegativeMarks).toBe(0); // NAT has 0 negative marks
    });

    it('enforces GATE negative marking standards automatically', () => {
      const rawMcq1: RawImportQuestion = {
        ...validRaw,
        type: 'MCQ',
        marks: 1,
        options: [
          { id: 'A', text: '10' },
          { id: 'B', text: '20' },
          { id: 'C', text: '30' },
          { id: 'D', text: '40' },
        ],
        officialAnswerKey: 'B',
      };
      const res = questionValidator.validate(rawMcq1);
      expect(res.isValid).toBe(true);
      expect(res.sanitizedNegativeMarks).toBe(0.33);

      const rawMcq2: RawImportQuestion = {
        ...rawMcq1,
        marks: 2,
      };
      const res2 = questionValidator.validate(rawMcq2);
      expect(res2.isValid).toBe(true);
      expect(res2.sanitizedNegativeMarks).toBe(0.66);
    });

    it('rejects questions with invalid subjects outside the 10 official subjects', () => {
      const invalidSubjectRaw: RawImportQuestion = {
        ...validRaw,
        subject: 'Mechanical Thermodynamics' as any,
      };
      const res = questionValidator.validate(invalidSubjectRaw);
      expect(res.isValid).toBe(false);
      expect(res.errors.some((e) => e.includes('Invalid or unrecognised subject'))).toBe(true);
    });

    it('quarantines questions missing mandatory solution sections', () => {
      const incompleteRaw: RawImportQuestion = {
        ...validRaw,
        detailedSolution: {
          ...validRaw.detailedSolution!,
          understandingTheQuestion: '',
          stepByStepDerivation: [],
        },
      };
      const res = questionValidator.validate(incompleteRaw);
      expect(res.isValid).toBe(false);
      expect(res.errors.some((e) => e.includes('Understanding the question'))).toBe(true);
    });
  });

  describe('QuestionImportPipeline', () => {
    it('processes batch, detects duplicates, imports valid items, and generates exact report', () => {
      const rawBatch: RawImportQuestion[] = [
        {
          sourcePaper: 'GATE 2024 EC',
          sourceYear: 2024,
          questionNumber: 1,
          subject: 'Engineering Mathematics',
          topic: 'Complex Analysis',
          type: 'NAT',
          marks: 1,
          statement: 'Evaluate the contour integral of (z^2 + 1)/(z^2 - 1) along |z - 1| = 1 counter-clockwise.',
          officialAnswerKey: 2,
          officialAnswerKeyReference: 'GATE 2024 Official Key Q.1',
          detailedSolution: {
            understandingTheQuestion: 'Compute contour integral using Cauchy residue theorem.',
            givenInformationAndAssumptions: ['Contour circle centered at 1 with radius 1'],
            relevantConcept: 'Only pole at z = 1 is inside contour.',
            formulaAndTermExplanation: [],
            stepByStepDerivation: ['Step 1: Pole z=1 residue = 1', 'Step 2: 2*pi*j*1 = 2*pi*j'],
            finalAnswerWithUnits: '2',
            commonMistakes: ['Including pole at -1'],
          },
          isVerifiedByExpert: true,
        },
      ];

      const { importedQuestions, report } = questionImportPipeline.processBatch(rawBatch, []);
      expect(importedQuestions.length).toBe(1);
      expect(report.totalProcessed).toBe(1);
      expect(report.authenticPyqCount).toBe(1);
      expect(report.matchedOfficialAnswersCount).toBe(1);
      expect(report.verifiedSolutionsCount).toBe(1);
      expect(report.duplicatesDetectedCount).toBe(0);
      expect(report.subjectCoverage.length).toBe(10);
    });
  });

  describe('QuestionRepository', () => {
    it('contains authentic GATE EC PYQs from official papers across all 10 subjects', () => {
      const all = questionRepository.getAll();
      expect(all.length).toBeGreaterThanOrEqual(20);

      const authenticPyqs = all.filter((q) => q.provenanceType === 'authentic_pyq');
      expect(authenticPyqs.length).toBeGreaterThanOrEqual(10);

      // Check subject presence in authentic PYQs
      const subjectsWithPyqs = new Set(authenticPyqs.map((q) => q.subject));
      expect(subjectsWithPyqs.has('Analog Circuits')).toBe(true);
      expect(subjectsWithPyqs.has('Network Theory')).toBe(true);
      expect(subjectsWithPyqs.has('Signals and Systems')).toBe(true);
      expect(subjectsWithPyqs.has('Control Systems')).toBe(true);
      expect(subjectsWithPyqs.has('Communications')).toBe(true);
      expect(subjectsWithPyqs.has('Electromagnetics')).toBe(true);
      expect(subjectsWithPyqs.has('Electronic Devices')).toBe(true);
      expect(subjectsWithPyqs.has('Engineering Mathematics')).toBe(true);
      expect(subjectsWithPyqs.has('Digital Circuits')).toBe(true);
      expect(subjectsWithPyqs.has('General Aptitude')).toBe(true);
    });

    it('filters and paginates correctly with specific subject and search query', () => {
      const res = questionRepository.query({
        subject: 'Analog Circuits',
        searchQuery: 'Op-Amp',
      }, 1, 5);

      expect(res.page).toBe(1);
      expect(res.items.length).toBeGreaterThan(0);
      expect(res.items.every((q) => q.subject === 'Analog Circuits')).toBe(true);
    });
  });
});

