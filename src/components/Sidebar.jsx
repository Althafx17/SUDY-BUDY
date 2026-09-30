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

  // Theme-specific sidebar styling
  const getSidebarBgClass = () => {
    switch (currentTheme) {
      case 'ecoursie-studio':
        return 'bg-[#5142be] text-white';
      case 'cyber-dark':
        return 'bg-[#090e1d] text-slate-100 border-r border-slate-800/80';
      case 'zen-notion':
        return 'bg-[#f4f3ef] text-stone-800 border-r border-stone-200/90';
      case 'rainbow-sidebar':
      default:
        return 'bg-gradient-to-b from-[#251b5c] via-[#2d226e] to-[#1f1650] text-white';
    }
  };

  const isZen = currentTheme === 'zen-notion';
  const isCyber = currentTheme === 'cyber-dark';

  // Rainbow color badges for modules 1-5
  const getModuleBadge = (modNumber) => {
    const rainbowColors = [
      { num: 'M1', text: 'text-violet-300', bg: 'bg-violet-500/20', border: 'border-violet-500/40', dot: 'bg-violet-400', active: 'bg-violet-600 text-white' },
      { num: 'M2', text: 'text-cyan-300', bg: 'bg-cyan-500/20', border: 'border-cyan-500/40', dot: 'bg-cyan-400', active: 'bg-cyan-600 text-white' },
      { num: 'M3', text: 'text-emerald-300', bg: 'bg-emerald-500/20', border: 'border-emerald-500/40', dot: 'bg-emerald-400', active: 'bg-emerald-600 text-white' },
      { num: 'M4', text: 'text-amber-300', bg: 'bg-amber-500/20', border: 'border-amber-500/40', dot: 'bg-amber-400', active: 'bg-amber-600 text-white' },
      { num: 'M5', text: 'text-rose-300', bg: 'bg-rose-500/20', border: 'border-rose-500/40', dot: 'bg-rose-400', active: 'bg-rose-600 text-white' },
    ];
    return rainbowColors[(modNumber - 1) % rainbowColors.length] || rainbowColors[0];
  };

  const renderSubjectItem = (sub, semesterKey) => {
    const isSubjectActive = currentView === 'subject' && activeSubjectId === sub.id;
    const isExpanded = expandedCourses[sub.id] ?? false;
    const progress = Math.round(calculateSubjectProgress(sub) * 100);
    const modules = sub.modules || [];

    return (
      <div key={sub.id} className={`mb-2 rounded-2xl overflow-hidden transition-all ${
        isZen 
          ? 'bg-stone-200/50 border border-stone-200' 
          : isCyber 
            ? 'bg-slate-900/60 border border-slate-800' 
            : 'bg-white/5 border border-white/10 hover:border-white/20'
      }`}>
        {/* Course Header */}
        <div 
          onClick={() => {
            onOpenSubject(sub.id, semesterKey);
            if (onCloseMobile) onCloseMobile();
          }}
          className={`flex items-center justify-between p-2.5 cursor-pointer transition-colors ${
            isSubjectActive 
              ? isZen ? 'bg-stone-300/70 font-bold' : 'bg-white/15' 
              : isZen ? 'hover:bg-stone-200/70' : 'hover:bg-white/10'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-md border shrink-0 ${
              isZen ? 'bg-stone-200 text-stone-700 border-stone-300' :
              sub.code === 'MAT101' ? 'bg-violet-500/20 text-violet-300 border-violet-400/40' :
              sub.code === 'CYT100' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40' :
              sub.code === 'MAT102' ? 'bg-amber-500/20 text-amber-300 border-amber-400/40' :
              'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
            }`}>
              {sub.code || 'KTU'}
            </span>
            <div className="truncate min-w-0 flex-1">
              <p className={`text-xs font-bold truncate leading-tight ${isZen ? 'text-stone-900' : 'text-white'}`}>
                {sub.name}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`text-[10px] ${isZen ? 'text-stone-500' : 'text-indigo-200/70'}`}>{modules.length} modules</span>
                <span className={`text-[10px] ${isZen ? 'text-stone-300' : 'text-indigo-200/40'}`}>•</span>
                <span className={`text-[10px] font-semibold ${isZen ? 'text-emerald-700' : 'text-emerald-400'}`}>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Toggle Expand Sub-list Button */}
          <button
            onClick={(e) => toggleCourseExpand(sub.id, e)}
            className={`p-1.5 rounded-lg transition-colors ml-1 shrink-0 ${
              isZen ? 'text-stone-500 hover:text-stone-900 hover:bg-stone-200' : 'text-indigo-200 hover:text-white hover:bg-white/10'
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

        {/* SUB LIST OF MODULES */}
        {isExpanded && (
          <div className={`px-2 pb-2 pt-1 border-t space-y-1 ${
            isZen 
              ? 'border-stone-200 bg-stone-100/60' 
              : isCyber 
                ? 'border-slate-800 bg-slate-950/60' 
                : 'border-white/5 bg-black/10'
          }`}>
            {modules.length === 0 ? (
              <p className={`text-[11px] italic py-1 px-2 ${isZen ? 'text-stone-400' : 'text-indigo-200/60'}`}>
                No modules enrolled
              </p>
            ) : (
              modules.map((mod, idx) => {
                const modNumber = idx + 1;
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
                        ? isZen 
                          ? 'bg-stone-900 text-white font-bold shadow-xs'
                          : 'bg-white text-indigo-950 font-bold shadow-md shadow-black/20' 
                        : isZen
                          ? 'text-stone-700 hover:bg-stone-200'
                          : 'text-indigo-100 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      {/* Module Rainbow Badge */}
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md border shrink-0 transition-transform group-hover:scale-105 ${
                        isModActive 
                          ? badge.active 
                          : `${badge.bg} ${badge.text} ${badge.border}`
                      }`}>
                        {badge.num}
                      </span>
                      
                      {/* Module Title */}
                      <span className={`text-[11px] truncate leading-tight ${
                        isModActive 
                          ? isZen ? 'text-white font-black' : 'text-indigo-950 font-black' 
                          : isZen ? 'text-stone-700 group-hover:text-stone-900' : 'text-indigo-100 group-hover:text-white'
                      }`}>
                        {mod.name.replace(/^Module\s*\d+\s*:\s*/i, '')}
                      </span>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                      <span className={`text-[9px] font-bold ${
                        isModActive 
                          ? isZen ? 'text-stone-200' : 'text-indigo-900' 
                          : isZen ? 'text-stone-500' : 'text-indigo-300/80 group-hover:text-white'
                      }`}>
                        {modProgress}%
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        modProgress === 100 ? 'bg-emerald-400' : 
                        modProgress > 0 ? badge.dot : 'bg-white/20'
                      }`} />
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
        } lg:static lg:h-screen lg:shrink-0 overflow-hidden border-r border-white/10`}
      >
        {/* Top Header & Brand */}
        <div className="flex flex-col h-full min-h-0">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div 
              onClick={() => {
                onNavigate('dashboard');
                if (onCloseMobile) onCloseMobile();
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform ${
                currentTheme === 'ecoursie-studio' 
                  ? 'bg-white/20 border border-white/30 text-2xl font-black' 
                  : isZen 
                    ? 'bg-stone-800 text-stone-100'
                    : isCyber 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-cyan-500/20'
                      : 'bg-gradient-to-tr from-violet-500 via-pink-500 to-amber-400'
              }`}>
                {currentTheme === 'ecoursie-studio' ? 'ē' : '🌈'}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-base font-black tracking-tight font-sans ${isZen ? 'text-stone-900' : 'text-white'}`}>
                    {currentTheme === 'ecoursie-studio' ? 'ēCoursie' : 'Study Buddy'}
                  </span>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full border ${
                    isZen 
                      ? 'bg-stone-200 text-stone-700 border-stone-300' 
                      : 'bg-white/15 text-pink-200 border-white/20'
                  }`}>
                    PRO
                  </span>
                </div>
                <p className={`text-[10px] font-semibold tracking-wide ${isZen ? 'text-stone-500' : 'text-indigo-200/70'}`}>
                  KTU Academic Ledger
                </p>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={onCloseMobile}
              className={`p-1.5 rounded-xl lg:hidden ${isZen ? 'text-stone-500 hover:text-stone-900' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Center Section */}
          <div className="flex-1 overflow-y-auto py-4 space-y-5 pr-1 custom-scrollbar">
            {/* Primary Navigation */}
            <div>
              <div className={`text-[10px] font-black uppercase tracking-wider px-2 mb-2 ${isZen ? 'text-stone-400' : 'text-indigo-200/60'}`}>
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
                          ? isZen 
                            ? 'bg-stone-900 text-white shadow-xs font-black'
                            : 'bg-white text-indigo-950 shadow-lg shadow-black/15 font-black'
                          : isZen
                            ? 'text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
                            : 'text-indigo-100 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${
                        isActive 
                          ? isZen ? 'text-white' : 'text-violet-600' 
                          : isZen ? 'text-stone-400 group-hover:text-stone-800' : 'text-indigo-300 group-hover:text-white'
                      }`} />
                      <span className="tracking-wide text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Semester Switcher Pill Bar */}
            <div className={`p-1.5 rounded-2xl border ${
              isZen ? 'bg-stone-200/60 border-stone-300' : 'bg-black/20 border-white/10'
            }`}>
              <div className={`flex items-center justify-between text-[10px] font-black uppercase tracking-wider px-2 mb-1.5 ${
                isZen ? 'text-stone-600' : 'text-indigo-200/70'
              }`}>
                <span>Active Semester</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => onSelectSemester('S1')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    currentSemester === 'S1'
                      ? isZen 
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                      : isZen
                        ? 'text-stone-600 hover:bg-stone-300'
                        : 'text-indigo-200/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>Semester 1</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isZen ? 'bg-stone-700 text-white' : 'bg-white/20 text-white'}`}>
                    {s1Subjects.length}
                  </span>
                </button>

                <button
                  onClick={() => onSelectSemester('S2')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    currentSemester === 'S2'
                      ? isZen 
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                      : isZen
                        ? 'text-stone-600 hover:bg-stone-300'
                        : 'text-indigo-200/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>Semester 2</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isZen ? 'bg-stone-700 text-white' : 'bg-white/20 text-white'}`}>
                    {s2Subjects.length}
                  </span>
                </button>
              </div>
            </div>

            {/* COURSES TAKEN & SUB-LIST OF MODULES */}
            <div>
              <div className="flex items-center justify-between px-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className={`w-3.5 h-3.5 ${isZen ? 'text-stone-600' : 'text-pink-300'}`} />
                  <span className={`text-[11px] font-black uppercase tracking-wider ${isZen ? 'text-stone-800' : 'text-white'}`}>
                    Courses Taken ({currentSemester === 'S1' ? s1Subjects.length : s2Subjects.length})
                  </span>
                </div>
                <span className={`text-[10px] font-bold ${isZen ? 'text-stone-400' : 'text-indigo-300/70'}`}>
                  5 Modules each
                </span>
              </div>

              {/* Course list for Current Semester */}
              <div className="space-y-1">
                {(currentSemester === 'S1' ? s1Subjects : s2Subjects).map((sub) => 
                  renderSubjectItem(sub, currentSemester)
                )}
              </div>

              {/* Option to view other semester courses */}
              <div className={`mt-4 pt-3 border-t ${isZen ? 'border-stone-200' : 'border-white/10'}`}>
                <div className="flex items-center justify-between px-2 mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${isZen ? 'text-stone-400' : 'text-indigo-200/60'}`}>
                    {currentSemester === 'S1' ? 'Semester 2 Courses' : 'Semester 1 Courses'}
                  </span>
                  <button
                    onClick={() => onSelectSemester(currentSemester === 'S1' ? 'S2' : 'S1')}
                    className={`text-[10px] font-bold underline ${isZen ? 'text-stone-700 hover:text-stone-900' : 'text-pink-300 hover:text-white'}`}
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
          <div className={`pt-3 border-t space-y-2 shrink-0 ${isZen ? 'border-stone-200' : 'border-white/10'}`}>
            {/* Theme Switcher Quick Button */}
            {onOpenThemeModal && (
              <button
                onClick={() => {
                  onOpenThemeModal();
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isZen 
                    ? 'bg-stone-200 hover:bg-stone-300 text-stone-800' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-400" />
                  <span>UI Theme Studio</span>
                </div>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-black/20">
                  5 Layouts
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
                isZen
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 hover:from-pink-500/30 hover:to-indigo-500/30 border border-pink-400/30 text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>Focus Room & Lo-Fi</span>
              </div>
              <span className="text-[10px] bg-pink-500/30 text-pink-200 px-2 py-0.5 rounded-full font-bold">
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
                  ? isZen ? 'bg-stone-900 text-white font-black' : 'bg-white text-indigo-950 font-black'
                  : isZen ? 'text-stone-600 hover:bg-stone-200' : 'text-indigo-200/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <SettingsIcon className={`w-4 h-4 ${isZen ? 'text-stone-500' : 'text-indigo-300'}`} />
              <span>Settings & Theme Studio</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
