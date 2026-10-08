// Complete Black & White UI & Layout Themes with Vibrant Color-Coded Modules
export const THEMES = [
  {
    id: 'monochrome-noir',
    name: 'Monochrome Noir',
    shortName: 'Black & White',
    icon: '🏁',
    layoutType: 'sidebar',
    description: 'High-contrast Black & White minimalist studio: deep obsidian surfaces, crisp white typography, and vibrant color-coded modules.',
    bgClass: 'bg-[#09090b] text-[#f4f4f5]',
    cardClass: 'bg-[#121214] border border-[#27272a] shadow-sm',
    headerClass: 'bg-[#09090b]/90 border-b border-[#27272a] backdrop-blur-xl',
    sidebarClass: 'bg-[#09090b] text-[#f4f4f5] border-r border-[#27272a]',
    badge: 'Default B&W'
  },
  {
    id: 'monochrome-light',
    name: 'Monochrome Paper',
    shortName: 'White & Black',
    icon: '📄',
    layoutType: 'sidebar',
    description: 'Crisp editorial White & Black design: clean stark paper cards, pitch black typography, and vibrant color-coded modules.',
    bgClass: 'bg-[#fafafa] text-[#09090b]',
    cardClass: 'bg-white border border-[#e4e4e7] shadow-sm',
    headerClass: 'bg-white/90 border-b border-[#e4e4e7] backdrop-blur-xl',
    sidebarClass: 'bg-[#f4f4f5] text-[#09090b] border-r border-[#e4e4e7]',
    badge: 'Paper B&W'
  },
  {
    id: 'apple-minimal',
    name: 'Apple Monochrome',
    shortName: 'Minimalist',
    icon: '🍎',
    layoutType: 'top-nav',
    description: 'Single-column centered layout with frosted-glass top navigation, obsidian dark surfaces, and airy breathing room.',
    bgClass: 'bg-[#09090b] text-[#f4f4f5]',
    cardClass: 'bg-[#121214]/90 backdrop-blur-md border border-[#27272a] shadow-sm rounded-[24px]',
    headerClass: 'bg-[#09090b]/80 border-b border-[#27272a] backdrop-blur-2xl',
    sidebarClass: 'hidden',
    badge: 'Top-Nav B&W'
  },
  {
    id: 'ecoursie-studio',
    name: 'Studio 3-Column Noir',
    shortName: '3-Column Noir',
    icon: '💻',
    layoutType: 'three-column',
    description: 'Full 3-column learning studio: obsidian left navigation, central revision feed, and dedicated right calendar panel in black & white.',
    bgClass: 'bg-[#09090b] text-[#f4f4f5]',
    cardClass: 'bg-[#121214] rounded-[24px] border border-[#27272a] shadow-sm',
    headerClass: 'bg-transparent border-none',
    sidebarClass: 'bg-[#111113] text-[#f4f4f5] border-r border-[#27272a]',
    badge: '3-Column Studio'
  },
  {
    id: 'zen-notion',
    name: 'Zen Notion Noir',
    shortName: 'Zen Noir',
    icon: '📖',
    layoutType: 'zen-paper',
    description: 'Distraction-free black and white study layout with subtle minimalist dividers and clean typography.',
    bgClass: 'bg-[#09090b] text-[#d4d4d8]',
    cardClass: 'bg-[#121214] border border-[#27272a] shadow-2xs rounded-2xl',
    headerClass: 'bg-[#09090b]/90 border-b border-[#27272a] backdrop-blur-md',
    sidebarClass: 'bg-[#0c0c0e] text-[#d4d4d8] border-r border-[#27272a]',
    badge: 'Serene B&W'
  }
];

// Color Accent Presets for Settings & Customization
export const COLOR_ACCENTS = [
  {
    id: 'monochrome',
    name: 'Monochrome High-Contrast',
    dot: 'bg-white border border-zinc-700',
    primary: '#ffffff',
    activeChip: 'bg-white text-black font-black shadow-md',
    ring: 'ring-white/50',
    border: 'border-zinc-700'
  },
  {
    id: 'rainbow',
    name: 'Module Colors Spectrum',
    dot: 'bg-gradient-to-r from-violet-500 via-emerald-400 to-pink-500',
    primary: '#8b5cf6',
    activeChip: 'bg-white text-black font-bold',
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
