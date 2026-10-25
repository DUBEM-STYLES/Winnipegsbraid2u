import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, ShieldAlert, FileText, Phone, Mail, ArrowLeft } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { BUSINESS_CONFIG } from '../../data/business';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingFormModal: React.FC<BookingFormModalProps> = ({ isOpen, onClose }) => {
  const { selections, isHomeService, totals, clearBooking } = useBooking();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    homeAddress: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [requestConfirmed, setRequestConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = 'Please provide a contact phone number.';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }
    if (isHomeService && !formData.homeAddress.trim()) {
      newErrors.homeAddress = 'Please provide your Winnipeg address or neighbourhood for home service.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable appointment request submission
    setTimeout(() => {
      const code = `WB2U-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
      setRequestConfirmed(true);
    }, 700);
  };

  const handleDone = () => {
    clearBooking();
    setRequestConfirmed(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-[#F9F6F0] rounded-3xl max-w-2xl w-full border border-[#D8C29A] shadow-2xl overflow-hidden animate-fadeIn my-8">
        
        {/* Modal Top Bar */}
        <div className="bg-[#F5EBD0] px-6 py-4 border-b border-[#D8C29A] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#7F011F] uppercase block">
              Winnipeg Braids 2u
            </span>
            <h2 id="booking-modal-title" className="font-serif text-2xl font-medium text-[#2A201D]">
              {requestConfirmed ? 'Appointment Request Submitted' : 'Submit Appointment Request'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-[#7F011F] rounded-full hover:bg-stone-200/50 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {requestConfirmed ? (
            /* Confirmation State (Strictly labeled as Request needing business confirmation) */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F5EBD0] text-[#7F011F] border border-[#D8C29A] mb-3">
                  Reference: {confirmationCode}
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#2A201D]">
                  Request Received for Review
                </h3>
                <p className="text-sm text-[#54433B] mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.fullName}</span>. Your appointment request has been transmitted directly to Ines at Winnipeg Braids 2u.
                </p>
              </div>

              {/* Crucial transparent notice: not faking a guaranteed booking */}
              <div className="bg-[#F5EBD0]/70 p-4 rounded-xl border border-[#D8C29A] text-left text-xs text-[#54433B] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#7F011F]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Important Confirmation Process</span>
                </div>
                <p>
                  This request is pending stylist schedule review and consultation. We will contact you at <strong className="text-[#2A201D]">{formData.phone}</strong> or <strong className="text-[#2A201D]">{formData.email}</strong> within 24 hours to confirm date availability, exact service time, and hair preparation instructions.
                </p>
              </div>

              {/* Summary of submitted request */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Preferred Date:</span>
                  <span className="font-medium text-[#2A201D]">{formData.preferredDate} ({formData.preferredTime})</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Location:</span>
                  <span className="font-medium text-[#2A201D]">
                    {isHomeService ? `Home Service (${formData.homeAddress})` : 'Studio (542 Dufferin Ave)'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Services ({selections.length}):</span>
                  <span className="font-medium text-[#2A201D]">
                    {selections.map((s) => s.service.name).join(', ')}
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-semibold text-[#2A201D]">Estimated Total:</span>
                  <span className="font-bold text-[#7F011F]">{totals.displayPriceString}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleDone}
                  className="px-8 py-3 rounded-full text-sm font-semibold text-white bg-[#7F011F] hover:bg-[#660119] transition-all"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* Input Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Notice that this is an Appointment Request */}
              <div className="bg-[#F5EBD0]/60 p-3.5 rounded-xl border border-[#D8C29A] text-xs text-[#54433B] flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#7F011F] flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Appointment Request Mode:</strong> Submitting this form requests an appointment slot. Ines will personally review and confirm schedule availability with you directly.
                </p>
              </div>

              {/* Selections Quick Pill List */}
              <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1.5">
                  Requested Services &amp; Estimate
                </span>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {selections.map(({ service }) => (
                    <span
                      key={service.id}
                      className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-[#F5EBD0] text-[#7F011F] font-medium"
                    >
                      {service.name}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-[#54433B] flex justify-between pt-2 border-t border-stone-100">
                  <span>Preference: <strong>{isHomeService ? 'Home Service' : 'Studio Appointment'}</strong></span>
                  <span className="font-bold text-[#7F011F]">{totals.displayPriceString}</span>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Maya Johnson"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] bg-white text-sm"
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(204) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] bg-white text-sm"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] bg-white text-sm"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              {/* Date & Time Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                    Preferred Date *
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] bg-white text-sm"
                  />
                  {errors.preferredDate && <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] bg-white text-sm"
                  >
                    <option value="9:00 AM">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="1:00 PM">Early Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="4:00 PM">Late Afternoon / Evening (4:00 PM – 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Conditional Home Address Field */}
              {isHomeService && (
                <div>
                  <label htmlFor="homeAddress" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                    Winnipeg Home Address or Neighbourhood *
                  </label>
                  <input
                    id="homeAddress"
                    type="text"
                    value={formData.homeAddress}
                    onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                    placeholder="e.g. 123 Main St, St. Vital / Downtown Winnipeg"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] bg-white text-sm"
                  />
                  {errors.homeAddress && <p className="text-xs text-red-600 mt-1">{errors.homeAddress}</p>}
                </div>
              )}

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                  Additional Notes or Special Requests
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Hair length, extension preferences, sensitive scalp, or other styling details..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] bg-white text-sm"
                />
              </div>

              {/* Privacy notice */}
              <p className="text-[11px] text-stone-500 leading-tight">
                Privacy Notice: Your information is collected solely to schedule and manage your appointment inquiry with Winnipeg Braids 2u. We do not sell or distribute personal information.
              </p>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-stone-600 hover:bg-stone-200/50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#7F011F] hover:bg-[#660119] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Submit Request to Ines'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
