import React from 'react';
import { Book, PenTool, Layers, Folder, FileCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import stationeryImage from '../assets/images/stationery_essentials_1790443742553.jpg';

export const StationeryShowcase: React.FC = () => {
  const stationeryCategories = [
    {
      title: 'Notebooks & Registers',
      icon: Book,
      desc: 'Ruled, grid, and plain paper registers for academic coursework, accounting, and daily office record-keeping.',
    },
    {
      title: 'Writing Instruments',
      icon: PenTool,
      desc: 'Ballpoint pens, gel pens, fineliners, graphite drafting pencils, markers, and corrective materials.',
    },
    {
      title: 'Filing & Organisation',
      icon: Folder,
      desc: 'Document folders, clear sleeves, ring binders, file clips, and archival storage covers for paperwork.',
    },
    {
      title: 'Paper & Sheets',
      icon: Layers,
      desc: 'Standard paper reams, bond paper, drafting sheets, legal size pages, and specialty sheets for clear printing.',
    },
    {
      title: 'Photostat Supplies',
      icon: FileCheck,
      desc: 'Ready-to-use duplication paper, binding clips, and daily supplies for students and local businesses.',
    },
  ];

  return (
    <section id="showcase" className="py-16 sm:py-24 border-b border-[#E6E0D6] bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#1E40AF] mb-2.5">
            Everyday Supplies & Materials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121C2B] mb-4">
            The Essentials, Beautifully Organized.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            From everyday stationery needs to printing and composing, Mustafa Stationers brings essential services together in one convenient place.
          </p>
        </div>

        {/* Asymmetric Showcase Grid: Large Image (5 cols) + Curated Essentials List (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-3 bg-white rounded-xl border border-[#E6E0D6] shadow-xs">
              <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-[#EFEAE1]">
                <img
                  src={stationeryImage}
                  alt="Flatlay of notebooks, pens, folders and paper stationery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121C2B]/35 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-3 px-1 flex items-center justify-between text-[11px] text-[#7A8699]">
                <span>Everyday study & office stationery overview</span>
                <span className="italic">Illustrative visual</span>
              </div>
            </div>

            {/* Disclaimer pill-free note as per instructions */}
            <p className="mt-3 text-[11px] text-[#7A8699] leading-relaxed">
              *Visual arrangement is illustrative of standard stationery items. Mustafa Stationers supplies everyday stationery essentials directly from Shop No. 10, Samungli Road.
            </p>
          </div>

          {/* Categories Grid (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            {stationeryCategories.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl bg-white border border-[#E6E0D6] hover:border-[#1E40AF]/40 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E6E0D6] flex items-center justify-center text-[#1E40AF] shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#121C2B] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick in-store action */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#526075]">
              <span>Visit Shop No. 10 for complete in-store stationery supplies.</span>
              <a
                href={`tel:${BUSINESS_INFO.phone.raw}`}
                className="inline-flex items-center gap-1.5 font-semibold text-[#1E40AF] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call store: {BUSINESS_INFO.phone.display}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
