"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Camera,
  Lightbulb,
  Plug,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Home,
  Briefcase,
  MapPin,
  Star,
  HelpCircle,
  BookOpen,
  Info,
  Mail,
  MessageSquare,
} from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { SITE_INFO } from "@/data/siteData";

const SERVICES_ITEMS = [
  {
    title: "Electrical Installation",
    href: "/services/electrical-installation",
    desc: "18th Edition wiring, consumer unit upgrades, EICR reports & EV circuits.",
    icon: Zap,
    color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
  },
  {
    title: "CCTV Installation & Servicing",
    href: "/services/cctv-installation",
    desc: "4K ColorVu cameras, remote mobile viewing, zero monthly cloud fees.",
    icon: Camera,
    color: "text-zoho-blue bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800",
  },
  {
    title: "Light Fittings & Lighting",
    href: "/services/light-fittings",
    desc: "Architectural LED spots, dimmers, outdoor PIR floodlights & ambiance.",
    icon: Lightbulb,
    color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800",
  },
  {
    title: "Power Sockets & Outlets",
    href: "/services/power-sockets",
    desc: "Additional twin sockets, USB-C chargers & IP66 outdoor garden power.",
    icon: Plug,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and set class when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-active");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-active");
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800"
            : "bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-zoho-blue rounded-xl p-1"
            >
              <Logo size={46} showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                prefetch={true}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition ${
                  pathname === "/"
                    ? "text-zoho-blue dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                    : "text-slate-700 dark:text-slate-200 hover:text-zoho-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown (Zoho Mega-Menu Style) */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                    pathname.startsWith("/services")
                      ? "text-zoho-blue dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                      : "text-slate-700 dark:text-slate-200 hover:text-zoho-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-[540px] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 grid grid-cols-1 gap-2">
                      <div className="px-3 py-1.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Our Core Specialisms
                        </span>
                        <Link
                          href="/services"
                          prefetch={true}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs font-semibold text-zoho-blue dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                          All Services Overview <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {SERVICES_ITEMS.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              prefetch={true}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition flex items-start gap-3 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                            >
                              <div
                                className={`p-2 rounded-xl flex-shrink-0 border ${item.color}`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-zoho-blue dark:group-hover:text-blue-400 transition">
                                  {item.title}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/cctv-packages"
                prefetch={true}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition ${
                  pathname === "/cctv-packages"
                    ? "text-zoho-blue dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                    : "text-slate-700 dark:text-slate-200 hover:text-zoho-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                CCTV Packages
              </Link>

              <Link
                href="/projects"
                prefetch={true}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition ${
                  pathname === "/projects"
                    ? "text-zoho-blue dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                    : "text-slate-700 dark:text-slate-200 hover:text-zoho-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                Projects
              </Link>

              <Link
                href="/areas-we-cover"
                prefetch={true}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition ${
                  pathname === "/areas-we-cover"
                    ? "text-zoho-blue dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                    : "text-slate-700 dark:text-slate-200 hover:text-zoho-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                Areas We Cover
              </Link>

              <Link
                href="/about"
                prefetch={true}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition ${
                  pathname === "/about"
                    ? "text-zoho-blue dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                    : "text-slate-700 dark:text-slate-200 hover:text-zoho-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                prefetch={true}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition ${
                  pathname === "/contact"
                    ? "text-zoho-blue dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                    : "text-slate-700 dark:text-slate-200 hover:text-zoho-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-slate-200/80 dark:border-slate-700/80"
                title="Call P Selvam customer service"
              >
                <PhoneCall className="w-3.5 h-3.5 text-zoho-blue" />
                <span>{SITE_INFO.phoneDisplay}</span>
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zoho-blue to-blue-600 hover:from-blue-600 hover:to-zoho-blue text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 transition active:translate-y-0"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition min-w-[46px] min-h-[46px] flex items-center justify-center border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-zoho-blue"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN IMMERSIVE MOBILE NAVIGATION SHEET (FIXED PROPERLY) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-right duration-200"
        >
          {/* 1. Dedicated Mobile Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md flex-shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <Logo size={40} showText={true} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-zoho-blue"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* 2. Scrollable Menu Body */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
            {/* Top Quick Status Pill */}
            <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/60 flex items-center justify-between text-xs">
              <span className="font-semibold text-zoho-blue dark:text-blue-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zoho-green animate-pulse" />
                Swindon &amp; Wiltshire Coverage
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-300">
                24/7 Response
              </span>
            </div>

            {/* Navigation Links Group */}
            <div className="space-y-1.5 pt-1">
              <Link
                href="/"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <Home className="w-5 h-5 flex-shrink-0" />
                <span>Home</span>
              </Link>

              {/* Services Accordion Container */}
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-base font-bold text-slate-900 dark:text-white min-h-[48px]"
                >
                  <span className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>Our Services</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 text-slate-400 ${
                      mobileServicesAccordion ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesAccordion && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-200/60 dark:border-slate-800/60">
                    <Link
                      href="/services"
                      prefetch={true}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-zoho-blue dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                    >
                      <span>View All Services Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {SERVICES_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          prefetch={true}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-start gap-3 p-3 rounded-xl transition min-h-[48px] ${
                            isActive
                              ? "bg-blue-100 dark:bg-blue-950/80 text-zoho-blue font-bold"
                              : "hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          <div className={`p-2 rounded-xl border flex-shrink-0 mt-0.5 ${item.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-slate-900 dark:text-white">
                              {item.title}
                            </span>
                            <span className="block text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/cctv-packages"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/cctv-packages"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <Camera className="w-5 h-5 flex-shrink-0 text-zoho-blue" />
                <span>CCTV Packages (2, 4 &amp; 8 Cam)</span>
              </Link>

              <Link
                href="/projects"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/projects"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <Briefcase className="w-5 h-5 flex-shrink-0 text-purple-500" />
                <span>Projects &amp; Gallery</span>
              </Link>

              <Link
                href="/areas-we-cover"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/areas-we-cover"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <MapPin className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                <span>Areas We Cover</span>
              </Link>

              <Link
                href="/testimonials"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/testimonials"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <Star className="w-5 h-5 flex-shrink-0 text-amber-400" />
                <span>Customer Reviews</span>
              </Link>

              <Link
                href="/faq"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/faq"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <HelpCircle className="w-5 h-5 flex-shrink-0 text-blue-500" />
                <span>Frequently Asked Questions</span>
              </Link>

              <Link
                href="/blog"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/blog"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <BookOpen className="w-5 h-5 flex-shrink-0 text-rose-500" />
                <span>Electrical &amp; CCTV Guides</span>
              </Link>

              <Link
                href="/about"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/about"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <Info className="w-5 h-5 flex-shrink-0 text-slate-500" />
                <span>About P Selvam</span>
              </Link>

              <Link
                href="/contact"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold min-h-[48px] transition ${
                  pathname === "/contact"
                    ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                    : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-zoho-blue" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* 3. Dedicated Fixed Action Footer inside Drawer (No Collisions!) */}
          <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl flex-shrink-0 space-y-2.5">
            <Link
              href="/quote"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-zoho-blue to-blue-600 hover:from-blue-600 hover:to-zoho-blue text-white py-3.5 px-5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/25 min-h-[48px]"
            >
              <span>Get Free Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 py-3 px-3 rounded-xl font-bold text-xs text-slate-900 dark:text-white min-h-[46px]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-zoho-blue" />
                <span>Call {SITE_INFO.phoneDisplay}</span>
              </a>

              <a
                href={SITE_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-3 rounded-xl font-bold text-xs min-h-[46px] shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
