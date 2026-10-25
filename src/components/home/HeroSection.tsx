import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#2A201D]">
      {/* 
        Single unified cinematic background image bringing together salon atmosphere,
        hair artistry textures, and calm spa sanctuary lighting in one composition.
        (No split screens, no side-by-side cards, no collage)
      */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=85&w=2000&auto=format&fit=crop')`,
        }}
        role="img"
        aria-label="Cinematic beauty salon and spa sanctuary interior bathed in soft warm light"
      >
        {/* Subtle, luxurious warm gradient overlay for high editorial readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A201D]/85 via-[#2A201D]/65 to-[#2A201D]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A201D] via-transparent to-[#2A201D]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EBD0]/15 border border-[#D8C29A]/40 backdrop-blur-sm mb-6 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-[#D8C29A]" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#F5EBD0] uppercase">
            BEAUTY &bull; BRAIDING &bull; SPA &bull; WELLNESS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F9F6F0] leading-[1.08] max-w-4xl mb-6">
          Your Beauty. Your Ritual.{' '}
          <span className="italic text-[#F5EBD0] block sm:inline font-medium">Your Sanctuary.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#F9F6F0]/90 max-w-2xl font-light leading-relaxed mb-10 text-stone-200">
          Discover expert hair artistry, beautiful protective styles and restorative beauty experiences in one welcoming destination in Winnipeg.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            to="/services?mode=booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-white bg-[#7F011F] hover:bg-[#660119] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D8C29A] focus:ring-offset-2"
          >
            <CalendarCheck className="w-5 h-5 text-[#D8C29A]" />
            <span>Book Your Experience</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-[#F5EBD0] bg-white/10 hover:bg-white/20 border border-[#F5EBD0]/30 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#D8C29A]"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-[#D8C29A]" />
          </Link>
        </div>

        {/* Sub-hero trust badge */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 text-xs text-[#D8C29A] uppercase tracking-wider font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8C29A]" />
            542 Dufferin Avenue, Winnipeg
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8C29A]" />
            Protective Hair Artistry
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8C29A]" />
            Studio &amp; Mobile Home Service
          </span>
        </div>

      </div>
    </section>
  );
};
