import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBookingTotal, DEFAULT_HOME_TRAVEL_MIN, DEFAULT_HOME_TRAVEL_MAX } from './pricing';
import { ServiceItem } from '../types';

const mockCornrows: ServiceItem = {
  id: 'cornrows',
  name: 'Cornrows',
  category: 'Braiding',
  shortDescription: 'Classic cornrows styling',
  fullDescription: 'Custom straight or curved cornrows',
  image: '/images/services/cornrows.jpg',
  pricingType: 'range',
  minPrice: 60,
  maxPrice: 100,
  currency: 'CAD',
  homeServiceEligible: true,
  isConfirmedPrice: false, // Preliminary estimate
  active: true,
};

const mockKnotless: ServiceItem = {
  id: 'knotless-braids',
  name: 'Knotless Braids',
  category: 'Braiding',
  shortDescription: 'Tension-free seamless braids',
  fullDescription: 'Lightweight knotless braids with natural finish',
  image: '/images/services/knotless.jpg',
  pricingType: 'range',
  minPrice: 100,
  maxPrice: 350,
  currency: 'CAD',
  homeServiceEligible: true,
  isConfirmedPrice: false,
  active: true,
};

const mockSpaSteam: ServiceItem = {
  id: 'scalp-steam',
  name: 'Scalp Steam Therapy',
  category: 'Spa Services',
  shortDescription: 'Deep hydration scalp reset',
  fullDescription: 'Botanical steam therapy for scalp wellness',
  image: '/images/services/steam.jpg',
  pricingType: 'quote',
  currency: 'CAD',
  homeServiceEligible: false,
  isConfirmedPrice: false,
  active: true,
};

test('empty selections return zero totals', () => {
  const result = calculateBookingTotal([]);
  assert.equal(result.hasItems, false);
  assert.equal(result.totalMin, 0);
  assert.equal(result.totalMax, 0);
  assert.equal(result.isHomeService, false);
});

test('studio appointment calculates range for single service without travel fee', () => {
  const result = calculateBookingTotal([{ service: mockCornrows, quantity: 1 }], false);
  assert.equal(result.hasItems, true);
  assert.equal(result.minSubtotal, 60);
  assert.equal(result.maxSubtotal, 100);
  assert.equal(result.travelFeeMin, 0);
  assert.equal(result.travelFeeMax, 0);
  assert.equal(result.totalMin, 60);
  assert.equal(result.totalMax, 100);
  assert.equal(result.hasUnconfirmedPrices, true);
});

test('home service applies travel fee correctly', () => {
  const result = calculateBookingTotal([{ service: mockCornrows, quantity: 1 }], true);
  assert.equal(result.isHomeService, true);
  assert.equal(result.travelFeeMin, DEFAULT_HOME_TRAVEL_MIN);
  assert.equal(result.travelFeeMax, DEFAULT_HOME_TRAVEL_MAX);
  assert.equal(result.totalMin, 60 + DEFAULT_HOME_TRAVEL_MIN);
  assert.equal(result.totalMax, 100 + DEFAULT_HOME_TRAVEL_MAX);
});

test('multi-service selection sums multiple items accurately', () => {
  const result = calculateBookingTotal([
    { service: mockCornrows, quantity: 1 },
    { service: mockKnotless, quantity: 1 },
  ], false);

  assert.equal(result.minSubtotal, 160); // 60 + 100
  assert.equal(result.maxSubtotal, 450); // 100 + 350
  assert.equal(result.totalMin, 160);
  assert.equal(result.totalMax, 450);
});

test('quote-required services flag estimate pending confirmation', () => {
  const result = calculateBookingTotal([
    { service: mockCornrows, quantity: 1 },
    { service: mockSpaSteam, quantity: 1 },
  ], false);

  assert.equal(result.hasQuoteRequired, true);
  assert.equal(result.hasUnconfirmedPrices, true);
  assert.match(result.displayPriceString, /estimate pending confirmation/);
});
