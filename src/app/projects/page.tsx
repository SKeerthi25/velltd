import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import ProjectLightbox from "@/components/ProjectLightbox";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Projects & Gallery | Electrical & CCTV Installations Swindon",
  description:
    "View recent domestic and commercial electrical rewires, 4K CCTV camera installations, architectural LED downlights, and outdoor power projects in Swindon & Wiltshire.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-4 h-4" />
            <span>Proven Craftsmanship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Recent Projects &amp; Gallery
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore our verified installations throughout Swindon, Marlborough, Cirencester, Faringdon, and Royal Wootton Bassett. Click any project to inspect technical specifications.
          </p>
        </div>

        {/* Filterable Grid with Modal Lightbox */}
        <div className="mb-20">
          <ProjectLightbox />
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Want results like these on your property?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tell us about your project requirements and receive a clean, itemised quote from our certified team.
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
