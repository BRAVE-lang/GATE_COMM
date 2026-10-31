import React, { useState, useEffect } from 'react';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { SubjectName, Question } from '../../types/question';
import { OfflinePackage } from '../../types/user';
import { StorageService } from '../../services/storage';
import {
  DownloadCloud,
  CheckCircle2,
  HardDrive,
  Trash2,
  WifiOff,
  AlertTriangle,
  Smartphone,
  RefreshCw,
  Info,
} from 'lucide-react';

interface OfflineDownloadsViewProps {
  allQuestions: Question[];
  isOnline: boolean;
}

export const OfflineDownloadsView: React.FC<OfflineDownloadsViewProps> = ({
  allQuestions,
  isOnline,
}) => {
  const [packages, setPackages] = useState<OfflinePackage[]>([]);
  const [downloadingSubject, setDownloadingSubject] = useState<string | null>(null);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    setPackages(StorageService.getOfflinePackages());

    // Listen for PWA beforeinstallprompt
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Check if running in standalone mode (already installed)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleDownloadSubject = (subject: SubjectName) => {
    setDownloadingSubject(subject);

    setTimeout(() => {
      const subjectQuestions = allQuestions.filter((q) => q.subject === subject);
      const approxSizeBytes = JSON.stringify(subjectQuestions).length * 2; // UTF-16 approximate

      const pkg: OfflinePackage = {
        subject,
        questionCount: subjectQuestions.length,
        downloadedAt: Date.now(),
        sizeBytes: approxSizeBytes,
        version: '1.0.0',
      };

      StorageService.saveOfflinePackage(pkg);
      setPackages(StorageService.getOfflinePackages());
      setDownloadingSubject(null);
    }, 600);
  };

  const handleRemovePackage = (subject: SubjectName) => {
    StorageService.removeOfflinePackage(subject);
    setPackages(StorageService.getOfflinePackages());
  };

  const handleDownloadAllSubjects = () => {
    setDownloadingSubject('ALL');
    setTimeout(() => {
      GATE_EC_SUBJECTS.forEach((sub) => {
        const subjectQuestions = allQuestions.filter((q) => q.subject === sub.name);
        const approxSizeBytes = JSON.stringify(subjectQuestions).length * 2;
        const pkg: OfflinePackage = {
          subject: sub.name,
          questionCount: subjectQuestions.length,
          downloadedAt: Date.now(),
          sizeBytes: approxSizeBytes,
          version: '1.0.0',
        };
        StorageService.saveOfflinePackage(pkg);
      });
      setPackages(StorageService.getOfflinePackages());
      setDownloadingSubject(null);
    }, 1000);
  };

  const handleInstallPWA = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setInstallPrompt(null);
    }
  };

  const totalOfflineQuestions = packages.reduce((acc, p) => acc + p.questionCount, 0);
  const totalSizeBytes = packages.reduce((acc, p) => acc + p.sizeBytes, 0);
  const totalSizeKB = Math.round(totalSizeBytes / 1024);

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <DownloadCloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Offline Question & Solution Manager</span>
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Download complete subject question packs with full worked derivations to practise smoothly while traveling without cellular data.
        </p>
      </div>

      {/* PWA Install Banner */}
      {installPrompt && !isInstalled && (
        <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center space-x-3">
            <Smartphone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-indigo-950 dark:text-indigo-100">
                Install "GATE Companion EC" on your Home Screen
              </h4>
              <p className="text-[11px] text-indigo-700 dark:text-indigo-300">
                Runs like a native app with full-screen distraction-free practice.
              </p>
            </div>
          </div>
          <button
            onClick={handleInstallPWA}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition flex-shrink-0"
          >
            Install PWA
          </button>
        </div>
      )}

      {/* Storage & Offline Status Card */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-1">
            <HardDrive className="w-4 h-4 text-indigo-500" />
            <span>Cached Offline Storage</span>
          </div>
          <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
            {totalSizeKB} <span className="text-xs font-normal text-slate-500">KB Used</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {totalOfflineQuestions} questions cached locally
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-1">
            <WifiOff className="w-4 h-4 text-emerald-500" />
            <span>Connection State</span>
          </div>
          <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
            {isOnline ? 'Online' : 'Offline'}
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {isOnline ? 'All features accessible' : 'Using cached local store'}
          </p>
        </div>
      </div>

      {/* Offline Capabilities Transparency Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-1.5">
        <div className="flex items-center space-x-1.5 font-bold text-amber-900 dark:text-amber-200">
          <Info className="w-4 h-4 text-amber-600" />
          <span>Offline Transparency Notice</span>
        </div>
        <ul className="space-y-1 text-amber-900 dark:text-amber-300 text-[11px] pl-5 list-disc">
          <li><strong>Available Offline:</strong> All downloaded questions, detailed step-by-step solutions, virtual calculator, rough scratchpad, and formula library.</li>
          <li><strong>Not Available Offline:</strong> Uncached questions, cloud syncing with Supabase, or live remote AI API generations.</li>
        </ul>
      </div>

      {/* Subject Download Packs List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Available Subject Packs
          </h3>
          <button
            onClick={handleDownloadAllSubjects}
            disabled={downloadingSubject !== null}
            className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center space-x-1"
          >
            <DownloadCloud className="w-3.5 h-3.5" />
            <span>Download All 10 Packs</span>
          </button>
        </div>

        {GATE_EC_SUBJECTS.map((sub) => {
          const isDownloaded = packages.some((p) => p.subject === sub.name);
          const isDownloading = downloadingSubject === sub.name;
          const questionsCount = allQuestions.filter((q) => q.subject === sub.name).length;

          return (
            <div
              key={sub.id}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {sub.name} Pack
                </h4>
                <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                  <span>{questionsCount} questions with derivations</span>
                  <span>•</span>
                  <span>Weight: {sub.typicalWeightageMarks}</span>
                </div>
              </div>

              <div>
                {isDownloading ? (
                  <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 flex items-center space-x-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                    <span>Downloading...</span>
                  </div>
                ) : isDownloaded ? (
                  <div className="flex items-center space-x-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-xs flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ready Offline</span>
                    </span>
                    <button
                      onClick={() => handleRemovePackage(sub.name)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 transition"
                      title="Remove downloaded pack"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDownloadSubject(sub.name)}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition"
                  >
                    <DownloadCloud className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

