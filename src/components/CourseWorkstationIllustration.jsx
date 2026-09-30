import React from 'react';

export default function CourseWorkstationIllustration({ color = 'violet', className = 'w-36 h-24' }) {
  const palettes = {
    violet: {
      screenBg: '#eef0ff',
      screenBorder: '#2d2856',
      accent: '#6353d8',
      accentLight: '#c5bdfc',
      dots: '#7c6cf0'
    },
    rose: {
      screenBg: '#fff0f3',
      screenBorder: '#2d2856',
      accent: '#ec4899',
      accentLight: '#fbcfe8',
      dots: '#f43f5e'
    },
    amber: {
      screenBg: '#fff7ed',
      screenBorder: '#2d2856',
      accent: '#f97316',
      accentLight: '#fed7aa',
      dots: '#fb923c'
    },
    emerald: {
      screenBg: '#f0fdf4',
      screenBorder: '#2d2856',
      accent: '#10b981',
      accentLight: '#a7f3d0',
      dots: '#34d399'
    },
    cyan: {
      screenBg: '#ecfeff',
      screenBorder: '#2d2856',
      accent: '#06b6d4',
      accentLight: '#a5f3fc',
      dots: '#22d3ee'
    },
    blue: {
      screenBg: '#eff6ff',
      screenBorder: '#2d2856',
      accent: '#3b82f6',
      accentLight: '#bfdbfe',
      dots: '#60a5fa'
    }
  };

  const p = palettes[color] || palettes.violet;

  return (
    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Decorative background floating dots and circles */}
      <circle cx="28" cy="42" r="5" fill={p.dots} fillOpacity="0.25" />
      <circle cx="18" cy="40" r="3" fill="none" stroke={p.dots} strokeWidth="1.5" />
      <circle cx="170" cy="50" r="2.5" fill={p.dots} fillOpacity="0.6" />
      <circle cx="25" cy="85" r="2" fill={p.dots} />
      <circle cx="165" cy="88" r="1.5" fill={p.dots} />

      {/* Main Monitor */}
      <g>
        {/* Screen Bezel */}
        <rect x="52" y="24" width="76" height="52" rx="4" fill="#2d2856" />
        {/* Screen Display */}
        <rect x="56" y="28" width="68" height="44" rx="2" fill={p.screenBg} />
        {/* Display header bar */}
        <rect x="56" y="28" width="68" height="7" fill={p.accentLight} fillOpacity="0.5" />
        <circle cx="61" cy="31.5" r="1.5" fill="#f87171" />
        <circle cx="66" cy="31.5" r="1.5" fill="#fbbf24" />
        <circle cx="71" cy="31.5" r="1.5" fill="#34d399" />
        {/* Inner wireframe / UI layout */}
        <rect x="62" y="39" width="34" height="26" rx="2" fill="white" stroke={p.accentLight} strokeWidth="1" />
        <rect x="66" y="43" width="16" height="3" rx="1" fill={p.accent} />
        <rect x="66" y="49" width="26" height="2" rx="0.5" fill="#cbd5e1" />
        <rect x="66" y="53" width="22" height="2" rx="0.5" fill="#cbd5e1" />
        <rect x="66" y="57" width="18" height="2" rx="0.5" fill="#cbd5e1" />
        <rect x="100" y="39" width="18" height="12" rx="1.5" fill={p.accentLight} fillOpacity="0.4" />
        <rect x="100" y="53" width="18" height="12" rx="1.5" fill={p.accent} fillOpacity="0.15" />
        {/* Monitor Stand */}
        <rect x="86" y="76" width="8" height="14" fill="#2d2856" />
        <path d="M72 90H108" stroke="#2d2856" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Laptop / Second Display on Right */}
      <g>
        <rect x="115" y="44" width="38" height="28" rx="3" fill="#2d2856" />
        <rect x="118" y="47" width="32" height="22" rx="1.5" fill={p.screenBg} />
        <rect x="122" y="52" width="18" height="2" rx="0.5" fill={p.accent} />
        <rect x="122" y="56" width="24" height="1.5" rx="0.5" fill="#cbd5e1" />
        <rect x="122" y="60" width="15" height="1.5" rx="0.5" fill="#cbd5e1" />
        {/* Laptop base */}
        <path d="M110 72H158" stroke="#2d2856" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Mobile / Tablet on Left */}
      <g>
        <rect x="42" y="56" width="14" height="24" rx="2" fill="#2d2856" />
        <rect x="44" y="58" width="10" height="20" rx="1" fill={p.screenBg} />
        <rect x="46" y="62" width="6" height="2" rx="0.5" fill={p.accent} />
        <circle cx="49" cy="75" r="1" fill="#2d2856" />
      </g>

      {/* Palette / Design Swatches at Bottom-Left */}
      <g>
        <rect x="25" y="80" width="8" height="15" rx="2" fill={p.accent} />
        <rect x="30" y="78" width="8" height="17" rx="2" fill={p.accentLight} />
        <rect x="35" y="82" width="8" height="13" rx="2" fill="#2d2856" />
        <circle cx="29" cy="85" r="1.5" fill="white" />
        <circle cx="34" cy="83" r="1.5" fill={p.accent} />
      </g>
    </svg>
  );
}
