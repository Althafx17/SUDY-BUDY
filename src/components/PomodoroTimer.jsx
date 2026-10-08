import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

export default function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('focus'); // 'focus' (25m) or 'break' (5m)

  useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
      if (mode === 'focus') {
        alert('🎉 Focus session completed! Take a 5-minute break.');
        setMode('break');
        setSecondsLeft(5 * 60);
      } else {
        alert('✨ Break concluded! Ready to focus again?');
        setMode('focus');
        setSecondsLeft(25 * 60);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, mode]);

  const toggleRun = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode) => {
    setIsRunning(false);
    setMode(newMode);
    setSecondsLeft(newMode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="flex items-center gap-2 bg-[#18181b] border border-zinc-700 px-3 py-1.5 rounded-2xl shadow-inner">
      <div className="flex items-center gap-1.5">
        <Timer className={`w-3.5 h-3.5 ${isRunning ? 'text-white animate-spin' : 'text-zinc-500'}`} style={{ animationDuration: '6s' }} />
        <span className="font-mono text-xs font-bold text-zinc-100 tracking-tight">
          {timeFormatted}
        </span>
      </div>

      <div className="flex items-center gap-1 ml-0.5">
        <button
          onClick={toggleRun}
          className={`p-1 rounded-lg text-xs transition-colors ${
            isRunning 
              ? 'bg-zinc-800 text-amber-400 hover:bg-zinc-700' 
              : 'bg-white text-black hover:bg-zinc-200 shadow-sm'
          }`}
          title={isRunning ? 'Pause Timer' : 'Start Focus Timer'}
        >
          {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
        </button>

        <button
          onClick={resetTimer}
          className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs transition-colors"
          title="Reset Timer"
        >
          <RotateCcw className="w-3 h-3" />
        </button>

        <button
          onClick={switchMode(mode === 'focus' ? 'break' : 'focus')}
          className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
          title="Switch Focus/Break"
        >
          {mode === 'focus' ? 'Focus' : 'Break'}
        </button>
      </div>
    </div>
  );
}
