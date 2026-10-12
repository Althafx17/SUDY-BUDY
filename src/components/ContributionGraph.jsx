import React, { useState, useMemo } from 'react';

const LEVEL_COLORS = {
  0: 'bg-[#161b22] border-[#30363d]/60',
  1: 'bg-[#0e4429] border-[#0e4429]',
  2: 'bg-[#006d32] border-[#006d32]',
  3: 'bg-[#26a641] border-[#26a641]',
  4: 'bg-[#39d353] border-[#39d353]'
};

export default function ContributionGraph({ 
  totalContributions = 907, 
  currentStreak = 14,
  topicsCompleted = 0 
}) {
  const [hoveredDay, setHoveredDay] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2026');

  // Generate 52 weeks of realistic study contribution data ending around current date
  const { weeks, monthLabels, totalCount } = useMemo(() => {
    // 52 weeks * 7 days
    const totalWeeks = 52;
    const endDate = new Date('2026-10-12T12:00:00'); // current mock baseline date
    const days = [];

    // Calculate start date (52 weeks back, aligned to Sunday)
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - (totalWeeks * 7 - 1) - endDate.getDay());

    let runningTotal = 0;

    for (let i = 0; i < totalWeeks * 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const isFuture = date > endDate;
      const diffDays = Math.floor((endDate - date) / (1000 * 60 * 60 * 24));
      
      let count = 0;
      let level = 0;

      if (!isFuture) {
        // Current streak simulation (past `currentStreak` days guaranteed active)
        if (diffDays >= 0 && diffDays < currentStreak) {
          count = 3 + ((i * 7 + 3) % 6); // 3 to 8
          level = count >= 6 ? 4 : count >= 4 ? 3 : 2;
        } else {
          // Semi-random seeded distribution resembling real student study patterns
          // Higher on weekdays, study exam spikes around August/September & March
          const dayOfWeek = date.getDay();
          const month = date.getMonth();
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
          
          const seed = Math.sin(i * 13.37 + month * 5.5) * 10000;
          const pseudoRand = seed - Math.floor(seed);

          // Study peaks: mid-terms and finals (March, July, August, September, October)
          const isExamSeason = [2, 6, 7, 8, 9].includes(month);
          const threshold = isExamSeason ? (isWeekend ? 0.35 : 0.22) : (isWeekend ? 0.55 : 0.38);

          if (pseudoRand > threshold) {
            count = Math.floor(pseudoRand * (isExamSeason ? 9 : 5)) + 1;
            level = count >= 7 ? 4 : count >= 5 ? 3 : count >= 3 ? 2 : 1;
          } else {
            count = 0;
            level = 0;
          }
        }
      }

      runningTotal += count;

      days.push({
        date,
        dateString: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        count,
        level,
        isFuture,
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
      // Look at middle of week (Wednesday)
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
      totalCount: Math.max(runningTotal, totalContributions)
    };
  }, [totalContributions, currentStreak]);

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sm:p-5 text-xs text-[#c9d1d9] font-sans">
      {/* Calendar Header with Year Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d] pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm text-[#f0f6fc]">
            {totalCount.toLocaleString()} study contributions in {selectedYear}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#238636]/40 bg-[#238636]/10 text-[#3fb950]">
            {currentStreak}d streak active
          </span>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto font-mono text-[11px]">
          <span className="text-[#8b949e] mr-1 hidden sm:inline">Year:</span>
          {['2026', '2025'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedYear === year
                  ? 'bg-[#21262d] text-[#f0f6fc] font-semibold border border-[#30363d]'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Container (Horizontally scrollable for small screens) */}
      <div className="overflow-x-auto pb-1.5 pt-0.5 select-none relative custom-scrollbar">
        <div className="inline-block min-w-[720px]">
          {/* Month Labels Row */}
          <div className="flex mb-1.5 pl-7 text-[10px] font-mono text-[#8b949e] relative h-4">
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
            <div className="flex flex-col gap-1 pr-1.5 text-[9px] font-mono text-[#8b949e] leading-none shrink-0 w-6">
              <span className="h-[10px]"></span>
              <span className="h-[10px] flex items-center">Mon</span>
              <span className="h-[10px]"></span>
              <span className="h-[10px] flex items-center">Wed</span>
              <span className="h-[10px]"></span>
              <span className="h-[10px] flex items-center">Fri</span>
              <span className="h-[10px]"></span>
            </div>

            {/* Weeks Columns */}
            <div className="flex gap-[3px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((day, dIdx) => {
                    const colorClass = LEVEL_COLORS[day.level] || LEVEL_COLORS[0];
                    return (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-[10.5px] h-[10.5px] rounded-[2px] border ${colorClass} transition-transform hover:scale-125 hover:z-20 cursor-pointer ${
                          day.isFuture ? 'opacity-20 cursor-default' : ''
                        }`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating or Status Indicator Info & Legend */}
      <div className="mt-3 pt-2.5 border-t border-[#30363d] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#8b949e]">
        {/* Tooltip / Status Display */}
        <div className="min-h-[18px] flex items-center">
          {hoveredDay ? (
            <span className="text-[#f0f6fc]">
              <strong className="text-[#3fb950] font-semibold">
                {hoveredDay.count === 0 ? 'No' : hoveredDay.count}
              </strong>{' '}
              contribution{hoveredDay.count === 1 ? '' : 's'} on{' '}
              <span className="text-[#58a6ff]">{hoveredDay.dateString}</span>
            </span>
          ) : (
            <span className="text-[#8b949e]">
              Hover over a square to view detailed revision and syllabus sessions
            </span>
          )}
        </div>

        {/* GitHub Green Heat Legend */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <span>Less</span>
          <div className="flex gap-[3px] items-center">
            <span className="w-[10px] h-[10px] rounded-[2px] border bg-[#161b22] border-[#30363d]/60" />
            <span className="w-[10px] h-[10px] rounded-[2px] border bg-[#0e4429] border-[#0e4429]" />
            <span className="w-[10px] h-[10px] rounded-[2px] border bg-[#006d32] border-[#006d32]" />
            <span className="w-[10px] h-[10px] rounded-[2px] border bg-[#26a641] border-[#26a641]" />
            <span className="w-[10px] h-[10px] rounded-[2px] border bg-[#39d353] border-[#39d353]" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
