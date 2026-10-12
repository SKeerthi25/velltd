import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Camera,
  Lightbulb,
  Plug,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  PhoneCall,
} from "lucide-react";
import { SERVICES_DATA, SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Electrical & CCTV Services in Swindon & Wiltshire",
  description:
    "Comprehensive electrical contractor and 4K CCTV installer in Swindon: full rewires, 18th Edition fuse boards, smart security cameras, architectural LED lighting, and outdoor sockets.",
};

const ICONS = {
  "electrical-installation": Zap,
  "cctv-installation": Camera,
  "light-fittings": Lightbulb,
  "power-sockets": Plug,
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <ShieldCheck className="w-4 h-4" />
            <span>British Standards BS 7671 Certified</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Electrical &amp; CCTV Solutions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Delivering precision contracting for homeowners, landlords, and commercial facilities across Swindon and the surrounding counties of Wiltshire, Gloucestershire, Oxfordshire, and Berkshire.
          </p>
        </div>

        {/* 4 Core Services Grid (Zoho SaaS Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES_DATA.map((service) => {
            const Icon = ICONS[service.id as keyof typeof ICONS] || Zap;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-soft hover:shadow-soft-hover border border-slate-200/80 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 border border-blue-100 dark:border-blue-900/60 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-3 group-hover:text-zoho-blue dark:group-hover:text-blue-400 transition">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.whatsIncluded.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-zoho-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                  >
                    <span>View Service Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Link>

                  <Link
                    href="/quote"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-zoho-blue hover:text-white transition"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CCTV Packages Banner Box */}
        <div className="bg-gradient-to-r from-[#0A1128] via-[#101D42] to-[#0A1128] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-blue-900/50 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 mb-3 inline-block">
              Turnkey Security Bundles
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight mb-3">
              Need a Complete CCTV Camera Package?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our transparent 2-Camera, 4-Camera, and 8-Camera 4K ColorVu packages, complete with surveillance-grade NVR storage, phone apps, and professional concealed installation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/cctv-packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zoho-blue hover:bg-blue-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 transition"
            >
              <span>Compare CCTV Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${SITE_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition"
            >
              <PhoneCall className="w-4 h-4 text-zoho-blue" />
              <span>Call {SITE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
