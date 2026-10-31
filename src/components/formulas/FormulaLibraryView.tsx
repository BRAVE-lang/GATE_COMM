import React, { useState } from 'react';
import { FORMULA_LIBRARY } from '../../data/formulas';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { FormulaItem } from '../../types/formula';
import { MathView } from '../common/MathView';
import { BookOpen, Search, Copy, Check, Sparkles, Filter } from 'lucide-react';

interface FormulaLibraryViewProps {
  initialSubject?: string;
}

export const FormulaLibraryView: React.FC<FormulaLibraryViewProps> = ({
  initialSubject,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject || 'All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = FORMULA_LIBRARY.filter((item) => {
    if (selectedSubject !== 'All' && item.subject !== selectedSubject) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchTopic = item.topic.toLowerCase().includes(q);
      const matchExplanation = item.explanation.toLowerCase().includes(q);
      const matchLatex = item.latex.toLowerCase().includes(q);
      if (!matchTitle && !matchTopic && !matchExplanation && !matchLatex) return false;
    }
    return true;
  });

  const handleCopyLatex = (id: string, latex: string) => {
    navigator.clipboard.writeText(latex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>GATE EC High-Yield Formula Library</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Formula sheets with comprehensive variable definitions, SI units, and exam caveats across all 10 subjects.
        </p>

        {/* Search Input */}
        <div className="mt-3 relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by topic, formula name, or symbol..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Subject Filter Carousel */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button
          onClick={() => setSelectedSubject('All')}
          className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition ${
            selectedSubject === 'All'
              ? 'bg-indigo-600 text-white font-bold'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          All Subjects ({FORMULA_LIBRARY.length})
        </button>
        {GATE_EC_SUBJECTS.map((sub) => {
          const count = FORMULA_LIBRARY.filter((f) => f.subject === sub.name).length;
          return (
            <button
              key={sub.name}
              onClick={() => setSelectedSubject(sub.name)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition ${
                selectedSubject === sub.name
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <span>{sub.shortName}</span>
              <span className="text-[10px] opacity-75 ml-1">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Formula Cards */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
                    {item.subject}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.topic}</span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-1">
                  {item.title}
                </h3>
              </div>

              <button
                onClick={() => handleCopyLatex(item.id, item.latex)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Copy LaTeX"
              >
                {copiedId === item.id ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Formula Block (KaTeX) */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center text-base sm:text-lg text-indigo-950 dark:text-indigo-200 font-semibold overflow-x-auto scrollbar-none">
              <MathView content={`$$${item.latex}$$`} />
            </div>

            {/* Explanation */}
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {item.explanation}
            </p>

            {/* Variable & Term Breakdown */}
            <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-xs">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Variables & Parameter Definitions
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.terms.map((t, idx) => (
                  <div key={idx} className="flex items-baseline space-x-2">
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold min-w-[50px]">
                      <MathView content={`$${t.symbol}$`} />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {t.meaning} {t.unit ? <span className="text-slate-500 font-mono">({t.unit})</span> : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes / Caveats */}
            {item.importantNotes && item.importantNotes.length > 0 && (
              <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-1">
                <span className="font-bold text-amber-900 dark:text-amber-300 text-[11px] uppercase tracking-wide">
                  Exam Caveat / Shortcut:
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-amber-950 dark:text-amber-200">
                  {item.importantNotes.map((note, nidx) => (
                    <li key={nidx}>
                      <MathView content={note} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

