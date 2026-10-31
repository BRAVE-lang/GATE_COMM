import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  content: string;
  className?: string;
  displayMode?: boolean;
}

/**
 * Parses a string containing LaTeX tokens like $...$ (inline) and $$...$$ (display block)
 * and renders them cleanly using KaTeX with graceful fallbacks.
 */
export const MathView: React.FC<MathViewProps> = ({ content, className = '', displayMode = false }) => {
  const renderedContent = useMemo(() => {
    if (!content) return '';

    // If pure display mode is requested for the entire block
    if (displayMode) {
      try {
        return katex.renderToString(content, {
          displayMode: true,
          throwOnError: false,
          strict: false,
        });
      } catch (e) {
        console.warn('KaTeX render error:', e);
        return content;
      }
    }

    // Split text by $$...$$ and $...$
    // Regex matches $$...$$ or $...$
    const parts: string[] = [];
    let lastIndex = 0;
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
    let match: RegExpExecArray | null;

    while ((match = mathRegex.exec(content)) !== null) {
      // Push preceding plain text
      if (match.index > lastIndex) {
        const textSegment = content.substring(lastIndex, match.index);
        parts.push(escapeHtml(textSegment));
      }

      const matchText = match[0];
      const isBlock = matchText.startsWith('$$');
      const formula = isBlock ? matchText.slice(2, -2) : matchText.slice(1, -1);

      try {
        const rendered = katex.renderToString(formula.trim(), {
          displayMode: isBlock,
          throwOnError: false,
          strict: false,
        });
        parts.push(rendered);
      } catch {
        parts.push(escapeHtml(matchText));
      }

      lastIndex = match.index + matchText.length;
    }

    // Push remainder
    if (lastIndex < content.length) {
      parts.push(escapeHtml(content.substring(lastIndex)));
    }

    return parts.join('');
  }, [content, displayMode]);

  return (
    <span
      className={`math-rendered select-text leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br/>');
}

