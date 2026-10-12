import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, PhoneCall, ArrowRight, MessageSquare } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | P Selvam Electrical & CCTV",
  description:
    "Common questions answered about CCTV installation, domestic rewiring, fuse boxes, warranties, emergency response, and free quotes across Swindon.",
};

export default function FAQPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions? We’ve Got Answers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Everything you need to know about our electrical compliance, 4K CCTV systems, cable management, warranties, and emergency callouts.
          </p>
        </div>

        {/* Accordion Component with all categories */}
        <div className="mb-20">
          <FAQAccordion />
        </div>

        {/* Have More Questions Box */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800 text-center max-w-3xl mx-auto mb-16">
          <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/60 text-zoho-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-2">
            Have a question not listed here?
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-lg mx-auto">
            Our Swindon engineering team is happy to answer technical questions about your electrical setup or CCTV layout.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SITE_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition"
            >
              <span>Ask via WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm px-6 py-3 rounded-xl transition"
            >
              <span>Send an Email</span>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Ready to arrange a site visit or quote?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Get an itemised estimate for your property with no hidden charges.
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
