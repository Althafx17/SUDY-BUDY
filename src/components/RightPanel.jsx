import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, User, Calendar as CalendarIcon, Users } from 'lucide-react';

export default function RightPanel({ subjects = [], onOpenFocusModal, onOpenSubject }) {
  // Calendar state - defaulting to Nov 2026 or current exam month
  const [currentMonth, setCurrentMonth] = useState('Nov 2026');

  // Days in month calculation for clean visual calendar matching reference
  const daysInMonth = 30;
  const startDayOffset = 6; // Sunday start or Monday offset

  // Extract upcoming exam dates from subjects
  const examDaysMap = {};
  subjects.forEach(sub => {
    if (sub.examDate) {
      try {
        const d = new Date(sub.examDate);
        const day = d.getDate();
        examDaysMap[day] = sub;
      } catch (e) {}
    }
  });

  // Mock online study buddies from mockup
  const onlineUsers = [
    { id: 'usr-1', name: 'Maren Maureen', regId: '1094882001', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', active: true, course: 'Operating Systems' },
    { id: 'usr-2', name: 'Jenniffer Jane', regId: '1094672000', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', active: true, course: 'Artificial Intelligence' },
    { id: 'usr-3', name: 'Ryan Herwinds', regId: '1094342003', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', active: true, course: 'Software Engineering' },
    { id: 'usr-4', name: 'Kierra Culhane', regId: '1094662002', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80', active: true, course: 'Focus Session' }
  ];

  return (
    <aside className="w-80 bg-white p-7 border-l border-slate-100 flex flex-col justify-between shrink-0 select-none shadow-sm">
      <div className="space-y-7">
        {/* User Profile matching reference */}
        <div className="flex items-center justify-end gap-3.5 pb-2">
          <div className="text-right">
            <h4 className="text-sm font-black text-slate-800 tracking-tight leading-tight">
              Christine Eva
            </h4>
            <span className="text-[11px] font-bold text-slate-400 font-mono">
              1094881999
            </span>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="Christine Eva"
              className="w-11 h-11 rounded-2xl object-cover ring-2 ring-violet-500/20 shadow-md shadow-violet-200"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
        </div>

        {/* Mini Calendar Widget matching reference */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-900 tracking-tight">
              {currentMonth}
            </h3>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setCurrentMonth(currentMonth === 'Nov 2026' ? 'Oct 2026' : 'Nov 2026')}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setCurrentMonth(currentMonth === 'Nov 2026' ? 'Dec 2026' : 'Nov 2026')}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 text-center text-[11px] font-bold text-slate-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-y-2 text-center text-xs font-bold text-slate-700">
            {/* Empty slots for month start alignment */}
            {Array.from({ length: startDayOffset }).map((_, idx) => (
              <span key={`empty-${idx}`} />
            ))}

            {/* Day numbers 1 to 30 */}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const day = idx + 1;
              const examSubject = examDaysMap[day];
              const isHighlightMock = day === 9 || day === 13 || day === 14 || day === 18 || day === 22;

              return (
                <div key={day} className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      if (examSubject && onOpenSubject) onOpenSubject(examSubject.id);
                    }}
                    title={examSubject ? `${examSubject.name} Exam` : undefined}
                    className={`w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center transition-all ${
                      isHighlightMock || examSubject
                        ? 'bg-[#5042ba] text-white shadow-md shadow-indigo-200 hover:scale-110'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Online Users / Study Buddies Section */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-900 tracking-tight">
              Online Users
            </h3>
            <button 
              onClick={onOpenFocusModal}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              See all
            </button>
          </div>

          <div className="space-y-3.5">
            {onlineUsers.map((user) => (
              <div 
                key={user.id} 
                className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer"
                onClick={onOpenFocusModal}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-9 h-9 rounded-2xl object-cover ring-1 ring-slate-200"
                    />
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">
                      {user.name}
                    </h5>
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      {user.regId}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#5042ba] shadow-xs" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Room Quick Card at bottom */}
      <div className="pt-4 border-t border-slate-100">
        <button
          onClick={onOpenFocusModal}
          className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-violet-200 transition-all hover:scale-[1.02]"
        >
          <Sparkles className="w-4 h-4 text-violet-200" />
          <span>Launch Study Focus Room</span>
        </button>
      </div>
    </aside>
  );
}
