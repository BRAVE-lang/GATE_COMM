import React from 'react';
import { Option, QuestionType } from '../../types/question';
import { MathView } from '../common/MathView';
import { Check, Square, CheckSquare } from 'lucide-react';

interface OptionSelectorProps {
  type: QuestionType;
  options: Option[];
  selectedAnswer: string | string[] | number | null | undefined;
  onSelectOption: (optionId: string) => void;
  disabled?: boolean;
  showCorrectness?: boolean;
  officialAnswer?: string | string[] | [number, number];
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  type,
  options,
  selectedAnswer,
  onSelectOption,
  disabled = false,
  showCorrectness = false,
  officialAnswer,
}) => {
  const isSelected = (id: string): boolean => {
    if (type === 'MCQ') {
      return selectedAnswer === id;
    }
    if (type === 'MSQ' && Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(id);
    }
    return false;
  };

  const isOfficialCorrect = (id: string): boolean => {
    if (type === 'MCQ') {
      return officialAnswer === id;
    }
    if (type === 'MSQ' && Array.isArray(officialAnswer)) {
      return (officialAnswer as string[]).includes(id);
    }
    return false;
  };

  return (
    <div className="space-y-2.5">
      {options.map((opt) => {
        const selected = isSelected(opt.id);
        const isCorrect = isOfficialCorrect(opt.id);

        let optionStyle =
          'border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500';

        if (showCorrectness) {
          if (isCorrect) {
            optionStyle = 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-medium';
          } else if (selected && !isCorrect) {
            optionStyle = 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100';
          }
        } else if (selected) {
          optionStyle = 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-100 shadow-sm ring-1 ring-indigo-500';
        }

        return (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelectOption(opt.id)}
            className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition flex items-start space-x-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${optionStyle}`}
          >
            {/* Indicator Badge */}
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs transition mt-0.5 ${
                showCorrectness && isCorrect
                  ? 'bg-emerald-600 text-white'
                  : showCorrectness && selected && !isCorrect
                  ? 'bg-rose-600 text-white'
                  : selected
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {type === 'MSQ' ? (
                selected ? (
                  <CheckSquare className="w-4 h-4" />
                ) : (
                  <Square className="w-4 h-4" />
                )
              ) : (
                opt.id
              )}
            </div>

            {/* Option Text */}
            <div className="flex-1 leading-snug">
              <MathView content={opt.text} />
            </div>

            {/* Feedback Icon */}
            {showCorrectness && isCorrect && (
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-full flex items-center space-x-1">
                <Check className="w-3 h-3" />
                <span>Correct</span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

