import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, CheckCircle2, Check, ArrowRight, HardHat, 
  FileCheck, Phone, Layers, AlertCircle, Sparkles, Building2 
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';
import QuoteCalculator from '../components/QuoteCalculator';

export default function ScaffoldingPage() {
  const service = SERVICES.find(s => s.slug === 'scaffolding-services') || SERVICES[4];

  return (
    <>
      <SEO 
        title="Scaffolding Services & Hire Swindon & Wiltshire | Sharmila Vel Ltd"
        description="Certified scaffolding hire, erection, dismantle and safety compliance in Swindon and Wiltshire. Domestic towers, commercial scaffolding, TG20:21 compliant."
        keywords="scaffolding Swindon, scaffolding hire Wiltshire, access towers Swindon, temporary roof scaffolding, commercial scaffolding Swindon"
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
                Certified Scaffolding Erection & Hire
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
                  <span>Calculate Scaffolding Hire</span>
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

      {/* Safety & Compliance Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-zoho bg-orange-100 text-brand-orange">
                Strict Statutory Compliance
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
                Safe, Certified Access Solutions Across Wiltshire
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you are a roofing contractor needing access for tile replacement, a property owner embarking on an extension, or booking a combined painting and access package, our scaffolders erect safe, solid, and fully certified platforms tailored to your building.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Compliance Box */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 space-y-2 mt-4">
                <div className="font-bold text-navy-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  <span>TG20:21 & NASC Operational Standards</span>
                </div>
                <p>
                  Every scaffolding configuration is checked against TG20:21 operational design criteria. We supply full Handover Certificates, Scafftags, and conduct statutory 7-day safety inspections in compliance with the UK Work at Height Regulations 2005.
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  Public liability insurance coverage in full effect [Insert details if applicable].
                </p>
              </div>

              {/* Benefits */}
              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-bold text-navy-900">Why Contractors & Homeowners Choose Our Scaffolding</h3>
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
                  Scaffolding Erected by Our Team
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {service.gallery.map((img, i) => (
                    <div key={i} className="h-32 rounded-xl overflow-hidden shadow-sm">
                      <img src={img} alt="Scaffolding installation" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-navy-950 text-white border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider">
                  <HardHat className="w-4 h-4" />
                  <span>Prompt Erection & Dismantle</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Request Scaffolding Survey & Hire
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We calculate heights, tie points, pavement licences, and provide a transparent hire quote within 24 hours.
                </p>
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold text-center block transition-all shadow-glow"
                >
                  Book Scaffolding Survey
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
            <span className="badge-zoho bg-navy-900 text-white mb-2">Scaffolding Workflow</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
              Safe Erection & Statutory Handover
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
