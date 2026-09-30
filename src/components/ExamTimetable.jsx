import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  AlertTriangle, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  calculateSubjectProgress, 
  calculateSubjectRevisionProgress, 
  formatTimeRemaining,
  isExamWithin7Days 
} from '../utils/progress';
import { SUBJECT_COLORS } from '../constants/initialData';

export default function ExamTimetable({ 
  data, 
  onOpenSubject 
}) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Collect all subjects with an examDate across both S1 and S2
  const timetableEntries = [];

  ['S1', 'S2'].forEach(semKey => {
    const sem = data[semKey];
    if (sem && sem.subjects) {
      sem.subjects.forEach(sub => {
        if (sub.examDate && !isNaN(new Date(sub.examDate).getTime())) {
          timetableEntries.push({
            semester: semKey,
            subject: sub,
            examTime: new Date(sub.examDate).getTime(),
            examDateStr: sub.examDate,
            studyProgress: Math.round(calculateSubjectProgress(sub) * 100),
            revisionProgress: Math.round(calculateSubjectRevisionProgress(sub))
          });
        }
      });
    }
  });

  // Sort chronologically
  timetableEntries.sort((a, b) => a.examTime - b.examTime);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-7 rounded-[28px] border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100 px-3 py-1 rounded-full border border-violet-200">
              Academic Master Schedule
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Exam Timetable
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Chronological calendar of all scheduled papers across Semester 1 and Semester 2 with live readiness indicators.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto text-xs text-slate-700 font-medium">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span>Papers within <strong>7 days</strong> flagged with red priority border</span>
        </div>
      </div>

      {/* Timetable List / Table */}
      {timetableEntries.length === 0 ? (
        <div className="glass-panel p-16 rounded-[28px] border border-dashed border-slate-300 text-center">
          <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No Scheduled Exams Yet</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Set examination dates for your subjects in Settings or edit individual subject details to generate your master timetable.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {timetableEntries.map((entry) => {
            const isUrgent = isExamWithin7Days(entry.examDateStr);
            const remaining = formatTimeRemaining(entry.examTime - currentTime);
            const subColor = SUBJECT_COLORS.find(c => c.id === entry.subject.color) || SUBJECT_COLORS[0];

            return (
              <div
                key={`${entry.semester}-${entry.subject.id}`}
                onClick={() => onOpenSubject(entry.semester, entry.subject.id)}
                className={`p-5 sm:p-6 rounded-[24px] border transition-all duration-300 cursor-pointer group hover:shadow-lg relative overflow-hidden ${
                  isUrgent 
                    ? 'border-l-[6px] border-l-rose-500 border-rose-200 bg-gradient-to-r from-rose-50/70 via-white to-white shadow-sm' 
                    : 'border-l-[6px] border-l-violet-500 border-slate-200/90 bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  {/* Left: Subject name, semester badge, venue */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {entry.semester}
                      </span>
                      {entry.subject.code && (
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${subColor.bg} ${subColor.text} border ${subColor.border}`}>
                          {entry.subject.code}
                        </span>
                      )}
                      {isUrgent && (
                        <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md border border-rose-200 flex items-center gap-1 animate-pulse">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                          Final Countdown (&lt; 7 Days)
                        </span>
                      )}
                      {remaining.isPast && (
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                          Exam Completed
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-violet-700 transition-colors">
                      {entry.subject.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-violet-600" />
                        {new Date(entry.examDateStr).toLocaleDateString(undefined, {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })} at {new Date(entry.examDateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>

                      {entry.subject.examVenue && (
                        <span className="flex items-center gap-1 text-slate-600">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          {entry.subject.examVenue}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Middle: Live Days Remaining Pill */}
                  <div className="bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200 shrink-0 self-start lg:self-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Time Remaining
                    </div>
                    {remaining.isPast ? (
                      <div className="text-sm font-bold text-slate-400">
                        Past Exam
                      </div>
                    ) : (
                      <div className="text-base font-black font-mono flex items-center gap-1.5">
                        <Clock className={`w-4 h-4 ${isUrgent ? 'text-rose-600 animate-spin' : 'text-violet-600'}`} style={{ animationDuration: '8s' }} />
                        <span className={isUrgent ? 'text-rose-700 font-black' : 'text-violet-700 font-black'}>
                          {remaining.days}d {remaining.hours}h {remaining.minutes}m {remaining.seconds}s
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right: Progress meters & Jump link */}
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="space-y-2 w-32 sm:w-40">
                      {/* Study progress */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1 font-medium">
                          <span className="text-slate-500">Syllabus</span>
                          <span className="font-bold text-slate-800">{entry.studyProgress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${subColor.gradient}`}
                            style={{ width: `${entry.studyProgress}%` }}
                          />
                        </div>
                      </div>

                      {/* Revision progress */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1 font-medium">
                          <span className="text-slate-500">Revised</span>
                          <span className="font-bold text-emerald-700">{entry.revisionProgress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500"
                            style={{ width: `${entry.revisionProgress}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="p-3 rounded-full bg-slate-100 group-hover:bg-violet-600 text-slate-500 group-hover:text-white transition-all self-center shadow-sm"
                      title="Open subject details"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
