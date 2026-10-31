import React from 'react';
import { 
  Home, 
  Layers, 
  HelpCircle, 
  FileCheck2, 
  BookMarked, 
  BarChart3, 
  MoreHorizontal 
} from 'lucide-react';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  notebookBadgeCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  notebookBadgeCount = 0,
}) => {
  const items = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'subjects', label: 'Subjects', icon: Layers },
    { id: 'practice', label: 'Practise', icon: HelpCircle },
    { id: 'tests', label: 'Tests', icon: FileCheck2 },
    { id: 'notebook', label: 'Notebook', icon: BookMarked, badge: notebookBadgeCount },
    { id: 'formulas', label: 'Formulas', icon: BarChart3 },
    { id: 'more', label: 'More', icon: MoreHorizontal },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
      <div className="max-w-md mx-auto px-2 py-1 flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            currentScreen === item.id ||
            (item.id === 'subjects' && currentScreen === 'topics') ||
            (item.id === 'practice' && currentScreen === 'question_solver');

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {item.badge && item.badge > 0 ? (
                  <span className="absolute -top-1 -right-2 px-1 py-0.2 min-w-[14px] text-[9px] font-bold rounded-full bg-rose-600 text-white flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

