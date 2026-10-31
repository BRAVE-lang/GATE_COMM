import { BookmarkItem, NotebookEntry, QuestionAttempt, UserStats, OfflinePackage, AppSettings } from '../types/user';
import { PracticeTestSession } from '../types/test';
import { Question, SubjectName } from '../types/question';
import { SAMPLE_QUESTIONS } from '../data/sampleQuestions';
import { AUTHENTIC_GATE_EC_PYQS } from '../data/authenticPyqs';
import { ALL_PRACTICE_QUESTIONS } from '../data/practice';

const STORAGE_KEYS = {
  BOOKMARKS: 'gate_ec_bookmarks',
  NOTEBOOK: 'gate_ec_notebook',
  ATTEMPTS: 'gate_ec_attempts',
  STATS: 'gate_ec_stats',
  TEST_SESSIONS: 'gate_ec_test_sessions',
  ACTIVE_TEST_ID: 'gate_ec_active_test_id',
  OFFLINE_PACKAGES: 'gate_ec_offline_packages',
  CUSTOM_QUESTIONS: 'gate_ec_custom_questions',
  SETTINGS: 'gate_ec_settings',
};

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'system',
  fontSize: 'normal',
  learnModeDefault: true,
  hapticFeedback: true,
  scientificCalculatorFloating: true,
};

const DEFAULT_STATS: UserStats = {
  totalAttempted: 0,
  totalCorrect: 0,
  totalTimeSeconds: 0,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  subjectAccuracy: {},
};

// Safe storage wrapper
export const StorageService = {
  // --- SETTINGS ---
  getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: Partial<AppSettings>): AppSettings {
    const current = this.getSettings();
    const updated = { ...current, ...settings };
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving settings', e);
    }
    return updated;
  },

  // --- BOOKMARKS ---
  getBookmarks(): BookmarkItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  isBookmarked(questionId: string): boolean {
    const list = this.getBookmarks();
    return list.some((b) => b.questionId === questionId);
  },

  toggleBookmark(questionId: string, note?: string): boolean {
    const list = this.getBookmarks();
    const index = list.findIndex((b) => b.questionId === questionId);
    let isNowBookmarked = false;

    if (index >= 0) {
      list.splice(index, 1);
      isNowBookmarked = false;
    } else {
      list.push({ questionId, addedAt: Date.now(), note });
      isNowBookmarked = true;
    }

    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(list));
    } catch (e) {
      console.error('Error saving bookmarks', e);
    }
    return isNowBookmarked;
  },

  // --- INCORRECT QUESTION NOTEBOOK ---
  getNotebook(): NotebookEntry[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.NOTEBOOK);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addToNotebook(entry: Omit<NotebookEntry, 'addedAt' | 'reviewedCount' | 'mastered'>): void {
    const list = this.getNotebook();
    const index = list.findIndex((n) => n.questionId === entry.questionId);

    if (index >= 0) {
      list[index] = {
        ...list[index],
        ...entry,
        lastReviewedAt: Date.now(),
      };
    } else {
      list.unshift({
        ...entry,
        addedAt: Date.now(),
        reviewedCount: 0,
        mastered: false,
      });
    }

    try {
      localStorage.setItem(STORAGE_KEYS.NOTEBOOK, JSON.stringify(list));
    } catch (e) {
      console.error('Error saving notebook', e);
    }
  },

  updateNotebookEntry(questionId: string, updates: Partial<NotebookEntry>): void {
    const list = this.getNotebook();
    const index = list.findIndex((n) => n.questionId === questionId);
    if (index >= 0) {
      list[index] = { ...list[index], ...updates };
      try {
        localStorage.setItem(STORAGE_KEYS.NOTEBOOK, JSON.stringify(list));
      } catch (e) {
        console.error('Error updating notebook', e);
      }
    }
  },

  removeFromNotebook(questionId: string): void {
    const list = this.getNotebook().filter((n) => n.questionId !== questionId);
    try {
      localStorage.setItem(STORAGE_KEYS.NOTEBOOK, JSON.stringify(list));
    } catch (e) {
      console.error('Error removing from notebook', e);
    }
  },

  // --- ATTEMPTS & STATS ---
  getAttempts(): QuestionAttempt[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  recordAttempt(attempt: QuestionAttempt): void {
    const attempts = this.getAttempts();
    attempts.unshift(attempt);
    // Keep last 500 attempts
    if (attempts.length > 500) attempts.length = 500;

    try {
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
    } catch (e) {
      console.error('Error saving attempts', e);
    }

    // Update aggregated stats
    const stats = this.getStats();
    stats.totalAttempted += 1;
    if (attempt.isCorrect) stats.totalCorrect += 1;
    stats.totalTimeSeconds += attempt.timeTakenSeconds;

    const today = new Date().toISOString().split('T')[0];
    if (stats.lastActiveDate !== today) {
      // Check if consecutive day
      const last = new Date(stats.lastActiveDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr.getTime() - last.getTime()) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        stats.streakDays += 1;
      } else if (diffDays > 1) {
        stats.streakDays = 1;
      }
      stats.lastActiveDate = today;
    }

    if (!stats.subjectAccuracy[attempt.subject]) {
      stats.subjectAccuracy[attempt.subject] = { attempted: 0, correct: 0, timeSeconds: 0 };
    }
    const subStat = stats.subjectAccuracy[attempt.subject];
    subStat.attempted += 1;
    if (attempt.isCorrect) subStat.correct += 1;
    subStat.timeSeconds += attempt.timeTakenSeconds;

    try {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (e) {
      console.error('Error updating stats', e);
    }
  },

  getStats(): UserStats {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STATS);
      return data ? { ...DEFAULT_STATS, ...JSON.parse(data) } : DEFAULT_STATS;
    } catch {
      return DEFAULT_STATS;
    }
  },

  // --- PRACTICE TEST SESSIONS ---
  getTestSessions(): PracticeTestSession[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TEST_SESSIONS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveTestSession(session: PracticeTestSession): void {
    const list = this.getTestSessions();
    const index = list.findIndex((s) => s.id === session.id);
    if (index >= 0) {
      list[index] = session;
    } else {
      list.unshift(session);
    }
    try {
      localStorage.setItem(STORAGE_KEYS.TEST_SESSIONS, JSON.stringify(list));
      if (session.status === 'in_progress') {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_TEST_ID, session.id);
      } else if (session.status === 'submitted') {
        const active = localStorage.getItem(STORAGE_KEYS.ACTIVE_TEST_ID);
        if (active === session.id) {
          localStorage.removeItem(STORAGE_KEYS.ACTIVE_TEST_ID);
        }
      }
    } catch (e) {
      console.error('Error saving test session', e);
    }
  },

  getActiveTestSession(): PracticeTestSession | null {
    try {
      const activeId = localStorage.getItem(STORAGE_KEYS.ACTIVE_TEST_ID);
      if (!activeId) return null;
      const list = this.getTestSessions();
      return list.find((s) => s.id === activeId && s.status === 'in_progress') || null;
    } catch {
      return null;
    }
  },

  deleteTestSession(id: string): void {
    const list = this.getTestSessions().filter((s) => s.id !== id);
    try {
      localStorage.setItem(STORAGE_KEYS.TEST_SESSIONS, JSON.stringify(list));
      if (localStorage.getItem(STORAGE_KEYS.ACTIVE_TEST_ID) === id) {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE_TEST_ID);
      }
    } catch (e) {
      console.error('Error deleting test session', e);
    }
  },

  // --- OFFLINE PACKAGES & QUESTION BANK ---
  getOfflinePackages(): OfflinePackage[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.OFFLINE_PACKAGES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveOfflinePackage(pkg: OfflinePackage): void {
    const list = this.getOfflinePackages();
    const index = list.findIndex((p) => p.subject === pkg.subject);
    if (index >= 0) {
      list[index] = pkg;
    } else {
      list.push(pkg);
    }
    try {
      localStorage.setItem(STORAGE_KEYS.OFFLINE_PACKAGES, JSON.stringify(list));
    } catch (e) {
      console.error('Error saving offline package', e);
    }
  },

  removeOfflinePackage(subject: SubjectName): void {
    const list = this.getOfflinePackages().filter((p) => p.subject !== subject);
    try {
      localStorage.setItem(STORAGE_KEYS.OFFLINE_PACKAGES, JSON.stringify(list));
    } catch (e) {
      console.error('Error removing offline package', e);
    }
  },

  // Question bank combining authentic PYQs, base sample questions, and practice question bank
  getAllQuestions(): Question[] {
    try {
      const custom = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
      const customQuestions: Question[] = custom ? JSON.parse(custom) : [];
      // Deduplicate by ID
      const map = new Map<string, Question>();
      for (const q of AUTHENTIC_GATE_EC_PYQS) {
        map.set(q.id, q);
      }
      for (const q of SAMPLE_QUESTIONS) {
        map.set(q.id, q);
      }
      for (const q of ALL_PRACTICE_QUESTIONS) {
        map.set(q.id, q);
      }
      for (const q of customQuestions) {
        map.set(q.id, q);
      }
      return Array.from(map.values());
    } catch {
      return [...AUTHENTIC_GATE_EC_PYQS, ...SAMPLE_QUESTIONS, ...ALL_PRACTICE_QUESTIONS];
    }
  },

  getQuestionById(id: string): Question | undefined {
    return this.getAllQuestions().find((q) => q.id === id);
  },

  // Reset or export/import
  clearAllData(): void {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
  },

  exportUserData(): string {
    const data = {
      bookmarks: this.getBookmarks(),
      notebook: this.getNotebook(),
      attempts: this.getAttempts(),
      stats: this.getStats(),
      settings: this.getSettings(),
      offlinePackages: this.getOfflinePackages(),
      exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(data, null, 2);
  },

  importUserData(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.bookmarks) localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(parsed.bookmarks));
      if (parsed.notebook) localStorage.setItem(STORAGE_KEYS.NOTEBOOK, JSON.stringify(parsed.notebook));
      if (parsed.attempts) localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(parsed.attempts));
      if (parsed.stats) localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(parsed.stats));
      if (parsed.settings) localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(parsed.settings));
      return true;
    } catch (e) {
      console.error('Import failed', e);
      return false;
    }
  },
};

