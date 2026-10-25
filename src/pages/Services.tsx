import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles, Filter, Home, CheckCircle2, ShieldAlert, Calendar } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceCategory } from '../types';
import { ServiceCard } from '../components/services/ServiceCard';
import { BookingSummaryPanel } from '../components/services/BookingSummaryPanel';
import { BookingFormModal } from '../components/services/BookingFormModal';
import { useBooking } from '../context/BookingContext';

export const Services: React.FC = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const initialCategory = searchParams.get('category');

  const { selectedCategory, setSelectedCategory, isHomeService, setIsHomeService } = useBooking();
  const [activeTab, setActiveTab] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (initialCategory === 'spa') {
      setActiveTab('Spa Services');
    } else if (initialCategory === 'wellness') {
      setActiveTab('Wellness Services');
    } else if (initialCategory === 'hair') {
      setActiveTab('Braiding');
    }
  }, [initialCategory]);

  useEffect(() => {
    if (mode === 'booking') {
      // Smooth scroll to booking interactive summary area
      const el = document.getElementById('booking-experience-anchor');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [mode]);

  const categories: string[] = [
    'All',
    'Braiding',
    'Protective Styles',
    'Weaves and Other Hair Services',
    'Spa Services',
    'Wellness Services',
  ];

  const filteredServices = activeTab === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <div className="bg-[#F9F6F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBD0] border border-[#D8C29A] text-[#7F011F] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Service Menu &bull; Interactive Booking</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#2A201D] font-normal tracking-tight">
            Services &amp; <span className="italic font-medium text-[#7F011F]">Appointment Planner</span>
          </h1>

          <p className="text-base sm:text-lg text-[#54433B] mt-4 font-light leading-relaxed">
            Select one or combine multiple services into a single appointment request. Review transparent estimates for studio appointments or mobile in-home visits across Winnipeg.
          </p>
        </div>

        {/* Dedicated Booking Summary Anchor */}
        <div id="booking-experience-anchor" className="mb-14 scroll-mt-24">
          <BookingSummaryPanel onOpenBookingForm={() => setIsModalOpen(true)} />
        </div>

        {/* Pricing Transparency & Preliminary Notice Bar */}
        <div className="bg-[#F5EBD0]/70 border border-[#D8C29A] rounded-xl p-4 sm:p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#54433B]">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#7F011F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#2A201D] text-sm">
                Pricing Disclosures &amp; Estimates
              </p>
              <p className="mt-0.5 leading-relaxed">
                Hair services reflect preliminary historical estimates (CAD $60–$100 for cornrows/weaves/crochet, CAD $100–$350 for knotless/twists/locs). Final quotes depend on desired length, hair density, and parting intricacy. Spa/wellness treatments are marked pending owner confirmation and are quoted upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 min-w-max border-b border-stone-200 pb-3" role="tablist" aria-label="Service Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeTab === cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === cat
                    ? 'bg-[#7F011F] text-white shadow-sm'
                    : 'bg-[#F5EBD0]/60 text-[#54433B] hover:bg-[#F5EBD0] hover:text-[#2A201D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>

      {/* Booking Form Modal */}
      <BookingFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
