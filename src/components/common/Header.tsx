import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarCheck, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useBooking } from '../../context/BookingContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const { selections } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F6F0]/95 backdrop-blur-md shadow-sm border-b border-[#F5EBD0]'
          : 'bg-[#F9F6F0] border-b border-stone-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#7F011F] ${
                    isActive ? 'text-[#7F011F] font-semibold' : 'text-[#54433B]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Primary CTA - Book Now */}
            <Link
              to="/book"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-[#7F011F] hover:bg-[#660119] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7F011F] focus:ring-offset-2"
            >
              <CalendarCheck className="w-4 h-4 text-[#D8C29A]" />
              <span>Book Now</span>
              {selections.length > 0 && (
                <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-[#7F011F] bg-[#F5EBD0] rounded-full">
                  {selections.length}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#7F011F]"
              aria-label="Book appointment"
            >
              <span>Book</span>
              {selections.length > 0 && (
                <span className="w-4 h-4 text-[10px] font-bold text-[#7F011F] bg-[#F5EBD0] rounded-full inline-flex items-center justify-center">
                  {selections.length}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2A201D] hover:bg-[#F5EBD0] focus:outline-none focus:ring-2 focus:ring-[#7F011F]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F5EBD0] bg-[#F9F6F0] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#F5EBD0] text-[#7F011F] font-semibold'
                    : 'text-[#2A201D] hover:bg-stone-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/book"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-medium text-white bg-[#7F011F] hover:bg-[#660119] shadow-sm"
            >
              <CalendarCheck className="w-5 h-5 text-[#D8C29A]" />
              <span>Book Your Experience</span>
              {selections.length > 0 && (
                <span className="ml-2 px-2 py-0.5 text-xs font-bold text-[#7F011F] bg-[#F5EBD0] rounded-full">
                  {selections.length} selected
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
