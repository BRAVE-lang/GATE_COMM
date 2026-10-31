import { Question, SubjectName } from './question';

export interface PracticeTestConfig {
  id: string;
  title: string;
  subjectFilter?: SubjectName[];
  topicFilter?: string[];
  questionCount: number;
  timeLimitMinutes: number;
  mode: 'learn' | 'exam';
  difficulty?: 'All' | 'Easy' | 'Medium' | 'Hard';
}

export interface TestSubjectScore {
  subject: SubjectName;
  marksObtained: number;
  totalMarks: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  totalQuestions: number;
}

export interface TestScoreResult {
  marksObtained: number;
  totalMarks: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  accuracyPercentage: number;
  timeTakenSeconds: number;
  subjectScores: Record<string, TestSubjectScore>;
}

export interface PracticeTestSession {
  id: string;
  config: PracticeTestConfig;
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<string, string | string[] | number | null>;
  markedForReview: Record<string, boolean>;
  questionStatus: Record<string, 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_and_marked'>;
  timeSpentSeconds: Record<string, number>;
  totalRemainingSeconds: number;
  status: 'in_progress' | 'submitted' | 'paused';
  startedAt: number;
  completedAt?: number;
  result?: TestScoreResult;
}

