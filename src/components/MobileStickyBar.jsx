import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calculator, MessageSquare } from 'lucide-react';
import { COMPANY } from '../data/companyData';

export default function MobileStickyBar() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 md:hidden flex items-center justify-between gap-3 shadow-2xl safe-area-bottom"
      role="region"
      aria-label="Mobile quick action bar"
    >
      {/* 1. Call Now Button (min 44px touch target) */}
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="flex-1 min-h-[46px] rounded-2xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700 transition-all"
        aria-label={`Call Sharmila Painting directly at ${COMPANY.phoneDisplay}`}
      >
        <Phone className="w-4 h-4 text-brand-orange shrink-0 animate-bounce" />
        <span>Call Now</span>
      </a>

      {/* 2. WhatsApp Button */}
      <a
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[46px] min-w-[46px] px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white flex items-center justify-center shrink-0 border border-emerald-500 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
      </a>

      {/* 3. Get Free Quote Button */}
      <Link
        to="/pricing-estimate"
        className="flex-1 min-h-[46px] rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow transition-all"
        aria-label="Calculate free quote estimate"
      >
        <Calculator className="w-4 h-4 shrink-0" />
        <span>Free Quote</span>
      </Link>
    </div>
  );
}
