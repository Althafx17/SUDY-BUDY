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

// 🌈 Rainbow Palette for Modules (Module 1 to 5)
export const MODULE_RAINBOW_COLORS = [
  {
    moduleNumber: 1,
    name: 'Lilac Violet',
    colorKey: 'violet',
    bg: 'bg-violet-50/90',
    hoverBg: 'hover:bg-violet-50/60',
    border: 'border-violet-200',
    activeBorder: 'border-violet-400',
    cardBorder: 'border-violet-200/90',
    shadow: 'shadow-violet-100',
    text: 'text-violet-700',
    headerText: 'text-violet-900',
    badgeBg: 'bg-violet-100 text-violet-700 border-violet-200',
    accentDot: 'bg-violet-500',
    gradient: 'from-violet-500 to-purple-600',
    chipActive: 'bg-violet-600 text-white shadow-sm shadow-violet-200',
    chipInactive: 'bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200',
    lightBg: 'bg-violet-50/60'
  },
  {
    moduleNumber: 2,
    name: 'Aqua Cyan',
    colorKey: 'cyan',
    bg: 'bg-cyan-50/90',
    hoverBg: 'hover:bg-cyan-50/60',
    border: 'border-cyan-200',
    activeBorder: 'border-cyan-400',
    cardBorder: 'border-cyan-200/90',
    shadow: 'shadow-cyan-100',
    text: 'text-cyan-800',
    headerText: 'text-cyan-950',
    badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    accentDot: 'bg-cyan-500',
    gradient: 'from-teal-400 to-cyan-600',
    chipActive: 'bg-cyan-600 text-white shadow-sm shadow-cyan-200',
    chipInactive: 'bg-cyan-50 text-cyan-800 hover:bg-cyan-100 border border-cyan-200',
    lightBg: 'bg-cyan-50/60'
  },
  {
    moduleNumber: 3,
    name: 'Mint Emerald',
    colorKey: 'emerald',
    bg: 'bg-emerald-50/90',
    hoverBg: 'hover:bg-emerald-50/60',
    border: 'border-emerald-200',
    activeBorder: 'border-emerald-400',
    cardBorder: 'border-emerald-200/90',
    shadow: 'shadow-emerald-100',
    text: 'text-emerald-700',
    headerText: 'text-emerald-950',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accentDot: 'bg-emerald-500',
    gradient: 'from-emerald-500 to-teal-600',
    chipActive: 'bg-emerald-600 text-white shadow-sm shadow-emerald-200',
    chipInactive: 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200',
    lightBg: 'bg-emerald-50/60'
  },
  {
    moduleNumber: 4,
    name: 'Warm Amber',
    colorKey: 'amber',
    bg: 'bg-amber-50/90',
    hoverBg: 'hover:bg-amber-50/60',
    border: 'border-amber-200',
    activeBorder: 'border-amber-400',
    cardBorder: 'border-amber-200/90',
    shadow: 'shadow-amber-100',
    text: 'text-amber-800',
    headerText: 'text-amber-950',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
    accentDot: 'bg-amber-500',
    gradient: 'from-amber-500 to-orange-500',
    chipActive: 'bg-amber-500 text-white shadow-sm shadow-amber-200',
    chipInactive: 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200',
    lightBg: 'bg-amber-50/60'
  },
  {
    moduleNumber: 5,
    name: 'Blush Rose',
    colorKey: 'rose',
    bg: 'bg-rose-50/90',
    hoverBg: 'hover:bg-rose-50/60',
    border: 'border-rose-200',
    activeBorder: 'border-rose-400',
    cardBorder: 'border-rose-200/90',
    shadow: 'shadow-rose-100',
    text: 'text-rose-700',
    headerText: 'text-rose-950',
    badgeBg: 'bg-rose-100 text-rose-700 border-rose-200',
    accentDot: 'bg-rose-500',
    gradient: 'from-rose-500 to-pink-600',
    chipActive: 'bg-rose-500 text-white shadow-sm shadow-rose-200',
    chipInactive: 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200',
    lightBg: 'bg-rose-50/60'
  }
];

export const getModuleRainbowColor = (moduleNumberOrIndex) => {
  const num = typeof moduleNumberOrIndex === 'number' 
    ? moduleNumberOrIndex 
    : parseInt(moduleNumberOrIndex) || 1;
  const index = ((num - 1) % 5 + 5) % 5;
  return MODULE_RAINBOW_COLORS[index] || MODULE_RAINBOW_COLORS[0];
};

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
