import { RawImportQuestion } from './types';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { SubjectName } from '../../types/question';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  sanitizedNegativeMarks: number;
  sanitizedOfficialAnswer: string | string[] | [number, number];
}

const VALID_SUBJECT_NAMES = new Set(GATE_EC_SUBJECTS.map((s) => s.name));

export class QuestionValidator {
  /**
   * Validates a raw question against official GATE examination and platform data standards.
   */
  public validate(raw: RawImportQuestion): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // 1. Statement check
    if (!raw.statement || raw.statement.trim().length < 15) {
      errors.push('Question statement is missing or unrealistically short (< 15 characters).');
    }

    // 2. Subject check
    if (!raw.subject || !VALID_SUBJECT_NAMES.has(raw.subject as SubjectName)) {
      errors.push(`Invalid or unrecognised subject: "${raw.subject}". Must be one of the 10 official GATE EC subjects.`);
    }

    // 3. Topic check
    if (!raw.topic || raw.topic.trim().length === 0) {
      errors.push('Topic is required for granular syllabus classification.');
    }

    // 4. Question Type & Marks
    if (!['MCQ', 'MSQ', 'NAT'].includes(raw.type)) {
      errors.push(`Invalid question type: "${raw.type}". Supported types are MCQ, MSQ, and NAT.`);
    }

    if (raw.marks !== 1 && raw.marks !== 2) {
      errors.push(`Invalid marks: ${raw.marks}. In GATE, questions carry strictly 1 or 2 marks.`);
    }

    // Enforce official negative marking
    let sanitizedNegativeMarks = 0;
    if (raw.type === 'MCQ') {
      sanitizedNegativeMarks = raw.marks === 1 ? 0.33 : 0.66;
    } else {
      sanitizedNegativeMarks = 0; // Strictly 0 for NAT and MSQ in GATE
      if (raw.negativeMarks && raw.negativeMarks > 0) {
        warnings.push(`Negative marks of ${raw.negativeMarks} corrected to 0 for ${raw.type} according to official GATE guidelines.`);
      }
    }

    // 5. Options Validation for MCQ / MSQ
    if (raw.type === 'MCQ' || raw.type === 'MSQ') {
      if (!raw.options || !Array.isArray(raw.options) || raw.options.length < 2) {
        errors.push(`${raw.type} questions must contain multiple choice options (typically A, B, C, D).`);
      } else {
        const optionIds = new Set(raw.options.map((o) => o.id));
        if (raw.options.some((o) => !o.text || o.text.trim().length === 0)) {
          errors.push('One or more options have empty text.');
        }
        if (raw.type === 'MCQ' && raw.options.length !== 4) {
          warnings.push(`Standard GATE MCQ typically has 4 options; found ${raw.options.length}.`);
        }
      }
    }

    // 6. Official Answer Validation
    let sanitizedOfficialAnswer: string | string[] | [number, number] = '';

    if (raw.officialAnswerKey === undefined || raw.officialAnswerKey === null || raw.officialAnswerKey === '') {
      errors.push('Official answer key is required. Unanswered questions cannot be imported.');
    } else if (raw.type === 'MCQ') {
      const ans = String(raw.officialAnswerKey).trim().toUpperCase();
      if (!['A', 'B', 'C', 'D'].includes(ans)) {
        errors.push(`Invalid MCQ answer key "${raw.officialAnswerKey}". Must be one of A, B, C, D.`);
      }
      sanitizedOfficialAnswer = ans;
    } else if (raw.type === 'MSQ') {
      let ansList: string[] = [];
      if (Array.isArray(raw.officialAnswerKey)) {
        ansList = raw.officialAnswerKey.map((s) => String(s).trim().toUpperCase());
      } else if (typeof raw.officialAnswerKey === 'string') {
        ansList = raw.officialAnswerKey
          .split(/[,;\s]+/)
          .map((s) => s.trim().toUpperCase())
          .filter(Boolean);
      }
      if (ansList.length === 0 || !ansList.every((opt) => ['A', 'B', 'C', 'D'].includes(opt))) {
        errors.push(`Invalid MSQ answer key "${JSON.stringify(raw.officialAnswerKey)}". Must be a subset of [A, B, C, D].`);
      }
      sanitizedOfficialAnswer = Array.from(new Set(ansList)).sort();
    } else if (raw.type === 'NAT') {
      if (Array.isArray(raw.officialAnswerKey) && raw.officialAnswerKey.length === 2) {
        const min = Number(raw.officialAnswerKey[0]);
        const max = Number(raw.officialAnswerKey[1]);
        if (isNaN(min) || isNaN(max)) {
          errors.push(`Invalid NAT range values: [${raw.officialAnswerKey[0]}, ${raw.officialAnswerKey[1]}].`);
        } else if (min > max) {
          errors.push(`NAT range lower bound (${min}) is greater than upper bound (${max}).`);
        } else {
          sanitizedOfficialAnswer = [min, max];
        }
      } else {
        const num = Number(raw.officialAnswerKey);
        if (isNaN(num)) {
          errors.push(`Invalid NAT numerical answer "${raw.officialAnswerKey}". Must be a valid number or [min, max] range.`);
        } else {
          sanitizedOfficialAnswer = [num, num];
        }
      }
    }

    // 7. Detailed Solution Quality Check
    if (!raw.detailedSolution) {
      errors.push('Detailed worked solution is required. Solution cannot be null or empty.');
    } else {
      const sol = raw.detailedSolution;
      if (!sol.understandingTheQuestion || sol.understandingTheQuestion.trim().length < 10) {
        errors.push('Solution missing section: "Understanding the question".');
      }
      if (!sol.relevantConcept || sol.relevantConcept.trim().length < 10) {
        errors.push('Solution missing section: "Relevant concept".');
      }
      if (!sol.stepByStepDerivation || !Array.isArray(sol.stepByStepDerivation) || sol.stepByStepDerivation.length < 2) {
        errors.push('Solution step-by-step derivation must contain at least 2 distinct calculation steps.');
      }
      if (!sol.finalAnswerWithUnits || sol.finalAnswerWithUnits.trim().length === 0) {
        errors.push('Solution missing final answer with explicit units.');
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      sanitizedNegativeMarks,
      sanitizedOfficialAnswer,
    };
  }
}

export const questionValidator = new QuestionValidator();

