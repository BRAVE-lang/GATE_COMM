import React, { useState, useEffect } from 'react';
import { Question, SubjectName } from '../../types/question';
import { PracticeTestSession, PracticeTestConfig } from '../../types/test';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { StorageService } from '../../services/storage';
import { evaluateTestScore } from '../../services/scoring';
import { OptionSelector } from '../questions/OptionSelector';
import { NatInput } from '../questions/NatInput';
import { MathView } from '../common/MathView';
import { DetailedSolutionViewer } from '../questions/DetailedSolutionViewer';
import { VirtualCalculator } from '../common/VirtualCalculator';
import {
  FileCheck2,
  Clock,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Flag,
  ArrowRight,
  ArrowLeft,
  Grid,
  ChevronRight,
  Calculator,
  BarChart,
  History,
  Trash2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PracticeTestViewProps {
  availableQuestions: Question[];
  onOpenQuestion?: (id: string) => void;
}

export const PracticeTestView: React.FC<PracticeTestViewProps> = ({
  availableQuestions,
}) => {
  const [activeSession, setActiveSession] = useState<PracticeTestSession | null>(null);
  const [testHistory, setTestHistory] = useState<PracticeTestSession[]>([]);
  const [viewMode, setViewMode] = useState<'create' | 'running' | 'review'>('create');
  const [reviewingSession, setReviewingSession] = useState<PracticeTestSession | null>(null);
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  // Test Generator Form State
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectName[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(15);
  const [testMode, setTestMode] = useState<'exam' | 'learn'>('exam');
  const [testTitle, setTestTitle] = useState('GATE EC Mixed Practice Test');

  // Load active or existing sessions on mount
  useEffect(() => {
    const existing = StorageService.getActiveTestSession();
    if (existing) {
      setActiveSession(existing);
      setViewMode('running');
    }
    setTestHistory(StorageService.getTestSessions());
  }, []);

  // Timer loop for active test
  useEffect(() => {
    if (viewMode !== 'running' || !activeSession || activeSession.status !== 'in_progress') return;

    const interval = setInterval(() => {
      setActiveSession((prev) => {
        if (!prev) return null;
        if (prev.totalRemainingSeconds <= 1) {
          clearInterval(interval);
          handleFinishTest(prev);
          return null;
        }

        const currentQId = prev.questions[prev.currentQuestionIndex]?.id;
        const currentSpent = prev.timeSpentSeconds[currentQId] || 0;

        const updated: PracticeTestSession = {
          ...prev,
          totalRemainingSeconds: prev.totalRemainingSeconds - 1,
          timeSpentSeconds: {
            ...prev.timeSpentSeconds,
            [currentQId]: currentSpent + 1,
          },
        };
        StorageService.saveTestSession(updated);
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [viewMode, activeSession?.id]);

  const handleStartTest = () => {
    // Filter questions
    let pool = availableQuestions;
    if (selectedSubjects.length > 0) {
      pool = pool.filter((q) => selectedSubjects.includes(q.subject));
    }
    // Shuffle
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    if (selected.length === 0) {
      alert('No questions matched the selected criteria.');
      return;
    }

    const config: PracticeTestConfig = {
      id: `TEST-${Date.now()}`,
      title: testTitle || 'GATE EC Practice Test',
      subjectFilter: selectedSubjects,
      questionCount: selected.length,
      timeLimitMinutes,
      mode: testMode,
    };

    const initialStatus: Record<string, 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_and_marked'> = {};
    selected.forEach((q, idx) => {
      initialStatus[q.id] = idx === 0 ? 'not_answered' : 'not_visited';
    });

    const newSession: PracticeTestSession = {
      id: config.id,
      config,
      questions: selected,
      currentQuestionIndex: 0,
      userAnswers: {},
      markedForReview: {},
      questionStatus: initialStatus,
      timeSpentSeconds: {},
      totalRemainingSeconds: timeLimitMinutes * 60,
      status: 'in_progress',
      startedAt: Date.now(),
    };

    StorageService.saveTestSession(newSession);
    setActiveSession(newSession);
    setViewMode('running');
  };

  const handleSelectOption = (optId: string) => {
    if (!activeSession) return;
    const currentQ = activeSession.questions[activeSession.currentQuestionIndex];
    let newAns: any = optId;

    if (currentQ.type === 'MSQ') {
      const prev = Array.isArray(activeSession.userAnswers[currentQ.id])
        ? (activeSession.userAnswers[currentQ.id] as string[])
        : [];
      if (prev.includes(optId)) {
        newAns = prev.filter((o) => o !== optId);
      } else {
        newAns = [...prev, optId];
      }
    }

    const updated: PracticeTestSession = {
      ...activeSession,
      userAnswers: {
        ...activeSession.userAnswers,
        [currentQ.id]: newAns,
      },
      questionStatus: {
        ...activeSession.questionStatus,
        [currentQ.id]: activeSession.markedForReview[currentQ.id]
          ? 'answered_and_marked'
          : 'answered',
      },
    };
    setActiveSession(updated);
    StorageService.saveTestSession(updated);
  };

  const handleNatChange = (val: string) => {
    if (!activeSession) return;
    const currentQ = activeSession.questions[activeSession.currentQuestionIndex];
    const updated: PracticeTestSession = {
      ...activeSession,
      userAnswers: {
        ...activeSession.userAnswers,
        [currentQ.id]: val,
      },
      questionStatus: {
        ...activeSession.questionStatus,
        [currentQ.id]: val ? 'answered' : 'not_answered',
      },
    };
    setActiveSession(updated);
    StorageService.saveTestSession(updated);
  };

  const handleToggleMarkReview = () => {
    if (!activeSession) return;
    const currentQ = activeSession.questions[activeSession.currentQuestionIndex];
    const isMarked = !activeSession.markedForReview[currentQ.id];
    const hasAns = activeSession.userAnswers[currentQ.id] !== undefined && activeSession.userAnswers[currentQ.id] !== null && activeSession.userAnswers[currentQ.id] !== '';

    const updated: PracticeTestSession = {
      ...activeSession,
      markedForReview: {
        ...activeSession.markedForReview,
        [currentQ.id]: isMarked,
      },
      questionStatus: {
        ...activeSession.questionStatus,
        [currentQ.id]: isMarked
          ? hasAns
            ? 'answered_and_marked'
            : 'marked_for_review'
          : hasAns
            ? 'answered'
            : 'not_answered',
      },
    };
    setActiveSession(updated);
    StorageService.saveTestSession(updated);
  };

  const handleClearAnswer = () => {
    if (!activeSession) return;
    const currentQ = activeSession.questions[activeSession.currentQuestionIndex];
    const updated: PracticeTestSession = {
      ...activeSession,
      userAnswers: {
        ...activeSession.userAnswers,
        [currentQ.id]: null,
      },
      questionStatus: {
        ...activeSession.questionStatus,
        [currentQ.id]: 'not_answered',
      },
    };
    setActiveSession(updated);
    StorageService.saveTestSession(updated);
  };

  const handleNavigateQuestion = (index: number) => {
    if (!activeSession || index < 0 || index >= activeSession.questions.length) return;
    const targetQ = activeSession.questions[index];
    const updated: PracticeTestSession = {
      ...activeSession,
      currentQuestionIndex: index,
      questionStatus: {
        ...activeSession.questionStatus,
        [targetQ.id]:
          activeSession.questionStatus[targetQ.id] === 'not_visited'
            ? 'not_answered'
            : activeSession.questionStatus[targetQ.id],
      },
    };
    setActiveSession(updated);
    StorageService.saveTestSession(updated);
    setShowPalette(false);
  };

  const handleFinishTest = (sessionToFinish?: PracticeTestSession) => {
    const session = sessionToFinish || activeSession;
    if (!session) return;

    if (!sessionToFinish && !confirm('Are you sure you want to submit your test?')) {
      return;
    }

    const result = evaluateTestScore(session.questions, session.userAnswers, session.timeSpentSeconds);
    const completedSession: PracticeTestSession = {
      ...session,
      status: 'submitted',
      completedAt: Date.now(),
      result,
    };

    StorageService.saveTestSession(completedSession);
    setTestHistory(StorageService.getTestSessions());
    setActiveSession(null);
    setReviewingSession(completedSession);
    setViewMode('review');

    try {
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } catch { }
  };

  const formatRemainingTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // --- RENDER SCREEN MODES ---

  // 1. RUNNING TEST ENVIRONMENT
  if (viewMode === 'running' && activeSession) {
    const currentQ = activeSession.questions[activeSession.currentQuestionIndex];
    const isMarked = activeSession.markedForReview[currentQ?.id] || false;
    const userAns = activeSession.userAnswers[currentQ?.id];

    return (
      <div className="w-full max-w-3xl mx-auto pb-28 px-4 space-y-4 animate-in fade-in">
        {/* Test Header Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">
              {activeSession.config.title}
            </h3>
            <div className="flex items-center space-x-2 text-xs text-slate-500 mt-0.5">
              <span>Q {activeSession.currentQuestionIndex + 1} of {activeSession.questions.length}</span>
              <span>•</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{currentQ.subject}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono text-sm font-bold text-slate-800 dark:text-slate-100">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>{formatRemainingTime(activeSession.totalRemainingSeconds)}</span>
            </div>

            <button
              onClick={() => setIsCalcOpen(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              title="Calculator"
            >
              <Calculator className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowPalette(!showPalette)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              title="Question Palette"
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Palette Drawer (Collapsible) */}
        {showPalette && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-lg animate-in fade-in">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Question Palette
              </span>
              <button onClick={() => setShowPalette(false)} className="text-xs text-indigo-600 font-semibold">
                Close
              </button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {activeSession.questions.map((q, idx) => {
                const status = activeSession.questionStatus[q.id] || 'not_visited';
                let style = 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400';
                if (status === 'answered') style = 'bg-emerald-600 text-white font-bold';
                else if (status === 'marked_for_review') style = 'bg-purple-600 text-white font-bold';
                else if (status === 'answered_and_marked') style = 'bg-purple-600 text-white border-2 border-emerald-400 font-bold';
                else if (status === 'not_answered') style = 'bg-rose-500 text-white font-bold';

                if (idx === activeSession.currentQuestionIndex) {
                  style += ' ring-2 ring-offset-2 ring-indigo-500';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleNavigateQuestion(idx)}
                    className={`h-9 rounded-xl flex items-center justify-center text-xs font-mono transition ${style}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Question Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span>Question ID: {currentQ.id}</span>
            <span>Marks: +{currentQ.marks} {currentQ.negativeMarks > 0 ? `| -${currentQ.negativeMarks}` : '| 0'}</span>
          </div>

          <div className="text-base text-slate-900 dark:text-slate-100 leading-relaxed mb-5">
            <MathView content={currentQ.statement} />
          </div>

          {currentQ.figure && (
            <div className="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-center">
              <div dangerouslySetInnerHTML={{ __html: currentQ.figure.content }} />
            </div>
          )}

          <div className="mt-6">
            {currentQ.type === 'NAT' ? (
              <NatInput
                value={typeof userAns === 'string' || typeof userAns === 'number' ? userAns : null}
                onChange={handleNatChange}
              />
            ) : (
              <OptionSelector
                type={currentQ.type}
                options={currentQ.options || []}
                selectedAnswer={userAns}
                onSelectOption={handleSelectOption}
              />
            )}
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleClearAnswer}
                className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Clear Response
              </button>
              <button
                type="button"
                onClick={handleToggleMarkReview}
                className={`px-3 py-2 text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition ${isMarked
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{isMarked ? 'Marked for Review' : 'Mark for Review'}</span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                disabled={activeSession.currentQuestionIndex === 0}
                onClick={() => handleNavigateQuestion(activeSession.currentQuestionIndex - 1)}
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40"
              >
                Previous
              </button>

              {activeSession.currentQuestionIndex < activeSession.questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => handleNavigateQuestion(activeSession.currentQuestionIndex + 1)}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center space-x-1 shadow-xs"
                >
                  <span>Save & Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleFinishTest()}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                >
                  Submit Test
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Floating Calculator */}
        <VirtualCalculator isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
      </div>
    );
  }

  // 2. REVIEW SUBMITTED TEST SCORE & SOLUTIONS
  if (viewMode === 'review' && reviewingSession?.result) {
    const res = reviewingSession.result;

    return (
      <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-5 animate-in fade-in">
        {/* Score Header Card */}
        <div className="bg-gradient-to-br from-indigo-700 to-slate-900 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold text-indigo-200 bg-white/10 px-2.5 py-0.5 rounded-full">
              Test Completed
            </span>
            <span className="text-xs text-indigo-200">
              {new Date(reviewingSession.completedAt || Date.now()).toLocaleDateString()}
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight">{reviewingSession.config.title}</h2>

          <div className="mt-5 grid grid-cols-4 gap-2 text-center">
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <div className="text-2xl font-extrabold font-mono text-emerald-300">
                {res.marksObtained}
              </div>
              <div className="text-[10px] text-indigo-200 uppercase font-medium">Marks / {res.totalMarks}</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <div className="text-2xl font-extrabold font-mono text-cyan-300">
                {res.accuracyPercentage}%
              </div>
              <div className="text-[10px] text-indigo-200 uppercase font-medium">Accuracy</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <div className="text-2xl font-extrabold font-mono text-emerald-400">
                {res.correctCount}
              </div>
              <div className="text-[10px] text-indigo-200 uppercase font-medium">Correct</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <div className="text-2xl font-extrabold font-mono text-rose-300">
                {res.incorrectCount}
              </div>
              <div className="text-[10px] text-indigo-200 uppercase font-medium">Incorrect</div>
            </div>
          </div>
        </div>

        {/* Subject Score Breakdown */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Subject-Wise Score Breakdown
          </h4>
          <div className="space-y-2">
            {Object.values(res.subjectScores).map((sub) => (
              <div
                key={sub.subject}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-slate-100">{sub.subject}</h5>
                  <p className="text-[11px] text-slate-500">
                    {sub.correctCount} correct • {sub.incorrectCount} incorrect • {sub.skippedCount} skipped
                  </p>
                </div>
                <div className="text-right font-mono">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">
                    {sub.marksObtained}
                  </span>
                  <span className="text-slate-400"> / {sub.totalMarks} M</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Solutions for All Questions in Test */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Question-by-Question Detailed Solutions
            </h3>
            <button
              onClick={() => setViewMode('create')}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
            >
              Back to Tests
            </button>
          </div>

          {reviewingSession.questions.map((q, idx) => {
            const userAns = reviewingSession.userAnswers[q.id];
            const isSkipped = userAns === undefined || userAns === null || userAns === '';

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Q{idx + 1}. {q.subject} ({q.type})
                  </span>
                  <span className="text-slate-500 font-mono">ID: {q.id}</span>
                </div>

                <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  <MathView content={q.statement} />
                </div>

                {q.figure && (
                  <div className="my-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-950 flex justify-center">
                    <div dangerouslySetInnerHTML={{ __html: q.figure.content }} />
                  </div>
                )}

                {/* Response summary */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-xs flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-slate-500">Your Response: </span>
                    <strong className="font-mono text-slate-800 dark:text-slate-200">
                      {isSkipped ? 'Skipped (Unattempted)' : Array.isArray(userAns) ? userAns.join(', ') : String(userAns)}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Official Answer: </span>
                    <strong className="font-mono text-emerald-600 dark:text-emerald-400">
                      {Array.isArray(q.officialAnswer) ? q.officialAnswer.join(', ') : String(q.officialAnswer)}
                    </strong>
                  </div>
                </div>

                {/* Worked Solution */}
                <DetailedSolutionViewer
                  solution={q.detailedSolution}
                  verificationStatus={q.solutionVerificationStatus}
                  provenance={q.provenance}
                  provenanceType={q.provenanceType}
                  officialAnswerText={
                    Array.isArray(q.officialAnswer) ? q.officialAnswer.join(', ') : String(q.officialAnswer)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. CREATE PRACTICE TEST / HISTORY
  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-5 animate-in fade-in">
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <FileCheck2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Practice Test Generator</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Customize timed practice tests according to official GATE negative marking rules (+1/-0.33, +2/-0.66, 0 for NAT/MSQ).
        </p>
      </div>

      {/* Test Creation Form */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        {/* Quick Presets */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Quick Test Presets
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => {
                setTestTitle('GATE EC Full-Length Mock Test (100 Marks)');
                setSelectedSubjects(GATE_EC_SUBJECTS.map((s) => s.name));
                setQuestionCount(65);
                setTimeLimitMinutes(180);
                setTestMode('exam');
              }}
              className="p-3 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/30 text-left hover:bg-indigo-100/60 transition"
            >
              <div className="font-bold text-xs text-indigo-900 dark:text-indigo-200">Full GATE Mock</div>
              <div className="text-[11px] text-slate-500 mt-0.5">65 Qs • 180 min • 100 Marks</div>
            </button>

            <button
              type="button"
              onClick={() => {
                setTestTitle('GATE EC Subject Test (Core Technical)');
                setSelectedSubjects(['Network Theory', 'Signals and Systems', 'Analog Circuits', 'Digital Circuits', 'Control Systems', 'Communications', 'Electronic Devices', 'Electromagnetics']);
                setQuestionCount(25);
                setTimeLimitMinutes(60);
                setTestMode('exam');
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <div className="font-bold text-xs text-slate-800 dark:text-slate-200">Core Subject Test</div>
              <div className="text-[11px] text-slate-500 mt-0.5">25 Qs • 60 min • Technical</div>
            </button>

            <button
              type="button"
              onClick={() => {
                setTestTitle('Daily 10-Question Speed Drill');
                setSelectedSubjects(GATE_EC_SUBJECTS.map((s) => s.name));
                setQuestionCount(10);
                setTimeLimitMinutes(20);
                setTestMode('exam');
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <div className="font-bold text-xs text-slate-800 dark:text-slate-200">Quick Speed Drill</div>
              <div className="text-[11px] text-slate-500 mt-0.5">10 Qs • 20 min • Mixed</div>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Test Title
          </label>
          <input
            type="text"
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Subject Filter Selection */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Subjects Included
            </label>
            <button
              type="button"
              onClick={() =>
                setSelectedSubjects(
                  selectedSubjects.length === GATE_EC_SUBJECTS.length
                    ? []
                    : GATE_EC_SUBJECTS.map((s) => s.name)
                )
              }
              className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold"
            >
              {selectedSubjects.length === GATE_EC_SUBJECTS.length ? 'Deselect All' : 'Select All 10'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {GATE_EC_SUBJECTS.map((s) => {
              const isSelected = selectedSubjects.includes(s.name);
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() =>
                    setSelectedSubjects((prev) =>
                      isSelected ? prev.filter((item) => item !== s.name) : [...prev, s.name]
                    )
                  }
                  className={`p-2.5 rounded-xl border text-left text-xs transition flex items-center justify-between ${isSelected
                      ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                    }`}
                >
                  <span className="truncate pr-1">{s.shortName}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Number of Questions & Time */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Questions
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100"
            >
              <option value={5}>5 Questions (Speed Drill)</option>
              <option value={10}>10 Questions (Standard)</option>
              <option value={25}>25 Questions (Subject Test)</option>
              <option value={35}>35 Questions (Half-Length Mock)</option>
              <option value={65}>65 Questions (Full GATE Mock)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Time Limit
            </label>
            <select
              value={timeLimitMinutes}
              onChange={(e) => setTimeLimitMinutes(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100"
            >
              <option value={10}>10 Minutes (Speed)</option>
              <option value={20}>20 Minutes</option>
              <option value={45}>45 Minutes</option>
              <option value={60}>60 Minutes (1 Hour)</option>
              <option value={90}>90 Minutes (1.5 Hours)</option>
              <option value={180}>180 Minutes (3 Hours - Full GATE)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleStartTest}
          className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2 active:scale-98"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Launch Mock Test</span>
        </button>
      </div>

      {/* Test History List */}
      {testHistory.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1 flex items-center space-x-1.5">
            <History className="w-4 h-4" />
            <span>Previous Test Sessions</span>
          </h3>

          <div className="space-y-2.5">
            {testHistory.map((test) => (
              <div
                key={test.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {test.config.title}
                  </h4>
                  <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                    <span>{test.questions.length} questions</span>
                    <span>•</span>
                    <span>{new Date(test.startedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span className="capitalize font-semibold text-indigo-600 dark:text-indigo-400">
                      {test.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {test.status === 'in_progress' ? (
                    <button
                      onClick={() => {
                        setActiveSession(test);
                        setViewMode('running');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center space-x-1 shadow-xs"
                    >
                      <span>Resume</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : test.result ? (
                    <button
                      onClick={() => {
                        setReviewingSession(test);
                        setViewMode('review');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center space-x-1"
                    >
                      <span>Review ({test.result.marksObtained} M)</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : null}

                  <button
                    onClick={() => {
                      StorageService.deleteTestSession(test.id);
                      setTestHistory(StorageService.getTestSessions());
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500"
                    title="Delete record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
