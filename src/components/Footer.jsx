import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight, Heart, 
  ExternalLink, FileText, CheckCircle2, SlidersHorizontal 
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY } from '../data/companyData';
import { SERVICES } from '../data/servicesData';
import { openCookieSettings } from './CookieConsent';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 font-sans border-t border-slate-800/80 pt-16 pb-12 selection:bg-brand-orange selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Banner: Trust & Fast Contact */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                Ready to transform your property in Swindon or Wiltshire?
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                Get a transparent, fixed-price estimate with free on-site survey and no obligation. Combined scaffolding & painting packages available.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0 justify-start lg:justify-end">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-tight border border-slate-600 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
            <Link
              to="/pricing-estimate"
              className="px-6 py-3 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-sm tracking-wider uppercase shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>

        {/* Main Footer Links Columns (5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Official Registration */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              <strong>{COMPANY.name}</strong> (trading as {COMPANY.tradingName}) provides premier interior and exterior painting, decorative wall finishes, and certified scaffolding hire across Swindon, Wiltshire, Oxfordshire, Gloucestershire, and surrounding areas.
            </p>

            {/* Statutory UK Company Registration Badge */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY.registrationInfo}</span>
              </div>
              <p className="text-[12px] text-slate-400 pl-6">
                Registered Office: {COMPANY.registeredOffice}
              </p>
              <p className="text-[11px] text-amber-300/90 pl-6 italic">
                {COMPANY.insuranceNotice}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <a 
                href={COMPANY.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-600">•</span>
              <a 
                href={`mailto:${COMPANY.email}`}
                className="text-xs font-semibold text-slate-300 hover:text-brand-orange transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Specialist Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={`/services/${s.slug}`} 
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="font-bold text-brand-orange hover:underline text-xs block pt-1"
                >
                  View All Services Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company & Process
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>About Sharmila Vel Ltd</span>
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>5-Step Process & Standards</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Project Portfolio Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/before-after" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Before & After Sliders</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing-estimate" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Quote Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Decorating Tips & Advice</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Careers & Sub-Contracting</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas & Local SEO */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Regional Coverage
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/areas-we-cover" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Swindon (HQ Base)</span>
                </Link>
              </li>
              <li>
                <Link to="/areas-we-cover" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Wiltshire (Marlborough, Chippenham)</span>
                </Link>
              </li>
              <li>
                <Link to="/areas-we-cover" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Oxfordshire (Faringdon, Oxford)</span>
                </Link>
              </li>
              <li>
                <Link to="/areas-we-cover" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Gloucestershire (Cirencester)</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Request Site Survey</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Cookie Settings */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>{COMPANY.name}</strong> (Trading as {COMPANY.tradingName}). All rights reserved. 
            Painters and decorators Swindon • Scaffolding Swindon • Exterior painting Wiltshire.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <Link to="/privacy-policy" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/cookie-policy" className="hover:text-brand-orange transition-colors">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link to="/terms-conditions" className="hover:text-brand-orange transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            {/* Cookie Settings button to reopen modal */}
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-brand-orange hover:underline font-semibold flex items-center gap-1 focus:outline-none"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Cookie Settings</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
