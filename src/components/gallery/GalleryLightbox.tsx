import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Info } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged view: ${item.title}`}
      className="fixed inset-0 z-50 bg-[#2A201D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      {/* Close button top right */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D8C29A]"
        aria-label="Close enlarged gallery image"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D8C29A]"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D8C29A]"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container & Metadata */}
      <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-[#D8C29A]/30 bg-black/40">
          <img
            src={item.imageUrl}
            alt={item.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 bg-[#2A201D] border border-stone-700/60 p-4 rounded-xl text-center max-w-xl w-full">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs uppercase tracking-widest text-[#D8C29A] font-semibold">
              {item.category}
            </span>
            <span className="text-stone-500">&bull;</span>
            <span className="text-xs text-stone-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
            {item.title}
          </h3>

          <p className="text-xs text-stone-300 mt-1 leading-relaxed">
            {item.caption}
          </p>

          <div className="mt-2 text-[10px] text-stone-400 flex items-center justify-center gap-1.5 italic">
            <Info className="w-3 h-3 text-[#D8C29A]" />
            <span>Demonstration photography curated for Winnipeg Braids 2u</span>
          </div>
        </div>
      </div>
    </div>
  );
};
