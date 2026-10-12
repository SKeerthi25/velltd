import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Zap, Phone, Search } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-xl w-full text-center bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 dark:border-slate-800">
        <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-950/60 text-zoho-blue flex items-center justify-center mx-auto mb-6 text-3xl font-black font-heading">
          404
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
          Page Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white mt-4 mb-3">
          Circuit Interrupted!
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          The electrical pathway or page you are trying to reach does not exist or has been relocated. Let’s get you back connected to safety.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zoho-blue hover:bg-zoho-blue-dark text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm px-6 py-3 rounded-xl transition"
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Browse Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          Need urgent electrical or CCTV assistance in Swindon?{" "}
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="text-zoho-blue dark:text-blue-400 font-bold hover:underline"
          >
            Call {SITE_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
