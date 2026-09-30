import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Plus, 
  Sparkles, 
  Headphones, 
  BookOpen, 
  Flame, 
  Maximize2, 
  Minimize2, 
  CheckCircle2
} from 'lucide-react';
import YouTubeIcon from './YouTubeIcon';
import confetti from 'canvas-confetti';
import { getYouTubeEmbedUrl } from '../utils/youtube';

export default function FocusModal({ 
  isOpen, 
  onClose, 
  data, 
  currentSemester 
}) {
  const [mode, setMode] = useState('focus'); // 'focus' | 'shortBreak' | 'longBreak'
  const [durationMinutes, setDurationMinutes] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  // Selected Active Subject and Topic for focused session
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState('');

  // Audio / Lofi Beats state
  const [ambientAudio, setAmbientAudio] = useState('lofi'); // 'none' | 'lofi' | 'rain' | 'binaural'
  const [customYtUrl, setCustomYtUrl] = useState('');
  const [showYtInput, setShowYtInput] = useState(false);

  // Preset YouTube Study Playlists / Lofi Streams
  const AMBIENT_PRESETS = {
    lofi: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    rain: 'https://www.youtube.com/watch?v=mPZkdNFkNps',
    binaural: 'https://www.youtube.com/watch?v=WPni755-Krg'
  };

  const subjects = data[currentSemester]?.subjects || [];

  const switchTimer = (newMode, minutes) => {
    setIsRunning(false);
    setMode(newMode);
    setDurationMinutes(minutes);
    setSecondsLeft(minutes * 60);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}

      if (mode === 'focus') {
        setSessionsCompleted(prev => prev + 1);
        alert('🎉 Awesome focus session! Time for a well-deserved 5-minute break.');
        switchTimer('shortBreak', 5);
      } else {
        alert('✨ Break completed! Ready to dive back in?');
        switchTimer('focus', 25);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, mode]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const totalSeconds = durationMinutes * 60;
  const progressRatio = totalSeconds > 0 ? (totalSeconds - secondsLeft) / totalSeconds : 0;
  const strokeDashoffset = 440 - (440 * progressRatio);

  const activeSubject = subjects.find(s => s.id === selectedSubjectId);
  const activeSubjectTopics = (activeSubject?.modules || []).flatMap(m => m.topics || []);

  const currentAmbientVideoUrl = ambientAudio === 'custom' 
    ? customYtUrl 
    : (AMBIENT_PRESETS[ambientAudio] || null);

  const ambientEmbedUrl = currentAmbientVideoUrl ? getYouTubeEmbedUrl(currentAmbientVideoUrl, true) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Apple Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Main Focus Modal Card */}
      <div className="relative w-full max-w-2xl bg-white/95 border border-white/80 rounded-[32px] shadow-2xl p-6 sm:p-8 text-slate-800 z-10 backdrop-blur-3xl transition-all">
        {/* Top Bar: Title & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-pink-500 flex items-center justify-center shadow-md shadow-violet-200">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span>Deep Focus Room</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200 font-bold">
                  Pomodoro
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Distraction-free study space with ambient soundscapes & active task lock
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs (Apple Segmented Control) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-inner">
            <button
              onClick={() => switchTimer('focus', 25)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'focus' && durationMinutes === 25
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Focus (25m)
            </button>
            <button
              onClick={() => switchTimer('focus', 50)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'focus' && durationMinutes === 50
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Deep Dive (50m)
            </button>
            <button
              onClick={() => switchTimer('shortBreak', 5)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'shortBreak' 
                  ? 'bg-white text-emerald-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Short Break (5m)
            </button>
            <button
              onClick={() => switchTimer('longBreak', 15)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'longBreak' 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Long Break (15m)
            </button>
          </div>
        </div>

        {/* Big Circular Timer Display */}
        <div className="flex flex-col items-center justify-center my-6">
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="112"
                cy="112"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-100"
                fill="transparent"
              />
              <circle
                cx="112"
                cy="112"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                className={`transition-all duration-1000 ${
                  mode === 'focus' ? 'text-violet-600' : 'text-emerald-500'
                }`}
                fill="transparent"
                strokeDasharray="440"
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Time inside circle */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-slate-900">
                {timeFormatted}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                {mode === 'focus' ? 'Study Interval' : 'Rest & Recharge'}
              </div>
            </div>
          </div>

          {/* Controls: Play/Pause, Reset, +5 Min */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-7 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-md transition-all ${
                isRunning 
                  ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200' 
                  : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-violet-200'
              }`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              <span>{isRunning ? 'Pause' : 'Start Focus'}</span>
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setSecondsLeft(durationMinutes * 60);
              }}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setSecondsLeft(prev => prev + 300)}
              className="px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 shadow-sm"
              title="Add 5 minutes"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>5m</span>
            </button>
          </div>

          {/* Streak Indicators */}
          <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 font-medium">
            <span>Sessions Today:</span>
            <div className="flex items-center gap-1.5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i < sessionsCompleted ? 'bg-violet-600 shadow-sm' : 'bg-slate-200'
                  }`}
                />
              ))}
              {sessionsCompleted > 4 && (
                <span className="text-xs font-bold text-violet-700">+{sessionsCompleted - 4}</span>
              )}
            </div>
          </div>
        </div>

        {/* Active Study Target Lock */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-violet-600" />
              <span>Target Course & Topic</span>
            </span>
            <span className="text-slate-400 font-semibold">{currentSemester}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              value={selectedSubjectId}
              onChange={(e) => {
                setSelectedSubjectId(e.target.value);
                setSelectedTopicId('');
              }}
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:border-violet-500 shadow-sm"
            >
              <option value="">Select Target Subject...</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.code || 'CRS'})
                </option>
              ))}
            </select>

            <select
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              disabled={!selectedSubjectId}
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:border-violet-500 disabled:opacity-40 shadow-sm"
            >
              <option value="">Select Target Topic...</option>
              {activeSubjectTopics.map(t => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Ambient YouTube / Lofi Study Music */}
        <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-pink-600" />
              <span>Study Ambient Soundscapes (YouTube)</span>
            </span>
            <button
              onClick={() => setShowYtInput(!showYtInput)}
              className="text-[11px] text-pink-600 hover:text-pink-800 font-bold flex items-center gap-1"
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>{showYtInput ? 'Preset Music' : 'Custom YT URL'}</span>
            </button>
          </div>

          {!showYtInput ? (
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'none', label: 'Mute / Silence' },
                { id: 'lofi', label: '🎧 Lofi Chill Beats' },
                { id: 'rain', label: '🌧️ Gentle Rain' },
                { id: 'binaural', label: '🧠 Alpha Waves' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setAmbientAudio(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    ambientAudio === item.id 
                      ? 'bg-pink-600 text-white shadow-sm' 
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customYtUrl}
                onChange={(e) => {
                  setCustomYtUrl(e.target.value);
                  setAmbientAudio('custom');
                }}
                placeholder="Paste any YouTube video or lofi stream URL..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500"
              />
              <button
                onClick={() => setAmbientAudio('custom')}
                disabled={!customYtUrl.trim()}
                className="px-3.5 py-1.5 bg-pink-600 hover:bg-pink-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-sm"
              >
                Play
              </button>
            </div>
          )}

          {/* Embedded Ambient Player */}
          {ambientAudio !== 'none' && ambientEmbedUrl && (
            <div className="mt-2 rounded-xl overflow-hidden aspect-video max-h-40 w-full border border-slate-200 shadow-sm">
              <iframe
                src={ambientEmbedUrl}
                title="Ambient Study Stream"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
