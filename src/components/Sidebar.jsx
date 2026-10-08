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
  Palette
} from 'lucide-react';
import { MODULE_RAINBOW_COLORS } from '../constants/initialData';
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
  currentTheme = 'rainbow-sidebar'
}) {
  // Navigation tabs
  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'timetable', label: 'Exam Timetable', icon: Calendar },
    { id: 'revision', label: 'Revision Sprint', icon: CheckSquare },
    { id: 'notes', label: 'Notes Vault', icon: FileText },
  ];

  // Expanded courses accordion state - default to having active subject or current semester subjects expanded
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

  // Get subjects for selected semester or all
  const s1Subjects = data?.S1?.subjects || [];
  const s2Subjects = data?.S2?.subjects || [];

  // Theme-specific sidebar styling (Black & White is default)
  const getSidebarBgClass = () => {
    switch (currentTheme) {
      case 'monochrome-light':
        return 'bg-[#f4f4f5] text-[#09090b] border-r border-[#e4e4e7]';
      case 'ecoursie-studio':
        return 'bg-[#111113] text-white border-r border-[#27272a]';
      case 'zen-notion':
        return 'bg-[#0c0c0e] text-[#d4d4d8] border-r border-[#27272a]';
      case 'monochrome-noir':
      default:
        return 'bg-[#09090b] text-[#f4f4f5] border-r border-[#27272a]';
    }
  };

  const isLight = currentTheme === 'monochrome-light';
  const isZen = currentTheme === 'zen-notion';

  // Module color badges with explicit color codes
  const getModuleBadge = (modNumber) => {
    return MODULE_RAINBOW_COLORS[(modNumber - 1) % MODULE_RAINBOW_COLORS.length] || MODULE_RAINBOW_COLORS[0];
  };

  const renderSubjectItem = (sub, semesterKey) => {
    const isSubjectActive = currentView === 'subject' && activeSubjectId === sub.id;
    const isExpanded = expandedCourses[sub.id] ?? false;
    const progress = Math.round(calculateSubjectProgress(sub) * 100);
    const modules = sub.modules || [];

    return (
      <div key={sub.id} className={`mb-2 rounded-2xl overflow-hidden transition-all ${
        isLight
          ? 'bg-white border border-zinc-200 shadow-2xs'
          : 'bg-[#121214] border border-[#27272a] hover:border-zinc-700'
      }`}>
        {/* Course Header */}
        <div 
          onClick={() => {
            onOpenSubject(sub.id, semesterKey);
            if (onCloseMobile) onCloseMobile();
          }}
          className={`flex items-center justify-between p-2.5 cursor-pointer transition-colors ${
            isSubjectActive 
              ? isLight ? 'bg-zinc-100 font-bold' : 'bg-zinc-800/80 text-white' 
              : isLight ? 'hover:bg-zinc-50' : 'hover:bg-zinc-800/40'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className={`text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded border shrink-0 ${
              isLight
                ? 'bg-zinc-100 text-zinc-800 border-zinc-300'
                : 'bg-zinc-900 text-zinc-300 border-zinc-700'
            }`}>
              {sub.code || 'KTU'}
            </span>
            <div className="truncate min-w-0 flex-1">
              <p className={`text-xs font-bold truncate leading-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                {sub.name}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>{modules.length} modules</span>
                <span className={`text-[10px] ${isLight ? 'text-zinc-300' : 'text-zinc-600'}`}>•</span>
                <span className={`text-[10px] font-semibold ${isLight ? 'text-zinc-800' : 'text-zinc-300'}`}>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Toggle Expand Sub-list Button */}
          <button
            onClick={(e) => toggleCourseExpand(sub.id, e)}
            className={`p-1.5 rounded-lg transition-colors ml-1 shrink-0 ${
              isLight ? 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
            title={isExpanded ? 'Collapse modules' : 'Expand modules'}
          >
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* SUB LIST OF MODULES WITH COLOR CODES */}
        {isExpanded && (
          <div className={`px-2 pb-2 pt-1 border-t space-y-1 ${
            isLight 
              ? 'border-zinc-200 bg-zinc-50/80' 
              : 'border-[#27272a] bg-[#0c0c0e]'
          }`}>
            {modules.length === 0 ? (
              <p className={`text-[11px] italic py-1 px-2 ${isLight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                No modules enrolled
              </p>
            ) : (
              modules.map((mod, idx) => {
                const modNumber = mod.number || idx + 1;
                const badge = getModuleBadge(modNumber);
                const isModActive = isSubjectActive && activeModuleId === mod.id;
                const modProgress = Math.round(calculateModuleProgress(mod) * 100);

                return (
                  <button
                    key={mod.id || idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenSubject(sub.id, semesterKey, mod.id);
                      if (onCloseMobile) onCloseMobile();
                    }}
                    className={`w-full text-left flex items-center justify-between p-1.5 rounded-xl transition-all group ${
                      isModActive 
                        ? isLight
                          ? 'bg-zinc-900 text-white font-bold shadow-xs'
                          : 'bg-white text-black font-black shadow-md' 
                        : isLight
                          ? 'text-zinc-700 hover:bg-zinc-200'
                          : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0 flex-1">
                      {/* Module Number Indicator */}
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md border shrink-0 transition-transform group-hover:scale-105 ${
                        isModActive 
                          ? isLight ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-black text-white border-black'
                          : badge.badgeBg
                      }`}>
                        M{modNumber}
                      </span>
                      
                      {/* Module Title */}
                      <span className={`text-[11px] truncate leading-tight ${
                        isModActive 
                          ? isLight ? 'text-white font-black' : 'text-black font-black' 
                          : isLight ? 'text-zinc-700 group-hover:text-zinc-900' : 'text-zinc-300 group-hover:text-white'
                      }`}>
                        {mod.name.replace(/^Module\s*\d+\s*:\s*/i, '')}
                      </span>

                      {/* Explicit Color Code Pill */}
                      <span 
                        style={{
                          borderColor: `${badge.hex}50`,
                          color: isModActive && !isLight ? '#000000' : badge.hex,
                          backgroundColor: `${badge.hex}18`
                        }}
                        className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border shrink-0"
                      >
                        {badge.colorCode}
                      </span>
                    </div>

                    {/* Progress Indicator & Glowing Dot */}
                    <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                      <span className={`text-[9px] font-mono font-bold ${
                        isModActive 
                          ? isLight ? 'text-zinc-300' : 'text-zinc-800' 
                          : 'text-zinc-400 group-hover:text-zinc-300'
                      }`}>
                        {modProgress}%
                      </span>
                      <span 
                        style={{ backgroundColor: badge.hex }}
                        className="w-2 h-2 rounded-full shrink-0 shadow-xs" 
                      />
                    </div>
                  </button>
                );
              })
            )}
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in"
        />
      )}

      {/* Main Sidebar Aside */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 w-72 sm:w-80 ${getSidebarBgClass()} flex flex-col justify-between p-4 sm:p-5 select-none shadow-2xl z-50 transition-transform duration-300 lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:h-screen lg:shrink-0 overflow-hidden ${
          isLight ? 'border-r border-zinc-200' : 'border-r border-[#27272a]'
        }`}
      >
        {/* Top Header & Brand */}
        <div className="flex flex-col h-full min-h-0">
          <div className={`flex items-center justify-between pb-4 border-b ${isLight ? 'border-zinc-200' : 'border-[#27272a]'}`}>
            <div 
              onClick={() => {
                onNavigate('dashboard');
                if (onCloseMobile) onCloseMobile();
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm tracking-tighter shadow-md group-hover:scale-105 transition-transform ${
                isLight ? 'bg-black text-white' : 'bg-white text-black'
              }`}>
                SB
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-base font-black tracking-tight font-sans ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                    Study Buddy
                  </span>
                  <span className={`text-[9px] font-mono font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full border ${
                    isLight 
                      ? 'bg-zinc-100 text-zinc-900 border-zinc-300' 
                      : 'bg-zinc-900 text-zinc-200 border-zinc-700'
                  }`}>
                    PRO
                  </span>
                </div>
                <p className={`text-[10px] font-semibold tracking-wide ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  KTU Academic Ledger
                </p>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={onCloseMobile}
              className={`p-1.5 rounded-xl lg:hidden ${isLight ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Center Section */}
          <div className="flex-1 overflow-y-auto py-4 space-y-5 pr-1 custom-scrollbar">
            {/* Primary Navigation */}
            <div>
              <div className={`text-[10px] font-black uppercase tracking-wider px-2 mb-2 ${isLight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Navigation
              </div>
              <nav className="space-y-1">
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
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left group ${
                        isActive
                          ? isLight 
                            ? 'bg-black text-white shadow-sm font-black'
                            : 'bg-white text-black shadow-lg shadow-black/40 font-black'
                          : isLight
                            ? 'text-zinc-700 hover:bg-zinc-200/80 hover:text-black'
                            : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${
                        isActive 
                          ? isLight ? 'text-white' : 'text-black' 
                          : isLight ? 'text-zinc-400 group-hover:text-black' : 'text-zinc-500 group-hover:text-white'
                      }`} />
                      <span className="tracking-wide text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Semester Switcher Pill Bar */}
            <div className={`p-1.5 rounded-2xl border ${
              isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-[#121214] border-[#27272a]'
            }`}>
              <div className={`flex items-center justify-between text-[10px] font-black uppercase tracking-wider px-2 mb-1.5 ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                <span>Active Semester</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => onSelectSemester('S1')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    currentSemester === 'S1'
                      ? isLight 
                        ? 'bg-black text-white font-black shadow-xs'
                        : 'bg-white text-black font-black shadow-sm'
                      : isLight
                        ? 'text-zinc-600 hover:bg-zinc-200'
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  <span>Semester 1</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    currentSemester === 'S1'
                      ? isLight ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black'
                      : isLight ? 'bg-zinc-200 text-zinc-700' : 'bg-zinc-800 text-zinc-300'
                  }`}>
                    {s1Subjects.length}
                  </span>
                </button>

                <button
                  onClick={() => onSelectSemester('S2')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    currentSemester === 'S2'
                      ? isLight 
                        ? 'bg-black text-white font-black shadow-xs'
                        : 'bg-white text-black font-black shadow-sm'
                      : isLight
                        ? 'text-zinc-600 hover:bg-zinc-200'
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  <span>Semester 2</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    currentSemester === 'S2'
                      ? isLight ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black'
                      : isLight ? 'bg-zinc-200 text-zinc-700' : 'bg-zinc-800 text-zinc-300'
                  }`}>
                    {s2Subjects.length}
                  </span>
                </button>
              </div>
            </div>

            {/* COURSES TAKEN & SUB-LIST OF MODULES */}
            <div>
              <div className="flex items-center justify-between px-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className={`w-3.5 h-3.5 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`} />
                  <span className={`text-[11px] font-black uppercase tracking-wider ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                    Courses Taken ({currentSemester === 'S1' ? s1Subjects.length : s2Subjects.length})
                  </span>
                </div>
                <span className={`text-[10px] font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Color-Coded
                </span>
              </div>

              {/* Course list for Current Semester */}
              <div className="space-y-1">
                {(currentSemester === 'S1' ? s1Subjects : s2Subjects).map((sub) => 
                  renderSubjectItem(sub, currentSemester)
                )}
              </div>

              {/* Option to view other semester courses */}
              <div className={`mt-4 pt-3 border-t ${isLight ? 'border-zinc-200' : 'border-[#27272a]'}`}>
                <div className="flex items-center justify-between px-2 mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${isLight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {currentSemester === 'S1' ? 'Semester 2 Courses' : 'Semester 1 Courses'}
                  </span>
                  <button
                    onClick={() => onSelectSemester(currentSemester === 'S1' ? 'S2' : 'S1')}
                    className={`text-[10px] font-bold underline ${isLight ? 'text-zinc-800 hover:text-black' : 'text-zinc-300 hover:text-white'}`}
                  >
                    Switch
                  </button>
                </div>
                <div className="space-y-1">
                  {(currentSemester === 'S1' ? s2Subjects : s1Subjects).map((sub) => 
                    renderSubjectItem(sub, currentSemester === 'S1' ? 'S2' : 'S1')
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Actions */}
          <div className={`pt-3 border-t space-y-2 shrink-0 ${isLight ? 'border-zinc-200' : 'border-[#27272a]'}`}>
            {/* Theme Switcher Quick Button */}
            {onOpenThemeModal && (
              <button
                onClick={() => {
                  onOpenThemeModal();
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isLight 
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200' 
                    : 'bg-[#121214] hover:bg-zinc-900 text-white border border-[#27272a]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-zinc-400" />
                  <span>UI Theme Studio</span>
                </div>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-white/10 text-zinc-400">
                  B&W
                </span>
              </button>
            )}

            {/* Focus Room Quick Trigger */}
            <button
              onClick={() => {
                onOpenFocusModal();
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-md group ${
                isLight
                  ? 'bg-zinc-900 text-white hover:bg-black'
                  : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-zinc-300 group-hover:scale-110 transition-transform" />
                <span>Focus Room & Lo-Fi</span>
              </div>
              <span className="text-[10px] bg-white/10 text-zinc-200 px-2 py-0.5 rounded-full font-bold">
                Open
              </span>
            </button>

            {/* Settings */}
            <button
              onClick={() => {
                onNavigate('settings');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                currentView === 'settings'
                  ? isLight ? 'bg-black text-white font-black' : 'bg-white text-black font-black'
                  : isLight ? 'text-zinc-600 hover:bg-zinc-200' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <SettingsIcon className={`w-4 h-4 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`} />
              <span>Settings & Theme Studio</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
