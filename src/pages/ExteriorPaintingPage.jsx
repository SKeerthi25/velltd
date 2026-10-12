import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, CheckCircle2, Check, ArrowRight, ShieldCheck, 
  Sparkles, Phone, Layers, Umbrella, AlertTriangle 
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';
import QuoteCalculator from '../components/QuoteCalculator';

export default function ExteriorPaintingPage() {
  const service = SERVICES.find(s => s.slug === 'exterior-painting') || SERVICES[1];

  return (
    <>
      <SEO 
        title="Exterior Painting & Weatherproofing Swindon & Wiltshire | Sharmila Vel Ltd"
        description="High-performance exterior masonry painting, render rejuvenation and timber coating in Swindon and Wiltshire. Safe scaffolding access included."
        keywords="exterior painting Wiltshire, exterior painters Swindon, render painting, masonry coatings, house painting Swindon"
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
                {service.title} & Weatherproof Protection
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
                  <span>Calculate Exterior Quote</span>
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

      {/* Scaffolding + Exterior Advantage Banner */}
      <section className="py-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">The All-In-One Advantage</span>
              <p className="text-xs sm:text-sm text-slate-200">
                We erect our own certified scaffolding platforms so exterior projects start and finish without third-party delays.
              </p>
            </div>
          </div>
          <Link
            to="/services/scaffolding-services"
            className="text-xs font-bold text-brand-orange hover:underline shrink-0"
          >
            Explore Scaffolding Specs →
          </Link>
        </div>
      </section>

      {/* Scope & Inclusions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-zoho bg-orange-100 text-brand-orange">
                Engineered for British Weather
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
                Long-Lasting Masonry & Facade Protection
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                UK driving rain and frost thaw cycles quickly break down budget exterior paints. We use breathable silicone, pliolite and micro-porous masonry coatings that prevent rainwater ingress while allowing damp interior moisture to escape naturally.
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
                <h3 className="text-xl font-bold text-navy-900">Key Exterior Benefits</h3>
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

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90">
                <h3 className="font-extrabold text-navy-900 text-base mb-4">
                  Recent Exterior Projects
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {service.gallery.map((img, i) => (
                    <div key={i} className="h-32 rounded-xl overflow-hidden shadow-sm">
                      <img src={img} alt="Exterior project" className="w-full h-full object-cover" />
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
                  Schedule an Exterior Site Survey
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We evaluate mortar joints, render conditions, and access requirements before providing a comprehensive fixed quotation.
                </p>
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold text-center block transition-all shadow-glow"
                >
                  Book Free Exterior Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-zoho bg-navy-900 text-white mb-2">Our Process</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
              Exterior Execution Timeline
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

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>
    </>
  );
}
