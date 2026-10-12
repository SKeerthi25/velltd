import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CookieConsent from './components/CookieConsent';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import InteriorPaintingPage from './pages/InteriorPaintingPage';
import ExteriorPaintingPage from './pages/ExteriorPaintingPage';
import CommercialPaintingPage from './pages/CommercialPaintingPage';
import ResidentialPaintingPage from './pages/ResidentialPaintingPage';
import ScaffoldingPage from './pages/ScaffoldingPage';
import DecoratingPage from './pages/DecoratingPage';
import ProjectsPage from './pages/ProjectsPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FaqsPage from './pages/FaqsPage';
import AreasCoveredPage from './pages/AreasCoveredPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-slate-800 antialiased selection:bg-brand-orange selection:text-white">
      {/* 2-Second Animated Splash Loader (once per session) */}
      <LoadingScreen onFinish={() => setLoadingComplete(true)} />

      {/* Auto scroll restoration on navigation */}
      <ScrollToTop />

      {/* Sticky Header with Zoho-Style Mega Menu */}
      <Header />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/interior-painting" element={<InteriorPaintingPage />} />
          <Route path="/services/exterior-painting" element={<ExteriorPaintingPage />} />
          <Route path="/services/commercial-painting" element={<CommercialPaintingPage />} />
          <Route path="/services/residential-painting" element={<ResidentialPaintingPage />} />
          <Route path="/services/scaffolding-services" element={<ScaffoldingPage />} />
          <Route path="/services/decorating-wall-finishing" element={<DecoratingPage />} />
          
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/pricing-estimate" element={<PricingPage />} />
          
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/areas-we-cover" element={<AreasCoveredPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Dark Footer with statutory UK registration & legal details */}
      <Footer />

      {/* Mobile Sticky Bar (Call Now & Get Quote) */}
      <MobileStickyBar />

      {/* UK GDPR / PECR Cookie Consent System */}
      <CookieConsent />
    </div>
  );
}
