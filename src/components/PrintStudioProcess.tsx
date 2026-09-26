import React, { useState } from 'react';
import { FileEdit, Sliders, Printer, Check, Eye } from 'lucide-react';
import processImage from '../assets/images/process_layout_print_1790443724219.jpg';
import proofImage from '../assets/images/composing_proof_sheet_1790443759322.jpg';

interface Stage {
  id: 'idea' | 'layout' | 'print';
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  specimen: {
    title: string;
    englishContent: string;
    urduContent: string;
    details: string[];
  };
}

export const PrintStudioProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'idea' | 'layout' | 'print'>('layout');

  const stages: Stage[] = [
    {
      id: 'idea',
      number: '01',
      name: 'Document & Content',
      subtitle: 'Input & Manuscript',
      tagline: 'Raw text, drafts, formal applications, and handwritten notes',
      description:
        'Every project starts with content—whether handwritten legal briefs, official application drafts, lecture notes, or Urdu & English manuscripts brought in by customers.',
      specimen: {
        title: 'Initial Document Ingest',
        englishContent: 'Draft document review: formatting requirements, margins, language orientation, and structural breakdown.',
        urduContent: 'مسودہ برائے کمپوزنگ: درخوست، نوٹس، اور ضروری دستاویزات کے ابتدائی خاکے کی تیاری۔',
        details: [
          'Text capture and review',
          'Language specification (Urdu / English)',
          'Structural outline and document purpose',
        ],
      },
    },
    {
      id: 'layout',
      number: '02',
      name: 'Typography & Layout',
      subtitle: 'Composing Discipline',
      tagline: 'Precision Urdu Nastaliq & English typographic typesetting',
      description:
        'Our composing workstation aligns typography, line spacing, margins, and headings. For Urdu composing, authentic Nastaliq calligraphy balance ensures natural legibility; for English, clean hierarchy and proportional leading.',
      specimen: {
        title: 'Bilingual Typesetting Proof',
        englishContent: 'Typography layout proof: Balanced leading, serif hierarchy, disciplined line measure, and proportional grid alignment.',
        urduContent: 'نستعلیق خطاطی اور اردو کمپوزنگ: مناسب فواصل، متوازن سطور، اور معیاری طباعت کی تیاری۔',
        details: [
          'Nastaliq calligraphy baseline tuning',
          'Proportional margins and header hierarchy',
          'Grammar, punctuation and diacritics check',
        ],
      },
    },
    {
      id: 'print',
      number: '03',
      name: 'Finished Printed Page',
      subtitle: 'Output & Duplication',
      tagline: 'Crisp black & white photostat or rich colour output',
      description:
        'From high-speed monochrome photocopying to vibrant colour document reproduction, the finished document emerges on crisp paper stock, aligned and ready for submission or presentation.',
      specimen: {
        title: 'Final Print Reproduction',
        englishContent: 'Final proof copy inspected: high-density deep ink, crisp edge definition, zero smudge, and accurate colour calibration.',
        urduContent: 'مکمل طباعت شدہ صفحہ: واضح الفاظ، گہری سیاہی، اور صاف ستھرا پریس پرنٹ۔',
        details: [
          'High optical density & contrast',
          'Precise duplex / single-sheet alignment',
          'Clean photostat duplication clarity',
        ],
      },
    },
  ];

  const currentStage = stages.find((s) => s.id === activeStage) || stages[1];

  return (
    <section id="process" className="py-16 sm:py-24 border-b border-[#E6E0D6] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#1E40AF] mb-2.5">
              The Print Studio Transformation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121C2B]">
              Idea → Layout → Print
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4A5568] leading-relaxed">
            How documents travel through Mustafa Stationers: from raw ideas and rough drafts into impeccably formatted Urdu & English prints.
          </p>
        </div>

        {/* 3 Interactive Stages Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {stages.map((stage) => {
            const isActive = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF7F2] border-[#1E40AF] shadow-xs ring-1 ring-[#1E40AF]'
                    : 'bg-white border-[#E6E0D6] hover:bg-[#FAF7F2]/60 hover:border-[#1E40AF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-serif text-xl font-medium tabular-nums ${isActive ? 'text-[#1E40AF]' : 'text-[#7A8699]'}`}>
                    {stage.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7A8699]">
                    {stage.subtitle}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#121C2B] mb-1">
                  {stage.name}
                </h3>
                <p className="text-xs text-[#526075] line-clamp-2">
                  {stage.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Stage Presentation: Split Screen (Prose & Typography Specimen + Studio Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Specimen Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#FAF7F2] border border-[#E6E0D6]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E6E0D6]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E40AF]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#121C2B]">
                    Stage {currentStage.number}: {currentStage.name}
                  </span>
                </div>
                <span className="text-xs text-[#7A8699]">Live Composing Specimen</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#121C2B] mb-3">
                {currentStage.tagline}
              </h3>

              <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                {currentStage.description}
              </p>

              {/* Typographic Specimen Box */}
              <div className="p-5 rounded-lg bg-white border border-[#E6E0D6] space-y-4 shadow-xs">
                <div className="flex items-center justify-between text-[11px] text-[#7A8699] border-b border-[#F0ECE1] pb-2">
                  <span className="font-mono uppercase tracking-wider">Specimen: {currentStage.specimen.title}</span>
                  <span className="italic">Urdu & English Composition</span>
                </div>

                {/* English Specimen */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1E40AF]">English Typesetting:</span>
                  <p className="text-sm text-[#121C2B] font-serif leading-relaxed mt-1">
                    "{currentStage.specimen.englishContent}"
                  </p>
                </div>

                {/* Urdu Specimen in genuine Nastaliq */}
                <div className="pt-2 border-t border-[#F0ECE1]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1E40AF]">اردو کمپوزنگ (Urdu Composing):</span>
                    <span className="text-[10px] text-[#7A8699]">نستعلیق</span>
                  </div>
                  <p 
                    dir="rtl" 
                    className="text-base sm:text-lg text-[#121C2B] font-urdu leading-loose mt-1 text-right"
                  >
                    "{currentStage.specimen.urduContent}"
                  </p>
                </div>
              </div>
            </div>

            {/* Stage Feature Checklist */}
            <div className="mt-6 pt-5 border-t border-[#E6E0D6] grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentStage.specimen.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#4A5568]">
                  <Check className="w-3.5 h-3.5 text-[#1E40AF] mt-0.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Studio Photography Pair (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Image 1: Process and layout paper */}
            <div className="relative rounded-xl overflow-hidden border border-[#E6E0D6] bg-[#FAF7F2] aspect-16/10">
              <img
                src={activeStage === 'idea' || activeStage === 'layout' ? processImage : proofImage}
                alt="Document proofing and layout on print studio desk"
                className="w-full h-full object-cover transition-opacity duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121C2B]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-[#121C2B]/80 backdrop-blur-xs px-3 py-1.5 rounded-md border border-white/10">
                <span className="font-medium">
                  {activeStage === 'print' ? 'CMYK & Monochrome Output' : 'Typesetting & Grid Alignment'}
                </span>
                <span className="text-[10px] opacity-80">Studio Study</span>
              </div>
            </div>

            {/* Compact studio caption box */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6E0D6] text-xs text-[#526075] flex items-center gap-3">
              <Eye className="w-4 h-4 text-[#1E40AF] shrink-0" />
              <p>
                <strong className="text-[#121C2B] font-medium">Bilingual Specialization:</strong> Urdu and English composing handled with precision and proper character spacing at Shop No. 10.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
