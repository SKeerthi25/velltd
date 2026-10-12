import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ duration = 2000, onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white select-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-brand-orange/15 blur-[140px] pointer-events-none" />
          <div className="absolute w-80 h-80 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />

          {/* Centered Brand Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Logo Icon with Subtle Pulse */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-5"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-navy-900/90 p-2.5 flex items-center justify-center backdrop-blur-md">
                <img
                  src="/logo512.png"
                  alt="SHARMILA VEL LTD Logo"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <div className="absolute -inset-1.5 rounded-3xl bg-brand-orange/25 blur-lg -z-10 animate-pulse" />
            </motion.div>

            {/* Company Name & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="space-y-1.5"
            >
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight font-display text-white">
                SHARMILA <span className="text-brand-orange">VEL</span> LTD
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300">
                Painting & Scaffolding Specialists
              </p>
            </motion.div>

            {/* 2-Second Linear Progress Bar */}
            <div className="w-48 sm:w-56 h-1.5 bg-white/10 rounded-full overflow-hidden mt-8 relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.0, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange rounded-full shadow-glow"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[11px] text-slate-400 mt-3 font-medium tracking-wide"
            >
              Loading Swindon & Wiltshire Specialists...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
