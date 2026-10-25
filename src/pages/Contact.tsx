import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CalendarCheck, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      err.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) err.message = 'Please provide your message or inquiry.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="bg-[#F9F6F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBD0] border border-[#D8C29A] text-[#7F011F] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &bull; Inquiries &bull; Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#2A201D] font-normal tracking-tight">
            Get in <span className="italic font-medium text-[#7F011F]">Touch</span>
          </h1>

          <p className="text-base sm:text-lg text-[#54433B] mt-4 font-light leading-relaxed">
            Have questions about protective braid styles, hair lengths, or our restorative spa rituals? We are here to assist and guide your beauty choices.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Direct Info, Hours & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="bg-[#F5EBD0]/60 p-6 sm:p-8 rounded-2xl border border-[#D8C29A] space-y-6">
              <h2 className="font-serif text-2xl font-medium text-[#2A201D]">
                Studio Information
              </h2>

              <ul className="space-y-4 text-sm text-[#54433B]">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#7F011F]/10 flex items-center justify-center text-[#7F011F] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2A201D] block">Studio Address:</strong>
                    <span>{BUSINESS_CONFIG.address.fullAddress}</span>
                    <span className="text-xs text-stone-500 block mt-0.5">Winnipeg, Manitoba</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#7F011F]/10 flex items-center justify-center text-[#7F011F] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2A201D] block">Phone / Text:</strong>
                    <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-[#7F011F] font-medium transition-colors">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#7F011F]/10 flex items-center justify-center text-[#7F011F] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2A201D] block">Email:</strong>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-[#7F011F] font-medium transition-colors">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours of Operation Card */}
            <div className="bg-[#F9F6F0] p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#7F011F]" />
                <h2 className="font-serif text-2xl font-medium text-[#2A201D]">
                  Studio Hours
                </h2>
              </div>

              <div className="text-sm space-y-2 text-[#54433B]">
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-[#2A201D]">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span>Saturday</span>
                  <span className="font-semibold text-[#2A201D]">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1 text-stone-500 italic">
                  <span>Sunday</span>
                  <span>Not specified (By advance request)</span>
                </div>
              </div>

              <div className="bg-[#F5EBD0] p-3 rounded-xl border border-[#D8C29A] flex items-start gap-2 text-xs text-[#54433B]">
                <ShieldCheck className="w-4 h-4 text-[#7F011F] flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.openingHours.verificationNotice}
                </span>
              </div>
            </div>

            {/* Direct Booking CTA Widget */}
            <div className="bg-[#7F011F] text-white p-6 rounded-2xl space-y-3">
              <h3 className="font-serif text-xl font-normal text-[#F5EBD0]">
                Ready to Reserve Chair Time?
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Skip the inquiry form and configure your services directly with instant estimate calculations.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#7F011F] bg-[#F5EBD0] hover:bg-white transition-all shadow-sm"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Open Booking Planner</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Interactive Form & Winnipeg Map Embed */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-md">
              <h2 className="font-serif text-3xl font-medium text-[#2A201D] mb-2">
                Send an Inquiry
              </h2>
              <p className="text-xs text-[#54433B] mb-6">
                Receive personalized guidance on styles, hair extensions, and upcoming availability.
              </p>

              {isSubmitted ? (
                <div className="bg-[#F5EBD0]/70 border border-[#D8C29A] p-6 rounded-2xl text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#2A201D]">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-[#54433B] max-w-md mx-auto">
                    Your inquiry has been received. Ines will get back to you directly via email or phone shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-[#7F011F] hover:underline pt-2 block mx-auto"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] text-sm"
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="contactPhone" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(204) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] text-sm"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                      Subject
                    </label>
                    <select
                      id="contactSubject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] text-sm"
                    >
                      <option value="General Inquiry">General Styling Inquiry</option>
                      <option value="Hair Length Consultation">Hair Length &amp; Density Consultation</option>
                      <option value="Home Service Eligibility">Home Service Eligibility &amp; Travel Fee</option>
                      <option value="Spa & Wellness Rituals">Spa &amp; Wellness Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="block text-xs font-semibold uppercase tracking-wider text-[#2A201D] mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about what you would like to achieve..."
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#7F011F] text-sm"
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#7F011F] hover:bg-[#660119] transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#D8C29A]" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Verified Location Map for 542 Dufferin Avenue, Winnipeg */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md">
              <div className="p-4 bg-[#F5EBD0] border-b border-[#D8C29A] flex items-center justify-between text-xs text-[#54433B]">
                <span className="font-semibold text-[#2A201D]">
                  Location: 542 Dufferin Ave, Winnipeg, MB
                </span>
                <span className="text-[11px] text-[#7F011F]">
                  Manitoba, Canada
                </span>
              </div>
              <div className="aspect-[16/9] w-full bg-stone-200">
                <iframe
                  title="Winnipeg Braids 2u Studio Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=542+Dufferin+Avenue,+Winnipeg,+Manitoba,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
