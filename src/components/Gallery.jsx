import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Architectural Elevation',
      src: 'images/hero.jpg',
      span: 'md:col-span-2 md:row-span-2', // Large image
      aspect: 'h-80 md:h-[480px]',
    },
    {
      id: 2,
      title: 'Modern Villa Exterior',
      src: 'images/villa.jpg',
      span: 'md:col-span-1 md:row-span-1', // Medium image
      aspect: 'h-60 md:h-56',
    },
    {
      id: 3,
      title: 'Commercial Showroom Glass',
      src: 'images/commercial.jpg',
      span: 'md:col-span-1 md:row-span-1', // Medium image
      aspect: 'h-60 md:h-56',
    },
    {
      id: 4,
      title: 'Interior Renovation Details',
      src: 'images/renovation.jpg',
      span: 'md:col-span-1 md:row-span-1', // Small image
      aspect: 'h-60 md:h-56',
    },
    {
      id: 5,
      title: 'Residential Multi-Family',
      src: 'images/apartments.jpg',
      span: 'md:col-span-2 md:row-span-1', // Large landscape image
      aspect: 'h-60 md:h-56',
    },
    {
      id: 6,
      title: 'Structural Steel Engineering',
      src: 'images/hero.jpg',
      span: 'md:col-span-1 md:row-span-1', // Small image
      aspect: 'h-60 md:h-56',
    },
  ];

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-brand-offwhite border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            VISUAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Our Work in Focus
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            A visual gallery highlighting craftsmanship, materials, and finished spaces.
          </p>
        </div>

        {/* Responsive Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {galleryImages.map((imgItem, idx) => (
            <div
              key={imgItem.id}
              onClick={() => setSelectedImageIndex(idx)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-stone-200 shadow-subtle ${imgItem.span}`}
            >
              {/* Image */}
              <img
                src={imgItem.src}
                alt={imgItem.title}
                className={`w-full ${imgItem.aspect} object-cover group-hover:scale-105 transition-transform duration-500 ease-out`}
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="self-end w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Architecture</p>
                  <p className="text-base font-bold">{imgItem.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Overlay */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 p-2 text-stone-300 hover:text-white bg-stone-800/80 rounded-full border border-stone-700 focus:outline-none z-10"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-full border border-stone-700 focus:outline-none z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-full border border-stone-700 focus:outline-none z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] rounded-lg overflow-hidden border border-stone-700 shadow-2xl bg-stone-900"
          >
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain mx-auto"
            />
            <div className="p-4 bg-stone-900 border-t border-stone-800 text-center">
              <p className="text-base font-bold text-white">
                {galleryImages[selectedImageIndex].title}
              </p>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
