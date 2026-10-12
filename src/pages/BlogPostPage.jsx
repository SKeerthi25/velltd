import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, ArrowLeft, ArrowRight, User, Calendar, 
  Share2, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <>
      <SEO 
        title={`${post.title} | Sharmila Vel Ltd Guide`}
        description={post.excerpt}
        keywords="painting tips UK, decorating guide, Swindon painters, scaffolding hire"
        ogType="article"
        ogImage={post.image}
      />

      {/* Article Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-brand-orange transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="badge-zoho bg-brand-orange text-white text-[10px]">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-400">{post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {post.summary}
          </p>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 mb-12 h-72 sm:h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Sections */}
          <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight font-display">
                  {section.heading}
                </h2>
                <div className="whitespace-pre-line text-slate-600 text-sm leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Author & Assurance Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Written by
              </span>
              <div className="text-base font-extrabold text-navy-900">
                {post.author}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {COMPANY.name} • Registered in England & Wales Co. No. {COMPANY.companyNumber}
              </p>
            </div>

            <Link
              to="/pricing-estimate"
              className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-glow shrink-0"
            >
              Get Free Project Estimate
            </Link>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Recommended Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map(rel => (
                  <Link
                    key={rel.slug}
                    to={`/blog/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange transition-all group block shadow-sm"
                  >
                    <span className="badge-zoho bg-slate-100 text-slate-700 text-[10px] mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-bold text-sm text-navy-900 group-hover:text-brand-orange transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <span className="text-xs font-semibold text-brand-orange flex items-center gap-1 mt-3">
                      <span>Read guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
