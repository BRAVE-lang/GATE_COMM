export type SubjectName =
  | 'Engineering Mathematics'
  | 'General Aptitude'
  | 'Network Theory'
  | 'Signals and Systems'
  | 'Electronic Devices'
  | 'Analog Circuits'
  | 'Digital Circuits'
  | 'Control Systems'
  | 'Communications'
  | 'Electromagnetics';

export type QuestionType = 'MCQ' | 'MSQ' | 'NAT';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export type ProvenanceType = 'authentic_pyq' | 'authored_practice' | 'ai_generated_practice';

export type VerificationStatus =
  | 'draft'
  | 'answer_checked'
  | 'solution_verified'
  | 'needs_review'
  | 'verified'
  | 'provisional'
  | 'community_reviewed';

export interface Option {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface FormulaExplanation {
  formula: string;
  terms: {
    term: string;
    explanation: string;
  }[];
}

export interface WorkedSolution {
  understandingTheQuestion: string;
  givenInformationAndAssumptions: string[];
  relevantConcept: string;
  formulaAndTermExplanation: FormulaExplanation[];
  stepByStepDerivation: string[];
  finalAnswerWithUnits: string;
  alternativeApproachOrShortcut?: string;
  commonMistakes: string[];
  relatedQuestions?: {
    id: string;
    title: string;
  }[];
}

export interface QuestionFigure {
  type: 'svg' | 'image';
  content: string; // SVG markup or image URL / data URL
  caption?: string;
  id?: string;
  alt?: string;
}

export interface QuestionImportMetadata {
  rawSourcePaper?: string;
  rawQuestionNumber?: number;
  officialAnswerKeyRef?: string;
  hash?: string;
  extractedAt?: string;
  independentCheckNotes?: string;
  validationStatus?: 'pass' | 'warning' | 'fail';
  validationErrors?: string[];
}

export interface QuestionFilterCriteria {
  subject?: SubjectName | 'All';
  topic?: string | 'All';
  examYear?: number | 'All';
  type?: QuestionType | 'All';
  difficulty?: DifficultyLevel | 'All';
  provenanceType?: ProvenanceType | 'All';
  verificationStatus?: VerificationStatus | 'All';
  searchQuery?: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface Question {
  id: string;
  source: string;
  sourceReference: string;
  examYear?: number;
  examSession?: string;
  subject: SubjectName;
  topic: string;
  type: QuestionType;
  marks: 1 | 2;
  negativeMarks: number;
  statement: string; // May include LaTeX math $...$ and $$...$$
  figure?: QuestionFigure | null;
  figures?: QuestionFigure[];
  options?: Option[] | null; // For MCQ & MSQ
  officialAnswer: string | string[] | [number, number]; // MCQ: 'B', MSQ: ['A', 'C'], NAT: [min, max] or [value, value]
  detailedSolution: WorkedSolution;
  solutionVerificationStatus: VerificationStatus;
  provenance: string;
  licence: string;
  difficulty: DifficultyLevel;
  tags: string[];
  estimatedSolvingTimeSeconds: number;
  provenanceType: ProvenanceType;
  importMetadata?: QuestionImportMetadata;
}

export interface SubjectMetadata {
  id: SubjectName;
  name: SubjectName;
  shortName: string;
  description: string;
  typicalWeightageMarks: string; // e.g. "11 - 13 Marks"
  icon: string; // Lucide icon identifier
  color: string; // Tailwind color class or hex
  topics: {
    name: string;
    description: string;
    estimatedWeightage: string;
  }[];
}

