import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { BLOG_POSTS_DATA, SITE_INFO } from "@/data/siteData";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS_DATA.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | P Selvam Guide`,
    description: post.metaDesc,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS_DATA.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS_DATA.filter((p) => p.slug !== post.slug);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zoho-blue dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-bold text-zoho-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200 dark:border-blue-800">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-zoho-blue pl-4 py-1">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body Card */}
        <article className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-16">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-900 dark:text-white pt-2">
                {sec.sectionHeading}
              </h2>

              {sec.text.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {sec.bulletPoints && (
                <div className="space-y-2.5 my-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
                  {sec.bulletPoints.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Author Sign-off */}
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span className="block font-bold text-slate-900 dark:text-white">
                Technical Editorial Team
              </span>
              <span>{SITE_INFO.companyName} • Swindon, Wiltshire</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-zoho-blue" />
              <span>BS 7671 Verified</span>
            </div>
          </div>
        </article>

        {/* Next Guides Carousel */}
        <div className="mb-16">
          <h3 className="text-xl font-heading font-black text-slate-900 dark:text-white mb-6">
            Related Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherPosts.map((other) => (
              <div
                key={other.slug}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-zoho-blue uppercase tracking-wider block mb-2">
                    {other.category}
                  </span>
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2 line-clamp-2">
                    <Link href={`/blog/${other.slug}`}>{other.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">{other.excerpt}</p>
                </div>
                <Link
                  href={`/blog/${other.slug}`}
                  className="text-xs font-bold text-zoho-blue dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Need an expert opinion on your electrical or security setup?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Contact P Selvam today. We will gladly assess your property and provide an honest, itemised recommendation.
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
