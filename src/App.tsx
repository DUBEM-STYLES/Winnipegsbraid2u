import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// Exactly six main pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Book } from './pages/Book';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F9F6F0] text-[#2A201D]">
          {/* Global Header */}
          <Header />

          {/* Six Main Pages Routes */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </BookingProvider>
    </BrowserRouter>
  );
}
