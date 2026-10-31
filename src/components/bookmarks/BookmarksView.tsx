import React, { useState } from 'react';
import { Question } from '../../types/question';
import { BookmarkItem } from '../../types/user';
import { StorageService } from '../../services/storage';
import { MathView } from '../common/MathView';
import { Bookmark, BookmarkX, Play, ChevronRight, BookOpen, Trash2 } from 'lucide-react';

interface BookmarksViewProps {
  bookmarks: BookmarkItem[];
  allQuestions: Question[];
  onOpenQuestion: (id: string) => void;
  onRefreshBookmarks: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  bookmarks,
  allQuestions,
  onOpenQuestion,
  onRefreshBookmarks,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  // Pair bookmark items with question details
  const bookmarkedQuestions = bookmarks
    .map((b) => {
      const q = allQuestions.find((item) => item.id === b.questionId);
      return q ? { ...b, question: q } : null;
    })
    .filter(Boolean) as (BookmarkItem & { question: Question })[];

  const filtered =
    selectedSubject === 'All'
      ? bookmarkedQuestions
      : bookmarkedQuestions.filter((b) => b.question.subject === selectedSubject);

  const handleRemove = (e: React.MouseEvent, qId: string) => {
    e.stopPropagation();
    StorageService.toggleBookmark(qId);
    onRefreshBookmarks();
  };

  return (
    <div className="w-full max-w-3xl mx-auto pb-24 px-4 space-y-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>Bookmarked Questions</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {bookmarkedQuestions.length} saved {bookmarkedQuestions.length === 1 ? 'question' : 'questions'} for quick revision.
          </p>
        </div>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center mb-3">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">No Bookmarks Yet</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            While solving or reviewing questions, tap the bookmark icon on any tricky question to save it here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((b) => (
            <div
              key={b.questionId}
              onClick={() => onOpenQuestion(b.questionId)}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition shadow-xs cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {b.question.subject}
                  </span>
                  <span>•</span>
                  <span>{b.question.type}</span>
                </div>
                <button
                  onClick={(e) => handleRemove(e, b.questionId)}
                  className="p-1 rounded-lg text-slate-400 hover:text-rose-500 transition"
                  title="Remove Bookmark"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-slate-800 dark:text-slate-200 line-clamp-2 leading-relaxed">
                <MathView content={b.question.statement} />
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-mono">
                  Saved {new Date(b.addedAt).toLocaleDateString()}
                </span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition flex items-center space-x-1">
                  <span>Solve Question</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

