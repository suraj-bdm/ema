'use client';

import { ArrowRight, Sparkles, Megaphone } from 'lucide-react';

export default function AdvertiseBanner({ onOpenAdvertise }) {
  return (
    <section className="py-5 sm:py-6" id="advertise">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#1A0404] via-[#7F1D1D] to-[#DA251D] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_-5px_rgba(183,28,28,0.35)] border border-[#C59B27]/30">
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C59B27]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#DA251D]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Left Title Block */}
          <div className="relative z-10">
            <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-widest flex items-center gap-1.5 mb-1.5 opacity-95">
              <Sparkles size={13} className="text-[#F59E0B]" />
              <span>STRATEGIC SPONSORSHIP &amp; BRANDING</span>
            </span>
            <h3 className="fluid-section-title font-extrabold text-white tracking-tight leading-tight">
              Advertise With ECAM Today
            </h3>
          </div>

          {/* Center Descriptive Paragraph */}
          <div className="relative z-10 text-xs sm:text-sm text-rose-100 max-w-md leading-relaxed">
            <p>
              Put your company directly in front of 3,000+ accredited electrical contractors, consulting engineers, panel builders, and trade stockists across Maharashtra.
              <br className="hidden sm:inline" />
              Standard banner ribbons, IECT Magazine circulars &amp; ECAMEX 2026 expo sponsorships available.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAdvertise}
              className="bg-white text-[#DA251D] hover:bg-[#FAFBFD] hover:text-[#B71C1C] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-102 cursor-pointer border border-white/60"
            >
              <Megaphone size={14} strokeWidth={2.4} />
              <span>Book Your Ad Slot</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
