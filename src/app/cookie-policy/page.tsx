"use client";

import React from "react";
import Link from "next/link";
import { Cookie, Settings, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function CookiePolicyPage() {
  const openSettings = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open_cookie_settings"));
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Cookie className="w-4 h-4" />
            <span>UK PECR &amp; GDPR Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Learn how {SITE_INFO.companyName} utilizes cookies and manage your consent preferences.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {/* Quick Action Box */}
          <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-slate-900 dark:text-white text-base">
                Your Current Cookie Settings
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                You can review or change your consent choices for analytics and functional features anytime.
              </p>
            </div>
            <button
              type="button"
              onClick={openSettings}
              className="inline-flex items-center gap-2 bg-zoho-blue hover:bg-zoho-blue-dark text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition flex-shrink-0"
            >
              <Settings className="w-4 h-4" />
              <span>Change Cookie Preferences</span>
            </button>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your computer, tablet, or smartphone when you visit a website. Under the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR, websites must obtain informed consent before placing non-essential cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              2. Categories of Cookies We Use
            </h2>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    A. Strictly Necessary Cookies (Always On)
                  </h3>
                  <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Exempt from Consent
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  These cookies and local storage tokens are crucial for the basic operation of the site. They store your consent choices (<code>pselvam_cookie_consent_v1</code>), remember if you have seen the intro splash screen in your current session (<code>pselvam_splash_seen_v1</code>), and prevent automated spam on quote forms.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    B. Performance &amp; Analytics Cookies (Optional)
                  </h3>
                  <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded">
                    Requires Consent
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Collect aggregated, non-identifying data on which pages are visited most, bounce rates, and load performance. No personal marketing data is shared without your explicit consent.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    C. Functional &amp; Third-Party Cookies (Optional)
                  </h3>
                  <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded">
                    Requires Consent
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Used when displaying interactive maps, embedded video demos, or location services.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              3. How Long Do We Store Your Choice?
            </h2>
            <p>
              Your cookie consent selection is retained on your device for <strong>12 months</strong>, after which our consent banner will automatically request an update to ensure compliance with updated privacy guidelines.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            For further enquiries, please review our{" "}
            <Link href="/privacy-policy" className="text-zoho-blue font-bold underline">
              Privacy Policy
            </Link>{" "}
            or write to cctv@pselvam.com.
          </section>
        </div>
      </div>
    </div>
  );
}
