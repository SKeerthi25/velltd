import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Clock, Tag, ZoomIn, ArrowRight, CheckCircle2, 
  Layers, Paintbrush, Home, Building2, ShieldCheck 
} from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';
import LightboxModal from '../components/LightboxModal';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'interior', label: 'Interior Painting' },
    { id: 'exterior', label: 'Exterior & Render' },
    { id: 'commercial', label: 'Commercial Contracts' },
    { id: 'scaffolding', label: 'Scaffolding Works' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = () => {
    if (activeLightboxIndex > 0) {
      setActiveLightboxIndex(activeLightboxIndex - 1);
    } else {
      setActiveLightboxIndex(filteredProjects.length - 1);
    }
  };

  const handleNext = () => {
    if (activeLightboxIndex < filteredProjects.length - 1) {
      setActiveLightboxIndex(activeLightboxIndex + 1);
    } else {
      setActiveLightboxIndex(0);
    }
  };

  return (
    <>
      <SEO 
        title="Project Gallery & Case Studies | Swindon & Wiltshire Portfolios"
        description="Filterable gallery of completed interior painting, exterior render rejuvenation, commercial redecoration, and scaffolding hire across Swindon and Wiltshire."
        keywords="painting gallery Swindon, before after painting, scaffolding projects Wiltshire, decorators portfolio Swindon"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Craftsmanship in Action
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Completed Projects & Portfolio Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Browse our recent painting, decorating, and certified scaffolding contracts delivered across Swindon, Wiltshire, Oxfordshire, and Gloucestershire.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-md ring-2 ring-navy-900'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image with zoom overlay */}
                  <div 
                    onClick={() => handleOpenLightbox(idx)}
                    className="relative h-60 overflow-hidden cursor-pointer bg-slate-100"
                  >
                    <img
                      src={proj.afterImage}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category pill */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="badge-zoho bg-navy-900/90 text-white text-[10px] backdrop-blur-md">
                        {proj.categoryLabel}
                      </span>
                    </div>

                    {/* Hover Zoom overlay */}
                    <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                      <ZoomIn className="w-5 h-5 text-brand-orange" />
                      <span>Click to enlarge photo</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-brand-orange font-bold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {proj.location}
                      </span>
                      <span className="text-slate-400 font-medium">
                        {proj.completionYear}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-navy-900 text-base mb-2 group-hover:text-brand-orange transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {proj.scope}
                    </p>

                    {/* Features pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.features.map((f, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer metadata */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-slate-500">
                    Duration: <strong className="text-navy-900">{proj.duration}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(idx)}
                    className="font-bold text-brand-orange hover:underline flex items-center gap-1"
                  >
                    <span>View Image</span>
                    <ZoomIn className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          project={filteredProjects[activeLightboxIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Final Action Banner */}
      <section className="py-16 bg-navy-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display">
            Want Similar Results for Your Swindon Property?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            Contact Sharmila Vel Ltd for a free, prompt site survey and transparent itemised proposal.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/pricing-estimate"
              className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-glow"
            >
              Get Free Instant Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
            >
              Book Site Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
