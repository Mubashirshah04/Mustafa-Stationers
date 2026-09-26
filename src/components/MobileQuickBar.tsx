import React from 'react';
import { Phone, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121C2B]/95 backdrop-blur-md border-t border-[#E6E0D6]/20 px-3 py-2 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phone.raw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-[#121C2B] bg-white rounded-lg active:scale-98 transition-transform shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#1E40AF]" />
          <span>Call: {BUSINESS_INFO.phone.display}</span>
        </a>

        <a
          href="#location"
          className="flex items-center justify-center p-2.5 text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
          title="Get Directions"
          aria-label="Get Directions to Mustafa Stationers"
        >
          <Navigation className="w-4 h-4 text-[#60A5FA]" />
        </a>

        <a
          href="#hours"
          className="flex items-center justify-center p-2.5 text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
          title="View Opening Hours"
          aria-label="View Opening Hours"
        >
          <Clock className="w-4 h-4 text-[#60A5FA]" />
        </a>
      </div>
    </div>
  );
};
