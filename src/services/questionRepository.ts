import { Question, SubjectName, QuestionFilterCriteria, PaginatedResult } from '../types/question';
import { SAMPLE_QUESTIONS } from '../data/sampleQuestions';
import { AUTHENTIC_GATE_EC_PYQS } from '../data/authenticPyqs';
import { ALL_PRACTICE_QUESTIONS } from '../data/practice';
import { questionImportPipeline } from './pipeline/importer';
import { SubjectCoverageReport } from './pipeline/types';

const STORAGE_CUSTOM_QUESTIONS_KEY = 'gate_ec_custom_questions';

export class QuestionRepository {
  private baseQuestions: Question[] = [];

  constructor() {
    this.init();
  }

  private init() {
    // Combine authentic PYQs with authored practice question bank and sample items
    const combined = [...AUTHENTIC_GATE_EC_PYQS, ...SAMPLE_QUESTIONS, ...ALL_PRACTICE_QUESTIONS];
    // Deduplicate on initialization
    const uniqueMap = new Map<string, Question>();
    for (const q of combined) {
      uniqueMap.set(q.id, q);
    }
    this.baseQuestions = Array.from(uniqueMap.values());
  }

  /**
   * Retrieves all available questions (base authentic PYQs + sample authored + locally stored custom items).
   */
  public getAll(): Question[] {
    try {
      const stored = localStorage.getItem(STORAGE_CUSTOM_QUESTIONS_KEY);
      const custom: Question[] = stored ? JSON.parse(stored) : [];

      const map = new Map<string, Question>();
      for (const q of this.baseQuestions) {
        map.set(q.id, q);
      }
      for (const q of custom) {
        map.set(q.id, q);
      }
      return Array.from(map.values());
    } catch {
      return this.baseQuestions;
    }
  }

  /**
   * Retrieves a question by unique ID.
   */
  public getById(id: string): Question | undefined {
    return this.getAll().find((q) => q.id === id);
  }

  /**
   * Performs advanced filtering, search, and pagination on the question bank.
   */
  public query(criteria: QuestionFilterCriteria, page = 1, pageSize = 10): PaginatedResult<Question> {
    const all = this.getAll();

    const filtered = all.filter((q) => {
      // 1. Subject filter
      if (criteria.subject && criteria.subject !== 'All' && q.subject !== criteria.subject) {
        return false;
      }

      // 2. Topic filter
      if (criteria.topic && criteria.topic !== 'All' && q.topic.toLowerCase() !== criteria.topic.toLowerCase()) {
        return false;
      }

      // 3. Exam Year filter
      if (criteria.examYear && criteria.examYear !== 'All') {
        if (q.examYear !== Number(criteria.examYear)) return false;
      }

      // 4. Question Type (MCQ, MSQ, NAT)
      if (criteria.type && criteria.type !== 'All' && q.type !== criteria.type) {
        return false;
      }

      // 5. Difficulty
      if (criteria.difficulty && criteria.difficulty !== 'All' && q.difficulty !== criteria.difficulty) {
        return false;
      }

      // 6. Provenance Type
      if (criteria.provenanceType && criteria.provenanceType !== 'All' && q.provenanceType !== criteria.provenanceType) {
        return false;
      }

      // 7. Verification Status
      if (criteria.verificationStatus && criteria.verificationStatus !== 'All' && q.solutionVerificationStatus !== criteria.verificationStatus) {
        return false;
      }

      // 8. Full-text search
      if (criteria.searchQuery && criteria.searchQuery.trim().length > 0) {
        const query = criteria.searchQuery.toLowerCase().trim();
        const inStatement = q.statement.toLowerCase().includes(query);
        const inTopic = q.topic.toLowerCase().includes(query);
        const inTags = q.tags.some((t) => t.toLowerCase().includes(query));
        const inSource = q.source.toLowerCase().includes(query);
        const inId = q.id.toLowerCase().includes(query);
        if (!inStatement && !inTopic && !inTags && !inSource && !inId) {
          return false;
        }
      }

      return true;
    });

    const total = filtered.length;
    const totalPages = Math.ceil(total / pageSize) || 1;
    const safePage = Math.max(1, Math.min(page, totalPages));
    const offset = (safePage - 1) * pageSize;
    const items = filtered.slice(offset, offset + pageSize);

    return {
      items,
      total,
      page: safePage,
      pageSize,
      totalPages,
    };
  }

  /**
   * Adds newly imported questions to the local repository.
   */
  public addBatch(newQuestions: Question[]): void {
    const existing = this.getAll();
    const map = new Map<string, Question>();
    existing.forEach((q) => map.set(q.id, q));
    newQuestions.forEach((q) => map.set(q.id, q));

    const updated = Array.from(map.values());
    try {
      localStorage.setItem(STORAGE_CUSTOM_QUESTIONS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save questions to local storage', e);
    }
  }

  /**
   * Computes the current topic and subject coverage report.
   */
  public getCoverageReport(): SubjectCoverageReport[] {
    return questionImportPipeline.generateCoverageReport(this.getAll());
  }

  /**
   * Returns statistics on the question bank.
   */
  public getStatistics(): {
    totalQuestions: number;
    authenticPyqs: number;
    authoredPractice: number;
    aiPractice: number;
    verifiedSolutions: number;
    answerChecked: number;
    provisionalSolutions: number;
    bySubject: Record<string, number>;
    byType: Record<string, number>;
  } {
    const all = this.getAll();
    const stats = {
      totalQuestions: all.length,
      authenticPyqs: all.filter((q) => q.provenanceType === 'authentic_pyq').length,
      authoredPractice: all.filter((q) => q.provenanceType === 'authored_practice').length,
      aiPractice: all.filter((q) => q.provenanceType === 'ai_generated_practice').length,
      verifiedSolutions: all.filter((q) => q.solutionVerificationStatus === 'solution_verified' || q.solutionVerificationStatus === 'verified').length,
      answerChecked: all.filter((q) => q.solutionVerificationStatus === 'answer_checked').length,
      provisionalSolutions: all.filter((q) => q.solutionVerificationStatus === 'provisional' || q.solutionVerificationStatus === 'draft').length,
      bySubject: {} as Record<string, number>,
      byType: {} as Record<string, number>,
    };

    all.forEach((q) => {
      stats.bySubject[q.subject] = (stats.bySubject[q.subject] || 0) + 1;
      stats.byType[q.type] = (stats.byType[q.type] || 0) + 1;
    });

    return stats;
  }
}

export const questionRepository = new QuestionRepository();

