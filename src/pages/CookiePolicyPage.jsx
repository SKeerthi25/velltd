import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ArrowLeft, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/companyData';
import { openCookieSettings } from '../components/CookieConsent';
import SEO from '../components/SEO';

export default function CookiePolicyPage() {
  return (
    <>
      <SEO 
        title="Cookie Policy (PECR & UK GDPR Compliant) | Sharmila Vel Ltd"
        description="Comprehensive cookie policy explaining cookie usage, categories, and consent options on sharmilapainting.co.uk in compliance with PECR and UK GDPR."
        keywords="cookie policy Sharmila Vel Ltd, PECR compliance, cookie preferences Swindon"
      />

      <section className="py-12 lg:py-16 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-orange transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <span className="badge-zoho bg-brand-orange text-white text-[10px]">
            PECR & Privacy Regulations
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: October 2024 • Applicable to {COMPANY.domain}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-700 text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you browse websites. They are widely used in order to make websites function properly, retain user preferences (such as previous calculator estimates), and provide analytical metrics to site operators.
            </p>
          </div>

          {/* Section 2: Manage preferences button */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-sm text-navy-900">Customise Your Consent at Any Time</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                You can review, modify, or revoke your cookie choices at any point during your visit.
              </p>
            </div>
            <button
              type="button"
              onClick={openCookieSettings}
              className="px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-orange" />
              <span>Open Cookie Settings</span>
            </button>
          </div>

          {/* Section 3: Cookie Categories */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">2. Categories of Cookies We Use</h2>
            
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-900 mb-1">A. Strictly Necessary Cookies (Always Active)</h4>
                <p className="text-xs text-slate-600">
                  These cookies are vital for the operation of our website. They include session identifiers that allow you to navigate pages, load critical fonts, and maintain security tokens for quote submissions. They do not store any personally identifiable information and cannot be switched off.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-900 mb-1">B. Performance & Analytics Cookies (Consent Required)</h4>
                <p className="text-xs text-slate-600">
                  These cookies allow us to count page visits, determine traffic sources, and observe which decorating service pages receive the highest engagement in Swindon and Wiltshire. All data collected is aggregated and entirely anonymised.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-900 mb-1">C. Functionality & Preference Cookies (Consent Required)</h4>
                <p className="text-xs text-slate-600">
                  These enable our website to remember your selections (such as previously calculated indicative price estimates and selected room options) so you do not need to re-enter them if you return to the quote form.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-900 mb-1">D. Marketing & Advertising Cookies (Consent Required)</h4>
                <p className="text-xs text-slate-600">
                  We may occasionally use targeted campaign cookies to measure the effectiveness of local advertising in Wiltshire. We will never deploy marketing cookies without your explicit opt-in consent.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Specific cookies table */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">3. Specific Cookies Deployed</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-navy-900 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Cookie Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Lifespan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-3 font-mono font-semibold">sharmila_cookie_consent_v1</td>
                    <td className="p-3 font-semibold text-emerald-600">Strictly Necessary</td>
                    <td className="p-3">Stores your accepted cookie consent choices and category preferences.</td>
                    <td className="p-3">12 Months</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-semibold">sharmila_splash_seen</td>
                    <td className="p-3 font-semibold text-emerald-600">Strictly Necessary</td>
                    <td className="p-3">Ensures the 2-second loading splash screen is only shown once per browser session.</td>
                    <td className="p-3">Session</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-semibold">_ga, _gid (optional)</td>
                    <td className="p-3 font-semibold text-sky-600">Analytics</td>
                    <td className="p-3">Anonymised visitor telemetry (only initiated after consent).</td>
                    <td className="p-3">2 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: Browser controls */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">4. Controlling Cookies in Your Browser</h2>
            <p>
              In addition to our on-site settings modal, most web browsers allow you to manage cookie settings via their settings menu (Chrome, Safari, Firefox, Edge). To learn more about cookies and how to delete them, visit <a href="https://allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline">allaboutcookies.org</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
