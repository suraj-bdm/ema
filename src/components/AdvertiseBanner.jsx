'use client';

import { ArrowRight, Sparkles, Megaphone } from 'lucide-react';

export default function AdvertiseBanner({ onOpenAdvertise }) {
  return (
    <section className="py-5 sm:py-6" id="advertise">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0E1640] via-[#1A266E] to-[#DB1E36] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_-5px_rgba(39,52,133,0.35)] border border-[#C59B27]/30">
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C59B27]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#273485]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Left Title Block */}
          <div className="relative z-10">
            <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-widest flex items-center gap-1.5 mb-1.5 opacity-95">
              <Sparkles size={13} className="text-[#F59E0B]" />
              <span>STRATEGIC SPONSORSHIP &amp; BRANDING</span>
            </span>
            <h3 className="fluid-section-title font-extrabold text-white tracking-tight leading-tight">
              Advertise With EMA Today
            </h3>
          </div>

          {/* Center Descriptive Paragraph */}
          <div className="relative z-10 text-xs sm:text-sm text-slate-100 max-w-md leading-relaxed">
            <p>
              Showcase your brand directly to thousands of top electrical manufacturers, wholesalers, distributors, and dealers across Mumbai and India.
              <br className="hidden sm:inline" />
              Portal banners, Granite Jubilee event sponsorships &amp; monthly trade journal features available.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAdvertise}
              className="bg-white text-[#273485] hover:bg-[#EEF2FF] hover:text-[#DB1E36] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-102 cursor-pointer border border-white/60"
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
