import React, { useState, useMemo } from 'react';
import { Question, SubjectName, QuestionType, DifficultyLevel, ProvenanceType, VerificationStatus } from '../../types/question';
import { questionRepository } from '../../services/questionRepository';
import { questionImportPipeline } from '../../services/pipeline/importer';
import { practiceQuestionGenerator } from '../../services/pipeline/practiceGenerator';
import { ImportReport } from '../../services/pipeline/types';
import { GATE_EC_SUBJECTS } from '../../data/subjects';
import { MathView } from '../common/MathView';
import {
  Database,
  Search,
  Filter,
  ShieldCheck,
  Award,
  AlertTriangle,
  Layers,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  UploadCloud,
  FileText,
  BarChart2,
  RefreshCw,
  CheckCircle2,
  Copy,
  Info,
} from 'lucide-react';

interface QuestionBankManagerViewProps {
  onOpenQuestion: (id: string) => void;
  onRefreshAllQuestions?: () => void;
}

export const QuestionBankManagerView: React.FC<QuestionBankManagerViewProps> = ({
  onOpenQuestion,
  onRefreshAllQuestions,
}) => {
  const [activeTab, setActiveTab] = useState<'browser' | 'coverage' | 'pipeline' | 'generator'>('browser');

  // Filter criteria
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'All'>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<QuestionType | 'All'>('All');
  const [selectedProvenance, setSelectedProvenance] = useState<ProvenanceType | 'All'>('All');
  const [selectedVerification, setSelectedVerification] = useState<VerificationStatus | 'All'>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Generator state
  const [genSubject, setGenSubject] = useState<SubjectName>('Network Theory');
  const [genType, setGenType] = useState<QuestionType>('MSQ');
  const [genDifficulty, setGenDifficulty] = useState<DifficultyLevel>('Hard');
  const [generatedQuestion, setGeneratedQuestion] = useState<Question | null>(null);
  const [genNotice, setGenNotice] = useState<string | null>(null);

  // Pipeline manual batch input state
  const [rawJsonInput, setRawJsonInput] = useState<string>('');
  const [latestReport, setLatestReport] = useState<ImportReport | null>(null);
  const [importStatusMessage, setImportStatusMessage] = useState<string | null>(null);

  const stats = useMemo(() => questionRepository.getStatistics(), []);
  const coverageData = useMemo(() => questionRepository.getCoverageReport(), [latestReport, generatedQuestion]);

  // Query paginated questions
  const queryResult = useMemo(() => {
    return questionRepository.query(
      {
        subject: selectedSubject,
        topic: selectedTopic,
        type: selectedType,
        provenanceType: selectedProvenance,
        verificationStatus: selectedVerification,
        examYear: selectedYear !== 'All' ? Number(selectedYear) : 'All',
        searchQuery,
      },
      currentPage,
      8
    );
  }, [
    selectedSubject,
    selectedTopic,
    selectedType,
    selectedProvenance,
    selectedVerification,
    selectedYear,
    searchQuery,
    currentPage,
    generatedQuestion,
    latestReport,
  ]);

  // Handle Practice Generator
  const handleGeneratePractice = () => {
    const existing = questionRepository.getAll();
    const result = practiceQuestionGenerator.generateOriginalPracticeQuestion(
      {
        subject: genSubject,
        type: genType,
        difficulty: genDifficulty,
      },
      existing
    );

    if (result) {
      questionRepository.addBatch([result]);
      setGeneratedQuestion(result);
      setGenNotice('Original practice question generated, verified, and saved to repository!');
      if (onRefreshAllQuestions) onRefreshAllQuestions();
    } else {
      setGenNotice('No unique un-duplicated template found for this subject/type combination.');
    }
  };

  // Handle Pipeline Batch Import
  const handleRunPipeline = () => {
    if (!rawJsonInput.trim()) {
      setImportStatusMessage('Please paste valid JSON questions array.');
      return;
    }

    try {
      const parsed = JSON.parse(rawJsonInput);
      const batch = Array.isArray(parsed) ? parsed : [parsed];
      const existing = questionRepository.getAll();

      const { importedQuestions, quarantined, report } = questionImportPipeline.processBatch(batch, existing);

      if (importedQuestions.length > 0) {
        questionRepository.addBatch(importedQuestions);
        if (onRefreshAllQuestions) onRefreshAllQuestions();
      }

      setLatestReport(report);
      setImportStatusMessage(
        `Pipeline complete: ${importedQuestions.length} questions imported, ${report.duplicatesDetectedCount} duplicates detected, ${quarantined.length} quarantined for review.`
      );
    } catch (e: any) {
      setImportStatusMessage(`JSON parse error: ${e.message}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <Database className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                  GATE EC Question Bank Repository
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {stats.totalQuestions} Questions Total • {stats.authenticPyqs} Authentic PYQs • {stats.verifiedSolutions} Verified Derivations
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('browser')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'browser'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Browse & Filter
            </button>
            <button
              onClick={() => setActiveTab('coverage')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'coverage'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Coverage Matrix
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'pipeline'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Import Pipeline
            </button>
            <button
              onClick={() => setActiveTab('generator')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'generator'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Practice Generator
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Total Authentic PYQs</span>
            <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">
              {stats.authenticPyqs}
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Authored Practice</span>
            <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
              {stats.authoredPractice}
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Verified Derivations</span>
            <div className="text-base font-extrabold text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">
              {stats.verifiedSolutions}
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Provisional / Review</span>
            <div className="text-base font-extrabold text-amber-600 dark:text-amber-400 font-mono mt-0.5">
              {stats.provisionalSolutions}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: BROWSE & FILTER QUESTION BANK                           */}
      {/* ============================================================== */}
      {activeTab === 'browser' && (
        <div className="space-y-4">
          {/* Filter Controls Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search across questions, topics, equations, or IDs..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div>
                <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">Subject</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value as any);
                    setSelectedTopic('All');
                    setCurrentPage(1);
                  }}
                  className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                >
                  <option value="All">All Subjects (10)</option>
                  {GATE_EC_SUBJECTS.map((s) => (
                    <option key={s.name} value={s.name}>{s.shortName}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">Provenance</label>
                <select
                  value={selectedProvenance}
                  onChange={(e) => {
                    setSelectedProvenance(e.target.value as any);
                    setCurrentPage(1);
                  }}
                  className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                >
                  <option value="All">All Sources</option>
                  <option value="authentic_pyq">Authentic Official PYQs</option>
                  <option value="authored_practice">Authored Practice</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value as any);
                    setCurrentPage(1);
                  }}
                  className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                >
                  <option value="All">All Types (MCQ/MSQ/NAT)</option>
                  <option value="MCQ">MCQ</option>
                  <option value="MSQ">MSQ</option>
                  <option value="NAT">NAT</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                >
                  <option value="All">All Exam Years</option>
                  <option value="2026">GATE 2026 (Model Paper)</option>
                  <option value="2025">GATE 2025</option>
                  <option value="2024">GATE 2024</option>
                  <option value="2023">GATE 2023</option>
                  <option value="2022">GATE 2022</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary & Pagination Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing {queryResult.items.length} of {queryResult.total} matching questions
            </span>
            <span>
              Page {queryResult.page} of {queryResult.totalPages}
            </span>
          </div>

          {/* Question List Cards */}
          <div className="space-y-3">
            {queryResult.items.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center">
                <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">No questions matched the filters</h4>
                <p className="text-xs text-slate-500 mt-1">Try resetting filters or searching a different term.</p>
              </div>
            ) : (
              queryResult.items.map((q) => (
                <div
                  key={q.id}
                  onClick={() => onOpenQuestion(q.id)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 p-4 rounded-2xl shadow-xs transition cursor-pointer group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-bold text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
                        {q.id}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{q.subject}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs text-slate-500">{q.topic}</span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                        {q.type} • {q.marks}M
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                          q.provenanceType === 'authentic_pyq'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        }`}
                      >
                        {q.provenanceType === 'authentic_pyq' ? 'Authentic PYQ' : 'Authored Practice'}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-800 dark:text-slate-200 line-clamp-2 leading-relaxed mb-3">
                    <MathView content={q.statement} />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2.5 border-t border-slate-100 dark:border-slate-800 text-slate-500">
                    <span className="text-[11px] truncate max-w-xs">{q.source}</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition flex items-center space-x-1">
                      <span>Solve Question</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          {queryResult.totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 pt-2">
              <button
                disabled={queryResult.page <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-40 flex items-center space-x-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <span className="text-xs text-slate-500 font-mono">
                {queryResult.page} / {queryResult.totalPages}
              </span>
              <button
                disabled={queryResult.page >= queryResult.totalPages}
                onClick={() => setCurrentPage((p) => Math.min(queryResult.totalPages, p + 1))}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-40 flex items-center space-x-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: TOPIC COVERAGE MATRIX                                   */}
      {/* ============================================================== */}
      {activeTab === 'coverage' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
              <BarChart2 className="w-4 h-4 text-indigo-600" />
              <span>GATE EC 10-Subject Topic Coverage Matrix</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Tracks imported questions, verified solutions, provisional items, and identifies topics requiring further question ingestion.
            </p>
          </div>

          <div className="space-y-3">
            {coverageData.map((sub) => (
              <div
                key={sub.subject}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{sub.subject}</h4>
                    <span className="text-xs text-slate-500">
                      {sub.totalImported} Questions • {sub.verifiedCount} Verified • {sub.provisionalCount} Provisional
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    {sub.totalImported} Total
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {sub.topics.map((t) => (
                    <div
                      key={t.topic}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                    >
                      <div className="pr-2">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block truncate max-w-[200px]">
                          {t.topic}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {t.verifiedCount} verified • {t.importedCount} total
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          t.status === 'well_covered'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                            : t.status === 'needs_attention'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                        }`}
                      >
                        {t.status === 'well_covered' ? 'Covered' : t.status === 'needs_attention' ? 'Active' : 'Missing'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: IMPORT PIPELINE & QUARANTINE                            */}
      {/* ============================================================== */}
      {activeTab === 'pipeline' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
              <UploadCloud className="w-4 h-4 text-indigo-600" />
              <span>Automated Ingestion & Verification Pipeline</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Validates question syntax, matches official answer keys, performs Jaccard deduplication, and quarantines invalid questions for manual audit without silent dropping.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
            <label className="block text-xs font-semibold text-slate-500 uppercase">
              Paste Raw JSON Question Batch
            </label>
            <textarea
              rows={6}
              placeholder='[ { "sourcePaper": "GATE 2024 EC", "subject": "Analog Circuits", "topic": "Op-Amp Circuits", "type": "NAT", "marks": 2, "statement": "...", "officialAnswerKey": 16.67, ... } ]'
              value={rawJsonInput}
              onChange={(e) => setRawJsonInput(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="flex items-center justify-between">
              <button
                onClick={handleRunPipeline}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Run Ingestion Pipeline</span>
              </button>

              <button
                onClick={() => {
                  setRawJsonInput(JSON.stringify(practiceQuestionGenerator['getPracticeCatalog'](), null, 2));
                }}
                className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Load Sample Batch
              </button>
            </div>

            {importStatusMessage && (
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-medium text-indigo-800 dark:text-indigo-200">
                {importStatusMessage}
              </div>
            )}
          </div>

          {/* Audit Report Details */}
          {latestReport && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Batch Audit Report</span>
                <span className="text-xs font-mono text-slate-500">{latestReport.batchId}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <div className="text-base font-bold font-mono text-slate-900 dark:text-white">
                    {latestReport.totalProcessed}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase">Processed</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60">
                  <div className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    {latestReport.verifiedSolutionsCount}
                  </div>
                  <div className="text-[10px] text-emerald-700 dark:text-emerald-300 uppercase">Verified</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60">
                  <div className="text-base font-bold font-mono text-amber-600 dark:text-amber-400">
                    {latestReport.duplicatesDetectedCount}
                  </div>
                  <div className="text-[10px] text-amber-700 dark:text-amber-300 uppercase">Duplicates</div>
                </div>
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60">
                  <div className="text-base font-bold font-mono text-rose-600 dark:text-rose-400">
                    {latestReport.quarantinedCount}
                  </div>
                  <div className="text-[10px] text-rose-700 dark:text-rose-300 uppercase">Quarantined</div>
                </div>
              </div>

              {latestReport.quarantinedErrors.length > 0 && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 text-xs space-y-2">
                  <span className="font-bold text-rose-900 dark:text-rose-300">Quarantined Items for Manual Review:</span>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto">
                    {latestReport.quarantinedErrors.map((err, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white dark:bg-slate-900 text-[11px] border border-rose-100 dark:border-rose-900/40">
                        <strong className="text-rose-700 dark:text-rose-400">{err.questionId}: </strong>
                        <span>{err.statementPreview}</span>
                        <ul className="list-disc list-inside mt-1 text-slate-600 dark:text-slate-400">
                          {err.errors.map((e, eidx) => (
                            <li key={eidx}>{e}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 4: PRACTICE QUESTION GENERATOR                             */}
      {/* ============================================================== */}
      {activeTab === 'generator' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <span>Expandable Original Practice Generator</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Generates independently authored practice problems with verified solutions, tagged strictly as 'authored_practice' to preserve integrity.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase text-[10px]">Subject</label>
                <select
                  value={genSubject}
                  onChange={(e) => setGenSubject(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                >
                  {GATE_EC_SUBJECTS.map((s) => (
                    <option key={s.name} value={s.name}>{s.shortName}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase text-[10px]">Format</label>
                <select
                  value={genType}
                  onChange={(e) => setGenType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                >
                  <option value="MCQ">MCQ (Multiple Choice)</option>
                  <option value="MSQ">MSQ (Multiple Select)</option>
                  <option value="NAT">NAT (Numerical Answer)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase text-[10px]">Difficulty</label>
                <select
                  value={genDifficulty}
                  onChange={(e) => setGenDifficulty(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                >
                  <option value="Easy">Conceptual (1 Mark)</option>
                  <option value="Medium">Intermediate Numerical</option>
                  <option value="Hard">Multi-Concept Advanced (2 Marks)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGeneratePractice}
              className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate & Verify Original Practice Question</span>
            </button>

            {genNotice && (
              <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-xs text-violet-800 dark:text-violet-200 font-medium">
                {genNotice}
              </div>
            )}

            {generatedQuestion && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{generatedQuestion.id}</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Verified Practice Item
                  </span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  <MathView content={generatedQuestion.statement} />
                </p>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onOpenQuestion(generatedQuestion.id)}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold flex items-center space-x-1"
                  >
                    <span>Solve in Viewer</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

