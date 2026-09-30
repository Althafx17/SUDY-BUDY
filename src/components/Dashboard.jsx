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
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>My Courses & Exam Ledger</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            Track academic syllabus mastery, revision sprint checklists, and exam schedules
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          {/* Semester Pill Toggle (Apple Segmented Control) */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-2xl border border-slate-300/60 shadow-inner">
            <button
              onClick={() => onSelectSemester('S1')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                currentSemester === 'S1'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Semester 1</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                currentSemester === 'S1' ? 'bg-purple-100 text-purple-700' : 'bg-slate-300/60 text-slate-600'
              }`}>
                {data.S1?.subjects?.length || 0}
              </span>
            </button>

            <button
              onClick={() => onSelectSemester('S2')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                currentSemester === 'S2'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Semester 2</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                currentSemester === 'S2' ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-300/60 text-slate-600'
              }`}>
                {data.S2?.subjects?.length || 0}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsAddSubjectOpen(true)}
            className="px-4 py-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-md shadow-violet-200 hover:shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Course</span>
          </button>
        </div>
      </div>

      {/* Nearest Upcoming Exam Hero Countdown Banner */}
      {nearestItem && (
        <div className="glass-panel p-6 sm:p-7 rounded-[28px] border border-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all">
          <div className="space-y-3 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-600" />
                Nearest Upcoming Paper
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentSemester} Master Schedule
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {nearestItem.subject.name}
              </h2>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200">
                {nearestItem.subject.code}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/80">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
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
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{nearestItem.subject.examVenue}</span>
                </div>
              )}
            </div>
          </div>

          {/* Large Live Rainbow Ticking Countdown Numbers */}
          <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/70 flex items-center justify-center gap-4 sm:gap-6 shrink-0 shadow-inner">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                {String(countdown.days).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                Days
              </div>
            </div>

            <span className="text-slate-300 font-black text-xl">:</span>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">
                {String(countdown.hours).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                Hours
              </div>
            </div>

            <span className="text-slate-300 font-black text-xl">:</span>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-pink-600 font-mono">
                {String(countdown.minutes).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                Mins
              </div>
            </div>

            <span className="text-slate-300 font-black text-xl">:</span>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-500 font-mono">
                {String(countdown.seconds).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                Secs
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4 Stat Summary Cards (Rainbow Pastel Accent) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Total Courses (Lilac Violet) */}
        <div className="glass-panel p-5 rounded-[24px] border border-white flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Total Courses
            </span>
            <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              {stats.subjectsCount}
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">
              Enrolled in {currentSemester}
            </p>
          </div>
        </div>

        {/* Card 2: Study Progress (Aqua Cyan / Sky Blue) */}
        <div className="glass-panel p-5 rounded-[24px] border border-white flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Study Progress
            </span>
            <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              {stats.overallProgress}%
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-500" 
                style={{ width: `${stats.overallProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 3: Topics Mastered (Mint Emerald) */}
        <div className="glass-panel p-5 rounded-[24px] border border-white flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Topics Mastered
            </span>
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 flex items-baseline gap-1">
              <span>{stats.completedTopics}</span>
              <span className="text-xs font-bold text-slate-400">/ {stats.totalTopics}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">
              Syllabus units studied
            </p>
          </div>
        </div>

        {/* Card 4: Revision Rate (Warm Amber) */}
        <div className="glass-panel p-5 rounded-[24px] border border-white flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Revision Rate
            </span>
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-amber-600">
              {stats.revisionProgress}%
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-400 to-orange-500 h-full transition-all duration-500" 
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
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Curriculum Courses
            </h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
              {filteredSubjects.length} courses
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search course title or code..."
              className="w-full bg-white border border-slate-200 rounded-2xl pl-9 pr-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Rainbow Pastel Course Cards */}
        {filteredSubjects.length === 0 ? (
          <div className="glass-panel p-16 rounded-[28px] border border-dashed border-slate-300 text-center">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No Courses Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto font-medium">
              No courses match your query. Try clearing the search or click below to add a new subject.
            </p>
            <button
              onClick={() => setIsAddSubjectOpen(true)}
              className="mt-4 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              + Add Course
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubjects.map((sub) => {
              const colorObj = SUBJECT_COLORS.find(c => c.id === sub.color) || SUBJECT_COLORS[0];
              const cardClass = colorObj.cardClass || 'card-pastel-violet';
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
                  className={`${cardClass} p-6 sm:p-7 rounded-[28px] cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-xl shadow-sm relative overflow-hidden group select-none`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="space-y-2 flex-1 min-w-0">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-md ${colorObj.bg} ${colorObj.text} border ${colorObj.border}`}>
                          {sub.code}
                        </span>

                        {sub.examDate && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-amber-600" />
                            <span>
                              Exam: {new Date(sub.examDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            </span>
                          </span>
                        )}

                        {sub.todos && sub.todos.length > 0 && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200/80">
                            {completedTodosCount}/{sub.todos.length} to-dos done
                          </span>
                        )}

                        {pastPapersCount > 0 && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1">
                            <FileText className="w-3 h-3 text-indigo-500" />
                            <span>{pastPapersCount} PYQs (2019-2026)</span>
                          </span>
                        )}
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                        {sub.name}
                      </h3>

                      {/* Meta Summary */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                        <span>{(sub.modules || []).length} modules</span>
                        <span>•</span>
                        <span>{allTopics.length} syllabus topics</span>
                        {pendingRevisionCount > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-amber-600 font-bold flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {pendingRevisionCount} pending revision
                            </span>
                          </>
                        )}
                      </div>

                      {/* Dual Progress Bars */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 max-w-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1">
                            <span>Study Mastery</span>
                            <span>{progress}%</span>
                          </div>
                          <div className="w-full bg-slate-200/60 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${colorObj.gradient}`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1">
                            <span>Revision Ready</span>
                            <span className="text-emerald-700 font-bold">{revision}%</span>
                          </div>
                          <div className="w-full bg-slate-200/60 h-2 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-500"
                              style={{ width: `${revision}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Circular Action Button */}
                    <div className="shrink-0 self-end md:self-center">
                      <div className={`w-12 h-12 rounded-full ${colorObj.btnBg} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* SUB-LIST OF 5 MODULES IN THIS COURSE */}
                  {sub.modules && sub.modules.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-slate-900/10">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-purple-600" />
                          <span>Course Modules ({sub.modules.length})</span>
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Click any module to jump directly
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                        {sub.modules.map((mod, mIdx) => {
                          const rainbow = getModuleRainbowColor(mIdx + 1);
                          const modProgress = Math.round(calculateModuleProgress(mod) * 100);
                          return (
                            <div
                              key={mod.id || mIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenSubject(sub.id, mod.id);
                              }}
                              className="p-3 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all cursor-pointer group/mod flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-1.5">
                                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md border ${rainbow.badgeBg}`}>
                                    M{mIdx + 1}
                                  </span>
                                  <span className="text-[11px] font-extrabold text-slate-700">
                                    {modProgress}%
                                  </span>
                                </div>
                                <p className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug group-hover/mod:text-purple-700 transition-colors">
                                  {mod.name.replace(/^Module\s*\d+\s*:\s*/i, '')}
                                </p>
                              </div>
                              <div className="w-full bg-slate-200/70 h-1.5 rounded-full mt-3 overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${rainbow.gradient} transition-all duration-300`}
                                  style={{ width: `${modProgress}%` }}
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
