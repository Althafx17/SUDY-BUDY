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

  const isLight = currentTheme === 'monochrome-light';

  return (
    <header className={`sticky top-0 z-30 w-full backdrop-blur-2xl transition-all ${
      isLight 
        ? 'bg-white/90 border-b border-zinc-200 shadow-2xs' 
        : 'bg-[#09090b]/90 border-b border-[#27272a] shadow-[0_1px_10px_rgba(0,0,0,0.5)]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Breadcrumb Title */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Hamburger Toggle */}
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className={`lg:hidden p-2 rounded-xl transition-colors border ${
                isLight 
                  ? 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 border-zinc-300' 
                  : 'bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border-zinc-800'
              }`}
              title="Open navigation & courses sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {/* View Title */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className={`text-base sm:text-lg font-black tracking-tight leading-none ${
                isLight ? 'text-zinc-950' : 'text-white'
              }`}>
                {getViewTitle()}
              </h1>
              <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border hidden sm:inline-block ${
                isLight 
                  ? 'bg-zinc-100 text-zinc-900 border-zinc-300' 
                  : 'bg-zinc-900 text-zinc-200 border-zinc-700'
              }`}>
                {currentSemester === 'S1' ? 'Semester 1' : 'Semester 2'}
              </span>
            </div>
            <p className={`text-[11px] font-medium hidden md:block mt-0.5 ${
              isLight ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              KTU Academic Revision & Question Bank Tracker
            </p>
          </div>
        </div>

        {/* Center: Top Segmented pills when showFullNav is true (like in Apple Minimal theme) */}
        {showFullNav && (
          <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-2xl border ${
            isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-900/90 border-zinc-800'
          }`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? isLight 
                        ? 'bg-black text-white shadow-sm' 
                        : 'bg-white text-black shadow-md font-black'
                      : isLight 
                        ? 'text-zinc-600 hover:text-black' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? isLight ? 'text-white' : 'text-black' : 'text-zinc-400'}`} />
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all border shrink-0 ${
              isLight 
                ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-300' 
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-800 shadow-2xs'
            }`}
            title="Switch UI & Layout Theme"
          >
            <span className="text-base">{activeThemeObj.icon}</span>
            <span className="hidden md:inline font-bold">{activeThemeObj.shortName}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono uppercase ${
              isLight ? 'bg-zinc-200 text-zinc-800' : 'bg-zinc-800 text-zinc-300'
            }`}>UI</span>
          </button>

          {/* Focus Room Quick Trigger */}
          <button
            onClick={onOpenFocusModal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all border shrink-0 group ${
              isLight 
                ? 'bg-zinc-900 hover:bg-black text-white border-zinc-900' 
                : 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-700'
            }`}
            title="Open Focus Room & Lo-Fi Beats"
          >
            <Flame className="w-4 h-4 text-zinc-300 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Focus</span>
          </button>

          <PomodoroTimer />
        </div>
      </div>
    </header>
  );
}
