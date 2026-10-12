import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, X, Check, SlidersHorizontal, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'sharmila_cookie_consent_v1';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always locked to true
    analytics: false,
    marketing: false,
    functional: false
  });

  const modalRef = useRef(null);

  useEffect(() => {
    // Check if consent has already been saved
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Small delay so it appears smoothly after loader
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2400);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(parsed.categories || preferences);
      } catch (e) {
        // Fallback
      }
    }

    // Listen for custom event to open preferences from footer
    const handleOpenSettings = () => {
      setShowModal(true);
      setIsOpen(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  // Keyboard accessibility & focus trap for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  const saveConsent = (categories) => {
    const consentPayload = {
      version: '1.0',
      timestamp: new Date().toISOString(),
      categories: {
        necessary: true,
        analytics: Boolean(categories.analytics),
        marketing: Boolean(categories.marketing),
        functional: Boolean(categories.functional)
      }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentPayload));
    setIsOpen(false);
    setShowModal(false);

    // Apply consented scripts placeholder
    if (categories.analytics) {
      // Trigger analytics initialization if configured
      console.log('Analytics consent granted by user.');
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const toggleCategory = (key) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {/* Bottom Sticky Banner */}
      <AnimatePresence>
        {isOpen && !showModal && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
            role="region"
            aria-label="Cookie consent banner"
          >
            <div className="max-w-5xl mx-auto bg-navy-950/95 backdrop-blur-md text-white p-5 sm:p-6 rounded-2xl border border-slate-700/60 shadow-2xl pointer-events-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 mt-0.5 border border-brand-orange/30">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                    Cookie & Privacy Preferences
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      UK GDPR / PECR
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    We use cookies to ensure proper website functionality, understand visitor traffic, and provide you with an optimal browsing experience. You can choose to accept all, decline non-essential cookies, or customise your settings. Read our{' '}
                    <Link to="/cookie-policy" className="underline hover:text-brand-orange transition-colors">Cookie Policy</Link> and{' '}
                    <Link to="/privacy-policy" className="underline hover:text-brand-orange transition-colors">Privacy Policy</Link>.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Manage Preferences
                </button>
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 shadow-glow transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h2 id="cookie-modal-title" className="text-lg font-bold text-navy-900">
                      Cookie Preferences
                    </h2>
                    <p className="text-xs text-slate-500">
                      Customise which cookies you permit on this browser.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100"
                  aria-label="Close preferences"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body with categories */}
              <div className="py-4 space-y-4 overflow-y-auto pr-1">
                {/* 1. Necessary */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-navy-900">Strictly Necessary Cookies</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
                        Always Active
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">Required</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Essential for you to browse the site and use core features like form security, page routing, and session management. These cannot be switched off.
                  </p>
                </div>

                {/* 2. Analytics */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-navy-900">Analytics & Performance</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.analytics}
                      onClick={() => toggleCategory('analytics')}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                        preferences.analytics ? 'bg-brand-orange' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Helps us understand how visitors interact with our quote calculators and service pages so we can diagnose bottlenecks and enhance user experience.
                  </p>
                </div>

                {/* 3. Marketing */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-navy-900">Marketing & Campaign Tracking</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.marketing}
                      onClick={() => toggleCategory('marketing')}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                        preferences.marketing ? 'bg-brand-orange' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Used to measure the efficiency of local advertising campaigns across Wiltshire and display relevant painting promotions.
                  </p>
                </div>

                {/* 4. Functional */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-navy-900">Preferences & Personalisation</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.functional}
                      onClick={() => toggleCategory('functional')}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                        preferences.functional ? 'bg-brand-orange' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          preferences.functional ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remembers your previous calculator selections and preferred service area for a smoother quote submission.
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover transition-colors shadow-glow"
                >
                  Accept All
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// Global helper to trigger the settings modal from anywhere (e.g. footer)
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
}
