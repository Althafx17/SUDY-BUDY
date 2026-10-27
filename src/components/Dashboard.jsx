import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  ArrowRight, 
  Plus, 
  BookOpen, 
  FileText,
  Flame,
  Trophy
} from 'lucide-react';
import Modal from './Modal';
import ContributionGraph from './ContributionGraph';
import { SUBJECT_COLORS, MODULE_RAINBOW_COLORS, getModuleRainbowColor } from '../constants/initialData';
import { 
  calculateSubjectProgress, 
  getSemesterStats, 
  getNearestUpcomingExam, 
  formatTimeRemaining 
} from '../utils/progress';
import {
  getStudyActivity,
  toggleTodayStudy,
  recordStudyEvent,
  isStudiedToday,
  calculateStreak,
  calculateTotalDaysStudied,
  calculateTotalSessions
} from '../utils/studyActivity';

export default function Dashboard({
  data,
  currentSemester,
  onSelectSemester,
  onOpenSubject,
  onAddSubject,
  onNavigateToTimetable,
  currentTheme = 'dosage-frame'
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);

  // Form states for Add Subject
  const [newSubName, setNewSubName] = useState('');
  const [newSubCode, setNewSubCode] = useState('');
  const [newSubColor, setNewSubColor] = useState('violet');
  const [newSubExamDate, setNewSubExamDate] = useState('');
  const [newSubVenue, setNewSubVenue] = useState('');

  // Real Study Activity State
  const [activityMap, setActivityMap] = useState(() => getStudyActivity());

  const handleToggleTodayStudy = () => {
    const updated = toggleTodayStudy();
    setActivityMap(updated);
  };

  const handleAddStudySession = () => {
    const updated = recordStudyEvent(null, 1);
    setActivityMap(updated);
  };

  // Ticking countdown state for nearest exam
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const semesterData = data?.[currentSemester] || { subjects: [] };
  const subjects = semesterData?.subjects || [];
  const stats = getSemesterStats(semesterData) || { overallProgress: 0, totalTopics: 0, completedTopics: 0, revisedTopics: 0, revisionProgress: 0 };

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
    if (typeof pct !== 'number' || isNaN(pct)) return 'C';
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
      const targetMod = (sub.modules || []).find(m => (m?.number || 0) === modNumber);
      if (targetMod) {
        const tCount = targetMod.topics?.length || 0;
        totalTopicsInMod += tCount;
        completedTopicsInMod += (targetMod.topics || []).filter(t => t?.status === 'studied' || t?.status === 'revised').length;
      }
    });

    const pct = totalTopicsInMod > 0 ? Math.round((completedTopicsInMod / totalTopicsInMod) * 100) : 0;
    return {
      ...rainbow,
      totalTopics: totalTopicsInMod,
      completedTopics: completedTopicsInMod,
      progress: pct,
      barWeight: totalTopicsInMod > 0 ? totalTopicsInMod : ([35, 25, 20, 12, 8][idx] || 10)
    };
  });

  const totalBarWeight = moduleMasteryStats.reduce((sum, m) => sum + (m.barWeight || 0), 0) || 100;

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

  const studiedToday = isStudiedToday(activityMap);
  const currentStreak = calculateStreak(activityMap);
  const totalStudyDays = calculateTotalDaysStudied(activityMap);
  const totalSessions = calculateTotalSessions(activityMap);
  const todaySessionsCount = activityMap[new Date().toISOString().split('T')[0]] || 0;

  const isDosage = currentTheme === 'dosage-frame';

  // Dynamic theme styling
  const cardClass = isDosage
    ? 'bg-white border border-[#eef0f8] rounded-3xl p-5 shadow-sm text-[#1b1c31]'
    : 'bg-[#161b22] border border-[#30363d] rounded-md p-3.5 sm:p-4 text-[#f0f6fc]';
  const innerCardClass = isDosage
    ? 'bg-[#f8f9fe] border border-[#eef0f8] rounded-2xl'
    : 'bg-[#0d1117] border border-[#30363d] rounded-md';
  const dividerClass = isDosage ? 'border-[#f1f3fa]' : 'border-[#30363d]';
  const textTitle = isDosage ? 'text-[#1b1c31]' : 'text-[#f0f6fc]';
  const textMuted = isDosage ? 'text-[#7d8299]' : 'text-[#8b949e]';

  return (
    <div className={`space-y-4 font-sans ${isDosage ? 'text-[#1b1c31]' : 'text-[#f0f6fc]'}`}>
      {/* Simple Clean Header: Overview Title & Semester Switcher */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2.5 border-b ${isDosage ? 'border-[#eef0f8]' : 'border-[#30363d]'}`}>
        <div className="flex items-center gap-2.5">
          <BookOpen className={`w-5 h-5 ${isDosage ? 'text-[#5f51bd]' : 'text-[#8b949e]'}`} />
          <div>
            <h1 className={`text-base sm:text-lg font-bold tracking-tight leading-none ${textTitle}`}>
              Academic Overview
            </h1>
            <p className={`text-xs mt-1 font-mono ${textMuted}`}>
              Study Tracker · KTU {currentSemester} B.Tech Ledger
            </p>
          </div>
        </div>

        {/* Right Controls: Semester Switcher & New Course */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className={`inline-flex p-0.5 rounded-full border ${isDosage ? 'bg-[#f0f2fa] border-[#e4e6f2]' : 'bg-[#0d1117] border-[#30363d]'}`}>
            <button
              onClick={() => onSelectSemester('S1')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentSemester === 'S1'
                  ? isDosage ? 'bg-[#5f51bd] text-white shadow-xs font-bold' : 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
                  : isDosage ? 'text-[#7d8299] hover:text-[#1b1c31]' : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <span>Semester 1</span>
              <span className={`text-[10px] font-mono ${isDosage && currentSemester === 'S1' ? 'text-white/80' : 'text-[#8b949e]'}`}>
                ({data.S1?.subjects?.length || 0})
              </span>
            </button>

            <button
              onClick={() => onSelectSemester('S2')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentSemester === 'S2'
                  ? isDosage ? 'bg-[#5f51bd] text-white shadow-xs font-bold' : 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
                  : isDosage ? 'text-[#7d8299] hover:text-[#1b1c31]' : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <span>Semester 2</span>
              <span className={`text-[10px] font-mono ${isDosage && currentSemester === 'S2' ? 'text-white/80' : 'text-[#8b949e]'}`}>
                ({data.S2?.subjects?.length || 0})
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsAddSubjectOpen(true)}
            className={`${isDosage ? 'bg-[#5f51bd] hover:bg-[#5244ad] text-white rounded-full px-4 py-1.5 text-xs font-bold shadow-xs' : 'btn-gh-primary px-3 py-1 text-xs font-semibold rounded-md shadow-sm'} flex items-center gap-1.5 transition-colors`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Course</span>
          </button>
        </div>
      </div>

      {/* Study Tracker Stats & Today's Study Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {/* Card 1: Curriculum & Revision Stats */}
        <div className={`${cardClass} flex flex-col justify-between`}>
          <div className={`flex items-center justify-between border-b pb-2 mb-2.5 ${dividerClass}`}>
            <h3 className={`text-xs font-semibold uppercase tracking-wider ${textTitle}`}>
              Study Tracker Stats
            </h3>
            <span className={`text-[10px] font-mono ${textMuted}`}>
              KTU {currentSemester}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className={textMuted}>Total Topics:</span>
                <span className={`font-bold ${textTitle}`}>{stats.totalTopics}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={textMuted}>Topics Mastered:</span>
                <span className={`font-bold ${textTitle}`}>{stats.completedTopics}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={textMuted}>Total PYQs:</span>
                <span className={`font-bold ${textTitle}`}>{totalPYQs}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={textMuted}>Revision Ready:</span>
                <span className={`font-bold ${textTitle}`}>{stats.revisionProgress}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={textMuted}>Completion:</span>
                <span className={`font-bold ${isDosage ? 'text-[#5f51bd]' : 'text-[#58a6ff]'}`}>{stats.overallProgress}%</span>
              </div>
            </div>

            {/* Circular Letter Grade Gauge */}
            <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
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
                <span className="text-xl font-black font-mono text-[#f0f6fc]">
                  {grade}
                </span>
                <span className="text-[9px] text-[#8b949e] font-mono uppercase">
                  Grade
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Today's Study & Consistency Tracker */}
        <div className={`${cardClass} flex flex-col justify-between`}>
          <div className={`flex items-center justify-between border-b pb-2 mb-2.5 ${dividerClass}`}>
            <h3 className={`text-xs font-semibold uppercase tracking-wider ${textTitle}`}>
              Today&apos;s Study &amp; Streak
            </h3>
            <span className={`text-[10px] font-mono ${textMuted}`}>
              Daily Habit
            </span>
          </div>

          {/* Interactive Checkbox for Today's Study */}
          <div className={`${innerCardClass} p-3 mb-3 flex items-center justify-between gap-3`}>
            <label className="flex items-center gap-2.5 cursor-pointer select-none min-w-0">
              <input
                type="checkbox"
                checked={studiedToday}
                onChange={handleToggleTodayStudy}
                className={`w-4 h-4 rounded text-[#5f51bd] ${isDosage ? 'bg-white border-[#e4e6f2]' : 'bg-[#161b22] border-[#30363d]'} focus:ring-[#5f51bd] cursor-pointer shrink-0`}
              />
              <div className="truncate">
                <div className="flex items-center gap-1.5">
                  <span className={`font-bold text-xs ${textTitle}`}>
                    Today&apos;s Study
                  </span>
                  {studiedToday && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full font-mono bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 font-bold">
                      Completed
                    </span>
                  )}
                </div>
                <p className={`text-[10px] truncate ${textMuted}`}>
                  {studiedToday
                    ? `${todaySessionsCount} session${todaySessionsCount === 1 ? '' : 's'} logged today`
                    : 'Check to record today’s study activity'}
                </p>
              </div>
            </label>

            <button
              type="button"
              onClick={handleAddStudySession}
              className={`${isDosage ? 'bg-[#5f51bd] hover:bg-[#5244ad] text-white rounded-full' : 'btn-gh'} text-[11px] px-2.5 py-1 font-semibold flex items-center gap-1 shrink-0 transition-colors`}
              title="Add a study session to today"
            >
              + Log Session
            </button>
          </div>

          {/* Real Metrics 3-Column Row */}
          <div className={`grid grid-cols-3 divide-x ${dividerClass} pt-1`}>
            {/* Col 1 */}
            <div className="flex flex-col items-center justify-center text-center px-1">
              <div className={`text-xl sm:text-2xl font-black font-mono ${textTitle}`}>
                {totalSessions}
              </div>
              <div className={`text-[11px] font-semibold mt-0.5 ${textTitle}`}>
                Sessions Logged
              </div>
              <div className={`text-[10px] font-mono ${textMuted}`}>
                {totalStudyDays} days active
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col items-center justify-center text-center px-1">
              <div className="flex items-center gap-1">
                <Flame className={`w-4 h-4 ${currentStreak > 0 ? 'text-[#f97316]' : 'text-[#8b949e]'}`} />
                <span className={`text-xl sm:text-2xl font-black font-mono ${textTitle}`}>
                  {currentStreak}
                </span>
              </div>
              <div className="text-[11px] font-semibold text-[#f97316] mt-0.5">
                Current Streak
              </div>
              <div className={`text-[10px] font-mono ${textMuted}`}>
                {currentStreak > 0 ? 'Consistent' : 'Start today'}
              </div>
            </div>

            {/* Col 3 */}
            <div 
              className={`flex flex-col items-center justify-center text-center px-1 ${onNavigateToTimetable ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
              onClick={onNavigateToTimetable}
              title={nearestItem ? `${nearestItem.subject.name} - Click to view Timetable` : 'View Timetable'}
            >
              <div className={`text-xl sm:text-2xl font-black font-mono ${textTitle}`}>
                {nearestItem ? String(countdown.days).padStart(2, '0') : '—'}
              </div>
              <div className={`text-[11px] font-semibold mt-0.5 ${textTitle}`}>
                Days to Exam
              </div>
              <div className={`text-[10px] font-mono truncate max-w-22.5 ${textMuted}`} title={nearestItem ? nearestItem.subject.name : 'No exam scheduled'}>
                {nearestItem ? nearestItem.subject.code : 'No exam'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Study Activity Contribution Calendar */}
      <ContributionGraph 
        activityMap={activityMap}
        topicsCompleted={stats.completedTopics}
        currentTheme={currentTheme}
      />

      {/* Card 3: Curriculum Module Progress Bar */}
      <div className={cardClass}>
        <div className={`flex items-center justify-between border-b pb-2 mb-2.5 ${dividerClass}`}>
          <h3 className={`text-xs font-semibold uppercase tracking-wider ${textTitle}`}>
            Curriculum Module Progress &amp; Mastery
          </h3>
          <span className={`text-[10px] font-mono ${textMuted}`}>
            Color-Coded Units
          </span>
        </div>

        {/* Horizontal Segmented Bar */}
        <div className={`w-full h-2.5 rounded-full overflow-hidden flex ${isDosage ? 'bg-[#f0f2fa] border border-[#e4e6f2]' : 'bg-[#0d1117] border border-[#30363d]'}`}>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-3 text-xs font-mono">
          {moduleMasteryStats.map((mod) => {
            const widthPct = ((mod.barWeight / totalBarWeight) * 100).toFixed(1);
            return (
              <div key={mod.moduleNumber} className="flex items-center gap-2">
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: mod.hex }} 
                />
                <span className={`${textTitle} font-sans truncate text-[11px]`}>
                  Module {mod.moduleNumber}
                </span>
                <span 
                  className="text-[9px] px-1 py-0.2 rounded border shrink-0 font-bold"
                  style={{
                    color: mod.hex,
                    borderColor: `${mod.hex}50`,
                    backgroundColor: `${mod.hex}15`
                  }}
                >
                  {mod.colorCode}
                </span>
                <span className={`${textMuted} ml-auto text-[11px]`}>
                  {widthPct}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card 4: Academic Study Milestones */}
      <div className={`${cardClass} p-4 sm:p-5`}>
        <div className="flex items-center gap-2 mb-2.5">
          <Trophy className="w-4 h-4 text-[#e3b341]" />
          <h3 className={`text-xs font-semibold uppercase tracking-wider ${textTitle}`}>
            Academic Study Milestones
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className={`${innerCardClass} p-2.5 flex items-center gap-2.5 transition-all`}>
            <span className="text-lg">📚</span>
            <div>
              <div className={`font-bold text-[11px] ${textTitle}`}>Curriculum Master</div>
              <div className={`text-[10px] font-mono ${textMuted}`}>{stats.completedTopics} Topics Done</div>
            </div>
          </div>

          <div className={`${innerCardClass} p-2.5 flex items-center gap-2.5 transition-all`}>
            <span className="text-lg">⚡</span>
            <div>
              <div className={`font-bold text-[11px] ${textTitle}`}>Consistent Learner</div>
              <div className={`text-[10px] font-mono ${textMuted}`}>{currentStreak}d Streak</div>
            </div>
          </div>

          <div className={`${innerCardClass} p-2.5 flex items-center gap-2.5 transition-all`}>
            <span className="text-lg">📝</span>
            <div>
              <div className={`font-bold text-[11px] ${textTitle}`}>PYQ Mastery</div>
              <div className={`text-[10px] font-mono ${textMuted}`}>{totalPYQs} Question Papers</div>
            </div>
          </div>

          <div className={`${innerCardClass} p-2.5 flex items-center gap-2.5 transition-all`}>
            <span className="text-lg">🎯</span>
            <div>
              <div className={`font-bold text-[11px] ${textTitle}`}>Exam Readiness</div>
              <div className={`text-[10px] font-mono ${textMuted}`}>{stats.overallProgress}% Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Courses & Subjects */}
      <div className="space-y-3 pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className={`text-sm font-bold ${textTitle}`}>
              Enrolled Courses &amp; Subjects
            </h2>
            <span className={isDosage 
              ? "text-xs font-mono px-2.5 py-0.5 rounded-full bg-white border border-[#e2e5f1] text-[#5f51bd] font-bold shadow-xs"
              : "text-xs font-mono px-2 py-0.2 rounded-full bg-[#21262d] border border-[#30363d] text-[#8b949e]"}>
              {filteredSubjects.length}
            </span>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className={`w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 ${isDosage ? 'text-[#8c91a4]' : 'text-[#8b949e]'}`} aria-hidden="true" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter courses..."
              aria-label="Filter courses"
              className={isDosage
                ? "w-full bg-white border border-[#e2e5f1] rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#1c1d29] placeholder-[#8c91a4] focus:outline-none focus:border-[#5f51bd] shadow-xs"
                : "w-full bg-[#0d1117] border border-[#30363d] rounded-md pl-8 pr-3 py-1 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"}
            />
          </div>
        </div>

        {/* Courses Grid */}
        {filteredSubjects.length === 0 ? (
          <div className={isDosage 
            ? "bg-white border border-dashed border-[#d8dceb] rounded-2xl p-8 text-center" 
            : "bg-[#161b22] border border-dashed border-[#30363d] rounded-md p-8 text-center"}>
            <BookOpen className={`w-8 h-8 mx-auto mb-2 opacity-50 ${isDosage ? 'text-[#5f51bd]' : 'text-[#8b949e]'}`} />
            <h3 className={`text-xs font-semibold ${textTitle}`}>No courses found</h3>
            <p className={`text-[11px] mt-1 ${textMuted}`}>
              Click &quot;New Course&quot; above to add a subject.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredSubjects.map((sub) => {
              const progress = Math.round(calculateSubjectProgress(sub) * 100);

              return (
                <div
                  key={sub.id}
                  onClick={() => onOpenSubject(sub.id)}
                  className={isDosage
                    ? "bg-white hover:bg-[#fafbff] border border-[#eceef6] rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-[0_4px_16px_rgba(95,81,189,0.06)] hover:shadow-[0_8px_24px_rgba(95,81,189,0.12)] hover:-translate-y-0.5"
                    : "bg-[#161b22] hover:bg-[#1c2128] border border-[#30363d] hover:border-[#58a6ff]/50 rounded-md p-3.5 cursor-pointer transition-all flex flex-col justify-between group shadow-sm"}
                >
                  <div>
                    {/* Header: Book icon + Code + Instructor */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className={`w-4 h-4 shrink-0 ${isDosage ? 'text-[#5f51bd]' : 'text-[#8b949e]'}`} />
                        <span className={`font-semibold text-xs hover:underline font-mono truncate ${isDosage ? 'text-[#5f51bd]' : 'text-[#58a6ff]'}`}>
                          {sub.code || 'KTU'}
                        </span>
                      </div>
                      <span className={isDosage 
                        ? "text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#eceef6] bg-[#f8f9fd] text-[#5f51bd] shrink-0 font-medium"
                        : "text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#30363d] text-[#8b949e] shrink-0"}>
                        {sub.instructor || 'Core KTU'}
                      </span>
                    </div>

                    <p className={`text-xs font-bold mt-1.5 truncate ${textTitle}`}>
                      {sub.name}
                    </p>
                    <p className={`text-[11px] mt-0.5 line-clamp-1 ${textMuted}`}>
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
                  <div className={`mt-3 pt-2.5 border-t ${dividerClass} flex items-center justify-between text-xs font-mono ${textMuted}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${isDosage ? 'bg-[#5f51bd]' : 'bg-[#238636]'}`} />
                        <span className={`font-bold text-[11px] ${textTitle}`}>{progress}%</span>
                      </div>
                      
                      {sub.examDate && (
                        <div className="flex items-center gap-1 text-[11px]">
                          <Calendar className={`w-3 h-3 ${isDosage ? 'text-[#ff6584]' : 'text-[#8b949e]'}`} />
                          <span>{new Date(sub.examDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1 text-[11px]">
                        <FileText className={`w-3 h-3 ${textMuted}`} />
                        <span>{sub.pastPapers?.length || 0} PYQs</span>
                      </div>
                    </div>

                    <ArrowRight className={`w-3 h-3 group-hover:translate-x-0.5 transition-transform ${isDosage ? 'text-[#5f51bd]' : 'text-[#58a6ff]'}`} />
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
        title="Add a New Course"
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
              Add Course
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
