// Rainbow Pastel Color Palette for Apple Theme
export const SUBJECT_COLORS = [
  { 
    id: 'violet', 
    label: 'Lilac Violet', 
    cardClass: 'card-pastel-violet',
    gradient: 'from-violet-500 to-purple-600', 
    ring: 'ring-violet-400/30', 
    border: 'border-violet-200', 
    text: 'text-violet-700', 
    bg: 'bg-violet-100',
    btnBg: 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-200',
    accentDot: 'bg-violet-500'
  },
  { 
    id: 'rose', 
    label: 'Blush Rose', 
    cardClass: 'card-pastel-rose',
    gradient: 'from-rose-500 to-pink-600', 
    ring: 'ring-rose-400/30', 
    border: 'border-rose-200', 
    text: 'text-rose-700', 
    bg: 'bg-rose-100',
    btnBg: 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-200',
    accentDot: 'bg-rose-500'
  },
  { 
    id: 'amber', 
    label: 'Warm Amber', 
    cardClass: 'card-pastel-amber',
    gradient: 'from-amber-500 to-orange-500', 
    ring: 'ring-amber-400/30', 
    border: 'border-amber-200', 
    text: 'text-amber-800', 
    bg: 'bg-amber-100',
    btnBg: 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-200',
    accentDot: 'bg-amber-500'
  },
  { 
    id: 'emerald', 
    label: 'Mint Emerald', 
    cardClass: 'card-pastel-emerald',
    gradient: 'from-emerald-500 to-teal-600', 
    ring: 'ring-emerald-400/30', 
    border: 'border-emerald-200', 
    text: 'text-emerald-700', 
    bg: 'bg-emerald-100',
    btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200',
    accentDot: 'bg-emerald-500'
  },
  { 
    id: 'cyan', 
    label: 'Aqua Cyan', 
    cardClass: 'card-pastel-cyan',
    gradient: 'from-teal-400 to-cyan-600', 
    ring: 'ring-cyan-400/30', 
    border: 'border-cyan-200', 
    text: 'text-cyan-800', 
    bg: 'bg-cyan-100',
    btnBg: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-200',
    accentDot: 'bg-cyan-500'
  },
  { 
    id: 'blue', 
    label: 'Sky Blue', 
    cardClass: 'card-pastel-blue',
    gradient: 'from-blue-500 to-indigo-600', 
    ring: 'ring-blue-400/30', 
    border: 'border-blue-200', 
    text: 'text-blue-700', 
    bg: 'bg-blue-100',
    btnBg: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200',
    accentDot: 'bg-blue-500'
  },
  { 
    id: 'indigo', 
    label: 'Royal Indigo', 
    cardClass: 'card-pastel-indigo',
    gradient: 'from-indigo-500 to-purple-600', 
    ring: 'ring-indigo-400/30', 
    border: 'border-indigo-200', 
    text: 'text-indigo-700', 
    bg: 'bg-indigo-100',
    btnBg: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200',
    accentDot: 'bg-indigo-500'
  },
];

// 🌈 Color Palette for Modules (Module 1 to 5) with Explicit Color Codes
export const MODULE_RAINBOW_COLORS = [
  {
    moduleNumber: 1,
    name: 'Lilac Violet',
    colorKey: 'violet',
    hex: '#8B5CF6',
    colorCode: '#8B5CF6',
    bg: 'bg-violet-500/10',
    hoverBg: 'hover:bg-violet-500/20',
    border: 'border-violet-500/30',
    activeBorder: 'border-violet-500',
    cardBorder: 'border-violet-500/40',
    shadow: 'shadow-violet-950/50',
    text: 'text-violet-400',
    headerText: 'text-violet-200',
    badgeBg: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    codePill: 'bg-violet-950/60 text-violet-300 border border-violet-500/40 font-mono',
    accentDot: 'bg-violet-500',
    gradient: 'from-violet-500 to-purple-600',
    chipActive: 'bg-violet-600 text-white shadow-md shadow-violet-900/40',
    chipInactive: 'bg-zinc-900/80 text-violet-300 hover:bg-violet-950/40 border border-zinc-800',
    lightBg: 'bg-violet-500/10'
  },
  {
    moduleNumber: 2,
    name: 'Aqua Cyan',
    colorKey: 'cyan',
    hex: '#06B6D4',
    colorCode: '#06B6D4',
    bg: 'bg-cyan-500/10',
    hoverBg: 'hover:bg-cyan-500/20',
    border: 'border-cyan-500/30',
    activeBorder: 'border-cyan-500',
    cardBorder: 'border-cyan-500/40',
    shadow: 'shadow-cyan-950/50',
    text: 'text-cyan-400',
    headerText: 'text-cyan-200',
    badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    codePill: 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-mono',
    accentDot: 'bg-cyan-400',
    gradient: 'from-cyan-400 to-teal-500',
    chipActive: 'bg-cyan-600 text-white shadow-md shadow-cyan-900/40',
    chipInactive: 'bg-zinc-900/80 text-cyan-300 hover:bg-cyan-950/40 border border-zinc-800',
    lightBg: 'bg-cyan-500/10'
  },
  {
    moduleNumber: 3,
    name: 'Mint Emerald',
    colorKey: 'emerald',
    hex: '#10B981',
    colorCode: '#10B981',
    bg: 'bg-emerald-500/10',
    hoverBg: 'hover:bg-emerald-500/20',
    border: 'border-emerald-500/30',
    activeBorder: 'border-emerald-500',
    cardBorder: 'border-emerald-500/40',
    shadow: 'shadow-emerald-950/50',
    text: 'text-emerald-400',
    headerText: 'text-emerald-200',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    codePill: 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-mono',
    accentDot: 'bg-emerald-400',
    gradient: 'from-emerald-400 to-teal-600',
    chipActive: 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40',
    chipInactive: 'bg-zinc-900/80 text-emerald-300 hover:bg-emerald-950/40 border border-zinc-800',
    lightBg: 'bg-emerald-500/10'
  },
  {
    moduleNumber: 4,
    name: 'Warm Amber',
    colorKey: 'amber',
    hex: '#F59E0B',
    colorCode: '#F59E0B',
    bg: 'bg-amber-500/10',
    hoverBg: 'hover:bg-amber-500/20',
    border: 'border-amber-500/30',
    activeBorder: 'border-amber-500',
    cardBorder: 'border-amber-500/40',
    shadow: 'shadow-amber-950/50',
    text: 'text-amber-400',
    headerText: 'text-amber-200',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    codePill: 'bg-amber-950/60 text-amber-300 border border-amber-500/40 font-mono',
    accentDot: 'bg-amber-400',
    gradient: 'from-amber-400 to-orange-500',
    chipActive: 'bg-amber-500 text-white shadow-md shadow-amber-900/40',
    chipInactive: 'bg-zinc-900/80 text-amber-300 hover:bg-amber-950/40 border border-zinc-800',
    lightBg: 'bg-amber-500/10'
  },
  {
    moduleNumber: 5,
    name: 'Blush Rose',
    colorKey: 'rose',
    hex: '#EC4899',
    colorCode: '#EC4899',
    bg: 'bg-pink-500/10',
    hoverBg: 'hover:bg-pink-500/20',
    border: 'border-pink-500/30',
    activeBorder: 'border-pink-500',
    cardBorder: 'border-pink-500/40',
    shadow: 'shadow-pink-950/50',
    text: 'text-pink-400',
    headerText: 'text-pink-200',
    badgeBg: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    codePill: 'bg-pink-950/60 text-pink-300 border border-pink-500/40 font-mono',
    accentDot: 'bg-pink-500',
    gradient: 'from-pink-500 to-rose-600',
    chipActive: 'bg-pink-600 text-white shadow-md shadow-pink-900/40',
    chipInactive: 'bg-zinc-900/80 text-pink-300 hover:bg-pink-950/40 border border-zinc-800',
    lightBg: 'bg-pink-500/10'
  }
];

export const getModuleRainbowColor = (moduleNumberOrIndex) => {
  const num = typeof moduleNumberOrIndex === 'number' 
    ? moduleNumberOrIndex 
    : parseInt(moduleNumberOrIndex) || 1;
  const index = ((num - 1) % 5 + 5) % 5;
  return MODULE_RAINBOW_COLORS[index] || MODULE_RAINBOW_COLORS[0];
};

export const getModuleColor = getModuleRainbowColor;
export const MODULE_COLORS = MODULE_RAINBOW_COLORS;

import { KTU_MATHS_S1 } from './ktuMathsS1';
import { KTU_CHEMISTRY_S1 } from './ktuChemistryS1';
import { KTU_MATHS_S2 } from './ktuMathsS2';
import { KTU_PHYSICS_S2 } from './ktuPhysicsS2';

export const INITIAL_DATA = {
  S1: {
    examWindowDate: '2026-12-10',
    subjects: [
      KTU_MATHS_S1,
      KTU_CHEMISTRY_S1
    ]
  },
  S2: {
    examWindowDate: '2027-04-10',
    subjects: [
      KTU_MATHS_S2,
      KTU_PHYSICS_S2
    ]
  }
};
