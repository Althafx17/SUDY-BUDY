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
    <header className="sticky top-0 z-30 w-full bg-[#161b22] border-b border-[#30363d] text-[#c9d1d9] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Study Tracker Title */}
        <div className="flex items-center gap-3 min-w-0">
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-1.5 rounded-md text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] border border-[#30363d]"
              title="Open navigation menu"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2 truncate">
            <BookOpen className="w-4 h-4 text-[#58a6ff] shrink-0" />
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold truncate">
              <span 
                onClick={() => onNavigate('dashboard')}
                className="text-[#f0f6fc] hover:text-[#58a6ff] cursor-pointer truncate font-bold tracking-tight"
              >
                Study Tracker
              </span>
            </div>

            {/* Semester tag */}
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#30363d] bg-[#21262d] text-[#c9d1d9] shrink-0">
              {currentSemester}
            </span>
          </div>
        </div>

        {/* Center: Top Navigation Tabs (if showFullNav) */}
        {showFullNav && (
          <nav className="hidden lg:flex items-center gap-1 p-0.5 rounded-md border border-[#30363d] bg-[#0d1117]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all ${
                    isActive
                      ? 'bg-[#21262d] text-[#f0f6fc] font-semibold border border-[#30363d]'
                      : 'text-[#8b949e] hover:text-[#f0f6fc]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right Tools: Pomodoro, Focus Room, Theme */}
        <div className="flex items-center gap-2 shrink-0">
          <PomodoroTimer />

          {/* Focus Room Button */}
          <button
            onClick={onOpenFocusModal}
            className="btn-gh px-2.5 py-1 text-xs flex items-center gap-1.5"
            title="Open Focus Room & Lo-Fi"
            aria-label="Open Focus Room & Lo-Fi"
          >
            <Flame className="w-3.5 h-3.5 text-[#f97316]" aria-hidden="true" />
            <span className="hidden sm:inline">Focus</span>
          </button>

          {/* Profile / Study Tracker Badge */}
          <button 
            type="button"
            onClick={() => onNavigate('dashboard')}
            className="w-7 h-7 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center text-xs font-mono font-bold text-[#58a6ff] cursor-pointer hover:border-[#8b949e]"
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
