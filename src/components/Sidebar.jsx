import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Settings as SettingsIcon, 
  Flame, 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  Layers, 
  GraduationCap,
  Sparkles,
  X,
  Clock,
  Palette,
  ExternalLink,
  Briefcase,
  Link as LinkIcon,
  Award
} from 'lucide-react';
import { MODULE_RAINBOW_COLORS, getModuleRainbowColor } from '../constants/initialData';
import { calculateSubjectProgress, calculateModuleProgress } from '../utils/progress';

export default function Sidebar({ 
  currentView, 
  currentSemester, 
  onSelectSemester, 
  data, 
  activeSubjectId, 
  activeModuleId, 
  onNavigate, 
  onOpenSubject, 
  onOpenFocusModal,
  onOpenThemeModal,
  isMobileOpen,
  onCloseMobile,
  currentTheme = 'monochrome-noir'
}) {
  // Navigation tabs (matching GitHub repository & profile tabs)
  const mainNavItems = [
    { id: 'dashboard', label: 'Repositories & Stats', icon: LayoutDashboard },
    { id: 'timetable', label: 'Exam Schedule', icon: Calendar },
    { id: 'revision', label: 'Sprint Checklist', icon: CheckSquare },
    { id: 'notes', label: 'Notes Vault', icon: FileText },
  ];

  // Expanded courses accordion state
  const [expandedCourses, setExpandedCourses] = useState(() => {
    const initial = {};
    if (data?.S1?.subjects) {
      data.S1.subjects.forEach(s => { initial[s.id] = true; });
    }
    if (data?.S2?.subjects) {
      data.S2.subjects.forEach(s => { initial[s.id] = false; });
    }
    return initial;
  });

  const toggleCourseExpand = (courseId, e) => {
    e.stopPropagation();
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const s1Subjects = data?.S1?.subjects || [];
  const s2Subjects = data?.S2?.subjects || [];

  const renderSubjectItem = (sub, semesterKey) => {
    const isSubjectActive = currentView === 'subject' && activeSubjectId === sub.id;
    const isExpanded = expandedCourses[sub.id] ?? false;
    const progress = Math.round(calculateSubjectProgress(sub) * 100);
    const modules = sub.modules || [];

    return (
      <div key={sub.id} className="mb-1 rounded-md border border-[#30363d] bg-[#161b22] overflow-hidden text-xs transition-colors">
        {/* Course Header */}
        <div 
          onClick={() => {
            onOpenSubject(sub.id, semesterKey);
            if (onCloseMobile) onCloseMobile();
          }}
          className={`flex items-center justify-between p-2 cursor-pointer transition-colors ${
            isSubjectActive 
              ? 'bg-[#21262d] text-white font-semibold' 
              : 'hover:bg-[#1c2128] text-[#c9d1d9]'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <BookOpen className="w-3.5 h-3.5 text-[#8b949e] shrink-0" />
            <div className="truncate min-w-0 flex-1">
              <div className="flex items-center gap-1.5 truncate">
                <span className="font-mono text-[10px] px-1 py-0.2 rounded border border-[#30363d] bg-[#0d1117] text-[#8b949e] shrink-0">
                  {sub.code || 'KTU'}
                </span>
                <span className="font-medium text-[#f0f6fc] truncate">
                  {sub.name}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-1">
            <span className="text-[10px] font-mono text-[#8b949e]">
              {progress}%
            </span>
            <button
              onClick={(e) => toggleCourseExpand(sub.id, e)}
              className="p-1 rounded hover:bg-[#30363d] text-[#8b949e] hover:text-white transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>

        {/* Sub-list of Color-coded modules */}
        {isExpanded && modules.length > 0 && (
          <div className="px-2 pb-2 pt-1 border-t border-[#30363d] bg-[#0d1117]/60 space-y-1">
            {modules.map((mod, idx) => {
              const rainbow = getModuleRainbowColor(mod.number || idx + 1);
              const isModActive = isSubjectActive && activeModuleId === mod.id;
              const modProgress = Math.round(calculateModuleProgress(mod) * 100);

              return (
                <div
                  key={mod.id || idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenSubject(sub.id, semesterKey, mod.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`flex items-center justify-between p-1.5 rounded cursor-pointer transition-all ${
                    isModActive
                      ? 'bg-[#21262d] text-white'
                      : 'hover:bg-[#161b22] text-[#8b949e] hover:text-[#c9d1d9]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 min-w-0 flex-1">
                    {/* Color dot */}
                    <span 
                      className="w-2 h-2 rounded-full shrink-0" 
                      style={{ backgroundColor: rainbow.hex }}
                    />
                    <span className="font-mono text-[10px] text-[#8b949e] shrink-0">
                      M{mod.number || idx + 1}
                    </span>
                    <span className="truncate text-[11px] font-sans">
                      {mod.name.replace(/^Module\s*\d+\s*:\s*/i, '')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <span 
                      className="text-[9px] font-mono px-1 py-0.2 rounded border"
                      style={{
                        borderColor: `${rainbow.hex}40`,
                        color: rainbow.hex,
                        backgroundColor: `${rainbow.hex}12`
                      }}
                    >
                      {rainbow.colorCode}
                    </span>
                    <span className="text-[10px] font-mono text-[#8b949e]">
                      {modProgress}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden animate-in fade-in"
        />
      )}

      {/* Main Sidebar Aside */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 w-72 sm:w-80 bg-[#0d1117] text-[#c9d1d9] border-r border-[#30363d] flex flex-col justify-between p-3.5 select-none z-50 transition-transform duration-200 lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:h-screen lg:shrink-0 overflow-hidden font-sans`}
      >
        <div className="flex flex-col h-full min-h-0">
          {/* Top Profile Card (Directly from User Screenshot 2) */}
          <div className="pb-3 border-b border-[#30363d]">
            <div className="flex items-start justify-between">
              <div 
                onClick={() => {
                  onNavigate('dashboard');
                  if (onCloseMobile) onCloseMobile();
                }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-[#161b22] border border-[#30363d] flex items-center justify-center font-bold text-sm text-[#f0f6fc] shrink-0 font-mono shadow-sm">
                  Ak
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#f0f6fc] tracking-tight group-hover:text-[#58a6ff] transition-colors">
                      Althaf k
                    </span>
                    <span className="text-[10px] font-mono text-[#8b949e]">
                      @Althafx17
                    </span>
                  </div>
                  <p className="text-[10px] text-[#8b949e] font-sans truncate max-w-[170px]">
                    SOFTWARE ENGINEER / MERN
                  </p>
                </div>
              </div>

              {/* Close Mobile Button */}
              <button
                onClick={onCloseMobile}
                className="p-1.5 rounded-md hover:bg-[#21262d] text-[#8b949e] hover:text-white lg:hidden"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Teclif Infotech & Profile Info (Image 2) */}
            <div className="mt-2.5 pt-2 border-t border-[#30363d]/60 space-y-1 text-[11px] text-[#8b949e]">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3 h-3 text-[#8b949e]" />
                <span className="text-[#c9d1d9] font-medium">TECLIF INFOTECH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LinkIcon className="w-3 h-3 text-[#8b949e]" />
                <a href="https://teclif.com" target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline">
                  teclif.com
                </a>
                <span className="text-[#30363d]">·</span>
                <a href="https://linkedin.com/in/althaf-k17" target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline">
                  in/althaf-k17
                </a>
              </div>
            </div>
          </div>

          {/* Scrollable Center Section */}
          <div className="flex-1 overflow-y-auto py-3 space-y-4 pr-1 custom-scrollbar">
            {/* Primary Navigation */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8b949e] px-2 mb-1.5">
                Navigation
              </div>
              <nav className="space-y-0.5">
                {mainNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        if (onCloseMobile) onCloseMobile();
                      }}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs transition-all text-left ${
                        isActive
                          ? 'bg-[#21262d] text-[#f0f6fc] font-semibold border border-[#30363d]'
                          : 'text-[#c9d1d9] hover:bg-[#161b22] hover:text-[#f0f6fc]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#58a6ff]' : 'text-[#8b949e]'}`} />
                      <span className="tracking-wide text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Semester Switcher */}
            <div className="p-2 rounded-md border border-[#30363d] bg-[#161b22]">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#8b949e] mb-1.5">
                <span>Active Semester</span>
              </div>
              <div className="grid grid-cols-2 gap-1 font-mono text-xs">
                <button
                  onClick={() => onSelectSemester('S1')}
                  className={`py-1 px-2 rounded text-xs transition-all flex items-center justify-center gap-1.5 ${
                    currentSemester === 'S1'
                      ? 'bg-[#21262d] text-[#f0f6fc] font-semibold border border-[#30363d]'
                      : 'text-[#8b949e] hover:bg-[#0d1117] hover:text-[#c9d1d9]'
                  }`}
                >
                  <span>Semester 1</span>
                  <span className="text-[10px] text-[#8b949e]">
                    ({s1Subjects.length})
                  </span>
                </button>

                <button
                  onClick={() => onSelectSemester('S2')}
                  className={`py-1 px-2 rounded text-xs transition-all flex items-center justify-center gap-1.5 ${
                    currentSemester === 'S2'
                      ? 'bg-[#21262d] text-[#f0f6fc] font-semibold border border-[#30363d]'
                      : 'text-[#8b949e] hover:bg-[#0d1117] hover:text-[#c9d1d9]'
                  }`}
                >
                  <span>Semester 2</span>
                  <span className="text-[10px] text-[#8b949e]">
                    ({s2Subjects.length})
                  </span>
                </button>
              </div>
            </div>

            {/* Repositories / Courses List */}
            <div>
              <div className="flex items-center justify-between px-1 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b949e]">
                  Academic Courses ({currentSemester === 'S1' ? s1Subjects.length : s2Subjects.length})
                </span>
                <span className="text-[10px] font-mono text-[#8b949e]">
                  M1 - M5
                </span>
              </div>

              {/* Course items */}
              <div className="space-y-1">
                {(currentSemester === 'S1' ? s1Subjects : s2Subjects).map((sub) => 
                  renderSubjectItem(sub, currentSemester)
                )}
              </div>

              {/* Other semester toggle */}
              <div className="mt-3 pt-2.5 border-t border-[#30363d] flex items-center justify-between px-1 text-xs text-[#8b949e]">
                <span>Switch to {currentSemester === 'S1' ? 'Semester 2' : 'Semester 1'}</span>
                <button
                  onClick={() => onSelectSemester(currentSemester === 'S1' ? 'S2' : 'S1')}
                  className="text-[#58a6ff] hover:underline font-mono text-xs"
                >
                  View ({currentSemester === 'S1' ? s2Subjects.length : s1Subjects.length})
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Actions: Focus Room, Theme, Settings */}
          <div className="pt-2.5 border-t border-[#30363d] space-y-1 shrink-0 text-xs">
            {/* Focus Room */}
            <button
              onClick={() => {
                onOpenFocusModal();
                if (onCloseMobile) onCloseMobile();
              }}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-md hover:bg-[#161b22] text-[#c9d1d9] border border-[#30363d] transition-all"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-[#f97316]" />
                <span className="font-medium">Focus Room & Timer</span>
              </div>
              <span className="text-[10px] font-mono text-[#8b949e]">
                Lo-Fi
              </span>
            </button>

            {/* Settings */}
            <button
              onClick={() => {
                onNavigate('settings');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs transition-all text-left ${
                currentView === 'settings'
                  ? 'bg-[#21262d] text-[#f0f6fc] font-semibold border border-[#30363d]'
                  : 'text-[#8b949e] hover:bg-[#161b22] hover:text-[#c9d1d9]'
              }`}
            >
              <SettingsIcon className="w-3.5 h-3.5 text-[#8b949e]" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
