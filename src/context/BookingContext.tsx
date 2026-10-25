import React, { createContext, useContext, useState, useEffect } from 'react';
import { BookingSelection, ServiceItem, BookingCalculationResult } from '../types';
import { calculateBookingTotal } from '../utils/pricing';

interface BookingContextType {
  selections: BookingSelection[];
  isHomeService: boolean;
  setIsHomeService: (val: boolean) => void;
  homeAddress: string;
  setHomeAddress: (val: string) => void;
  addService: (service: ServiceItem) => void;
  removeService: (serviceId: string) => void;
  toggleService: (service: ServiceItem) => void;
  isServiceSelected: (serviceId: string) => boolean;
  clearBooking: () => void;
  totals: BookingCalculationResult;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (val: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selections, setSelections] = useState<BookingSelection[]>([]);
  const [isHomeService, setIsHomeService] = useState<boolean>(false);
  const [homeAddress, setHomeAddress] = useState<string>('');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Load any existing session selections
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('wb2u_selections');
      if (saved) {
        setSelections(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save changes
  useEffect(() => {
    try {
      sessionStorage.setItem('wb2u_selections', JSON.stringify(selections));
    } catch {
      // Ignore
    }
  }, [selections]);

  const addService = (service: ServiceItem) => {
    setSelections((prev) => {
      const exists = prev.find((item) => item.service.id === service.id);
      if (exists) return prev;
      return [...prev, { service, quantity: 1 }];
    });
  };

  const removeService = (serviceId: string) => {
    setSelections((prev) => prev.filter((item) => item.service.id !== serviceId));
  };

  const toggleService = (service: ServiceItem) => {
    setSelections((prev) => {
      const exists = prev.find((item) => item.service.id === service.id);
      if (exists) {
        return prev.filter((item) => item.service.id !== service.id);
      } else {
        return [...prev, { service, quantity: 1 }];
      }
    });
  };

  const isServiceSelected = (serviceId: string): boolean => {
    return selections.some((item) => item.service.id === serviceId);
  };

  const clearBooking = () => {
    setSelections([]);
    setIsHomeService(false);
    setHomeAddress('');
  };

  const totals = calculateBookingTotal(selections, isHomeService);

  return (
    <BookingContext.Provider
      value={{
        selections,
        isHomeService,
        setIsHomeService,
        homeAddress,
        setHomeAddress,
        addService,
        removeService,
        toggleService,
        isServiceSelected,
        clearBooking,
        totals,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
