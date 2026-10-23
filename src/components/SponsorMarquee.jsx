'use client';

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SponsorMarquee({ onOpenAdvertise }) {
  const scrollRef = useRef(null);
  const pauseUntilRef = useRef(0);
  const animFrameRef = useRef(null);

  // 8 Prominent Strategic Sponsor Visual Banner Slots (Size: 300 x 150 px, Ratio 2:1)
  const sponsorBanners = [
    {
      id: 'sponsor-banner-1',
      title: 'Sponsor Showcase Banner - Slot 1 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
    },
    {
      id: 'sponsor-banner-2',
      title: 'Sponsor Showcase Banner - Slot 2 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
    },
    {
      id: 'sponsor-banner-3',
      title: 'Sponsor Showcase Banner - Slot 3 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
    },
    {
      id: 'sponsor-banner-4',
      title: 'Sponsor Showcase Banner - Slot 4 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
    },
    {
      id: 'sponsor-banner-5',
      title: 'Sponsor Showcase Banner - Slot 5 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
    },
    {
      id: 'sponsor-banner-6',
      title: 'Sponsor Showcase Banner - Slot 6 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
    },
    {
      id: 'sponsor-banner-7',
      title: 'Sponsor Showcase Banner - Slot 7 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
    },
    {
      id: 'sponsor-banner-8',
      title: 'Sponsor Showcase Banner - Slot 8 (Size: 300 x 150 px)',
      image: '/images/advertise-size-300x150.svg',
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
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#DA251D] text-[#DA251D] hover:text-white border border-slate-300 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 backdrop-blur-md"
            title="Previous"
            aria-label="Previous sponsors"
          >
            <ChevronLeft size={24} strokeWidth={2.8} />
          </button>

          {/* Floating Right/Next Button - Always Visible */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#DA251D] text-[#DA251D] hover:text-white border border-slate-300 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 backdrop-blur-md"
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
                className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-[145px] sm:h-[165px] md:h-[185px] lg:h-[195px] shrink-0 bg-[#180A0A] rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#DA251D]/40 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] group/card select-none cursor-pointer overflow-hidden"
                title="Click to Advertise - Size: 300 x 150 px"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover object-center block group-hover/card:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
