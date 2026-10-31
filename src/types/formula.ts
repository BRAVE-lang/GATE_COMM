import { SubjectName } from './question';

export interface FormulaTerm {
  symbol: string;
  meaning: string;
  unit?: string;
}

export interface FormulaItem {
  id: string;
  subject: SubjectName;
  topic: string;
  title: string;
  latex: string;
  explanation: string;
  terms: FormulaTerm[];
  importantNotes?: string[];
  isHighYield?: boolean;
}

