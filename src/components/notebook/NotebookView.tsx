import React, { useState } from 'react';
import { Question } from '../../types/question';
import { NotebookEntry, ErrorCategory } from '../../types/user';
import { StorageService } from '../../services/storage';
import { MathView } from '../common/MathView';
import {
  BookMarked,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Trash2,
  ChevronRight,
  Filter,
  Check,
  Edit3,
} from 'lucide-react';

interface NotebookViewProps {
  entries: NotebookEntry[];
  allQuestions: Question[];
  onOpenQuestion: (id: string) => void;
  onRefreshNotebook: () => void;
}

const CATEGORY_LABELS: Record<ErrorCategory, { label: string; color: string; icon: string }> = {
  calculation_error: { label: 'Calculation Error', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300', icon: '🔢' },
  concept_gap: { label: 'Concept Gap', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300', icon: '🧠' },
  formula_forgotten: { label: 'Formula Forgotten', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300', icon: '📝' },
  misread_question: { label: 'Misread Question', color: 'bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300', icon: '👀' },
  time_pressure: { label: 'Time Pressure', color: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300', icon: '⏱️' },
  silly_mistake: { label: 'Silly Mistake', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300', icon: '⚡' },
};

export const NotebookView: React.FC<NotebookViewProps> = ({
  entries,
  allQuestions,
  onOpenQuestion,
  onRefreshNotebook,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [showOnlyUnmastered, setShowOnlyUnmastered] = useState<boolean>(true);

  // Pair notebook entries with questions
  const pairedEntries = entries
    .map((e) => {
      const q = allQuestions.find((item) => item.id === e.questionId);
      return q ? { ...e, question: q } : null;
    })
    .filter(Boolean) as (NotebookEntry & { question: Question })[];

  const filtered = pairedEntries.filter((e) => {
    if (showOnlyUnmastered && e.mastered) return false;
    if (filterCategory !== 'All' && e.errorCategory !== filterCategory) return false;
    return true;
  });

  const handleToggleMastery = (e: React.MouseEvent, qId: string, current: boolean) => {
    e.stopPropagation();
    StorageService.updateNotebookEntry(qId, { mastered: !current });
    onRefreshNotebook();
  };

  const handleRemove = (e: React.MouseEvent, qId: string) => {
    e.stopPropagation();
    StorageService.removeFromNotebook(qId);
    onRefreshNotebook();
  };

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <BookMarked className="w-5 h-5 text-rose-500" />
            <span>Incorrect-Question Notebook</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Personal error log to eliminate weak spots and track conceptual mastery.
          </p>
        </div>

        <button
          onClick={() => setShowOnlyUnmastered(!showOnlyUnmastered)}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
            showOnlyUnmastered
              ? 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800'
              : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
          }`}
        >
          {showOnlyUnmastered ? 'Active Errors Only' : 'Showing All (Inc. Mastered)'}
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button
          onClick={() => setFilterCategory('All')}
          className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition ${
            filterCategory === 'All'
              ? 'bg-indigo-600 text-white font-bold'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          All Categories ({pairedEntries.length})
        </button>
        {Object.entries(CATEGORY_LABELS).map(([key, info]) => {
          const count = pairedEntries.filter((e) => e.errorCategory === key).length;
          return (
            <button
              key={key}
              onClick={() => setFilterCategory(key)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition flex items-center space-x-1 ${
                filterCategory === key
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <span>{info.icon}</span>
              <span>{info.label}</span>
              <span className="text-[10px] opacity-75">({count})</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 flex items-center justify-center mb-3">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Notebook Clear!</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            {pairedEntries.length > 0
              ? 'All errors in this filter have been marked as mastered! Keep up the great revision.'
              : 'Whenever you get a question wrong during practice, click "Save to Notebook" to log it here with custom notes.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((entry) => {
            const catInfo = CATEGORY_LABELS[entry.errorCategory] || CATEGORY_LABELS.concept_gap;

            return (
              <div
                key={entry.questionId}
                onClick={() => onOpenQuestion(entry.questionId)}
                className={`p-4 rounded-2xl border transition shadow-xs cursor-pointer group bg-white dark:bg-slate-900 ${
                  entry.mastered
                    ? 'border-emerald-300 dark:border-emerald-800/60 opacity-80'
                    : 'border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">
                      {entry.question.subject}
                    </span>
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${catInfo.color}`}>
                      {catInfo.icon} {catInfo.label}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={(e) => handleToggleMastery(e, entry.questionId, entry.mastered)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1 transition ${
                        entry.mastered
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-700'
                      }`}
                      title={entry.mastered ? 'Mark as Unmastered' : 'Mark as Mastered'}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{entry.mastered ? 'Mastered' : 'Mark Mastered'}</span>
                    </button>

                    <button
                      onClick={(e) => handleRemove(e, entry.questionId)}
                      className="p-1 rounded-lg text-slate-400 hover:text-rose-500 transition"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-xs text-slate-800 dark:text-slate-200 line-clamp-2 leading-relaxed">
                  <MathView content={entry.question.statement} />
                </div>

                {/* User's custom note */}
                {entry.userNotes && (
                  <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 italic flex items-start space-x-2">
                    <Edit3 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{entry.userNotes}</span>
                  </div>
                )}

                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Logged {new Date(entry.addedAt).toLocaleDateString()}
                  </span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition flex items-center space-x-1">
                    <span>Re-solve Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

