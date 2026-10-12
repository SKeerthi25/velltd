"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, Loader2, Phone, Mail } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Enquiry",
    message: "",
    honeypot: "",
    consent: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Unable to send message. Please contact us directly.");
      }
    } catch {
      setErrorMsg("Network error. Please call +44 7774 453041 or email cctv@pselvam.com.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 text-center">
        <div className="w-14 h-14 bg-green-100 dark:bg-green-950/60 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
          Thank you, {formState.name}. We have routed your enquiry to our Swindon office ({SITE_INFO.email}). An engineer will get in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormState({
              name: "",
              phone: "",
              email: "",
              service: "General Enquiry",
              message: "",
              honeypot: "",
              consent: true,
            });
          }}
          className="text-xs font-bold text-zoho-blue dark:text-blue-400 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-4"
    >
      <input
        type="text"
        name="company_title"
        value={formState.honeypot}
        onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
          Your Name *
        </label>
        <input
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          placeholder="e.g. David Williams"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            placeholder="e.g. 07774 453041"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="e.g. david@example.co.uk"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
          Service Required
        </label>
        <select
          value={formState.service}
          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
        >
          <option value="CCTV Installation & Service">CCTV Installation &amp; Service</option>
          <option value="Electrical Installation & Rewire">Electrical Installation &amp; Rewire</option>
          <option value="Consumer Unit (Fuse Box) Upgrade">Consumer Unit (Fuse Box) Upgrade</option>
          <option value="Light Fittings & LED">Light Fittings &amp; LED</option>
          <option value="Power Sockets & Outdoor Power">Power Sockets &amp; Outdoor Power</option>
          <option value="Emergency Electrical Fault">Emergency Electrical Fault</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
          Your Message *
        </label>
        <textarea
          rows={4}
          required
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="How can we assist you today? Please include any property specifics or timing preferences."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zoho-blue"
        />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
          <input
            type="checkbox"
            checked={formState.consent}
            onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
            required
            className="w-4 h-4 mt-0.5 rounded text-zoho-blue focus:ring-zoho-blue border-slate-300"
          />
          <span>
            I consent to P SELVAM LTD storing my submitted data to respond to my enquiry per the{" "}
            <Link href="/privacy-policy" className="text-zoho-blue underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-zoho-blue hover:bg-zoho-blue-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-blue-500/25 transition disabled:opacity-50 text-sm"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Direct Message</span>
          </>
        )}
      </button>
    </form>
  );
}
