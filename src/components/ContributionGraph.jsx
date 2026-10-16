import React, { useState, useMemo } from 'react';
import { calculateStreak, calculateTotalSessions } from '../utils/studyActivity';

const LEVEL_COLORS = {
  0: 'bg-[#161b22] border-[#30363d]/60',
  1: 'bg-[#0e4429] border-[#0e4429]',
  2: 'bg-[#006d32] border-[#006d32]',
  3: 'bg-[#26a641] border-[#26a641]',
  4: 'bg-[#39d353] border-[#39d353]'
};

export default function ContributionGraph({ 
  activityMap = {},
  topicsCompleted = 0,
  currentTheme = 'dosage-frame'
}) {
  const isDosage = currentTheme === 'dosage-frame';
  const [hoveredDay, setHoveredDay] = useState(null);
  const currentYearStr = String(new Date().getFullYear());
  const [selectedYear, setSelectedYear] = useState(currentYearStr);

  const realStreak = useMemo(() => calculateStreak(activityMap), [activityMap]);
  const totalRealSessions = useMemo(() => calculateTotalSessions(activityMap), [activityMap]);

  const levelColors = useMemo(() => {
    if (isDosage) {
      return {
        0: 'bg-[#f0f2fa] border-[#e2e5f1]',
        1: 'bg-[#dcd7ff] border-[#dcd7ff]',
        2: 'bg-[#aba1f7] border-[#aba1f7]',
        3: 'bg-[#7d6ef0] border-[#7d6ef0]',
        4: 'bg-[#5f51bd] border-[#5f51bd]'
      };
    }
    return LEVEL_COLORS;
  }, [isDosage]);

  // Generate 52 weeks of real study tracking calendar ending at current week
  const { weeks, monthLabels, yearSessionCount } = useMemo(() => {
    const totalWeeks = 52;
    const now = new Date();
    // End date is upcoming Saturday to align the full current week
    const endDate = new Date(now);
    endDate.setDate(now.getDate() + (6 - now.getDay()));
    endDate.setHours(23, 59, 59, 999);

    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - (totalWeeks * 7 - 1));
    startDate.setHours(0, 0, 0, 0);

    const days = [];
    let countInSelectedYear = 0;

    for (let i = 0; i < totalWeeks * 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const dayNum = String(date.getDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${dayNum}`;

      const isFuture = date > now;
      const count = isFuture ? 0 : (activityMap[dateKey] || 0);

      let level = 0;
      if (count >= 4) level = 4;
      else if (count >= 3) level = 3;
      else if (count >= 2) level = 2;
      else if (count >= 1) level = 1;

      if (String(year) === selectedYear) {
        countInSelectedYear += count;
      }

      days.push({
        date,
        dateKey,
        dateString: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        count,
        level,
        isFuture,
        isToday: dateKey === `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`,
        dayOfWeek: date.getDay()
      });
    }

    // Group into columns (weeks)
    const generatedWeeks = [];
    for (let w = 0; w < totalWeeks; w++) {
      generatedWeeks.push(days.slice(w * 7, (w + 1) * 7));
    }

    // Identify month label positions across columns
    const months = [];
    let lastMonth = -1;
    generatedWeeks.forEach((week, wIdx) => {
      const wednesday = week[3] || week[0];
      if (wednesday) {
        const m = wednesday.date.getMonth();
        if (m !== lastMonth) {
          months.push({
            name: wednesday.date.toLocaleDateString('en-US', { month: 'short' }),
            weekIndex: wIdx
          });
          lastMonth = m;
        }
      }
    });

    return {
      weeks: generatedWeeks,
      monthLabels: months,
      yearSessionCount: countInSelectedYear
    };
  }, [activityMap, selectedYear]);

  return (
    <div className={isDosage 
      ? "bg-white border border-[#eceef6] rounded-2xl p-4 sm:p-5 text-xs text-[#1c1d29] shadow-[0_4px_16px_rgba(95,81,189,0.06)]" 
      : "bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5 text-xs text-[#c9d1d9] font-sans"}>
      {/* Calendar Header with Real Tracker Data */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-2.5 mb-3 ${isDosage ? 'border-[#eceef6]' : 'border-[#30363d]'}`}>
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-semibold text-sm ${isDosage ? 'text-[#1c1d29]' : 'text-[#f0f6fc]'}`}>
            {yearSessionCount} study session{yearSessionCount === 1 ? '' : 's'} logged in {selectedYear}
          </span>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
            realStreak > 0 
              ? isDosage ? 'border-[#5f51bd]/20 bg-[#f4f2ff] text-[#5f51bd] font-bold' : 'border-[#238636]/40 bg-[#238636]/10 text-[#3fb950]' 
              : isDosage ? 'border-[#e2e5f1] bg-[#f8f9fd] text-[#8c91a4]' : 'border-[#30363d] bg-[#0d1117] text-[#8b949e]'
          }`}>
            {realStreak > 0 ? `${realStreak}d streak active` : '0d streak'}
          </span>
          <span className={`text-[10px] font-mono ${isDosage ? 'text-[#8c91a4]' : 'text-[#8b949e]'}`}>
            ({totalRealSessions} all-time sessions)
          </span>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto font-mono text-[11px]">
          <span className={`${isDosage ? 'text-[#8c91a4]' : 'text-[#8b949e]'} mr-1 hidden sm:inline`}>Year:</span>
          {[currentYearStr, String(Number(currentYearStr) - 1)].map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setSelectedYear(year)}
              aria-label={`View study contributions for year ${year}`}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedYear === year
                  ? isDosage
                    ? 'bg-[#5f51bd] text-white font-semibold'
                    : 'bg-[#21262d] text-[#f0f6fc] font-semibold border border-[#30363d]'
                  : isDosage
                    ? 'text-[#8c91a4] hover:text-[#1c1d29]'
                    : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Container (Horizontally scrollable for small screens) */}
      <div 
        role="region" 
        aria-label="Study activity calendar"
        className="overflow-x-auto pb-1.5 pt-0.5 select-none relative custom-scrollbar"
      >
        <div className="inline-block min-w-180">
          {/* Month Labels Row */}
          <div className={`flex mb-1.5 pl-7 text-[10px] font-mono relative h-4 ${isDosage ? 'text-[#8c91a4]' : 'text-[#8b949e]'}`} aria-hidden="true">
            {monthLabels.map((m, idx) => (
              <span
                key={`${m.name}-${idx}`}
                style={{ left: `${m.weekIndex * 13.5}px` }}
                className="absolute"
              >
                {m.name}
              </span>
            ))}
          </div>

          {/* Days Grid with Weekday Labels on Left */}
          <div className="flex gap-1 items-start">
            {/* Weekday indicators (Mon, Wed, Fri) */}
            <div className={`flex flex-col gap-1 pr-1.5 text-[9px] font-mono leading-none shrink-0 w-6 ${isDosage ? 'text-[#8c91a4]' : 'text-[#8b949e]'}`} aria-hidden="true">
              <span className="h-2.5"></span>
              <span className="h-2.5 flex items-center">Mon</span>
              <span className="h-2.5"></span>
              <span className="h-2.5 flex items-center">Wed</span>
              <span className="h-2.5"></span>
              <span className="h-2.5 flex items-center">Fri</span>
              <span className="h-2.5"></span>
            </div>

            {/* Weeks Columns */}
            <div className="flex gap-0.75" role="row">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-0.75">
                  {week.map((day, dIdx) => {
                    const colorClass = levelColors[day.level] || levelColors[0];
                    const ringClass = day.isToday ? (isDosage ? 'ring-1 ring-[#5f51bd]' : 'ring-1 ring-[#58a6ff]') : '';
                    return (
                      <div
                        key={dIdx}
                        tabIndex={day.isFuture ? -1 : 0}
                        role="gridcell"
                        aria-label={`${day.count} study sessions on ${day.dateString}`}
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-[10.5px] h-[10.5px] rounded-xs border ${colorClass} ${ringClass} transition-transform hover:scale-125 hover:z-20 cursor-pointer ${
                          day.isFuture ? 'opacity-20 cursor-default' : ''
                        }`}
                        title={`${day.dateString}: ${day.count} sessions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicator Info & Legend */}
      <div className={`mt-3 pt-2.5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono ${isDosage ? 'border-[#eceef6] text-[#8c91a4]' : 'border-[#30363d] text-[#8b949e]'}`}>
        {/* Tooltip / Status Display */}
        <div className="min-h-4.5 flex items-center">
          {hoveredDay ? (
            <span className={isDosage ? "text-[#1c1d29]" : "text-[#f0f6fc]"}>
              <strong className={`${isDosage ? "text-[#5f51bd]" : "text-[#3fb950]"} font-semibold`}>
                {hoveredDay.count === 0 ? 'No' : hoveredDay.count}
              </strong>{' '}
              study session{hoveredDay.count === 1 ? '' : 's'} on{' '}
              <span className={isDosage ? "text-[#ff6584] font-medium" : "text-[#58a6ff]"}>{hoveredDay.dateString}</span>
              {hoveredDay.isToday && <span className="ml-1 text-[#e3b341] font-semibold">(Today)</span>}
            </span>
          ) : (
            <span className={isDosage ? "text-[#8c91a4]" : "text-[#8b949e]"}>
              Hover over a square to view daily study sessions
            </span>
          )}
        </div>

        {/* Study Activity Level Legend */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <span>Less</span>
          <div className="flex gap-0.75 items-center" title="Activity Levels (0 to 4+ sessions)">
            <span className={`w-2.5 h-2.5 rounded-xs border ${levelColors[0]}`} />
            <span className={`w-2.5 h-2.5 rounded-xs border ${levelColors[1]}`} />
            <span className={`w-2.5 h-2.5 rounded-xs border ${levelColors[2]}`} />
            <span className={`w-2.5 h-2.5 rounded-xs border ${levelColors[3]}`} />
            <span className={`w-2.5 h-2.5 rounded-xs border ${levelColors[4]}`} />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
