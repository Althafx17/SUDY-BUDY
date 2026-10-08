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
      <div className="p-6 sm:p-7 rounded-[28px] bg-[#121214] border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
              Academic Master Schedule
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
            Exam Timetable
          </h2>
          <p className="text-xs text-zinc-400 mt-1 font-medium">
            Chronological calendar of all scheduled papers across Semester 1 and Semester 2 with live readiness indicators.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#18181b] px-4 py-2.5 rounded-2xl border border-zinc-700 shadow-sm self-start md:self-auto text-xs text-zinc-300 font-medium">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span>Papers within <strong className="text-white">7 days</strong> flagged with red priority border</span>
        </div>
      </div>

      {/* Timetable List / Table */}
      {timetableEntries.length === 0 ? (
        <div className="p-16 rounded-[28px] border border-dashed border-zinc-800 bg-[#121214]/60 text-center">
          <Calendar className="w-12 h-12 text-zinc-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">No Scheduled Exams Yet</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
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
                    ? 'border-l-[6px] border-l-rose-500 border-zinc-800 bg-[#161214] shadow-sm' 
                    : 'border-l-[6px] border-l-white border-zinc-800 bg-[#121214] hover:border-zinc-700 shadow-sm'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  {/* Left: Subject name, semester badge, venue */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700">
                        {entry.semester}
                      </span>
                      {entry.subject.code && (
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700">
                          {entry.subject.code}
                        </span>
                      )}
                      {isUrgent && (
                        <span className="text-[11px] font-bold text-rose-300 bg-rose-950/70 px-2 py-0.5 rounded-md border border-rose-800 flex items-center gap-1 animate-pulse">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                          Final Countdown (&lt; 7 Days)
                        </span>
                      )}
                      {remaining.isPast && (
                        <span className="text-[11px] font-semibold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-700">
                          Exam Completed
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-white group-hover:text-zinc-300 transition-colors">
                      {entry.subject.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-zinc-400 font-medium">
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {new Date(entry.examDateStr).toLocaleDateString(undefined, {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })} at {new Date(entry.examDateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>

                      {entry.subject.examVenue && (
                        <span className="flex items-center gap-1 text-zinc-400">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          {entry.subject.examVenue}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Middle: Live Days Remaining Pill */}
                  <div className="bg-[#18181b] px-4 py-3 rounded-2xl border border-zinc-700 shrink-0 self-start lg:self-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                      Time Remaining
                    </div>
                    {remaining.isPast ? (
                      <div className="text-sm font-bold text-zinc-500">
                        Past Exam
                      </div>
                    ) : (
                      <div className="text-base font-black font-mono flex items-center gap-1.5">
                        <Clock className={`w-4 h-4 ${isUrgent ? 'text-rose-400 animate-spin' : 'text-zinc-300'}`} style={{ animationDuration: '8s' }} />
                        <span className={isUrgent ? 'text-rose-400 font-black' : 'text-white font-black'}>
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
                          <span className="text-zinc-400">Syllabus</span>
                          <span className="font-bold text-white">{entry.studyProgress}%</span>
                        </div>
                        <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white"
                            style={{ width: `${entry.studyProgress}%` }}
                          />
                        </div>
                      </div>

                      {/* Revision progress */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1 font-medium">
                          <span className="text-zinc-400">Revised</span>
                          <span className="font-bold text-emerald-400">{entry.revisionProgress}%</span>
                        </div>
                        <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500"
                            style={{ width: `${entry.revisionProgress}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="p-3 rounded-full bg-zinc-800 group-hover:bg-white text-zinc-300 group-hover:text-black transition-all self-center shadow-sm"
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
