import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { PrintStudioProcess } from './components/PrintStudioProcess';
import { StationeryShowcase } from './components/StationeryShowcase';
import { ThreeDisciplines } from './components/ThreeDisciplines';
import { BusinessHours } from './components/BusinessHours';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#121C2B] flex flex-col font-sans paper-grain selection:bg-[#1E40AF] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero />

        {/* 01-06 Services Grid: "What We Do" */}
        <ServicesGrid />

        {/* Print Studio Visual Section: "Idea → Layout → Print" */}
        <PrintStudioProcess />

        {/* Stationery Showcase: "The Essentials, Beautifully Organized." */}
        <StationeryShowcase />

        {/* Editorial Principles: Stationery • Print • Compose */}
        <ThreeDisciplines />

        {/* Store Schedule & Real-Time Status */}
        <BusinessHours />

        {/* Location & Embedded Map */}
        <LocationSection />

        {/* Final Direct Call-to-Action */}
        <FinalCTA />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Mobile-Only Thumb-Friendly Quick Bar */}
      <MobileQuickBar />
    </div>
  );
}
