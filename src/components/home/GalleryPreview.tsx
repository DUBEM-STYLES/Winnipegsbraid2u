import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Images, ExternalLink } from 'lucide-react';
import { GALLERY_DATA } from '../../data/gallery';

export const GalleryPreview: React.FC = () => {
  const previewImages = GALLERY_DATA.slice(0, 5);

  return (
    <section className="py-20 sm:py-28 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F011F] block mb-2">
              Visual Artistry &bull; Sanctuary Space
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2A201D] font-normal">
              Moments of Craft &amp; Calm
            </h2>
            <p className="text-sm text-[#54433B] mt-2">
              Glimpses into our protective hair styles, salon ambiance, and tranquil wellness rituals.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7F011F] hover:underline"
          >
            <span>View Full Gallery ({GALLERY_DATA.length}+ Curated Works)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Varied proportion editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main feature image */}
          <div className="sm:col-span-2 lg:col-span-6 group relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto min-h-[320px] bg-stone-200 border border-[#D8C29A]/40 shadow-sm">
            <img
              src={previewImages[0].imageUrl}
              alt={previewImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A201D]/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D8C29A] block mb-1">
                {previewImages[0].category}
              </span>
              <h3 className="font-serif text-2xl font-normal text-white">
                {previewImages[0].title}
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                {previewImages[0].caption}
              </p>
            </div>
          </div>

          {/* 4 complementary grid items */}
          <div className="sm:col-span-2 lg:col-span-6 grid grid-cols-2 gap-6">
            {previewImages.slice(1, 5).map((img) => (
              <div
                key={img.id}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-stone-200 border border-[#D8C29A]/40 shadow-sm"
              >
                <img
                  src={img.imageUrl}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A201D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#D8C29A] block">
                    {img.category}
                  </span>
                  <p className="font-serif text-sm font-medium line-clamp-1">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Demonstration Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 italic">
            * Selected demonstration photography illustrating styling capabilities and sanctuary aesthetics. Official client showcase is updated periodically.
          </p>
        </div>

      </div>
    </section>
  );
};
