import React from 'react';
import {
  Bookmark,
  BookMarked,
  BarChart3,
  DownloadCloud,
  Settings,
  BookOpen,
  Layers,
  FileCheck2,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Zap,
  Database,
} from 'lucide-react';

interface MoreMenuScreenProps {
  onNavigate: (screen: string) => void;
  notebookCount: number;
  bookmarkCount: number;
}

export const MoreMenuScreen: React.FC<MoreMenuScreenProps> = ({
  onNavigate,
  notebookCount,
  bookmarkCount,
}) => {
  const links = [
    {
      id: 'question_bank',
      title: 'Question Bank & Import Pipeline',
      desc: 'Authentic PYQs, coverage matrix, deduplication, and practice generator',
      icon: Database,
      color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/60',
    },
    {
      id: 'analytics',
      title: 'Progress Analytics',
      desc: 'Accuracy trends, speed per question, and projected GATE marks',
      icon: BarChart3,
      color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60',
    },
    {
      id: 'bookmarks',
      title: 'Bookmarked Questions',
      desc: `${bookmarkCount} saved tricky questions for quick reference`,
      icon: Bookmark,
      color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/60',
      badge: bookmarkCount > 0 ? bookmarkCount : undefined,
    },
    {
      id: 'notebook',
      title: 'Incorrect-Question Notebook',
      desc: `${notebookCount} active errors categorised by mistake reason`,
      icon: BookMarked,
      color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/60',
      badge: notebookCount > 0 ? notebookCount : undefined,
    },
    {
      id: 'formulas',
      title: 'Formula Library',
      desc: 'Formulas and term definitions across all 10 GATE EC subjects',
      icon: BookOpen,
      color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/60',
    },
    {
      id: 'offline',
      title: 'Offline Downloads',
      desc: 'Download packs to study and solve while traveling',
      icon: DownloadCloud,
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60',
    },
    {
      id: 'settings',
      title: 'Settings & Cloud Configuration',
      desc: 'Dark/Light theme, backup JSON export/import, and integrations',
      icon: Settings,
      color: 'text-slate-600 bg-slate-100 dark:bg-slate-800',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Study Tools & Navigation
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Fast access to all study aids, error tracking, formulas, and offline downloads.
        </p>
      </div>

      <div className="space-y-2.5">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="w-full p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 text-left transition shadow-xs flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3.5 flex-1 pr-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${link.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {link.title}
                    </h3>
                    {link.badge !== undefined && (
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-rose-600 text-white">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {link.desc}
                  </p>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition flex-shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

