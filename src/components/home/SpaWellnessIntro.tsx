import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Flower2, Heart, ArrowRight, ShieldAlert } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';

export const SpaWellnessIntro: React.FC = () => {
  const spaServices = SERVICES_DATA.filter(
    (s) => s.category === 'Spa Services' || s.category === 'Wellness Services'
  );

  return (
    <section className="py-20 sm:py-28 bg-[#F9F6F0] relative overflow-hidden">
      {/* Background aesthetic touches */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F5EBD0]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D8C29A]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7F011F]/10 border border-[#7F011F]/20 text-[#7F011F] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Flower2 className="w-3.5 h-3.5 text-[#7F011F]" />
            <span>Spa &amp; Wellness Sanctuary</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2A201D] font-normal tracking-tight">
            Make Space for <span className="italic font-medium text-[#7F011F]">Yourself.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#54433B] mt-5 leading-relaxed font-light">
            Take a moment to slow down, reset, and reconnect with yourself. Explore our spa and wellness experiences, thoughtfully presented to complement your personal beauty routine.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {spaServices.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#F5EBD0]/40 rounded-2xl p-6 sm:p-8 border border-[#D8C29A]/50 hover:bg-[#F5EBD0]/70 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#7F011F]/10 text-[#7F011F] mb-3">
                  {item.category}
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#2A201D] mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-[#54433B] leading-relaxed mb-4">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8C29A]/40 flex items-center justify-between text-xs">
                <span className="font-medium text-[#7F011F] italic">
                  Price to be confirmed
                </span>
                <span className="text-stone-500">
                  Est. {item.estimatedDuration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Development Disclosure Notice as required by brief */}
        <div className="max-w-2xl mx-auto bg-[#F5EBD0] p-4 rounded-xl border border-[#D8C29A] flex items-start gap-3 text-xs text-[#54433B] mb-10">
          <ShieldAlert className="w-5 h-5 text-[#7F011F] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-[#2A201D]">Verified Menu Notice</p>
            <p className="mt-0.5">
              Spa &amp; wellness treatments are displayed as provisional menu offerings. Official treatment menu and rates are pending confirmation by Winnipeg Braids 2u before direct checkout.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services?category=spa"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-[#7F011F] hover:bg-[#660119] transition-all shadow-sm"
          >
            <span>Explore Spa &amp; Wellness Experiences</span>
            <ArrowRight className="w-4 h-4 text-[#D8C29A]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
