'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function MembershipBanner({ onOpenJoin, onOpenAdvertise }) {
  return (
    <section className="py-6" id="membership">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* 1 Row with 2 Complementary Sections Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          
          {/* Section 1 (Left): Become a Member Today */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#DA251D] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 text-white flex flex-col justify-between shadow-[0_10px_35px_-5px_rgba(218,37,29,0.35)]">
            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-200 uppercase tracking-widest block mb-1.5 opacity-95">
                JOIN ECAM • VOICE OF ELECTRICAL CONTRACTORS (ESTD. 1925)
              </span>
              <h3 className="fluid-section-title font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-2.5">
                Become an ECAM Member Today
              </h3>
              <p className="text-xs sm:text-sm text-red-50 leading-relaxed">
                Be a part of India&apos;s pioneer Association of Licensed Electrical Contractors, Traders &amp; Manufacturers. Gain access to PWD/MSEDCL liaisoning, BIS safety standardisation, IECT technical guides, and member advocacy uniting 3,000+ professionals.
              </p>
            </div>

            <div className="relative z-10 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/20 flex items-center justify-start sm:justify-end">
              <button
                type="button"
                onClick={onOpenJoin}
                className="w-full sm:w-auto bg-white text-[#DA251D] hover:bg-red-50 font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <span>Apply for Membership</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Section 2 (Right): Advertise With Us Today */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#180A0A] via-[#2A0808] to-[#450A0A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 text-white flex flex-col justify-between shadow-[0_12px_40px_-5px_rgba(0,0,0,0.5)] border border-[#F59E0B]/30">
            {/* Subtle Ambient Decorative Glow */}
            <div className="absolute -right-16 -top-16 w-52 h-52 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#FBBF24] uppercase tracking-widest flex items-center gap-1.5 mb-1.5 opacity-95">
                <Sparkles size={12} className="text-[#FBBF24]" />
                <span>ECAMEX26 &amp; PORTAL SPONSORSHIP</span>
              </span>
              <h3 className="fluid-section-title font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-2.5">
                Advertise With Us Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Showcase your cables, switchgears, panels, transformers, and electrical equipment directly to 3,000+ licensed contractors, engineers, and traders across Maharashtra &amp; Pan-India.
              </p>
            </div>

            <div className="relative z-10 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/15 flex items-center justify-start sm:justify-end">
              <button
                type="button"
                onClick={onOpenAdvertise}
                className="w-full sm:w-auto bg-white text-[#18181B] hover:bg-slate-100 font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <span>Book Your Ad / Expo Slot</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
