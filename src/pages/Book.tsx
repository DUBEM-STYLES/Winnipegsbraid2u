import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarCheck, Sparkles } from 'lucide-react';

export const Book: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Direct users seamlessly into dedicated booking mode on Services page
    // as strictly mandated in brief sections 2 & 9
    const timer = setTimeout(() => {
      navigate('/services?mode=booking', { replace: true });
    }, 150);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F9F6F0] px-4">
      <div className="text-center p-8 max-w-md bg-[#F5EBD0]/60 rounded-3xl border border-[#D8C29A] shadow-sm space-y-4 animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-[#7F011F] text-[#D8C29A] mx-auto flex items-center justify-center">
          <CalendarCheck className="w-7 h-7" />
        </div>
        <h1 className="font-serif text-3xl font-medium text-[#2A201D]">
          Entering Booking Experience...
        </h1>
        <p className="text-sm text-[#54433B] leading-relaxed font-light">
          Preparing your service selection planner and automatic price calculation workspace.
        </p>
        <div className="pt-2">
          <a
            href="/services?mode=booking"
            className="text-xs font-semibold text-[#7F011F] hover:underline"
          >
            Click here if you are not redirected automatically &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
