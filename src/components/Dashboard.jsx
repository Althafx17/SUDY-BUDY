import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Plus, 
  BookOpen, 
  Award, 
  FileText,
  Flame,
  Trophy,
  GitBranch
} from 'lucide-react';
import Modal from './Modal';
import { SUBJECT_COLORS, MODULE_RAINBOW_COLORS, getModuleRainbowColor } from '../constants/initialData';
import { 
  calculateSubjectProgress, 
  calculateSubjectRevisionProgress, 
  calculateModuleProgress,
  getSemesterStats, 
  getNearestUpcomingExam, 
  formatTimeRemaining 
} from '../utils/progress';

export default function Dashboard({
  data,
  currentSemester,
  onSelectSemester,
  onOpenSubject,
  onAddSubject,
  onNavigateToTimetable
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);

  // Form states for Add Subject
  const [newSubName, setNewSubName] = useState('');
  const [newSubCode, setNewSubCode] = useState('');
  const [newSubColor, setNewSubColor] = useState('violet');
  const [newSubExamDate, setNewSubExamDate] = useState('');
  const [newSubVenue, setNewSubVenue] = useState('');

  // Ticking countdown state for nearest exam
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const semesterData = data[currentSemester] || { subjects: [] };
  const subjects = semesterData.subjects || [];
  const stats = getSemesterStats(semesterData);

  // Total past question papers count across semester
  const totalPYQs = subjects.reduce((sum, s) => sum + (s.pastPapers?.length || 0), 0);

  // Nearest upcoming exam calculation
  const nearestItem = getNearestUpcomingExam(subjects);
  let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  if (nearestItem) {
    const diff = nearestItem.time - now;
    countdown = formatTimeRemaining(diff);
  }

  // Calculate grade based on overall progress
  const getGrade = (pct) => {
    if (pct >= 85) return 'S';
    if (pct >= 70) return 'A+';
    if (pct >= 55) return 'A';
    if (pct >= 40) return 'B';
    return 'C';
  };
  const grade = getGrade(stats.overallProgress);

  // Calculate module distributions for "Most Used Languages" widget
  const moduleMasteryStats = MODULE_RAINBOW_COLORS.map((rainbow, idx) => {
    const modNumber = rainbow.moduleNumber;
    let totalTopicsInMod = 0;
    let completedTopicsInMod = 0;

    subjects.forEach(sub => {
      const targetMod = (sub.modules || []).find(m => (m.number || 0) === modNumber);
      if (targetMod) {
        const tCount = targetMod.topics?.length || 0;
        totalTopicsInMod += tCount;
        completedTopicsInMod += (targetMod.topics || []).filter(t => t.status === 'studied' || t.status === 'revised').length;
      }
    });

    const pct = totalTopicsInMod > 0 ? Math.round((completedTopicsInMod / totalTopicsInMod) * 100) : 0;
    return {
      ...rainbow,
      totalTopics: totalTopicsInMod,
      completedTopics: completedTopicsInMod,
      progress: pct,
      barWeight: totalTopicsInMod > 0 ? totalTopicsInMod : [35, 25, 20, 12, 8][idx]
    };
  });

  const totalBarWeight = moduleMasteryStats.reduce((sum, m) => sum + m.barWeight, 0) || 100;

  const handleCreateSubject = (e) => {
    e.preventDefault();
    if (!newSubName.trim()) return;

    const newSubject = {
      id: 'sub-' + Date.now(),
      name: newSubName.trim(),
      code: newSubCode.trim().toUpperCase() || 'CRS',
      color: newSubColor,
      description: 'Comprehensive study curriculum and KTU examination preparation.',
      instructor: 'KTU Faculty',
      examDate: newSubExamDate || '',
      examVenue: newSubVenue.trim() || 'University Exam Hall',
      todos: [],
      pastPapers: [],
      modules: []
    };

    onAddSubject(currentSemester, newSubject);

    setNewSubName('');
    setNewSubCode('');
    setNewSubColor('violet');
    setNewSubExamDate('');
    setNewSubVenue('');
    setIsAddSubjectOpen(false);
  };

  // Filtered courses
  const filteredSubjects = subjects.filter(sub => {
    const query = searchTerm.toLowerCase();
    return sub.name.toLowerCase().includes(query) ||
      (sub.code && sub.code.toLowerCase().includes(query)) ||
      (sub.instructor && sub.instructor.toLowerCase().includes(query));
  });

  return (
    <div className="space-y-5 text-[#f0f6fc] font-sans">
      {/* Simple Clean Header: Overview Title & Semester Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#30363d]">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-[#8b949e]" />
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-[#f0f6fc] tracking-tight leading-none">
              Academic Overview
            </h1>
            <p className="text-xs text-[#8b949e] mt-1 font-mono">
              Althafx17 / KTU {currentSemester} B.Tech Ledger
            </p>
          </div>
        </div>

        {/* Right Controls: Semester Switcher & New Course */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="inline-flex p-0.5 bg-[#0d1117] rounded-md border border-[#30363d]">
            <button
              onClick={() => onSelectSemester('S1')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentSemester === 'S1'
                  ? 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <span>Semester 1</span>
              <span className="text-[10px] font-mono text-[#8b949e]">
                ({data.S1?.subjects?.length || 0})
              </span>
            </button>

            <button
              onClick={() => onSelectSemester('S2')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentSemester === 'S2'
                  ? 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <span>Semester 2</span>
              <span className="text-[10px] font-mono text-[#8b949e]">
                ({data.S2?.subjects?.length || 0})
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsAddSubjectOpen(true)}
            className="btn-gh-primary px-3 py-1 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Course</span>
          </button>
        </div>
      </div>

      {/* GitHub Stats Row (Replicating Image 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Card 1: Althaf k's Study Stats */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#30363d] pb-2 mb-3">
            <h3 className="text-sm font-semibold text-[#f0f6fc]">
              Althaf k's GitHub Stats
            </h3>
            <span className="text-[10px] font-mono text-[#8b949e]">
              KTU {currentSemester}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Total Topics:</span>
                <span className="font-bold text-[#f0f6fc]">{stats.totalTopics}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Topics Mastered:</span>
                <span className="font-bold text-[#f0f6fc]">{stats.completedTopics}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Total PYQs:</span>
                <span className="font-bold text-[#f0f6fc]">{totalPYQs}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Revision Ready:</span>
                <span className="font-bold text-[#f0f6fc]">{stats.revisionProgress}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Completion:</span>
                <span className="font-bold text-[#58a6ff]">{stats.overallProgress}%</span>
              </div>
            </div>

            {/* Circular Letter Grade Gauge (Grade 'C' / 'A+' like Screenshot 1) */}
            <div className="relative w-22 h-22 flex items-center justify-center shrink-0">
              <svg className="w-22 h-22 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#30363d"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke={stats.overallProgress >= 70 ? '#238636' : stats.overallProgress >= 40 ? '#58a6ff' : '#8b949e'}
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 38}
                  strokeDashoffset={2 * Math.PI * 38 * (1 - (stats.overallProgress || 5) / 100)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black font-mono text-[#f0f6fc]">
                  {grade}
                </span>
                <span className="text-[9px] text-[#8b949e] font-mono uppercase">
                  Grade
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: 3-Column Streak & Contribution Card (Screenshot 1) */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5 grid grid-cols-3 divide-x divide-[#30363d]">
          {/* Col 1 */}
          <div className="flex flex-col items-center justify-center text-center px-1">
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#f0f6fc]">
              907
            </div>
            <div className="text-xs font-semibold text-[#c9d1d9] mt-1">
              Total Contributions
            </div>
            <div className="text-[10px] text-[#8b949e] mt-1 font-mono">
              Feb 1, 2026 - Present
            </div>
          </div>

          {/* Col 2: Center Flame Ring */}
          <div className="flex flex-col items-center justify-center text-center px-1">
            <div className="relative w-12 h-12 flex items-center justify-center mb-1">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="#30363d"
                  strokeWidth="4"
                  fill="transparent"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="#f97316"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 20}
                  strokeDashoffset={2 * Math.PI * 20 * 0.25}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#f97316]" />
              </div>
            </div>
            <div className="text-lg font-black font-mono text-[#f0f6fc]">
              14
            </div>
            <div className="text-xs font-semibold text-[#f97316]">
              Current Streak
            </div>
            <div className="text-[10px] text-[#8b949e] mt-0.5 font-mono">
              Oct 8
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center justify-center text-center px-1">
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#f0f6fc]">
              {nearestItem ? String(countdown.days).padStart(2, '0') : '7'}
            </div>
            <div className="text-xs font-semibold text-[#c9d1d9] mt-1">
              {nearestItem ? 'Days to Exam' : 'Longest Streak'}
            </div>
            <div className="text-[10px] text-[#8b949e] mt-1 font-mono truncate max-w-[90px]" title={nearestItem ? nearestItem.subject.name : 'Aug 17 - Aug 23'}>
              {nearestItem ? nearestItem.subject.code : 'Aug 17 - Aug 23'}
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Most Used Languages / Curriculum Module Progress Bar (Screenshot 1) */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2 mb-3">
          <h3 className="text-sm font-semibold text-[#f0f6fc]">
            Most Used Languages & Curriculum Modules
          </h3>
          <span className="text-[10px] font-mono text-[#8b949e]">
            Color-Coded Units
          </span>
        </div>

        {/* Horizontal Segmented Bar */}
        <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#0d1117] border border-[#30363d]">
          {moduleMasteryStats.map((mod) => {
            const widthPct = ((mod.barWeight / totalBarWeight) * 100).toFixed(1);
            return (
              <div
                key={mod.moduleNumber}
                style={{ width: `${widthPct}%`, backgroundColor: mod.hex }}
                title={`Module ${mod.moduleNumber}: ${mod.name} (${widthPct}%)`}
                className="h-full transition-all"
              />
            );
          })}
        </div>

        {/* Legend with Color Dots, Explicit Color Codes, and Percentages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-3.5 text-xs font-mono">
          {moduleMasteryStats.map((mod) => {
            const widthPct = ((mod.barWeight / totalBarWeight) * 100).toFixed(1);
            return (
              <div key={mod.moduleNumber} className="flex items-center gap-2">
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: mod.hex }} 
                />
                <span className="text-[#c9d1d9] font-sans truncate">
                  Module {mod.moduleNumber}
                </span>
                <span 
                  className="text-[9px] px-1 py-0.2 rounded border shrink-0"
                  style={{
                    color: mod.hex,
                    borderColor: `${mod.hex}50`,
                    backgroundColor: `${mod.hex}15`
                  }}
                >
                  {mod.colorCode}
                </span>
                <span className="text-[#8b949e] ml-auto">
                  {widthPct}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card 4: GitHub Trophies (Screenshot 1) */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-3.5">
        <div className="flex items-center gap-2 mb-2.5">
          <Trophy className="w-3.5 h-3.5 text-[#e3b341]" />
          <h3 className="text-xs font-semibold text-[#f0f6fc] uppercase tracking-wider">
            GitHub Trophies
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2 flex items-center gap-2">
            <span className="text-lg">🦈</span>
            <div>
              <div className="font-semibold text-[#f0f6fc] text-[11px]">Pull Shark</div>
              <div className="text-[10px] text-[#8b949e] font-mono">{totalPYQs} PYQs</div>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2 flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <div>
              <div className="font-semibold text-[#f0f6fc] text-[11px]">Quickdraw</div>
              <div className="text-[10px] text-[#8b949e] font-mono">14d Streak</div>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2 flex items-center gap-2">
            <span className="text-lg">❄️</span>
            <div>
              <div className="font-semibold text-[#f0f6fc] text-[11px]">Code Vault</div>
              <div className="text-[10px] text-[#8b949e] font-mono">Notes Synced</div>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2 flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <div>
              <div className="font-semibold text-[#f0f6fc] text-[11px]">Pair Pro</div>
              <div className="text-[10px] text-[#8b949e] font-mono">Study Buddy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned Academic Repositories */}
      <div className="space-y-3 pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold text-[#f0f6fc]">
              Pinned Academic Repositories
            </h2>
            <span className="text-xs font-mono px-2 py-0.2 rounded-full bg-[#21262d] border border-[#30363d] text-[#8b949e]">
              {filteredSubjects.length}
            </span>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#8b949e] absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter repositories..."
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md pl-8 pr-3 py-1 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
            />
          </div>
        </div>

        {/* Repositories Grid */}
        {filteredSubjects.length === 0 ? (
          <div className="bg-[#161b22] border border-dashed border-[#30363d] rounded-md p-8 text-center">
            <BookOpen className="w-8 h-8 text-[#8b949e] mx-auto mb-2 opacity-50" />
            <h3 className="text-xs font-semibold text-[#f0f6fc]">No courses found</h3>
            <p className="text-[11px] text-[#8b949e] mt-1">
              Click "New Course" above to add a subject.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredSubjects.map((sub) => {
              const progress = Math.round(calculateSubjectProgress(sub) * 100);
              const repoSlug = `Althafx17 / ${sub.code.toLowerCase()}`;

              return (
                <div
                  key={sub.id}
                  onClick={() => onOpenSubject(sub.id)}
                  className="bg-[#161b22] hover:bg-[#1c2128] border border-[#30363d] hover:border-[#8b949e] rounded-md p-3.5 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Book icon + repo slug + Public */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className="w-4 h-4 text-[#8b949e] shrink-0" />
                        <span className="font-semibold text-xs text-[#58a6ff] hover:underline truncate">
                          {repoSlug}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded-full border border-[#30363d] text-[#8b949e] shrink-0">
                        Public
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#f0f6fc] mt-1.5 truncate">
                      {sub.name}
                    </p>
                    <p className="text-[11px] text-[#8b949e] mt-0.5 line-clamp-1">
                      {sub.description || 'Comprehensive syllabus tracking, PYQs, and revision sprint.'}
                    </p>

                    {/* Color-Coded Module Pills */}
                    {sub.modules && sub.modules.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1 mt-2.5">
                        {sub.modules.map((mod, mIdx) => {
                          const rainbow = getModuleRainbowColor(mod.number || mIdx + 1);
                          return (
                            <span
                              key={mod.id || mIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenSubject(sub.id, mod.id);
                              }}
                              style={{
                                borderColor: `${rainbow.hex}40`,
                                color: rainbow.hex,
                                backgroundColor: `${rainbow.hex}12`
                              }}
                              className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded border flex items-center gap-1 hover:brightness-125 transition-all"
                            >
                              <span>M{mod.number || mIdx + 1}</span>
                              <span className="opacity-75">{rainbow.colorCode}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Footer Meta */}
                  <div className="mt-3 pt-2.5 border-t border-[#30363d] flex items-center justify-between text-xs text-[#8b949e] font-mono">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#238636]" />
                        <span className="text-[#f0f6fc] font-bold text-[11px]">{progress}%</span>
                      </div>
                      
                      {sub.examDate && (
                        <div className="flex items-center gap-1 text-[11px]">
                          <Calendar className="w-3 h-3 text-[#8b949e]" />
                          <span>{new Date(sub.examDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1 text-[11px]">
                        <FileText className="w-3 h-3 text-[#8b949e]" />
                        <span>{sub.pastPapers?.length || 0} PYQs</span>
                      </div>
                    </div>

                    <ArrowRight className="w-3 h-3 text-[#58a6ff] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add Course Modal */}
      <Modal
        isOpen={isAddSubjectOpen}
        onClose={() => setIsAddSubjectOpen(false)}
        title="Create a new academic repository"
        subtitle={`Add curriculum course to ${currentSemester}`}
      >
        <form onSubmit={handleCreateSubject} className="space-y-3 text-xs">
          <div>
            <label className="block font-semibold text-[#f0f6fc] mb-1">
              Course Name *
            </label>
            <input
              type="text"
              value={newSubName}
              onChange={(e) => setNewSubName(e.target.value)}
              placeholder="e.g. Engineering Chemistry, Calculus"
              autoFocus
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#f0f6fc] mb-1">
                Course Code
              </label>
              <input
                type="text"
                value={newSubCode}
                onChange={(e) => setNewSubCode(e.target.value)}
                placeholder="e.g. CYT100"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#f0f6fc] mb-1">
                Color Accent
              </label>
              <select
                value={newSubColor}
                onChange={(e) => setNewSubColor(e.target.value)}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#f0f6fc] focus:outline-none focus:border-[#58a6ff]"
              >
                {SUBJECT_COLORS.map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#f0f6fc] mb-1">
                Exam Date
              </label>
              <input
                type="datetime-local"
                value={newSubExamDate}
                onChange={(e) => setNewSubExamDate(e.target.value)}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#f0f6fc] focus:outline-none focus:border-[#58a6ff]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#f0f6fc] mb-1">
                Exam Venue
              </label>
              <input
                type="text"
                value={newSubVenue}
                onChange={(e) => setNewSubVenue(e.target.value)}
                placeholder="e.g. Hall 3"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-[#30363d]">
            <button
              type="button"
              onClick={() => setIsAddSubjectOpen(false)}
              className="btn-gh px-3 py-1 text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newSubName.trim()}
              className="btn-gh-primary px-3 py-1 text-xs disabled:opacity-40"
            >
              Create repository
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
