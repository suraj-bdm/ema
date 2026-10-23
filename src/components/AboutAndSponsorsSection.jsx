'use client';

export default function AboutAndSponsorsSection({ onOpenAbout, onOpenJoin, onOpenAdvertise }) {
  // 6 Fixed-Size Strategic Sponsor Slots (242 x 235 PX)
  const sponsorPartners = [
    {
      id: 'partner-slot-1',
      title: 'Advertise With Us - Slot 1 (Size: 242 x 235 px)',
      image: '/images/advertise-size-242x235.svg',
    },
    {
      id: 'partner-slot-2',
      title: 'Advertise With Us - Slot 2 (Size: 242 x 235 px)',
      image: '/images/advertise-size-242x235.svg',
    },
    {
      id: 'partner-slot-3',
      title: 'Advertise With Us - Slot 3 (Size: 242 x 235 px)',
      image: '/images/advertise-size-242x235.svg',
    },
    {
      id: 'partner-slot-4',
      title: 'Advertise With Us - Slot 4 (Size: 242 x 235 px)',
      image: '/images/advertise-size-242x235.svg',
    },
    {
      id: 'partner-slot-5',
      title: 'Advertise With Us - Slot 5 (Size: 242 x 235 px)',
      image: '/images/advertise-size-242x235.svg',
    },
    {
      id: 'partner-slot-6',
      title: 'Advertise With Us - Slot 6 (Size: 242 x 235 px)',
      image: '/images/advertise-size-242x235.svg',
    },
  ];

  return (
    <section className="pt-0 pb-8 sm:pb-12" id="about">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* 1. Dual Strategic Sponsored Banners (1 Row me 2 Images with increased height) */}
        <div className="mb-7 sm:mb-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Image 1: Premier Showcase / Advertise Banner Slot (Size: 700 x 180 px, Ratio 3.8:1) */}
            <div
              onClick={onOpenAdvertise}
              className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 bg-[#180A0A] group cursor-pointer aspect-[700/180] w-full relative"
              title="Advertise With Us - Size: 700 x 180 px"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/advertise-size-700x180.svg"
                alt="Advertise With ECAM - Size: 700 x 180 px"
                className="w-full h-full object-cover object-center block group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Image 2: Premier Showcase / Advertise Banner Slot (Size: 700 x 180 px, Ratio 3.8:1) */}
            <div
              onClick={onOpenAdvertise}
              className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 bg-[#180A0A] group cursor-pointer aspect-[700/180] w-full relative"
              title="Advertise With Us - Size: 700 x 180 px"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/advertise-size-700x180.svg"
                alt="Advertise With ECAM - Size: 700 x 180 px"
                className="w-full h-full object-cover object-center block group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* 2. Split Content Row: Left Overview & Right Alliance Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column (7 cols): Editorial Overview & Institutional Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-4.5 flex flex-col justify-between h-full">
              
              {/* Pillar 1: What is ECAM */}
              <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DA251D]/30 transition-all">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#DA251D] tracking-wider uppercase block mb-1.5">
                  APEX ELECTRICAL CONTRACTING BODY (ESTD. 1925 • CENTENARY)
                </span>
                <h3 className="fluid-card-title font-bold text-[#18181B] mb-2">
                  What is ECAM?
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  <strong className="text-black font-bold">ECAM (Electrical Contractors&apos; Association of Maharashtra)</strong> is the premier national-level body of Licensed electrical contractors, electrical traders, and allied associates including manufacturers, engineers, and consultants. Founded in 1925, ECAM has a PAN-Maharashtra presence with its headquarters in The Stock Exchange Towers, Mumbai and active regional divisions across Pune, Nashik, Thane, Kokan, Ahilyanagar, Jalgaon, and Western Maharashtra, proudly uniting over 3,000+ active members.
                </p>
              </div>

              {/* Pillar 2: Core Objectives & Standards */}
              <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DA251D]/30 transition-all">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#DA251D] tracking-wider uppercase block mb-1.5">
                  CORE OBJECTIVES &amp; A COMMITMENT TO EXCELLENCE
                </span>
                <h3 className="fluid-card-title font-bold text-[#18181B] mb-2">
                  Advancing Safety &amp; Industry Standards
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  ECAM unites the electrical fraternity into a well-knit organisation committed to high business morality and skilled workmanship. Key mandates include advancing electrical safety education and research, formulating electrical codes &amp; guidelines in cooperation with the Bureau of Indian Standards (BIS), liaising with IEEMA &amp; IMC, and organising premier trade expositions like ECAMEX.
                </p>
              </div>

              {/* President's Message & Official Leadership Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#DA251D]/30 transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                  {/* President Emblem / Monogram */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#DA251D]/30 shadow-sm p-2 bg-gradient-to-br from-[#991B1B] via-[#DA251D] to-[#B71C1C] text-white flex flex-col items-center justify-center text-center group">
                      <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono tracking-wider">
                        ECA
                      </span>
                      <span className="text-[8px] uppercase font-bold tracking-widest text-white/90 mt-0.5">
                        PRESIDENT
                      </span>
                      <span className="text-[7px] text-amber-200/80 font-mono">
                        2026-2027
                      </span>
                    </div>
                    <span className="mt-1.5 text-[9.5px] font-bold text-[#DA251D] uppercase tracking-wider px-2 py-0.5 bg-red-50 border border-red-200/80 rounded-full">
                      PRESIDENT
                    </span>
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#DA251D] tracking-wider uppercase block mb-1">
                      LEADERSHIP PERSPECTIVE
                    </span>
                    <h3 className="fluid-card-title font-bold text-[#18181B] mb-1">
                      President&apos;s Message
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic font-normal">
                      &ldquo;Welcome to the Electrical Contractors&apos; Association of Maharashtra. As we celebrate 100 years of glorious service, ECAM continues to stand as the undisputed voice of India&apos;s electrical contracting community. We are devoted to promoting electrical safety, renewable energy adoption, professional licensing standards, and member welfare through ECAMEX 2026 and our statewide network.&rdquo;
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-bold text-[#18181B]">Shri Devang Thakur</p>
                        <p className="text-[10px] text-slate-500 font-medium">President, ECAM • Devang Electricals, Nashik</p>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        Centenary: 1925 - 2025/26
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (5 cols): Sponsored Showcase - 6 Fixed Cards (242 x 235 px) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="grid grid-cols-2 grid-rows-3 gap-3.5 sm:gap-4 h-full flex-1">
              {sponsorPartners.map((partner) => (
                <div
                  key={partner.id}
                  onClick={onOpenAdvertise}
                  className="relative w-full aspect-[242/235] lg:aspect-auto h-full min-h-[145px] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 bg-[#180A0A] group cursor-pointer flex"
                  title="Click to Advertise - Size: 242 x 235 px"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${partner.image}?v=5`}
                    alt={partner.title}
                    className="w-full h-full object-fill block group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3. Centenary Metric Stats - Full Width Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mt-6 sm:mt-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#DA251D]/30 transition-all text-center">
            <p className="text-2xl sm:text-3xl font-black text-[#DA251D] tracking-tight">1925</p>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">Founded Year (Centenary Era)</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#DA251D]/30 transition-all text-center">
            <p className="text-2xl sm:text-3xl font-black text-[#DA251D] tracking-tight">3,000+</p>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">Active Licensed Members</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#DA251D]/30 transition-all text-center">
            <p className="text-2xl sm:text-3xl font-black text-[#DA251D] tracking-tight">100%</p>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">Safety &amp; BIS Codes</p>
          </div>
        </div>

      </div>
    </section>
  );
}
