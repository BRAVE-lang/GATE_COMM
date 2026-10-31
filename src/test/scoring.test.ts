import { describe, it, expect } from 'vitest';
import { checkAnswer, calculateQuestionMarks, evaluateTestScore } from '../services/scoring';
import { Question } from '../types/question';

describe('GATE EC Scoring & Answer Verification', () => {
  describe('checkAnswer', () => {
    it('correctly verifies MCQ answers with case-insensitivity', () => {
      expect(checkAnswer('MCQ', 'B', 'B')).toBe(true);
      expect(checkAnswer('MCQ', 'b', 'B')).toBe(true);
      expect(checkAnswer('MCQ', 'A', 'B')).toBe(false);
      expect(checkAnswer('MCQ', null, 'B')).toBe(false);
    });

    it('correctly verifies MSQ answers (all correct must be chosen, no partial, order-independent)', () => {
      expect(checkAnswer('MSQ', ['A', 'B', 'C'], ['A', 'B', 'C'])).toBe(true);
      expect(checkAnswer('MSQ', ['C', 'A', 'B'], ['A', 'B', 'C'])).toBe(true);
      // Missing option C
      expect(checkAnswer('MSQ', ['A', 'B'], ['A', 'B', 'C'])).toBe(false);
      // Extra option D
      expect(checkAnswer('MSQ', ['A', 'B', 'C', 'D'], ['A', 'B', 'C'])).toBe(false);
    });

    it('correctly verifies NAT answers within acceptable tolerance ranges', () => {
      // Range: -8.92 to -8.90
      expect(checkAnswer('NAT', -8.91, [-8.92, -8.90])).toBe(true);
      expect(checkAnswer('NAT', '-8.9108', [-8.92, -8.90])).toBe(true);
      expect(checkAnswer('NAT', -8.92, [-8.92, -8.90])).toBe(true);
      expect(checkAnswer('NAT', -8.90, [-8.92, -8.90])).toBe(true);
      expect(checkAnswer('NAT', -9.0, [-8.92, -8.90])).toBe(false);

      // Exact range: [200, 200]
      expect(checkAnswer('NAT', '200', [200, 200])).toBe(true);
      expect(checkAnswer('NAT', '199.9', [200, 200])).toBe(false);
    });
  });

  describe('calculateQuestionMarks', () => {
    const sampleMCQ1: Question = {
      id: 'TEST-MCQ-1',
      source: 'Test',
      sourceReference: 'Ref',
      subject: 'Network Theory',
      topic: 'Theorems',
      type: 'MCQ',
      marks: 1,
      negativeMarks: 0.33,
      statement: 'Sample Question',
      officialAnswer: 'B',
      detailedSolution: {} as any,
      solutionVerificationStatus: 'verified',
      provenance: 'Test',
      licence: 'CC',
      difficulty: 'Easy',
      tags: [],
      estimatedSolvingTimeSeconds: 60,
      provenanceType: 'authored_practice',
    };

    const sampleMCQ2: Question = {
      ...sampleMCQ1,
      id: 'TEST-MCQ-2',
      marks: 2,
      negativeMarks: 0.66,
      officialAnswer: 'C',
    };

    const sampleNAT2: Question = {
      ...sampleMCQ1,
      id: 'TEST-NAT-2',
      type: 'NAT',
      marks: 2,
      negativeMarks: 0,
      officialAnswer: [200, 200],
    };

    const sampleMSQ2: Question = {
      ...sampleMCQ1,
      id: 'TEST-MSQ-2',
      type: 'MSQ',
      marks: 2,
      negativeMarks: 0,
      officialAnswer: ['A', 'B'],
    };

    it('awards +1 mark for correct 1-mark MCQ, deducts 0.33 for wrong, 0 for skipped', () => {
      expect(calculateQuestionMarks(sampleMCQ1, 'B')).toEqual({
        marksEarned: 1,
        isAttempted: true,
        isCorrect: true,
      });

      expect(calculateQuestionMarks(sampleMCQ1, 'A')).toEqual({
        marksEarned: -0.33,
        isAttempted: true,
        isCorrect: false,
      });

      expect(calculateQuestionMarks(sampleMCQ1, null)).toEqual({
        marksEarned: 0,
        isAttempted: false,
        isCorrect: false,
      });
    });

    it('awards +2 marks for correct 2-mark MCQ, deducts 0.66 for wrong', () => {
      expect(calculateQuestionMarks(sampleMCQ2, 'C')).toEqual({
        marksEarned: 2,
        isAttempted: true,
        isCorrect: true,
      });

      expect(calculateQuestionMarks(sampleMCQ2, 'D')).toEqual({
        marksEarned: -0.66,
        isAttempted: true,
        isCorrect: false,
      });
    });

    it('has ZERO negative marks for NAT incorrect answers in GATE', () => {
      expect(calculateQuestionMarks(sampleNAT2, '200')).toEqual({
        marksEarned: 2,
        isAttempted: true,
        isCorrect: true,
      });

      expect(calculateQuestionMarks(sampleNAT2, '150')).toEqual({
        marksEarned: 0,
        isAttempted: true,
        isCorrect: false,
      });
    });

    it('has ZERO negative marks for MSQ incorrect or partial answers in GATE', () => {
      expect(calculateQuestionMarks(sampleMSQ2, ['A', 'B'])).toEqual({
        marksEarned: 2,
        isAttempted: true,
        isCorrect: true,
      });

      // Partial answer
      expect(calculateQuestionMarks(sampleMSQ2, ['A'])).toEqual({
        marksEarned: 0,
        isAttempted: true,
        isCorrect: false,
      });
    });
  });

  describe('evaluateTestScore', () => {
    it('accurately evaluates mixed test scores with subject breakdowns', () => {
      const q1: Question = {
        id: 'Q1',
        source: 'T',
        sourceReference: 'R',
        subject: 'Analog Circuits',
        topic: 'Op-Amp',
        type: 'MCQ',
        marks: 1,
        negativeMarks: 0.33,
        statement: 'Q1',
        officialAnswer: 'A',
        detailedSolution: {} as any,
        solutionVerificationStatus: 'verified',
        provenance: 'T',
        licence: 'CC',
        difficulty: 'Easy',
        tags: [],
        estimatedSolvingTimeSeconds: 60,
        provenanceType: 'authored_practice',
      };

      const q2: Question = {
        id: 'Q2',
        source: 'T',
        sourceReference: 'R',
        subject: 'Analog Circuits',
        topic: 'Op-Amp',
        type: 'NAT',
        marks: 2,
        negativeMarks: 0,
        statement: 'Q2',
        officialAnswer: [10, 10],
        detailedSolution: {} as any,
        solutionVerificationStatus: 'verified',
        provenance: 'T',
        licence: 'CC',
        difficulty: 'Easy',
        tags: [],
        estimatedSolvingTimeSeconds: 60,
        provenanceType: 'authored_practice',
      };

      // Q1 correct (+1), Q2 incorrect (0)
      const answers = { Q1: 'A', Q2: '5' };
      const score = evaluateTestScore([q1, q2], answers);

      expect(score.marksObtained).toBe(1);
      expect(score.totalMarks).toBe(3);
      expect(score.correctCount).toBe(1);
      expect(score.incorrectCount).toBe(1);
      expect(score.skippedCount).toBe(0);
      expect(score.accuracyPercentage).toBe(50);
      expect(score.subjectScores['Analog Circuits'].marksObtained).toBe(1);
    });
  });
});

