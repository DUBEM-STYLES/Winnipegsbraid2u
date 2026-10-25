import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export const HomeServiceSection: React.FC = () => {
  const { setIsHomeService } = useBooking();

  return (
    <section className="py-20 sm:py-24 bg-[#2A201D] text-[#F9F6F0] relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EBD0]/15 border border-[#D8C29A]/30 text-[#D8C29A] text-xs font-semibold uppercase tracking-[0.15em]">
              <Home className="w-3.5 h-3.5" />
              <span>Mobile In-Home Service</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              Beauty, Brought <span className="italic text-[#F5EBD0]">Closer to You.</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-2xl">
              Enjoy the convenience of a beauty appointment at home when your selected service and location qualify. Our stylist brings professional tools, gentle care, and artistry directly to your living space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D8C29A] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Eligible Styles</p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Cornrows, twists, and selected braid services qualify for home visits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D8C29A] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Transparent Travel Fee</p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Estimated CAD $20 – $40 across Winnipeg, calculated and confirmed before you book.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/services?mode=booking&serviceType=home"
                onClick={() => setIsHomeService(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[#2A201D] bg-[#F5EBD0] hover:bg-[#ebd9b0] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#D8C29A]"
              >
                <span>Request a Home Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#7F011F]" />
              </Link>
              
              <span className="text-xs text-stone-400 italic">
                * Available within Winnipeg city limits. Subject to schedule availability.
              </span>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D8C29A]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop"
                alt="Client receiving in-home hair styling in a comfortable environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A201D]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#2A201D]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs text-stone-300">
                <span className="font-serif text-sm font-semibold text-[#F5EBD0] block mb-0.5">
                  Winnipeg Mobile Service
                </span>
                Comfortable, relaxed hair appointments without traveling in winter cold or busy traffic.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
