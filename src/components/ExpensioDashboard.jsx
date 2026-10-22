import React, { useState } from 'react';
import { 
  Home, 
  CreditCard, 
  Plane, 
  CheckSquare, 
  Settings as SettingsIcon, 
  Headphones, 
  Clock, 
  ShoppingBag, 
  RefreshCw, 
  Plus, 
  ArrowRight,
  TrendingUp,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  ChevronRight,
  CheckCircle2,
  DollarSign,
  PieChart
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
  // Mode toggle: 1:1 Reference Mockup vs Real KTU Study Buddy Sync
  const [viewMode, setViewMode] = useState('mockup'); // 'mockup' | 'study'

  const semesterData = data?.[currentSemester] || { subjects: [] };
  const subjects = semesterData?.subjects || [];

  // Total topics, completed topics, pyqs
  const totalTopics = subjects.reduce((acc, sub) => 
    acc + (sub.modules || []).reduce((mAcc, mod) => mAcc + (mod.topics?.length || 0), 0), 0);
  const completedTopics = subjects.reduce((acc, sub) => 
    acc + (sub.modules || []).reduce((mAcc, mod) => 
      mAcc + (mod.topics || []).filter(t => t.status === 'studied' || t.status === 'revised').length, 0), 0);
  const totalPYQs = subjects.reduce((acc, sub) => acc + (sub.pastPapers?.length || 0), 0);
  const studyProgressPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // 1:1 Reference Table Data (Mockup Mode)
  const mockExpenses = [
    {
      id: 1,
      subject: 'Office Supplies',
      employee: 'John Smith',
      team: 'Marketing',
      teamColor: 'bg-purple-950/70 text-purple-300 border-purple-800/60',
      amount: '€150.00'
    },
    {
      id: 2,
      subject: 'Business Lunch',
      employee: 'Sarah Jade',
      team: 'Marketing',
      teamColor: 'bg-pink-950/70 text-pink-300 border-pink-800/60',
      amount: '€75.50'
    },
    {
      id: 3,
      subject: 'Travel Expenses',
      employee: 'Mike Brown',
      team: 'Operations',
      teamColor: 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60',
      amount: '€450.25'
    },
    {
      id: 4,
      subject: 'Client Dinner',
      employee: 'Jennifer Lee',
      team: 'Marketing',
      teamColor: 'bg-fuchsia-950/70 text-fuchsia-300 border-fuchsia-800/60',
      amount: '€120.00'
    },
    {
      id: 5,
      subject: 'Hotel',
      employee: 'David Wilson',
      team: 'Finance',
      teamColor: 'bg-teal-950/70 text-teal-300 border-teal-800/60',
      amount: '€275.75'
    }
  ];

  // Team Spending Trend Bars data (Teal bars matching image)
  const spendingTrendData = [
    { label: 'S1', height: 75, amount: '€75K' },
    { label: 'S2', height: 42, amount: '€42K' },
    { label: 'M1', height: 88, amount: '€88K' },
    { label: 'S3', height: 50, amount: '€50K' },
    { label: 'M2', height: 68, amount: '€68K' },
    { label: 'M3', height: 82, amount: '€82K' },
  ];

  // Day-to-Day Expenses Bars data (Purple bars matching image)
  const dayToDayData = [
    { label: 'Accommodation', height: 45, pct: '45%' },
    { label: 'Commute', height: 28, pct: '28%' },
    { label: 'Services', height: 95, pct: '95%' },
    { label: 'Food', height: 62, pct: '62%' },
    { label: 'Fuel', height: 78, pct: '78%' },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-8 min-h-[720px] select-none">
      
      {/* ============================================================== */}
      {/* LEFT SIDEBAR (Dark Obsidian Nav with Janice Chandler Profile) */}
      {/* ============================================================== */}
      <aside className="w-full lg:w-56 shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#222530] pb-6 lg:pb-0 lg:pr-6">
        <div>
          {/* User Profile Header */}
          <div className="flex flex-col items-center text-center pb-8 pt-2">
            <div className="relative group cursor-pointer" onClick={onOpenThemeModal} title="Click to customize profile">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-3 ring-[#2a2e3d] shadow-lg mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                  alt="Janice Chandler"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-3 right-0 w-4 h-4 bg-[#00d49f] border-2 border-[#121316] rounded-full" />
            </div>
            <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">Janice Chandler</h2>
            <p className="text-[11px] text-[#717888] font-medium mt-0.5">KTU Scholar · {currentSemester}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {/* 1. Home (Active Teal Capsule) */}
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-[#162421] text-[#00d49f] border border-[#00d49f]/20 shadow-xs cursor-pointer w-full transition-all text-left"
            >
              <Home className="w-4 h-4 shrink-0 text-[#00d49f]" />
              <span className="whitespace-nowrap">Home</span>
            </button>

            {/* 2. Expenses / Courses */}
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
              <CreditCard className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Expenses</span>
            </button>

            {/* 3. Trips / Exam Schedule */}
            <button
              type="button"
              onClick={() => onNavigate('timetable')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <Plane className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Trips</span>
            </button>

            {/* 4. Approvals / Revision Mode */}
            <button
              type="button"
              onClick={() => onNavigate('revision')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <CheckSquare className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Approvals</span>
            </button>

            {/* 5. Settings */}
            <button
              type="button"
              onClick={() => onNavigate('settings')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <SettingsIcon className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Settings</span>
            </button>

            {/* 6. Support / Notes Vault */}
            <button
              type="button"
              onClick={() => onNavigate('notes')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#8e95a5] hover:text-white hover:bg-white/5 cursor-pointer w-full transition-all text-left"
            >
              <Headphones className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Support</span>
            </button>
          </nav>
        </div>

        {/* Brand Bottom: EXPENSIO with Glowing Cyan Arrows */}
        <div className="pt-8 px-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-[#00d49f] font-mono font-bold tracking-tighter text-sm">
              <span>➔</span>
              <span className="-ml-1">➔</span>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#00d49f] uppercase font-sans">
              EXPENSIO
            </span>
          </div>
          <p className="text-[10px] text-[#555b6c] mt-1">Study Ledger Studio</p>
        </div>
      </aside>

      {/* ============================================================== */}
      {/* MAIN CONTENT AREA */}
      {/* ============================================================== */}
      <main className="flex-1 flex flex-col gap-6 min-w-0">
        
        {/* Top Control Strip (Mode Toggle & Live Semester Indicator) */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7e8597]">
              Workspace:
            </span>
            <div className="flex items-center bg-[#181a20] p-1 rounded-xl border border-[#272a34]">
              <button
                type="button"
                onClick={() => setViewMode('mockup')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'mockup'
                    ? 'bg-[#00d49f] text-[#121316] shadow-xs'
                    : 'text-[#8e95a5] hover:text-white'
                }`}
              >
                1:1 Mockup View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('study')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'study'
                    ? 'bg-[#00d49f] text-[#121316] shadow-xs'
                    : 'text-[#8e95a5] hover:text-white'
                }`}
              >
                Live KTU Sync
              </button>
            </div>
          </div>

          <div className="text-xs text-[#8e95a5] font-semibold hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00d49f] animate-pulse" />
            <span>Active Semester: <strong className="text-white">{currentSemester}</strong></span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ROW 1: Pending Tasks (Left) & Recent Expenses (Right) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          
          {/* CARD 1: Pending Tasks */}
          <div className="xl:col-span-5 expensio-card p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-tight mb-4">
                {viewMode === 'mockup' ? 'Pending Tasks' : 'KTU Academic Tasks'}
              </h3>

              <div className="space-y-3.5 text-xs">
                {/* 1. Pending Approvals */}
                <div className="flex items-center justify-between text-[#c8cdd9] hover:text-white transition-colors py-0.5">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#8e95a5]" />
                    <span>{viewMode === 'mockup' ? 'Pending Approvals' : 'Topics Due for Revision'}</span>
                  </div>
                  <span className="font-semibold text-white">{viewMode === 'mockup' ? '5' : Math.max(5, totalTopics - completedTopics)}</span>
                </div>

                {/* 2. New Trips Registered */}
                <div className="flex items-center justify-between text-[#c8cdd9] hover:text-white transition-colors py-0.5">
                  <div className="flex items-center gap-3">
                    <Plane className="w-4 h-4 text-[#8e95a5]" />
                    <span>{viewMode === 'mockup' ? 'New Trips Registered' : 'Active Semester Modules'}</span>
                  </div>
                  <span className="font-semibold text-white">{viewMode === 'mockup' ? '1' : subjects.length}</span>
                </div>

                {/* 3. Unreported Expenses */}
                <div className="flex items-center justify-between text-[#c8cdd9] hover:text-white transition-colors py-0.5">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-4 h-4 text-[#8e95a5]" />
                    <span>{viewMode === 'mockup' ? 'Unreported Expenses' : 'Past PYQ Question Papers'}</span>
                  </div>
                  <span className="font-semibold text-white">{viewMode === 'mockup' ? '4' : totalPYQs || 4}</span>
                </div>

                {/* 4. Upcoming Expenses */}
                <div className="flex items-center justify-between text-[#c8cdd9] hover:text-white transition-colors py-0.5">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-4 h-4 text-[#8e95a5]" />
                    <span>{viewMode === 'mockup' ? 'Upcoming Expenses' : 'Upcoming Exams in Window'}</span>
                  </div>
                  <span className="font-semibold text-white">{viewMode === 'mockup' ? '0' : '0'}</span>
                </div>

                {/* 5. Unreported Advances */}
                <div className="flex items-center justify-between text-[#c8cdd9] hover:text-white transition-colors py-0.5">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-4 h-4 text-[#8e95a5]" />
                    <span>{viewMode === 'mockup' ? 'Unreported Advances' : 'Mastery Progress Rate'}</span>
                  </div>
                  <span className="font-semibold text-white">{viewMode === 'mockup' ? '€0.00' : `${studyProgressPct}%`}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-[#232632] flex items-center justify-between text-[11px] text-[#717888]">
              <span>Synchronized with KTU Ledger</span>
              <button 
                onClick={() => onNavigate('revision')}
                className="text-[#00d49f] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>View all tasks</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 2: Recent Expenses (Table) */}
          <div className="xl:col-span-7 expensio-card p-5">
            <div className="flex items-center justify-between mb-3.5">
              <h3 className="text-sm font-semibold text-white tracking-tight">
                {viewMode === 'mockup' ? 'Recent Expenses' : 'Recent KTU Study Modules'}
              </h3>
              <span className="text-[11px] text-[#717888] font-medium">Updated 5 min ago</span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-[#727a8c] border-b border-[#232632] text-[11px] uppercase tracking-wider font-semibold">
                    <th className="pb-2.5 font-medium">Subject</th>
                    <th className="pb-2.5 font-medium">{viewMode === 'mockup' ? 'Employee' : 'Faculty / Module'}</th>
                    <th className="pb-2.5 font-medium">{viewMode === 'mockup' ? 'Team' : 'Branch / Tag'}</th>
                    <th className="pb-2.5 font-medium text-right">{viewMode === 'mockup' ? 'Amount' : 'Score / Pct'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2029]">
                  {viewMode === 'mockup' ? (
                    mockExpenses.map((row) => (
                      <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-2.5 text-white font-medium">{row.subject}</td>
                        <td className="py-2.5 text-[#9ba2b3]">{row.employee}</td>
                        <td className="py-2.5">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${row.teamColor}`}>
                            {row.team}
                          </span>
                        </td>
                        <td className="py-2.5 text-right font-medium text-white">{row.amount}</td>
                      </tr>
                    ))
                  ) : (
                    subjects.slice(0, 5).map((sub, idx) => (
                      <tr 
                        key={sub.id} 
                        onClick={() => onOpenSubject(sub.id)}
                        className="hover:bg-white/[0.03] transition-colors cursor-pointer"
                      >
                        <td className="py-2.5 text-white font-medium flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#00d49f]" />
                          <span>{sub.name}</span>
                        </td>
                        <td className="py-2.5 text-[#9ba2b3]">{sub.code}</td>
                        <td className="py-2.5">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border bg-purple-950/70 text-purple-300 border-purple-800/60">
                            {sub.color || 'KTU Core'}
                          </span>
                        </td>
                        <td className="py-2.5 text-right font-medium text-white">
                          {`${sub.modules?.length || 5} Mods`}
                        </td>
                      </tr>
                    ))
                  )}
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
            {/* 1. Pink Action: + New Expense */}
            <button
              type="button"
              onClick={() => onNavigate('settings')}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#ff4d79]/20 flex items-center justify-center shrink-0 border border-[#ff4d79]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#ff4d79]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + New expense
              </span>
            </button>

            {/* 2. Indigo Action: + Add Receipt */}
            <button
              type="button"
              onClick={() => onNavigate('notes')}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#5d55fa]/20 flex items-center justify-center shrink-0 border border-[#5d55fa]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#827bfa]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + Add receipt
              </span>
            </button>

            {/* 3. Teal Action: + Create Report */}
            <button
              type="button"
              onClick={() => onNavigate('timetable')}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#00d49f]/20 flex items-center justify-center shrink-0 border border-[#00d49f]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#00d49f]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + Create report
              </span>
            </button>

            {/* 4. Coral Action: + Create Trip */}
            <button
              type="button"
              onClick={onOpenFocusModal}
              className="expensio-quick-card p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-[#ef4444]/20 flex items-center justify-center shrink-0 border border-[#ef4444]/30 group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 text-[#ef4444]" />
              </div>
              <span className="text-xs font-semibold text-[#dfe3ed] group-hover:text-white transition-colors truncate">
                + Create trip
              </span>
            </button>
          </div>
        </section>

        {/* ============================================================== */}
        {/* ROW 3: Monthly Report (Team Spending Trend & Day-to-Day Expenses) */}
        {/* ============================================================== */}
        <section>
          <h3 className="text-sm font-semibold text-white tracking-tight mb-3 px-0.5">
            Monthly Report
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* CHART 1: Team Spending Trend (Teal Bars) */}
            <div className="expensio-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-semibold text-[#c8cdd9]">
                  {viewMode === 'mockup' ? 'Team Spending Trend' : 'Semester Subject Mastery Trend'}
                </h4>
                <span className="text-[10px] text-[#00d49f] font-mono font-bold">+18.4% vs last month</span>
              </div>

              {/* Bar Graph Canvas */}
              <div className="flex items-end gap-3 h-40 pt-4 border-b border-[#232632] relative">
                {/* Y-Axis Grid Guidelines */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-[#5b6274] font-mono pointer-events-none">
                  <span>100K</span>
                  <span>60K</span>
                  <span>20K</span>
                  <span>0K</span>
                </div>

                {/* Bars Container */}
                <div className="flex-1 flex items-end justify-around pl-8 h-full">
                  {spendingTrendData.map((bar) => (
                    <div key={bar.label} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                      <div className="relative flex justify-center w-5 sm:w-6">
                        <div 
                          style={{ height: `${bar.height}%` }}
                          className="w-full bg-[#00d49f] rounded-t-sm shadow-md shadow-[#00d49f]/20 group-hover:brightness-110 transition-all cursor-pointer"
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
                {spendingTrendData.map((bar) => (
                  <span key={bar.label}>{bar.label}</span>
                ))}
              </div>
            </div>

            {/* CHART 2: Day-to-Day Expenses (Vivid Purple Bars) */}
            <div className="expensio-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-semibold text-[#c8cdd9]">
                  {viewMode === 'mockup' ? 'Day-to-Day Expenses' : 'KTU Topic Distribution'}
                </h4>
                <span className="text-[10px] text-[#b37aff] font-mono font-bold">5 Active Categories</span>
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
                  {dayToDayData.map((bar) => (
                    <div key={bar.label} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                      <div className="relative flex justify-center w-5 sm:w-6">
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
                {dayToDayData.map((bar) => (
                  <span key={bar.label} className="truncate max-w-[50px] text-center" title={bar.label}>
                    {bar.label.slice(0, 5)}..
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
