"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Zap,
  Camera,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import Logo from "./Logo";
import { SITE_INFO } from "@/data/siteData";

export default function Footer() {
  const openCookieSettings = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open_cookie_settings"));
    }
  };

  return (
    <footer className="bg-[#0A1128] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Regulatory Information (Takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Logo size={48} showText={true} inverted={true} />
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              P SELVAM LTD is Swindon’s trusted specialist in certified electrical installations, 4K CCTV surveillance systems, architectural lighting, and domestic power upgrades.
            </p>

            <div className="p-4 rounded-2xl bg-[#101D42]/80 border border-blue-900/40 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2 text-blue-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>UK Legal Company Registration</span>
              </div>
              <p>
                <strong>Company Name:</strong> {SITE_INFO.companyName}
              </p>
              <p>
                <strong>Registered in England &amp; Wales:</strong> Company No.{" "}
                <span className="text-white font-mono font-bold">
                  {SITE_INFO.companyNumber}
                </span>
              </p>
              <p className="flex items-start gap-1.5 pt-1 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Registered Office:</strong> {SITE_INFO.registeredOffice}
                </span>
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Services</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/services/electrical-installation"
                  className="hover:text-white transition flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition">
                    Electrical Installation
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cctv-installation"
                  className="hover:text-white transition flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition">
                    CCTV Installation &amp; Service
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/light-fittings"
                  className="hover:text-white transition flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition">
                    Light Fittings &amp; LED
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/power-sockets"
                  className="hover:text-white transition flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition">
                    Power Sockets &amp; USB
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cctv-packages"
                  className="hover:text-white transition flex items-center gap-1 group font-medium text-blue-400"
                >
                  <span>CCTV Packages (2, 4 &amp; 8 Cam)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-we-cover"
                  className="hover:text-white transition flex items-center gap-1 group"
                >
                  <span>Areas We Cover</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Camera className="w-4 h-4 text-blue-400" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About P Selvam
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Recent Projects &amp; Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQs &amp; Help
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Guides &amp; Electrical Advice
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact &amp; Emergency Callout
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="hover:text-white flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-xl bg-blue-900/40 text-blue-400 group-hover:bg-zoho-blue group-hover:text-white transition">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Direct Phone</span>
                    <span className="font-semibold text-white">
                      {SITE_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="hover:text-white flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-xl bg-blue-900/40 text-blue-400 group-hover:bg-zoho-blue group-hover:text-white transition">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Public Email</span>
                    <span className="font-semibold text-white">
                      {SITE_INFO.email}
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-medium mb-0.5">Opening Hours:</span>
                  <span className="block text-slate-300">Mon – Fri: 09:00 – 18:00</span>
                  <span className="block text-slate-400">Sat – Sun: 10:00 – 16:00</span>
                </div>
              </li>
            </ul>

            <div className="mt-5 pt-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center w-full bg-zoho-blue hover:bg-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md transition"
              >
                Request Free Online Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Cookie Settings */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {SITE_INFO.copyrightYear} {SITE_INFO.companyName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition">
              Terms &amp; Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-slate-300 transition"
            >
              Cookie Policy
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-slate-400 hover:text-white underline underline-offset-2 transition cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
