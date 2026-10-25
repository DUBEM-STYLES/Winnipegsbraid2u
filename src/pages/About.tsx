import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, HeartHandshake, Crown, CalendarCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { FounderSection } from '../components/about/FounderSection';
import { BUSINESS_CONFIG } from '../data/business';

export const About: React.FC = () => {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      
      {/* A. Page Hero */}
      <section className="py-20 sm:py-28 bg-[#2A201D] text-[#F9F6F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D8C29A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#D8C29A] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage &bull; Our Values</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#F9F6F0]">
            Beauty Built on <span className="italic text-[#F5EBD0]">Care, Culture and Confidence.</span>
          </h1>

          <p className="text-base sm:text-xl text-stone-300 mt-6 font-light leading-relaxed max-w-2xl mx-auto">
            Discover the heart behind Winnipeg Braids 2u and our commitment to creating welcoming beauty experiences rooted in artistry, care, and personal expression.
          </p>
        </div>
      </section>

      {/* B. Founder Section — Ines */}
      <FounderSection />

      {/* C. Our Values */}
      <section className="py-20 sm:py-28 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F] block mb-2">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2A201D] font-normal">
              Our Core Values
            </h2>
            <p className="text-base text-[#54433B] mt-3">
              The commitments that shape every protective hairstyle, scalp ritual, and client conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#F5EBD0]/50 p-8 rounded-2xl border border-[#D8C29A] space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#7F011F] text-[#F5EBD0] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2A201D]">
                Beauty and Confidence
              </h3>
              <p className="text-sm text-[#54433B] leading-relaxed">
                We believe beauty should support individual expression and help people feel comfortable in their own style.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#F5EBD0]/50 p-8 rounded-2xl border border-[#D8C29A] space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#7F011F] text-[#F5EBD0] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2A201D]">
                Care and Comfort
              </h3>
              <p className="text-sm text-[#54433B] leading-relaxed">
                We aim to create welcoming experiences where clients feel respected, considered, and at ease.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#F5EBD0]/50 p-8 rounded-2xl border border-[#D8C29A] space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#7F011F] text-[#F5EBD0] flex items-center justify-center">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2A201D]">
                Culture and Craft
              </h3>
              <p className="text-sm text-[#54433B] leading-relaxed">
                We value the artistry, creativity, and attention to detail that make personal beauty experiences distinctive.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* D. Our Approach */}
      <section className="py-20 sm:py-24 bg-[#F5EBD0]/30 border-t border-[#D8C29A]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F] block">
            A Thoughtful Destination
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#2A201D] font-normal">
            Our Approach to Integrated Beauty
          </h2>

          <p className="text-base sm:text-lg text-[#54433B] leading-relaxed font-light">
            Rather than treating hair styling and personal care as separate routines, Winnipeg Braids 2u brings them together. We focus on personalised service, thoughtful presentation, and healthy protective foundations that preserve natural hair vitality while inviting moments of genuine rest.
          </p>
        </div>
      </section>

      {/* E. About-page CTA */}
      <section className="py-20 bg-[#7F011F] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F9F6F0]">
            Let&apos;s Make Time for You.
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light">
            Whether preparing for a special occasion or planning your monthly self-care ritual, we are ready to welcome you.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#7F011F] bg-[#F5EBD0] hover:bg-white transition-all shadow-md"
            >
              <span>Explore Our Services</span>
            </Link>

            <Link
              to="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-[#D8C29A]" />
              <span>Book Your Experience</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
