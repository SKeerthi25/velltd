import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check sessionStorage
    const hasSeenSplash = sessionStorage.getItem('sharmila_splash_seen');

    if (hasSeenSplash === 'true' || prefersReducedMotion) {
      // Don't show or finish instantly
      if (onFinish) onFinish();
      return;
    }

    // Otherwise show loading screen for exactly 2 seconds
    setIsVisible(true);

    const startTime = Date.now();
    const duration = 2000; // 2 seconds exactly

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        sessionStorage.setItem('sharmila_splash_seen', 'true');
        setTimeout(() => {
          setIsVisible(false);
          if (onFinish) onFinish();
        }, 300); // Smooth fade-out finish
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] bg-gradient-to-br from-navy-950 via-navy-900 to-[#030B17] flex flex-col items-center justify-center text-white px-6 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading Sharmila Vel Ltd website"
        >
          {/* Subtle background glow effect */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none -top-20 -left-20" />
          <div className="absolute w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none -bottom-20 -right-20" />

          {/* Logo & Brand Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center relative z-10"
          >
            {/* Animated SVG Emblem */}
            <div className="relative w-24 h-24 mb-6 rounded-3xl bg-navy-900/90 p-4 border border-white/10 shadow-2xl flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Scaffolding Standards */}
                <motion.rect
                  initial={{ height: 0 }}
                  animate={{ height: 68 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  x="18" y="16" width="6" rx="3" fill="#38BDF8"
                />
                <motion.rect
                  initial={{ height: 0 }}
                  animate={{ height: 68 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  x="76" y="16" width="6" rx="3" fill="#38BDF8"
                />
                {/* Cross bars */}
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  x1="21" y1="28" x2="79" y2="28" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round"
                />
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  x1="21" y1="50" x2="79" y2="50" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round"
                />
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  x1="21" y1="72" x2="79" y2="72" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round"
                />

                {/* Paint Roller Motif */}
                <motion.g
                  initial={{ rotate: -25, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: -12, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  transform-origin="50px 45px"
                >
                  <rect x="30" y="22" width="40" height="17" rx="6" fill="#FF7A1A" />
                  <path d="M 33 27 Q 45 31 58 27 T 67 29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                  <path d="M 50 39 L 50 47 Q 50 52 56 52 L 60 52" stroke="#CBD5E1" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="58" y="49" width="16" height="6" rx="3" fill="#FF7A1A" />
                </motion.g>

                <circle cx="82" cy="18" r="4" fill="#FF7A1A" />
              </svg>
            </div>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1.5"
            >
              SHARMILA <span className="text-brand-orange">VEL</span> LTD
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xs sm:text-sm font-semibold tracking-widest text-slate-300 uppercase mb-8"
            >
              Painting & Scaffolding Specialists
            </motion.p>
          </motion.div>

          {/* Thin Progress Bar (fills over exactly 2 seconds) */}
          <div className="w-56 sm:w-72 bg-white/10 h-1.5 rounded-full overflow-hidden p-0.5 border border-white/10 relative z-10">
            <div
              className="h-full bg-gradient-to-r from-brand-orange via-amber-400 to-sky-400 rounded-full transition-all duration-75 ease-out shadow-glow"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 text-[11px] font-medium text-slate-400 font-mono tracking-wider">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
