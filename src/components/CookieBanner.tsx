"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  savedAt: number;
}

const STORAGE_KEY = "pselvam_cookie_consent_v1";
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    savedAt: 0,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        if (Date.now() - parsed.savedAt < ONE_YEAR_MS) {
          setPreferences(parsed);
          setIsOpen(false);
          return;
        }
      }
      setIsOpen(true);
    } catch {
      setIsOpen(true);
    }

    // Listen for custom event triggered by footer "Cookie Settings" link
    const handleOpenSettings = () => {
      setIsModalOpen(true);
      setIsOpen(false);
    };

    window.addEventListener("open_cookie_settings", handleOpenSettings);
    return () => {
      window.removeEventListener("open_cookie_settings", handleOpenSettings);
    };
  }, []);

  const savePreferences = (prefs: { analytics: boolean; marketing: boolean }) => {
    const updated: CookiePreferences = {
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      savedAt: Date.now(),
    };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setIsOpen(false);
    setIsModalOpen(false);

    // Notify any third-party scripts listening
    window.dispatchEvent(
      new CustomEvent("cookie_consent_updated", { detail: updated })
    );
  };

  const handleAcceptAll = () => {
    savePreferences({ analytics: true, marketing: true });
  };

  const handleRejectAll = () => {
    savePreferences({ analytics: false, marketing: false });
  };

  return (
    <>
      {/* Bottom Sticky Banner */}
      {isOpen && !isModalOpen && (
        <div
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-all"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-zoho-blue flex-shrink-0 mt-0.5">
                <Cookie className="w-6 h-6" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                <p className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                  <span>Your Privacy &amp; Cookies</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800">
                    UK GDPR / PECR Compliant
                  </span>
                </p>
                <p className="leading-relaxed">
                  We use strictly necessary cookies to keep our website secure and operational. With your consent, we would also like to use non-essential analytics and marketing cookies to enhance your experience. Read our full{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-zoho-blue font-semibold underline underline-offset-2 hover:text-blue-700 dark:text-blue-400"
                  >
                    Cookie Policy
                  </Link>{" "}
                  or adjust preferences anytime.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Manage Preferences
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-zoho-blue hover:bg-zoho-blue-dark text-white shadow-md shadow-blue-500/20 transition"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-slate-800 text-zoho-blue">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2
                  id="cookie-modal-title"
                  className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white"
                >
                  Cookie Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 my-4 leading-relaxed">
              Under UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR, you can customize which cookies and local storage tokens we may store on your device.
            </p>

            <div className="space-y-4 my-6">
              {/* Strictly Necessary */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                      Strictly Necessary Cookies
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Essential for site security, session maintenance, spam prevention on quote forms, and remembering cookie consent states.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    aria-label="Strictly Necessary Cookies (Always Active)"
                    className="w-5 h-5 rounded text-zoho-blue cursor-not-allowed opacity-70"
                  />
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                    Performance &amp; Analytics Cookies
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Collect aggregated, anonymised statistics on page visits, load speeds, and popular services to help us improve site performance.
                  </p>
                </div>
                <div className="pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                      aria-label="Toggle Analytics Cookies"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zoho-blue"></div>
                  </label>
                </div>
              </div>

              {/* Marketing & Functional */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                    Functional &amp; Marketing Cookies
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Enable rich features like interactive maps, embedded video demonstrations, and relevant local advertising signals.
                  </p>
                </div>
                <div className="pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          marketing: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                      aria-label="Toggle Functional and Marketing Cookies"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zoho-blue"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    analytics: preferences.analytics,
                    marketing: preferences.marketing,
                  })
                }
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-zoho-blue hover:bg-zoho-blue-dark text-white shadow-md shadow-blue-500/20 transition"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
