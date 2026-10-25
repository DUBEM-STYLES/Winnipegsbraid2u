import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../data/business';
import brandLogoPng from '../../assets/images/brand-logo.png';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'footer';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[170px]',
    md: 'h-10 sm:h-12 max-w-[220px]',
    lg: 'h-14 sm:h-16 max-w-[280px]',
    footer: 'h-10 sm:h-11 max-w-[200px]',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#7F011F] rounded-md ${className}`}
      aria-label="Winnipeg Braids 2u - Return to homepage"
    >
      <div className={`relative flex items-center justify-start ${sizeClasses[size]}`}>
        <img
          src={brandLogoPng}
          alt={BUSINESS_CONFIG.brandName}
          className="w-auto h-full object-contain object-left"
        />
      </div>
    </Link>
  );
};
