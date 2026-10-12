import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Paintbrush, Home, Building2, Palette, ShieldCheck, Layers, 
  ArrowRight, CheckCircle2, Check, Sparkles, Phone 
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function ServicesPage() {
  const serviceIconMap = {
    Paintbrush: Paintbrush,
    Home: Home,
    Building2: Building2,
    Palette: Palette,
    ShieldCheck: ShieldCheck,
    Layers: Layers
  };

  return (
    <>
      <SEO 
        title="Painting & Scaffolding Services Overview | Swindon & Wiltshire"
        description="Comprehensive painting and scaffolding services across Swindon, Wiltshire, Oxfordshire and Gloucestershire. Interior, exterior, commercial, residential and safe scaffold hire."
        keywords="painting services Swindon, scaffolding hire Swindon, exterior decorators, commercial painting contractors"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Comprehensive Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Specialist Painting, Decorating & Access Scaffolding
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover our tailored services for homeowners, developers, and commercial enterprises across Swindon, Wiltshire, Oxfordshire, and Gloucestershire.
          </p>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((serv, index) => {
              const Icon = serviceIconMap[serv.icon] || Paintbrush;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={serv.id}
                  id={serv.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card ${
                    isEven ? 'bg-slate-50/70' : 'bg-white'
                  }`}
                >
                  {/* Image Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={serv.heroImage}
                        alt={serv.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="badge-zoho bg-navy-900/90 text-white text-[11px] backdrop-blur-md">
                          {serv.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Service Vertical #{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-display">
                      {serv.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brand-orange">
                      {serv.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {serv.shortDescription}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {serv.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/services/${serv.slug}`}
                        className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        <span>Full Service Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>

                      <Link
                        to="/pricing-estimate"
                        className="px-5 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-brand-orange font-bold text-xs border border-orange-200 transition-colors"
                      >
                        Calculate Estimate
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Combined Scaffolding & Painting Advantage */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="badge-zoho bg-brand-orange text-white text-xs">
                Package Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Need Scaffolding for Your Painting Work?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Save up to 20% by booking access & decoration with a single contractor. Zero delays between trades, full statutory TG20:21 paperwork, and synchronized dismantle upon final coat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/pricing-estimate"
                className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider shadow-glow text-center transition-all"
              >
                Estimate Combo Price
              </Link>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call {COMPANY.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
