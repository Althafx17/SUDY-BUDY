import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Plus, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  Award, 
  FileText,
  Flame,
  AlertCircle,
  ExternalLink,
  GitBranch,
  Star,
  GitFork,
  Check,
  Trophy,
  ShieldCheck,
  Terminal,
  Zap
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
      // fallback percentage for visual bar distribution if starting fresh
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

    // Reset form
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
    <div className="space-y-6 text-[#f0f6fc]">
      {/* Developer Profile Header Card (Image 2 style) */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center text-xl font-bold text-white shrink-0 overflow-hidden shadow-inner">
              <span className="font-mono">Ak</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-[#f0f6fc] tracking-tight">
                  Althaf k
                </h1>
                <span className="text-sm text-[#8b949e] font-mono">
                  @Althafx17
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#30363d] bg-[#0d1117] text-[#8b949e]">
                  B.Tech KTU Scholar
                </span>
              </div>
              <p className="text-xs text-[#8b949e] mt-1 font-sans">
                SOFTWARE ENGINEER / MERN stack developer · Academic Syllabus Mastery & Exam Ledger
              </p>
              
              {/* Tags / Currently Exploring */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                {['MERN Stack', 'Engineering Chemistry', 'Linear Algebra', 'Advanced React', 'REST APIs', 'Cloud & Deployment'].map((tag) => (
                  <span 
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#0d1117] border border-[#30363d] text-[#c9d1d9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action: Semester Switcher & Add Course */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Semester Switcher */}
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
      </div>

      {/* GitHub Stats Row (Replicating Image 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Widget 1: Althaf k's GitHub Stats */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#30363d] pb-2.5 mb-3">
            <h3 className="text-sm font-semibold text-[#f0f6fc]">
              Althaf k's Study Stats
            </h3>
            <span className="text-[10px] font-mono text-[#8b949e]">
              KTU {currentSemester}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            {/* Key-Value Pairs */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Total Topics:</span>
                <span className="font-bold text-[#f0f6fc]">{stats.totalTopics}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Topics Mastered:</span>
                <span className="font-bold text-[#f0f6fc]">{stats.completedTopics}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Total PYQs Available:</span>
                <span className="font-bold text-[#f0f6fc]">{totalPYQs}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Revision Readiness:</span>
                <span className="font-bold text-[#f0f6fc]">{stats.revisionProgress}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b949e]">Syllabus Completion:</span>
                <span className="font-bold text-[#58a6ff]">{stats.overallProgress}%</span>
              </div>
            </div>

            {/* Circular Grade Gauge (Matching screenshot 1's grade ring) */}
            <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
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

        {/* Widget 2: Contributions & Current Streak (Matching 3-column Streak Card in screenshot 1) */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5 grid grid-cols-3 divide-x divide-[#30363d]">
          {/* Column 1: Total Contributions */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#f0f6fc]">
              {stats.completedTopics * 12 + 42}
            </div>
            <div className="text-xs font-semibold text-[#c9d1d9] mt-1">
              Total Contributions
            </div>
            <div className="text-[10px] text-[#8b949e] mt-1 font-mono">
              Feb 1, 2026 - Present
            </div>
          </div>

          {/* Column 2: Current Streak with Flame Circle */}
          <div className="flex flex-col items-center justify-center text-center px-2">
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

          {/* Column 3: Longest Streak or Nearest Exam */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#f0f6fc]">
              {nearestItem ? String(countdown.days).padStart(2, '0') : '7'}
            </div>
            <div className="text-xs font-semibold text-[#c9d1d9] mt-1">
              {nearestItem ? 'Days to Next Exam' : 'Longest Streak'}
            </div>
            <div className="text-[10px] text-[#8b949e] mt-1 font-mono truncate max-w-[100px]" title={nearestItem ? nearestItem.subject.name : 'Aug 17 - Aug 23'}>
              {nearestItem ? nearestItem.subject.code : 'Aug 17 - Aug 23'}
            </div>
          </div>
        </div>
      </div>

      {/* Widget 3: Most Used Languages / Curriculum Module Progress Bar (Screenshot 1) */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2.5 mb-3">
          <h3 className="text-sm font-semibold text-[#f0f6fc]">
            Curriculum Module Distribution & Mastery
          </h3>
          <span className="text-[10px] font-mono text-[#8b949e]">
            Color-Coded Modules (M1 - M5)
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4 text-xs font-mono">
          {moduleMasteryStats.map((mod) => {
            const widthPct = ((mod.barWeight / totalBarWeight) * 100).toFixed(1);
            return (
              <div key={mod.moduleNumber} className="flex items-center gap-2">
                <span 
                  className="w-3 h-3 rounded-full shrink-0" 
                  style={{ backgroundColor: mod.hex }} 
                />
                <span className="text-[#c9d1d9] font-sans truncate">
                  Module {mod.moduleNumber}
                </span>
                <span 
                  className="text-[10px] px-1 py-0.2 rounded border shrink-0"
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

      {/* Widget 4: GitHub Trophies / Academic Badges */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
        <div className="flex items-center gap-2 mb-3">
          <Trophy className="w-4 h-4 text-[#e3b341]" />
          <h3 className="text-xs font-semibold text-[#f0f6fc] uppercase tracking-wider">
            Academic & GitHub Trophies
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#238636]/20 text-[#2ea043] flex items-center justify-center font-bold">
              🦈
            </div>
            <div>
              <div className="font-semibold text-[#f0f6fc]">Pull Shark</div>
              <div className="text-[10px] text-[#8b949e] font-mono">{totalPYQs} PYQs Indexed</div>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#f97316]/20 text-[#f97316] flex items-center justify-center font-bold">
              ⚡
            </div>
            <div>
              <div className="font-semibold text-[#f0f6fc]">Quickdraw</div>
              <div className="text-[10px] text-[#8b949e] font-mono">14 Days Study Streak</div>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#8957e5]/20 text-[#a371f7] flex items-center justify-center font-bold">
              ❄️
            </div>
            <div>
              <div className="font-semibold text-[#f0f6fc]">Code Vault</div>
              <div className="text-[10px] text-[#8b949e] font-mono">Notes Repository Sync</div>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#388bfd]/20 text-[#58a6ff] flex items-center justify-center font-bold">
              🎯
            </div>
            <div>
              <div className="font-semibold text-[#f0f6fc]">Pair Extraordinaire</div>
              <div className="text-[10px] text-[#8b949e] font-mono">Study Buddy Pro Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned Courses / Repositories Section */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-[#f0f6fc]">
              Pinned Academic Repositories
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#8b949e]">
              {filteredSubjects.length}
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-[#8b949e] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Find a repository..."
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md pl-8 pr-3 py-1.5 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
            />
          </div>
        </div>

        {/* GitHub Repos Grid */}
        {filteredSubjects.length === 0 ? (
          <div className="bg-[#161b22] border border-dashed border-[#30363d] rounded-md p-10 text-center">
            <BookOpen className="w-10 h-10 text-[#8b949e] mx-auto mb-2 opacity-50" />
            <h3 className="text-sm font-semibold text-[#f0f6fc]">No courses found</h3>
            <p className="text-xs text-[#8b949e] mt-1">
              No course matches your query. Click "New Course" to add one.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredSubjects.map((sub) => {
              const progress = Math.round(calculateSubjectProgress(sub) * 100);
              const revision = Math.round(calculateSubjectRevisionProgress(sub));
              const allTopics = (sub.modules || []).flatMap(m => m.topics || []);
              const repoSlug = `Althafx17 / ${sub.code.toLowerCase()}-${sub.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

              return (
                <div
                  key={sub.id}
                  onClick={() => onOpenSubject(sub.id)}
                  className="bg-[#161b22] hover:bg-[#1c2128] border border-[#30363d] hover:border-[#8b949e] rounded-md p-4 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Repo Header */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className="w-4 h-4 text-[#8b949e] shrink-0" />
                        <span className="font-semibold text-xs sm:text-sm text-[#58a6ff] hover:underline truncate">
                          {repoSlug}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded-full border border-[#30363d] text-[#8b949e] shrink-0">
                        Public
                      </span>
                    </div>

                    {/* Course Title & Description */}
                    <p className="text-xs font-semibold text-[#f0f6fc] mt-2">
                      {sub.name}
                    </p>
                    <p className="text-[11px] text-[#8b949e] mt-0.5 line-clamp-2">
                      {sub.description || 'Comprehensive syllabus tracking, PYQs, and revision sprint for KTU exams.'}
                    </p>

                    {/* Color-Coded Module Pills */}
                    {sub.modules && sub.modules.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mt-3">
                        {sub.modules.map((mod, mIdx) => {
                          const rainbow = getModuleRainbowColor(mod.number || mIdx + 1);
                          const mProgress = Math.round(calculateModuleProgress(mod) * 100);
                          return (
                            <span
                              key={mod.id || mIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenSubject(sub.id, mod.id);
                              }}
                              style={{
                                borderColor: `${rainbow.hex}50`,
                                color: rainbow.hex,
                                backgroundColor: `${rainbow.hex}15`
                              }}
                              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border flex items-center gap-1 hover:brightness-125 transition-all"
                            >
                              <span>M{mod.number || mIdx + 1}</span>
                              <span className="text-[9px] opacity-75">{rainbow.colorCode}</span>
                              <span className="text-[9px] text-[#f0f6fc] font-bold">{mProgress}%</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Repo Footer Meta */}
                  <div className="mt-4 pt-3 border-t border-[#30363d] flex flex-wrap items-center justify-between gap-2 text-xs text-[#8b949e] font-mono">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#238636]" />
                        <span className="text-[#f0f6fc] font-bold">{progress}%</span>
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

                    <div className="text-[11px] text-[#58a6ff] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add Course Modal in GitHub Dark Style */}
      <Modal
        isOpen={isAddSubjectOpen}
        onClose={() => setIsAddSubjectOpen(false)}
        title="Create a new academic repository"
        subtitle={`Add curriculum course to ${currentSemester}`}
      >
        <form onSubmit={handleCreateSubject} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-semibold text-[#f0f6fc] mb-1">
              Course Repository Name *
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
                Primary Color Accent
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
                Exam Date & Time
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
                placeholder="e.g. Hall 3, Academic Block"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-[#30363d]">
            <button
              type="button"
              onClick={() => setIsAddSubjectOpen(false)}
              className="btn-gh px-3 py-1.5 text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newSubName.trim()}
              className="btn-gh-primary px-3 py-1.5 text-xs disabled:opacity-40"
            >
              Create repository
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
