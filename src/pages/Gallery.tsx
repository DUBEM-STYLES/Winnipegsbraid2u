import React, { useState } from 'react';
import { Sparkles, Filter, Info, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem } from '../types';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Braids', 'Protective Styles', 'Spa', 'Wellness', 'Salon'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <div className="bg-[#F9F6F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBD0] border border-[#D8C29A] text-[#7F011F] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Portfolio &bull; Salon &bull; Spa</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#2A201D] font-normal tracking-tight">
            Artistry &amp; <span className="italic font-medium text-[#7F011F]">Sanctuary Gallery</span>
          </h1>

          <p className="text-base sm:text-lg text-[#54433B] mt-4 font-light leading-relaxed">
            Explore our intricate protective braid styles, scalp wellness moments, and warm salon environment. Click any portrait to view in high definition.
          </p>
        </div>

        {/* Demonstration Notice */}
        <div className="max-w-2xl mx-auto mb-10 bg-[#F5EBD0]/70 p-4 rounded-xl border border-[#D8C29A] flex items-start gap-3 text-xs text-[#54433B]">
          <Info className="w-5 h-5 text-[#7F011F] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#2A201D]">Demonstration Imagery Policy</p>
            <p className="mt-0.5">
              Images currently featured demonstrate the styles, techniques, and sanctuary aesthetics offered by Winnipeg Braids 2u. Authentic on-site client captures are integrated as new sessions conclude.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Gallery Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#7F011F] text-white shadow-sm'
                  : 'bg-[#F5EBD0]/70 text-[#54433B] hover:bg-[#F5EBD0] hover:text-[#2A201D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            // Give varied aspect ratios for an editorial rhythm
            const isTall = index % 3 === 0;

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveLightboxItem(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View enlarged photo: ${item.title}`}
                className="group relative rounded-2xl overflow-hidden bg-stone-200 border border-[#D8C29A]/50 shadow-sm hover:shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7F011F]"
              >
                <div className={`w-full overflow-hidden ${isTall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A201D]/90 via-[#2A201D]/30 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8C29A]">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
