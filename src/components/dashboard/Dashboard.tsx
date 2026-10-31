import React from 'react';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { SubjectName } from '../../types/question';
import { UserStats, NotebookEntry } from '../../types/user';
import { 
  Flame, 
  Target, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  FileCheck2, 
  BookMarked, 
  BookOpen, 
  Zap, 
  Sparkles,
  DownloadCloud,
  ChevronRight,
  Database,
} from 'lucide-react';

interface DashboardProps {
  stats: UserStats;
  notebookEntries: NotebookEntry[];
  onSelectSubject: (subject: SubjectName) => void;
  onNavigate: (screen: string) => void;
  onStartQuickPractice: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  stats,
  notebookEntries,
  onSelectSubject,
  onNavigate,
  onStartQuickPractice,
}) => {
  const accuracy =
    stats.totalAttempted > 0
      ? Math.round((stats.totalCorrect / stats.totalAttempted) * 100)
      : 0;

  const totalMinutes = Math.round(stats.totalTimeSeconds / 60);

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-5 animate-in fade-in duration-150">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 text-white p-5 sm:p-6 shadow-xl">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-indigo-200 bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
              GATE EC Aspirant Hub
            </span>
            <div className="flex items-center space-x-1 text-amber-300 font-bold text-xs bg-black/20 px-2.5 py-1 rounded-full">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>{stats.streakDays} Day Streak</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1 text-white">
            Master GATE Electronics & Communication
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 max-w-lg leading-relaxed">
            Authentic PYQ patterns, comprehensive worked derivations, and distraction-free mobile practice.
          </p>

          {/* Quick CTA row */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              onClick={onStartQuickPractice}
              className="px-4 py-2.5 rounded-xl bg-white text-indigo-900 font-bold text-xs flex items-center space-x-2 shadow-lg hover:bg-indigo-50 active:scale-95 transition"
            >
              <Play className="w-3.5 h-3.5 fill-indigo-900" />
              <span>Practise Now</span>
            </button>
            <button
              onClick={() => onNavigate('tests')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600/60 hover:bg-indigo-600 text-white font-bold text-xs flex items-center space-x-2 border border-white/20 active:scale-95 transition"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Generate Mock Test</span>
            </button>
            <button
              onClick={() => onNavigate('question_bank')}
              className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center space-x-2 border border-white/30 active:scale-95 transition"
            >
              <Database className="w-3.5 h-3.5" />
              <span>PYQ Repository</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-violet-500/20 blur-2xl pointer-events-none" />
      </div>

      {/* Daily Progress Metrics */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
          <div className="w-7 h-7 mx-auto rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-1.5">
            <Target className="w-4 h-4" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-mono">
            {stats.totalAttempted}
          </div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">Attempted</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
          <div className="w-7 h-7 mx-auto rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-1.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-mono">
            {accuracy}%
          </div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">Accuracy</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
          <div className="w-7 h-7 mx-auto rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-1.5">
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-mono">
            {totalMinutes}m
          </div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">Study Time</div>
        </div>
      </div>

      {/* Priority Revision Action Alert (if notebook has items) */}
      {notebookEntries.length > 0 && (
        <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-2xl p-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-rose-950 dark:text-rose-100">
                {notebookEntries.length} Incorrect {notebookEntries.length === 1 ? 'Question' : 'Questions'} Pending Revision
              </h4>
              <p className="text-[11px] text-rose-700 dark:text-rose-300">
                Fix calculation errors and concept gaps before they cost marks in the exam.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('notebook')}
            className="p-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs flex items-center space-x-1 shadow-xs transition"
          >
            <span>Revise</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* High Yield Quick Links */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onNavigate('formulas')}
          className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 text-left transition shadow-xs flex items-center space-x-3"
        >
          <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="overflow-hidden">
            <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">Formula Library</h4>
            <p className="text-[10px] text-slate-500 truncate">High-yield cheat sheets</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('offline')}
          className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 text-left transition shadow-xs flex items-center space-x-3"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
            <DownloadCloud className="w-5 h-5" />
          </div>
          <div className="overflow-hidden">
            <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">Offline Access</h4>
            <p className="text-[10px] text-slate-500 truncate">Download for travel</p>
          </div>
        </button>
      </div>

      {/* Subject Browser Grid */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            GATE EC Subjects (10 Core)
          </h3>
          <button
            onClick={() => onNavigate('subjects')}
            className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GATE_EC_SUBJECTS.map((subject) => {
            const subjectStats = stats.subjectAccuracy[subject.name];
            const subAccuracy =
              subjectStats && subjectStats.attempted > 0
                ? Math.round((subjectStats.correct / subjectStats.attempted) * 100)
                : null;

            return (
              <button
                key={subject.id}
                onClick={() => onSelectSubject(subject.name)}
                className="w-full text-left p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition shadow-xs flex items-start justify-between group"
              >
                <div className="flex-1 pr-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {subject.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {subject.description}
                  </p>
                  <div className="mt-2.5 flex items-center space-x-3 text-[11px]">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
                      Weight: {subject.typicalWeightageMarks}
                    </span>
                    {subAccuracy !== null && (
                      <span className="text-slate-500 font-medium">
                        Acc: <strong className="text-slate-700 dark:text-slate-300">{subAccuracy}%</strong>
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40 flex items-center justify-center flex-shrink-0 transition">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

