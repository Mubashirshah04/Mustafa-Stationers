import React, { useState } from 'react';
import { 
  BookOpen, 
  Copy, 
  Printer, 
  Palette, 
  Languages, 
  FileText, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const ServicesGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceIcons = {
    "01": BookOpen,
    "02": Copy,
    "03": Printer,
    "04": Palette,
    "05": Languages,
    "06": FileText,
  };

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-[#E6E0D6] bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#1E40AF] mb-2.5">
            Verified Service Disciplines
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121C2B] mb-4">
            What We Do
          </h2>
          <p className="text-base text-[#4A5568] leading-relaxed">
            Essential document production, precision printing, and day-to-day stationery supplies serving Housing Scheme and Quetta residents.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_INFO.services.map((service) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons] || FileText;
            const isSelected = selectedService === service.id;

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border transition-all duration-200 ${
                  isSelected 
                    ? 'border-[#1E40AF] shadow-md ring-1 ring-[#1E40AF]/20' 
                    : 'border-[#E6E0D6] hover:border-[#1E40AF]/50 hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Card Header: Editorial Number and Category Indicator */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0ECE1]">
                    <span className="font-serif text-2xl font-light text-[#1E40AF]/75 tabular-nums">
                      {service.id}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-medium text-[#7A8699]">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E6E0D6] flex items-center justify-center text-[#1E40AF] group-hover:bg-[#1E40AF] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#121C2B]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Verified Concise Description */}
                  <p className="text-sm font-medium text-[#121C2B] mb-2 leading-snug">
                    {service.description}
                  </p>

                  {/* Expanded Scope Description */}
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Card Action footer */}
                <div className="mt-6 pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.raw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E40AF] hover:text-[#121C2B] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire: {BUSINESS_INFO.phone.display}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedService(isSelected ? null : service.id)}
                    className="text-xs text-[#7A8699] hover:text-[#121C2B] inline-flex items-center gap-1 transition-colors"
                    aria-label={`Toggle info for ${service.title}`}
                  >
                    <span>{isSelected ? 'Close' : 'Details'}</span>
                    <ArrowRight className={`w-3 h-3 transition-transform duration-200 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
                  </button>
                </div>

                {/* Subtle expanded panel if active */}
                {isSelected && (
                  <div className="mt-3 p-3 bg-[#FAF7F2] rounded-lg border border-[#E6E0D6] text-xs text-[#4A5568] space-y-1.5 animate-in fade-in duration-200">
                    <p className="font-semibold text-[#121C2B]">Available at Shop No. 10:</p>
                    <p>Walk-in document handling available on Samungli Road during store hours (10:30 AM – 10:30 PM, Fri from 3:30 PM).</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet assurance strip */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#E6E0D6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5568]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="font-semibold text-[#121C2B]">Walk-ins & Inquiries Welcome:</span>
            <span>All six services are handled directly at the shop counter on Samungli Road.</span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone.raw}`}
            className="inline-flex items-center gap-1.5 font-semibold text-[#1E40AF] hover:underline shrink-0"
          >
            <span>Questions? Call {BUSINESS_INFO.phone.display}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
