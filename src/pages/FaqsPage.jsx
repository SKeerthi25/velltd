import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, ChevronDown, Search, ArrowRight, ShieldCheck, 
  Phone, MessageSquare, Check 
} from 'lucide-react';
import { FAQS } from '../data/faqsData';
import { COMPANY } from '../data/companyData';
import SEO from '../components/SEO';

export default function FaqsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter categories and questions
  const filteredCategories = FAQS.map(cat => {
    const matchingQuestions = cat.questions.filter(item => {
      const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });

    return {
      ...cat,
      questions: matchingQuestions
    };
  }).filter(cat => {
    if (activeTab === 'all') return cat.questions.length > 0;
    return cat.category.toLowerCase().includes(activeTab.toLowerCase()) && cat.questions.length > 0;
  });

  return (
    <>
      <SEO 
        title="Frequently Asked Questions (FAQs) | Sharmila Vel Ltd"
        description="Find answers to common questions about interior painting, exterior render weatherproofing, scaffolding hire, and commercial contracts in Swindon."
        keywords="painting FAQs Swindon, scaffolding questions, decorator insurance Swindon, painting cost FAQs"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-zoho bg-brand-orange text-white text-xs">
            Help & Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our painting procedures, scaffolding safety, pricing, and project timelines.
          </p>

          {/* Search Input */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. scaffolding, insurance, quote)..."
                className="w-full py-3.5 pl-12 pr-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-lg"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'general', label: 'General & Estimates' },
              { id: 'interior', label: 'Interior Painting' },
              { id: 'exterior', label: 'Exterior & Scaffolding' },
              { id: 'commercial', label: 'Commercial Contracts' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="space-y-10">
            {filteredCategories.map((cat, cIdx) => (
              <div key={cIdx} className="space-y-4">
                <h2 className="text-lg font-extrabold text-navy-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  <span>{cat.category}</span>
                </h2>

                <div className="space-y-3">
                  {cat.questions.map((q, qIdx) => {
                    const itemKey = `${cIdx}-${qIdx}`;
                    const isOpen = Boolean(openItems[itemKey]);

                    return (
                      <div
                        key={qIdx}
                        className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm bg-slate-50/50"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-navy-900 hover:text-brand-orange transition-colors"
                        >
                          <span>{q.q}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-brand-orange' : ''}`} />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-2 text-xs text-slate-600 leading-relaxed border-t border-slate-200 bg-white">
                            {q.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No matching questions found for "{searchQuery}". Please contact our team directly.
              </div>
            )}
          </div>

          {/* Still have questions card */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
            <h3 className="text-xl font-bold text-navy-900">
              Still Have a Question We Haven't Covered?
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Our team is always delighted to offer professional advice on colour schemes, scaffolding licences, or access restrictions.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call {COMPANY.phoneDisplay}</span>
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs shadow-glow"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
