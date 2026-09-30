import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Settings as SettingsIcon, 
  Flame,
  Sparkles,
  Menu,
  Palette
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
      case 'settings': return 'System Settings & Theme Studio';
      default: return 'Study Buddy PRO';
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'revision', label: 'Revision Mode', icon: CheckSquare },
    { id: 'notes', label: 'Notes Vault', icon: FileText },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  const activeThemeObj = THEMES.find(t => t.id === currentTheme) || THEMES[0];

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-2xl bg-white/80 border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Breadcrumb Title */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Hamburger Toggle */}
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-colors border border-slate-200"
              title="Open navigation & courses sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {/* View Title */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                {getViewTitle()}
              </h1>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 hidden sm:inline-block">
                {currentSemester === 'S1' ? 'Semester 1' : 'Semester 2'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden md:block mt-0.5">
              KTU Academic Revision & Question Bank Tracker
            </p>
          </div>
        </div>

        {/* Center: Apple-style segmented pills when showFullNav is true (like in Apple Minimal theme) */}
        {showFullNav && (
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl border border-slate-200/70 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm shadow-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right Tools: Theme Switcher, Semester Switcher, Focus Room, Pomodoro Timer */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Theme Switcher Button */}
          <button
            onClick={onOpenThemeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 text-xs font-bold transition-all shadow-2xs group shrink-0"
            title="Switch UI & Layout Theme"
          >
            <span className="text-base">{activeThemeObj.icon}</span>
            <span className="hidden md:inline font-bold">{activeThemeObj.shortName}</span>
            <span className="text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded font-mono uppercase">UI</span>
          </button>

          {/* Focus Room Quick Trigger */}
          <button
            onClick={onOpenFocusModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 hover:from-purple-100 hover:to-pink-100 text-purple-700 border border-purple-200/80 text-xs font-bold transition-all shadow-2xs hover:shadow group shrink-0"
            title="Open Focus Room & Lo-Fi Beats"
          >
            <Flame className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Focus</span>
          </button>

          <PomodoroTimer />
        </div>
      </div>
    </header>
  );
}
