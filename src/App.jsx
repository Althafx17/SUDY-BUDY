import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import RightPanel from './components/RightPanel';
import Dashboard from './components/Dashboard';
import DosageDashboard from './components/DosageDashboard';
import ExpensioDashboard from './components/ExpensioDashboard';
import SubjectView from './components/SubjectView';
import ExamTimetable from './components/ExamTimetable';
import RevisionMode from './components/RevisionMode';
import NotesVault from './components/NotesVault';
import Settings from './components/Settings';
import FocusModal from './components/FocusModal';
import ThemeModal from './components/ThemeModal';
import { 
  Bell, 
  Home, 
  FileText, 
  BarChart3, 
  MessageCircle, 
  Play, 
  LogOut, 
  Palette, 
  Maximize2, 
  Minimize2, 
  ArrowLeft 
} from 'lucide-react';
import { INITIAL_DATA } from './constants/initialData';
import { THEMES, COLOR_ACCENTS, THEME_STORAGE_KEY, COLOR_ACCENT_KEY } from './constants/themes';
import { recordStudyEvent } from './utils/studyActivity';

const STORAGE_KEY = 'study-ledger';

export default function App() {
  // Load state from localStorage or fallback to INITIAL_DATA
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed && 
          typeof parsed === 'object' &&
          Array.isArray(parsed.S1?.subjects) && 
          Array.isArray(parsed.S2?.subjects)
        ) {
          return {
            ...INITIAL_DATA,
            ...parsed,
            S1: { examWindowDate: '', ...parsed.S1 },
            S2: { examWindowDate: '', ...parsed.S2 }
          };
        }
      }
    } catch (e) {
      console.warn('Error loading study-ledger from localStorage, falling back to INITIAL_DATA:', e);
    }
    return INITIAL_DATA;
  });

  // UI Theme & Layout state (Expensio Dark Uizard Frame is default matching requested mockup)
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES.some(t => t.id === saved)) return saved;
    } catch {
      // Ignore storage error
    }
    return 'expensio-dark';
  });
  const [isFrameExpanded, setIsFrameExpanded] = useState(false);

  // Color Accent state
  const [currentColorAccent, setCurrentColorAccent] = useState(() => {
    try {
      const saved = localStorage.getItem(COLOR_ACCENT_KEY);
      if (saved && COLOR_ACCENTS.some(c => c.id === saved)) return saved;
    } catch {
      // Ignore storage error
    }
    return 'monochrome';
  });

  const [currentView, setCurrentView] = useState('dashboard');
  const [currentSemester, setCurrentSemester] = useState('S1');
  const [activeSubjectId, setActiveSubjectId] = useState(null);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [isFocusModalOpen, setIsFocusModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Safe data guarantee: never undefined or missing semesters
  const safeData = (data && typeof data === 'object' && data.S1 && data.S2) ? data : INITIAL_DATA;
  const safeSemester = (safeData[currentSemester]) ? currentSemester : 'S1';

  // Sync data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving study-ledger to localStorage:', e);
    }
  }, [data]);

  // Sync theme to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
    } catch {
      // Ignore storage error
    }
  }, [currentTheme]);

  // Sync color accent to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(COLOR_ACCENT_KEY, currentColorAccent);
    } catch {
      // Ignore storage error
    }
  }, [currentColorAccent]);

  // Navigate directly to subject and optional module
  const handleOpenSubject = (subjectId, optionalSemester = null, optionalModuleId = null) => {
    if (optionalSemester) {
      setCurrentSemester(optionalSemester);
    }
    setActiveSubjectId(subjectId);
    setActiveModuleId(optionalModuleId || null);
    setCurrentView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add new subject to current semester
  const handleAddSubject = (semesterKey, newSubject) => {
    setData(prev => ({
      ...prev,
      [semesterKey]: {
        ...prev[semesterKey],
        subjects: [...(prev[semesterKey]?.subjects || []), newSubject]
      }
    }));
  };

  // Update existing subject
  const handleUpdateSubject = (updatedSubject) => {
    setData(prev => ({
      ...prev,
      [currentSemester]: {
        ...prev[currentSemester],
        subjects: (prev[currentSemester]?.subjects || []).map(s => 
          s.id === updatedSubject.id ? updatedSubject : s
        )
      }
    }));
  };

  // Quick mark revised from Revision Mode
  const handleMarkTopicRevised = (semesterKey, subjectId, moduleId, topicId) => {
    // Record genuine study activity for today
    try {
      recordStudyEvent();
    } catch (e) {
      console.warn('Could not record study event:', e);
    }

    setData(prev => {
      const targetSem = prev[semesterKey];
      if (!targetSem) return prev;

      const updatedSubjects = (targetSem.subjects || []).map(sub => {
        if (sub.id !== subjectId) return sub;
        const updatedModules = (sub.modules || []).map(mod => {
          if (mod.id !== moduleId) return mod;
          const updatedTopics = (mod.topics || []).map(top => {
            if (top.id !== topicId) return top;
            return {
              ...top,
              status: 'revised'
            };
          });
          return { ...mod, topics: updatedTopics };
        });
        return { ...sub, modules: updatedModules };
      });

      return {
        ...prev,
        [semesterKey]: {
          ...targetSem,
          subjects: updatedSubjects
        }
      };
    });
  };

  // Reset all data
  const handleResetData = () => {
    const emptyState = {
      S1: { examWindowDate: '', subjects: [] },
      S2: { examWindowDate: '', subjects: [] }
    };
    setData(emptyState);
    setCurrentView('dashboard');
    setActiveSubjectId(null);
    setActiveModuleId(null);
  };

  // Find active subject object if in subject view
  const currentSemesterSubjects = (safeData && safeData[safeSemester]?.subjects) || [];
  const activeSubject = activeSubjectId 
    ? currentSemesterSubjects.find(s => s.id === activeSubjectId)
    : currentSemesterSubjects[0];

  const handleNavigation = (view) => {
    setCurrentView(view);
    if (view !== 'subject') {
      setActiveModuleId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isExpensioTheme = currentTheme === 'expensio-dark';
  const isDosageTheme = currentTheme === 'dosage-frame';
  const isAppleTheme = currentTheme === 'apple-minimal';
  const isEcoursieTheme = currentTheme === 'ecoursie-studio';

  // Flagship Expensio Uizard Dark Frame Experience (Matching the uploaded design)
  if (isExpensioTheme) {
    return (
      <div className="min-h-screen expensio-outer-canvas text-[#f3f4f6] font-sans flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6 py-6 relative selection:bg-[#00d49f] selection:text-black">
        
        {/* Top Floating Control Bar with Neon Gradient Lighting */}
        <header className="w-full max-w-[1360px] neon-navbar-floating rounded-2xl px-3.5 sm:px-5 py-2.5 mb-3 flex items-center justify-between text-xs font-semibold select-none">
          {/* Left: Semester Switcher Pill */}
          <div className="flex items-center gap-2">
            <span className="text-cyan-300 font-extrabold text-xs uppercase tracking-wider hidden sm:inline drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]">
              KTU Semester:
            </span>
            <div className="bg-[#121316]/90 backdrop-blur-md p-1 rounded-full border border-cyan-400/30 shadow-[0_0_12px_rgba(0,245,255,0.15)] flex items-center gap-1">
              {['S1', 'S2'].map((sem) => (
                <button
                  key={sem}
                  type="button"
                  onClick={() => setCurrentSemester(sem)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    safeSemester === sem
                      ? 'bg-[#00d49f] text-[#121316] shadow-xs'
                      : 'text-[#8e95a5] hover:text-white'
                  }`}
                >
                  {sem}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Quick Focus Timer + Expand + Themes */}
          <div className="flex items-center gap-2.5">
            {/* Quick Focus Timer Button */}
            <button
              type="button"
              onClick={() => setIsFocusModalOpen(true)}
              className="bg-[#00d49f]/15 hover:bg-[#00d49f]/25 text-[#00d49f] border border-[#00d49f]/30 px-3 py-1.5 rounded-full text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="Start 25m Focus Pomodoro Session"
            >
              <Play className="w-3.5 h-3.5 fill-[#00d49f]" />
              <span className="hidden sm:inline">Focus Session</span>
            </button>

            <button
              type="button"
              onClick={() => setIsFrameExpanded(prev => !prev)}
              className="bg-[#121316]/80 hover:bg-[#121316] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[#c8cdd9] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title={isFrameExpanded ? "Standard Frame" : "Expand to Full Width"}
            >
              {isFrameExpanded ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-[#00d49f]" />
                  <span className="hidden sm:inline">Standard</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-[#00d49f]" />
                  <span className="hidden sm:inline">Expand</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsThemeModalOpen(true)}
              className="bg-[#121316]/80 hover:bg-[#121316] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[#c8cdd9] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="Theme Studio"
            >
              <Palette className="w-3.5 h-3.5 text-[#00d49f]" />
              <span className="hidden sm:inline">Themes</span>
            </button>
          </div>
        </header>

        {/* Central Expensio Dark Device Container */}
        <div className={`w-full transition-all duration-300 relative ${isFrameExpanded ? 'max-w-none' : 'max-w-[1360px]'}`}>
          <div className="expensio-device-container p-2 sm:p-4 lg:p-5 relative overflow-hidden">
            
            <ExpensioDashboard
              data={safeData}
              currentSemester={safeSemester}
              currentView={currentView}
              onSelectSemester={setCurrentSemester}
              onOpenSubject={(subId, modId) => handleOpenSubject(subId, safeSemester, modId)}
              onNavigate={handleNavigation}
              onOpenFocusModal={() => setIsFocusModalOpen(true)}
              onOpenThemeModal={() => setIsThemeModalOpen(true)}
              onAddSubject={handleAddSubject}
            >
              {currentView !== 'dashboard' && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-[#262934]">
                    <button
                      type="button"
                      onClick={() => handleNavigation('dashboard')}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#181a20] text-white border border-[#262934] shadow-xs hover:border-[#00d49f]/50 text-xs font-bold transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 text-[#00d49f]" />
                      <span>Back to Dashboard</span>
                    </button>

                    <span className="text-xs font-semibold text-[#8b8fa8] uppercase tracking-wider">
                      {currentView.toUpperCase()} VIEW
                    </span>
                  </div>

                  {currentView === 'subject' && (
                    activeSubject ? (
                      <div className="bg-[#181a20] rounded-3xl p-4 sm:p-6 shadow-sm border border-[#262934] text-[#f3f4f6]">
                        <SubjectView
                          subject={activeSubject}
                          allSubjects={currentSemesterSubjects}
                          onSelectSubject={(subId) => handleOpenSubject(subId, safeSemester)}
                          onAddSubject={handleAddSubject}
                          semesterKey={safeSemester}
                          onBack={() => {
                            handleNavigation('dashboard');
                            setActiveModuleId(null);
                          }}
                          onUpdateSubject={handleUpdateSubject}
                          initialModuleId={activeModuleId}
                        />
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-[#181a20] rounded-2xl border border-[#262934]">
                        <h3 className="font-bold text-white">No subject selected</h3>
                        <button
                          onClick={() => handleNavigation('dashboard')}
                          className="mt-3 px-4 py-2 bg-[#00d49f] text-[#121316] rounded-xl text-xs font-bold"
                        >
                          Return to Dashboard
                        </button>
                      </div>
                    )
                  )}

                  {currentView === 'timetable' && (
                    <div className="bg-[#181a20] rounded-3xl p-4 sm:p-6 shadow-sm border border-[#262934] text-[#f3f4f6]">
                      <ExamTimetable
                        data={safeData}
                        onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
                      />
                    </div>
                  )}

                  {currentView === 'revision' && (
                    <div className="bg-[#181a20] rounded-3xl p-4 sm:p-6 shadow-sm border border-[#262934] text-[#f3f4f6]">
                      <RevisionMode
                        data={safeData}
                        onMarkRevised={handleMarkTopicRevised}
                        onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
                      />
                    </div>
                  )}

                  {currentView === 'notes' && (
                    <div className="bg-[#181a20] rounded-3xl p-4 sm:p-6 shadow-sm border border-[#262934] text-[#f3f4f6]">
                      <NotesVault
                        data={safeData}
                        onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
                      />
                    </div>
                  )}

                  {currentView === 'settings' && (
                    <div className="bg-[#181a20] rounded-3xl p-4 sm:p-6 shadow-sm border border-[#262934] text-[#f3f4f6]">
                      <Settings
                        data={safeData}
                        onUpdateData={setData}
                        onResetData={handleResetData}
                        currentTheme={currentTheme}
                        onSelectTheme={setCurrentTheme}
                        currentColorAccent={currentColorAccent}
                        onSelectColorAccent={setCurrentColorAccent}
                      />
                    </div>
                  )}
                </div>
              )}
            </ExpensioDashboard>

          </div>
        </div>

        {/* Modals */}
        <FocusModal
          isOpen={isFocusModalOpen}
          onClose={() => setIsFocusModalOpen(false)}
          data={safeData}
        />
        <ThemeModal
          isOpen={isThemeModalOpen}
          onClose={() => setIsThemeModalOpen(false)}
          currentTheme={currentTheme}
          onSelectTheme={setCurrentTheme}
          currentColorAccent={currentColorAccent}
          onSelectColorAccent={setCurrentColorAccent}
        />
      </div>
    );
  }

  // Flagship Dosage Clay Tablet Frame Experience (Matching the uploaded design)
  if (isDosageTheme) {
    return (
      <div className="min-h-screen bg-[#c8cbe2] text-[#1a1b32] font-sans flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6 py-4 relative selection:bg-[#5f51bd] selection:text-white">
        
        {/* Top Floating Control Bar */}
        <header className="w-full max-w-[1360px] flex items-center justify-between pb-3 px-2 text-xs font-semibold select-none">
          {/* Left: Semester Switcher Pill */}
          <div className="flex items-center gap-2">
            <span className="text-[#686c85] font-bold text-xs uppercase tracking-wider hidden sm:inline">
              KTU Semester:
            </span>
            <div className="bg-white/70 backdrop-blur-md p-1 rounded-full border border-white/60 shadow-xs flex items-center gap-1">
              {['S1', 'S2'].map((sem) => (
                <button
                  key={sem}
                  type="button"
                  onClick={() => setCurrentSemester(sem)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    safeSemester === sem
                      ? 'bg-[#5f51bd] text-white shadow-xs'
                      : 'text-[#686c85] hover:text-[#1a1b32]'
                  }`}
                >
                  {sem}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Quick Tools (Expand frame, Theme Studio) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsFrameExpanded(prev => !prev)}
              className="bg-white/70 hover:bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 text-[#494c65] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title={isFrameExpanded ? "Standard Tablet Frame" : "Expand to Full Width"}
            >
              {isFrameExpanded ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Standard Frame</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Expand Frame</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsThemeModalOpen(true)}
              className="bg-white/70 hover:bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 text-[#494c65] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="Theme Studio"
            >
              <Palette className="w-3.5 h-3.5 text-[#5f51bd]" />
              <span className="hidden sm:inline">Themes</span>
            </button>
          </div>
        </header>

        {/* Floating Device / Tablet Frame Bezel */}
        <div className={`w-full transition-all duration-300 relative ${isFrameExpanded ? 'max-w-none' : 'max-w-[1360px]'}`}>
          <div className="tablet-frame-bezel p-3 sm:p-5 relative transition-all">
            
            {/* Dashboard Inner Canvas */}
            <div className="bg-[#f5f6fc] rounded-[36px] p-4 sm:p-6 lg:p-7 relative overflow-hidden flex flex-col md:flex-row gap-5 items-stretch min-h-[760px] shadow-inner">
              
              {/* ====================================================== */}
              {/* VERTICAL PURPLE PILL NAVIGATION (Matches uploaded mockup) */}
              {/* ====================================================== */}
              <aside className="bg-[#5f51bd] rounded-[32px] py-6 px-3 flex md:flex-col flex-row items-center justify-between shrink-0 shadow-lg shadow-[#5f51bd]/25 md:w-16 sm:md:w-18 w-full select-none z-20">
                {/* Top Notification Bell Button */}
                <button
                  type="button"
                  onClick={() => setIsThemeModalOpen(true)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                  title="Notifications & Theme"
                >
                  <Bell className="w-5 h-5" />
                </button>

                {/* Middle Icon Group */}
                <nav className="flex md:flex-col flex-row items-center gap-2 sm:gap-3">
                  {/* 1. Home / Dashboard */}
                  <button
                    type="button"
                    onClick={() => handleNavigation('dashboard')}
                    className={`transition-all ${
                      currentView === 'dashboard'
                        ? 'bg-white text-[#5f51bd] rounded-2xl w-11 h-11 flex items-center justify-center shadow-md font-bold'
                        : 'text-white/70 hover:text-white hover:bg-white/10 rounded-2xl w-11 h-11 flex items-center justify-center'
                    }`}
                    title="Dashboard"
                  >
                    <Home className="w-5 h-5" />
                  </button>

                  {/* 2. Notes Vault */}
                  <button
                    type="button"
                    onClick={() => handleNavigation('notes')}
                    className={`transition-all ${
                      currentView === 'notes'
                        ? 'bg-white text-[#5f51bd] rounded-2xl w-11 h-11 flex items-center justify-center shadow-md font-bold'
                        : 'text-white/70 hover:text-white hover:bg-white/10 rounded-2xl w-11 h-11 flex items-center justify-center'
                    }`}
                    title="Notes Vault"
                  >
                    <FileText className="w-5 h-5" />
                  </button>

                  {/* 3. Exam Schedule / Stats */}
                  <button
                    type="button"
                    onClick={() => handleNavigation('timetable')}
                    className={`transition-all ${
                      currentView === 'timetable'
                        ? 'bg-white text-[#5f51bd] rounded-2xl w-11 h-11 flex items-center justify-center shadow-md font-bold'
                        : 'text-white/70 hover:text-white hover:bg-white/10 rounded-2xl w-11 h-11 flex items-center justify-center'
                    }`}
                    title="Exam Timetable & Analytics"
                  >
                    <BarChart3 className="w-5 h-5" />
                  </button>

                  {/* 4. Revision Sprint */}
                  <button
                    type="button"
                    onClick={() => handleNavigation('revision')}
                    className={`transition-all ${
                      currentView === 'revision'
                        ? 'bg-white text-[#5f51bd] rounded-2xl w-11 h-11 flex items-center justify-center shadow-md font-bold'
                        : 'text-white/70 hover:text-white hover:bg-white/10 rounded-2xl w-11 h-11 flex items-center justify-center'
                    }`}
                    title="Revision Sprint"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>

                  {/* 5. Focus Pomodoro / Play */}
                  <button
                    type="button"
                    onClick={() => setIsFocusModalOpen(true)}
                    className="text-white/70 hover:text-white hover:bg-white/10 rounded-2xl w-11 h-11 flex items-center justify-center transition-colors"
                    title="Focus Pomodoro Room"
                  >
                    <Play className="w-5 h-5" />
                  </button>
                </nav>

                {/* Bottom Logout / Settings / Exit */}
                <button
                  type="button"
                  onClick={() => handleNavigation('settings')}
                  className={`transition-all ${
                    currentView === 'settings'
                      ? 'bg-white text-[#5f51bd] rounded-2xl w-11 h-11 flex items-center justify-center shadow-md font-bold'
                      : 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-2xl w-11 h-11 flex items-center justify-center'
                  }`}
                  title="Settings & Reset"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </aside>

              {/* ====================================================== */}
              {/* MAIN CONTENT AREA */}
              {/* ====================================================== */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                
                {/* Views */}
                <div className="flex-1">
                  {currentView === 'dashboard' && (
                    <DosageDashboard
                      data={safeData}
                      currentSemester={safeSemester}
                      onSelectSemester={setCurrentSemester}
                      onOpenSubject={(subId, modId) => handleOpenSubject(subId, safeSemester, modId)}
                      onNavigate={handleNavigation}
                      onOpenFocusModal={() => setIsFocusModalOpen(true)}
                    />
                  )}

                  {currentView !== 'dashboard' && (
                    <div className="space-y-4 animate-in fade-in">
                      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                        <button
                          type="button"
                          onClick={() => handleNavigation('dashboard')}
                          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1f2137] border border-gray-200 shadow-xs hover:bg-gray-50 text-xs font-bold transition-all cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4 text-[#5f51bd]" />
                          <span>Back to Dashboard</span>
                        </button>

                        <span className="text-xs font-semibold text-[#8b8fa8] uppercase tracking-wider">
                          {currentView.toUpperCase()} VIEW
                        </span>
                      </div>

                      {currentView === 'subject' && (
                        activeSubject ? (
                          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <SubjectView
                              subject={activeSubject}
                              semesterKey={safeSemester}
                              onBack={() => {
                                handleNavigation('dashboard');
                                setActiveModuleId(null);
                              }}
                              onUpdateSubject={handleUpdateSubject}
                              initialModuleId={activeModuleId}
                            />
                          </div>
                        ) : (
                          <div className="p-8 text-center bg-white rounded-2xl border border-gray-200">
                            <h3 className="font-bold text-gray-800">No subject selected</h3>
                            <button
                              onClick={() => handleNavigation('dashboard')}
                              className="mt-3 px-4 py-2 bg-[#5f51bd] text-white rounded-xl text-xs font-bold"
                            >
                              Return to Dashboard
                            </button>
                          </div>
                        )
                      )}

                      {currentView === 'timetable' && (
                        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                          <ExamTimetable
                            data={safeData}
                            onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
                          />
                        </div>
                      )}

                      {currentView === 'revision' && (
                        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                          <RevisionMode
                            data={safeData}
                            onMarkRevised={handleMarkTopicRevised}
                            onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
                          />
                        </div>
                      )}

                      {currentView === 'notes' && (
                        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                          <NotesVault
                            data={safeData}
                            onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
                          />
                        </div>
                      )}

                      {currentView === 'settings' && (
                        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                          <Settings
                            data={safeData}
                            onUpdateData={setData}
                            onResetData={handleResetData}
                            currentTheme={currentTheme}
                            onSelectTheme={setCurrentTheme}
                            currentColorAccent={currentColorAccent}
                            onSelectColorAccent={setCurrentColorAccent}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Right "dosage" Watermark Matching Mockup */}
                <div className="flex justify-end pt-4 pr-1 select-none pointer-events-none">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#1b1c31]/85 tracking-normal">
                    dosage
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Modals */}
        <FocusModal
          isOpen={isFocusModalOpen}
          onClose={() => setIsFocusModalOpen(false)}
          data={safeData}
        />
        <ThemeModal
          isOpen={isThemeModalOpen}
          onClose={() => setIsThemeModalOpen(false)}
          currentTheme={currentTheme}
          onSelectTheme={setCurrentTheme}
          currentColorAccent={currentColorAccent}
          onSelectColorAccent={setCurrentColorAccent}
        />
      </div>
    );
  }

  // Base layout class matching clean dark theme
  const getContainerClass = () => {
    return 'min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans flex flex-col lg:flex-row relative selection:bg-[#1f6feb] selection:text-white';
  };

  return (
    <div className={getContainerClass()}>
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-1.5 focus:bg-[#58a6ff] focus:text-black focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Render Left Sidebar for all themes EXCEPT Apple Minimalist */}
      {!isAppleTheme && (
        <Sidebar
          currentView={currentView}
          currentSemester={safeSemester}
          onSelectSemester={setCurrentSemester}
          data={safeData}
          activeSubjectId={activeSubjectId}
          activeModuleId={activeModuleId}
          onNavigate={handleNavigation}
          onOpenSubject={handleOpenSubject}
          onOpenFocusModal={() => setIsFocusModalOpen(true)}
          onOpenThemeModal={() => setIsThemeModalOpen(true)}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          currentTheme={currentTheme}
        />
      )}

      {/* Main Center Area */}
      <div className={`flex-1 flex flex-col min-w-0 min-h-screen ${isAppleTheme ? 'w-full' : ''}`}>
        {/* Top Navbar */}
        <Navbar
          currentView={currentView}
          currentSemester={safeSemester}
          onSelectSemester={setCurrentSemester}
          onNavigate={handleNavigation}
          onOpenFocusModal={() => setIsFocusModalOpen(true)}
          onOpenThemeModal={() => setIsThemeModalOpen(true)}
          onToggleMobileSidebar={!isAppleTheme ? () => setIsMobileSidebarOpen(prev => !prev) : null}
          currentTheme={currentTheme}
          showFullNav={isAppleTheme}
        />

        {/* Content View Container */}
        <main 
          id="main-content"
          tabIndex="-1"
          role="main"
          className={`w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 outline-none ${
            isAppleTheme ? 'max-w-6xl' : isEcoursieTheme ? 'max-w-5xl' : 'max-w-7xl'
          }`}
        >
          {currentView === 'dashboard' && (
            <Dashboard
              data={safeData}
              currentSemester={safeSemester}
              onSelectSemester={setCurrentSemester}
              onOpenSubject={(subId, modId) => handleOpenSubject(subId, safeSemester, modId)}
              onAddSubject={handleAddSubject}
              onNavigateToTimetable={() => setCurrentView('timetable')}
            />
          )}

          {currentView === 'subject' && (
            activeSubject ? (
              <SubjectView
                subject={activeSubject}
                semesterKey={safeSemester}
                onBack={() => {
                  setCurrentView('dashboard');
                  setActiveModuleId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onUpdateSubject={handleUpdateSubject}
                initialModuleId={activeModuleId}
              />
            ) : (
              <div className="p-12 rounded-xl text-center border border-[#30363d] bg-[#161b22] shadow-sm">
                <h2 className="text-xl font-bold text-[#f0f6fc]">No course selected</h2>
                <p className="mt-1 text-xs text-[#8b949e]">Select a subject from the sidebar or return to the dashboard.</p>
                <button
                  type="button"
                  onClick={() => setCurrentView('dashboard')}
                  className="mt-4 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Back to Dashboard
                </button>
              </div>
            )
          )}

          {currentView === 'timetable' && (
            <ExamTimetable
              data={safeData}
              onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
            />
          )}

          {currentView === 'revision' && (
            <RevisionMode
              data={safeData}
              onMarkRevised={handleMarkTopicRevised}
              onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
            />
          )}

          {currentView === 'notes' && (
            <NotesVault
              data={safeData}
              onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
            />
          )}

          {currentView === 'settings' && (
            <Settings
              data={safeData}
              onUpdateData={setData}
              onResetData={handleResetData}
              currentTheme={currentTheme}
              onSelectTheme={setCurrentTheme}
              currentColorAccent={currentColorAccent}
              onSelectColorAccent={setCurrentColorAccent}
            />
          )}

          {/* Safe fallback for unrecognized or invalid currentView values */}
          {!['dashboard', 'subject', 'timetable', 'revision', 'notes', 'settings'].includes(currentView) && (
            <div className="p-12 rounded-xl border border-[#30363d] bg-[#161b22] text-center my-6">
              <h2 className="text-xl font-bold text-[#f0f6fc]">View Not Found</h2>
              <p className="mt-2 text-sm text-[#8b949e]">The view &quot;{String(currentView)}&quot; is not recognized.</p>
              <button
                type="button"
                onClick={() => setCurrentView('dashboard')}
                className="mt-4 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Right Panel for 3-Column Studio Theme (ēCoursie) */}
      {isEcoursieTheme && (
        <div className="hidden xl:flex shrink-0">
          <RightPanel
            subjects={currentSemesterSubjects}
            onOpenFocusModal={() => setIsFocusModalOpen(true)}
            onOpenSubject={(subId) => handleOpenSubject(subId, safeSemester)}
          />
        </div>
      )}

      {/* Pop-up Focus Room Modal with Ambient Lo-Fi & Custom YouTube & To-dos */}
      <FocusModal
        isOpen={isFocusModalOpen}
        onClose={() => setIsFocusModalOpen(false)}
        data={safeData}
      />

      {/* 5-Theme UI & Layout Switcher Modal */}
      <ThemeModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
        currentColorAccent={currentColorAccent}
        onSelectColorAccent={setCurrentColorAccent}
      />
    </div>
  );
}
