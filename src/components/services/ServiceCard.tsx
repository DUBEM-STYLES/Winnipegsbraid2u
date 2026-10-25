import React from 'react';
import { Plus, Check, Home, Clock, Sparkles } from 'lucide-react';
import { ServiceItem } from '../../types';
import { useBooking } from '../../context/BookingContext';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { toggleService, isServiceSelected } = useBooking();
  const isSelected = isServiceSelected(service.id);

  const priceDisplay = () => {
    if (service.pricingType === 'range') {
      return `CAD $${service.minPrice} – $${service.maxPrice}`;
    }
    if (service.pricingType === 'fixed') {
      return `CAD $${service.fixedPrice}`;
    }
    return 'Price to be confirmed';
  };

  return (
    <div
      className={`group bg-[#F9F6F0] rounded-2xl overflow-hidden border transition-all flex flex-col justify-between ${
        isSelected
          ? 'border-[#7F011F] ring-2 ring-[#7F011F]/20 shadow-md'
          : 'border-[#D8C29A]/50 hover:border-[#D8C29A] shadow-sm'
      }`}
    >
      <div>
        {/* Service Image with Category & Home tags */}
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="bg-[#2A201D]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[#F5EBD0] border border-[#D8C29A]/30">
              {service.category}
            </span>
          </div>

          {service.homeServiceEligible && (
            <div className="absolute top-3 right-3 bg-[#F5EBD0]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[#7F011F] border border-[#D8C29A] flex items-center gap-1">
              <Home className="w-3 h-3" />
              <span>Studio or Home</span>
            </div>
          )}
        </div>

        {/* Content details */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-2xl font-medium text-[#2A201D] leading-snug">
              {service.name}
            </h3>
          </div>

          <p className="text-sm text-[#54433B] leading-relaxed mb-4">
            {service.fullDescription || service.shortDescription}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 py-3 border-t border-b border-stone-200 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-base text-[#7F011F]">
                {priceDisplay()}
              </span>
            </div>

            {service.estimatedDuration && (
              <div className="flex items-center gap-1 text-stone-500">
                <Clock className="w-3.5 h-3.5 text-[#54433B]" />
                <span>Est. {service.estimatedDuration}</span>
              </div>
            )}
          </div>

          {service.notes && (
            <p className="text-[11px] text-stone-500 mt-3 italic leading-tight">
              * {service.notes}
            </p>
          )}
        </div>
      </div>

      {/* Action button */}
      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={() => toggleService(service)}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
            isSelected
              ? 'bg-[#7F011F] text-white hover:bg-[#660119] shadow-sm'
              : 'bg-[#F5EBD0] text-[#7F011F] hover:bg-[#ebd9b0] active:scale-[0.99]'
          }`}
          aria-pressed={isSelected}
          aria-label={isSelected ? `Remove ${service.name} from booking` : `Add ${service.name} to booking`}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4" />
              <span>Selected for Booking Request</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Add to Booking</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
