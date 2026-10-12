import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  Eye,
  ShieldAlert,
  Smartphone,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { SERVICES_DATA, SITE_INFO } from "@/data/siteData";

const service = SERVICES_DATA.find((s) => s.slug === "cctv-installation")!;

export const metadata: Metadata = {
  title: "CCTV Installation & Servicing Swindon | 4K ColorVu & App Viewing",
  description:
    "Professional 4K Ultra HD CCTV installation across Swindon & Wiltshire. ColorVu 24/7 full-colour night vision, mobile phone streaming, zero monthly cloud fees, and NVR setup.",
};

export default function CCTVInstallationPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-zoho-blue transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-zoho-blue transition">Services</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-bold">{service.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
              <Camera className="w-4 h-4" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-zoho-blue dark:text-blue-400 mb-6">
              {service.heroTagline}
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {service.fullDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/cctv-packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zoho-blue hover:bg-zoho-blue-dark text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition"
              >
                <span>Browse CCTV Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm px-7 py-4 rounded-xl transition"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              High Performance Hardware
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Why Install CCTV With P Selvam?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-hover transition"
              >
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue w-fit mb-4">
                  {idx === 0 ? <Eye className="w-6 h-6" /> : idx === 1 ? <ShieldAlert className="w-6 h-6" /> : idx === 2 ? <Smartphone className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Turnkey Security Equipment
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Included in Every CCTV Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whatsIncluded.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Stepper */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Discreet &amp; Professional
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
              From Site Survey to Smartphone App Handover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.processSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-heading text-zoho-blue/20 dark:text-blue-400/20 mb-2 block">
                    {s.step}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Surveillance Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white mt-1">
              CCTV FAQs
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {service.faqs.map((f, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800"
              >
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-zoho-blue" />
                  <span>{f.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Get 24/7 crystal-clear protection for your home
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Speak to P Selvam’s security engineers today. We’ll design the ideal camera coverage for your property boundaries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cctv-packages"
              className="w-full sm:w-auto bg-white text-zoho-blue hover:bg-blue-50 font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition"
            >
              View CCTV Packages
            </Link>
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition"
            >
              Call {SITE_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
