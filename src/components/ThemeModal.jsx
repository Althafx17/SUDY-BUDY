import React from 'react';
import { X, Check, Palette, Sparkles, Layout, Eye } from 'lucide-react';
import { THEMES, COLOR_ACCENTS } from '../constants/themes';

export default function ThemeModal({ 
  isOpen, 
  onClose, 
  currentTheme, 
  onSelectTheme, 
  currentColorAccent, 
  onSelectColorAccent 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-2xl bg-[#121214] rounded-[28px] shadow-2xl border border-zinc-800 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white shadow-md">
              <Palette className="w-5 h-5 text-zinc-200" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                <span>UI & Layout Theme Studio</span>
              </h2>
              <p className="text-xs text-zinc-400 font-medium">
                Choose between 5 completely different UI designs & color accents
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Section 1: The 5 Completely Different UI & Layouts */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-black uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-zinc-300" />
                <span>Select UI Architecture & Layout ({THEMES.length} Themes)</span>
              </label>
              <span className="text-[11px] text-zinc-500 font-medium">
                Changes layout structure instantly
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {THEMES.map((th) => {
                const isActive = currentTheme === th.id;
                return (
                  <div
                    key={th.id}
                    onClick={() => onSelectTheme(th.id)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 relative group flex flex-col justify-between ${
                      isActive 
                        ? 'border-white bg-[#18181b] shadow-md scale-[1.02]' 
                        : 'border-zinc-800 bg-[#141416] hover:border-zinc-700 hover:bg-[#18181b]'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{th.icon}</span>
                          <div>
                            <h3 className="text-sm font-extrabold text-white leading-snug">
                              {th.name}
                            </h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                              {th.badge}
                            </span>
                          </div>
                        </div>

                        {isActive && (
                          <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-sm font-black">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      <p className="text-[11px] text-zinc-400 font-medium leading-relaxed mt-2">
                        {th.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[10px] font-bold text-zinc-400">
                      <span>Layout:</span>
                      <span className="capitalize font-mono text-zinc-200 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
                        {th.layoutType.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Accent Color Chooser */}
          <div className="pt-2 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-black uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-zinc-300" />
                <span>Color Accent Chooser</span>
              </label>
              <span className="text-[11px] text-zinc-500 font-medium">
                Applies harmonious tones across buttons & badges
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {COLOR_ACCENTS.map((col) => {
                const isColActive = currentColorAccent === col.id;
                return (
                  <button
                    key={col.id}
                    onClick={() => onSelectColorAccent(col.id)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all text-left ${
                      isColActive
                        ? 'border-white bg-[#18181b] font-bold text-white shadow-xs'
                        : 'border-zinc-800 hover:border-zinc-700 bg-[#141416] hover:bg-[#18181b] text-zinc-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${col.dot} shadow-xs shrink-0`} />
                    <span className="text-xs truncate font-medium">{col.name}</span>
                    {isColActive && <Check className="w-3.5 h-3.5 text-white ml-auto shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0d0d0f] border-t border-zinc-800 flex items-center justify-between">
          <div className="text-xs text-zinc-400 font-medium flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Theme & color settings automatically save to your browser</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-white hover:bg-zinc-200 text-black rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
