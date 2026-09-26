import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const LocationSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'address' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'address' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 border-b border-[#E6E0D6] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#1E40AF] mb-2.5">
            Storefront Location
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121C2B] mb-4">
            Find Mustafa Stationers in Quetta.
          </h2>
          <p className="text-base text-[#4A5568] leading-relaxed">
            Conveniently situated along the main Samungli Road corridor in Housing Scheme, Quetta, accessible for students, office staff, and walk-in visitors.
          </p>
        </div>

        {/* Location Grid: Details Card (5 cols) + Embedded Map (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address & Direct Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#FAF7F2] border border-[#E6E0D6]">
            
            <div className="space-y-6">
              
              {/* Address block */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8699] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1E40AF]" />
                    <span>Physical Address</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(BUSINESS_INFO.address.full, 'address')}
                    className="text-xs text-[#1E40AF] hover:text-[#121C2B] inline-flex items-center gap-1 transition-colors"
                    title="Copy full address"
                  >
                    {copiedType === 'address' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#E6E0D6]">
                  <p className="font-serif text-lg font-medium text-[#121C2B] leading-snug">
                    Shop No. 10, Samungli Road
                  </p>
                  <p className="text-sm text-[#4A5568] mt-1">
                    Housing Scheme, Quetta, 87300, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone block */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8699] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#1E40AF]" />
                    <span>Telephone Contact</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(BUSINESS_INFO.phone.display, 'phone')}
                    className="text-xs text-[#1E40AF] hover:text-[#121C2B] inline-flex items-center gap-1 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedType === 'phone' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#E6E0D6]">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.raw}`}
                    className="font-mono text-xl font-semibold text-[#1E40AF] hover:underline"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                  <p className="text-xs text-[#7A8699] mt-1">
                    Available during shop hours for queries and document guidance
                  </p>
                </div>
              </div>

              {/* Services reminder */}
              <div className="pt-2 text-xs text-[#526075] space-y-1">
                <p className="font-medium text-[#121C2B]">Available on Site:</p>
                <p>• Photostat / Photocopying</p>
                <p>• Black & White Printing</p>
                <p>• Colour Printing</p>
                <p>• Urdu Composing & English Composing</p>
                <p>• General Stationery Items</p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#E6E0D6] flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone.raw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#121C2B] hover:bg-[#1E40AF] rounded-lg transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#121C2B] bg-white hover:bg-[#F3EFE8] border border-[#E6E0D6] rounded-lg transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#1E40AF]" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map with Fallback (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px] rounded-xl overflow-hidden border border-[#E6E0D6] bg-[#FAF7F2] shadow-xs">
              <iframe
                title="Mustafa Stationers Location Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Badge with direct Maps link */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-[#E6E0D6] shadow-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1E40AF]" />
                <div className="text-[11px] leading-tight text-left">
                  <p className="font-semibold text-[#121C2B]">Shop No. 10</p>
                  <p className="text-[#526075]">Samungli Rd, Housing Scheme</p>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 p-1 text-[#1E40AF] hover:text-[#121C2B]"
                  title="Open external map"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-[#7A8699] px-1">
              <span>Samungli Road, Housing Scheme, Quetta</span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E40AF] hover:underline inline-flex items-center gap-1"
              >
                <span>Open full navigation map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
