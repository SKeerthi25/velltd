import React, { useState } from 'react';
import { 
  Briefcase, CheckCircle2, Send, HardHat, Paintbrush, 
  Clock, MapPin, Award, ShieldCheck, Check 
} from 'lucide-react';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Experienced Painter & Decorator',
    experienceYears: '',
    cscsCard: 'Yes',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: "Senior Painter & Decorator",
      type: "Full-Time / Permanent",
      location: "Swindon & Wiltshire sites",
      pay: "Competitive day rate / negotiable",
      requirements: [
        "Proven experience in high-end interior & exterior decorating",
        "Proficiency with dustless sanding & spray application",
        "Valid CSCS card and clean UK driving licence preferred",
        "Pride in clean, courteous customer service"
      ]
    },
    {
      title: "Qualified Scaffolder (Part 2 / Advanced)",
      type: "Full-Time / Permanent",
      location: "Swindon depot & surrounding regions",
      pay: "Competitive rates based on certification",
      requirements: [
        "CISRS Part 2 or Advanced Scaffolder card",
        "Familiarity with TG20:21 compliance & safety netting",
        "Punctual, safety-conscious, and good team communication",
        "Experience in both domestic access and commercial projects"
      ]
    },
    {
      title: "Decorating Apprentice / Trainee",
      type: "Apprenticeship / Mentorship",
      location: "Swindon based",
      pay: "National Apprenticeship Wage + bonuses",
      requirements: [
        "Keen willingness to learn modern trade decorating skills",
        "Reliable timekeeping and polite attitude",
        "Practical mindset and enthusiasm for craft standards"
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Careers & Sub-Contractor Opportunities | Sharmila Vel Ltd"
        description="Join our team of skilled painters, decorators, and CISRS scaffolders in Swindon. View open positions and submit your application online."
        keywords="painter jobs Swindon, scaffolder vacancies Wiltshire, decorating careers, Sharmila Vel Ltd jobs"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Careers & Trade Opportunities at Sharmila Vel Ltd
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We are always seeking conscientious, skilled painters, decorators, and qualified scaffolders who take pride in exceptional workmanship and respectful customer service.
          </p>
        </div>
      </section>

      {/* Open Positions & Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Open Positions List (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="badge-zoho bg-orange-100 text-brand-orange mb-2">
                  Current Vacancies
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-display">
                  Open Roles in Swindon & Wiltshire
                </h2>
              </div>

              <div className="space-y-6">
                {jobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 hover:border-brand-orange transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                      <div>
                        <h3 className="text-lg font-bold text-navy-900">{job.title}</h3>
                        <span className="text-xs text-brand-orange font-semibold">{job.type}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 self-start sm:self-auto">
                        {job.location}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="font-bold text-slate-700">Requirements:</div>
                      {job.requirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-500">Pay: <strong className="text-navy-900">{job.pay}</strong></span>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, role: job.title }));
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="font-bold text-brand-orange hover:underline"
                      >
                        Apply for this role →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form (5 cols) */}
            <div id="application-form" className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-card">
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                Fast Job Application
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Submit your details below and our operations manager will be in touch.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-sm text-emerald-900">Application Received</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you, {formData.name}. We have logged your application for the <strong>{formData.role}</strong> position and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07700 900000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.co.uk"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Applying For Position</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none bg-white"
                    >
                      <option value="Senior Painter & Decorator">Senior Painter & Decorator</option>
                      <option value="Qualified Scaffolder (Part 2 / Advanced)">Qualified Scaffolder (Part 2 / Advanced)</option>
                      <option value="Decorating Apprentice / Trainee">Decorating Apprentice / Trainee</option>
                      <option value="Sub-Contractor Partnership">Sub-Contractor Partnership</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Years Experience</label>
                      <input
                        type="text"
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        placeholder="e.g. 5 years"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Hold CSCS / CISRS?</label>
                      <select
                        value={formData.cscsCard}
                        onChange={(e) => setFormData({ ...formData, cscsCard: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none bg-white"
                      >
                        <option value="Yes">Yes, valid card</option>
                        <option value="No">No / Expired</option>
                        <option value="In Progress">Currently training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Experience / Note</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Brief note about your decorating or scaffolding experience..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
