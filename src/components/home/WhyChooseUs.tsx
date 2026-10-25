import React from 'react';
import { UserCheck, Sparkles, HeartHandshake, Shield, Home, Smile } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const strengths = [
    {
      icon: UserCheck,
      title: 'Personalised Beauty Experiences',
      description: 'Consultations that respect your personal style, hair porosity, face shape, and daily routine.',
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'Crisp, clean sectioning and meticulous finishing for styles that stay neat and refined.',
    },
    {
      icon: HeartHandshake,
      title: 'Care & Scalp Comfort',
      description: 'Gentle, tension-managed installation designed to protect your hairline and maintain scalp health.',
    },
    {
      icon: Shield,
      title: 'Protective Hair Artistry',
      description: 'Mastery of protective styles that promote length retention and reduce daily heat manipulation.',
    },
    {
      icon: Home,
      title: 'Flexible Appointment Options',
      description: 'Choose our comfortable Winnipeg studio or request home service when eligible for maximum convenience.',
    },
    {
      icon: Smile,
      title: 'A Welcoming Atmosphere',
      description: 'A calming, friendly, respectful environment where you can unwind, chat, or simply rest in peace.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EBD0]/40 border-t border-[#D8C29A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F] block mb-2">
            The Winnipeg Braids 2u Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2A201D] font-normal">
            Why Clients Choose Us
          </h2>
          <p className="text-base text-[#54433B] mt-3">
            Honest artistry, gentle hands, and dedicated care that turns styling into a renewing personal ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F9F6F0] p-8 rounded-2xl border border-[#D8C29A]/40 shadow-sm hover:border-[#7F011F]/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#F5EBD0] flex items-center justify-center text-[#7F011F]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A201D]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#54433B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
