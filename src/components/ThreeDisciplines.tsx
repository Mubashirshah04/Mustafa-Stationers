import React from 'react';
import { Pen, Printer, FileType } from 'lucide-react';

export const ThreeDisciplines: React.FC = () => {
  const principles = [
    {
      title: 'Stationery',
      subtitle: 'The Core Materials',
      description: 'Everyday essentials for study, office and personal use.',
      details: 'Notebooks, writing materials, paper reams, and filing solutions kept ready for local students, households, and workplaces.',
      icon: Pen,
    },
    {
      title: 'Print',
      subtitle: 'Duplication & Colour',
      description: 'Photostat, standard printing and colour printing.',
      details: 'Clear black & white photocopies, monochrome text printing, and vibrant colour prints rendered with consistent legibility.',
      icon: Printer,
    },
    {
      title: 'Compose',
      subtitle: 'Bilingual Typesetting',
      description: 'Urdu and English composing services.',
      details: 'Attentive Urdu Nastaliq composing alongside structured English typesetting for applications, notices, and documents.',
      icon: FileType,
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-[#E6E0D6] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#1E40AF] mb-2.5">
            Clear Service Focus
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121C2B] mb-4">
            Three Core Disciplines
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            Mustafa Stationers focuses on three essential categories with straightforward, reliable service.
          </p>
        </div>

        {/* 3 Columns Layout with Hairline Separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6E0D6] border-y border-[#E6E0D6]">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="py-8 md:py-10 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-[#E6E0D6] flex items-center justify-center text-[#1E40AF] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8699] block mb-1">
                    {p.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#121C2B] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#121C2B] mb-2 leading-snug">
                    {p.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {p.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
