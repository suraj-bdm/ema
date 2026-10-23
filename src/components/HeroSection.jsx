'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onOpenJoin, onOpenAbout, onOpenAdvertise }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/ecamex26-banner.jpg',
      imagePosition: 'object-cover object-center',
      hideText: true,
      scrim: 'hidden',
      action: onOpenJoin,
    },
    {
      id: 2,
      image: '/images/ecam-hero-substation.jpg',
      imagePosition: 'object-cover object-center',
      icon: '🏛',
      supertitle: "ELECTRICAL CONTRACTORS' ASSOCIATION OF MAHARASHTRA • ESTD. 1925",
      title: (
        <>
          100 Years of Excellence in
          <br />
          Electrical Contracting &amp;
          <br />
          Power Infrastructure
        </>
      ),
      description:
        "Founded in 1925, ECAM is India's apex pioneer association uniting 3,000+ Licensed Electrical Contractors, Engineers, Panel Builders, Traders and Consultants across Maharashtra & Pan-India.",
      primaryBtn: 'Become an ECAM Member',
      secondaryBtn: 'About ECAM Centenary',
      action: onOpenJoin,
      secondaryAction: onOpenAbout,
      highlightTag: 'Centenary Legacy (1925 - 2025/26)',
      scrim: 'from-black/92 via-slate-950/75 via-50% to-black/25',
    },
    {
      id: 3,
      image: '/images/ecam-hero-standards.jpg',
      imagePosition: 'object-cover object-center',
      icon: '🛡',
      supertitle: 'OFFICIAL APEX VOICE OF THE ELECTRICAL SECTOR',
      title: (
        <>
          Formulating National Codes
          <br />
          with Bureau of Indian
          <br />
          Standards (BIS &amp; IEEMA)
        </>
      ),
      description:
        'Advancing electrical safety research, high-voltage laboratory compliance with BIS, and actively championing contractor welfare across Mumbai, Pune, Nashik, Thane, and 9 regional divisions.',
      primaryBtn: 'Join ECAM Network',
      secondaryBtn: 'Our Core Objectives',
      action: onOpenJoin,
      secondaryAction: onOpenAbout,
      highlightTag: 'Accredited with BIS & IEEMA Standards',
      scrim: 'from-black/92 via-slate-950/75 via-50% to-black/25',
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

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="pt-2 sm:pt-3 pb-0 block w-full" id="hero">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-3.5 lg:gap-4 items-stretch hero-viewport-fit">
          {/* Left Column (8 cols): Hero Carousel */}
          <div
            className={`lg:col-span-8 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-slate-800/60 hero-carousel-card flex flex-col justify-between p-3.5 sm:p-5 lg:p-5 xl:p-6 text-white group select-none min-h-[300px] sm:min-h-[340px] lg:min-h-0 h-full ${
              slides[currentSlide].hideText ? 'cursor-pointer' : ''
            }`}
            onClick={() => {
              if (slides[currentSlide].hideText && slides[currentSlide].action) {
                slides[currentSlide].action();
              }
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Slides with Slow Zoom Transition */}
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt="ECAM Banner Showcase"
                    className={`w-full h-full object-cover object-center ${
                      isActive ? 'scale-105 transition-transform duration-7000 ease-out' : 'scale-100'
                    }`}
                  />
                  {/* Cinematic Directional Scrim (Hidden on Banner Slide) */}
                  {slide.scrim !== 'hidden' && (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-r ${slide.scrim || 'from-black/92 via-slate-950/75 via-50% to-black/25'}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                      <div className="absolute -left-12 -top-12 w-72 h-72 rounded-full bg-[#DA251D]/20 blur-3xl pointer-events-none" />
                    </>
                  )}
                </div>
              );
            })}

            {/* Foreground Content for Current Slide (Hidden when hideText is true) */}
            {!slides[currentSlide].hideText ? (
              <div className="relative z-10 max-w-xl transition-all duration-500 pt-0.5">
                {/* Glassmorphic Live Tag Pill */}
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[9.5px] sm:text-[10.5px] font-bold text-amber-300 tracking-wider uppercase mb-1.5 sm:mb-2 shadow-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#DA251D] animate-pulse" />
                  <span className="text-white/90">{slides[currentSlide].supertitle}</span>
                </div>

                {/* High-Impact Main Heading */}
                <h1 className="fluid-hero-title font-black text-white tracking-tight drop-shadow-md mb-1.5 sm:mb-2 leading-[1.14]">
                  {slides[currentSlide].title}
                </h1>

                {/* Sharp Legible Description */}
                <p className="text-xs sm:text-[12.5px] xl:text-[13.5px] text-slate-100 max-w-lg leading-relaxed mb-3 sm:mb-3.5 font-normal drop-shadow-xs line-clamp-2 sm:line-clamp-3">
                  {slides[currentSlide].description}
                </p>

                {/* Action Buttons Row */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <button
                    type="button"
                    onClick={slides[currentSlide].action}
                    className="bg-gradient-to-r from-[#DA251D] via-[#B71C1C] to-[#991B1B] hover:brightness-110 active:scale-98 text-white font-bold text-xs sm:text-[12.5px] px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-black/40 transition-all cursor-pointer border border-white/25 hover:shadow-red-900/50"
                  >
                    <span>{slides[currentSlide].primaryBtn}</span>
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={slides[currentSlide].secondaryAction}
                    className="bg-white/10 hover:bg-white/20 active:bg-white/5 backdrop-blur-md border border-white/35 text-white font-bold text-xs sm:text-[12.5px] px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
                  >
                    {slides[currentSlide].secondaryBtn}
                  </button>
                </div>
              </div>
            ) : (
              /* Invisible spacer when text is hidden */
              <div className="flex-1" />
            )}

            {/* Bottom Row: Micro Key Indicators + Carousel Navigation Controls */}
            <div className={`relative z-10 pt-2 sm:pt-2.5 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 ${
              !slides[currentSlide].hideText ? 'border-t border-white/15' : ''
            }`}>
              {/* Left: Quick Institutional Micro-Badges (shown only on editorial slides) */}
              {!slides[currentSlide].hideText ? (
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10.5px] sm:text-[11px] font-semibold text-slate-200">
                  <span className="inline-flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-xs">
                    <Sparkles size={11} className="text-amber-400 shrink-0" />
                    <span>Estd. 1925 • Centenary</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DA251D]" />
                    <span>3,000+ Contractors</span>
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-xs">
                    <ShieldCheck size={12} className="text-emerald-400 shrink-0" />
                    <span>9 Regional Divisions</span>
                  </span>
                </div>
              ) : (
                <div />
              )}

              {/* Right: Carousel Navigation Strip (Dots + Next/Prev Arrow Controls) */}
              <div className="flex items-center gap-2 sm:gap-2.5 bg-black/55 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 ml-auto sm:ml-0">
                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5 mr-1">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all rounded-full cursor-pointer ${
                        idx === currentSlide
                          ? 'w-6 h-2 bg-gradient-to-r from-amber-400 to-[#FACC15] shadow-xs'
                          : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Counter */}
                <span className="text-[11px] font-mono font-bold text-white/95 pr-1 select-none">
                  0{currentSlide + 1} / 0{slides.length}
                </span>

                {/* Prev / Next Arrows */}
                <div className="flex items-center gap-1 border-l border-white/20 pl-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={13} strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={13} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Sponsor Banners - 2 Clean Edge-to-Edge Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-2.5 sm:gap-3 h-auto lg:h-full">
            {/* Stacked Banner 1: Advertise With Us Slot (300 x 150 px, Ratio 2:1) */}
            <div
              onClick={onOpenAdvertise}
              className="hero-banner-card rounded-xl lg:rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all relative group bg-[#180A0A] cursor-pointer"
              title="Click to Advertise on ECAM Portal"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/advertise-size-300x150.svg"
                alt="Advertise With Us - ECAM Premier Sponsor Showcase"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300 block"
              />
            </div>

            {/* Stacked Banner 2: Advertise With Us Slot (300 x 150 px, Ratio 2:1) */}
            <div
              onClick={onOpenAdvertise}
              className="hero-banner-card rounded-xl lg:rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all relative group bg-[#180A0A] cursor-pointer"
              title="Click to Advertise on ECAM Portal"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/advertise-size-300x150.svg"
                alt="Advertise With Us - ECAM Premier Sponsor Showcase"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300 block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
