'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection({ onOpenJoin, onOpenAbout, onOpenAdvertise }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/ema-slider-1.png',
      alt: 'The Electric Merchants Association Mumbai - Banner 1',
    },
    {
      id: 2,
      image: '/images/ema-slider-2.png',
      alt: 'The Electric Merchants Association Mumbai - Banner 2',
    },
    {
      id: 3,
      image: '/images/ema-slider-3.png',
      alt: 'The Electric Merchants Association Mumbai - Banner 3',
    },
    {
      id: 4,
      image: '/images/ema-slider-4.png',
      alt: 'The Electric Merchants Association Mumbai - Banner 4',
    },
    {
      id: 5,
      image: '/images/ema-flag-banner.jpg',
      alt: 'The Electric Merchants Association Mumbai - Estd. 1937 Granite Jubilee Flag Banner',
    },
  ];

  // Auto-play hero carousel every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="pt-2 sm:pt-3 pb-0 block w-full" id="hero">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-3.5 lg:gap-4 items-stretch w-full">
          {/* Left Column: Hero Carousel - 100% self-contained without text overlay */}
          <div
            className="w-full lg:w-[67%] xl:w-[68%] 2xl:w-[70%] min-w-0 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 aspect-[1001/451] min-h-[220px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-0 bg-slate-100 group select-none shrink-0 lg:shrink"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Slides with Clean Fade Transition */}
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
              );
            })}

            {/* Floating Left/Right Hover Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#273485] text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center cursor-pointer backdrop-blur-xs border border-white/20 shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#273485] text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center cursor-pointer backdrop-blur-xs border border-white/20 shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>

            {/* Bottom Controls: Minimalist Semi-Transparent Pill with Dots & Counter (Strictly within Left Slider) */}
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 z-20 pointer-events-auto">
              <div className="flex items-center gap-1.5 sm:gap-2.5 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-md">
                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5 mr-1">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      className={`transition-all rounded-full cursor-pointer ${
                        idx === currentSlide
                          ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-gradient-to-r from-amber-400 to-[#DB1E36] shadow-xs'
                          : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Counter */}
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white/95 pr-1 select-none">
                  0{currentSlide + 1} / 0{slides.length}
                </span>

                {/* Prev / Next Arrows inside pill */}
                <div className="flex items-center gap-1 border-l border-white/20 pl-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={12} strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={12} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Custom Fitted Banners - Original Width & Native 700x225 Aspect Ratio */}
          <div className="w-full lg:w-[33%] xl:w-[32%] 2xl:w-[30%] min-w-0 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 justify-between">
            {/* Stacked Banner 1: Prabhat Cables Pvt Ltd */}
            <div
              onClick={onOpenAdvertise}
              className="flex-1 w-full rounded-xl lg:rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all relative group bg-white cursor-pointer aspect-[700/225] sm:aspect-auto lg:aspect-auto flex items-center justify-center min-h-[110px] sm:min-h-[125px] lg:min-h-0"
              title="Prabhat Cables Pvt Ltd — Authorised Polycab Distributor"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-card-prabhat-cables.png"
                alt="Prabhat Cables Pvt Ltd - Official EMA Sponsor"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 block"
              />
            </div>

            {/* Stacked Banner 2: Prabhat Wires AK Private Limited */}
            <div
              onClick={onOpenAdvertise}
              className="flex-1 w-full rounded-xl lg:rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all relative group bg-white cursor-pointer aspect-[700/225] sm:aspect-auto lg:aspect-auto flex items-center justify-center min-h-[110px] sm:min-h-[125px] lg:min-h-0"
              title="Prabhat Wires AK Private Limited — Official EMA Partner"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-card-prabhat-wires.png"
                alt="Prabhat Wires AK Private Limited - Official EMA Sponsor"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 block"
              />
            </div>

            {/* Stacked Banner 3: Polycab India Limited */}
            <div
              onClick={onOpenAdvertise}
              className="flex-1 w-full rounded-xl lg:rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all relative group bg-white cursor-pointer aspect-[700/225] sm:aspect-auto lg:aspect-auto flex items-center justify-center min-h-[110px] sm:min-h-[125px] lg:min-h-0"
              title="Polycab India Limited — Official EMA Sponsor"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-card-polycab.png"
                alt="Polycab India Limited - Official EMA Sponsor"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
