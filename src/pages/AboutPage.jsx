import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Users, CheckCircle2, Heart, Clock, 
  MapPin, Phone, ArrowRight, Sparkles, HardHat, FileCheck 
} from 'lucide-react';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function AboutPage() {
  const values = [
    {
      title: "Obsessive Preparation",
      desc: "Great finishes begin with unseen preparation. We fill every micro-crack, strip defective paint, sand with dust-extraction equipment, and prime thoroughly.",
      icon: Sparkles
    },
    {
      title: "Integrity & Fixed Pricing",
      desc: "No surprise bills or hidden callout charges. Every quote is in writing, fully itemised, and honoured upon completion.",
      icon: CheckCircle2
    },
    {
      title: "Uncompromising Safety Standards",
      desc: "All scaffolding access conforms strictly to TG20:21 guidelines, NASC standards, and the UK Work at Height Regulations 2005.",
      icon: HardHat
    },
    {
      title: "Spotless Cleanliness Guarantee",
      desc: "We treat your home or commercial premises with extreme respect. Protective floor sheeting, daily cleanup, and immaculate handover.",
      icon: Heart
    }
  ];

  return (
    <>
      <SEO 
        title="About Us | Company Story, Values & Safety Standards"
        description="Learn about SHARMILA VEL LTD (trading as Sharmila Painting) based in Swindon, SN1 5DH. Our mission, values, and safety commitment."
        keywords="about Sharmila Vel Ltd, painters Swindon, scaffolding company Swindon, professional decorators Wiltshire"
      />

      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            About Sharmila Vel Ltd
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Built on Craftsmanship, Safety & Local Integrity
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Registered in England & Wales (Company No. <strong>{COMPANY.companyNumber}</strong>) and based at <strong>{COMPANY.addressShort}</strong>, we are Swindon's trusted specialists in high-specification decorating and access scaffolding.
          </p>
        </div>
      </section>

      {/* Story & Background Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Col (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80"
                  alt="Sharmila Vel Ltd team working on site"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-5 rounded-2xl shadow-xl border border-slate-700 hidden sm:block max-w-xs">
                <p className="text-xs font-bold leading-snug">
                  "Delivering seamless painting and scaffolding under one accountable contract."
                </p>
                <span className="text-[10px] text-brand-orange uppercase tracking-wider block mt-2 font-extrabold">
                  SHARMILA VEL LTD
                </span>
              </div>
            </div>

            {/* Content Col (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-zoho bg-orange-100 text-brand-orange text-xs">
                Our Foundation
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
                Solving the Disconnect Between Scaffolding and Decorating
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>
                  <strong>{COMPANY.name}</strong> (trading as {COMPANY.tradingName}) was established to solve one of the most frustrating challenges facing homeowners and property managers across Swindon and Wiltshire: the friction between independent scaffolding companies and exterior painting contractors.
                </p>
                <p>
                  Too often, exterior painting projects suffer from costly coordination lag—painters waiting on scaffolding to be erected, or unsightly scaffold structures sitting idle outside homes for weeks after the paint has dried.
                </p>
                <p>
                  By uniting certified scaffolding erection, independent access towers, and specialist interior/exterior decorating into a single, cohesive team, we provide our clients with unbeatable scheduling reliability, rigorous safety standards, and tangible cost savings.
                </p>
              </div>

              {/* Statutory details card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-navy-900 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-brand-orange" />
                  <span>Statutory Registration & Registered Office</span>
                </div>
                <p>
                  <strong>Entity:</strong> {COMPANY.name} | <strong>Company No:</strong> {COMPANY.companyNumber}
                </p>
                <p>
                  <strong>Registered Office:</strong> {COMPANY.registeredOffice}
                </p>
                <p className="text-slate-500 italic">
                  All work is carried out in strict accordance with UK building regulations and health & safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-zoho bg-navy-900 text-white mb-2">
              Our Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
              What Drives Our Everyday Standard
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From the smallest residential room to multi-storey commercial developments, our values never waver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-orange flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-base text-navy-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rigorous Health & Safety Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-[#07172e] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-700">
            <div className="max-w-3xl space-y-5">
              <span className="badge-zoho bg-brand-orange text-white text-xs">
                Safety First
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display">
                Our Rigorous Health & Safety Commitment
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Working at height requires zero compromise. Scaffolding is designed and erected in accordance with <strong>TG20:21</strong> and the Work at Height Regulations 2005. Every structure undergoes statutory 7-day safety inspections with formal Scafftag records.
              </p>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 text-xs text-slate-200 space-y-2">
                <div className="font-bold text-amber-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Public Liability Insurance Notice</span>
                </div>
                <p>
                  <strong>{COMPANY.insuranceNotice}</strong>
                </p>
                <p className="text-slate-400">
                  Site-specific Risk Assessments and Method Statements (RAMS) are produced for every commercial and domestic contract prior to commencing work.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-glow"
                >
                  Contact Our Management Team
                </Link>
                <Link
                  to="/services/scaffolding-services"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                >
                  Explore Scaffolding Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
