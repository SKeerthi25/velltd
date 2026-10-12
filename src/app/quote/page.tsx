import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, Clock, CheckCircle2, PhoneCall } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Get a Free Quote | Electrical & CCTV Installations Swindon",
  description:
    "Request a free, no-obligation written quote for electrical rewiring, consumer units, 4K CCTV camera systems, LED lighting, or outdoor sockets in Swindon and surrounding areas.",
};

export default function QuotePage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <FileText className="w-4 h-4" />
            <span>Fast, Itemised Written Estimates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Request Your Free Quote
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Complete our simple 4-step quote assistant below. Our engineers will review your property specifications and provide a transparent, fixed estimate with zero sales pressure.
          </p>
        </div>

        {/* 3 Trust Signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center shadow-sm">
            <Clock className="w-5 h-5 text-zoho-blue mx-auto mb-1.5" />
            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              2–4 Hour Response
            </div>
            <div className="text-[11px] text-slate-500">During business hours</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center shadow-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              No Hidden Charges
            </div>
            <div className="text-[11px] text-slate-500">Parts, labour &amp; testing</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              100% Free &amp; No Obligation
            </div>
            <div className="text-[11px] text-slate-500">Valid for 30 days</div>
          </div>
        </div>

        {/* The Multi-Step Interactive Form */}
        <div className="mb-16">
          <QuoteForm />
        </div>

        {/* Need Urgent Help Note */}
        <div className="text-center p-6 rounded-3xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 max-w-xl mx-auto text-xs sm:text-sm">
          <p className="text-slate-700 dark:text-slate-300">
            Have an electrical emergency or burning smell? Don&apos;t wait for a quote form. Call our 24/7 emergency dispatch immediately on{" "}
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="text-zoho-blue dark:text-blue-400 font-bold underline"
            >
              {SITE_INFO.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
