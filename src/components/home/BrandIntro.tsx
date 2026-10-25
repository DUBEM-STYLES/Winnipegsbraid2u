import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, HeartHandshake, Scissors, ArrowRight } from 'lucide-react';
import founderPortrait from '../../assets/images/regenerated_image_1792853561842.jpg';

export const BrandIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Visual Composition with Ines Founder Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#D8C29A]/40 bg-[#2A201D]">
                <img
                  src={founderPortrait}
                  alt="Ines - Founder & Lead Stylist of Winnipeg Braids 2u"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Overlapping subtle card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#F5EBD0] p-6 rounded-xl border border-[#D8C29A] shadow-md max-w-xs hidden sm:block">
                <p className="font-serif text-2xl text-[#7F011F] font-semibold italic">
                  Crafted with Care
                </p>
                <p className="text-xs text-[#54433B] mt-1 leading-relaxed">
                  Every strand treated with gentleness, patience, and cultural pride by Ines.
                </p>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8C29A]" />
              <span>The Winnipeg Braids 2u Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A201D] leading-tight font-normal">
              Beauty That Feels <span className="italic font-medium text-[#7F011F]">Like You.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#54433B] leading-relaxed font-light">
              At Winnipeg Braids 2u, beauty is more than a look. It is an experience shaped by care, creativity, comfort, and confidence. From beautiful protective hairstyles to moments of relaxation and self-care, we bring your beauty needs together in one welcoming destination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D8C29A]/40">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#F5EBD0] flex items-center justify-center text-[#7F011F]">
                  <Scissors className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A201D]">
                  Gentle Protective Artistry
                </h3>
                <p className="text-sm text-[#54433B] leading-relaxed">
                  Prioritising scalp comfort, neat sections, and long-term natural hair vitality.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#F5EBD0] flex items-center justify-center text-[#7F011F]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A201D]">
                  A Welcoming Haven
                </h3>
                <p className="text-sm text-[#54433B] leading-relaxed">
                  Warm hospitality where your style preferences are listened to and celebrated.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7F011F] hover:text-[#500013] transition-colors group"
              >
                <span>Read our full story and meet founder Ines</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
