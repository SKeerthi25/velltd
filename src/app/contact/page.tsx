import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  Building,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact P Selvam LTD | Electrical & CCTV Swindon",
  description:
    "Contact P SELVAM LTD in Swindon: +44 7774 453041, cctv@pselvam.com. 91A Faringdon Road, Swindon, SN1 5DH. Emergency electrical callout, CCTV surveys & quotes.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Phone className="w-4 h-4" />
            <span>We’re Here to Help</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Contact P Selvam
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Get in touch for routine electrical appointments, 4K CCTV system surveys, or immediate 24/7 emergency electrical callouts across Swindon &amp; Wiltshire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-zoho-blue hover:bg-zoho-blue-dark text-white font-bold p-3.5 rounded-2xl text-xs sm:text-sm shadow-md transition"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {SITE_INFO.phoneDisplay}</span>
              </a>

              <a
                href={SITE_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold p-3.5 rounded-2xl text-xs sm:text-sm shadow-md transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80 dark:border-slate-800 space-y-6">
              <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Business &amp; Registered Information
              </h2>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Telephone
                    </span>
                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      className="font-bold text-slate-900 dark:text-white hover:text-zoho-blue transition"
                    >
                      {SITE_INFO.phone}
                    </a>
                    <span className="block text-[11px] text-slate-500">
                      Direct click-to-call &amp; 24/7 emergency dispatch
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Public Email
                    </span>
                    <a
                      href={`mailto:${SITE_INFO.email}`}
                      className="font-bold text-slate-900 dark:text-white hover:text-zoho-blue transition"
                    >
                      {SITE_INFO.email}
                    </a>
                    <span className="block text-[11px] text-slate-500">
                      For plans, tender requests &amp; quote queries
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-zoho-blue flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Registered Office
                    </span>
                    <address className="not-italic font-medium text-slate-800 dark:text-slate-200">
                      {SITE_INFO.registeredOffice}
                    </address>
                    <span className="block text-[11px] text-slate-500">
                      Registered in England &amp; Wales (Co. No. {SITE_INFO.companyNumber})
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Operating Hours
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 block">
                      Monday – Friday: 09:00 – 18:00
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 block">
                      Saturday – Sunday: 10:00 – 16:00
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Direct Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-heading font-black text-slate-900 dark:text-white">
                Our Location in Swindon
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                {SITE_INFO.registeredOffice}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=91A+Faringdon+Road,+Swindon,+SN1+5DH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-zoho-blue dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
            <iframe
              title="Google Map Location of P Selvam Ltd Swindon"
              src="https://maps.google.com/maps?q=91A+Faringdon+Road,+Swindon,+SN1+5DH,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              aria-label="Google Map of 91A Faringdon Road, Swindon, SN1 5DH"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
