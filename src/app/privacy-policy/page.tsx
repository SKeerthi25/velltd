import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy | UK GDPR Compliant",
  description:
    "Privacy Policy for P SELVAM LTD (Company No. 17510506) detailing how personal information and CCTV installations are handled under UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <ShieldCheck className="w-4 h-4" />
            <span>UK GDPR &amp; Data Protection Act 2018</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: 12 October 2026 • Valid for {SITE_INFO.companyName}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              1. Who We Are (Data Controller)
            </h2>
            <p>
              P SELVAM LTD (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), trading as <strong>P Selvam</strong>, is the data controller responsible for your personal information. We are registered in England &amp; Wales under Company Number <strong>{SITE_INFO.companyNumber}</strong>, with our registered office at <strong>{SITE_INFO.registeredOffice}</strong>.
            </p>
            <p>
              If you have any questions regarding your data, you can reach our Data Compliance Officer via email at{" "}
              <a href={`mailto:${SITE_INFO.email}`} className="text-zoho-blue font-bold underline">
                {SITE_INFO.email}
              </a>{" "}
              or telephone at{" "}
              <a href={`tel:${SITE_INFO.phone}`} className="text-zoho-blue font-bold underline">
                {SITE_INFO.phoneDisplay}
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              2. What Personal Data We Collect
            </h2>
            <p>We may collect, use, and process the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <strong>Identity &amp; Contact Details:</strong> Full name, telephone number, email address, property address, and postcode provided when requesting quotes, surveys, or emergency electrical callouts.
              </li>
              <li>
                <strong>Job Specifications:</strong> Photographs or descriptions of fuse boxes, rooms, consumer units, or site drawings submitted for quotation.
              </li>
              <li>
                <strong>Transaction &amp; Invoicing Details:</strong> Records of services rendered, parts supplied, certificates issued (e.g. EICR certificates), and payment confirmations (we do not store full credit card numbers).
              </li>
              <li>
                <strong>Technical &amp; Website Data:</strong> IP address, device operating system, browser type, and anonymised analytics (if consented via our cookie banner).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              3. Special Note Regarding CCTV Installations &amp; Footage
            </h2>
            <p>
              When P SELVAM LTD configures your CCTV recording system (NVR/DVR), the equipment records locally on your premises.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <strong>Client Ownership:</strong> You remain the sole owner and data controller of all CCTV footage captured on your residential or commercial property.
              </li>
              <li>
                <strong>No Cloud Snooping:</strong> We do not hold access to your live camera feeds or stored video recordings unless you explicitly grant our technician temporary on-site access for maintenance or troubleshooting.
              </li>
              <li>
                <strong>ICO Compliance Guidance:</strong> During handover, our technicians provide guidance on UK Information Commissioner’s Office (ICO) guidelines, including setting privacy masks over public footpaths or neighbours’ gardens where required.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              4. Lawful Basis for Processing
            </h2>
            <p>We process your data under the following legal bases under Article 6 of UK GDPR:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <strong>Contract Performance:</strong> To survey, quote, install, test, and provide aftercare for electrical and security works requested by you.
              </li>
              <li>
                <strong>Legal Obligation:</strong> To maintain accounting records for HMRC and comply with UK Building Regulations (Part P) and British Standards (BS 7671) requiring safety certification records.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To protect our website from spam, fraud, and cyber security breaches.
              </li>
              <li>
                <strong>Consent:</strong> For non-essential performance cookies and marketing communications (which can be withdrawn at any time).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              5. How Long We Keep Your Data
            </h2>
            <p>
              We retain customer invoice and electrical certification records for up to 6 years following completion of the work to satisfy statutory HMRC requirements and warranty verifications. Enquiry forms that do not result in work are deleted after 12 months.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              6. Your Statutory UK GDPR Rights
            </h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Request access to copies of your personal data held by us.</li>
              <li>Request correction of inaccurate or incomplete personal data.</li>
              <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;), subject to legal retention obligations.</li>
              <li>Object to or restrict our processing of your personal data.</li>
              <li>Lodge a complaint with the UK supervisory authority: the Information Commissioner’s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-zoho-blue underline">ico.org.uk</a>.</li>
            </ul>
          </section>

          <section className="pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            For questions about this policy, please contact P SELVAM LTD, 91A Faringdon Road, Swindon, SN1 5DH or email cctv@pselvam.com.
          </section>
        </div>
      </div>
    </div>
  );
}
