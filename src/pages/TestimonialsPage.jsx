import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, 
  MapPin, AlertCircle, Sparkles, ExternalLink 
} from 'lucide-react';
import { TESTIMONIALS, REVIEW_METRICS } from '../data/testimonialsData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <SEO 
        title="Client Reviews & Testimonials | Swindon & Wiltshire"
        description="Read customer experiences and client reviews for SHARMILA VEL LTD painting and scaffolding services across Swindon and Wiltshire."
        keywords="Sharmila Painting reviews, painters Swindon reviews, scaffolding feedback Wiltshire, Checkatrade painters Swindon"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Client Reputation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Customer Reviews & Feedback
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See how we treat our clients, their properties, and their commercial facilities.
          </p>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-6 bg-amber-50/80 border-b border-amber-200 text-xs text-amber-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Transparency Notice:</strong> {REVIEW_METRICS.notice}
            </span>
          </div>
          <span className="badge-zoho bg-white text-amber-800 border border-amber-300 hidden sm:inline-flex">
            Verified Standards
          </span>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((rev) => (
              <div
                key={rev.id}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {rev.platform}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="font-extrabold text-sm text-navy-900">
                    {rev.author}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-orange" />
                    <span>{rev.location}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-brand-orange mt-1">
                    Service: {rev.service}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a review box */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-orange flex items-center justify-center mx-auto">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              Have We Completed Work for You?
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              We value honest feedback from every homeowner and project manager. Contact us directly or leave a verified Google Review.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors"
              >
                <span>Submit Client Feedback</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
