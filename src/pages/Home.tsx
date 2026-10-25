import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BrandIntro } from '../components/home/BrandIntro';
import { SignatureHairServices } from '../components/home/SignatureHairServices';
import { SpaWellnessIntro } from '../components/home/SpaWellnessIntro';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { HomeServiceSection } from '../components/home/HomeServiceSection';
import { FinalHomeCTA } from '../components/home/FinalHomeCTA';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 
        A. Full-screen cinematic hero:
        Single unified composition bringing together salon atmosphere and spa sanctuary 
      */}
      <HeroSection />

      {/* B. Brand introduction */}
      <BrandIntro />

      {/* C. Signature hair services */}
      <SignatureHairServices />

      {/* D. Spa and wellness introduction (equal brand importance) */}
      <SpaWellnessIntro />

      {/* E. Why choose Winnipeg Braids 2u */}
      <WhyChooseUs />

      {/* F. Gallery preview */}
      <GalleryPreview />

      {/* G. Testimonials */}
      <TestimonialSection />

      {/* H. Home-service section */}
      <HomeServiceSection />

      {/* I. Final homepage CTA */}
      <FinalHomeCTA />
    </div>
  );
};
