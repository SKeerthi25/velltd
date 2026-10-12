import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, User, BookOpen, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function BlogPage() {
  return (
    <>
      <SEO 
        title="Decorating Guides & Painting Advice | Sharmila Vel Ltd Blog"
        description="Expert painting and scaffolding advice from Sharmila Vel Ltd. Repainting timelines, exterior paint selection for UK climate, and scaffolding regulations."
        keywords="painting advice Swindon, how often to repaint, exterior paint UK weather, scaffolding regulations Swindon"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Expert Decorating Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Painting, Decorating & Access Advice
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Practical advice, UK weather considerations, and property maintenance tips from our seasoned team of decorators and scaffolders in Swindon.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-zoho bg-navy-900/90 text-white text-[10px] backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h2 className="font-extrabold text-navy-900 text-base leading-snug group-hover:text-brand-orange transition-colors mb-3">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    By {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
