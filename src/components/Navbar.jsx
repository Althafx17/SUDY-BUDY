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
    { id: 'dashboard', label: 'Repositories & Stats', icon: LayoutDashboard },
    { id: 'timetable', label: 'Exam Schedule', icon: Calendar },
    { id: 'revision', label: 'Revision Sprint', icon: CheckSquare },
    { id: 'notes', label: 'Notes Vault', icon: FileText },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-[#161b22] border-b border-[#30363d] text-[#c9d1d9] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & GitHub Breadcrumb Repo Title */}
        <div className="flex items-center gap-3 min-w-0">
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-1.5 rounded-md text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] border border-[#30363d]"
              title="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2 truncate">
            <BookOpen className="w-4 h-4 text-[#8b949e] shrink-0 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold truncate">
              <span 
                onClick={() => onNavigate('dashboard')}
                className="text-[#58a6ff] hover:underline cursor-pointer"
              >
                Althafx17
              </span>
              <span className="text-[#8b949e]">/</span>
              <span 
                onClick={() => onNavigate('dashboard')}
                className="text-[#f0f6fc] hover:text-[#58a6ff] cursor-pointer truncate font-bold"
              >
                study-buddy
              </span>
            </div>

            {/* Branch pill badge */}
            <div className="hidden md:flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full border border-[#30363d] bg-[#0d1117] text-[#8b949e]">
              <GitBranch className="w-3 h-3 text-[#8b949e]" />
              <span>main</span>
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
          >
            <Flame className="w-3.5 h-3.5 text-[#f97316]" />
            <span className="hidden sm:inline">Focus</span>
          </button>

          {/* Profile pill */}
          <div 
            onClick={() => onNavigate('dashboard')}
            className="w-7 h-7 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center text-xs font-mono font-bold text-[#f0f6fc] cursor-pointer hover:border-[#8b949e]"
            title="Althaf k (@Althafx17)"
          >
            Ak
          </div>
        </div>
      </div>
    </header>
  );
}
