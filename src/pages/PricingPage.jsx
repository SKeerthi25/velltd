import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, Check, ShieldCheck, HelpCircle, Phone, 
  ArrowRight, Sparkles, AlertCircle, FileText 
} from 'lucide-react';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';
import QuoteCalculator from '../components/QuoteCalculator';

export default function PricingPage() {
  const samplePricing = [
    {
      service: "Single Room Interior (Walls & Ceiling)",
      range: "£350 – £550",
      typicalDuration: "1 – 2 days",
      includes: "Plaster crack repairs, caulking, 2 coats washable trade emulsion, furniture & floor masking."
    },
    {
      service: "Full 3-Bed Semi Interior (All Rooms & Woodwork)",
      range: "£2,200 – £3,400",
      typicalDuration: "5 – 7 days",
      includes: "All walls, ceilings, skirtings, doors, dustless sanding, complete masking, end-of-day clean."
    },
    {
      service: "Exterior Render Painting (Semi-Detached)",
      range: "£1,600 – £2,400",
      typicalDuration: "3 – 5 days",
      includes: "Biocide wash, masonry stabiliser, 2 coats weather-resistant breathable masonry finish."
    },
    {
      service: "Scaffolding Access Tower (Chimney or Gable)",
      range: "£450 – £750",
      typicalDuration: "Erected in 1 day",
      includes: "TG20:21 design, erection, 4-week hire, safety gates, handover certificate, strike-down."
    },
    {
      service: "Combined Exterior Painting + Full Scaffolding Hire",
      range: "£2,400 – £3,800",
      typicalDuration: "5 – 8 days",
      includes: "Full scaffolding wrap-around, masonry repair, high-level painting, 15% combined package discount."
    }
  ];

  return (
    <>
      <SEO 
        title="Pricing Guide & Free Estimate Calculator | Sharmila Vel Ltd"
        description="Calculate an instant estimate for painting, decorating and scaffolding in Swindon and Wiltshire. Transparent guide prices, zero hidden fees, free site surveys."
        keywords="painting costs Swindon, decorator day rates Wiltshire, scaffolding hire cost Swindon, painting estimate calculator"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            100% Transparent Estimates
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Transparent Pricing & Free Instant Estimate
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No guesswork and no unexpected extras. Use our interactive calculator below to configure your property and receive an indicative UK market cost range.
          </p>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* Pricing Guide Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-zoho bg-navy-900 text-white mb-2">Indicative Rates</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
              Typical Project Pricing Guide
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Indicative market estimates based on standard UK trade specifications in Swindon & Wiltshire.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {samplePricing.map((item, idx) => (
                <div key={idx} className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                  <div className="space-y-1 max-w-lg">
                    <h3 className="font-bold text-base text-navy-900">
                      {item.service}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.includes}
                    </p>
                    <span className="text-[11px] font-semibold text-slate-400 block pt-1">
                      Estimated Timeline: {item.typicalDuration}
                    </span>
                  </div>

                  <div className="text-left md:text-right shrink-0">
                    <div className="text-xl sm:text-2xl font-black text-brand-orange font-display">
                      {item.range}
                    </div>
                    <span className="text-[11px] text-slate-400">Indicative guide</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing notes */}
          <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-navy-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>How We Price Our Work</span>
            </div>
            <p>
              Every property is unique. Factors influencing exact costs include substrate condition, repair requirements, ceiling height, and accessibility. All quotes provided after an on-site survey are 100% fixed with zero hidden additions.
            </p>
            <p className="italic text-slate-500">
              {COMPANY.insuranceNotice}
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
            >
              <span>Book In-Person Free Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
