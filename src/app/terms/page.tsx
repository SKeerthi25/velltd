import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms and Conditions | Electrical & CCTV Services",
  description:
    "Standard terms and conditions of service for P SELVAM LTD (Company No. 17510506), governing electrical installations, CCTV systems, and maintenance.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <FileText className="w-4 h-4" />
            <span>Commercial Terms of Business</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Applicable to all quotations and contracts issued by {SITE_INFO.companyName}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              1. Definitions and Acceptance
            </h2>
            <p>
              These terms apply to all services provided by <strong>{SITE_INFO.companyName}</strong> (trading as <strong>P Selvam</strong>, Company No. <strong>{SITE_INFO.companyNumber}</strong>, registered office: <strong>{SITE_INFO.registeredOffice}</strong>).
            </p>
            <p>
              By approving a quotation in writing, scheduling an installation, or authorising an emergency callout, you confirm acceptance of these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              2. Quotations and Pricing
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                Written quotations are valid for thirty (30) days from the date of issue unless stated otherwise.
              </li>
              <li>
                Quotations are based on visible existing conditions. If unexposed defects (such as dangerous legacy cabling behind walls, non-compliant earthing, or asbestos) are uncovered during work, we will pause and discuss any required variation before proceeding.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              3. Standards of Workmanship and Certification
            </h2>
            <p>
              All electrical installations are executed in compliance with the current British Standard <strong>BS 7671 (IET Wiring Regulations 18th Edition)</strong> and UK Building Regulations (including Part P where applicable). Appropriate Electrical Installation Certificates (EIC) or Minor Electrical Works Certificates will be issued following final testing and full settlement of invoice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              4. CCTV Systems and Equipment Warranties
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                We supply high-grade commercial and domestic CCTV cameras, NVRs, and surveillance hard drives with manufacturer warranties ranging from twelve (12) to thirty-six (36) months.
              </li>
              <li>
                Our installation workmanship is guaranteed for twelve (12) months from handover.
              </li>
              <li>
                Warranties do not cover damage caused by vandalism, customer tampering, third-party ISP router reconfigurations, lightning strikes, or acts of God.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              5. Property Access and Utilities
            </h2>
            <p>
              The client must provide safe, unhindered access to work areas (including consumer units, lofts, external walls, and electrical supply) at agreed times. The client is responsible for providing electrical power and water required during installation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              6. Payment Terms
            </h2>
            <p>
              For standard residential works, payment is due upon successful completion and demonstration. For larger commercial installations or bespoke equipment orders, an upfront deposit for materials may be specified on your quotation. Payment may be settled via bank transfer, debit/credit card, or cash.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              7. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by the laws of England and Wales. Both parties submit to the exclusive jurisdiction of the English courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
