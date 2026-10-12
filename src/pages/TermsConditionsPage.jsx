import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function TermsConditionsPage() {
  return (
    <>
      <SEO 
        title="Terms & Conditions | Sharmila Vel Ltd (Trading as Sharmila Painting)"
        description="Terms and conditions of trading for painting, decorating, and scaffolding services provided by SHARMILA VEL LTD in Swindon and Wiltshire."
        keywords="terms and conditions painting, scaffolding contract terms, Sharmila Vel Ltd terms"
      />

      <section className="py-12 lg:py-16 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-orange transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <span className="badge-zoho bg-brand-orange text-white text-[10px]">
            Commercial & Domestic Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: October 2024 • Applicable to {COMPANY.name} (trading as {COMPANY.tradingName})
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-700 text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">1. Company Details & Definitions</h2>
            <p>
              These Terms and Conditions apply to all quotations, contracts, painting works, and scaffolding services provided by <strong>{COMPANY.name}</strong> (trading as {COMPANY.tradingName}), a private limited company registered in England and Wales under Company Registration Number <strong>{COMPANY.companyNumber}</strong>, with registered office at <strong>{COMPANY.registeredOffice}</strong> ("the Contractor", "we", "us", or "our").
            </p>
            <p className="mt-2">
              "The Client" ("you", "your") refers to the domestic homeowner, commercial organisation, or principal contractor entering into an agreement for works with {COMPANY.name}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">2. Quotations & Acceptance</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>All written quotations issued by us remain valid for a period of <strong>30 calendar days</strong> from the date of issue.</li>
              <li>Quotations are based on visible substrate conditions during the initial survey. Should unforeseen structural dry rot, severe blown plaster, or latent masonry defects become apparent once old paint or coverings are stripped, we will notify the Client immediately with an itemised variation proposal before proceeding.</li>
              <li>A binding contract is formed upon the Client's written or electronic acceptance of our quotation or upon payment of any agreed commencement deposit.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">3. Scaffolding Erection & Hire Regulations</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>All scaffolding structures are designed and erected in strict compliance with the UK Work at Height Regulations 2005, TG20:21 operational guide, and NASC best practice guidelines.</li>
              <li><strong>Safe Working Load:</strong> Scaffolding platforms must not be overloaded or altered by third parties. Unauthorised removal of ties, toe-boards, or guardrails is strictly prohibited.</li>
              <li><strong>Inspections:</strong> In accordance with statutory HSE guidelines, scaffolding will be inspected prior to first use, following adverse weather, and every 7 days thereafter. Handover certificates (Scafftag) will be issued.</li>
              <li><strong>Pavement Licences:</strong> Where scaffolding must be positioned on a public highway or footpath (e.g. Swindon Borough Council jurisdiction), we will handle the licence application. Associated local authority licensing fees will be itemised transparently.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">4. Client Responsibilities & Access</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>The Client must provide clear access to the work zones, including water and standard 230V electrical power for dust-extraction equipment.</li>
              <li>While our team drapes heavy-duty dust sheeting over furniture and flooring, the Client is requested to remove fragile ornaments, valuable electronics, and small breakable belongings from work areas prior to our arrival.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">5. Weather Contingencies (Exterior Works)</h2>
            <p>
              Exterior masonry painting and timber glossing are weather-dependent. To guarantee the long-term adhesion and warranty of our finishes, we do not apply exterior coatings in heavy rain, ambient temperatures below 5°C, or onto saturated substrates. In the event of adverse weather, work will be paused and resumed promptly once environmental conditions are safe and compliant.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">6. Insurance & Public Liability</h2>
            <p>
              <strong>{COMPANY.insuranceNotice}</strong>
            </p>
            <p className="mt-2">
              Our operatives are fully trained, hold relevant certifications, and carry appropriate PPE at all times.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">7. Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>For standard residential projects, final payment is due upon successful completion, joint inspection walkthrough, and handover sign-off.</li>
              <li>For extensive projects or scaffolding hire exceeding 4 weeks, interim valuations or staged payments will be clearly agreed in writing prior to work commencing.</li>
              <li>Payments may be made via electronic bank transfer (BACS) to our designated corporate account.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">8. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>. The courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
