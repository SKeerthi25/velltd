import React from "react";
import { ShieldCheck, Zap, Award, Clock } from "lucide-react";

export default function StatsCounter() {
  const stats = [
    {
      value: "500+",
      label: "Properties Secured & Wired",
      sublabel: "Across Swindon & Wiltshire",
      icon: Zap,
      color: "text-zoho-blue bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900",
    },
    {
      value: "100%",
      label: "UK Safety Standards Compliant",
      sublabel: "BS 7671 18th Edition certified",
      icon: ShieldCheck,
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900",
    },
    {
      value: "24/7",
      label: "Emergency Rapid Response",
      sublabel: "Prioritised urgent callouts",
      icon: Clock,
      color: "text-rose-500 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900",
    },
    {
      value: "5.0 ★",
      label: "Customer Rating Average",
      sublabel: "Verified local homeowner reviews",
      icon: Award,
      color: "text-amber-500 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div className={`p-3 rounded-2xl w-fit mb-4 border ${stat.color}`}>
              <Icon className="w-6 h-6" />
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {stat.sublabel}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
