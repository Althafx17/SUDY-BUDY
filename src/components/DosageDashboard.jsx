import React, { useState } from 'react';
import { 
  Bell, 
  Home, 
  FileText, 
  BarChart3, 
  MessageCircle, 
  Play, 
  LogOut, 
  Search, 
  MoreHorizontal, 
  ChevronDown, 
  ChevronRight, 
  Users, 
  MapPin, 
  Activity, 
  Calendar,
  Sparkles,
  BookOpen,
  ArrowRight,
  Send
} from 'lucide-react';

export default function DosageDashboard({
  data,
  currentSemester = 'S1',
  onSelectSemester,
  onOpenSubject,
  onNavigate,
  onOpenFocusModal
}) {
  // Mode toggle: 1:1 Image Mockup data vs KTU Study Buddy real data
  const [dataMode, setDataMode] = useState('mockup'); // 'mockup' | 'study'
  const [friendTab, setFriendTab] = useState('activities'); // 'activities' | 'online'
  const [selectedMonth, setSelectedMonth] = useState('Apr');
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  // Current semester subjects
  const semesterData = data?.[currentSemester] || { subjects: [] };
  const subjects = semesterData?.subjects || [];

  // Friend list data matching mockup exactly
  const mockFriends = [
    {
      id: 1,
      name: 'Max Stone',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      action: 'Weekly Bicycle',
      time: '10 min ago',
      studyAction: 'Calculus Module 3',
      isOnline: true
    },
    {
      id: 2,
      name: 'Grisha Jack',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
      action: 'Slow Jogging',
      time: '32 min ago',
      studyAction: 'Physics Wave Optics',
      isOnline: true
    },
    {
      id: 3,
      name: 'Levi Patrick',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      action: 'Morning Swim',
      time: '52 min ago',
      studyAction: 'Chemistry Polymers',
      isOnline: false
    },
    {
      id: 4,
      name: 'Cody Bryan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      action: 'Quick Sprint',
      time: '37 min ago',
      studyAction: 'Graphics Isometric Projection',
      isOnline: true
    },
    {
      id: 5,
      name: 'Max Stone',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80',
      action: 'Hiking',
      time: '1 hour ago',
      studyAction: 'Mechanics Friction',
      isOnline: false
    }
  ];

  // SVG Custom Runner Icon matching mockup
  const RunnerIcon = ({ className = "w-5 h-5 text-white" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="17" cy="4" r="2" />
      <path d="M15 8l-4 4-3-2-4 3" />
      <path d="M11 12l2 4 4-1" />
      <path d="M13 16l-2 5" />
      <path d="M7 13l2 5" />
    </svg>
  );

  // SVG Custom Sneaker / Shoe Icon matching mockup
  const ShoeIcon = ({ className = "w-5 h-5 text-white" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 17h18a2 2 0 0 0 2-2c0-1.5-.5-2.5-2-3l-5-2-3-4H8L5 9l-3 4a2 2 0 0 0 1 4z" />
      <path d="M8 9h5" />
      <path d="M6 13h12" />
    </svg>
  );

  // SVG Custom Bicycle Icon matching mockup
  const BikeIcon = ({ className = "w-5 h-5 text-white" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L15 6h3" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h4" />
    </svg>
  );

  // Bottom 3 Cards Data
  const bottomCards = dataMode === 'mockup' ? [
    {
      id: 'bike',
      icon: BikeIcon,
      title: 'Bicycle Drill',
      subtitle: '36 km / weeks',
      progress: 45,
      stat: '17 / 36km',
      pill: '2 days left',
      subjectId: subjects[0]?.id
    },
    {
      id: 'jog',
      icon: RunnerIcon,
      title: 'Jogging Hero',
      subtitle: '12 km / month',
      progress: 13,
      stat: '2 / 12km',
      pill: '17 days left',
      subjectId: subjects[1]?.id
    },
    {
      id: 'busy',
      icon: ShoeIcon,
      title: 'Healthy Busy',
      subtitle: '3600 steps / weeks',
      progress: 90,
      stat: '3200 / 3600 steps',
      pill: '3 days left',
      subjectId: subjects[2]?.id
    }
  ] : [
    {
      id: 'sub-0',
      icon: BookOpen,
      title: subjects[0]?.name || 'Mathematics S1',
      subtitle: 'Module 1 - 5 Syllabus',
      progress: 45,
      stat: '18 / 40 Topics',
      pill: 'Exam in 2 days',
      subjectId: subjects[0]?.id
    },
    {
      id: 'sub-1',
      icon: Activity,
      title: subjects[1]?.name || 'Engineering Physics',
      subtitle: 'Module 1 - 5 Syllabus',
      progress: 13,
      stat: '5 / 38 Topics',
      pill: 'Exam in 17 days',
      subjectId: subjects[1]?.id
    },
    {
      id: 'sub-2',
      icon: Sparkles,
      title: subjects[2]?.name || 'Engineering Chemistry',
      subtitle: 'Module 1 - 5 Syllabus',
      progress: 90,
      stat: '34 / 38 Topics',
      pill: 'Exam in 3 days',
      subjectId: subjects[2]?.id
    }
  ];

  return (
    <div className="w-full flex flex-col xl:flex-row gap-5 items-start">
      {/* ============================================================== */}
      {/* MAIN LEFT & CENTER CANVAS AREA */}
      {/* ============================================================== */}
      <div className="flex-1 w-full flex flex-col gap-5 min-w-0">
        
        {/* Top Header Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 py-1">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#9195ab] uppercase block">
              Primary
            </span>
            <h1 className="text-2xl sm:text-[28px] font-extrabold text-[#1a1b32] tracking-tight leading-none mt-0.5">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher Pill */}
            <div className="hidden sm:flex items-center bg-white/80 p-1 rounded-full border border-[#e4e6f2] shadow-xs text-xs font-semibold">
              <button
                type="button"
                onClick={() => setDataMode('mockup')}
                className={`px-3 py-1 rounded-full transition-all ${
                  dataMode === 'mockup'
                    ? 'bg-[#5f51bd] text-white shadow-xs'
                    : 'text-[#8b8fa8] hover:text-[#1a1b32]'
                }`}
              >
                1:1 Mockup View
              </button>
              <button
                type="button"
                onClick={() => setDataMode('study')}
                className={`px-3 py-1 rounded-full transition-all ${
                  dataMode === 'study'
                    ? 'bg-[#5f51bd] text-white shadow-xs'
                    : 'text-[#8b8fa8] hover:text-[#1a1b32]'
                }`}
              >
                KTU Study Buddy
              </button>
            </div>

            {/* Pill Search Input */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#8b8fa8] absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search"
                className="bg-white text-[#1a1b32] placeholder-[#a0a4bc] text-xs font-medium pl-9 pr-4 py-2 rounded-full border border-[#e4e6f2] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#5f51bd]/25 w-36 sm:w-52 transition-all"
              />
            </div>

            {/* User Profile Avatar */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-xs cursor-pointer hover:opacity-90 transition-opacity"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
          </div>
        </header>

        {/* Upper Content Grid: Big Overview Card + 2 Stacked Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* ========================================================== */}
          {/* 1. LARGE HERO OVERVIEW CARD (Span 8) */}
          {/* ========================================================== */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#6353c7] via-[#5c4cb9] to-[#5141a8] text-white rounded-[30px] p-5 sm:p-6 shadow-xl shadow-[#5f51bd]/20 relative overflow-hidden flex flex-col justify-between select-none">
            
            {/* Card Header: Overview & Monthly Dropdown */}
            <div className="flex items-center justify-between relative z-10">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Overview
              </h2>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMonthDropdownOpen(prev => !prev)}
                  className="bg-white/15 hover:bg-white/25 active:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 border border-white/10 transition-colors"
                >
                  <span>Monthly</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>

                {monthDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-[#44388e] text-white rounded-2xl shadow-xl border border-white/20 py-1.5 z-30 text-xs backdrop-blur-xl">
                    {['Weekly', 'Monthly', 'Semester', 'Yearly'].map(option => (
                      <button
                        key={option}
                        onClick={() => setMonthDropdownOpen(false)}
                        className="w-full text-left px-3 py-1.5 hover:bg-white/15 font-medium transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Middle: Smooth Wavy Line Curve Chart with Glowing Pin */}
            <div className="relative my-2 pt-2 pb-1 h-36 sm:h-40 w-full flex flex-col justify-end">
              
              {/* SVG Smooth Curve Area Chart */}
              <svg 
                viewBox="0 0 600 170" 
                preserveAspectRatio="none" 
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Soft Gradient Under Wave */}
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
                    <stop offset="60%" stopColor="#ffffff" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.00" />
                  </linearGradient>

                  {/* Pink Glow Filter */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#ff6584" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* Shaded Area Under Curve */}
                <path
                  d="M 10 120 
                     C 60 125, 90 120, 140 100 
                     C 170 85, 195 25, 235 25 
                     C 265 25, 280 85, 330 90 
                     C 380 95, 410 40, 460 70 
                     C 500 95, 540 60, 590 85 
                     L 590 170 L 10 170 Z"
                  fill="url(#waveGradient)"
                />

                {/* Primary Crisp Wavy Stroke */}
                <path
                  d="M 10 120 
                     C 60 125, 90 120, 140 100 
                     C 170 85, 195 25, 235 25 
                     C 265 25, 280 85, 330 90 
                     C 380 95, 410 40, 460 70 
                     C 500 95, 540 60, 590 85"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Indicator Vertical Line down to April */}
                <line 
                  x1="235" 
                  y1="25" 
                  x2="235" 
                  y2="155" 
                  stroke="rgba(255, 255, 255, 0.22)" 
                  strokeWidth="1.5" 
                  strokeDasharray="3 3" 
                />

                {/* Glowing Marker Pin at Peak (April: x=235, y=25) */}
                <circle 
                  cx="235" 
                  cy="25" 
                  r="13" 
                  fill="#ff6584" 
                  fillOpacity="0.45" 
                />
                <circle 
                  cx="235" 
                  cy="25" 
                  r="9" 
                  fill="#ff6584" 
                  stroke="#ffffff" 
                  strokeWidth="2.5" 
                  filter="url(#glow)"
                />
                <circle 
                  cx="235" 
                  cy="25" 
                  r="3.5" 
                  fill="#ffffff" 
                />
              </svg>

              {/* Floating Tooltip Pill: "9.178 Steps" */}
              <div 
                className="absolute z-20 pointer-events-none transition-all duration-300"
                style={{ left: '39%', top: '-6%' }}
              >
                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl px-2.5 py-1 shadow-lg shadow-black/10 flex flex-col items-center leading-none">
                  <span className="text-[11px] font-black tracking-tight">
                    {dataMode === 'mockup' ? '9.178' : '92%'}
                  </span>
                  <span className="text-[9px] font-semibold text-white/90 mt-0.5">
                    {dataMode === 'mockup' ? 'Steps' : 'Mastery'}
                  </span>
                </div>
              </div>

              {/* Months X-Axis */}
              <div className="flex items-center justify-between text-[11px] font-medium text-white/60 pt-1.5 px-1 relative z-10">
                {months.map(m => {
                  const isActive = m === selectedMonth;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setSelectedMonth(m)}
                      className={`transition-all ${
                        isActive
                          ? 'bg-white text-[#5141a8] font-black px-2.5 py-0.5 rounded-full shadow-xs scale-105'
                          : 'hover:text-white'
                      }`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Stat Row (3 Pillars with Center Highlight) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 items-center pt-2 border-t border-white/10 mt-1">
              
              {/* Stat 1: Total Time */}
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[11px] font-medium text-white/70">
                  Total Time
                </span>
                <span className="text-base sm:text-lg font-extrabold text-white tracking-tight mt-0.5">
                  748 Hr
                </span>
                <span className="text-[10px] text-white/50 font-medium">
                  April
                </span>
              </div>

              {/* Stat 2: Total Steps (Elevated Center Card) */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl py-1.5 px-3 sm:px-4 border border-white/10 text-center shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-medium text-white/80 block">
                  {dataMode === 'mockup' ? 'Total Steps' : 'Topics Done'}
                </span>
                <span className="text-base sm:text-lg font-black text-white tracking-tight block mt-0.5">
                  {dataMode === 'mockup' ? '9.178 St' : '57 / 62'}
                </span>
                <span className="text-[10px] text-white/60 font-medium block">
                  April
                </span>
              </div>

              {/* Stat 3: Target */}
              <div className="flex flex-col text-right">
                <span className="text-[10px] sm:text-[11px] font-medium text-white/70">
                  {dataMode === 'mockup' ? 'Target' : 'Target Goal'}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-white tracking-tight mt-0.5">
                  {dataMode === 'mockup' ? '9.200 St' : '100% S-Grade'}
                </span>
                <span className="text-[10px] text-white/50 font-medium">
                  April
                </span>
              </div>

            </div>

          </div>

          {/* ========================================================== */}
          {/* 2. STACKED RIGHT CARDS (Span 4) */}
          {/* ========================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            
            {/* Top Purple Pill Card: "Daily Jogging" */}
            <div 
              onClick={() => onOpenFocusModal && onOpenFocusModal()}
              className="bg-[#5f51bd] hover:bg-[#5749b5] text-white rounded-[26px] p-4 sm:p-5 flex items-center gap-4 shadow-md shadow-[#5f51bd]/20 cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              {/* Soft Frosted Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 shadow-inner">
                {dataMode === 'mockup' ? (
                  <ShoeIcon className="w-6 h-6 text-white" />
                ) : (
                  <BookOpen className="w-6 h-6 text-white" />
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {dataMode === 'mockup' ? 'Daily Jogging' : 'Daily Focus Goal'}
                </h3>
                <span className="text-[11px] text-white/70 font-medium block">
                  {dataMode === 'mockup' ? 'Track daily activity' : '25 min Pomodoro sprint'}
                </span>
              </div>
            </div>

            {/* Bottom Coral/Rose Pink Card: "My Jogging" */}
            <div className="bg-gradient-to-br from-[#ff6686] to-[#ff5074] text-white rounded-[30px] p-5 sm:p-6 shadow-xl shadow-pink-500/20 relative overflow-hidden flex flex-col justify-between h-44 sm:h-48 group">
              
              {/* Background Decorative Soft Wave */}
              <svg 
                viewBox="0 0 200 100" 
                className="absolute bottom-0 left-0 w-full h-24 text-white/10 pointer-events-none"
                preserveAspectRatio="none"
              >
                <path d="M0 60 C50 30 120 90 200 40 L200 100 L0 100 Z" fill="currentColor" />
              </svg>

              {/* Top Row: Runner Badge + Title */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                  {dataMode === 'mockup' ? (
                    <RunnerIcon className="w-5 h-5 text-white" />
                  ) : (
                    <Activity className="w-5 h-5 text-white" />
                  )}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {dataMode === 'mockup' ? 'My Jogging' : 'My Study Sprint'}
                </h3>
              </div>

              {/* Bottom Row: Total Time + Arrow Button */}
              <div className="flex items-end justify-between relative z-10">
                <div>
                  <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider block">
                    Total Time
                  </span>
                  <div className="text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight">
                    748 hr
                  </div>
                  <span className="text-xs font-semibold text-white/80 block">
                    July
                  </span>
                </div>

                <button 
                  type="button"
                  onClick={() => onNavigate && onNavigate('revision')}
                  className="w-10 h-10 rounded-full bg-white/25 hover:bg-white/35 active:bg-white/40 flex items-center justify-center text-white backdrop-blur-xs shadow-xs transition-transform group-hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* LOWER ROW: 3 METRIC CARDS */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bottomCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => card.subjectId && onOpenSubject && onOpenSubject(card.subjectId)}
                className="bg-white rounded-[26px] p-5 sm:p-6 shadow-sm border border-[#eef0f8] flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5"
              >
                {/* Top Row: Purple Icon + 3 Dots Menu */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#5f51bd] text-white flex items-center justify-center shadow-md shadow-[#5f51bd]/20 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="p-1 text-gray-300 hover:text-gray-500 rounded-lg transition-colors"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Middle: Title & Subtitle */}
                <div className="mt-4 mb-3">
                  <h4 className="text-sm sm:text-base font-bold text-[#1f2137] tracking-tight group-hover:text-[#5f51bd] transition-colors truncate">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#8b8fa8] font-medium mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-1.5 my-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8b8fa8] font-semibold text-[11px]">
                      Progress
                    </span>
                    <span className="text-[#1f2137] font-extrabold text-xs">
                      {card.progress}%
                    </span>
                  </div>

                  {/* Rounded Progress Track */}
                  <div className="w-full bg-[#f1f3fa] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Row: Stat + Soft Pink Pill Badge */}
                <div className="flex items-center justify-between pt-3 mt-1 border-t border-gray-50">
                  <span className="text-xs text-[#8b8fa8] font-semibold">
                    {card.stat}
                  </span>

                  <span className="bg-[#ffeef2] text-[#ff5978] text-[10px] font-bold px-3 py-1 rounded-full">
                    {card.pill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ============================================================== */}
      {/* FAR RIGHT SIDEBAR COLUMN: FRIENDS + LIVE MAP (Matching Mockup) */}
      {/* ============================================================== */}
      <div className="w-full xl:w-76 shrink-0 flex flex-col gap-5">
        
        {/* ============================================================ */}
        {/* FRIENDS CARD */}
        {/* ============================================================ */}
        <div className="bg-white rounded-[28px] p-5 sm:p-6 shadow-sm border border-[#eef0f8] flex flex-col gap-4">
          
          {/* Header Row: Friends + View All */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#1f2137]">
              <Users className="w-4 h-4 text-[#5f51bd]" />
              <h3 className="text-base font-extrabold tracking-tight">
                Friends
              </h3>
            </div>

            <button 
              type="button"
              className="text-xs font-semibold text-[#8b8fa8] hover:text-[#5f51bd] transition-colors"
            >
              View All
            </button>
          </div>

          {/* Segmented Toggle: Activities / Online */}
          <div className="bg-[#f2f4fb] p-1 rounded-full flex items-center text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFriendTab('activities')}
              className={`flex-1 py-1 rounded-full text-center transition-all ${
                friendTab === 'activities'
                  ? 'bg-[#5f51bd] text-white shadow-xs font-bold'
                  : 'text-[#8b8fa8] hover:text-[#1f2137]'
              }`}
            >
              Activities
            </button>
            <button
              type="button"
              onClick={() => setFriendTab('online')}
              className={`flex-1 py-1 rounded-full text-center transition-all ${
                friendTab === 'online'
                  ? 'bg-[#5f51bd] text-white shadow-xs font-bold'
                  : 'text-[#8b8fa8] hover:text-[#1f2137]'
              }`}
            >
              Online
            </button>
          </div>

          {/* Friend List */}
          <div className="space-y-3.5 pt-1">
            {mockFriends
              .filter(f => friendTab === 'activities' || f.isOnline)
              .map((friend) => (
                <div 
                  key={friend.id} 
                  className="flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative shrink-0">
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#eef0f8]"
                      />
                      {friend.isOnline && (
                        <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#1f2137] tracking-tight truncate">
                        {friend.name}
                      </h4>
                      <p className="text-[10px] text-[#8b8fa8] font-medium truncate">
                        {dataMode === 'mockup' 
                          ? `${friend.action} • ${friend.time}` 
                          : `${friend.studyAction} • ${friend.time}`}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    title={`Message ${friend.name}`}
                    className="p-1.5 text-gray-400 hover:text-[#5f51bd] hover:bg-[#f2f4fb] rounded-full transition-colors shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              ))}
          </div>

        </div>

        {/* ============================================================ */}
        {/* LIVE MAP CARD */}
        {/* ============================================================ */}
        <div className="bg-white rounded-[28px] p-5 sm:p-6 shadow-sm border border-[#eef0f8] flex flex-col gap-3">
          
          {/* Header Row: Live map + View */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#1f2137]">
              <MapPin className="w-4 h-4 text-[#5f51bd]" />
              <h3 className="text-base font-extrabold tracking-tight">
                Live map
              </h3>
            </div>

            <button 
              type="button"
              className="text-xs font-semibold text-[#8b8fa8] hover:text-[#5f51bd] transition-colors"
            >
              View
            </button>
          </div>

          {/* Stylized Vector Map with Avatar Pins and Target Pin */}
          <div className="relative h-40 rounded-[22px] overflow-hidden bg-[#eef1f8] border border-[#e2e5f0] shadow-inner select-none">
            
            {/* Vector Roads & Topo Grid */}
            <svg viewBox="0 0 300 200" className="w-full h-full object-cover opacity-60">
              {/* Street grid */}
              <line x1="0" y1="50" x2="300" y2="50" stroke="#d5dbe9" strokeWidth="4" />
              <line x1="0" y1="120" x2="300" y2="120" stroke="#d5dbe9" strokeWidth="6" />
              <line x1="60" y1="0" x2="60" y2="200" stroke="#d5dbe9" strokeWidth="4" />
              <line x1="180" y1="0" x2="180" y2="200" stroke="#d5dbe9" strokeWidth="5" />
              <line x1="240" y1="0" x2="240" y2="200" stroke="#d5dbe9" strokeWidth="3" />

              {/* Diagonal arterial avenue */}
              <path d="M 20 180 Q 140 100 280 40" fill="none" stroke="#ffffff" strokeWidth="6" />
              <path d="M 40 20 Q 150 70 260 170" fill="none" stroke="#ffffff" strokeWidth="4" />
              
              {/* Soft Green Area / Park */}
              <rect x="70" y="60" width="100" height="50" rx="12" fill="#d9e6dc" opacity="0.7" />
              <rect x="195" y="130" width="80" height="45" rx="10" fill="#d9e6dc" opacity="0.6" />
            </svg>

            {/* Friend Pin 1 */}
            <div className="absolute top-6 left-12 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={mockFriends[0].avatar}
                alt="Friend Pin"
                className="w-7 h-7 rounded-full ring-2 ring-white shadow-md object-cover"
              />
            </div>

            {/* Friend Pin 2 */}
            <div className="absolute top-24 left-24 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={mockFriends[1].avatar}
                alt="Friend Pin"
                className="w-6 h-6 rounded-full ring-2 ring-white shadow-md object-cover"
              />
            </div>

            {/* Friend Pin 3 */}
            <div className="absolute bottom-6 right-16 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={mockFriends[3].avatar}
                alt="Friend Pin"
                className="w-6 h-6 rounded-full ring-2 ring-white shadow-md object-cover"
              />
            </div>

            {/* Active Bright Orange Destination Target Pin */}
            <div className="absolute top-14 right-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff5a24] to-[#ff7d45] flex items-center justify-center text-white shadow-lg ring-2 ring-white">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
