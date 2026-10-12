import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Camera,
  Lightbulb,
  Plug,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  PhoneCall,
  Eye,
  Smartphone,
  Star,
  Award,
  ChevronRight,
  Sliders,
  Sparkles,
} from "lucide-react";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import HomeClientTabs from "@/components/HomeClientTabs";
import {
  SERVICES_DATA,
  PACKAGES_DATA,
  PROJECTS_DATA,
  SITE_INFO,
} from "@/data/siteData";

export const metadata: Metadata = {
  title: "P Selvam | Electrical Contracting & 4K CCTV Systems Swindon",
  description:
    "Certified electrical contractor and 4K CCTV installer in Swindon & Wiltshire. Domestic rewires, 18th Edition consumer units, ColorVu night vision CCTV, LED lighting, and emergency callouts. Registered in England & Wales (No. 17510506).",
};

const SERVICE_ICONS = {
  "electrical-installation": Zap,
  "cctv-installation": Camera,
  "light-fittings": Lightbulb,
  "power-sockets": Plug,
};

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const featuredPackages = PACKAGES_DATA;

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION (ZOHO SAAS AESTHETIC) */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Action Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200/80 dark:border-slate-800">
                <span className="flex h-2 w-2 rounded-full bg-zoho-green animate-pulse" />
                <span>Swindon &amp; Wiltshire’s Premier Electrical &amp; CCTV Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Certified Electrical Craftsmanship &amp;{" "}
                <span className="text-gradient-blue">4K Smart CCTV</span> Systems
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From full property rewires and 18th Edition metal consumer unit upgrades to bespoke 4K ColorVu security cameras with <strong>zero monthly cloud fees</strong>. P Selvam delivers precision contracting across Swindon, Wiltshire, and surrounding counties.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-zoho-blue to-blue-600 hover:from-blue-600 hover:to-zoho-blue text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition active:translate-y-0"
                >
                  <span>Get Free Instant Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/cctv-packages"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base px-7 py-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-soft transition"
                >
                  <Camera className="w-4 h-4 text-zoho-blue" />
                  <span>View CCTV Packages</span>
                </Link>
              </div>

              {/* 4 Checkmarks under Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/60 dark:border-slate-800/80 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>BS 7671 Certified</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Zero Cloud Fees</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Transparent Quotes</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>24/7 Urgent Care</span>
                </div>
              </div>
            </div>

            {/* Right Column: Zoho-Style Interactive Product Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/80 dark:border-slate-800 transition-all">
                {/* Header bar of simulated card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-zoho-red" />
                    <span className="w-3 h-3 rounded-full bg-zoho-yellow" />
                    <span className="w-3 h-3 rounded-full bg-zoho-green" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    P_SELVAM_SYSTEMS_MONITOR
                  </span>
                </div>

                {/* Simulated CCTV Stream Status Box */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 text-white p-4 mb-4 border border-slate-800">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="font-mono text-red-400 font-bold">REC • CAM 01 (DRIVEWAY)</span>
                    </div>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">
                      4K UHD 25FPS
                    </span>
                  </div>

                  <div className="h-28 rounded-xl bg-slate-900/90 flex flex-col items-center justify-center p-3 text-center border border-slate-800/80">
                    <Eye className="w-7 h-7 text-zoho-blue mb-1" />
                    <span className="text-xs font-bold text-slate-200">
                      ColorVu Full-Colour Night Vision
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono mt-0.5">
                      AI Smart Detection: Human Verified (99.4%)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-3 text-[10px] text-slate-400">
                    <span>NVR Storage: 2TB WD Purple</span>
                    <span className="text-emerald-400 font-semibold">Zero Subscription Active</span>
                  </div>
                </div>

                {/* Simulated Consumer Unit Electrical Status */}
                <div className="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zoho-blue text-white">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900 dark:text-white">
                        18th Edition Consumer Unit
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        RCBOs + Surge Protection (SPD) Active
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                    Protected
                  </span>
                </div>

                {/* Mobile Notification Bubble */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-zoho-blue flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Smartphone App Streaming:
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      Multi-user iOS &amp; Android encrypted push
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES / ACCREDITATIONS ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-heading font-black text-slate-900 dark:text-white text-base sm:text-lg">
              BS 7671 (18th Edition)
            </div>
            <div className="text-xs text-slate-500">IET Wiring Regulations Compliant</div>
          </div>

          <div>
            <div className="font-heading font-black text-slate-900 dark:text-white text-base sm:text-lg">
              Company No. {SITE_INFO.companyNumber}
            </div>
            <div className="text-xs text-slate-500">Registered in England &amp; Wales</div>
          </div>

          <div>
            <div className="font-heading font-black text-slate-900 dark:text-white text-base sm:text-lg">
              ColorVu 4K IP Systems
            </div>
            <div className="text-xs text-slate-500">Commercial Grade Hardware</div>
          </div>

          <div>
            <div className="font-heading font-black text-slate-900 dark:text-white text-base sm:text-lg">
              £2,000,000+ Insurance
            </div>
            <div className="text-xs text-slate-500">Full Public Liability Cover</div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW (ZOHO FEATURE GRID CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
            Our Certified Specialisms
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
            Precision Electrical &amp; Security Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            Click any service below to explore full specifications, included items, and installation procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] || Zap;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-soft hover:shadow-soft-hover border border-slate-200/80 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-lg text-slate-900 dark:text-white group-hover:text-zoho-blue dark:group-hover:text-blue-400 transition mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-zoho-blue dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition"
                  >
                    <span>Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/quote"
                    className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    Quote →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE P SELVAM (ZOHO MULTI-COLOUR HIGHLIGHTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-200/80 dark:border-slate-800">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              The P Selvam Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Why Swindon Residents &amp; Businesses Trust Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              We combine certified technical competence with total pricing honesty. No vague estimates, no messy unfinished cables, and no recurring surveillance subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40">
              <div className="w-10 h-10 rounded-xl bg-zoho-blue text-white flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                Zero Monthly CCTV Subscriptions
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                You own your hardware and recordings on a local surveillance hard drive. Remote mobile app viewing is completely free for life.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40">
              <div className="w-10 h-10 rounded-xl bg-zoho-green text-white flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                BS 7671 Certified &amp; Documented
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every electrical installation is tested with calibrated instruments and issued with official compliance certification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
              <div className="w-10 h-10 rounded-xl bg-zoho-yellow text-slate-900 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                Transparent Written Quotes
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Detailed breakdowns of materials, labour, and safety sign-offs. We stick to our quoted figures with zero unexpected surprises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40">
              <div className="w-10 h-10 rounded-xl bg-zoho-red text-white flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                24/7 Rapid Emergency Response
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Emergency callout within 30–45 minutes across SN postcodes for tripped fuse boards, dangerous faults, and power cuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TABBED AUDIENCE SELECTOR (HOMEOWNERS / LANDLORDS / COMMERCIAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeClientTabs />
      </section>

      {/* 6. OUR 5-STEP INSTALLATION PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
            Methodical &amp; Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
            Our 5-Stage Customer Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
            From your initial call to complete safety certification and ongoing aftercare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Enquiry", desc: "Contact via form, phone, or WhatsApp with your requirements." },
            { step: "02", title: "Survey", desc: "On-site inspection of cable routes, consumer unit, and camera angles." },
            { step: "03", title: "Quote", desc: "Itemised written quotation valid for 30 days with no obligation." },
            { step: "04", title: "Install", desc: "Tidy, compliant installation using dust extraction and neat containment." },
            { step: "05", title: "Aftercare", desc: "Instrument testing, app configuration, safety certification & support." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black font-heading text-zoho-blue/20 dark:text-blue-400/20 block mb-2">
                  {item.step}
                </span>
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STATS COUNTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatsCounter />
      </section>

      {/* 8. FEATURED CCTV PACKAGES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Complete Security Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Featured 4K CCTV Systems
            </h2>
          </div>
          <Link
            href="/cctv-packages"
            className="text-sm font-bold text-zoho-blue dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <span>Compare Full Feature Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? "bg-white dark:bg-slate-900 border-2 border-zoho-blue shadow-2xl relative ring-4 ring-blue-500/10"
                  : "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft"
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="inline-block text-[11px] font-black uppercase tracking-wider bg-zoho-blue text-white px-3 py-0.5 rounded-full mb-3">
                    Most Popular Choice
                  </span>
                )}
                <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-1">
                  {pkg.name}
                </h3>
                <span className="text-xs font-bold text-zoho-blue uppercase tracking-wider block mb-3">
                  {pkg.badge}
                </span>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="space-y-2.5 mb-8">
                  {pkg.features.slice(0, 4).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/quote"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition ${
                    pkg.popular
                      ? "bg-zoho-blue hover:bg-zoho-blue-dark text-white shadow-md shadow-blue-500/25"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                  }`}
                >
                  <span>Request Quote for {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FEATURED RECENT PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
              Verified Installations
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
              Recent Work Across Swindon
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-bold text-zoho-blue dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <span>View All Gallery Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-hover transition flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 text-zoho-blue px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
                  {proj.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    {proj.location} • {proj.date}
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <Link
                  href="/projects"
                  className="text-xs font-bold text-zoho-blue dark:text-blue-400 flex items-center gap-1 pt-3 border-t border-slate-100 dark:border-slate-800"
                >
                  <span>View Project Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
            Real Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
            What Homeowners Say
          </h2>
        </div>

        <TestimonialSlider />
      </section>

      {/* 11. FAQ ACCORDION PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <FAQAccordion limit={4} />

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-sm font-bold text-zoho-blue dark:text-blue-400 hover:underline"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 12. GRAND ZOHO-STYLE CALL TO ACTION BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A1128] via-[#101D42] to-[#0A1128] text-white rounded-3xl p-8 sm:p-16 shadow-2xl border border-blue-900/40 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 mb-4 inline-block">
              Rapid Response Across Wiltshire
            </span>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight mb-4 leading-tight">
              Ready to Secure Your Property with Certified Expertise?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Get in touch today for a free on-site survey and clear, itemised quotation with zero obligation. Emergency electricians available 24/7 across Swindon.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zoho-blue hover:bg-blue-600 text-white font-bold text-base px-9 py-4 rounded-xl shadow-xl shadow-blue-500/25 transition"
              >
                <span>Get Free Online Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`tel:${SITE_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition"
              >
                <PhoneCall className="w-5 h-5 text-zoho-blue" />
                <span>Call {SITE_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
