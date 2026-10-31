import { Question } from '../../types/question';
import { DuplicateDetectionResult } from './types';

export class QuestionDeduplicator {
  private threshold: number;

  constructor(threshold = 0.82) {
    this.threshold = threshold;
  }

  /**
   * Normalizes question statement text by removing LaTeX markup, punctuation,
   * extra whitespace, and converting to lowercase for similarity matching.
   */
  public normalizeText(text: string): string {
    if (!text) return '';
    return text
      .toLowerCase()
      // Remove display and inline math delimiters
      .replace(/\$\$/g, ' ')
      .replace(/\$/g, ' ')
      // Strip common LaTeX commands like \frac, \text, \Omega, etc.
      .replace(/\\[a-zA-Z]+/g, ' ')
      // Remove non-alphanumeric characters (keep basic numbers and spaces)
      .replace(/[^a-z0-9\s]/g, ' ')
      // Collapse whitespace
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Generates a 32-bit FNV-1a hash of the normalized statement.
   */
  public getHash(text: string): string {
    const normalized = this.normalizeText(text);
    let hash = 2166136261;
    for (let i = 0; i < normalized.length; i++) {
      hash ^= normalized.charCodeAt(i);
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    return (hash >>> 0).toString(16);
  }

  /**
   * Computes Jaccard word-level similarity between two statements.
   */
  public computeJaccardSimilarity(textA: string, textB: string): number {
    const normA = this.normalizeText(textA);
    const normB = this.normalizeText(textB);

    if (normA === normB && normA.length > 0) return 1.0;

    const wordsA = new Set(normA.split(' ').filter((w) => w.length > 2));
    const wordsB = new Set(normB.split(' ').filter((w) => w.length > 2));

    if (wordsA.size === 0 || wordsB.size === 0) return 0;

    let intersectionCount = 0;
    wordsA.forEach((w) => {
      if (wordsB.has(w)) intersectionCount++;
    });

    const unionCount = wordsA.size + wordsB.size - intersectionCount;
    return unionCount > 0 ? intersectionCount / unionCount : 0;
  }

  /**
   * Checks whether a candidate question is a duplicate of any question in the existing repository.
   */
  public checkDuplicate(candidateStatement: string, existingQuestions: Question[]): DuplicateDetectionResult {
    const candidateHash = this.getHash(candidateStatement);

    let maxSim = 0;
    let duplicateOfId: string | undefined;

    for (const q of existingQuestions) {
      // 1. Exact hash check
      const qHash = q.importMetadata?.hash || this.getHash(q.statement);
      if (candidateHash === qHash) {
        return {
          isDuplicate: true,
          duplicateOfId: q.id,
          similarityScore: 1.0,
          reason: `Exact statement fingerprint match with question ${q.id} (${q.source})`,
        };
      }

      // 2. Fuzzy Jaccard similarity check
      const sim = this.computeJaccardSimilarity(candidateStatement, q.statement);
      if (sim > maxSim) {
        maxSim = sim;
        duplicateOfId = q.id;
      }

      if (sim >= this.threshold) {
        return {
          isDuplicate: true,
          duplicateOfId: q.id,
          similarityScore: Math.round(sim * 100) / 100,
          reason: `High fuzzy similarity (${Math.round(sim * 100)}%) with question ${q.id}`,
        };
      }
    }

    return {
      isDuplicate: false,
      similarityScore: Math.round(maxSim * 100) / 100,
    };
  }
}

export const questionDeduplicator = new QuestionDeduplicator();

