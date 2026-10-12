"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS_DATA } from "@/data/siteData";

export default function FAQAccordion({
  limit,
  initialCategory = "All",
}: {
  limit?: number;
  initialCategory?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = ["All", ...Array.from(new Set(FAQS_DATA.map((item) => item.category)))];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }).slice(0, limit || FAQS_DATA.length);

  return (
    <div className="w-full">
      {/* Category Pills if more than one */}
      {categories.length > 2 && !limit && (
        <div className="flex flex-wrap items-center gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                selectedCategory === cat
                  ? "bg-zoho-blue text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion Items */}
      <div className="space-y-3.5">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "bg-white dark:bg-slate-900 border-zoho-blue/50 dark:border-blue-500/40 shadow-soft"
                  : "bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-xl flex-shrink-0 transition ${
                      isOpen
                        ? "bg-blue-50 dark:bg-blue-950/60 text-zoho-blue dark:text-blue-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base pt-0.5">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-blue-50 dark:bg-blue-950/60 text-zoho-blue" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-0 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-2 pt-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
