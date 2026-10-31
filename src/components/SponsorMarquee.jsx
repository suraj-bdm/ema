'use client';

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SponsorMarquee({ onOpenAdvertise }) {
  const scrollRef = useRef(null);
  const pauseUntilRef = useRef(0);
  const animFrameRef = useRef(null);

  // Official Strategic Sponsor & Feature Banners from EMA Mumbai
  const sponsorBanners = [
    {
      id: 'sponsor-banner-1',
      title: 'PRABHAT WIRES LLP — Official EMA Partner',
      image: '/images/prabhat-wires-300x200.jpg',
    },
    {
      id: 'sponsor-banner-2',
      title: 'PRABHAT CABLES PVT LTD — Official EMA Partner',
      image: '/images/prabhat-cables-300x200.jpg',
    },
    {
      id: 'sponsor-banner-3',
      title: 'VASHI ELECTRICALS — Official Partner',
      image: '/images/vashi-electricals-ad.gif',
    },
    {
      id: 'sponsor-banner-4',
      title: 'RR KABEL — Official Partner',
      image: '/images/rr-kabel-ad.gif',
    },
    {
      id: 'sponsor-banner-5',
      title: 'OSRAM LIGHTING — Official EMA Partner',
      image: '/images/osram.gif',
    },
    {
      id: 'sponsor-banner-6',
      title: 'GRACE CABLES & WIRES — Official Partner',
      image: '/images/grace.gif',
    },
    {
      id: 'sponsor-banner-7',
      title: 'SURELOCK ELECTRICALS — Official Partner',
      image: '/images/2731644040046_Banner-Gif-213-X-156px_(2).gif',
    },
    {
      id: 'sponsor-banner-8',
      title: 'CITROEN SWITCHGEARS — Official Partner',
      image: '/images/4991634227077_3.gif',
    },
    {
      id: 'sponsor-banner-9',
      title: 'UNIQUE CABLES — Official Partner',
      image: '/images/5831634227052_2.gif',
    },
    {
      id: 'sponsor-banner-10',
      title: 'NK ELECTRICALS — Official Partner',
      image: '/images/nk-electricals-ad.jpg',
    },
    {
      id: 'sponsor-banner-11',
      title: 'PRECISION PIPES — Official Partner',
      image: '/images/precision-pipes-ad.jpg',
    },
    {
      id: 'sponsor-banner-12',
      title: 'EMA Managing Committee — 90th Milestone Year',
      image: '/images/ema-committee-card.png',
    },
    {
      id: 'sponsor-banner-13',
      title: 'EMA Premier League — Annual Sports Meet',
      image: '/images/ema-premier-league-card.png',
    },
  ];

  // Tripled for seamless infinite continuous sliding in both directions
  const marqueeList = [
    ...sponsorBanners,
    ...sponsorBanners,
    ...sponsorBanners,
  ];

  // Continuous auto-sliding without stopping on hover
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    let lastTime = null;
    const speed = 42; // Smooth 42 px per second continuous sliding

    const getSetWidth = () => {
      if (el.children.length > sponsorBanners.length) {
        const first = el.children[0];
        const nextSetFirst = el.children[sponsorBanners.length];
        if (first && nextSetFirst) {
          const diff = nextSetFirst.offsetLeft - first.offsetLeft;
          if (diff > 0) return diff;
        }
      }
      return 2560;
    };

    // Initialize to middle set for smooth bi-directional navigation
    const initialWidth = getSetWidth();
    if (el.scrollLeft === 0) {
      el.scrollLeft = initialWidth;
    }

    const step = (now) => {
      if (!lastTime) lastTime = now;
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Keep sliding continuously; only pause briefly when user clicks Next/Prev buttons
      if (Date.now() >= pauseUntilRef.current && el) {
        const currentSetWidth = getSetWidth();
        el.scrollLeft += speed * delta;

        // Infinite loop forward
        if (el.scrollLeft >= currentSetWidth * 2) {
          el.scrollLeft -= currentSetWidth;
        }
        // Infinite loop backward
        else if (el.scrollLeft <= 0) {
          el.scrollLeft += currentSetWidth;
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [sponsorBanners.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (scrollRef.current) {
      pauseUntilRef.current = Date.now() + 700;
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (scrollRef.current) {
      pauseUntilRef.current = Date.now() + 700;
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 sm:py-8 overflow-hidden" id="sponsors-marquee">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Marquee Track Container: Slides continuously, Prev & Next buttons appear on hover */}
        <div className="relative w-full rounded-2xl group select-none">
          {/* Floating Left/Previous Button - Always Visible */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#273485] text-[#273485] hover:text-white border border-slate-300 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 backdrop-blur-md"
            title="Previous"
            aria-label="Previous sponsors"
          >
            <ChevronLeft size={24} strokeWidth={2.8} />
          </button>

          {/* Floating Right/Next Button - Always Visible */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#273485] text-[#273485] hover:text-white border border-slate-300 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 backdrop-blur-md"
            title="Next"
            aria-label="Next sponsors"
          >
            <ChevronRight size={24} strokeWidth={2.8} />
          </button>

          {/* Scrollable Sponsor Banners (Increased Height: 195px) */}
          <div
            ref={scrollRef}
            className="flex items-center gap-3.5 sm:gap-5 overflow-x-auto py-2.5 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none"
          >
            {marqueeList.map((banner, index) => (
              <div
                key={`${banner.id}-${index}`}
                onClick={onOpenAdvertise}
                className="w-[240px] sm:w-[270px] md:w-[290px] aspect-[300/200] shrink-0 bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#273485]/50 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] group/card select-none cursor-pointer overflow-hidden"
                title={banner.title}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover block group-hover/card:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
