import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, CheckCircle2, ArrowRight, Phone, ShieldCheck, 
  Sparkles, Building2, Home 
} from 'lucide-react';
import { AREAS_COVERED } from '../data/areasData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function AreasCoveredPage() {
  return (
    <>
      <SEO 
        title="Areas We Cover | Swindon, Wiltshire, Oxfordshire & Gloucestershire"
        description="Local painting, decorating, and scaffolding services across Swindon, Marlborough, Chippenham, Cirencester, Faringdon, and Oxford. Prompt free surveys."
        keywords="painters and decorators Swindon, scaffolding Swindon, exterior painting Wiltshire, painters Cirencester, decorators Marlborough"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Regional Coverage
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Areas We Cover Across the South West & M4 Corridor
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Headquartered at <strong>{COMPANY.addressShort}</strong>, we provide prompt on-site surveys, responsive scheduling, and flawless painting and scaffolding throughout our regional service area.
          </p>
        </div>
      </section>

      {/* Regional Grid Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {AREAS_COVERED.map((area, idx) => (
            <div
              key={area.id}
              id={area.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Details (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="badge-zoho bg-navy-900 text-white text-[11px]">
                    {area.region}
                  </span>
                  <span className="text-xs font-bold text-slate-500 font-mono">
                    Postcodes: {area.postcodes}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-display flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-brand-orange shrink-0" />
                  <span>{area.name}</span>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {area.heroDescription}
                </p>

                {/* Popular districts */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Key Neighborhoods & Towns Serviced:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.popularNeighborhoods.map((n, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services available in this area */}
                <div className="pt-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Available Services in {area.name}:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {area.servicesAvailable.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic pt-2">
                  {area.localHighlights}
                </p>
              </div>

              {/* Right CTA Box (4 cols) */}
              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-sm text-navy-900">
                  Book a Free Survey in {area.name.split(' ')[0]}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our surveyor can typically visit your property within 24 to 48 hours to measure surfaces and assess scaffold platforms.
                </p>

                <div className="space-y-2.5 pt-1">
                  <Link
                    to="/pricing-estimate"
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold text-center block transition-all shadow-glow"
                  >
                    Calculate Local Quote
                  </Link>

                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-bold text-center block transition-colors"
                  >
                    Call {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Don't see your area banner */}
      <section className="py-16 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl font-bold font-display">
            Don't See Your Exact Village or Town Listed?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            If your property is within a 35-mile radius of Swindon, we almost certainly cover it. Call our team to confirm availability.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider"
            >
              Enquire About Your Postcode
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
