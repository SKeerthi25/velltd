import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, 
  Upload, Calendar, ShieldCheck, ArrowRight, ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

// CONFIGURATION PLACEHOLDERS FOR FORM BACKEND:
// To connect to Formspree: set FORMSPREE_ENDPOINT to "https://formspree.io/f/your_form_id"
// To connect to EmailJS: configure EmailJS service ID & template ID below.
const FORMSPREE_ENDPOINT = ""; // [Insert Formspree URL or EmailJS credentials here]

export default function ContactPage() {
  const location = useLocation();
  const passedEstimate = location.state?.estimate;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: 'interior',
    preferredDate: '',
    message: '',
    photos: null,
    estimateDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (passedEstimate) {
      setFormData(prev => ({
        ...prev,
        service: passedEstimate.serviceType || 'interior',
        estimateDetails: `Calculator Estimate: ${passedEstimate.estimatedRange} (Property: ${passedEstimate.propertyType}, Scope: ${passedEstimate.scope})`,
        message: `I used your online calculator and got an indicative estimate of ${passedEstimate.estimatedRange}. I would like to book a free on-site survey to confirm.`
      }));
    }
  }, [passedEstimate]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photos: e.target.files[0] });
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If Formspree endpoint is set, submit to it
    if (FORMSPREE_ENDPOINT) {
      try {
        const payload = new FormData();
        Object.keys(formData).forEach(key => {
          if (formData[key]) payload.append(key, formData[key]);
        });
        await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: payload,
          headers: { 'Accept': 'application/json' }
        });
      } catch (err) {
        console.error('Submission error', err);
      }
    }

    // Simulate completion
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }, 700);
  };

  return (
    <>
      <SEO 
        title="Contact & Free Quote Request | Sharmila Vel Ltd Swindon"
        description="Book a free on-site survey or request an itemised written quotation from SHARMILA VEL LTD. Phone: 07774 453040. Office: 91A Faringdon Road, Swindon, SN1 5DH."
        keywords="contact painters Swindon, painting quote Swindon, scaffolding quote Wiltshire, Sharmila Vel Ltd phone"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Direct Communication
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Request a Free Survey & Itemised Quotation
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get in touch with our team for friendly advice, on-site measurements across Swindon and Wiltshire, and fixed price proposals.
          </p>
        </div>
      </section>

      {/* Main Form and Direct Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="badge-zoho bg-orange-100 text-brand-orange mb-2">
                  Headquarters & Enquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-display">
                  We're Here to Help
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Have an urgent enquiry, need scaffolding erected quickly, or want to speak with a decorator right now? Contact us through any channel below:
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3">
                {/* Telephone */}
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-brand-orange transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-white group-hover:bg-brand-orange transition-colors flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Telephone / Direct Line</span>
                    <span className="text-sm font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                      {COMPANY.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 hover:border-emerald-400 transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-700 font-semibold block">Instant Chat</span>
                    <span className="text-sm font-bold text-emerald-900 flex items-center gap-1">
                      Chat on WhatsApp <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-brand-orange transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-white group-hover:bg-brand-orange transition-colors flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Customer Enquiries</span>
                    <span className="text-sm font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                      {COMPANY.email}
                    </span>
                  </div>
                </a>

                {/* Registered Office */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Registered Office</span>
                    <span className="text-sm font-bold text-navy-900 block">
                      {COMPANY.name}
                    </span>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      {COMPANY.registeredOffice}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {COMPANY.registrationInfo}
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="text-xs text-slate-600 space-y-1 w-full">
                    <span className="text-xs text-slate-500 font-semibold block">Operating Hours</span>
                    {COMPANY.workingHours.map((wh, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="font-semibold text-slate-700">{wh.days}:</span>
                        <span>{wh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quotation Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card">
              <div className="mb-6">
                <span className="badge-zoho bg-navy-900 text-white text-[10px] mb-2">
                  No Obligation
                </span>
                <h3 className="text-2xl font-black text-navy-900 tracking-tight font-display">
                  Book a Free Survey or Request a Quote
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and we will get back to you with advice or to schedule a visit.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Your request has been received. One of our specialists will review your requirements and phone or email you within 24 hours to confirm your survey slot.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Passed estimate notification banner if coming from calculator */}
                  {formData.estimateDetails && (
                    <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs text-brand-orange font-bold flex items-center justify-between">
                      <span>✓ {formData.estimateDetails}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Williams"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07774 000000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@example.co.uk"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Property Postcode / Town *</label>
                      <input
                        type="text"
                        required
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        placeholder="e.g. SN1 5DH / Old Town"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none bg-white"
                      >
                        <option value="interior">Interior Painting & Decorating</option>
                        <option value="exterior">Exterior Painting & Masonry</option>
                        <option value="commercial">Commercial Refurbishment</option>
                        <option value="residential">Full House Makeover</option>
                        <option value="scaffolding">Scaffolding Erection & Hire</option>
                        <option value="decorating">Plastering & Wallpapering</option>
                        <option value="combo">Combined Scaffolding + Painting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Survey Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe the rooms, approximate size, any exterior repairs, or specific timing required..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-orange focus:outline-none"
                    />
                  </div>

                  {/* Photo upload placeholder for EmailJS / Formspree */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Attach Photos / Drawings (Optional)
                    </label>
                    <div className="border border-dashed border-slate-300 rounded-xl p-3 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <input
                        type="file"
                        id="photo-upload"
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                        className="hidden"
                      />
                      <label htmlFor="photo-upload" className="cursor-pointer flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
                        <Upload className="w-4 h-4 text-brand-orange" />
                        <span>{fileName ? `Attached: ${fileName}` : 'Click to attach photos (helps speed up estimates)'}</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange hover:from-brand-orange-hover hover:to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-glow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Quote Request'}</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    We respect your privacy. No spam. You will only be contacted regarding your quotation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section Placeholder */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-72 w-full rounded-2xl bg-slate-200 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
              <MapPin className="w-10 h-10 text-brand-orange mb-2 animate-bounce" />
              <h4 className="font-extrabold text-navy-900 text-base">
                Operational Headquarters: Swindon, United Kingdom
              </h4>
              <p className="text-xs text-slate-600 max-w-md mt-1">
                91A Faringdon Road, Swindon, SN1 5DH • Serving all surrounding towns in Wiltshire, Oxfordshire, and Gloucestershire.
              </p>
              <div className="mt-4">
                <a
                  href="https://maps.google.com/?q=91A+Faringdon+Road,+Swindon,+SN1+5DH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
