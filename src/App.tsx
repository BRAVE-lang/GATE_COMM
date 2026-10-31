import React, { useState, useEffect } from 'react';
import { SubjectName, Question } from './types/question';
import { AppSettings, UserStats, NotebookEntry, BookmarkItem } from './types/user';
import { StorageService } from './services/storage';
import { getSubjectByName } from './data/subjects';

// Components
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { Dashboard } from './components/dashboard/Dashboard';
import { SubjectBrowser } from './components/subjects/SubjectBrowser';
import { TopicBrowser } from './components/subjects/TopicBrowser';
import { QuestionSolver } from './components/questions/QuestionSolver';
import { PracticeTestView } from './components/test/PracticeTestView';
import { BookmarksView } from './components/bookmarks/BookmarksView';
import { NotebookView } from './components/notebook/NotebookView';
import { FormulaLibraryView } from './components/formulas/FormulaLibraryView';
import { AnalyticsView } from './components/analytics/AnalyticsView';
import { OfflineDownloadsView } from './components/offline/OfflineDownloadsView';
import { SettingsView } from './components/settings/SettingsView';
import { MoreMenuScreen } from './components/navigation/MoreMenuScreen';
import { QuestionBankManagerView } from './components/questionBank/QuestionBankManagerView';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('dashboard');
  const [settings, setSettings] = useState<AppSettings>(StorageService.getSettings());
  const [stats, setStats] = useState<UserStats>(StorageService.getStats());
  const [notebookEntries, setNotebookEntries] = useState<NotebookEntry[]>(StorageService.getNotebook());
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(StorageService.getBookmarks());
  const [allQuestions, setAllQuestions] = useState<Question[]>(StorageService.getAllQuestions());

  // Subject and question solving context
  const [selectedSubjectName, setSelectedSubjectName] = useState<SubjectName>('Analog Circuits');
  const [practiceQuestionList, setPracticeQuestionList] = useState<Question[]>(allQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [formulaTargetSubject, setFormulaTargetSubject] = useState<string>('All');

  // Network state
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    // Network listeners
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial theme setup
    const saved = StorageService.getSettings();
    if (
      saved.theme === 'dark' ||
      (saved.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const refreshUserData = () => {
    setStats(StorageService.getStats());
    setNotebookEntries(StorageService.getNotebook());
    setBookmarks(StorageService.getBookmarks());
    setAllQuestions(StorageService.getAllQuestions());
  };

  const handleUpdateSettings = (updates: Partial<AppSettings>) => {
    const updated = StorageService.saveSettings(updates);
    setSettings(updated);
  };

  // Navigation handlers
  const handleSelectSubject = (subject: SubjectName) => {
    setSelectedSubjectName(subject);
    setCurrentScreen('topics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTopicQuestions = (subjectName: string, topicName?: string) => {
    const filtered = allQuestions.filter((q) => {
      if (q.subject !== subjectName) return false;
      if (topicName && q.topic !== topicName) return false;
      return true;
    });

    if (filtered.length === 0) {
      alert(`No sample practice questions currently matching ${topicName || subjectName}.`);
      return;
    }

    setPracticeQuestionList(filtered);
    setCurrentQuestionIndex(0);
    setCurrentScreen('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSpecificQuestion = (qId: string) => {
    const qIndex = allQuestions.findIndex((q) => q.id === qId);
    if (qIndex >= 0) {
      setPracticeQuestionList(allQuestions);
      setCurrentQuestionIndex(qIndex);
      setCurrentScreen('practice');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartQuickPractice = () => {
    setPracticeQuestionList(allQuestions);
    // Start with a random or first question
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    setCurrentQuestionIndex(randomIndex);
    setCurrentScreen('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFormulas = (subjectName?: string) => {
    setFormulaTargetSubject(subjectName || 'All');
    setCurrentScreen('formulas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScreenChange = (screen: string) => {
    refreshUserData();
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeQuestion = practiceQuestionList[currentQuestionIndex] || allQuestions[0];
  const selectedSubjectMeta = getSubjectByName(selectedSubjectName) || getSubjectByName('Analog Circuits')!;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleScreenChange}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        isOnline={isOnline}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full py-4">
        {currentScreen === 'dashboard' && (
          <Dashboard
            stats={stats}
            notebookEntries={notebookEntries.filter((n) => !n.mastered)}
            onSelectSubject={handleSelectSubject}
            onNavigate={handleScreenChange}
            onStartQuickPractice={handleStartQuickPractice}
          />
        )}

        {currentScreen === 'subjects' && (
          <SubjectBrowser
            onSelectSubject={handleSelectSubject}
            onNavigateFormulas={handleNavigateFormulas}
          />
        )}

        {currentScreen === 'topics' && (
          <TopicBrowser
            subject={selectedSubjectMeta}
            questions={allQuestions}
            onBack={() => handleScreenChange('subjects')}
            onSelectTopicQuestions={handleSelectTopicQuestions}
            onNavigateFormulas={handleNavigateFormulas}
          />
        )}

        {currentScreen === 'practice' && activeQuestion && (
          <QuestionSolver
            question={activeQuestion}
            hasNext={currentQuestionIndex < practiceQuestionList.length - 1}
            hasPrev={currentQuestionIndex > 0}
            onNext={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, practiceQuestionList.length - 1))}
            onPrev={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
            onNavigateQuestion={handleOpenSpecificQuestion}
            defaultLearnMode={settings.learnModeDefault}
          />
        )}

        {currentScreen === 'tests' && (
          <PracticeTestView
            availableQuestions={allQuestions}
            onOpenQuestion={handleOpenSpecificQuestion}
          />
        )}

        {currentScreen === 'bookmarks' && (
          <BookmarksView
            bookmarks={bookmarks}
            allQuestions={allQuestions}
            onOpenQuestion={handleOpenSpecificQuestion}
            onRefreshBookmarks={refreshUserData}
          />
        )}

        {currentScreen === 'notebook' && (
          <NotebookView
            entries={notebookEntries}
            allQuestions={allQuestions}
            onOpenQuestion={handleOpenSpecificQuestion}
            onRefreshNotebook={refreshUserData}
          />
        )}

        {currentScreen === 'formulas' && (
          <FormulaLibraryView initialSubject={formulaTargetSubject} />
        )}

        {currentScreen === 'analytics' && <AnalyticsView stats={stats} />}

        {currentScreen === 'offline' && (
          <OfflineDownloadsView allQuestions={allQuestions} isOnline={isOnline} />
        )}

        {currentScreen === 'settings' && (
          <SettingsView
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onDataReset={refreshUserData}
          />
        )}

        {currentScreen === 'question_bank' && (
          <QuestionBankManagerView
            onOpenQuestion={handleOpenSpecificQuestion}
            onRefreshAllQuestions={refreshUserData}
          />
        )}

        {currentScreen === 'more' && (
          <MoreMenuScreen
            onNavigate={handleScreenChange}
            notebookCount={notebookEntries.filter((n) => !n.mastered).length}
            bookmarkCount={bookmarks.length}
          />
        )}
      </main>

      {/* Bottom Sticky Mobile Navigation */}
      <BottomNav
        currentScreen={currentScreen}
        onNavigate={handleScreenChange}
        notebookBadgeCount={notebookEntries.filter((n) => !n.mastered).length}
      />
    </div>
  );
}

export default App;
