import React from 'react';
import { Phone, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#121C2B] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Editorial Subtitle */}
        <p className="text-xs uppercase tracking-widest font-semibold text-[#60A5FA] mb-3">
          Housing Scheme, Quetta
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-5 text-balance">
          Need a Print or Stationery Service?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-8 leading-relaxed">
          Visit Mustafa Stationers on Samungli Road, Housing Scheme, Quetta.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <a
            href={`tel:${BUSINESS_INFO.phone.raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-[#121C2B] bg-white hover:bg-[#F3EFE8] rounded-lg transition-all shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#1E40AF]" />
            <span>Call Now ({BUSINESS_INFO.phone.display})</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#60A5FA]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Quiet footer indicators */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Open: 10:30 AM – 10:30 PM (Fri ~3:30 PM)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Verified 4.9★ rating from 12 Google reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
};
