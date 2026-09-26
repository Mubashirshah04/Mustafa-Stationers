import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'What We Do', href: '#services' },
    { name: 'Print Studio', href: '#process' },
    { name: 'Essentials', href: '#showcase' },
    { name: 'Hours', href: '#hours' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6E0D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark in display serif */}
          <div className="flex items-center">
            <a
              href="#"
              className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#121C2B] hover:text-[#1E40AF] transition-colors"
            >
              Mustafa Stationers
            </a>
          </div>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A5568]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#121C2B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1E40AF] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#121C2B] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#121C2B] hover:bg-[#EFEAE1] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6E0D6] bg-[#FAF7F2] px-4 pt-2 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-[#121C2B] hover:bg-[#EFEAE1] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E6E0D6] flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phone.raw}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#121C2B] rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-medium text-[#4A5568] border border-[#E6E0D6] rounded-lg bg-white"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
