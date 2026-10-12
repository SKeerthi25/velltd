"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Building, Store, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomeClientTabs() {
  const [activeTab, setActiveTab] = useState<"residential" | "landlords" | "commercial">("residential");

  const tabData = {
    residential: {
      title: "Solutions for Homeowners & Families",
      badge: "Domestic Safety & Peace of Mind",
      description:
        "Protect what matters most. From installing high-resolution 4K CCTV covering driveways and rear gardens to full domestic rewires and modern USB-C charging sockets.",
      points: [
        "ColorVu 24/7 full-colour night vision with zero monthly subscription fees",
        "18th Edition metal consumer unit upgrades with surge protection (SPD)",
        "Fire-rated dimmable LED downlights for kitchens, lounges, and bathrooms",
        "IP66 weatherproof outdoor sockets for garden tools, lighting, and hot tubs",
      ],
      linkText: "Explore Residential Solutions",
      linkHref: "/services",
    },
    landlords: {
      title: "Landlords, Letting Agents & HMO Managers",
      badge: "Regulatory Compliance & Certification",
      description:
        "Keep your rental properties fully compliant with UK Electrical Safety Standards (The Electrical Safety Standards in the Private Rented Sector Regulations).",
      points: [
        "Electrical Installation Condition Reports (EICR) with prompt remedial works",
        "Mains-powered interconnected smoke, heat, and carbon monoxide detectors",
        "Rapid turnaround times to ensure zero tenant check-in delays",
        "Pre-tenancy safety assessments and digital compliance certificates",
      ],
      linkText: "Request Landlord EICR Inspection",
      linkHref: "/quote",
    },
    commercial: {
      title: "Retail Stores, Offices & Commercial Units",
      badge: "Enterprise Security & Infrastructure",
      description:
        "Robust electrical and surveillance solutions tailored for busy commercial premises across Swindon and surrounding industrial corridors.",
      points: [
        "8 to 16 camera commercial 4K CCTV systems with till and loading bay coverage",
        "Dedicated radial circuits for high-draw machinery, server racks, and refrigeration",
        "High-efficiency commercial LED batten and emergency exit lighting",
        "Out-of-hours scheduled installations to prevent business downtime",
      ],
      linkText: "Discuss Commercial Contracting",
      linkHref: "/quote",
    },
  };

  const current = tabData[activeTab];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800">
      {/* Tab Buttons */}
      <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100 dark:border-slate-800 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("residential")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition ${
            activeTab === "residential"
              ? "bg-zoho-blue text-white shadow-md shadow-blue-500/25"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Homeowners</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("landlords")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition ${
            activeTab === "landlords"
              ? "bg-zoho-blue text-white shadow-md shadow-blue-500/25"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Landlords &amp; Agents</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("commercial")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition ${
            activeTab === "commercial"
              ? "bg-zoho-blue text-white shadow-md shadow-blue-500/25"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          <Store className="w-4 h-4" />
          <span>Commercial &amp; Retail</span>
        </button>
      </div>

      {/* Tab Content Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 inline-block">
            {current.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white">
            {current.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {current.description}
          </p>

          <div className="pt-2">
            <Link
              href={current.linkHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-zoho-blue dark:text-blue-400 hover:underline"
            >
              <span>{current.linkText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-3 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Key Highlights:
          </span>
          {current.points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
