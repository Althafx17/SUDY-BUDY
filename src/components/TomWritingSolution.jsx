import React, { useState, useEffect, useRef } from 'react';
import { Zap, RotateCcw, CheckCircle2, FastForward } from 'lucide-react';
import FormattedSolution from './FormattedSolution';

export default function TomWritingSolution({
  text,
  animate = true,
  isCompact = true,
  onComplete
}) {
  const allLines = React.useMemo(() => {
    if (!text || typeof text !== 'string') return [];
    return text.split('\n');
  }, [text]);

  const [currentLineCount, setCurrentLineCount] = useState(() => (animate ? 1 : allLines.length));
  const [speed, setSpeed] = useState('normal'); // 'normal' | 'fast'
  const [isDone, setIsDone] = useState(() => !animate || allLines.length <= 1);
  const containerRef = useRef(null);

  // If text changes (e.g. new answer)
  useEffect(() => {
    if (animate && allLines.length > 1) {
      setCurrentLineCount(1);
      setIsDone(false);
      setSpeed('normal');
    } else {
      setCurrentLineCount(allLines.length);
      setIsDone(true);
    }
  }, [text, animate, allLines.length]);

  // Line-by-line animation effect
  useEffect(() => {
    if (isDone || !animate) return;

    if (currentLineCount >= allLines.length) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const intervalMs = speed === 'fast' ? 14 : 70;
    const timer = setTimeout(() => {
      setCurrentLineCount(prev => {
        const next = prev + 1;
        if (next >= allLines.length) {
          setIsDone(true);
          onComplete?.();
        }
        return next;
      });
    }, intervalMs);

    return () => clearTimeout(timer);
  }, [currentLineCount, speed, isDone, animate, allLines.length, onComplete]);

  const handleFasten = () => {
    setSpeed(prev => (prev === 'fast' ? 'normal' : 'fast'));
  };

  const handleInstant = () => {
    setCurrentLineCount(allLines.length);
    setIsDone(true);
    onComplete?.();
  };

  const handleReplay = () => {
    setCurrentLineCount(1);
    setIsDone(false);
    setSpeed('normal');
  };

  const visibleText = isDone ? text : allLines.slice(0, currentLineCount).join('\n');

  return (
    <div className={`tom-solution-container ${isDone ? 'is-complete' : 'is-writing'}`} ref={containerRef}>
      {/* Tom writing control banner */}
      <div className={`tom-writing-bar ${isDone ? 'done' : 'active'}`}>
        <div className="tom-bar-left">
          <div className="tom-bar-avatar-wrap">
            <img src="/logo.png" alt="Tom AI" className="tom-bar-avatar" />
            {!isDone && <span className="tom-writing-pen-badge">✍️</span>}
          </div>
          <div className="tom-bar-meta">
            <div className="tom-bar-headline">
              <strong>Tom AI</strong>
              {!isDone ? (
                <span className="tom-writing-tag">
                  <span className="pencil-wiggle">✍️</span> Writing each line...
                </span>
              ) : (
                <span className="tom-verified-tag">
                  <CheckCircle2 size={12} /> Solution Verified
                </span>
              )}
            </div>
            <small className="tom-bar-sub">
              {!isDone
                ? `Writing line ${currentLineCount} of ${allLines.length} (${Math.round((currentLineCount / Math.max(1, allLines.length)) * 100)}%)`
                : 'KTU 2019 Scheme Step-by-Step Model Solution'}
            </small>
          </div>
        </div>

        {/* Speed / Fasting Buttons */}
        {!isDone ? (
          <div className="tom-bar-actions">
            <button
              type="button"
              className={`tom-speed-btn ${speed === 'fast' ? 'fast-active' : ''}`}
              onClick={handleFasten}
              title="Fasten typing speed (Turbo 5x)"
            >
              <Zap size={13} className={speed === 'fast' ? 'zap-glow' : ''} />
              <span>{speed === 'fast' ? '⚡ Turbo (5x)' : '⏩ Fasten'}</span>
            </button>
            <button
              type="button"
              className="tom-instant-btn"
              onClick={handleInstant}
              title="Skip animation and display full answer immediately"
            >
              <FastForward size={13} />
              <span>Instant</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="tom-replay-btn"
            onClick={handleReplay}
            title="Watch Tom write this answer again"
          >
            <RotateCcw size={11} />
            <span>Replay</span>
          </button>
        )}
      </div>

      {/* Render the formatted textbook-quality answer */}
      <div className="tom-solution-render-box">
        <FormattedSolution text={visibleText} isCompact={isCompact} />
      </div>

      {/* Active writing indicator at the end while writing */}
      {!isDone && (
        <div className="tom-active-writing-footer">
          <div className="tom-writing-caret-row">
            <span className="tom-caret-pencil">✍️</span>
            <span className="tom-caret-text">Tom is writing line {currentLineCount}...</span>
            <span className="tom-typing-dots">
              <span />
              <span />
              <span />
            </span>
          </div>
          <button
            type="button"
            className="tom-footer-fast-link"
            onClick={handleInstant}
          >
            ⚡ Need it now? Show full answer
          </button>
        </div>
      )}
    </div>
  );
}
