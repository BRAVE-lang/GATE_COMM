import React, { useState } from 'react';
import { Delete, Check } from 'lucide-react';

interface NatInputProps {
  value: string | number | null | undefined;
  onChange: (val: string) => void;
  disabled?: boolean;
  showCorrectness?: boolean;
  officialAnswer?: [number, number] | string | string[];
}

export const NatInput: React.FC<NatInputProps> = ({
  value,
  onChange,
  disabled = false,
  showCorrectness = false,
  officialAnswer,
}) => {
  const [showKeypad, setShowKeypad] = useState(false);
  const stringValue = value !== null && value !== undefined ? String(value) : '';

  const handleKeyPress = (char: string) => {
    if (disabled) return;
    if (char === 'CLEAR') {
      onChange('');
    } else if (char === 'BACK') {
      onChange(stringValue.slice(0, -1));
    } else if (char === '±') {
      if (stringValue.startsWith('-')) {
        onChange(stringValue.slice(1));
      } else {
        onChange('-' + stringValue);
      }
    } else if (char === '.') {
      if (!stringValue.includes('.')) {
        onChange(stringValue + '.');
      }
    } else {
      onChange(stringValue + char);
    }
  };

  const getRangeText = () => {
    if (Array.isArray(officialAnswer) && officialAnswer.length === 2 && typeof officialAnswer[0] === 'number') {
      const [min, max] = officialAnswer as [number, number];
      if (min === max) return `${min}`;
      return `${min} to ${max}`;
    }
    return String(officialAnswer || '');
  };

  return (
    <div className="space-y-3">
      <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Enter Numerical Value (NAT)
        </label>

        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
          <input
            type="text"
            inputMode="decimal"
            disabled={disabled}
            placeholder="e.g. -8.91 or 200"
            value={stringValue}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 px-4 py-3 text-lg font-mono font-semibold rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />

          <button
            type="button"
            onClick={() => setShowKeypad(!showKeypad)}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition"
          >
            {showKeypad ? 'Hide Keypad' : 'Show Virtual Keypad'}
          </button>
        </div>

        {showCorrectness && (
          <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700 text-xs">
            <span className="font-semibold text-slate-500">Official Acceptable Range: </span>
            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{getRangeText()}</span>
          </div>
        )}
      </div>

      {/* Numerical Keypad */}
      {showKeypad && !disabled && (
        <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md max-w-xs mx-auto animate-in fade-in">
          <div className="grid grid-cols-4 gap-1.5 font-mono text-sm">
            {['7', '8', '9'].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleKeyPress(n)}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg font-semibold text-slate-800 dark:text-slate-200"
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleKeyPress('BACK')}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-300 flex items-center justify-center"
            >
              <Delete className="w-4 h-4" />
            </button>

            {['4', '5', '6'].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleKeyPress(n)}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg font-semibold text-slate-800 dark:text-slate-200"
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleKeyPress('CLEAR')}
              className="py-2.5 bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/40 dark:hover:bg-rose-900/60 rounded-lg font-bold text-rose-700 dark:text-rose-300 text-xs"
            >
              CLEAR
            </button>

            {['1', '2', '3'].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleKeyPress(n)}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg font-semibold text-slate-800 dark:text-slate-200"
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleKeyPress('±')}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg font-bold text-slate-700 dark:text-slate-300"
            >
              ±
            </button>

            <button
              type="button"
              onClick={() => handleKeyPress('0')}
              className="col-span-2 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg font-semibold text-slate-800 dark:text-slate-200"
            >
              0
            </button>
            <button
              type="button"
              onClick={() => handleKeyPress('.')}
              className="py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg font-bold text-slate-800 dark:text-slate-200"
            >
              .
            </button>
            <button
              type="button"
              onClick={() => setShowKeypad(false)}
              className="py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center"
            >
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

