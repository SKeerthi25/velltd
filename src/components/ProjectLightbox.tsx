"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, CheckCircle2, ZoomIn, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS_DATA, ProjectItem } from "@/data/siteData";

export default function ProjectLightbox() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "cctv", label: "CCTV Systems" },
    { id: "electrical", label: "Electrical & Rewire" },
    { id: "lighting", label: "Lighting & LED" },
    { id: "sockets", label: "Sockets & Power" },
  ];

  const filtered = PROJECTS_DATA.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeCategory === cat.id
                ? "bg-zoho-blue text-white shadow-md shadow-blue-500/25"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Thumbnail */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white p-3 rounded-full shadow-lg">
                  <ZoomIn className="w-5 h-5 text-zoho-blue" />
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-zoho-blue dark:text-blue-400 border border-slate-200 dark:border-slate-800">
                {project.category.toUpperCase()}
              </div>
            </div>

            {/* Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-zoho-blue" />
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.date}</span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-zoho-blue dark:group-hover:text-blue-400 transition mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-zoho-blue dark:text-blue-400">
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                  {selectedProject.category.toUpperCase()} PROJECT
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <MapPin className="w-4 h-4 text-zoho-blue" />
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>{selectedProject.date}</span>
                </div>
              </div>

              <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Technical Highlights */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technical Scope &amp; Equipment Fitted:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-500">
                  Interested in a similar setup for your property?
                </span>
                <Link
                  href="/quote"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zoho-blue hover:bg-zoho-blue-dark text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl shadow-md transition"
                >
                  <span>Request Similar Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
