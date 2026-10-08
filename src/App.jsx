import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import RightPanel from './components/RightPanel';
import Dashboard from './components/Dashboard';
import SubjectView from './components/SubjectView';
import ExamTimetable from './components/ExamTimetable';
import RevisionMode from './components/RevisionMode';
import NotesVault from './components/NotesVault';
import Settings from './components/Settings';
import FocusModal from './components/FocusModal';
import ThemeModal from './components/ThemeModal';
import { INITIAL_DATA } from './constants/initialData';
import { THEMES, COLOR_ACCENTS, THEME_STORAGE_KEY, COLOR_ACCENT_KEY } from './constants/themes';

const STORAGE_KEY = 'study-ledger';

export default function App() {
  // Load state from localStorage or fallback to INITIAL_DATA
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.S1?.subjects?.some(s => s.code === 'MAT101') && parsed.S2?.subjects?.some(s => s.code === 'MAT102')) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading study-ledger from localStorage:', e);
    }
    return INITIAL_DATA;
  });

  // UI Theme & Layout state (Black & White is default)
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && saved !== 'rainbow-sidebar' && THEMES.some(t => t.id === saved)) return saved;
    } catch (e) {}
    return 'monochrome-noir';
  });

  // Color Accent state
  const [currentColorAccent, setCurrentColorAccent] = useState(() => {
    try {
      const saved = localStorage.getItem(COLOR_ACCENT_KEY);
      if (saved && COLOR_ACCENTS.some(c => c.id === saved)) return saved;
    } catch (e) {}
    return 'monochrome';
  });

  const [currentView, setCurrentView] = useState('dashboard');
  const [currentSemester, setCurrentSemester] = useState('S1');
  const [activeSubjectId, setActiveSubjectId] = useState(null);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [isFocusModalOpen, setIsFocusModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
    } catch (e) {}
  }, [currentTheme]);

  // Sync color accent to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(COLOR_ACCENT_KEY, currentColorAccent);
    } catch (e) {}
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
  const currentSemesterSubjects = data[currentSemester]?.subjects || [];
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

  // Active theme object
  const activeThemeObj = THEMES.find(t => t.id === currentTheme) || THEMES[0];
  const isAppleTheme = currentTheme === 'apple-minimal';
  const isEcoursieTheme = currentTheme === 'ecoursie-studio';
  const isCyberDark = currentTheme === 'cyber-dark';
  const isZenNotion = currentTheme === 'zen-notion';

  const isMonochromeLight = currentTheme === 'monochrome-light';

  // Base layout class matching clean GitHub dark
  const getContainerClass = () => {
    return 'min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans flex flex-col lg:flex-row relative selection:bg-[#1f6feb] selection:text-white';
  };

  return (
    <div className={getContainerClass()}>

      {/* Render Left Sidebar for all themes EXCEPT Apple Minimalist */}
      {!isAppleTheme && (
        <Sidebar
          currentView={currentView}
          currentSemester={currentSemester}
          onSelectSemester={setCurrentSemester}
          data={data}
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
          currentSemester={currentSemester}
          onSelectSemester={setCurrentSemester}
          onNavigate={handleNavigation}
          onOpenFocusModal={() => setIsFocusModalOpen(true)}
          onOpenThemeModal={() => setIsThemeModalOpen(true)}
          onToggleMobileSidebar={!isAppleTheme ? () => setIsMobileSidebarOpen(prev => !prev) : null}
          currentTheme={currentTheme}
          showFullNav={isAppleTheme}
        />

        {/* Content View Container */}
        <main className={`w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 ${
          isAppleTheme ? 'max-w-6xl' : isEcoursieTheme ? 'max-w-5xl' : 'max-w-7xl'
        }`}>
          {currentView === 'dashboard' && (
            <Dashboard
              data={data}
              currentSemester={currentSemester}
              onSelectSemester={setCurrentSemester}
              onOpenSubject={(subId, modId) => handleOpenSubject(subId, currentSemester, modId)}
              onAddSubject={handleAddSubject}
              onNavigateToTimetable={() => setCurrentView('timetable')}
            />
          )}

          {currentView === 'subject' && (
            activeSubject ? (
              <SubjectView
                subject={activeSubject}
                semesterKey={currentSemester}
                onBack={() => {
                  setCurrentView('dashboard');
                  setActiveModuleId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onUpdateSubject={handleUpdateSubject}
                initialModuleId={activeModuleId}
              />
            ) : (
              <div className="p-12 rounded-[28px] text-center border border-slate-200 bg-white shadow-sm">
                <h2 className="text-xl font-bold text-slate-800">No course selected</h2>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold"
                >
                  Back to Dashboard
                </button>
              </div>
            )
          )}

          {currentView === 'timetable' && (
            <ExamTimetable
              data={data}
              onOpenSubject={(subId) => handleOpenSubject(subId, currentSemester)}
            />
          )}

          {currentView === 'revision' && (
            <RevisionMode
              data={data}
              onMarkRevised={handleMarkTopicRevised}
              onOpenSubject={(subId) => handleOpenSubject(subId, currentSemester)}
            />
          )}

          {currentView === 'notes' && (
            <NotesVault
              data={data}
              onOpenSubject={(subId) => handleOpenSubject(subId, currentSemester)}
            />
          )}

          {currentView === 'settings' && (
            <Settings
              data={data}
              onUpdateData={setData}
              onResetData={handleResetData}
              currentTheme={currentTheme}
              onSelectTheme={setCurrentTheme}
              currentColorAccent={currentColorAccent}
              onSelectColorAccent={setCurrentColorAccent}
            />
          )}
        </main>
      </div>

      {/* Right Panel for 3-Column Studio Theme (ēCoursie) */}
      {isEcoursieTheme && (
        <div className="hidden xl:flex shrink-0">
          <RightPanel
            subjects={currentSemesterSubjects}
            onOpenFocusModal={() => setIsFocusModalOpen(true)}
            onOpenSubject={(subId) => handleOpenSubject(subId, currentSemester)}
          />
        </div>
      )}

      {/* Pop-up Focus Room Modal with Ambient Lo-Fi & Custom YouTube & To-dos */}
      <FocusModal
        isOpen={isFocusModalOpen}
        onClose={() => setIsFocusModalOpen(false)}
        data={data}
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
