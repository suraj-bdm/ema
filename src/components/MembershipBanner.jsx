'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function MembershipBanner({ onOpenJoin, onOpenAdvertise }) {
  return (
    <section className="py-6" id="membership">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* 1 Row with 2 Complementary Sections Side-by-Side - EMA Royal Navy & Brand Crimson Red */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          
          {/* Section 1 (Left): Become a Member Today - EMA Royal Navy Blue Theme */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0E1640] via-[#182363] to-[#273485] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 text-white flex flex-col justify-between shadow-[0_12px_40px_-5px_rgba(39,52,133,0.4)] border border-white/10">
            {/* Subtle Ambient Decorative Glow */}
            <div className="absolute -right-16 -top-16 w-52 h-52 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-widest block mb-1.5 opacity-95">
                JOIN EMA • APEX ELECTRICAL TRADE BODY (ESTD. 1937)
              </span>
              <h3 className="fluid-section-title font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-2.5">
                Become an EMA Member Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                Be a part of India&apos;s apex forum of Electrical Manufacturers, Dealers, Distributors, Stockists, Importers, and Contractors. Access verified member directories, commercial trade mediation, circulars, and statewide collective advocacy uniting the electrical fraternity.
              </p>
            </div>

            <div className="relative z-10 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/20 flex items-center justify-start sm:justify-end">
              <button
                type="button"
                onClick={onOpenJoin}
                className="w-full sm:w-auto bg-white text-[#273485] hover:bg-[#EEF2FF] font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <span>Apply for EMA Membership</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Section 2 (Right): Advertise With Us Today - EMA Brand Crimson Red Theme */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#660A14] via-[#990000] to-[#DB1E36] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 text-white flex flex-col justify-between shadow-[0_12px_40px_-5px_rgba(219,30,54,0.4)] border border-amber-300/30">
            {/* Subtle Ambient Decorative Glow */}
            <div className="absolute -right-16 -top-16 w-52 h-52 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#FBBF24] uppercase tracking-widest flex items-center gap-1.5 mb-1.5 opacity-95">
                <Sparkles size={12} className="text-[#FBBF24]" />
                <span>OFFICIAL SPONSORSHIP &amp; MEDIA NETWORK</span>
              </span>
              <h3 className="fluid-section-title font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-2.5">
                Advertise With EMA Today
              </h3>
              <p className="text-xs sm:text-sm text-red-50 leading-relaxed">
                Showcase your wires, cables, switchgears, panels, lighting, transformers, and electrical goods directly to thousands of licensed contractors, wholesale merchants, and distributors across India.
              </p>
            </div>

            <div className="relative z-10 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/20 flex items-center justify-start sm:justify-end">
              <button
                type="button"
                onClick={onOpenAdvertise}
                className="w-full sm:w-auto bg-white text-[#DB1E36] hover:bg-red-50 font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <span>Book Your Ad / Directory Slot</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
