"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function MobileBottomBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if mobile menu is active on body
    const checkMenu = () => {
      setIsMenuOpen(document.body.classList.contains("mobile-menu-active"));
    };

    // Observer for body class changes
    const observer = new MutationObserver(checkMenu);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  // When mobile drawer is open, hide bottom elements to prevent any collisions or overlapping
  if (isMenuOpen) return null;

  return (
    <>
      {/* Floating WhatsApp Action Button (Mobile & Desktop) */}
      <aside
        aria-label="Quick contact"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40"
      >
        <a
          href={SITE_INFO.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-green-600/35 hover:scale-105 active:scale-95 transition group"
          aria-label="Chat on WhatsApp with P Selvam"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="hidden sm:inline-block font-bold text-sm tracking-wide">
            WhatsApp Us
          </span>
        </a>
      </aside>

      {/* Sticky Bottom Bar on Mobile Screens (360px - 640px) */}
      <nav
        aria-label="Mobile quick actions"
        className="fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 p-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.12)]"
      >
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          {/* Quick Call */}
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition min-h-[46px] border border-slate-300 dark:border-slate-700"
          >
            <Phone className="w-4 h-4 text-zoho-blue" />
            <span>Call Now</span>
          </a>

          {/* Quick Quote */}
          <Link
            href="/quote"
            prefetch={true}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-zoho-blue to-blue-600 hover:from-blue-600 hover:to-zoho-blue text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition min-h-[46px] shadow-md shadow-blue-500/25"
          >
            <FileText className="w-4 h-4" />
            <span>Get Quote</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
