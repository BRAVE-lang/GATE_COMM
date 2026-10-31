import React from 'react';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { SubjectName } from '../../types/question';
import { ChevronRight, Layers, Award, Sparkles, BookOpen } from 'lucide-react';

interface SubjectBrowserProps {
  onSelectSubject: (subject: SubjectName) => void;
  onNavigateFormulas: (subject: SubjectName) => void;
}

export const SubjectBrowser: React.FC<SubjectBrowserProps> = ({
  onSelectSubject,
  onNavigateFormulas,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>GATE EC Subject Syllabus & Browser</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Explore complete syllabus topics, official exam weightages, and topic-wise practice problem sets.
        </p>
      </div>

      <div className="space-y-3">
        {GATE_EC_SUBJECTS.map((subject, idx) => (
          <div
            key={subject.id}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-500 transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-3">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center font-mono">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {subject.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {subject.description}
                </p>

                {/* Topics list preview */}
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {subject.topics.map((t) => (
                    <span
                      key={t.name}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <span className="inline-block text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-1 rounded-lg border border-indigo-200/80 dark:border-indigo-800/80">
                  {subject.typicalWeightageMarks}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <button
                onClick={() => onNavigateFormulas(subject.name)}
                className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium flex items-center space-x-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Formulas & Notes</span>
              </button>

              <button
                onClick={() => onSelectSubject(subject.name)}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center space-x-1 shadow-xs transition"
              >
                <span>Browse Topics</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

