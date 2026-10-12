import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Navigation,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Areas We Cover | Electrician & CCTV Swindon, Wiltshire & Cotswolds",
  description:
    "P Selvam provides electrical and 4K CCTV installation services throughout Swindon and surrounding areas: Royal Wootton Bassett, Marlborough, Cirencester, Faringdon, and Newbury.",
};

export default function AreasWeCoverPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Navigation className="w-4 h-4" />
            <span>Regional Service Coverage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Areas We Cover
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Headquartered at 91A Faringdon Road in Swindon, our certified mobile electrical and CCTV technicians cover Swindon and surrounding counties across a 35-mile radius.
          </p>
        </div>

        {/* Rapid Response Highlight Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/50 text-rose-600 dark:text-rose-400 border border-red-200 dark:border-red-900 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                30–45 Minute Rapid Callout in SN Postcodes
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Facing tripped fuses, power blackouts, or damaged security systems? Our emergency electricians are based centrally in Swindon for immediate dispatch.
              </p>
            </div>
          </div>

          <a
            href={`tel:${SITE_INFO.phone}`}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-rose-600 hover:to-red-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/25 transition flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Emergency Line: {SITE_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* 5 County / Regional Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SITE_INFO.serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-soft hover:shadow-soft-hover border border-slate-200/80 dark:border-slate-800 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-zoho-blue dark:text-blue-400">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                    {area.region}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Towns &amp; Localities Served:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.towns.map((town, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                      >
                        {town}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zoho-blue dark:text-blue-400 hover:underline"
                >
                  <span>Book in {area.region}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Map & Office Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400">
                Central Base Location
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mt-1 mb-4">
                Our Swindon Headquarters
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Positioned in the heart of Swindon with immediate access to the M4 motorway (Junction 15 &amp; 16) and the A419 corridor, allowing our fully stocked vans to reach your premises punctually with all necessary test equipment and parts.
              </p>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-zoho-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Registered Office:</strong>
                    <span className="text-slate-600 dark:text-slate-300">{SITE_INFO.registeredOffice}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">{SITE_INFO.openingHours}</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-800 relative">
              <iframe
                title="P Selvam Swindon Office Map"
                src="https://maps.google.com/maps?q=91A+Faringdon+Road,+Swindon,+SN1+5DH,+UK&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                aria-label="Google Map of 91A Faringdon Road, Swindon, SN1 5DH"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-zoho-blue via-blue-600 to-zoho-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-black mb-3">
            Not sure if your address is within our range?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            We regularly undertake projects slightly beyond our core perimeter. Contact us with your postcode for a fast confirmation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto bg-white text-zoho-blue hover:bg-blue-50 font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition"
            >
              Check My Postcode &amp; Get Quote
            </Link>
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition"
            >
              Call {SITE_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
