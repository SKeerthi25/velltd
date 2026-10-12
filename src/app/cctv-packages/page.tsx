import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Star,
  ArrowRight,
  PhoneCall,
  HardDrive,
  Eye,
  Smartphone,
  HelpCircle,
} from "lucide-react";
import { PACKAGES_DATA, SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "CCTV Installation Packages Swindon | 2, 4 & 8 Camera 4K Systems",
  description:
    "Explore P Selvam's professional CCTV packages for Swindon homes and businesses. 4K Ultra HD ColorVu night vision, NVR hard drive storage, mobile apps, and zero monthly subscriptions.",
};

export default function CCTVPackagesPage() {
  const comparisonFeatures = [
    { name: "Camera Resolution", basic: "5MP Super HD (1920p)", standard: "4K Ultra HD (2160p)", premium: "4K Ultra HD Pro @ 25fps" },
    { name: "Night Vision Technology", basic: "Smart IR (30m Black/White)", standard: "ColorVu (24/7 Full-Colour)", premium: "ColorVu + 50m EXIR Strobe" },
    { name: "AI Human & Vehicle Detection", basic: "Standard Motion Grid", standard: "Deep Learning Smart AI", premium: "Deep Learning + Tripwire AI" },
    { name: "Dedicated Surveillance Storage", basic: "1TB WD Purple HDD", standard: "2TB WD Purple HDD", premium: "4TB WD Purple Pro HDD" },
    { name: "Zero Monthly Cloud Subscriptions", basic: true, standard: true, premium: true },
    { name: "Mobile Phone & Tablet Streaming", basic: true, standard: true, premium: true },
    { name: "Integrated Audio Recording", basic: true, standard: true, premium: true },
    { name: "Weatherproof Rating", basic: "IP67 Weatherproof", standard: "IP67 Turret Metal", premium: "IK10 Vandal + IP67 Metal" },
    { name: "Hardware & Labour Warranty", basic: "12 Months Warranty", standard: "24 Months Comprehensive", premium: "36 Months Comprehensive" },
    { name: "Free Full Handover & Training", basic: true, standard: true, premium: true },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Camera className="w-4 h-4" />
            <span>Turnkey Security Installations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Bespoke CCTV Packages
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            All systems include supply, complete professional cabling, local surveillance NVR recording, mobile setup, and zero monthly cloud subscription fees.
          </p>
        </div>

        {/* 3 Zoho Pricing-Style Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-white dark:bg-slate-900 border-2 border-zoho-blue shadow-2xl relative lg:-translate-y-2 ring-4 ring-blue-500/10"
                  : "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-hover"
              }`}
            >
              <div>
                {/* Popular Pill */}
                {pkg.popular && (
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-zoho-blue to-blue-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full mb-4 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">
                    {pkg.name}
                  </h2>
                </div>

                <span className="text-xs font-bold text-zoho-blue dark:text-blue-400 uppercase tracking-wider block mb-3">
                  {pkg.badge}
                </span>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Price Display: Zoho "Request Quote" */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-6">
                  <div className="text-xs uppercase font-bold text-slate-500">
                    Transparent Estimate
                  </div>
                  <div className="text-xl sm:text-2xl font-heading font-black text-slate-900 dark:text-white mt-0.5">
                    Fixed Written Quote
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Based on exact cable routing &amp; camera positions
                  </div>
                </div>

                {/* Key Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    What’s Included:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <Link
                  href="/quote"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3.5 px-6 rounded-xl transition shadow-md ${
                    pkg.popular
                      ? "bg-zoho-blue hover:bg-zoho-blue-dark text-white shadow-blue-500/25"
                      : "bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900"
                  }`}
                >
                  <span>Request Quote for {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-zoho-blue py-2 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Questions? Call {SITE_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-20 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Side-by-Side Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Package Feature Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Compare camera optics, storage, smart capabilities, and warranties across all three tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-bold uppercase text-slate-500">
                  <th className="py-4 px-4">Feature</th>
                  <th className="py-4 px-4 text-center">Basic (2-Cam)</th>
                  <th className="py-4 px-4 text-center text-zoho-blue dark:text-blue-400">
                    Standard (4-Cam)
                  </th>
                  <th className="py-4 px-4 text-center">Premium (8-Cam)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs sm:text-sm">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                      {row.name}
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-600 dark:text-slate-300">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        row.basic
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-slate-900 dark:text-white bg-blue-50/30 dark:bg-blue-950/20">
                      {typeof row.standard === "boolean" ? (
                        row.standard ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        row.standard
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-600 dark:text-slate-300">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        row.premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Not sure which package fits your property?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            We provide free property surveys across Swindon, Royal Wootton Bassett, Cirencester, Faringdon, and Marlborough.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto bg-white text-zoho-blue hover:bg-blue-50 font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition"
            >
              Request Free Site Survey
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
