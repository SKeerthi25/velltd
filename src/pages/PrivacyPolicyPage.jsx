import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO 
        title="Privacy Policy (UK GDPR Compliant) | Sharmila Vel Ltd"
        description="Privacy policy and data protection statement for SHARMILA VEL LTD in compliance with UK GDPR and Data Protection Act 2018."
        keywords="privacy policy Sharmila Vel Ltd, UK GDPR painting company, data protection Wiltshire"
      />

      <section className="py-12 lg:py-16 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-orange transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <span className="badge-zoho bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px]">
            UK GDPR & Data Protection Act 2018
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: October 2024 • Applicable to {COMPANY.name} (trading as {COMPANY.tradingName})
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-700 text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">1. Who We Are (Data Controller)</h2>
            <p>
              This Privacy Policy explains how <strong>{COMPANY.name}</strong> (trading as {COMPANY.tradingName}), registered in England and Wales under Company Registration Number <strong>{COMPANY.companyNumber}</strong>, collects, processes, and protects your personal data when you visit our website (<strong>{COMPANY.domain}</strong>) or engage our painting, decorating, and scaffolding services.
            </p>
            <p className="mt-2">
              <strong>Registered Office:</strong> {COMPANY.registeredOffice}<br />
              <strong>Contact Email:</strong> {COMPANY.email}<br />
              <strong>Phone:</strong> {COMPANY.phone}
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">2. What Information We Collect</h2>
            <p>We may collect and process the following information when you interact with our website or contact our team:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Contact Information:</strong> Full name, telephone number, email address, and postal address/postcode for quoting and survey scheduling.</li>
              <li><strong>Project Details:</strong> Information regarding the nature of your property, room dimensions, photos or architectural plans provided via our quote form.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and anonymised site usage statistics collected via strictly consented cookies.</li>
              <li><strong>Financial Data:</strong> Invoicing and transaction records for completed commercial or residential works. We do not store raw card numbers on this website.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">3. Lawful Basis for Processing</h2>
            <p>Under the UK General Data Protection Regulation (UK GDPR), we rely on the following legal bases to process your personal data:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Contract Performance:</strong> To provide you with written estimates, carry out site surveys, execute decorating contracts, and erect scaffolding.</li>
              <li><strong>Legitimate Interests:</strong> To respond to enquiries, optimize website performance, and maintain safety compliance records.</li>
              <li><strong>Legal Obligation:</strong> To maintain statutory financial records and HSE statutory scaffolding inspection logs under UK regulations.</li>
              <li><strong>Consent:</strong> Where you have expressly consented to non-essential cookies via our Cookie Preferences banner.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">4. How We Use and Share Your Information</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal data to any third-party marketing companies. We only share details with trusted third parties strictly necessary to deliver our services, such as:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Sub-contracted scaffolders or delivery couriers delivering materials to your address.</li>
              <li>Local highway authorities (e.g., Swindon Borough Council) when applying for statutory pavement licences on your behalf.</li>
              <li>Our professional insurers or legal advisers if required to substantiate public liability compliance.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">5. Data Retention</h2>
            <p>
              We retain client quotes and project records for up to 6 years following contract completion to comply with UK statutory accounting, tax (HMRC), and limitation laws. Enquiries that do not progress to an active contract are securely removed within 12 months.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">6. Your Rights Under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to the personal data we hold about you (Subject Access Request).</li>
              <li>Request correction of any inaccurate or incomplete data.</li>
              <li>Request erasure of your personal data where there is no lawful reason for us to retain it.</li>
              <li>Object to or restrict the processing of your data under certain conditions.</li>
              <li>Withdraw cookie consent at any time using the "Cookie settings" button in our website footer.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact our Data Protection lead at <a href={`mailto:${COMPANY.email}`} className="text-brand-orange underline">{COMPANY.email}</a>. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline">ico.org.uk</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
