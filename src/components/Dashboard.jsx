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
  Sparkles,
  AlertCircle
} from 'lucide-react';
import Modal from './Modal';
import { SUBJECT_COLORS, getModuleRainbowColor } from '../constants/initialData';
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

  // Upcoming exam calculation
  const nearestItem = getNearestUpcomingExam(subjects);
  let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  if (nearestItem) {
    const diff = nearestItem.time - now;
    countdown = formatTimeRemaining(diff);
  }

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
    <div className="space-y-7 animate-in fade-in duration-300">
      {/* Top Header & Semester Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2">
            <span>My Courses & Exam Ledger</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
            Track academic syllabus mastery, revision sprint checklists, and exam schedules
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          {/* Semester Pill Toggle (High-contrast B&W control) */}
          <div className="inline-flex p-1 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner">
            <button
              onClick={() => onSelectSemester('S1')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                currentSemester === 'S1'
                  ? 'bg-white text-black font-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Semester 1</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                currentSemester === 'S1' ? 'bg-zinc-200 text-black' : 'bg-zinc-800 text-zinc-300'
              }`}>
                {data.S1?.subjects?.length || 0}
              </span>
            </button>

            <button
              onClick={() => onSelectSemester('S2')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                currentSemester === 'S2'
                  ? 'bg-white text-black font-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Semester 2</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                currentSemester === 'S2' ? 'bg-zinc-200 text-black' : 'bg-zinc-800 text-zinc-300'
              }`}>
                {data.S2?.subjects?.length || 0}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsAddSubjectOpen(true)}
            className="px-4 py-2.5 bg-white hover:bg-zinc-200 text-black rounded-2xl text-xs font-black flex items-center gap-2 shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Course</span>
          </button>
        </div>
      </div>

      {/* Nearest Upcoming Exam Hero Countdown Banner */}
      {nearestItem && (
        <div className="glass-panel p-6 sm:p-7 rounded-[28px] border border-zinc-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all">
          <div className="space-y-3 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                Nearest Upcoming Paper
              </span>
              <span className="text-xs text-zinc-500 font-medium">
                {currentSemester} Master Schedule
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {nearestItem.subject.name}
              </h2>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-700">
                {nearestItem.subject.code}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {new Date(nearestItem.subject.examDate).toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>

              {nearestItem.subject.examVenue && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{nearestItem.subject.examVenue}</span>
                </div>
              )}
            </div>
          </div>

          {/* Large Live Monochrome Ticking Countdown Numbers */}
          <div className="bg-black/80 rounded-2xl p-4 sm:p-5 border border-zinc-800 flex items-center justify-center gap-4 sm:gap-6 shrink-0 shadow-inner">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {String(countdown.days).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                Days
              </div>
            </div>

            <span className="text-zinc-600 font-black text-xl">:</span>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {String(countdown.hours).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                Hours
              </div>
            </div>

            <span className="text-zinc-600 font-black text-xl">:</span>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {String(countdown.minutes).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                Mins
              </div>
            </div>

            <span className="text-zinc-600 font-black text-xl">:</span>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-zinc-300 font-mono">
                {String(countdown.seconds).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                Secs
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4 Stat Summary Cards (Monochrome High Contrast) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Total Courses */}
        <div className="glass-panel p-5 rounded-[24px] border border-zinc-800 bg-[#121214] flex flex-col justify-between shadow-2xs hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Total Courses
            </span>
            <div className="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-white">
              {stats.subjectsCount}
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 font-medium">
              Enrolled in {currentSemester}
            </p>
          </div>
        </div>

        {/* Card 2: Study Progress */}
        <div className="glass-panel p-5 rounded-[24px] border border-zinc-800 bg-[#121214] flex flex-col justify-between shadow-2xs hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Study Progress
            </span>
            <div className="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-white">
              {stats.overallProgress}%
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-white h-full transition-all duration-500" 
                style={{ width: `${stats.overallProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 3: Topics Mastered */}
        <div className="glass-panel p-5 rounded-[24px] border border-zinc-800 bg-[#121214] flex flex-col justify-between shadow-2xs hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Topics Mastered
            </span>
            <div className="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-1">
              <span>{stats.completedTopics}</span>
              <span className="text-xs font-bold text-zinc-500">/ {stats.totalTopics}</span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 font-medium">
              Syllabus units studied
            </p>
          </div>
        </div>

        {/* Card 4: Revision Rate */}
        <div className="glass-panel p-5 rounded-[24px] border border-zinc-800 bg-[#121214] flex flex-col justify-between shadow-2xs hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Revision Rate
            </span>
            <div className="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-zinc-200">
              {stats.revisionProgress}%
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-zinc-300 h-full transition-all duration-500" 
                style={{ width: `${stats.revisionProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Courses Header & Search */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Curriculum Courses
            </h2>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
              {filteredSubjects.length} courses
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search course title or code..."
              className="w-full bg-[#121214] border border-zinc-800 rounded-2xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Black & White Course Cards with Color-Coded Modules */}
        {filteredSubjects.length === 0 ? (
          <div className="glass-panel p-16 rounded-[28px] border border-dashed border-zinc-800 text-center bg-[#121214]">
            <BookOpen className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No Courses Found</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto font-medium">
              No courses match your query. Try clearing the search or click below to add a new subject.
            </p>
            <button
              onClick={() => setIsAddSubjectOpen(true)}
              className="mt-4 px-4 py-2 bg-white hover:bg-zinc-200 text-black rounded-xl text-xs font-bold shadow-sm"
            >
              + Add Course
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubjects.map((sub) => {
              const progress = Math.round(calculateSubjectProgress(sub) * 100);
              const revision = Math.round(calculateSubjectRevisionProgress(sub));
              const allTopics = (sub.modules || []).flatMap(m => m.topics || []);
              const pendingRevisionCount = allTopics.filter(t => t.status === 'needs-revision').length;
              const completedTodosCount = (sub.todos || []).filter(t => t.done).length;
              const pastPapersCount = (sub.pastPapers || []).length;

              return (
                <div
                  key={sub.id}
                  onClick={() => onOpenSubject(sub.id)}
                  className="bg-[#121214] hover:bg-[#161619] border border-[#27272a] hover:border-zinc-700 p-6 sm:p-7 rounded-[28px] cursor-pointer transition-all duration-300 hover:scale-[1.005] hover:shadow-xl shadow-sm relative overflow-hidden group select-none text-white"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="space-y-2 flex-1 min-w-0">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-700">
                          {sub.code}
                        </span>

                        {sub.examDate && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-800 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-zinc-400" />
                            <span>
                              Exam: {new Date(sub.examDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            </span>
                          </span>
                        )}

                        {sub.todos && sub.todos.length > 0 && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                            {completedTodosCount}/{sub.todos.length} to-dos done
                          </span>
                        )}

                        {pastPapersCount > 0 && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1">
                            <FileText className="w-3 h-3 text-zinc-400" />
                            <span>{pastPapersCount} PYQs (2019-2026)</span>
                          </span>
                        )}
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                        {sub.name}
                      </h3>

                      {/* Meta Summary */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-medium">
                        <span>{(sub.modules || []).length} modules</span>
                        <span>•</span>
                        <span>{allTopics.length} syllabus topics</span>
                        {pendingRevisionCount > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-amber-400 font-bold flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {pendingRevisionCount} pending revision
                            </span>
                          </>
                        )}
                      </div>

                      {/* Dual Progress Bars */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 max-w-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mb-1">
                            <span>Study Mastery</span>
                            <span className="text-white font-mono">{progress}%</span>
                          </div>
                          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-white transition-all duration-500"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mb-1">
                            <span>Revision Ready</span>
                            <span className="text-zinc-300 font-mono">{revision}%</span>
                          </div>
                          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-zinc-400 transition-all duration-500"
                              style={{ width: `${revision}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Circular Action Button */}
                    <div className="shrink-0 self-end md:self-center">
                      <div className="w-12 h-12 rounded-full bg-white hover:bg-zinc-200 text-black flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
                        <ArrowRight className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* SUB-LIST OF COLOR-CODED MODULES IN THIS COURSE */}
                  {sub.modules && sub.modules.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-zinc-800">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-black uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Course Modules ({sub.modules.length})</span>
                        </span>
                        <span className="text-[10px] font-semibold text-zinc-500">
                          Color-coded by syllabus unit
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                        {sub.modules.map((mod, mIdx) => {
                          const rainbow = getModuleRainbowColor(mod.number || mIdx + 1);
                          const modProgress = Math.round(calculateModuleProgress(mod) * 100);
                          return (
                            <div
                              key={mod.id || mIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenSubject(sub.id, mod.id);
                              }}
                              className="p-3 rounded-2xl bg-[#0c0c0e] hover:bg-zinc-900 border border-zinc-800/90 hover:border-zinc-700 shadow-2xs hover:shadow-md transition-all cursor-pointer group/mod flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-1.5">
                                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md border ${rainbow.badgeBg}`}>
                                    M{mod.number || mIdx + 1}
                                  </span>
                                  
                                  {/* Explicit Color Code Tag */}
                                  <span 
                                    style={{
                                      borderColor: `${rainbow.hex}50`,
                                      color: rainbow.hex,
                                      backgroundColor: `${rainbow.hex}18`
                                    }}
                                    className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border"
                                  >
                                    {rainbow.colorCode}
                                  </span>

                                  <span className="text-[10px] font-mono font-extrabold text-zinc-400">
                                    {modProgress}%
                                  </span>
                                </div>
                                <p className="text-xs font-bold text-zinc-200 line-clamp-2 leading-snug group-hover/mod:text-white transition-colors">
                                  {mod.name.replace(/^Module\s*\d+\s*:\s*/i, '')}
                                </p>
                              </div>
                              <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                <div 
                                  className="h-full transition-all duration-300"
                                  style={{ width: `${modProgress}%`, backgroundColor: rainbow.hex }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
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
        title="Add Curriculum Course"
        subtitle={`Enroll new course in ${currentSemester}`}
      >
        <form onSubmit={handleCreateSubject} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Course Name *
            </label>
            <input
              type="text"
              value={newSubName}
              onChange={(e) => setNewSubName(e.target.value)}
              placeholder="e.g. Operating Systems, Engineering Chemistry"
              autoFocus
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Course Code
              </label>
              <input
                type="text"
                value={newSubCode}
                onChange={(e) => setNewSubCode(e.target.value)}
                placeholder="e.g. MAT101"
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Rainbow Theme Color
              </label>
              <select
                value={newSubColor}
                onChange={(e) => setNewSubColor(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
              >
                {SUBJECT_COLORS.map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Exam Date & Time
              </label>
              <input
                type="datetime-local"
                value={newSubExamDate}
                onChange={(e) => setNewSubExamDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Exam Hall / Venue
              </label>
              <input
                type="text"
                value={newSubVenue}
                onChange={(e) => setNewSubVenue(e.target.value)}
                placeholder="e.g. Hall 3, Academic Block"
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddSubjectOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newSubName.trim()}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-40 shadow-md shadow-purple-200"
            >
              Create Course
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
