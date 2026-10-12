import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, ClipboardCheck, Paintbrush, CheckCircle2, ShieldCheck, 
  ArrowRight, Phone, Clock, Sparkles, HardHat 
} from 'lucide-react';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function ProcessPage() {
  const detailedSteps = [
    {
      step: "01",
      name: "Initial Enquiry & Free Discovery",
      tagline: "Friendly advice and rapid initial guidance",
      description: "Reach out via our online quote calculator, phone call, or WhatsApp. We collect basic details about your property (location in Swindon or surrounding towns, interior/exterior, room count, and any special access or scaffolding needs).",
      checklist: [
        "Same-day acknowledgment of your enquiry",
        "Ballpark cost guidance if photos are provided",
        "Convenient survey time booked within 48 hours"
      ]
    },
    {
      step: "02",
      name: "Comprehensive On-Site Survey",
      tagline: "Accurate measurements & substrate inspection",
      description: "Our surveyor visits your Swindon or regional property. We inspect wall conditions, measure exact surface square meterage, identify settlement cracks, test plaster adhesion, and calculate precise scaffolding requirements.",
      checklist: [
        "No high-pressure sales tactics—ever",
        "Substrate moisture and chalkiness check",
        "Advice on paint finishes, washability and colour selections",
        "Scaffolding tie-points and access feasibility assessed"
      ]
    },
    {
      step: "03",
      name: "Written Itemised Fixed Quotation",
      tagline: "Zero surprises, transparent specification",
      description: "Within 24 to 48 hours of our survey, you receive a detailed written specification. This breaks down surface preparation, exact paints used (brand and product lines), scaffolding erection details, estimated duration, and a fixed price.",
      checklist: [
        "Completely transparent pricing—materials and labour itemised",
        "Schedule with guaranteed start and completion windows",
        "Public liability insurance certification provided [Insert details if applicable]",
        "Risk Assessment & Method Statement (RAMS) for commercial contracts"
      ]
    },
    {
      step: "04",
      name: "Site Preparation & Master Craftsmanship",
      tagline: "Dustless sanding, clean working, precision coats",
      description: "Our uniformed tradespeople arrive promptly. We start by completely protecting carpets, hard floors, and furnishings with heavy-duty sheeting. We utilise dust-extracted sanding tools to smooth surfaces before applying primers and two rich topcoats.",
      checklist: [
        "Floors and furniture 100% draped and protected",
        "Dust-extraction sanding (captures over 95% of airborne particles)",
        "Precision laser-straight masking and clean cut-ins",
        "Daily clean-up before trades leave your property"
      ]
    },
    {
      step: "05",
      name: "Snag-Free Handover & Final Inspection",
      tagline: "We only finish when you are completely delighted",
      description: "Upon project completion, our lead decorator conducts a comprehensive walkthrough with you under bright inspection lighting. Any touch-up is addressed immediately. All masking is stripped away, waste is cleared, and we leave your property immaculate.",
      checklist: [
        "Joint inspection walk-through with property owner",
        "Scaffolding safely dismantled and removed promptly",
        "Surplus paint clearly labelled and left for future touch-ups",
        "Final sign-off only upon your 100% satisfaction"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Our 5-Step Process & Quality Standards | Sharmila Vel Ltd"
        description="Learn how SHARMILA VEL LTD executes painting and scaffolding contracts: from free enquiry and detailed survey to fixed quotes, dustless execution and snag-free handover."
        keywords="painting process Swindon, how decorators work, scaffolding survey Swindon, decorating standards Wiltshire"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Predictable & Professional
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            How We Work: Our 5-Step Execution Standard
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminating anxiety from home and commercial decorating. Transparent communication, spotless preparation, and punctual delivery at every stage.
          </p>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {detailedSteps.map((s, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Number (2 cols) */}
              <div className="md:col-span-2">
                <span className="text-4xl sm:text-5xl font-black text-brand-orange font-display">
                  {s.step}
                </span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                  Phase {idx + 1}
                </span>
              </div>

              {/* Content (10 cols) */}
              <div className="md:col-span-10 space-y-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-navy-900 tracking-tight font-display">
                    {s.name}
                  </h2>
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mt-0.5">
                    {s.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.description}
                </p>

                {/* Checklist */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 space-y-2 pt-3">
                  <div className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Key Deliverables & Guarantees:
                  </div>
                  {s.checklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Experience Our Stress-Free Process First-Hand
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            Book your free discovery survey with our Swindon team today.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/pricing-estimate"
              className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider shadow-glow"
            >
              Get Free Instant Estimate
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
