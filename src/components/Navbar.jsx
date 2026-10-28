import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Settings as SettingsIcon, 
  Flame,
  Menu,
  BookOpen,
  GitBranch,
  Bell,
  Search
} from 'lucide-react';
import PomodoroTimer from './PomodoroTimer';
import { THEMES } from '../constants/themes';

export default function Navbar({ 
  currentView, 
  currentSemester,
  onSelectSemester,
  onNavigate, 
  onOpenFocusModal,
  onToggleMobileSidebar,
  currentTheme,
  onOpenThemeModal,
  showFullNav = false
}) {
  const getViewTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Dashboard Overview';
      case 'subject': return 'Course Syllabus & PYQ Bank';
      case 'timetable': return 'Exam Schedule & Deadlines';
      case 'revision': return 'Revision Sprint Checklist';
      case 'notes': return 'Academic Notes Vault';
      case 'settings': return 'System Settings';
      default: return 'Study Buddy';
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard & Stats', icon: LayoutDashboard },
    { id: 'timetable', label: 'Exam Schedule', icon: Calendar },
    { id: 'revision', label: 'Revision Sprint', icon: CheckSquare },
    { id: 'notes', label: 'Notes Vault', icon: FileText },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <header className="sticky top-0 z-30 w-full neon-navbar text-[#f0f6fc] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4 relative z-10">
        {/* Left Side: Mobile Menu Button & Study Tracker Title */}
        <div className="flex items-center gap-3 min-w-0">
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-1.5 rounded-md text-[#8b949e] hover:text-[#00f5ff] hover:bg-cyan-500/10 border border-white/10 transition-colors"
              title="Open navigation menu"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2.5 truncate">
            <div className="p-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/30 neon-glow-cyan shrink-0">
              <BookOpen className="w-4 h-4 text-[#00f5ff]" />
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold truncate">
              <span 
                onClick={() => onNavigate('dashboard')}
                className="neon-text-gradient cursor-pointer truncate font-extrabold tracking-tight text-sm sm:text-base hover:opacity-90 transition-opacity"
              >
                Study Tracker
              </span>
            </div>

            {/* Semester tag with Neon Badge Glow */}
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full neon-badge font-bold shrink-0 uppercase tracking-wider">
              {currentSemester}
            </span>
          </div>
        </div>

        {/* Center: Top Navigation Tabs (if showFullNav) */}
        {showFullNav && (
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl border border-cyan-500/20 bg-[#0d1117]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,245,255,0.06)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all font-medium ${
                    isActive
                      ? 'neon-nav-pill-active'
                      : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#00f5ff]' : ''}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right Tools: Pomodoro, Focus Room, Theme */}
        <div className="flex items-center gap-2.5 shrink-0">
          <PomodoroTimer />

          {/* Focus Room Button with Amber Neon Glow */}
          <button
            onClick={onOpenFocusModal}
            className="px-3 py-1.5 text-xs flex items-center gap-1.5 rounded-xl font-bold bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/10 border border-orange-500/50 text-orange-300 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all cursor-pointer"
            title="Open Focus Room & Lo-Fi"
            aria-label="Open Focus Room & Lo-Fi"
          >
            <Flame className="w-3.5 h-3.5 text-[#f97316] animate-pulse" aria-hidden="true" />
            <span className="hidden sm:inline">Focus</span>
          </button>

          {/* Profile / Study Tracker Badge with Cyan Neon Ring */}
          <button 
            type="button"
            onClick={() => onNavigate('dashboard')}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/60 flex items-center justify-center text-xs font-mono font-black text-cyan-300 cursor-pointer shadow-[0_0_12px_rgba(0,245,255,0.4)] hover:shadow-[0_0_18px_rgba(0,245,255,0.7)] hover:border-cyan-300 transition-all"
            title="Study Tracker Dashboard"
            aria-label="View study tracker dashboard"
          >
            ST
          </button>
        </div>
      </div>
    </header>
  );
}
