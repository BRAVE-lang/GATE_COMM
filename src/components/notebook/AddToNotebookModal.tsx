import React, { useState } from 'react';
import { ErrorCategory } from '../../types/user';
import { StorageService } from '../../services/storage';
import { AlertCircle, X, Save, Check } from 'lucide-react';

interface AddToNotebookModalProps {
  questionId: string;
  selectedAnswer: string | string[] | number | null | undefined;
  isOpen: boolean;
  onClose: () => void;
  onSaved?: () => void;
}

const CATEGORIES: { id: ErrorCategory; label: string; icon: string; description: string }[] = [
  { id: 'calculation_error', label: 'Calculation Error', icon: '🔢', description: 'Algebra or arithmetic error during steps' },
  { id: 'concept_gap', label: 'Concept Gap', icon: '🧠', description: 'Unfamiliar with the underlying theory' },
  { id: 'formula_forgotten', label: 'Formula Forgotten', icon: '📝', description: 'Could not recall exact formula/parameters' },
  { id: 'misread_question', label: 'Misread Question', icon: '👀', description: 'Missed units, negative sign, or keywords' },
  { id: 'time_pressure', label: 'Time Pressure', icon: '⏱️', description: 'Rushed through solution due to timer' },
  { id: 'silly_mistake', label: 'Silly Mistake', icon: '⚡', description: 'Correct working but clicked wrong option' },
];

export const AddToNotebookModal: React.FC<AddToNotebookModalProps> = ({
  questionId,
  selectedAnswer,
  isOpen,
  onClose,
  onSaved,
}) => {
  const [category, setCategory] = useState<ErrorCategory>('concept_gap');
  const [notes, setNotes] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    StorageService.addToNotebook({
      questionId,
      selectedAnswer,
      errorCategory: category,
      userNotes: notes.trim(),
    });

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      if (onSaved) onSaved();
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-5 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
            <AlertCircle className="w-5 h-5" />
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Log to Error Notebook</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Why did you get this wrong?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`p-2.5 rounded-xl border text-left text-xs font-medium transition flex flex-col space-y-1 ${
                    category === cat.id
                      ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-1 ring-indigo-500'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span className="font-semibold">{cat.label}</span>
                  <span className="text-[10px] text-slate-500 line-clamp-1">{cat.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Personal Learning Notes / Correction
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Remember that for BPSK, N0 is one-sided PSD. Factor of 2 is in sqrt(2Eb/N0)."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end space-x-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={savedSuccess}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center space-x-1.5 shadow-sm transition"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Saved to Notebook!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save to Revision List</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

