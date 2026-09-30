// 5 Distinct UI & Layout Themes for Study Buddy
export const THEMES = [
  {
    id: 'rainbow-sidebar',
    name: 'Rainbow Academic',
    shortName: 'Rainbow',
    icon: '🌈',
    layoutType: 'sidebar',
    description: 'Left rich sidebar with Courses Taken & module sub-lists, vibrant rainbow pastel cards & lively accents.',
    bgClass: 'bg-[#f8fafc] text-slate-800',
    cardClass: 'bg-white/90 border border-slate-200/80 shadow-sm',
    headerClass: 'bg-white/80 border-b border-slate-200/80 backdrop-blur-xl',
    sidebarClass: 'bg-gradient-to-b from-[#251b5c] via-[#2d226e] to-[#1f1650] text-white',
    badge: 'Multi-Color'
  },
  {
    id: 'apple-minimal',
    name: 'Apple Minimalist',
    shortName: 'Apple',
    icon: '🍎',
    layoutType: 'top-nav',
    description: 'Single-column centered layout with frosted-glass top navigation, airy whitespace, and soft ambient pastel orbs.',
    bgClass: 'bg-[#f5f7fb] text-slate-900',
    cardClass: 'bg-white/80 backdrop-blur-md border border-white/80 shadow-sm rounded-[24px]',
    headerClass: 'bg-white/70 border-b border-slate-200/60 backdrop-blur-2xl',
    sidebarClass: 'hidden',
    badge: 'Airy & Clean'
  },
  {
    id: 'ecoursie-studio',
    name: 'ēCoursie 3-Column',
    shortName: 'ēCoursie',
    icon: '💻',
    layoutType: 'three-column',
    description: 'Full 3-column learning studio: purple left sidebar, central revision feed, and dedicated right calendar panel with buddies.',
    bgClass: 'bg-[#ebf0f8] text-slate-800',
    cardClass: 'bg-white rounded-[24px] border border-slate-100 shadow-sm',
    headerClass: 'bg-transparent border-none',
    sidebarClass: 'bg-[#5142be] text-white',
    badge: '3-Column Studio'
  },
  {
    id: 'cyber-dark',
    name: 'Cyber Dark OLED',
    shortName: 'Cyber Dark',
    icon: '⚡',
    layoutType: 'cyber-dark',
    description: 'Deep pitch-black OLED terminal with luminous neon accents (cyan, lime, magenta), dark glass cards, and glowing borders.',
    bgClass: 'bg-[#090d16] text-slate-100',
    cardClass: 'bg-[#111827]/90 border border-slate-800 shadow-md shadow-black/40',
    headerClass: 'bg-[#0e1424]/90 border-b border-slate-800/80 backdrop-blur-xl',
    sidebarClass: 'bg-[#090e1c] text-slate-100 border-r border-slate-800/80',
    badge: 'Night OLED'
  },
  {
    id: 'zen-notion',
    name: 'Zen Notion Paper',
    shortName: 'Zen Paper',
    icon: '📖',
    layoutType: 'zen-paper',
    description: 'Serene warm paper background, slate-800 typography, subtle minimalist dividers, and clean distraction-free study layout.',
    bgClass: 'bg-[#faf9f5] text-stone-800',
    cardClass: 'bg-[#ffffff] border border-stone-200/80 shadow-2xs rounded-2xl',
    headerClass: 'bg-[#faf9f5]/90 border-b border-stone-200/80 backdrop-blur-md',
    sidebarClass: 'bg-[#f4f3ef] text-stone-800 border-r border-stone-200/90',
    badge: 'Serene Focus'
  }
];

// Color Accent Presets for Settings & Customization
export const COLOR_ACCENTS = [
  {
    id: 'rainbow',
    name: 'Rainbow Spectrum',
    dot: 'bg-gradient-to-r from-violet-500 via-emerald-400 to-pink-500',
    primary: '#8b5cf6',
    activeChip: 'bg-violet-600 text-white',
    ring: 'ring-violet-400',
    border: 'border-violet-300'
  },
  {
    id: 'violet',
    name: 'Electric Violet',
    dot: 'bg-violet-600',
    primary: '#7c3aed',
    activeChip: 'bg-violet-600 text-white',
    ring: 'ring-violet-400',
    border: 'border-violet-300'
  },
  {
    id: 'cyan',
    name: 'Aqua Cyan',
    dot: 'bg-cyan-500',
    primary: '#06b6d4',
    activeChip: 'bg-cyan-600 text-white',
    ring: 'ring-cyan-400',
    border: 'border-cyan-300'
  },
  {
    id: 'emerald',
    name: 'Mint Emerald',
    dot: 'bg-emerald-500',
    primary: '#10b981',
    activeChip: 'bg-emerald-600 text-white',
    ring: 'ring-emerald-400',
    border: 'border-emerald-300'
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    dot: 'bg-amber-500',
    primary: '#f59e0b',
    activeChip: 'bg-amber-500 text-white',
    ring: 'ring-amber-400',
    border: 'border-amber-300'
  },
  {
    id: 'rose',
    name: 'Blush Rose',
    dot: 'bg-rose-500',
    primary: '#f43f5e',
    activeChip: 'bg-rose-500 text-white',
    ring: 'ring-rose-400',
    border: 'border-rose-300'
  },
  {
    id: 'slate',
    name: 'Monochrome Slate',
    dot: 'bg-slate-700',
    primary: '#334155',
    activeChip: 'bg-slate-800 text-white',
    ring: 'ring-slate-400',
    border: 'border-slate-400'
  }
];

export const THEME_STORAGE_KEY = 'study-ui-theme';
export const COLOR_ACCENT_KEY = 'study-color-accent';
