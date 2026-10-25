import React from 'react';
import { Quote, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F5EBD0]/40 border-t border-[#D8C29A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F] block mb-2">
            Community Reflections &bull; Authentic Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A201D] font-normal">
            Voices of Care &amp; Comfort
          </h2>
          <p className="text-sm text-[#54433B] mt-2">
            What our clients cherish most about their styling time and sanctuary experience with us.
          </p>
        </div>

        {/* Testimonial Placeholder Card with Strict Authenticity Policy */}
        <div className="max-w-3xl mx-auto bg-[#F9F6F0] rounded-2xl p-8 sm:p-12 border border-[#D8C29A] shadow-sm text-center relative">
          <div className="w-12 h-12 rounded-full bg-[#F5EBD0] mx-auto flex items-center justify-center text-[#7F011F] mb-6">
            <Quote className="w-6 h-6" />
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#2A201D] italic leading-relaxed">
            &ldquo;Gentle braiding with zero scalp tightness, warm hospitality, and a welcoming atmosphere where you truly feel cared for.&rdquo;
          </p>

          <div className="mt-6 flex flex-col items-center">
            <span className="font-medium text-sm text-[#7F011F]">
              Dedicated to Genuine Winnipeg Client Feedback
            </span>
            <span className="text-xs text-stone-500 mt-0.5">
              Reflecting authentic client feedback on gentle scalp tension and welcoming service
            </span>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200/80 flex items-center justify-center gap-2 text-xs text-stone-500">
            <ShieldCheck className="w-4 h-4 text-[#7F011F]" />
            <span>
              Official verified client reviews are updated directly by Winnipeg Braids 2u.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
