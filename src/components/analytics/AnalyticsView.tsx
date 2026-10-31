import React from 'react';
import { UserStats } from '../../types/user';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { 
  BarChart3, 
  Flame, 
  Target, 
  Clock, 
  Award, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldAlert 
} from 'lucide-react';

interface AnalyticsViewProps {
  stats: UserStats;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ stats }) => {
  const overallAccuracy =
    stats.totalAttempted > 0
      ? Math.round((stats.totalCorrect / stats.totalAttempted) * 100)
      : 0;

  const avgTimePerQuestion =
    stats.totalAttempted > 0
      ? Math.round(stats.totalTimeSeconds / stats.totalAttempted)
      : 0;

  // Calculate estimated projected marks based on subject accuracies and standard GATE EC weightages
  // 100 total marks: Aptitude 15, Maths 13, Core 72
  let projectedMarks = 0;
  GATE_EC_SUBJECTS.forEach((sub) => {
    const rawWeight = parseInt(sub.typicalWeightageMarks.split(' ')[0], 10) || 10;
    const subStats = stats.subjectAccuracy[sub.name];
    const subAcc = subStats && subStats.attempted > 0 ? subStats.correct / subStats.attempted : 0.5; // Baseline 50%
    projectedMarks += rawWeight * subAcc;
  });

  const roundedProjected = Math.round(projectedMarks * 10) / 10;

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Progress & Performance Analytics</span>
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Comprehensive preparation metrics, accuracy trends, and projected GATE EC score.
        </p>
      </div>

      {/* Projected Score Spotlight Card */}
      <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full text-indigo-200 font-bold">
            Projected GATE EC Score
          </span>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-white">
              {roundedProjected}
            </span>
            <span className="text-sm text-indigo-200 font-semibold">/ 100 Marks</span>
          </div>
          <p className="text-xs text-indigo-100/80 mt-1 max-w-sm">
            Estimated from your subject-wise accuracy weighted against the official GATE EC syllabus distribution.
          </p>
        </div>

        <div className="w-full sm:w-auto bg-white/10 backdrop-blur-xs rounded-2xl p-3 text-center sm:min-w-[130px]">
          <Award className="w-6 h-6 text-amber-300 mx-auto mb-1" />
          <div className="text-xs font-bold text-white">
            {roundedProjected > 65 ? 'AIR Top 200 Zone' : roundedProjected > 45 ? 'AIR Top 1000 Zone' : 'Foundation Phase'}
          </div>
          <div className="text-[10px] text-indigo-200 mt-0.5">Projected Rank Tier</div>
        </div>
      </div>

      {/* 4 Metric Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-xs">
          <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-1" />
          <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">
            {stats.totalAttempted}
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-tight font-medium">Attempted</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
          <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">
            {overallAccuracy}%
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-tight font-medium">Accuracy</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-xs">
          <Clock className="w-5 h-5 text-cyan-500 mx-auto mb-1" />
          <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">
            {avgTimePerQuestion}s
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-tight font-medium">Avg Speed / Q</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-xs">
          <Flame className="w-5 h-5 text-amber-500 mx-auto mb-1" />
          <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">
            {stats.streakDays} Days
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-tight font-medium">Streak</div>
        </div>
      </div>

      {/* Subject-Wise Accuracy Bars */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Subject Accuracy & Mastery
          </h3>
          <span className="text-xs text-slate-500 font-medium">10 Core Subjects</span>
        </div>

        <div className="space-y-3.5">
          {GATE_EC_SUBJECTS.map((sub) => {
            const data = stats.subjectAccuracy[sub.name];
            const attempted = data ? data.attempted : 0;
            const correct = data ? data.correct : 0;
            const percentage = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

            return (
              <div key={sub.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {sub.name}
                  </span>
                  <div className="flex items-center space-x-2 font-mono">
                    <span className="text-slate-500 text-[11px]">{attempted} solved</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {attempted > 0 ? `${percentage}%` : 'Unattempted'}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      percentage >= 70
                        ? 'bg-emerald-500'
                        : percentage >= 40
                        ? 'bg-indigo-600'
                        : attempted > 0
                        ? 'bg-rose-500'
                        : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                    style={{ width: `${Math.max(percentage, attempted > 0 ? 8 : 0)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

