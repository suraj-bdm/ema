'use client';

export default function AboutAndSponsorsSection({ onOpenAbout, onOpenJoin, onOpenAdvertise }) {
  // 8 Official Strategic Sponsor Cards from emamumbai.com matching 270x226 exact specs
  const sponsorPartners = [
    {
      id: 'partner-slot-1',
      title: 'NK ELECTRICALS — Official EMA Partner',
      image: '/images/nk-electricals-ad.jpg',
    },
    {
      id: 'partner-slot-2',
      title: 'RR KABEL — Official EMA Partner',
      image: '/images/rr-kabel-ad.gif',
    },
    {
      id: 'partner-slot-3',
      title: 'KEI INDUSTRIES — Official EMA Partner',
      image: '/images/kei-industries-ad.jpg',
    },
    {
      id: 'partner-slot-4',
      title: 'PRECISION PIPES — Official EMA Partner',
      image: '/images/precision-pipes-ad.jpg',
    },
    {
      id: 'partner-slot-5',
      title: 'VASHI ELECTRICALS — Official EMA Partner',
      image: '/images/vashi-electricals-ad.gif',
    },
    {
      id: 'partner-slot-6',
      title: 'EAGLE SALES CORPORATION — Official Partner',
      image: '/images/eagle-sales-ad.png',
    },
    {
      id: 'partner-slot-7',
      title: 'OSRAM LIGHTING — Official EMA Partner',
      image: '/images/osram.gif',
    },
    {
      id: 'partner-slot-8',
      title: 'GRACE CABLES & WIRES — Official EMA Partner',
      image: '/images/grace.gif',
    },
  ];

  return (
    <section className="pt-0 pb-8 sm:pb-12" id="about">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* 1. Official Sponsored Ribbon Banners - 1 Row, 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Column 1: Polycab Cables & Wires */}
          <div
            onClick={onOpenAdvertise}
            className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 bg-white group cursor-pointer aspect-[800/175] flex items-center justify-center"
            title="Polycab Cables & Wires — Official EMA Sponsored Partner"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/polycab-col1-cables.png"
              alt="Polycab Cables & Wires — India's Safe, Happy Connection"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300 block"
            />
          </div>

          {/* Column 2: Polycab Electrical Solutions & FMEG */}
          <div
            onClick={onOpenAdvertise}
            className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 bg-white group cursor-pointer aspect-[800/175] flex items-center justify-center"
            title="Polycab Electrical Solutions — Lights, Fans & Switches"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/polycab-col2-appliances.png"
              alt="Polycab Electrical Solutions — Lights, Fans & Switches"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300 block"
            />
          </div>
        </div>

        {/* 2. Split Content Row: Left Overview & Right Alliance Partners (Exact 50/50 Matching Top Banners Width) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Left Column: Editorial Overview & Institutional Pillars (Matches Col 1 Banner Width Exactly) */}
          <div className="flex flex-col">
            <div className="space-y-4 sm:space-y-4.5 flex flex-col">

              {/* Pillar 1: What is EMA */}
              <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(39,52,133,0.06)] hover:shadow-md hover:border-[#273485]/40 transition-all">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#273485] tracking-wider uppercase block mb-1.5">
                  APEX ELECTRICAL TRADE BODY (ESTD. 1937 • 90TH YEAR)
                </span>
                <h3 className="fluid-card-title font-bold text-[#18181B] mb-2">
                  What is The Electric Merchants&apos; Association (EMA)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  <strong className="text-black font-bold">The Electric Merchants&apos; Association (EMA)</strong> is a premier, non-profit body established in 1937 serving the electrical industry and trade with the primary objective of safeguarding and promoting the collective interests of the sector. Headquartered at Ajmera Midtown, Kalbadevi Road, Mumbai, EMA represents manufacturers, dealers, distributors, stockists, suppliers, importers, exporters, and contractors across India, fostering mutual cooperation, ethical business practices, and resolution of trade challenges.
                </p>
              </div>

              {/* Pillar 2: Need & Objectives */}
              <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(219,30,54,0.06)] hover:shadow-md hover:border-[#DB1E36]/40 transition-all">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#DB1E36] tracking-wider uppercase block mb-1.5">
                  UNITY, PROGRESS &amp; MUTUAL CO-OPERATION
                </span>
                <h3 className="fluid-card-title font-bold text-[#18181B] mb-2">
                  Need for an Association &amp; Core Objectives
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  To associate is to share; to share is to feel one with all those connected with the electrical industry and trade. Out of unity emerges a united voice and strength for the articulation of problems, for constructive solutions, and for better commercial prospects. EMA actively organizes trade conclaves, maintains the comprehensive member directory, publishes official circulars and journals, and facilitates trade dispute resolution.
                </p>
              </div>

              {/* President's Message & Official Leadership Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(39,52,133,0.06)] hover:shadow-md hover:border-[#273485]/40 transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                  {/* President Photo */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-22 h-26 sm:w-26 sm:h-30 rounded-2xl overflow-hidden border-2 border-[#273485]/40 shadow-md bg-gradient-to-b from-slate-100 to-slate-200 group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/parin-parikh-president.jpg"
                        alt="Shri Parin Rajesh Parikh - President, The Electric Merchants' Association (EMA)"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-1.5 text-[9.5px] font-bold text-[#DB1E36] uppercase tracking-wider px-2 py-0.5 bg-[#FEF2F2] border border-red-200 rounded-full shadow-2xs">
                      PRESIDENT
                    </span>
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#273485] tracking-wider uppercase block mb-1">
                      HONOURING OUR LEGACY. INSPIRING OUR FUTURE.
                    </span>
                    <h3 className="fluid-card-title font-bold text-[#18181B] mb-1">
                      President&apos;s Desk — 90th Milestone Year
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic font-normal">
                      &ldquo;It is a matter of great pride and honour to serve as the President of The Electric Merchants’ Association, Mumbai, especially in this landmark year as EMA celebrates its 90th year — the Granite Jubilee. For nine decades, EMA has stood as a strong and respected platform for the electrical trade fraternity, bringing together generations of members through relationships built on trust, unity, collaboration, and mutual growth. Together, we can create an association that is rooted in our rich heritage and prepared for the future.&rdquo;
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-bold text-[#18181B]">Shri Parin Rajesh Parikh</p>
                        <p className="text-[10px] text-slate-500 font-medium">President, The Electric Merchants&apos; Association (EMA)</p>
                      </div>
                      <span className="text-[10px] font-semibold text-[#273485] bg-[#EEF2FF] px-2 py-0.5 rounded-md border border-[#273485]/20">
                        Granite Jubilee: 1937 - 2027
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sponsored Showcase - Matches Col 2 Banner Width Exactly */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {sponsorPartners.map((partner) => (
                <div
                  key={partner.id}
                  onClick={onOpenAdvertise}
                  className="relative w-full aspect-[270/226] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#273485]/50 transition-all duration-300 bg-white group cursor-pointer flex items-center justify-center"
                  title={partner.title}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-full object-cover block group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3. 90th Milestone Year Metric Stats - Full Width Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mt-6 sm:mt-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#273485]/40 transition-all text-center group">
            <p className="text-2xl sm:text-3xl font-black text-[#273485] tracking-tight group-hover:scale-105 transition-transform">1937</p>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">Estd. Year (90th Granite Jubilee)</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#DB1E36]/40 transition-all text-center group">
            <p className="text-2xl sm:text-3xl font-black text-[#DB1E36] tracking-tight group-hover:scale-105 transition-transform">1,100+</p>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">Members</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#273485]/40 transition-all text-center group">
            <p className="text-2xl sm:text-3xl font-black text-[#273485] tracking-tight group-hover:scale-105 transition-transform">5</p>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">Affiliations</p>
          </div>
        </div>

      </div>
    </section>
  );
}
