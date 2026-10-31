import React from 'react';
import { WorkedSolution, VerificationStatus, ProvenanceType } from '../../types/question';
import { MathView } from '../common/MathView';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  AlertTriangle, 
  Compass, 
  Zap, 
  Layers, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';

interface DetailedSolutionViewerProps {
  solution: WorkedSolution;
  verificationStatus: VerificationStatus;
  provenance: string;
  provenanceType: ProvenanceType;
  officialAnswerText: string;
  onNavigateRelated?: (questionId: string) => void;
}

export const DetailedSolutionViewer: React.FC<DetailedSolutionViewerProps> = ({
  solution,
  verificationStatus,
  provenance,
  provenanceType,
  officialAnswerText,
  onNavigateRelated,
}) => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-100 text-sm leading-relaxed">
      {/* Verification & Provenance Badge Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-semibold capitalize text-emerald-700 dark:text-emerald-300">
            {verificationStatus.replace('_', ' ')} Solution
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-[11px] text-slate-600 dark:text-slate-400">
          <Info className="w-3.5 h-3.5" />
          <span className="font-medium truncate max-w-[240px] sm:max-w-md">{provenance}</span>
        </div>
      </div>

      {/* 1. Final Answer with Units Highlight Box */}
      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500/30 dark:border-emerald-500/20">
        <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-semibold mb-1">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span className="text-sm uppercase tracking-wide">Final Official Answer</span>
        </div>
        <div className="pl-7">
          <div className="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-100 font-mono">
            {solution.finalAnswerWithUnits || officialAnswerText}
          </div>
        </div>
      </div>

      {/* 2. Understanding The Question */}
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
          <HelpCircle className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-wider">1. Understanding the Question</h4>
        </div>
        <p className="text-slate-700 dark:text-slate-300 pl-6">
          <MathView content={solution.understandingTheQuestion} />
        </p>
      </div>

      {/* 3. Given Information and Assumptions */}
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
          <Layers className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-wider">2. Given Information & Assumptions</h4>
        </div>
        <ul className="pl-6 space-y-1.5 list-disc list-outside text-slate-700 dark:text-slate-300">
          {solution.givenInformationAndAssumptions.map((item, idx) => (
            <li key={idx} className="pl-1">
              <MathView content={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Relevant Concept */}
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="flex items-center space-x-2 text-violet-600 dark:text-violet-400 font-semibold mb-2">
          <Compass className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-wider">3. Relevant Core Concept</h4>
        </div>
        <div className="pl-6 text-slate-700 dark:text-slate-300 whitespace-pre-line">
          <MathView content={solution.relevantConcept} />
        </div>
      </div>

      {/* 5. Formula & Term Explanation */}
      {solution.formulaAndTermExplanation && solution.formulaAndTermExplanation.length > 0 && (
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
            <BookOpen className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider">4. Governing Formula & Term Definitions</h4>
          </div>
          <div className="space-y-4 pl-2 sm:pl-6">
            {solution.formulaAndTermExplanation.map((f, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                <div className="text-center py-2 text-base font-semibold text-indigo-700 dark:text-indigo-300 overflow-x-auto scrollbar-none">
                  <MathView content={`$$${f.formula}$$`} />
                </div>
                {f.terms.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700/60">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Where:</p>
                    <div className="grid grid-cols-1 gap-1 text-xs text-slate-600 dark:text-slate-300">
                      {f.terms.map((t, tidx) => (
                        <div key={tidx} className="flex items-baseline space-x-2">
                          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold min-w-[70px]">
                            <MathView content={`$${t.term}$`} />
                          </span>
                          <span className="text-slate-400">=</span>
                          <span>{t.explanation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Step-by-Step Derivation and Calculations */}
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
          <Zap className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-wider">5. Step-by-Step Derivation & Calculations</h4>
        </div>
        <div className="space-y-2.5 pl-2 sm:pl-6">
          {solution.stepByStepDerivation.map((step, idx) => (
            <div key={idx} className="flex items-start space-x-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold flex items-center justify-center mt-0.5 border border-slate-300 dark:border-slate-700">
                {idx + 1}
              </span>
              <div className="flex-1 text-slate-700 dark:text-slate-200 overflow-x-auto">
                <MathView content={step} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Alternative Approach or Shortcut */}
      {solution.alternativeApproachOrShortcut && (
        <div className="rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-300/60 dark:border-amber-700/40 p-4">
          <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-semibold mb-2">
            <Lightbulb className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider">6. Exam Shortcut / Alternative Approach</h4>
          </div>
          <p className="pl-6 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
            <MathView content={solution.alternativeApproachOrShortcut} />
          </p>
        </div>
      )}

      {/* 8. Common Mistakes */}
      {solution.commonMistakes && solution.commonMistakes.length > 0 && (
        <div className="rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-300/60 dark:border-rose-700/40 p-4">
          <div className="flex items-center space-x-2 text-rose-700 dark:text-rose-400 font-semibold mb-2">
            <AlertTriangle className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider">7. Common Mistakes & Pitfalls to Avoid</h4>
          </div>
          <ul className="pl-6 space-y-1 list-disc list-outside text-rose-900 dark:text-rose-200 text-xs sm:text-sm">
            {solution.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="pl-1">
                <MathView content={mistake} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 9. Related Questions */}
      {solution.relatedQuestions && solution.relatedQuestions.length > 0 && (
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">8. Related Practice Questions</h4>
          <div className="space-y-1.5">
            {solution.relatedQuestions.map((rel) => (
              <button
                key={rel.id}
                onClick={() => onNavigateRelated && onNavigateRelated(rel.id)}
                className="w-full text-left p-2.5 rounded-lg bg-slate-50 hover:bg-indigo-50 dark:bg-slate-800/60 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <span className="truncate pr-2 font-medium">{rel.title}</span>
                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

