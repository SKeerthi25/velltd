import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Star, CheckCircle, ShieldCheck, MessageSquare, ArrowRight, PhoneCall } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";
import { TESTIMONIALS_DATA, SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | P Selvam Swindon",
  description:
    "Read genuine customer reviews for P Selvam Electrical and CCTV in Swindon, Royal Wootton Bassett, Cirencester, and Marlborough. 5-star certified service.",
};

export default function TestimonialsPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>5-Star Reputation in Wiltshire</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Customer Reviews &amp; Testimonials
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            See how P Selvam delivers clean, punctual, and certified electrical contracting and CCTV security for home and business owners across Swindon.
          </p>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="mb-20">
          <TestimonialSlider />
        </div>

        {/* Placeholder Transparency Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 text-center leading-relaxed">
          <strong>Transparency Notice [PLACEHOLDER]:</strong> The reviews below reflect genuine project case scenarios collected from regional jobs across Swindon and surrounding postcodes. Additional verified Google/Trustpilot reviews will sync here automatically upon live customer sign-offs.
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-soft-hover border border-slate-200/80 dark:border-slate-800 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified [PLACEHOLDER]</span>
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                  {rev.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {rev.location} • <span className="text-zoho-blue dark:text-blue-400">{rev.service}</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">{rev.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Experience our 5-star service for yourself
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Get in touch today for a free on-site survey and clear, itemised quote for your property.
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
