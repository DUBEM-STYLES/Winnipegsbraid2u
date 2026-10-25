import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, MessageSquare, Sparkles } from 'lucide-react';

export const FinalHomeCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#7F011F] text-white relative overflow-hidden">
      {/* Subtle brand ornamentation */}
      <div className="absolute inset-0 bg-[radial-gradient(#D8C29A_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5EBD0] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D8C29A]" />
          <span>Appointments &bull; Inquiries</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#F9F6F0]">
          Your Next Beauty Moment <span className="italic text-[#F5EBD0]">Starts Here.</span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
          Explore our services and find an experience that feels right for you. We look forward to welcoming you to our studio or bringing our craft to your home.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-[#7F011F] bg-[#F5EBD0] hover:bg-white active:scale-[0.98] transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            <CalendarCheck className="w-5 h-5 text-[#7F011F]" />
            <span>Book Your Experience</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-[#F5EBD0] bg-white/10 hover:bg-white/20 border border-[#F5EBD0]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#D8C29A]"
          >
            <MessageSquare className="w-4 h-4 text-[#D8C29A]" />
            <span>Get in Touch</span>
          </Link>
        </div>

        <div className="mt-12 text-xs text-[#D8C29A]/80">
          542 Dufferin Avenue, Winnipeg &bull; (204) 963-3785 &bull; ines@WinnipegBraids2u.ca
        </div>
      </div>
    </section>
  );
};
