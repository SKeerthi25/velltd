"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/siteData";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800 transition-all">
        {/* Quote watermark icon */}
        <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-800/80 pointer-events-none">
          <Quote className="w-20 h-20 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
          <div>
            {/* Star Rating & Verified Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  5.0 / 5.0 Rating
                </span>
              </div>

              {current.verified && (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Customer</span>
                </div>
              )}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed mb-6 font-medium">
              &ldquo;{current.comment}&rdquo;
            </blockquote>
          </div>

          {/* Author Details and Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div>
              <div className="font-heading font-bold text-slate-900 dark:text-white text-base">
                {current.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {current.location} • <span className="text-zoho-blue dark:text-blue-400 font-medium">{current.service}</span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-500 px-2">
                {currentIndex + 1} / {TESTIMONIALS_DATA.length}
              </span>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {TESTIMONIALS_DATA.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 transition-all rounded-full ${
              idx === currentIndex
                ? "w-8 bg-zoho-blue"
                : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
