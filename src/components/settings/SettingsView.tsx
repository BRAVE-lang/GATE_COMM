import React, { useState } from 'react';
import { AppSettings } from '../../types/user';
import { StorageService } from '../../services/storage';
import { supabaseService } from '../../services/supabase';
import {
  Settings,
  Moon,
  Sun,
  Monitor,
  Download,
  Upload,
  RotateCcw,
  Cloud,
  Sparkles,
  ShieldCheck,
  Check,
  Smartphone,
  Info,
} from 'lucide-react';

interface SettingsViewProps {
  settings: AppSettings;
  onUpdateSettings: (settings: Partial<AppSettings>) => void;
  onDataReset: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onUpdateSettings,
  onDataReset,
}) => {
  const [exportJson, setExportJson] = useState<string | null>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);

  const supabaseStatus = supabaseService.getStatus();

  const handleExport = () => {
    const data = StorageService.exportUserData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gate-ec-progress-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (StorageService.importUserData(content)) {
        setImportStatus('Data successfully restored!');
        setTimeout(() => {
          setImportStatus(null);
          onDataReset();
        }, 1500);
      } else {
        setImportStatus('Error: Invalid backup file.');
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress, bookmarks, and notebook notes? This cannot be undone.')) {
      StorageService.clearAllData();
      onDataReset();
      alert('All user data has been reset.');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Application Settings</span>
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Appearance, defaults, data backup, and cloud service integration status.
        </p>
      </div>

      {/* Theme Settings */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Theme & Appearance</h3>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => {
              onUpdateSettings({ theme: 'light' });
              document.documentElement.classList.remove('dark');
            }}
            className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center space-y-1.5 ${
              settings.theme === 'light'
                ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold'
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Sun className="w-5 h-5" />
            <span className="text-xs">Light</span>
          </button>

          <button
            onClick={() => {
              onUpdateSettings({ theme: 'dark' });
              document.documentElement.classList.add('dark');
            }}
            className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center space-y-1.5 ${
              settings.theme === 'dark'
                ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold'
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Moon className="w-5 h-5" />
            <span className="text-xs">Dark (OLED)</span>
          </button>

          <button
            onClick={() => {
              onUpdateSettings({ theme: 'system' });
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (prefersDark) document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            }}
            className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center space-y-1.5 ${
              settings.theme === 'system'
                ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold'
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Monitor className="w-5 h-5" />
            <span className="text-xs">System</span>
          </button>
        </div>
      </div>

      {/* Cloud & Integration Layer Status */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Cloud Backend & AI Status</h3>
          </div>
          <span className="text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
            PWA Local-First
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Supabase Cloud Sync:</span>
            <span className={`font-medium ${supabaseStatus.isConfigured ? 'text-emerald-500' : 'text-slate-500'}`}>
              {supabaseStatus.message}
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-700/60">
            <span className="font-semibold text-slate-700 dark:text-slate-300">AI Conceptual Tutor:</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Curated Offline Pedagogical Engine (Active)
            </span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 leading-relaxed">
          The app runs 100% locally with zero required external credentials. To sync with a private Supabase instance or Gemini AI endpoint, configure the variables listed in <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono">.env.example</code>.
        </p>
      </div>

      {/* Backup and Data Management */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Data Backup & Migration</h3>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={handleExport}
            className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition"
          >
            <Download className="w-4 h-4 text-indigo-500" />
            <span>Export Backup JSON</span>
          </button>

          <label className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition cursor-pointer">
            <Upload className="w-4 h-4 text-emerald-500" />
            <span>Restore Backup JSON</span>
            <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
          </label>
        </div>

        {importStatus && (
          <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs text-center font-medium">
            {importStatus}
          </div>
        )}

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={handleReset}
            className="w-full py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold flex items-center justify-center space-x-1.5 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Progress & Revision Data</span>
          </button>
        </div>
      </div>

      {/* App Version Info */}
      <div className="text-center text-xs text-slate-400 py-2">
        <p className="font-semibold text-slate-500">GATE Companion EC • Version 1.0.0 (Milestone 1)</p>
        <p className="text-[11px] mt-0.5">Authoritative GATE EC Question-Centred Preparation Platform</p>
      </div>
    </div>
  );
};

