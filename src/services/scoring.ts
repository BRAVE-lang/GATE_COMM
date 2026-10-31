import { Question, QuestionType } from '../types/question';
import { TestScoreResult, TestSubjectScore } from '../types/test';

/**
 * Checks if the user's answer matches the official answer for a question.
 */
export function checkAnswer(
  type: QuestionType,
  userAnswer: string | string[] | number | null | undefined,
  officialAnswer: string | string[] | [number, number]
): boolean {
  if (userAnswer === null || userAnswer === undefined || userAnswer === '') {
    return false;
  }

  if (type === 'MCQ') {
    if (typeof userAnswer !== 'string' || typeof officialAnswer !== 'string') {
      return false;
    }
    return userAnswer.trim().toUpperCase() === officialAnswer.trim().toUpperCase();
  }

  if (type === 'MSQ') {
    if (!Array.isArray(userAnswer) || !Array.isArray(officialAnswer)) {
      return false;
    }
    if (userAnswer.length === 0 || userAnswer.length !== officialAnswer.length) {
      return false;
    }
    const sortedUser = [...userAnswer].map((s) => String(s).trim().toUpperCase()).sort();
    const sortedOfficial = [...officialAnswer].map((s) => String(s).trim().toUpperCase()).sort();
    return sortedUser.every((val, idx) => val === sortedOfficial[idx]);
  }

  if (type === 'NAT') {
    const num = typeof userAnswer === 'number' ? userAnswer : parseFloat(String(userAnswer));
    if (isNaN(num)) {
      return false;
    }

    if (Array.isArray(officialAnswer)) {
      const min = Number(officialAnswer[0]);
      const max = Number(officialAnswer[1] !== undefined ? officialAnswer[1] : officialAnswer[0]);
      // Allow slight floating point tolerance 1e-4
      return num >= (min - 1e-4) && num <= (max + 1e-4);
    } else {
      const target = parseFloat(String(officialAnswer));
      return Math.abs(num - target) <= 0.02;
    }
  }

  return false;
}

/**
 * Calculates the marks earned for an individual question according to official GATE rules:
 * - MCQ: +marks if correct, -negativeMarks if incorrect, 0 if unattempted.
 * - MSQ: +marks if all correct selected, 0 if incorrect or unattempted. (No negative marks)
 * - NAT: +marks if within numerical tolerance, 0 if incorrect or unattempted. (No negative marks)
 */
export function calculateQuestionMarks(
  question: Question,
  userAnswer: string | string[] | number | null | undefined
): { marksEarned: number; isAttempted: boolean; isCorrect: boolean } {
  const isAttempted =
    userAnswer !== null &&
    userAnswer !== undefined &&
    userAnswer !== '' &&
    !(Array.isArray(userAnswer) && userAnswer.length === 0);

  if (!isAttempted) {
    return { marksEarned: 0, isAttempted: false, isCorrect: false };
  }

  const isCorrect = checkAnswer(question.type, userAnswer, question.officialAnswer);

  if (isCorrect) {
    return { marksEarned: question.marks, isAttempted: true, isCorrect: true };
  }

  // Question is attempted but incorrect
  if (question.type === 'MCQ') {
    const deduction = question.negativeMarks || (question.marks === 1 ? 0.33 : 0.66);
    return { marksEarned: -deduction, isAttempted: true, isCorrect: false };
  }

  // NAT and MSQ have NO negative marking in GATE
  return { marksEarned: 0, isAttempted: true, isCorrect: false };
}

/**
 * Computes complete test metrics for a test session.
 */
export function evaluateTestScore(
  questions: Question[],
  userAnswers: Record<string, string | string[] | number | null>,
  timeSpentSeconds: Record<string, number> = {}
): TestScoreResult {
  let marksObtained = 0;
  let totalMarks = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;
  let totalTime = 0;

  const subjectScores: Record<string, TestSubjectScore> = {};

  for (const q of questions) {
    totalMarks += q.marks;
    const ans = userAnswers[q.id];
    const { marksEarned, isAttempted, isCorrect } = calculateQuestionMarks(q, ans);

    marksObtained += marksEarned;
    const qTime = timeSpentSeconds[q.id] || 0;
    totalTime += qTime;

    if (!subjectScores[q.subject]) {
      subjectScores[q.subject] = {
        subject: q.subject,
        marksObtained: 0,
        totalMarks: 0,
        correctCount: 0,
        incorrectCount: 0,
        skippedCount: 0,
        totalQuestions: 0,
      };
    }

    const s = subjectScores[q.subject];
    s.totalMarks += q.marks;
    s.marksObtained += marksEarned;
    s.totalQuestions += 1;

    if (!isAttempted) {
      skippedCount += 1;
      s.skippedCount += 1;
    } else if (isCorrect) {
      correctCount += 1;
      s.correctCount += 1;
    } else {
      incorrectCount += 1;
      s.incorrectCount += 1;
    }
  }

  const attemptedCount = correctCount + incorrectCount;
  const accuracyPercentage = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;

  return {
    marksObtained: Math.round(marksObtained * 100) / 100,
    totalMarks,
    correctCount,
    incorrectCount,
    skippedCount,
    accuracyPercentage: Math.round(accuracyPercentage * 10) / 10,
    timeTakenSeconds: totalTime,
    subjectScores,
  };
}

