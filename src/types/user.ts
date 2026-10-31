import { SubjectName } from './question';

export interface BookmarkItem {
  questionId: string;
  addedAt: number;
  note?: string;
  tags?: string[];
}

export type ErrorCategory =
  | 'calculation_error'
  | 'concept_gap'
  | 'formula_forgotten'
  | 'misread_question'
  | 'time_pressure'
  | 'silly_mistake';

export interface NotebookEntry {
  questionId: string;
  addedAt: number;
  selectedAnswer?: string | string[] | number | null;
  errorCategory: ErrorCategory;
  userNotes: string;
  reviewedCount: number;
  mastered: boolean;
  lastReviewedAt?: number;
}

export interface QuestionAttempt {
  questionId: string;
  subject: SubjectName;
  isCorrect: boolean;
  userResponse: string | string[] | number | null;
  timeTakenSeconds: number;
  timestamp: number;
  mode: 'practice' | 'test';
}

export interface UserStats {
  totalAttempted: number;
  totalCorrect: number;
  totalTimeSeconds: number;
  streakDays: number;
  lastActiveDate: string;
  subjectAccuracy: Record<string, { attempted: number; correct: number; timeSeconds: number }>;
}

export interface OfflinePackage {
  subject: SubjectName;
  questionCount: number;
  downloadedAt: number;
  sizeBytes: number;
  version: string;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'normal' | 'large' | 'extra-large';
  learnModeDefault: boolean;
  hapticFeedback: boolean;
  scientificCalculatorFloating: boolean;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  aiExplanationApiEndpoint?: string;
}

