import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone, HelpCircle } from 'lucide-react';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO 
        title="404 Page Not Found | Sharmila Vel Ltd"
        description="The page you requested could not be found. Navigate back to our home or service pages."
      />

      <section className="py-24 sm:py-32 bg-slate-50 min-h-[70vh] flex items-center justify-center text-center px-4">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="relative inline-block">
            <span className="text-8xl sm:text-9xl font-black text-navy-900/10 font-display select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-display">
                Page Not Found
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
            >
              <Home className="w-4 h-4 text-brand-orange" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/pricing-estimate"
              className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow"
            >
              Quote Calculator
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
            Need direct help? Phone us directly on{' '}
            <a href={`tel:${COMPANY.phoneRaw}`} className="font-bold text-navy-900 hover:text-brand-orange">
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
