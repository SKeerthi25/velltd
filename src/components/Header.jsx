import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ChevronDown, ChevronRight, Menu, X, 
  Paintbrush, Home, Building2, Palette, ShieldCheck, Layers, ArrowRight, Sparkles 
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY } from '../data/companyData';
import { SERVICES } from '../data/servicesData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for sticky header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const serviceIconMap = {
    Paintbrush: Paintbrush,
    Home: Home,
    Building2: Building2,
    Palette: Palette,
    ShieldCheck: ShieldCheck,
    Layers: Layers
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Top Utility Notification & Trust Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Serving Swindon, Wiltshire, Oxfordshire & Gloucestershire</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Mon - Fri: 07:30 - 18:00 | Sat: 08:00 - 16:00</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`mailto:${COMPANY.email}`}
              className="hover:text-brand-orange transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>{COMPANY.email}</span>
            </a>
            <div className="h-3 w-px bg-slate-700" />
            <span className="text-[11px] font-medium text-slate-400">
              Co. No. <strong className="text-white">{COMPANY.companyNumber}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-slate-200/80 py-3' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Company Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 font-medium text-sm text-slate-700">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              Home
            </Link>

            {/* Mega Menu Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`px-3 py-2 rounded-xl transition-colors flex items-center gap-1 hover:text-brand-orange ${
                  location.pathname.startsWith('/services') ? 'text-brand-orange font-bold bg-orange-50/60' : ''
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {/* Zoho-Inspired Mega Menu Panel */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] pt-3 z-50">
                  <div className="bg-white rounded-3xl shadow-mega border border-slate-200/90 p-6 overflow-hidden">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h4 className="font-extrabold text-navy-900 text-sm tracking-tight flex items-center gap-2">
                          Specialist Painting & Scaffolding Services
                          <span className="badge-zoho bg-orange-100 text-brand-orange font-bold">
                            Turnkey Solutions
                          </span>
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Professional tradesmanship backed by full public liability insurance [Insert details if applicable].
                        </p>
                      </div>
                      <Link 
                        to="/services" 
                        className="text-xs font-bold text-navy-900 hover:text-brand-orange flex items-center gap-1"
                      >
                        All Services Overview <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Service Cards Grid (3 columns) */}
                    <div className="grid grid-cols-3 gap-3">
                      {SERVICES.map((serv) => {
                        const IconComponent = serviceIconMap[serv.icon] || Paintbrush;
                        return (
                          <Link
                            key={serv.id}
                            to={`/services/${serv.slug}`}
                            className="p-3.5 rounded-2xl hover:bg-slate-50/80 border border-transparent hover:border-slate-200/80 transition-all group flex flex-col justify-between"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-xs text-navy-900 group-hover:text-brand-orange transition-colors">
                                  {serv.title}
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                                  {serv.subtitle}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Mega Menu Footer Banner (Combo Advantage) */}
                    <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-navy-950 to-navy-900 text-white flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Combined Painting + Scaffolding Package</p>
                          <p className="text-[11px] text-slate-300">Save up to 20% by booking access & decoration with a single contractor.</p>
                        </div>
                      </div>
                      <Link
                        to="/pricing-estimate"
                        className="px-3.5 py-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl text-xs font-bold transition-all shadow-glow flex items-center gap-1 shrink-0"
                      >
                        Calculate Savings <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/projects" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/projects' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              Gallery
            </Link>

            <Link 
              to="/before-after" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/before-after' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              Before & After
            </Link>

            <Link 
              to="/process" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/process' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              How We Work
            </Link>

            <Link 
              to="/pricing-estimate" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/pricing-estimate' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              Pricing & Calculator
            </Link>

            <Link 
              to="/areas-we-cover" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/areas-we-cover' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              Areas
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/about' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-brand-orange ${
                location.pathname === '/contact' ? 'text-brand-orange font-bold bg-orange-50/60' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Click-to-Call Pill */}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs tracking-tight transition-all border border-slate-200"
              aria-label={`Call Sharmila Painting on ${COMPANY.phoneDisplay}`}
            >
              <div className="w-6 h-6 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{COMPANY.phoneDisplay}</span>
            </a>

            {/* Free Quote Button */}
            <Link
              to="/pricing-estimate"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange text-white font-extrabold text-xs uppercase tracking-wider hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="p-2 rounded-xl bg-orange-50 text-brand-orange border border-orange-200 sm:hidden"
              aria-label="Call Sharmila Painting"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <BrandLogo showTagline={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-1">
                <Link
                  to="/"
                  className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Home
                </Link>

                <div className="py-2">
                  <div className="px-4 text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                    Services
                  </div>
                  <div className="space-y-1 pl-2">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-brand-orange"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-xs font-bold text-navy-900 hover:text-brand-orange underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>

                <Link
                  to="/projects"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Projects Gallery
                </Link>

                <Link
                  to="/before-after"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Before & After
                </Link>

                <Link
                  to="/process"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  How We Work
                </Link>

                <Link
                  to="/pricing-estimate"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Instant Quote Calculator
                </Link>


                <Link
                  to="/blog"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Blog & Advice
                </Link>

                <Link
                  to="/faqs"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  FAQs
                </Link>

                <Link
                  to="/areas-we-cover"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Areas We Cover
                </Link>

                <Link
                  to="/careers"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Careers
                </Link>

                <Link
                  to="/about"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className="block px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-orange"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Bottom Mobile Drawer Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="w-full py-3 rounded-xl bg-navy-900 text-white font-bold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call {COMPANY.phoneDisplay}</span>
              </a>

              <Link
                to="/pricing-estimate"
                className="w-full py-3 rounded-xl bg-brand-orange text-white font-bold text-center flex items-center justify-center gap-2 shadow-glow"
              >
                <span>Get Free Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
