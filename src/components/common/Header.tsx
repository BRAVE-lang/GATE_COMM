import React from 'react';
import { AppSettings } from '../../types/user';
import { Moon, Sun, Monitor, Wifi, WifiOff, Sparkles, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  settings: AppSettings;
  onUpdateSettings: (settings: Partial<AppSettings>) => void;
  isOnline: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  settings,
  onUpdateSettings,
  isOnline,
}) => {
  const toggleTheme = () => {
    const nextTheme = settings.theme === 'dark' ? 'light' : 'dark';
    onUpdateSettings({ theme: nextTheme });
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center space-x-2.5 text-left group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition">
            <span className="font-extrabold text-sm tracking-tighter">EC</span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">GATE Companion</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold">
                EC
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">Electronics & Comm. Prep</p>
          </div>
        </button>

        {/* Status & Quick Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Online/Offline indicator */}
          <div
            className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${
              isOnline
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
            }`}
            title={isOnline ? 'Online - Live Question Bank' : 'Offline Mode - Cached Questions Only'}
          >
            {isOnline ? <Wifi className="w-3 h-3 text-emerald-500" /> : <WifiOff className="w-3 h-3 text-amber-500" />}
            <span className="hidden sm:inline">{isOnline ? 'Online' : 'Offline'}</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Toggle theme"
          >
            {settings.theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

