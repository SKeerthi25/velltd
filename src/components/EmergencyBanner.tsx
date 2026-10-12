import React from "react";
import Link from "next/link";
import { Zap, PhoneCall } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-zoho-red to-orange-600 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <div className="flex items-center gap-1.5 font-semibold">
            <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            <span>24/7 Emergency Electrician &amp; CCTV Support in Swindon &amp; Wiltshire:</span>
          </div>
          <span className="hidden md:inline text-red-100">
            Tripping circuits, power failures &amp; urgent security faults.
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white font-bold px-3 py-1 rounded-full text-xs transition backdrop-blur-xs tracking-wide"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Call Now: {SITE_INFO.phoneDisplay}</span>
          </a>
          <Link
            href="/quote"
            className="hidden sm:inline-block underline underline-offset-2 hover:text-white/80 text-xs text-white"
          >
            Request Urgent Callback
          </Link>
        </div>
      </div>
    </div>
  );
}
