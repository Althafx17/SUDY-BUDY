import React from 'react';
import { 
  Home, 
  CheckSquare, 
  Settings as SettingsIcon, 
  Plus, 
  BookOpen, 
  Calendar, 
  ChevronRight, 
  FileText
} from 'lucide-react';

export default function ExpensioDashboard({
  data,
  currentSemester = 'S1',
  onSelectSemester,
  onOpenSubject,
  onNavigate,
  onOpenFocusModal,
  onOpenThemeModal,
  onAddSubject
}) {
  const semesterData = data?.[currentSemester] || { subjects: [] };
  const subjects = semesterData?.subjects || [];

  // Total topics, completed topics, pyqs
  const totalTopics = subjects.reduce((acc, sub) => 
    acc + (sub.modules || []).reduce((mAcc, mod) => mAcc + (mod.topics?.length || 0), 0), 0);
  const completedTopics = subjects.reduce((acc, sub) => 
    acc + (sub.modules || []).reduce((mAcc, mod) => 
      mAcc + (mod.topics || []).filter(t => t.status === 'studied' || t.status === 'revised').length, 0), 0);
  const revisedTopics = subjects.reduce((acc, sub) => 
    acc + (sub.modules || []).reduce((mAcc, mod) => 
      mAcc + (mod.topics || []).filter(t => t.status === 'revised').length, 0), 0);
  const totalPYQs = subjects.reduce((acc, sub) => acc + (sub.pastPapers?.length || 0), 0);
  const studyProgressPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const upcomingExams = subjects.filter(s => s.examDate && new Date(s.examDate) > new Date()).length;

  // Real Subject Mastery Trend Bars
  const subjectBars = subjects.map((sub) => {
    const sTotal = (sub.modules || []).reduce((acc, m) => acc + (m.topics?.length || 0), 0);
    const sDone = (sub.modules || []).reduce((acc, m) => 
      acc + (m.topics || []).filter(t => t.status === 'studied' || t.status === 'revised').length, 0);
    const pct = sTotal > 0 ? Math.round((sDone / sTotal) * 100) : 0;
    return {
      label: sub.code || sub.name.slice(0, 6),
      height: Math.max(15, pct),
      amount: `${pct}%`,
      fullName: sub.name,
      id: sub.id
    };
  });

  // Topic Distribution Breakdown Data
  const studiedPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const revisedPct = totalTopics > 0 ? Math.round((revisedTopics / totalTopics) * 100) : 0;
  const pendingPct = Math.max(0, 100 - studiedPct);

  const topicDistribution = [
    { label: 'Studied', height: Math.max(15, studiedPct), pct: `${studiedPct}%` },
    { label: 'Revised', height: Math.max(15, revisedPct), pct: `${revisedPct}%` },
    { label: 'Pending', height: Math.max(15, pendingPct), pct: `${pendingPct}%` },
    { label: 'PYQ Ready', height: Math.min(100, Math.max(20, totalPYQs * 10)), pct: `${totalPYQs} Sets` },
    { label: 'Target', height: 100, pct: '100%' },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-8 min-h-[720px] select-none">
      
      {/* ============================================================== */}
      {/* LEFT SIDEBAR (Dark Obsidian Nav with Scholar Profile) */}
      {/* ============================================================== */}
      <aside className="w-full lg:w-56 shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#222530] pb-6 lg:pb-0 lg:pr-6">
        <div>
          {/* User Profile Header */}
          <div className="flex flex-col items-center text-center pb-8 pt-2">
            <div className="relative group cursor-pointer" onClick={onOpenThemeModal} title="Click to customize profile">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-3 ring-[#2a2e3d] shadow-lg mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                  alt="KTU Scholar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-3 right-0 w-4 h-4 bg-[#00d49f] border-2 border-[#121316] rounded-full" />
            </div>
            <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">KTU Scholar</h2>
            <p className="text-[11px] text-[#717888] font-medium mt-0.5">KTU B.Tech · {currentSemester}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {/* 1. Dashboard (Active Teal Capsule) */}
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-[#162421] text-[#00d49f] border border-[#00d49f]/20 shadow-xs cursor-pointer w-full transition-all text-left"
            >
              <Home className="w-4 h-4 shrink-0 text-[#00d49f]" />
              <span className="whitespace-nowrap">Dashboard</span>
            </button>

            {/* 2. Courses */}
            <button
              type="button"
              onClick={() => {
                if (subjects.length > 0) {
                  onOpenSubject(subjects[0].id);
                } else {
                  onNavigate('dashboard');
                }
              }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Courses & PYQs</span>
            </button>

            {/* 3. Exam Schedule */}
            <button
              type="button"
              onClick={() => onNavigate('timetable')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Exam Schedule</span>
            </button>

            {/* 4. Revision Mode */}
            <button
              type="button"
              onClick={() => onNavigate('revision')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <CheckSquare className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Revision Sprint</span>
            </button>

            {/* 5. Notes Vault */}
            <button
              type="button"
              onClick={() => onNavigate('notes')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Notes Vault</span>
            </button>

            {/* 6. Settings */}
            <button
              type="button"
              onClick={() => onNavigate('settings')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <SettingsIcon className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Settings</span>
            </button>
          </nav>
        </div>

        {/* Brand Bottom: STUDY LEDGER */}
        <div className="pt-8 px-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-[#00d49f] font-mono font-bold tracking-tighter text-sm">
              <span>➔</span>
              <span className="-ml-1">➔</span>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#00d49f] uppercase font-sans">
              STUDY LEDGER
            </span>
          </div>
          <p className="text-[10px] text-[#555b6c] mt-1">KTU Academic Hub</p>
        </div>
      </aside>

      {/* ============================================================== */}
      {/* MAIN CONTENT AREA */}
      {/* ============================================================== */}
      <main className="flex-1 flex flex-col gap-6 min-w-0">
        
        {/* Top Control Strip */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7e8597]">
              Current Semester:
            </span>
            <button
              type="button"
              onClick={() => onSelectSemester && onSelectSemester(currentSemester === 'S1' ? 'S2' : 'S1')}
              className="flex items-center bg-[#181a20] hover:bg-[#222530] px-3 py-1 rounded-xl border border-[#272a34] cursor-pointer transition-colors"
              title="Click to toggle semester"
            >
              <span className="text-xs font-bold text-[#00d49f]">
                {currentSemester} KTU 2019 Scheme
              </span>
            </button>
          </div>

          <div className="text-xs text-[#8e95a5] font-semibold hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00d49f] animate-pulse" />
            <span>Live KTU Academic Sync Active</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ROW 1: 5 KPI Status Cards + Table */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
          
          {/* CARD 1: Academic Tasks (5 Stats stacked) */}
          <div className="xl:col-span-5 expensio-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  KTU Academic Status
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00d49f]/10 text-[#00d49f] border border-[#00d49f]/30">
                  Active
                </span>
              </div>

              {/* 5 Stacked Stats */}
              <div className="space-y-3">
                {/* 1. Topics Due for Revision */}
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#232632]">
                  <div className="flex items-center gap-2 text-[#9ba2b3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d79]" />
                    <span>Topics Due for Revision</span>
                  </div>
                  <span className="font-semibold text-white">{Math.max(0, totalTopics - completedTopics)}</span>
                </div>

                {/* 2. Active Semester Modules */}
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#232632]">
                  <div className="flex items-center gap-2 text-[#9ba2b3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d49f]" />
                    <span>Active Semester Courses</span>
                  </div>
                  <span className="font-semibold text-white">{subjects.length}</span>
                </div>

                {/* 3. Past Question Papers */}
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#232632]">
                  <div className="flex items-center gap-2 text-[#9ba2b3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#827bfa]" />
                    <span>Past PYQ Question Papers</span>
                  </div>
                  <span className="font-semibold text-white">{totalPYQs}</span>
                </div>

                {/* 4. Upcoming Exams */}
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#232632]">
                  <div className="flex items-center gap-2 text-[#9ba2b3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                    <span>Upcoming Exams in Window</span>
                  </div>
                  <span className="font-semibold text-white">{upcomingExams}</span>
                </div>

                {/* 5. Mastery Progress Rate */}
                <div className="flex items-center justify-between text-xs py-1.5">
                  <div className="flex items-center gap-2 text-[#9ba2b3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span>Mastery Progress Rate</span>
                  </div>
                  <span className="font-semibold text-white">{studyProgressPct}%</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action Link */}
            <div className="pt-4 mt-2 border-t border-[#232632] flex justify-end">
              <button
                type="button"
                onClick={() => onNavigate('revision')}
                className="text-xs text-[#00d49f] hover:text-[#00f5b8] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View revision checklist</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 2: Courses & Modules (Table) */}
          <div className="xl:col-span-7 expensio-card p-5">
            <div className="flex items-center justify-between mb-3.5">
              <h3 className="text-sm font-semibold text-white tracking-tight">
                Semester Courses & Syllabus Modules
              </h3>
              <div className="flex items-center gap-2">
                {onAddSubject && (
                  <button
                    type="button"
                    onClick={onAddSubject}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#00d49f]/10 text-[#00d49f] border border-[#00d49f]/30 hover:bg-[#00d49f]/20 text-[11px] font-semibold transition-all cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Course</span>
                  </button>
                )}
                <span className="text-[11px] text-[#717888] font-medium hidden sm:inline">Real-time sync</span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-[#727a8c] border-b border-[#232632] text-[11px] uppercase tracking-wider font-semibold">
                    <th className="pb-2.5 font-medium">Course</th>
                    <th className="pb-2.5 font-medium">Code</th>
                    <th className="pb-2.5 font-medium">Modules / PYQs</th>
                    <th className="pb-2.5 font-medium text-right">Mastery Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2029]">
                  {subjects.map((sub) => {
                    const sTotal = (sub.modules || []).reduce((acc, m) => acc + (m.topics?.length || 0), 0);
                    const sDone = (sub.modules || []).reduce((acc, m) => 
                      acc + (m.topics || []).filter(t => t.status === 'studied' || t.status === 'revised').length, 0);
                    const sPct = sTotal > 0 ? Math.round((sDone / sTotal) * 100) : 0;

                    return (
                      <tr 
                        key={sub.id} 
                        onClick={() => onOpenSubject(sub.id)}
                        className="hover:bg-white/[0.03] transition-colors cursor-pointer"
                      >
                        <td className="py-2.5 text-white font-medium flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#00d49f]" />
                          <span>{sub.name}</span>
                        </td>
                        <td className="py-2.5 text-[#9ba2b3] font-mono text-[11px]">{sub.code}</td>
                        <td className="py-2.5">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border bg-purple-950/70 text-purple-300 border-purple-800/60">
                            {sub.modules?.length || 5} Mods · {sub.pastPapers?.length || 0} PYQs
                          </span>
                        </td>
                        <td className="py-2.5 text-right font-medium text-white">
                          <span className="text-[#00d49f] font-mono">{sPct}%</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* ROW 2: Quick Access */}
        {/* ============================================================== */}
        <section>
          <h3 className="text-sm font-semibold text-white tracking-tight mb-3 px-0.5">
            Quick Access
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {/* 1. Focus Session */}
            <button
              type="button"
              onClick={onOpenFocusModal}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#ff4d79]/20 flex items-center justify-center shrink-0 border border-[#ff4d79]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#ff4d79]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + Focus session
              </span>
            </button>

            {/* 2. Notes Vault */}
            <button
              type="button"
              onClick={() => onNavigate('notes')}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#5d55fa]/20 flex items-center justify-center shrink-0 border border-[#5d55fa]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#827bfa]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + Notes vault
              </span>
            </button>

            {/* 3. Exam Schedule */}
            <button
              type="button"
              onClick={() => onNavigate('timetable')}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#00d49f]/20 flex items-center justify-center shrink-0 border border-[#00d49f]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#00d49f]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + Exam timetable
              </span>
            </button>

            {/* 4. Revision Sprint */}
            <button
              type="button"
              onClick={() => onNavigate('revision')}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#ef4444]/20 flex items-center justify-center shrink-0 border border-[#ef4444]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#ef4444]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + Revision sprint
              </span>
            </button>
          </div>
        </section>

        {/* ============================================================== */}
        {/* ROW 3: Semester Report (Subject Mastery Trend & Topic Status) */}
        {/* ============================================================== */}
        <section>
          <h3 className="text-sm font-semibold text-white tracking-tight mb-3 px-0.5">
            Academic Performance Analytics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* CHART 1: Subject Mastery Trend (Teal Bars) */}
            <div className="expensio-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-semibold text-[#c8cdd9]">
                  Semester Subject Mastery Trend
                </h4>
                <span className="text-[10px] text-[#00d49f] font-mono font-bold">
                  {studyProgressPct}% Completed
                </span>
              </div>

              {/* Bar Graph Canvas */}
              <div className="flex items-end gap-3 h-40 pt-4 border-b border-[#232632] relative">
                {/* Y-Axis Grid Guidelines */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-[#5b6274] font-mono pointer-events-none">
                  <span>100%</span>
                  <span>60%</span>
                  <span>20%</span>
                  <span>0%</span>
                </div>

                {/* Bars Container */}
                <div className="flex-1 flex items-end justify-around pl-8 h-full">
                  {subjectBars.map((bar) => (
                    <div 
                      key={bar.label} 
                      onClick={() => bar.id && onOpenSubject(bar.id)}
                      className="flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer"
                    >
                      <div className="relative flex justify-center w-6 sm:w-8">
                        <div 
                          style={{ height: `${bar.height}%` }}
                          className="w-full bg-[#00d49f] rounded-t-sm shadow-md shadow-[#00d49f]/20 group-hover:brightness-110 transition-all"
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-[#121316] text-[#00d49f] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-[#272a34] shadow-md pointer-events-none whitespace-nowrap z-10">
                          {bar.amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* X-Axis Labels */}
              <div className="flex justify-around pl-8 pt-2 text-[10px] text-[#788094] font-semibold">
                {subjectBars.map((bar) => (
                  <span key={bar.label} className="truncate max-w-[60px]" title={bar.fullName}>
                    {bar.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CHART 2: Topic Preparation Distribution (Purple Bars) */}
            <div className="expensio-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-semibold text-[#c8cdd9]">
                  KTU Topic Status Distribution
                </h4>
                <span className="text-[10px] text-[#b37aff] font-mono font-bold">{totalTopics} Total Topics</span>
              </div>

              {/* Bar Graph Canvas */}
              <div className="flex items-end gap-3 h-40 pt-4 border-b border-[#232632] relative">
                {/* Y-Axis Grid Guidelines */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-[#5b6274] font-mono pointer-events-none">
                  <span>100%</span>
                  <span>60%</span>
                  <span>20%</span>
                  <span>0%</span>
                </div>

                {/* Bars Container */}
                <div className="flex-1 flex items-end justify-around pl-8 h-full">
                  {topicDistribution.map((bar) => (
                    <div key={bar.label} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                      <div className="relative flex justify-center w-6 sm:w-8">
                        <div 
                          style={{ height: `${bar.height}%` }}
                          className="w-full bg-[#9353d3] rounded-t-sm shadow-md shadow-[#9353d3]/20 group-hover:brightness-110 transition-all cursor-pointer"
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-[#121316] text-[#c084fc] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-[#272a34] shadow-md pointer-events-none whitespace-nowrap z-10">
                          {bar.pct}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* X-Axis Labels */}
              <div className="flex justify-around pl-8 pt-2 text-[9px] text-[#788094] font-semibold truncate">
                {topicDistribution.map((bar) => (
                  <span key={bar.label} className="truncate max-w-[55px] text-center" title={bar.label}>
                    {bar.label}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}
