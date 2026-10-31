import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../../types/question';
import { MathView } from '../common/MathView';
import { OptionSelector } from './OptionSelector';
import { NatInput } from './NatInput';
import { DetailedSolutionViewer } from './DetailedSolutionViewer';
import { VirtualCalculator } from '../common/VirtualCalculator';
import { ScratchpadModal } from '../common/ScratchpadModal';
import { AddToNotebookModal } from '../notebook/AddToNotebookModal';
import { calculateQuestionMarks } from '../../services/scoring';
import { StorageService } from '../../services/storage';
import { aiService, AiExplanationResponse } from '../../services/aiService';
import confetti from 'canvas-confetti';
import {
  Bookmark,
  BookmarkCheck,
  Calculator,
  PenTool,
  Clock,
  Eye,
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Share2,
} from 'lucide-react';

interface QuestionSolverProps {
  question: Question;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  onNavigateQuestion?: (id: string) => void;
  defaultLearnMode?: boolean;
}

export const QuestionSolver: React.FC<QuestionSolverProps> = ({
  question,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
  onNavigateQuestion,
  defaultLearnMode = true,
}) => {
  const [userAnswer, setUserAnswer] = useState<string | string[] | number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSolutionRevealed, setIsSolutionRevealed] = useState<boolean>(false);
  const [learnMode, setLearnMode] = useState<boolean>(defaultLearnMode);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [isNotebookModalOpen, setIsNotebookModalOpen] = useState<boolean>(false);
  const [secondsSpent, setSecondsSpent] = useState<number>(0);
  const [aiGuidance, setAiGuidance] = useState<AiExplanationResponse | null>(null);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [showAiDrawer, setShowAiDrawer] = useState<boolean>(false);

  const timerRef = useRef<any>(null);

  // Initialize or reset on question change
  useEffect(() => {
    setUserAnswer(null);
    setIsSubmitted(false);
    setIsSolutionRevealed(learnMode);
    setIsBookmarked(StorageService.isBookmarked(question.id));
    setSecondsSpent(0);
    setAiGuidance(null);
    setShowAiDrawer(false);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSecondsSpent((s) => s + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id, learnMode]);

  const handleSelectOption = (optId: string) => {
    if (isSubmitted && !learnMode) return;

    if (question.type === 'MCQ') {
      setUserAnswer(optId);
    } else if (question.type === 'MSQ') {
      const current = Array.isArray(userAnswer) ? [...userAnswer] : [];
      const idx = current.indexOf(optId);
      if (idx >= 0) {
        current.splice(idx, 1);
      } else {
        current.push(optId);
      }
      setUserAnswer(current);
    }
  };

  const handleNatChange = (val: string) => {
    if (isSubmitted && !learnMode) return;
    setUserAnswer(val);
  };

  const handleClear = () => {
    setUserAnswer(null);
    setIsSubmitted(false);
    if (!learnMode) setIsSolutionRevealed(false);
  };

  const handleToggleBookmark = () => {
    const nextState = StorageService.toggleBookmark(question.id);
    setIsBookmarked(nextState);
  };

  const handleSubmit = () => {
    if (userAnswer === null || userAnswer === '') return;

    setIsSubmitted(true);
    setIsSolutionRevealed(true);

    const result = calculateQuestionMarks(question, userAnswer);

    // Save attempt in user history
    StorageService.recordAttempt({
      questionId: question.id,
      subject: question.subject,
      isCorrect: result.isCorrect,
      userResponse: userAnswer,
      timeTakenSeconds: secondsSpent,
      timestamp: Date.now(),
      mode: 'practice',
    });

    if (result.isCorrect) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // Fallback gracefully
      }
    } else {
      // Prompt user to add to notebook
      setIsNotebookModalOpen(true);
    }
  };

  const handleFetchAiTutor = async () => {
    if (aiGuidance) {
      setShowAiDrawer(!showAiDrawer);
      return;
    }
    setIsAiLoading(true);
    setShowAiDrawer(true);
    const guidance = await aiService.getTutorGuidance(question);
    setAiGuidance(guidance);
    setIsAiLoading(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const result = isSubmitted ? calculateQuestionMarks(question, userAnswer) : null;

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-3 sm:px-4">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {question.subject}
            </span>
            <span className="text-xs text-slate-500 font-medium truncate max-w-[150px] sm:max-w-xs">
              {question.topic}
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl text-xs font-medium">
            <button
              onClick={() => setLearnMode(true)}
              className={`px-2.5 py-1 rounded-lg transition ${
                learnMode
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Learn Mode
            </button>
            <button
              onClick={() => {
                setLearnMode(false);
                if (!isSubmitted) setIsSolutionRevealed(false);
              }}
              className={`px-2.5 py-1 rounded-lg transition ${
                !learnMode
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Exam Mode
            </button>
          </div>
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Type: <span className="text-indigo-600 dark:text-indigo-400">{question.type}</span>
            </span>
            <span>•</span>
            <span>
              Marks: <strong className="text-slate-700 dark:text-slate-300">+{question.marks}</strong>
              {question.negativeMarks > 0 ? (
                <span className="text-rose-500"> / -{question.negativeMarks}</span>
              ) : (
                <span className="text-emerald-500"> / 0</span>
              )}
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1 text-slate-600 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono">{formatTime(secondsSpent)}</span>
            </span>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsCalcOpen(true)}
              title="GATE Virtual Calculator"
              className="p-1.5 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Calculator className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsScratchpadOpen(true)}
              title="Rough Work Scratchpad"
              className="p-1.5 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <PenTool className="w-4 h-4" />
            </button>

            <button
              onClick={handleToggleBookmark}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
              className={`p-1.5 rounded-lg transition ${
                isBookmarked
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                  : 'text-slate-600 hover:text-amber-500 dark:text-slate-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm mb-4">
        {/* Source & Provenance Badge */}
        <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 mb-3">
          <span className="font-semibold text-slate-700 dark:text-slate-300">ID: {question.id}</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">
            {question.source}
          </span>
        </div>

        {/* Question Statement */}
        <div className="text-base sm:text-lg text-slate-900 dark:text-slate-100 leading-relaxed font-normal mb-5">
          <MathView content={question.statement} />
        </div>

        {/* Inline Circuit / Figure if present */}
        {question.figure && (
          <div className="my-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
            {question.figure.type === 'svg' ? (
              <div
                className="overflow-x-auto flex justify-center py-2"
                dangerouslySetInnerHTML={{ __html: question.figure.content }}
              />
            ) : (
              <img
                src={question.figure.content}
                alt={question.figure.alt || 'Circuit diagram'}
                className="max-w-full h-auto mx-auto rounded-lg"
              />
            )}
            {question.figure.caption && (
              <p className="text-xs text-slate-500 mt-2 font-medium italic">{question.figure.caption}</p>
            )}
          </div>
        )}

        {/* Options / NAT input */}
        <div className="mt-6">
          {question.type === 'NAT' ? (
            <NatInput
              value={typeof userAnswer === 'string' || typeof userAnswer === 'number' ? userAnswer : null}
              onChange={handleNatChange}
              disabled={isSubmitted && !learnMode}
              showCorrectness={isSubmitted || isSolutionRevealed}
              officialAnswer={question.officialAnswer}
            />
          ) : (
            <OptionSelector
              type={question.type}
              options={question.options || []}
              selectedAnswer={userAnswer}
              onSelectOption={handleSelectOption}
              disabled={isSubmitted && !learnMode}
              showCorrectness={isSubmitted || isSolutionRevealed}
              officialAnswer={question.officialAnswer}
            />
          )}
        </div>

        {/* Action Buttons Toolbar */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleClear}
              type="button"
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Response</span>
            </button>

            <button
              onClick={handleFetchAiTutor}
              type="button"
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-violet-50 hover:bg-violet-100 dark:bg-violet-950/40 dark:hover:bg-violet-900/40 text-violet-700 dark:text-violet-300 flex items-center space-x-1.5 transition border border-violet-200 dark:border-violet-800/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-500 animate-pulse" />
              <span>{showAiDrawer ? 'Hide Concept Hint' : 'Concept Hint'}</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {!isSolutionRevealed && (
              <button
                type="button"
                onClick={() => setIsSolutionRevealed(true)}
                className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Show Solution</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={userAnswer === null || userAnswer === ''}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl text-white shadow-sm transition flex items-center space-x-1.5 ${
                userAnswer !== null && userAnswer !== ''
                  ? 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md active:scale-95'
                  : 'bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-60'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isSubmitted ? 'Re-check Answer' : 'Submit & Check'}</span>
            </button>
          </div>
        </div>

        {/* Result Feedback Banner */}
        {isSubmitted && result && (
          <div
            className={`mt-4 p-4 rounded-xl flex items-center justify-between border ${
              result.isCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/30 text-emerald-900 dark:text-emerald-100'
                : 'bg-rose-50 dark:bg-rose-950/40 border-rose-500/30 text-rose-900 dark:text-rose-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              {result.isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0" />
              )}
              <div>
                <p className="font-bold text-sm">
                  {result.isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                </p>
                <p className="text-xs opacity-90">
                  {result.isCorrect
                    ? `Awarded +${result.marksEarned} Marks (${question.type})`
                    : result.marksEarned < 0
                    ? `Deducted ${result.marksEarned} Marks (-${question.negativeMarks} negative marking)`
                    : 'No negative marks for NAT/MSQ.'}
                </p>
              </div>
            </div>

            {!result.isCorrect && (
              <button
                type="button"
                onClick={() => setIsNotebookModalOpen(true)}
                className="px-3 py-1.5 text-xs font-bold rounded-lg bg-rose-600 text-white hover:bg-rose-700 flex items-center space-x-1 shadow-xs transition"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Save to Notebook</span>
              </button>
            )}
          </div>
        )}

        {/* AI Pedagogical Guidance Drawer */}
        {showAiDrawer && (
          <div className="mt-4 p-4 rounded-xl bg-violet-50/80 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 text-slate-800 dark:text-slate-200 text-xs space-y-2.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between font-bold text-violet-800 dark:text-violet-300">
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-violet-500" />
                <span className="uppercase tracking-wider">GATE Professor Guidance</span>
              </span>
              <span className="text-[10px] bg-violet-200 dark:bg-violet-900/60 text-violet-800 dark:text-violet-300 px-2 py-0.5 rounded-full font-mono">
                {aiGuidance?.source === 'remote_ai' ? 'Live AI' : 'Pedagogical Core'}
              </span>
            </div>

            {isAiLoading ? (
              <div className="py-3 text-center text-violet-600 dark:text-violet-400 font-medium animate-pulse">
                Synthesizing conceptual hint for {question.topic}...
              </div>
            ) : aiGuidance ? (
              <div className="space-y-2">
                <div>
                  <strong className="text-violet-950 dark:text-violet-200">Conceptual Hint: </strong>
                  <span>{aiGuidance.conceptualHint}</span>
                </div>
                <div>
                  <strong className="text-indigo-950 dark:text-indigo-200">Exam Strategy: </strong>
                  <span>{aiGuidance.gateExamTip}</span>
                </div>
                <div>
                  <strong className="text-cyan-950 dark:text-cyan-200">Intuitive Analogy: </strong>
                  <span>{aiGuidance.analogousConcept}</span>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Detailed Worked Solution Viewer (Expanded when revealed) */}
      {isSolutionRevealed && (
        <div className="mb-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Extremely Detailed Worked Solution</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">Step-by-step breakdown</span>
          </div>

          <DetailedSolutionViewer
            solution={question.detailedSolution}
            verificationStatus={question.solutionVerificationStatus}
            provenance={question.provenance}
            provenanceType={question.provenanceType}
            officialAnswerText={
              Array.isArray(question.officialAnswer)
                ? question.officialAnswer.join(', ')
                : String(question.officialAnswer)
            }
            onNavigateRelated={onNavigateQuestion}
          />
        </div>
      )}

      {/* Bottom Sticky-friendly Navigation Bar for Question Switching */}
      <div className="fixed bottom-14 left-0 right-0 max-w-3xl mx-auto px-4 pointer-events-none z-30">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-2.5 flex items-center justify-between pointer-events-auto">
          <button
            type="button"
            disabled={!hasPrev}
            onClick={onPrev}
            className={`px-3 py-2 text-xs font-semibold rounded-xl flex items-center space-x-1 transition ${
              hasPrev
                ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                : 'text-slate-400 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
            {question.id}
          </div>

          <button
            type="button"
            disabled={!hasNext}
            onClick={onNext}
            className={`px-3 py-2 text-xs font-semibold rounded-xl flex items-center space-x-1 transition ${
              hasNext
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                : 'text-slate-400 opacity-40 cursor-not-allowed'
            }`}
          >
            <span className="hidden sm:inline">Next Question</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <VirtualCalculator isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
      <ScratchpadModal isOpen={isScratchpadOpen} onClose={() => setIsScratchpadOpen(false)} />
      <AddToNotebookModal
        questionId={question.id}
        selectedAnswer={userAnswer}
        isOpen={isNotebookModalOpen}
        onClose={() => setIsNotebookModalOpen(false)}
      />
    </div>
  );
};

