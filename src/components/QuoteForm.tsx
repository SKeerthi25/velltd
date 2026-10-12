"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Camera,
  Lightbulb,
  Plug,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Phone,
  Mail,
  Home,
  Building,
  Store,
  Clock,
  Send,
  Loader2,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

const SERVICE_OPTIONS = [
  {
    id: "cctv",
    title: "CCTV Installation & Servicing",
    desc: "4K ColorVu, HD cameras, remote mobile streaming, maintenance.",
    icon: Camera,
  },
  {
    id: "electrical",
    title: "Electrical Installation",
    desc: "Rewiring, consumer units (fuse box), EV circuits, testing & EICR.",
    icon: Zap,
  },
  {
    id: "lighting",
    title: "Light Fittings & LED",
    desc: "Indoor downlights, dimmers, outdoor PIR security floodlights.",
    icon: Lightbulb,
  },
  {
    id: "sockets",
    title: "Power Sockets & Outlets",
    desc: "New sockets, USB-C fast charge, IP66 outdoor garden power.",
    icon: Plug,
  },
  {
    id: "multiple",
    title: "Combined / Full Property Package",
    desc: "Multiple services (e.g. full security & complete electrical rewire).",
    icon: ShieldCheck,
  },
];

const PROPERTY_TYPES = [
  { id: "house", label: "Residential House", icon: Home },
  { id: "flat", label: "Flat / Apartment", icon: Building },
  { id: "commercial", label: "Commercial / Office / Shop", icon: Store },
  { id: "industrial", label: "Industrial / Workshop / Farm", icon: Building },
];

const TIMELINE_OPTIONS = [
  { id: "emergency", label: "Emergency / Urgent (Within 24-48 Hours)" },
  { id: "soon", label: "Within the next 1 - 2 weeks" },
  { id: "month", label: "Within the next month" },
  { id: "planning", label: "Planning ahead / Getting budget estimates" },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    serviceType: "cctv",
    propertyType: "house",
    timeline: "soon",
    numberOfItems: "4 Cameras / Standard Setup",
    description: "",
    name: "",
    phone: "",
    email: "",
    postcode: "",
    consent: true,
    honeypot: "", // Spam prevention field
  });

  const handleNext = () => {
    setErrorMsg("");
    if (step === 1 && !formData.serviceType) {
      setErrorMsg("Please select a primary service.");
      return;
    }
    if (step === 2 && !formData.propertyType) {
      setErrorMsg("Please select your property type.");
      return;
    }
    if (step === 3 && !formData.description.trim()) {
      setErrorMsg("Please briefly describe what you need so we can prepare an accurate estimate.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setErrorMsg("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg("Please enter a valid UK telephone number.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.postcode.trim()) {
      setErrorMsg("Please provide your property postcode (e.g. SN1 5DH).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Unable to submit your quote request. Please call us directly.");
      }
    } catch {
      setErrorMsg("Network error. Please call +44 7774 453041 or message us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-950/60 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
          Quote Request Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white mt-4 mb-3">
          Thank You, {formData.name}!
        </h3>

        <p className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed mb-6">
          Your quote request has been sent to our engineering team at{" "}
          <strong className="text-slate-900 dark:text-white">{SITE_INFO.email}</strong>. We review all technical requirements and respond with an itemised estimate within 2 to 4 business hours.
        </p>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-left text-xs sm:text-sm space-y-2 mb-8">
          <p>
            <strong>Service:</strong> {formData.serviceType.toUpperCase()}
          </p>
          <p>
            <strong>Property Type:</strong> {formData.propertyType}
          </p>
          <p>
            <strong>Location:</strong> Postcode {formData.postcode.toUpperCase()}
          </p>
          <p>
            <strong>Target Timeline:</strong> {formData.timeline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SITE_INFO.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition"
          >
            <span>Message on WhatsApp for Immediate Update</span>
          </a>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 max-w-3xl mx-auto">
      {/* Progress Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
          <span>Step {step} of 4: {step === 1 ? "Choose Service" : step === 2 ? "Property Details" : step === 3 ? "Job Scope" : "Contact Details"}</span>
          <span className="text-zoho-blue dark:text-blue-400">{step * 25}% Completed</span>
        </div>

        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-zoho-blue to-blue-500 transition-all duration-300 rounded-full"
            style={{ width: `${step * 25}%` }}
          />
        </div>

        {/* 4 Step Bubbles */}
        <div className="grid grid-cols-4 gap-2 mt-3 text-center text-[11px] font-semibold">
          <div className={step >= 1 ? "text-zoho-blue font-bold" : "text-slate-400"}>1. Service</div>
          <div className={step >= 2 ? "text-zoho-blue font-bold" : "text-slate-400"}>2. Property</div>
          <div className={step >= 3 ? "text-zoho-blue font-bold" : "text-slate-400"}>3. Details</div>
          <div className={step >= 4 ? "text-zoho-blue font-bold" : "text-slate-400"}>4. Contact</div>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs sm:text-sm font-medium">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Anti-spam Honeypot Field */}
        <input
          type="text"
          name="website_url"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* STEP 1: SERVICE TYPE */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
              What service are you looking for?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Select the primary electrical or security solution required for your Swindon property.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((item) => {
                const Icon = item.icon;
                const isSelected = formData.serviceType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: item.id })}
                    className={`p-4 rounded-2xl text-left transition border flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-50/70 dark:bg-blue-950/40 border-zoho-blue shadow-md ring-2 ring-zoho-blue/20"
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between w-full mb-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? "bg-zoho-blue text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-zoho-blue" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: PROPERTY & URGENCY */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
                Tell us about your property
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                This helps our surveyors understand cable routes, mounting heights, and building regulations.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
                Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PROPERTY_TYPES.map((prop) => {
                  const Icon = prop.icon;
                  const isSelected = formData.propertyType === prop.id;
                  return (
                    <button
                      key={prop.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: prop.id })}
                      className={`p-3.5 rounded-2xl text-center border transition flex flex-col items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-blue-50/70 dark:bg-blue-950/40 border-zoho-blue ring-2 ring-zoho-blue/20"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? "text-zoho-blue" : "text-slate-500"}`} />
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {prop.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
                When would you like the work completed?
              </label>
              <div className="space-y-2">
                {TIMELINE_OPTIONS.map((time) => {
                  const isSelected = formData.timeline === time.id;
                  return (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: time.id })}
                      className={`w-full p-3.5 rounded-xl text-left border text-xs sm:text-sm font-semibold transition flex items-center justify-between ${
                        isSelected
                          ? "bg-blue-50/70 dark:bg-blue-950/40 border-zoho-blue text-zoho-blue dark:text-blue-400"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{time.label}</span>
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-zoho-blue" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SCOPE & DETAILS */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
                Scope &amp; Job Description
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Provide details such as camera quantities, consumer unit age, socket positions, or special requirements.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                Estimated Scope / Package Preference
              </label>
              <input
                type="text"
                value={formData.numberOfItems}
                onChange={(e) => setFormData({ ...formData, numberOfItems: e.target.value })}
                placeholder="e.g. 4x 4K CCTV Cameras, or 8 Downlights in Kitchen, or 18th Edition Fuse Board"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                Job Description &amp; Specific Notes *
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Please describe any issues (e.g. tripping breaker, night vision needed over rear garden, outdoor socket needed for hot tub, etc.)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue leading-relaxed"
                required
              />
            </div>
          </div>
        )}

        {/* STEP 4: CONTACT & SUBMISSION */}
        {step === 4 && (
          <div className="space-y-5 animate-in fade-in duration-150">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
                Where should we send your quote?
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                We respect your privacy. No spam. Used solely for providing your tailored quote.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 07774 453041"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.co.uk"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Property Postcode *
                </label>
                <input
                  type="text"
                  required
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  placeholder="e.g. SN1 5DH"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue uppercase"
                />
              </div>
            </div>

            {/* UK GDPR Consent Notice */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  className="w-4 h-4 mt-1 rounded text-zoho-blue focus:ring-zoho-blue border-slate-300"
                />
                <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  I agree to P SELVAM LTD processing my contact details to generate my quote in compliance with UK GDPR. View our{" "}
                  <Link href="/privacy-policy" className="text-zoho-blue underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Buttons / Navigation */}
        <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zoho-blue hover:bg-zoho-blue-dark text-white font-bold text-sm shadow-md shadow-blue-500/25 transition ml-auto"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-zoho-blue to-blue-600 hover:from-blue-600 hover:to-zoho-blue text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition disabled:opacity-50 ml-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Quote...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Free Quote</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
