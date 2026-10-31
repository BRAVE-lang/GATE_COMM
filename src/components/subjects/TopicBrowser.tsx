import React from 'react';
import { SubjectMetadata, Question } from '../../types/question';
import { ArrowLeft, Play, FileCheck2, BookOpen, ChevronRight, Zap } from 'lucide-react';

interface TopicBrowserProps {
  subject: SubjectMetadata;
  questions: Question[];
  onBack: () => void;
  onSelectTopicQuestions: (subjectName: string, topicName?: string) => void;
  onNavigateFormulas: (subjectName: string) => void;
}

export const TopicBrowser: React.FC<TopicBrowserProps> = ({
  subject,
  questions,
  onBack,
  onSelectTopicQuestions,
  onNavigateFormulas,
}) => {
  // Count questions by topic
  const subjectQuestions = questions.filter((q) => q.subject === subject.name);

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-3 mb-1">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
            {subject.name}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Weightage: {subject.typicalWeightageMarks} • {subjectQuestions.length} Questions Available
          </p>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {subject.description}
        </p>

        <div className="mt-3 flex items-center space-x-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => onSelectTopicQuestions(subject.name)}
            className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Practise All {subject.shortName}</span>
          </button>

          <button
            onClick={() => onNavigateFormulas(subject.name)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center space-x-1.5 transition"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Formulas</span>
          </button>
        </div>
      </div>

      {/* Topics Breakdown */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
          Syllabus Topics
        </h3>

        {subject.topics.map((topic, index) => {
          const topicQuestions = subjectQuestions.filter((q) => q.topic === topic.name);

          return (
            <div
              key={topic.name}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-500 transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-center font-mono">
                      {index + 1}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {topic.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-7">
                    {topic.description}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
                    {topic.estimatedWeightage}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs pl-7">
                <span className="text-slate-500 font-medium">
                  {topicQuestions.length} {topicQuestions.length === 1 ? 'question' : 'questions'}
                </span>

                <button
                  onClick={() => onSelectTopicQuestions(subject.name, topic.name)}
                  className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center space-x-1"
                >
                  <span>Practise Topic</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

