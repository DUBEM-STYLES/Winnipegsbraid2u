import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_CONFIG } from '../../data/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A201D] text-[#F9F6F0] pt-16 pb-12 border-t border-[#54433B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-700/60">
          
          {/* Column 1: Brand Logo & Summary */}
          <div className="space-y-4">
            <div className="bg-[#F9F6F0] p-2.5 rounded-lg inline-block shadow-sm">
              <BrandLogo size="footer" />
            </div>
            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              A Winnipeg-based beauty destination where authentic hair artistry, protective hairstyles, and restorative spa wellness come together in warm harmony.
            </p>
            <div className="pt-2 text-xs text-[#D8C29A] flex items-center gap-1.5 font-serif italic">
              <span>{BUSINESS_CONFIG.tagline}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase font-sans text-xs">
              Explore Our Space
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/" className="hover:text-[#D8C29A] transition-colors">
                  Home Sanctuary
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D8C29A] transition-colors">
                  Hair &amp; Spa Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D8C29A] transition-colors">
                  About Us &amp; Founder Ines
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D8C29A] transition-colors">
                  Artistry Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D8C29A] transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-[#D8C29A] font-medium hover:underline inline-flex items-center gap-1">
                  Book an Appointment &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase font-sans text-xs">
              Studio &amp; Inquiries
            </h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8C29A] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8C29A] flex-shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-[#D8C29A] transition-colors">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D8C29A] flex-shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-[#D8C29A] transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
              <li className="text-xs text-stone-400 pt-1">
                Studio visits and home appointments available across Winnipeg.
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Verification Notice */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase font-sans text-xs">
              Operating Hours
            </h3>
            <div className="space-y-2 text-sm text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D8C29A] flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p>{BUSINESS_CONFIG.openingHours.weekday}</p>
                  <p>{BUSINESS_CONFIG.openingHours.saturday}</p>
                  <p className="text-stone-400 italic">{BUSINESS_CONFIG.openingHours.sunday}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#54433B]/40 p-3 rounded-lg border border-[#D8C29A]/20 mt-3">
              <div className="flex items-start gap-2 text-xs text-[#D8C29A]">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {BUSINESS_CONFIG.openingHours.verificationNotice}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            &copy; {currentYear} {BUSINESS_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Winnipeg, Manitoba, Canada</span>
            <span className="hidden md:inline">&bull;</span>
            <span>Hair Braiding, Spa &amp; Wellness Sanctuary</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
