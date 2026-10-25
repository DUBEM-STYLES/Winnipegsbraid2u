export type ServiceCategory = 
  | 'Braiding'
  | 'Protective Styles'
  | 'Weaves and Other Hair Services'
  | 'Spa Services'
  | 'Wellness Services';

export type PricingType = 'fixed' | 'range' | 'quote';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  image: string;
  pricingType: PricingType;
  fixedPrice?: number;
  minPrice?: number;
  maxPrice?: number;
  currency: 'CAD';
  estimatedDuration?: string;
  homeServiceEligible: boolean;
  isConfirmedPrice: boolean;
  active: boolean;
  notes?: string;
}

export interface BookingSelection {
  service: ServiceItem;
  quantity: number;
}

export interface BookingCalculationResult {
  hasItems: boolean;
  fixedSubtotal: number;
  minSubtotal: number;
  maxSubtotal: number;
  hasUnconfirmedPrices: boolean;
  hasQuoteRequired: boolean;
  isHomeService: boolean;
  travelFeeMin: number;
  travelFeeMax: number;
  totalMin: number;
  totalMax: number;
  displayPriceString: string;
}

export interface BookingRequestForm {
  fullName: string;
  email: string;
  phone: string;
  appointmentType: 'studio' | 'home';
  homeAddress?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Braids' | 'Protective Styles' | 'Spa' | 'Wellness' | 'Salon';
  imageUrl: string;
  alt: string;
  caption: string;
  isDemonstration: boolean;
}
