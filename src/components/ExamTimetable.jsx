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
      <div className="p-5 rounded-lg bg-[#161b22] border border-[#30363d] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8b949e] bg-[#0d1117] px-2.5 py-0.5 rounded border border-[#30363d]">
              Master Schedule
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#f0f6fc] tracking-tight mt-1.5">
            Exam Timetable
          </h2>
          <p className="text-xs text-[#8b949e] mt-0.5">
            Chronological calendar of all scheduled papers across Semester 1 and Semester 2 with live countdown.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0d1117] px-3 py-1.5 rounded-md border border-[#30363d] self-start md:self-auto text-xs text-[#8b949e]">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>Papers within <strong className="text-[#f0f6fc]">7 days</strong> flagged with alert border</span>
        </div>
      </div>

      {/* Timetable List / Table */}
      {timetableEntries.length === 0 ? (
        <div className="p-12 rounded-lg border border-dashed border-[#30363d] bg-[#161b22] text-center">
          <Calendar className="w-10 h-10 text-[#8b949e] mx-auto mb-2 opacity-60" />
          <h3 className="text-sm font-semibold text-[#f0f6fc]">No Scheduled Exams Yet</h3>
          <p className="text-xs text-[#8b949e] mt-1 max-w-md mx-auto">
            Set examination dates for your subjects to generate your master timetable.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {timetableEntries.map((entry) => {
            const isUrgent = isExamWithin7Days(entry.examDateStr);
            const remaining = formatTimeRemaining(entry.examTime - currentTime);
            const subColor = SUBJECT_COLORS.find(c => c.id === entry.subject.color) || SUBJECT_COLORS[0];

            return (
              <div
                key={`${entry.semester}-${entry.subject.id}`}
                onClick={() => onOpenSubject(entry.semester, entry.subject.id)}
                className={`p-4 rounded-md border transition-all cursor-pointer group hover:border-[#8b949e] ${
                  isUrgent 
                    ? 'border-l-4 border-l-rose-500 border-[#30363d] bg-[#161b22]' 
                    : 'border-l-4 border-l-[#58a6ff] border-[#30363d] bg-[#161b22] hover:bg-[#1c2128]'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left: Subject name, semester badge, venue */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#0d1117] text-[#8b949e] border border-[#30363d]">
                        {entry.semester}
                      </span>
                      {entry.subject.code && (
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#0d1117] text-[#f0f6fc] border border-[#30363d]">
                          {entry.subject.code}
                        </span>
                      )}
                      {isUrgent && (
                        <span className="text-[10px] font-mono font-bold text-rose-300 bg-rose-950/60 px-1.5 py-0.2 rounded border border-rose-800 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-rose-400" />
                          Final Countdown (&lt; 7 Days)
                        </span>
                      )}
                      {remaining.isPast && (
                        <span className="text-[10px] font-mono text-[#8b949e] bg-[#0d1117] px-1.5 py-0.2 rounded border border-[#30363d]">
                          Exam Completed
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-[#f0f6fc] group-hover:text-[#58a6ff] transition-colors">
                      {entry.subject.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-[#8b949e]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#8b949e]" />
                        {new Date(entry.examDateStr).toLocaleDateString(undefined, {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })} at {new Date(entry.examDateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>

                      {entry.subject.examVenue && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#8b949e]" />
                          {entry.subject.examVenue}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Middle: Live Days Remaining Pill */}
                  <div className="bg-[#0d1117] px-3.5 py-2 rounded-md border border-[#30363d] shrink-0 self-start lg:self-center">
                    <div className="text-[9px] font-mono uppercase text-[#8b949e] mb-0.5">
                      Time Remaining
                    </div>
                    {remaining.isPast ? (
                      <div className="text-xs font-mono text-[#8b949e]">
                        Past Exam
                      </div>
                    ) : (
                      <div className="text-sm font-black font-mono flex items-center gap-1.5">
                        <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-rose-400' : 'text-[#8b949e]'}`} />
                        <span className={isUrgent ? 'text-rose-400' : 'text-[#f0f6fc]'}>
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
