import React from 'react';
import { X, Home, Building2, Calendar, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

interface BookingSummaryPanelProps {
  onOpenBookingForm: () => void;
}

export const BookingSummaryPanel: React.FC<BookingSummaryPanelProps> = ({ onOpenBookingForm }) => {
  const {
    selections,
    removeService,
    clearBooking,
    isHomeService,
    setIsHomeService,
    totals,
  } = useBooking();

  if (selections.length === 0) {
    return (
      <div className="bg-[#F5EBD0]/50 rounded-2xl p-6 sm:p-8 border border-[#D8C29A] text-center space-y-3">
        <div className="w-10 h-10 rounded-full bg-[#F5EBD0] mx-auto flex items-center justify-center text-[#7F011F]">
          <Calendar className="w-5 h-5" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#2A201D]">
          Your Appointment Selection
        </h3>
        <p className="text-sm text-[#54433B] max-w-md mx-auto leading-relaxed">
          Select one or multiple services from the categories below to see automatic price estimates and submit a combined appointment request.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#F9F6F0] rounded-2xl border-2 border-[#7F011F]/20 shadow-md p-6 sm:p-8 space-y-6">
      
      {/* Header & count */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-2xl font-medium text-[#2A201D]">
              Selected Services ({selections.length})
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#7F011F] text-white">
              Request Mode
            </span>
          </div>
          <p className="text-xs text-[#54433B] mt-0.5">
            Combined multi-service booking request
          </p>
        </div>

        <button
          type="button"
          onClick={clearBooking}
          className="text-xs text-stone-500 hover:text-[#7F011F] underline transition-colors"
        >
          Clear all
        </button>
      </div>

      {/* Selected Items List */}
      <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
        {selections.map(({ service }) => {
          const itemPrice =
            service.pricingType === 'range'
              ? `CAD $${service.minPrice} – $${service.maxPrice}`
              : service.pricingType === 'fixed'
              ? `CAD $${service.fixedPrice}`
              : 'Price to be confirmed';

          return (
            <div
              key={service.id}
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 shadow-2xs gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-medium text-sm text-[#2A201D] truncate">
                    {service.name}
                  </p>
                  <p className="text-xs text-[#7F011F] font-semibold">
                    {itemPrice}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeService(service.id)}
                className="p-1.5 text-stone-400 hover:text-[#7F011F] hover:bg-[#F5EBD0] rounded-lg transition-colors"
                aria-label={`Remove ${service.name}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Studio vs Home Service Selection */}
      <div className="pt-4 border-t border-stone-200">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#54433B] block mb-2">
          Appointment Location Preference
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setIsHomeService(false)}
            className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
              !isHomeService
                ? 'border-[#7F011F] bg-[#F5EBD0]/70 text-[#2A201D] shadow-xs'
                : 'border-stone-200 hover:bg-stone-50 text-[#54433B]'
            }`}
          >
            <Building2 className={`w-5 h-5 ${!isHomeService ? 'text-[#7F011F]' : 'text-stone-400'}`} />
            <div>
              <p className="text-sm font-semibold">Studio Visit</p>
              <p className="text-xs text-stone-500">542 Dufferin Ave, Winnipeg (No travel fee)</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setIsHomeService(true)}
            className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
              isHomeService
                ? 'border-[#7F011F] bg-[#F5EBD0]/70 text-[#2A201D] shadow-xs'
                : 'border-stone-200 hover:bg-stone-50 text-[#54433B]'
            }`}
          >
            <Home className={`w-5 h-5 ${isHomeService ? 'text-[#7F011F]' : 'text-stone-400'}`} />
            <div>
              <p className="text-sm font-semibold">Home Service</p>
              <p className="text-xs text-stone-500">Stylist visits you (CAD $20–$40 travel fee)</p>
            </div>
          </button>
        </div>
      </div>

      {/* Calculations Breakdown */}
      <div className="bg-[#F5EBD0]/60 p-4 rounded-xl space-y-2 text-sm border border-[#D8C29A]">
        <div className="flex justify-between text-[#54433B]">
          <span>Services Subtotal:</span>
          <span className="font-medium text-[#2A201D]">
            CAD ${totals.minSubtotal} {totals.minSubtotal !== totals.maxSubtotal && `– $${totals.maxSubtotal}`}
          </span>
        </div>

        {isHomeService && (
          <div className="flex justify-between text-[#54433B]">
            <span>Estimated Winnipeg Travel Fee:</span>
            <span className="font-medium text-[#7F011F]">
              CAD ${totals.travelFeeMin} – ${totals.travelFeeMax}
            </span>
          </div>
        )}

        <div className="pt-2 border-t border-[#D8C29A] flex items-baseline justify-between">
          <div>
            <span className="font-semibold text-base text-[#2A201D]">
              Estimated Total:
            </span>
            <p className="text-[11px] text-stone-500">
              * Subject to consultation confirmation
            </p>
          </div>
          <span className="font-serif text-2xl font-bold text-[#7F011F]">
            {totals.displayPriceString}
          </span>
        </div>

        {(totals.hasQuoteRequired || totals.hasUnconfirmedPrices) && (
          <div className="pt-2 flex items-start gap-1.5 text-xs text-[#54433B]">
            <AlertCircle className="w-4 h-4 text-[#7F011F] flex-shrink-0 mt-0.5" />
            <span>
              Includes preliminary or spa services. Exact final rate will be confirmed directly with Ines upon appointment review.
            </span>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={onOpenBookingForm}
        className="w-full py-4 px-6 rounded-full text-base font-semibold text-white bg-[#7F011F] hover:bg-[#660119] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#7F011F] focus:ring-offset-2"
      >
        <span>Complete Appointment Request</span>
        <ArrowRight className="w-4 h-4 text-[#D8C29A]" />
      </button>

    </div>
  );
};
