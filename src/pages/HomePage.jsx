import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, CheckCircle2, ShieldCheck, Sparkles, Star, 
  Paintbrush, Home, Building2, Palette, Layers, Award, ChevronRight, 
  Clock, MapPin, Check, HelpCircle, Users, ThumbsUp 
} from 'lucide-react';
import { COMPANY } from '../data/companyData';
import { SERVICES } from '../data/servicesData';
import { PROJECTS } from '../data/projectsData';
import { FAQS } from '../data/faqsData';
import SEO from '../components/SEO';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import QuoteCalculator from '../components/QuoteCalculator';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { value: "100%", label: "Satisfaction Guarantee", sub: "Snag-free handover protocol" },
    { value: "£5M", label: "Public Liability Insurance", sub: "Fully covered operations" },
    { value: "TG20:21", label: "Scaffolding Safety", sub: "Full NASC compliance" },
    { value: "24-48h", label: "Fast Written Quotes", sub: "Fixed, transparent pricing" }
  ];

  const processSteps = [
    { num: "01", title: "Free Enquiry & Consultation", desc: "Contact us via phone, WhatsApp or our online calculator. We discuss your project vision and arrange a prompt site survey." },
    { num: "02", title: "Detailed On-Site Survey", desc: "We inspect substrates, measure areas, assess scaffold access requirements, and provide advice on finishes and coatings." },
    { num: "03", title: "Itemised Fixed Quote", desc: "Within 24–48 hours, you receive a transparent written specification detailing materials, timeline, and exact costs—no surprises." },
    { num: "04", title: "Flawless Execution", desc: "Our skilled tradespeople prepare surfaces with dust-extracted tools, protect all furnishings, and apply precision trade finishes." },
    { num: "05", title: "Snag-Free Handover", desc: "We walk through every detail together, ensure the property is spotless, and only sign off when you are 100% delighted." }
  ];

  return (
    <>
      <SEO 
        title="Painting & Scaffolding Specialists Swindon & Wiltshire"
        description="SHARMILA VEL LTD provides premier interior & exterior painting, commercial decorating and certified scaffolding across Swindon, Wiltshire, Oxfordshire & Gloucestershire."
        keywords="painters and decorators Swindon, scaffolding Swindon, exterior painting Wiltshire, interior painting, commercial decorators"
      />

      {/* 1. HERO SECTION (Zoho-Style SaaS Polish & Clean Soft Gradient) */}
      <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32 hero-gradient-light border-b border-slate-200/60">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-sm border border-slate-200 text-xs font-bold text-navy-900">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-600">Company No. {COMPANY.companyNumber}</span>
                <span className="text-slate-300">•</span>
                <span className="text-brand-orange">Swindon & Wiltshire Specialists</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-navy-900 tracking-tight leading-[1.12] font-display">
                Premium Painting & Integrated Scaffolding Solutions.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Transforming residential homes, commercial offices and historic properties across Swindon, Wiltshire, Oxfordshire and Gloucestershire. Enjoy the speed, safety and cost savings of a single reputable contractor for both high-level access and flawless decorating.
              </p>

              {/* CTAs and Click-to-Call */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/pricing-estimate"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange hover:from-brand-orange-hover hover:to-amber-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-glow hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
                >
                  <span>Get Free Instant Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-navy-900 font-bold text-sm tracking-tight border border-slate-300 shadow-sm transition-all flex items-center gap-2.5 hover:border-slate-400"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
              </div>

              {/* Value Micro-Points */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free In-Person Survey</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Fully Insured [Insert details]</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dustless Sanding</span>
                </div>
              </div>
            </div>

            {/* Right Card / Interactive Preview (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Hero Showcase Card */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white p-2">
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
                      alt="Professional painting and scaffolding in Swindon"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="badge-zoho bg-brand-orange text-white text-[10px] mb-1">
                        Turnkey Service
                      </span>
                      <h3 className="font-extrabold text-base leading-snug">
                        Interior & Exterior Decorating + Safe Scaffolding
                      </h3>
                      <p className="text-xs text-slate-200">
                        Serving Swindon, Marlborough, Cirencester & Oxford
                      </p>
                    </div>
                  </div>

                  {/* Fast Quote Quick-Calculator Trigger Inside Card */}
                  <div className="p-4 bg-slate-50 rounded-2xl mt-2 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-navy-900 block">Need a quick price range?</span>
                      <span className="text-[11px] text-slate-500">Calculate online in 30 seconds</span>
                    </div>
                    <Link
                      to="/pricing-estimate"
                      className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      <span>Try Calculator</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                    </Link>
                  </div>
                </div>

                {/* Floating Trust Badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3 hidden sm:flex">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-navy-900 block mt-0.5">5-Star Standards</span>
                    <span className="text-[10px] text-slate-500">TG20:21 Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & STATS BAR */}
      <section className="bg-navy-950 py-10 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl sm:text-3xl font-black text-brand-orange font-display">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW GRID (Zoho-Style Clean Cards) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-zoho bg-orange-100 text-brand-orange mb-3">
              Comprehensive Trade Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
              Our Core Painting & Scaffolding Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              From historic Cotswold cottages to modern Swindon commercial complexes, we execute every contract with obsessive preparation, clean working protocols, and certified safety.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="group rounded-3xl bg-white border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                    <img
                      src={serv.heroImage}
                      alt={serv.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=85";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-zoho bg-navy-900/90 text-white backdrop-blur-md text-[10px]">
                        {serv.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                    {serv.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {serv.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    {serv.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${serv.slug}`}
                    className="text-xs font-bold text-navy-900 hover:text-brand-orange flex items-center gap-1.5"
                  >
                    <span>Explore Service Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/pricing-estimate"
                    className="text-[11px] font-bold text-brand-orange hover:underline"
                  >
                    Get Estimate →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>View Full Services Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (SaaS-like comparison / Feature Highlights) */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols */}
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-zoho bg-navy-900 text-white">
                The Sharmila Vel Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
                Why Swindon Homeowners & Commercial Clients Rely On Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Coordinating separate painting decorators and outside scaffolding hire creates delays, communication breakdowns, and inflated costs. We operate an integrated model designed for total peace of mind.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "One Single Point of Contact & Contract",
                    desc: "No waiting around for third-party scaffolders to turn up or dismantle. Both access equipment and painting happen on an integrated, synchronised timeline."
                  },
                  {
                    title: "Advanced Dustless Sanding Systems",
                    desc: "We utilise high-efficiency dust extraction sanders that capture over 95% of airborne particulates—leaving your home clean and your family comfortable."
                  },
                  {
                    title: "Trade-Grade Formulations Only",
                    desc: "We exclusively specify high-opacity, scrub-tested paints from Dulux Trade, Crown Trade, Farrow & Ball, and Keim Mineral Coatings for maximum longevity."
                  },
                  {
                    title: "Transparent Fixed Pricing Guarantee",
                    desc: "Our itemised written quotes specify every coat, surface prep, and timeline. No hidden extras or unexpected surprises upon job completion."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 font-black text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-navy-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 cols: Combined Advantage Visual Card */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-[#07172e] rounded-3xl p-8 text-white shadow-2xl border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

                <span className="badge-zoho bg-brand-orange text-white text-[10px] mb-4">
                  Save Up To 20%
                </span>
                <h3 className="text-2xl font-black tracking-tight mb-2 font-display">
                  Combined Painting & Scaffolding Packages
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Exterior re-pointing, render rejuvenation, or high-level sash window restoration? Booking both your scaffolding erection and painting directly with Sharmila Vel Ltd eliminates trade mark-ups and delivers guaranteed scheduling.
                </p>

                <div className="space-y-3 border-y border-slate-800 py-6 mb-6 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Third-party Scaffolding + Separate Painters:</span>
                    <span className="text-rose-400 font-bold">Coordination delays & higher cost</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>Sharmila Vel Ltd Integrated Model:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Synchronised timeline & cost savings
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/pricing-estimate"
                    className="flex-1 py-3.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-extrabold uppercase tracking-wider text-center transition-all shadow-glow"
                  >
                    Calculate Combo Savings
                  </Link>
                  <Link
                    to="/contact"
                    className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition-colors"
                  >
                    Request Free Site Survey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE & AFTER SLIDER SHOWCASE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-zoho bg-orange-100 text-brand-orange mb-3">
              Interactive Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
              See The Dramatic Difference For Yourself
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Drag the interactive slider below to see how our skilled preparation and coatings revitalise aged substrates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage={PROJECTS[0].beforeImage}
              afterImage={PROJECTS[0].afterImage}
              title="Victorian Period Townhouse Interior Redecoration"
              subtitle="Old Town, Swindon • Complete restoration of cornices, woodwork and feature wall"
            />

            <div className="mt-8 text-center">
              <Link
                to="/before-after"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline uppercase tracking-wider"
              >
                <span>View More Before & After Transformations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 5-STEP PROCESS TIMELINE */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-zoho bg-navy-900 text-white mb-3">
              Transparent Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
              Our Seamless 5-Step Execution Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From initial enquiry to spotless final handover, our structured methodology ensures effortless progress.
            </p>
          </div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-brand-orange font-display block mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-extrabold text-navy-900 text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Quality Checked</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Learn More About Our Standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS PREVIEW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge-zoho bg-orange-100 text-brand-orange mb-2">
                Recent Portfolios
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
                Featured Completed Contracts
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore a selection of our recent projects across Swindon and surrounding areas.
              </p>
            </div>

            <Link
              to="/projects"
              className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All Projects in Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={proj.afterImage}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge-zoho bg-navy-900/90 text-white text-[10px]">
                      {proj.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-brand-orange font-bold flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="font-extrabold text-navy-900 text-base mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {proj.scope}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Duration: <strong className="text-navy-900">{proj.duration}</strong></span>
                    <Link to="/projects" className="font-bold text-brand-orange hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 9. INTERACTIVE ESTIMATE CALCULATOR PREVIEW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-zoho bg-orange-100 text-brand-orange mb-2">
              No High-Pressure Sales
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
              Instant Online Estimate Calculator
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select your property parameters below for a fast ballpark estimate.
            </p>
          </div>

          <QuoteCalculator />
        </div>
      </section>

      {/* 10. FAQ PREVIEW */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-zoho bg-navy-900 text-white mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Quick answers to common questions about our painting and scaffolding works.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS[0].questions.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-navy-900 hover:text-brand-orange transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-brand-orange font-mono text-base shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="text-xs font-bold text-brand-orange hover:underline uppercase tracking-wider"
            >
              Browse Complete FAQ Knowledge Base →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-[#061325] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Start Your Property Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Ready to Experience Impeccable Painting & Safe Scaffolding?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact <strong>{COMPANY.name}</strong> today for friendly advice, a free on-site survey across Swindon and Wiltshire, and an itemised fixed quotation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/pricing-estimate"
              className="px-8 py-4 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-sm uppercase tracking-wider shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              Calculate Your Free Estimate
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-tight border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Direct: {COMPANY.phoneDisplay}</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            Registered in England & Wales, Co. No. {COMPANY.companyNumber} • 91A Faringdon Road, Swindon, SN1 5DH
          </p>
        </div>
      </section>
    </>
  );
}
