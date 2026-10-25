import React from 'react';
import { BUSINESS_CONFIG } from '../../data/business';
import { ShieldCheck } from 'lucide-react';
import founderPortrait from '../../assets/images/regenerated_image_1792853561842.jpg';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5EBD0]/40 border-y border-[#D8C29A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout on desktop, stacked cleanly on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Founder Official Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D8C29A] bg-[#2A201D] relative">
                <img
                  src={founderPortrait}
                  alt="Ines - Founder & Lead Stylist of Winnipeg Braids 2u"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative shadow layer */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-[#D8C29A]/50 -z-10 hidden sm:block" />
            </div>
          </div>

          {/* Column 2: Founder Name, Story & Brand Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F] block mb-2">
                The Founder &bull; Artistic Direction
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2A201D] font-normal">
                {BUSINESS_CONFIG.founder.provisionalIntroTitle}
              </h2>
              <p className="text-sm font-medium text-[#7F011F] mt-1 font-serif italic">
                {BUSINESS_CONFIG.founder.role}
              </p>
            </div>

            {/* Editable brand introduction as specified in brief */}
            <div className="space-y-4 text-base text-[#54433B] font-light leading-relaxed">
              {BUSINESS_CONFIG.founder.provisionalStory.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Authenticity Note */}
            <div className="bg-[#F9F6F0] p-4 rounded-xl border border-[#D8C29A] flex items-start gap-3 text-xs text-[#54433B]">
              <ShieldCheck className="w-5 h-5 text-[#7F011F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#2A201D]">Winnipeg Braids 2u Founder Story</p>
                <p className="mt-0.5">
                  Artisan craftsmanship, genuine care, and personal empowerment guided by founder and lead stylist Ines in Winnipeg.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
