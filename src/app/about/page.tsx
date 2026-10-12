import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Zap,
  Camera,
  CheckCircle2,
  Users,
  Target,
  HeartHandshake,
  ArrowRight,
  PhoneCall,
  FileCheck,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About P Selvam LTD | Certified Electricians & CCTV in Swindon",
  description:
    "Learn about P SELVAM LTD (Company No. 17510506). Our story, director introduction, commitment to BS 7671 safety, and precision CCTV security in Swindon & Wiltshire.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <ShieldCheck className="w-4 h-4" />
            <span>Integrity • Safety • Excellence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            About P SELVAM LTD
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Registered in England &amp; Wales (Company No. {SITE_INFO.companyNumber}), P Selvam is dedicated to delivering certified electrical works and enterprise-grade 4K security installations for Swindon homes and commercial enterprises.
          </p>
        </div>

        {/* Story & Mission (Alternating Zoho Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Our Founding Story
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white leading-tight">
              Raising the Benchmark for Electrical &amp; CCTV Standards in Swindon
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              P SELVAM LTD was established with a singular objective: to eliminate the ambiguity and frustration often associated with home trades. We recognized that homeowners and commercial operators throughout Swindon and Wiltshire required a contractor who could seamlessly bridge traditional high-voltage electrical installations (consumer units, rewires, cooker circuits) with modern digital security systems (4K AI cameras, NVRs, smartphone streaming).
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Operating from our registered base at 91A Faringdon Road, we take pride in clean cable management, transparent itemised pricing, and issuing complete safety compliance documentation after every assignment.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  Our Mission
                </h3>
                <span className="text-xs text-slate-400">Our core driving focus</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide properties across Wiltshire and neighbouring counties with impeccably engineered electrical networks and crystal-clear surveillance systems that safeguard lives, protect valuable assets, and deliver total peace of mind—free of hidden charges or ongoing monthly fees.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>BS 7671 Certified</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Cloud Subscriptions</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Itemised Quotations</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>24/7 Urgent Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              The Principles That Guide Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Our Core Company Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft">
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white mb-2">
                Uncompromising Safety
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Electricity carries profound life-safety consequences. We never cut corners, reuse sub-standard materials, or compromise on calibrated testing and earth-fault protection.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft">
              <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue w-fit mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white mb-2">
                Clear Technical Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We explain faults in plain UK English without bewildering jargon. Every estimate clearly breaks down cable runs, camera models, and compliance paperwork.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft">
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 w-fit mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white mb-2">
                Respect For Your Home
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We treat your property with utmost respect: employing dust-extraction when drilling, routing cables through lofts or neat conduit, and cleaning work areas thoroughly.
              </p>
            </div>
          </div>
        </div>

        {/* Director Introduction Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-zoho-blue to-blue-400 text-white flex items-center justify-center mx-auto md:mx-0 text-3xl font-heading font-black shadow-lg shadow-blue-500/20 mb-4">
                PS
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                P. Selvam
              </h3>
              <span className="text-xs text-zoho-blue dark:text-blue-400 font-bold block mb-1">
                Managing Director &amp; Lead Systems Engineer
              </span>
              <span className="text-[11px] text-slate-400">
                P SELVAM LTD • Registered in England &amp; Wales
              </span>
            </div>

            <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-6 md:pt-0 md:pl-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                &ldquo;When founding P SELVAM LTD, my goal was to build a specialist contracting firm that clients can trust without reservation. Whether you need an emergency electrician to isolate a burning circuit at midnight or a state-of-the-art 4K CCTV installation to secure your family home, our commitment remains constant: precision engineering, absolute honesty, and work that stands the test of time.&rdquo;
              </p>
              <p>
                &ldquo;Every team member is trained to uphold the highest safety benchmarks set by the 18th Edition wiring regulations. We look forward to working with you.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section (Clearly Marked Placeholders) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Accreditations &amp; Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Industry Certifications &amp; Compliance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              All electrical works strictly conform to current UK Building Regulations and British Standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
              <ShieldCheck className="w-8 h-8 text-zoho-blue mx-auto mb-2" />
              <div className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                BS 7671 (18th Edition)
              </div>
              <p className="text-[11px] text-slate-500">
                Wiring Regulations Compliant
              </p>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 block mt-2 font-mono">
                [PLACEHOLDER: Cert ID 2382]
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
              <Award className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <div className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                Part P Building Regs
              </div>
              <p className="text-[11px] text-slate-500">
                Domestic Electrical Safety
              </p>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 block mt-2 font-mono">
                [PLACEHOLDER: Competent Scheme]
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
              <Camera className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                ICO Data Protection
              </div>
              <p className="text-[11px] text-slate-500">
                CCTV Privacy Compliance
              </p>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 block mt-2 font-mono">
                [PLACEHOLDER: Registration Pending]
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
              <ShieldCheck className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <div className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                Public Liability
              </div>
              <p className="text-[11px] text-slate-500">
                £2,000,000 Comprehensive Cover
              </p>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 block mt-2 font-mono">
                [PLACEHOLDER: Policy Reference]
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Partner with Swindon’s dedicated electrical &amp; security specialists
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Speak directly with our team to arrange an on-site survey or discuss your project specifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto bg-white text-zoho-blue hover:bg-blue-50 font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition"
            >
              Get Free Online Quote
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
