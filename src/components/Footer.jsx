import React from 'react';
import { BookOpen, Flame, Sparkles, CheckCircle2, Heart } from 'lucide-react';

export default function Footer({ onNavigate, onOpenFocusModal, currentSemester = 'S1' }) {
  return (
    <footer className="w-full neon-footer-green text-[#c9d1d9] mt-auto relative z-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-[#00ff88]/20">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#00ff88]/15 border border-[#00ff88]/50 neon-green-glow">
                <BookOpen className="w-4 h-4 text-[#00ff88]" />
              </div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight neon-green-text">
                Study Buddy
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full neon-green-badge font-bold uppercase tracking-wider">
                KTU {currentSemester}
              </span>
            </div>
            <p className="text-xs text-[#8e95a5] max-w-md leading-relaxed">
              Curated syllabus tracker, PYQ repository, and smart revision sprint engine engineered for KTU B.Tech scholars.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#00ff88]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
              </span>
              <span className="text-[#a7f3d0] font-semibold">System Online</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">All Modules &amp; Solved PYQs Synced</span>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00ff88] mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-[#8b949e]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('dashboard')}
                  className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#00ff88]/60">›</span> Dashboard &amp; Mastery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('timetable')}
                  className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#00ff88]/60">›</span> Exam Timetable
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('revision')}
                  className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#00ff88]/60">›</span> Revision Sprint
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('notes')}
                  className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#00ff88]/60">›</span> Notes &amp; PYQ Vault
                </button>
              </li>
            </ul>
          </div>

          {/* Focus & Productivity */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00ff88] mb-3">
              Productivity
            </h4>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={onOpenFocusModal}
                className="w-full px-3 py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-2 bg-[#00ff88]/15 hover:bg-[#00ff88]/25 border border-[#00ff88]/50 text-[#00ff88] hover:shadow-[0_0_16px_rgba(0,255,136,0.4)] transition-all cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 animate-pulse text-[#00ff88]" />
                <span>Launch Focus Room</span>
              </button>
              <div className="p-2.5 rounded-lg bg-black/40 border border-[#00ff88]/20 text-[11px] text-[#8e95a5]">
                <span className="text-[#00ff88] font-bold">Pro-tip:</span> Study in 25-minute Pomodoro bursts to maximize recall retention.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6e7681]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Study Buddy. Built with</span>
            <Heart className="w-3 h-3 text-[#00ff88] fill-[#00ff88]" />
            <span>for KTU Scholars.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="neon-green-text font-mono text-[11px] font-bold">
              NEON ACCENT ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
