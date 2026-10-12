import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ variant = 'dark', className = '', showTagline = true }) {
  // variant: 'dark' (for white/light backgrounds) or 'light' (for dark navy backgrounds)
  const isDarkBg = variant === 'light';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-xl p-1 ${className}`}>
      {/* SVG Icon Motif: Paint roller + Scaffolding frame */}
      <div className="relative w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-navy-900 to-navy-950 p-2 shadow-card group-hover:scale-105 group-hover:shadow-glow transition-all duration-300 border border-slate-700/30 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Scaffold Upright Standards */}
          <rect x="18" y="16" width="6" height="68" rx="3" fill="#38BDF8" />
          <rect x="76" y="16" width="6" height="68" rx="3" fill="#38BDF8" />
          {/* Scaffold Ledger Bars */}
          <line x1="21" y1="28" x2="79" y2="28" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <line x1="21" y1="50" x2="79" y2="50" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <line x1="21" y1="72" x2="79" y2="72" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <line x1="24" y1="30" x2="76" y2="70" stroke="#64748B" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.5" />
          
          {/* Paint Roller Head (Orange Accent) */}
          <g transform="rotate(-12 50 45)">
            <rect x="30" y="22" width="40" height="17" rx="6" fill="#FF7A1A" />
            <path d="M 33 27 Q 45 31 58 27 T 67 29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            <path d="M 50 39 L 50 47 Q 50 52 56 52 L 60 52" stroke="#CBD5E1" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="58" y="49" width="16" height="6" rx="3" fill="#FF7A1A" />
          </g>
          {/* Small spark */}
          <circle cx="82" cy="18" r="4" fill="#FF7A1A" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-lg sm:text-xl font-display transition-colors ${
            isDarkBg ? 'text-white' : 'text-navy-900 group-hover:text-navy-700'
          }`}>
            SHARMILA <span className="text-brand-orange">VEL</span> LTD
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase ${
            isDarkBg ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Painting & Scaffolding Specialists
          </span>
        )}
      </div>
    </Link>
  );
}
