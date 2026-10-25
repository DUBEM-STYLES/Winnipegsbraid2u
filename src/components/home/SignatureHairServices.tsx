import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Check } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { useBooking } from '../../context/BookingContext';

export const SignatureHairServices: React.FC = () => {
  const { toggleService, isServiceSelected } = useBooking();
  // Curate key signature hair services
  const hairServices = SERVICES_DATA.filter(
    (s) => s.category === 'Braiding' || s.category === 'Protective Styles' || s.category === 'Weaves and Other Hair Services'
  ).slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#F5EBD0]/50 border-y border-[#D8C29A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F] block mb-2">
              Signature Braiding &bull; Protective Artistry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A201D] font-normal">
              Signature Hair Creations
            </h2>
            <p className="text-base text-[#54433B] mt-3">
              Precision parting, healthy tension management, and enduring elegance crafted to suit your lifestyle.
            </p>
          </div>

          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#7F011F] hover:bg-[#660119] transition-all shadow-sm"
            >
              <span>Explore All Hair Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hairServices.map((service) => {
            const isSelected = isServiceSelected(service.id);
            const priceLabel =
              service.pricingType === 'range'
                ? `CAD $${service.minPrice} – $${service.maxPrice}`
                : service.pricingType === 'fixed'
                ? `CAD $${service.fixedPrice}`
                : 'Quote upon request';

            return (
              <div
                key={service.id}
                className="group bg-[#F9F6F0] rounded-2xl overflow-hidden border border-[#D8C29A]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#2A201D]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#F5EBD0] border border-[#D8C29A]/30">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-2xl font-medium text-[#2A201D]">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-sm text-[#54433B] line-clamp-2 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#54433B] pb-4 border-b border-stone-200">
                      <span className="font-semibold text-sm text-[#7F011F]">
                        {priceLabel}
                      </span>
                      {service.estimatedDuration && (
                        <span className="text-stone-500 font-sans">
                          Est. {service.estimatedDuration}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-[11px] text-stone-500 mt-2 italic">
                      * Preliminary estimate. Final rate determined by desired length and size.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <Link
                    to="/services"
                    className="text-xs font-medium text-[#54433B] hover:text-[#7F011F] transition-colors"
                  >
                    Details &rarr;
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#7F011F] text-white shadow-sm'
                        : 'bg-[#F5EBD0] text-[#7F011F] hover:bg-[#ebd9b0]'
                    }`}
                    aria-label={isSelected ? `Remove ${service.name} from booking` : `Add ${service.name} to booking`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Booking</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Booking</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
