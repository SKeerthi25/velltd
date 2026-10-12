import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Paintbrush, CheckCircle2, Check, ArrowRight, ShieldCheck, 
  Sparkles, Phone, Clock, FileText, ChevronRight 
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';
import QuoteCalculator from '../components/QuoteCalculator';

export default function InteriorPaintingPage() {
  const service = SERVICES.find(s => s.slug === 'interior-painting') || SERVICES[0];

  return (
    <>
      <SEO 
        title={`${service.title} Swindon & Wiltshire | Sharmila Vel Ltd`}
        description="Precision interior painting & decorating in Swindon, Marlborough, Cirencester. Walls, ceilings, woodwork, dustless sanding, premium trade paints."
        keywords="interior painting Swindon, painters and decorators Swindon, interior decorators Wiltshire, room painting, woodwork glossing"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="badge-zoho bg-brand-orange text-white text-xs">
                {service.badge}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
                {service.title} & Impeccable Decorating
              </h1>
              <p className="text-amber-400 font-bold text-sm sm:text-base">
                {service.subtitle}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/pricing-estimate"
                  className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow flex items-center gap-2"
                >
                  <span>Calculate Interior Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Scope & Inclusions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-zoho bg-orange-100 text-brand-orange">
                Precision Craftsmanship
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
                What Our Interior Painting Package Encompasses
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe that more than 70% of an award-worthy paint finish lies in meticulous substrate preparation. Our team strips loose paint, fills settling cracks, and caulks joints with flexible acrylic sealant before opening any topcoat can.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-bold text-navy-900">Why Homeowners Love Our Interior Finish</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                      <h4 className="font-bold text-xs text-navy-900 mb-1">{b.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Image Gallery & Quote CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90">
                <h3 className="font-extrabold text-navy-900 text-base mb-4">
                  Interior Project Gallery
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {service.gallery.map((img, i) => (
                    <div key={i} className="h-32 rounded-xl overflow-hidden shadow-sm">
                      <img src={img} alt="Interior work" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-navy-950 text-white border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Public Liability Insured</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Get Your Free Written Quote Today
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We provide free site visits across Swindon and nearby towns. Transparent, fixed written estimates within 24 to 48 hours.
                </p>
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold text-center block transition-all shadow-glow"
                >
                  Book In-Person Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-zoho bg-navy-900 text-white mb-2">Our Method</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
              Step-by-Step Interior Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-brand-orange font-display block mb-2">{step.step}</span>
                <h4 className="font-bold text-xs text-navy-900 mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>
    </>
  );
}
