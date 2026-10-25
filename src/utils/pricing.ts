import { BookingSelection, BookingCalculationResult } from '../types';

export const DEFAULT_HOME_TRAVEL_MIN = 20;
export const DEFAULT_HOME_TRAVEL_MAX = 40;

/**
 * Calculates estimated subtotal, travel fee, and total range for multiple selected services.
 */
export function calculateBookingTotal(
  selections: BookingSelection[],
  isHomeService: boolean = false,
  travelFeeOverride?: { min: number; max: number }
): BookingCalculationResult {
  if (!selections || selections.length === 0) {
    return {
      hasItems: false,
      fixedSubtotal: 0,
      minSubtotal: 0,
      maxSubtotal: 0,
      hasUnconfirmedPrices: false,
      hasQuoteRequired: false,
      isHomeService,
      travelFeeMin: 0,
      travelFeeMax: 0,
      totalMin: 0,
      totalMax: 0,
      displayPriceString: 'CAD $0',
    };
  }

  let fixedSubtotal = 0;
  let minSubtotal = 0;
  let maxSubtotal = 0;
  let hasUnconfirmedPrices = false;
  let hasQuoteRequired = false;

  for (const item of selections) {
    const qty = Math.max(1, item.quantity || 1);
    const { pricingType, fixedPrice, minPrice, maxPrice, isConfirmedPrice } = item.service;

    if (!isConfirmedPrice) {
      hasUnconfirmedPrices = true;
    }

    if (pricingType === 'quote') {
      hasQuoteRequired = true;
    } else if (pricingType === 'fixed' && typeof fixedPrice === 'number') {
      const lineCost = fixedPrice * qty;
      fixedSubtotal += lineCost;
      minSubtotal += lineCost;
      maxSubtotal += lineCost;
    } else if (pricingType === 'range') {
      const min = typeof minPrice === 'number' ? minPrice * qty : 0;
      const max = typeof maxPrice === 'number' ? maxPrice * qty : min;
      minSubtotal += min;
      maxSubtotal += max;
    }
  }

  const travelFeeMin = isHomeService
    ? (travelFeeOverride?.min ?? DEFAULT_HOME_TRAVEL_MIN)
    : 0;
  const travelFeeMax = isHomeService
    ? (travelFeeOverride?.max ?? DEFAULT_HOME_TRAVEL_MAX)
    : 0;

  const totalMin = minSubtotal + travelFeeMin;
  const totalMax = maxSubtotal + travelFeeMax;

  let displayPriceString = '';
  if (minSubtotal === maxSubtotal) {
    displayPriceString = `CAD $${totalMin}`;
  } else {
    displayPriceString = `CAD $${totalMin} – $${totalMax}`;
  }

  if (hasQuoteRequired || hasUnconfirmedPrices) {
    displayPriceString += ' (estimate pending confirmation)';
  }

  return {
    hasItems: true,
    fixedSubtotal,
    minSubtotal,
    maxSubtotal,
    hasUnconfirmedPrices,
    hasQuoteRequired,
    isHomeService,
    travelFeeMin,
    travelFeeMax,
    totalMin,
    totalMax,
    displayPriceString,
  };
}

export function formatCadPrice(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(amount);
}
