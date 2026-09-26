import React from 'react';
import { Phone, MapPin, Star, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E6E0D6] pt-14 pb-24 sm:pb-14 text-sm text-[#4A5568]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E6E0D6]">
          
          {/* Brand & Verified Summary (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-medium text-[#121C2B] tracking-tight">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#1E40AF] font-semibold">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-sm text-[#4A5568] max-w-md leading-relaxed">
              Serving the Housing Scheme community and greater Quetta with dependable document printing, photocopies, colour printing, Urdu composing, English composing, and everyday stationery supplies.
            </p>
            
            {/* Google review verified rating */}
            <div className="flex items-center gap-1.5 text-xs text-[#121C2B]">
              <div className="flex items-center text-[#1E40AF]">
                <Star className="w-3.5 h-3.5 fill-[#1E40AF] text-[#1E40AF]" />
              </div>
              <span className="font-semibold tabular-nums">{BUSINESS_INFO.rating.score}★</span>
              <span className="text-[#7A8699]">from {BUSINESS_INFO.rating.count} {BUSINESS_INFO.rating.source}</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#121C2B]">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#1E40AF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1E40AF] transition-colors">
                  Services (What We Do)
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#1E40AF] transition-colors">
                  About / Print Studio
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-[#1E40AF] transition-colors">
                  Opening Hours
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#1E40AF] transition-colors">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#121C2B]">
              Storefront Information
            </p>
            <div className="text-xs space-y-2 text-[#4A5568]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1E40AF] mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1E40AF] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.raw}`} className="font-mono text-[#1E40AF] hover:underline">
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#1E40AF] font-medium hover:underline"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8699]">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All verified rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs text-[#121C2B] hover:text-[#1E40AF] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
