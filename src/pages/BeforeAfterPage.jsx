import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, MapPin, CheckCircle2, ShieldCheck, 
  HelpCircle, Phone 
} from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function BeforeAfterPage() {
  return (
    <>
      <SEO 
        title="Before & After Decorating Transformations | Swindon & Wiltshire"
        description="Interactive before and after sliders demonstrating painting and scaffolding transformations in Swindon, Marlborough, and Cirencester."
        keywords="before after painting Swindon, decorating transformations, masonry before after, exterior render painting"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Visual Proof of Quality
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Interactive Before & After Transformations
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Drag the comparison handles below to inspect the transformation achieved on real residential and commercial properties across Swindon and Wiltshire.
          </p>
        </div>
      </section>

      {/* Multiple Comparison Sliders */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {PROJECTS.map((proj, idx) => (
            <div 
              key={proj.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge-zoho bg-navy-900 text-white text-[10px]">
                      {proj.categoryLabel}
                    </span>
                    <span className="text-xs font-bold text-brand-orange flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {proj.location}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">
                    Case Study #{idx + 1}: {proj.title}
                  </h2>
                </div>

                <div className="text-xs text-slate-500 shrink-0 sm:text-right">
                  <span>Duration: <strong className="text-navy-900">{proj.duration}</strong></span>
                  <span className="block text-[11px] text-slate-400">Paints: {proj.paintsUsed}</span>
                </div>
              </div>

              {/* Draggable Slider */}
              <BeforeAfterSlider
                beforeImage={proj.beforeImage}
                afterImage={proj.afterImage}
                title={proj.title}
                beforeLabel="BEFORE"
                afterLabel="AFTER (Sharmila Vel Ltd)"
              />

              {/* Case Study Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                <div className="md:col-span-8 text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>
                    <strong>Scope & Challenges:</strong> {proj.scope}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {proj.features.map((f, i) => (
                      <span key={i} className="bg-white border border-slate-200 px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-700">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-start md:justify-end">
                  <Link
                    to="/pricing-estimate"
                    className="px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors flex items-center gap-2"
                  >
                    <span>Get Similar Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-[#061325] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Start Your Property Revival
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display">
            Ready to See Your Property in Our Before & After Portfolio?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Book a complimentary site visit today. We will assess your surfaces, discuss colours, and issue an itemised fixed quote.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/pricing-estimate"
              className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-extrabold uppercase tracking-wider shadow-glow"
            >
              Instant Quote Calculator
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
            >
              Book In-Person Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
