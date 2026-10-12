import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';

export default function LightboxModal({ project, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Project image: ${project.title}`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
        aria-label="Close preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="max-w-4xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 max-h-[90vh] flex flex-col">
        <div className="relative h-[400px] sm:h-[500px] bg-black/40 flex items-center justify-center overflow-hidden">
          <img
            src={project.afterImage || project.beforeImage}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-navy-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge-zoho bg-brand-orange text-white text-[10px]">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-orange" />
                {project.location}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              {project.scope}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[11px] text-slate-400 block">Completion</span>
            <span className="text-xs font-bold text-white">{project.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
