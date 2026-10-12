import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  inverted?: boolean;
  animated?: boolean;
  variant?: "horizontal" | "vertical" | "icon";
}

export default function Logo({
  className = "",
  size = 44,
  showText = false,
  inverted = false,
  animated = false,
  variant = "horizontal",
}: LogoProps) {
  return (
    <div
      className={`inline-flex ${
        variant === "vertical"
          ? "flex-col items-center text-center gap-3"
          : "items-center gap-3"
      } ${className}`}
    >
      {/* Ultra-Modern "PS" Tech Mark (Optical CCTV Iris + Electric Power Surge) */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 transition-transform duration-300 ${
          animated ? "animate-pulse-subtle hover:scale-105" : "hover:scale-105"
        }`}
        aria-label="P Selvam - Electrical & CCTV Logo"
      >
        <defs>
          {/* Deep Electric Sapphire Gradient */}
          <linearGradient id="psBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Electric Cyan Neon Accent */}
          <linearGradient id="psCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Radiant Solar Gold Gradient */}
          <linearGradient id="psGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Lens Dark Glass */}
          <radialGradient id="psLens" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="85%" stopColor="#020617" />
            <stop offset="100%" stopColor="#1E293B" />
          </radialGradient>

          {/* Subtle Glow Filter */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Modern Rounded Squircle Tech Base with Electric Border */}
        <rect
          x="6"
          y="6"
          width="88"
          height="88"
          rx="24"
          fill="url(#psBlue)"
          stroke="url(#psCyan)"
          strokeWidth="2.5"
          strokeOpacity="0.85"
        />

        {/* 2. Precision CCTV Lens Outer Ring (Optical Ring) */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="url(#psLens)"
          stroke="url(#psGold)"
          strokeWidth="2.5"
        />

        {/* 3. Aperture Tick Marks / 360 Surveillance Geometry */}
        <circle
          cx="50"
          cy="50"
          r="23"
          fill="none"
          stroke="#475569"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* 4. Optical Sensor Center Pupil */}
        <circle cx="50" cy="50" r="14" fill="#020617" />
        <ellipse
          cx="45"
          cy="45"
          rx="4"
          ry="2.5"
          transform="rotate(-30 45 45)"
          fill="#38BDF8"
          fillOpacity="0.6"
        />

        {/* 5. Dynamic High-Voltage Lightning Bolt (S-Surge Curve) */}
        <path
          d="M53 26 L38 49 H50 L44 74 L65 47 H52 L57 26 Z"
          fill="url(#psGold)"
          stroke="#FFFBEB"
          strokeWidth="1.2"
          strokeLinejoin="round"
          filter="url(#softGlow)"
        />

        {/* 6. Active Surveillance 24/7 Status Indicator (Zoho Emerald Green) */}
        <circle cx="73" cy="27" r="3.5" fill="#10B981" />
        <circle cx="73" cy="27" r="1.5" fill="#FFFFFF" />
        <circle cx="73" cy="27" r="5" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.5" className="animate-ping" />

        {/* 7. Corner Power Circuit Nodes */}
        <circle cx="24" cy="24" r="2.5" fill="#60A5FA" fillOpacity="0.7" />
        <circle cx="24" cy="76" r="2.5" fill="#60A5FA" fillOpacity="0.7" />
        <circle cx="76" cy="76" r="2.5" fill="#60A5FA" fillOpacity="0.7" />
        <path d="M24 26.5 V35" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M24 73.5 V65" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>

      {/* Typography Signature */}
      {showText && (
        <div
          className={`flex flex-col ${
            variant === "vertical" ? "items-center" : "items-start"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span
              className={`font-heading font-black tracking-[-0.03em] text-xl sm:text-2xl leading-none ${
                inverted ? "text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              P SELVAM
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-zoho-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              LTD
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-zoho-yellow" />
            <span
              className={`text-[10.5px] font-bold tracking-[0.18em] uppercase ${
                inverted
                  ? "text-slate-300"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Electrical &amp; CCTV Experts
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
