import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { BLOG_POSTS_DATA, SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Electrical & CCTV Guides & Advice | P Selvam Blog",
  description:
    "Practical guides and expert advice on choosing home CCTV, recognizing when you need a rewire, and the cost benefits of LED downlights in the UK.",
};

export default function BlogIndexPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <BookOpen className="w-4 h-4" />
            <span>Expert Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Guides &amp; Technical Advice
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Written by our certified UK electrical engineers and security specialists to help you make informed decisions for your property.
          </p>
        </div>

        {/* 3 Featured Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {BLOG_POSTS_DATA.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-soft hover:shadow-soft-hover border border-slate-200/80 dark:border-slate-800 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-4">
                  <span className="font-bold text-zoho-blue dark:text-blue-400 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-heading font-black text-xl text-slate-900 dark:text-white group-hover:text-zoho-blue dark:group-hover:text-blue-400 transition mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{post.publishDate}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-zoho-blue dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Consultation CTA */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Have a technical question about your property?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Speak to a certified engineer today. We can advise on cable routes, load requirements, and system design.
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
