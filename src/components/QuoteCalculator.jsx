import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, Check, ArrowRight, ShieldCheck, Sparkles, 
  HelpCircle, Home, Building2, Paintbrush, Layers 
} from 'lucide-react';
import { COMPANY } from '../data/companyData';

export default function QuoteCalculator({ onBookEstimate }) {
  const navigate = useNavigate();

  const [serviceType, setServiceType] = useState('interior');
  const [propertyType, setPropertyType] = useState('semi');
  const [scope, setScope] = useState('medium');
  const [paintTier, setPaintTier] = useState('premium');
  const [includeWoodwork, setIncludeWoodwork] = useState(true);
  const [highCeilings, setHighCeilings] = useState(false);

  // Dynamic estimate calculation logic (UK market rates indicative range)
  const calculation = useMemo(() => {
    let baseMin = 400;
    let baseMax = 650;
    let days = "1 – 2 days";

    // Service multiplier
    if (serviceType === 'interior') {
      if (scope === 'small') { baseMin = 350; baseMax = 550; days = "1 – 2 days"; }
      else if (scope === 'medium') { baseMin = 750; baseMax = 1200; days = "2 – 3 days"; }
      else if (scope === 'large') { baseMin = 1400; baseMax = 2200; days = "4 – 6 days"; }
      else { baseMin = 2400; baseMax = 3800; days = "7 – 10 days"; }
    } else if (serviceType === 'exterior') {
      // Includes scaffolding platform allowance
      if (scope === 'small') { baseMin = 850; baseMax = 1350; days = "2 – 3 days"; }
      else if (scope === 'medium') { baseMin = 1600; baseMax = 2400; days = "4 – 5 days"; }
      else if (scope === 'large') { baseMin = 2600; baseMax = 3900; days = "6 – 8 days"; }
      else { baseMin = 3800; baseMax = 5800; days = "8 – 12 days"; }
    } else if (serviceType === 'scaffolding') {
      if (scope === 'small') { baseMin = 450; baseMax = 700; days = "Erected in 1 day"; }
      else if (scope === 'medium') { baseMin = 750; baseMax = 1150; days = "Erected in 1 day"; }
      else if (scope === 'large') { baseMin = 1200; baseMax = 1850; days = "Erected in 1 day"; }
      else { baseMin = 1900; baseMax = 3200; days = "Erected in 2 days"; }
    } else if (serviceType === 'commercial') {
      if (scope === 'small') { baseMin = 900; baseMax = 1500; days = "Weekend shift"; }
      else if (scope === 'medium') { baseMin = 1800; baseMax = 3000; days = "2 – 3 days"; }
      else if (scope === 'large') { baseMin = 3200; baseMax = 5200; days = "4 – 6 days"; }
      else { baseMin = 5000; baseMax = 8500; days = "Phased timeline"; }
    } else if (serviceType === 'combo') {
      // Scaffolding + Exterior + Interior Combo (15% package discount factored in)
      if (scope === 'small') { baseMin = 1100; baseMax = 1750; days = "3 – 4 days"; }
      else if (scope === 'medium') { baseMin = 2200; baseMax = 3300; days = "5 – 7 days"; }
      else if (scope === 'large') { baseMin = 3600; baseMax = 5400; days = "8 – 12 days"; }
      else { baseMin = 5500; baseMax = 8900; days = "12 – 18 days"; }
    }

    // Property factor
    if (propertyType === 'detached') {
      baseMin = Math.round(baseMin * 1.15);
      baseMax = Math.round(baseMax * 1.15);
    } else if (propertyType === 'commercial') {
      baseMin = Math.round(baseMin * 1.2);
      baseMax = Math.round(baseMax * 1.2);
    }

    // Paint tier factor
    if (paintTier === 'luxury') {
      baseMin += 120;
      baseMax += 220;
    } else if (paintTier === 'trade') {
      baseMin -= 50;
      baseMax -= 80;
    }

    // Woodwork extra
    if (includeWoodwork && serviceType !== 'scaffolding') {
      baseMin += 140;
      baseMax += 240;
    }

    // High ceilings extra
    if (highCeilings && serviceType !== 'scaffolding') {
      baseMin += 90;
      baseMax += 160;
    }

    return {
      min: baseMin,
      max: baseMax,
      days
    };
  }, [serviceType, propertyType, scope, paintTier, includeWoodwork, highCeilings]);

  const handleProceed = () => {
    const quoteDetails = {
      serviceType,
      propertyType,
      scope,
      paintTier,
      includeWoodwork,
      highCeilings,
      estimatedRange: `£${calculation.min.toLocaleString()} – £${calculation.max.toLocaleString()}`
    };

    if (onBookEstimate) {
      onBookEstimate(quoteDetails);
    } else {
      navigate('/contact', { state: { estimate: quoteDetails } });
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
        <div>
          <span className="badge-zoho bg-orange-100 text-brand-orange mb-2">
            Instant Online Guide
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">
            Free Painting & Scaffolding Estimate Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Configure your property requirements for an immediate indicative UK cost guide.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 shrink-0 self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Zero Obligation Guarantee</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Controls (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Service Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Choose Service Required
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'interior', label: 'Interior Painting', icon: Paintbrush },
                { id: 'exterior', label: 'Exterior & Render', icon: Home },
                { id: 'scaffolding', label: 'Scaffolding Only', icon: Layers },
                { id: 'commercial', label: 'Commercial Works', icon: Building2 },
                { id: 'combo', label: 'Combo (Paint + Scaffold)', icon: Sparkles }
              ].map(s => {
                const Icon = s.icon;
                const isSelected = serviceType === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceType(s.id)}
                    className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isSelected 
                        ? 'border-brand-orange bg-orange-50/60 text-navy-900 shadow-sm ring-1 ring-brand-orange' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mb-1.5 ${isSelected ? 'text-brand-orange' : 'text-slate-400'}`} />
                    <span className="text-xs font-bold leading-snug">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Property Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Property Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'flat', label: 'Flat / Terraced' },
                { id: 'semi', label: 'Semi-Detached' },
                { id: 'detached', label: 'Detached Home' },
                { id: 'commercial', label: 'Commercial Premises' }
              ].map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPropertyType(p.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                    propertyType === p.id
                      ? 'border-navy-900 bg-navy-900 text-white shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Scope / Number of Rooms */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Scope of Works
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'small', label: '1 Room / Minor' },
                { id: 'medium', label: '2 – 3 Rooms / Medium' },
                { id: 'large', label: '4 – 6 Rooms / Large' },
                { id: 'full', label: 'Entire Property' }
              ].map(sc => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setScope(sc.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                    scope === sc.id
                      ? 'border-brand-orange bg-brand-orange text-white shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  {sc.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Paint Spec & Extras */}
          {serviceType !== 'scaffolding' && (
            <div className="space-y-3 pt-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                4. Material Grade & Options
              </label>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'trade', label: 'Standard Trade Finish' },
                  { id: 'premium', label: 'Durable Scrubbable Trade' },
                  { id: 'luxury', label: 'Heritage / Eco (e.g. Farrow & Ball)' }
                ].map(pt => (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setPaintTier(pt.id)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all font-semibold ${
                      paintTier === pt.id
                        ? 'bg-navy-900 text-white border-navy-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeWoodwork}
                    onChange={(e) => setIncludeWoodwork(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-orange focus:ring-brand-orange border-slate-300"
                  />
                  <span className="text-xs font-medium text-slate-700">Include woodwork & skirting</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={highCeilings}
                    onChange={(e) => setHighCeilings(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-orange focus:ring-brand-orange border-slate-300"
                  />
                  <span className="text-xs font-medium text-slate-700">High ceilings / period cornices</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Result Card (5 Columns) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-[#07172e] rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Indicative Estimate
              </span>
              <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                UK Market Guide
              </span>
            </div>

            {/* Price Range Display */}
            <div className="py-6 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">
                Estimated Price Range
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                £{calculation.min.toLocaleString()} – £{calculation.max.toLocaleString()}
              </div>
              <span className="text-[11px] text-slate-400 block mt-1.5">
                Estimated Duration: <strong className="text-white">{calculation.days}</strong>
              </span>
            </div>

            {/* Inclusions List */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 mb-6 text-xs text-slate-300">
              <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-1">
                What's included in this estimate:
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Full dust-extraction surface preparation & filling</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Two coats of trade-grade washable finish</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Complete carpet & furniture floor draping</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Comprehensive Public Liability Insurance [Insert details]</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleProceed}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-glow transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Book Survey For This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              Final quotation confirmed following free on-site survey at your Swindon or regional property. No obligation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
