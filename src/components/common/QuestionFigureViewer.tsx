import React, { useState } from 'react';
import { QuestionFigure } from '../../types/question';
import { Maximize2, X, ImageOff, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface QuestionFigureViewerProps {
  figure?: QuestionFigure | null;
  figures?: QuestionFigure[];
  title?: string;
  className?: string;
}

export const QuestionFigureViewer: React.FC<QuestionFigureViewerProps> = ({
  figure,
  figures,
  title,
  className = '',
}) => {
  const [modalFigure, setModalFigure] = useState<QuestionFigure | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Combine single figure and multiple figures array
  const figureList: QuestionFigure[] = [];
  if (figures && figures.length > 0) {
    figureList.push(...figures);
  } else if (figure) {
    figureList.push(figure);
  }

  if (figureList.length === 0) {
    return null;
  }

  const handleOpenModal = (fig: QuestionFigure) => {
    setModalFigure(fig);
    setZoomLevel(1);
  };

  const handleCloseModal = () => {
    setModalFigure(null);
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.4, 3.5));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.4, 0.6));
  const handleResetZoom = () => setZoomLevel(1);

  const handleError = (identifier: string) => {
    setImgErrors((prev) => ({ ...prev, [identifier]: true }));
  };

  return (
    <>
      <div className={`my-4 space-y-4 ${className}`}>
        {figureList.map((fig, idx) => {
          const figKey = fig.id || fig.content || String(idx);
          const hasError = imgErrors[figKey];

          return (
            <div
              key={figKey}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm overflow-hidden"
            >
              {/* Header bar with expand button */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <span className="truncate">
                  {fig.caption ? fig.caption.replace(/^Figure:\s*/i, '') : title || `Figure ${idx + 1}`}
                </span>
                <button
                  type="button"
                  onClick={() => handleOpenModal(fig)}
                  className="flex items-center gap-1 px-2 py-0.5 rounded text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                  title="Expand Diagram"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-semibold">Zoom</span>
                </button>
              </div>

              {/* Diagram Rendering Container */}
              <div
                className="relative p-2.5 sm:p-4 flex flex-col items-center justify-center bg-white dark:bg-slate-950 cursor-pointer group"
                onClick={() => handleOpenModal(fig)}
              >
                {hasError ? (
                  <div className="py-8 px-4 flex flex-col items-center justify-center text-center text-slate-400">
                    <ImageOff className="w-8 h-8 mb-2 stroke-[1.5]" />
                    <p className="text-xs font-medium">Diagram reference available in official paper</p>
                    {fig.caption && (
                      <p className="text-[11px] text-slate-500 mt-1 italic max-w-sm">{fig.caption}</p>
                    )}
                  </div>
                ) : fig.type === 'svg' ? (
                  <div
                    className="w-full max-w-lg overflow-x-auto flex justify-center py-1 transition-transform group-hover:scale-[1.01]"
                    dangerouslySetInnerHTML={{ __html: fig.content }}
                  />
                ) : (
                  <div className="w-full flex justify-center overflow-hidden">
                    <img
                      src={fig.content}
                      alt={fig.alt || fig.caption || 'Circuit / Question Diagram'}
                      onError={() => handleError(figKey)}
                      loading="lazy"
                      className="max-w-full max-h-[360px] sm:max-h-[420px] object-contain rounded-lg filter drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.01]"
                    />
                  </div>
                )}

                {/* Subtitle caption */}
                {fig.caption && !hasError && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium italic text-center">
                    {fig.caption}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Zoom Overlay */}
      {modalFigure && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-slate-800 dark:text-slate-100 truncate max-w-xs sm:max-w-md">
                  {modalFigure.caption || title || 'Circuit Diagram Inspection'}
                </span>
                <span className="text-xs text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full font-mono">
                  {Math.round(zoomLevel * 100)}%
                </span>
              </div>

              {/* Zoom Controls & Close */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="p-1.5 ml-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-red-950/60 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body with Zoom / Pan container */}
            <div className="relative flex-1 p-4 sm:p-6 overflow-auto bg-slate-50 dark:bg-slate-950 flex items-center justify-center min-h-[300px]">
              {modalFigure.type === 'svg' ? (
                <div
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                  className="transition-transform duration-150 flex justify-center w-full"
                  dangerouslySetInnerHTML={{ __html: modalFigure.content }}
                />
              ) : (
                <img
                  src={modalFigure.content}
                  alt={modalFigure.alt || modalFigure.caption || 'Expanded Circuit Diagram'}
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                  className="max-w-full max-h-[75vh] object-contain transition-transform duration-150 rounded"
                />
              )}
            </div>

            {/* Modal Footer */}
            {modalFigure.caption && (
              <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 text-center font-medium">
                {modalFigure.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
