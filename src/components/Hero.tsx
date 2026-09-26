import React from 'react';
import { Phone, Navigation, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import heroImage from '../assets/images/hero_print_studio_1790443706231.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E6E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#4A5568] mb-5 tracking-wide">
              <span>Housing Scheme, Quetta</span>
              <span aria-hidden="true" className="text-[#A0AEC0]">·</span>
              <span>Shop No. 10, Samungli Road</span>
              <span aria-hidden="true" className="text-[#A0AEC0]">·</span>
              <span className="inline-flex items-center gap-1 text-[#1E40AF]">
                <Star className="w-3.5 h-3.5 fill-[#1E40AF] text-[#1E40AF]" />
                <span className="font-semibold tabular-nums">{BUSINESS_INFO.rating.score}</span>
                <span className="text-[#4A5568]">({BUSINESS_INFO.rating.count} {BUSINESS_INFO.rating.source})</span>
              </span>
            </div>

            {/* Large headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121C2B] leading-[1.12] mb-6 text-balance">
              Everything You Need. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#1E40AF]">Printed With Precision.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-2xl mb-8">
              Mustafa Stationers provides stationery, photostat, printing, colour printing, and Urdu & English composing services in Housing Scheme, Quetta.
            </p>

            {/* CTAs & Phone display */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phone.raw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#121C2B] hover:bg-[#1E40AF] rounded-lg transition-all shadow-sm focus:ring-2 focus:ring-[#1E40AF] focus:ring-offset-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Mustafa Stationers</span>
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#121C2B] bg-white hover:bg-[#F3EFE8] border border-[#E6E0D6] rounded-lg transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#1E40AF]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Direct phone prominence and verification trust line */}
            <div className="pt-6 border-t border-[#E6E0D6] flex flex-wrap items-center justify-between gap-4 text-xs text-[#526075]">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#121C2B]">Direct Phone:</span>
                <a
                  href={`tel:${BUSINESS_INFO.phone.raw}`}
                  className="font-mono tabular-nums text-sm font-semibold text-[#1E40AF] hover:underline"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-[#526075]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1E40AF]" />
                <span>Open today · 10:30 AM – 10:30 PM (Fri 3:30 PM)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Paper mat effect frame */}
              <div className="p-2 sm:p-3 bg-white rounded-xl border border-[#E6E0D6] shadow-sm">
                <div className="relative aspect-16/10 sm:aspect-4/3 rounded-lg overflow-hidden bg-[#F3EFE8]">
                  <img
                    src={heroImage}
                    alt="Editorial desk arrangement with notebooks, paper sheets, and printed documents"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121C2B]/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle lower card tag in image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 bg-[#121C2B]/75 backdrop-blur-xs px-3 py-1.5 rounded-md border border-white/10">
                    <span className="font-medium">Quetta Print & Stationery Studio</span>
                    <span className="opacity-80">Housing Scheme</span>
                  </div>
                </div>

                {/* Honest caption as required by instructions */}
                <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] text-[#7A8699]">
                  <span>Visual study of print studio craftsmanship</span>
                  <span className="italic">Illustrative demonstration</span>
                </div>
              </div>

              {/* Offset decorative paper corner line */}
              <div 
                aria-hidden="true" 
                className="hidden sm:block absolute -bottom-3 -right-3 w-28 h-28 border-r-2 border-b-2 border-[#1E40AF]/20 rounded-br-xl pointer-events-none -z-10" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
