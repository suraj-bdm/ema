'use client';

const EMA_LATEST_UPDATES = [
  {
    id: 'update-1',
    tag: 'ANNOUNCEMENT',
    text: "Welcome to The Electric Merchants' Association — Estd. 1937 • Celebrating 90th Milestone Year (Granite Jubilee 1937–2027)",
  },
  {
    id: 'update-2',
    tag: 'EVENT',
    text: 'EMA — NYGT 2025: New Year Get Together & Member Fellowship Meet at Kalbadevi, Mumbai',
  },
  {
    id: 'update-3',
    tag: 'SPORTS',
    text: 'EMA Premier League (EPL) — Annual Sports Meet Cricket & Football Tournament (Turf 1 & 2)',
  },
  {
    id: 'update-4',
    tag: 'AGM',
    text: '88th Annual General Meeting (AGM) 2024–25 & Electrical Industry Conclave',
  },
  {
    id: 'update-5',
    tag: 'DIRECTORY',
    text: 'EMA Membership Directory Updation & Online Member Search active on emamumbai.com',
  },
  {
    id: 'update-6',
    tag: 'TRADE NOTICE',
    text: 'Official Representation on GST Reforms & Kalbadevi Wholesale Electrical Market Guidelines',
  },
  {
    id: 'update-7',
    tag: 'MOBILE APP',
    text: 'Download Official EMA Mumbai Mobile Application on Google Play Store & Apple App Store',
  },
];

export default function MarketTicker() {
  const tickerItems = [...EMA_LATEST_UPDATES, ...EMA_LATEST_UPDATES];

  return (
    <section aria-label="Latest Updates" className="my-3.5 sm:my-4 lg:my-4 relative z-10 block w-full clear-both">
      {/* Aligned Container matching the Hero section and site container width with left/right breathing margins */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="w-full bg-[#0C1333] text-white rounded-xl sm:rounded-2xl border border-[#273485]/60 shadow-md relative overflow-hidden select-none flex items-stretch min-h-[38px] sm:min-h-[42px]">
          
          {/* Pinned Left Live Badge - EMA Crimson Red */}
          <div className="shrink-0 z-20 flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 bg-gradient-to-r from-[#990000] via-[#BF0C22] to-[#DB1E36] border-r border-[#990000] shadow-sm rounded-l-xl sm:rounded-l-2xl">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-300"></span>
            </span>

            <span className="text-[11px] sm:text-xs font-black tracking-wider text-amber-200 uppercase font-sans whitespace-nowrap">
              LATEST UPDATE
            </span>
          </div>

          {/* Marquee Ticker Track with Soft Gradient Edge Fade Masks */}
          <div className="relative flex-1 overflow-hidden group flex items-center">
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#0C1333] to-transparent z-10 pointer-events-none" />
            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#0C1333] to-transparent z-10 pointer-events-none" />

            {/* Continuous Scrolling Marquee */}
            <div
              className="flex items-center w-max animate-marquee hover:[animation-play-state:paused] py-1 sm:py-1.5"
              style={{ animationDuration: '38s' }}
            >
              {tickerItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="inline-flex items-center gap-2.5 px-4 sm:px-6 whitespace-nowrap"
                >
                  <span className="text-[9.5px] font-bold text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-slate-100 hover:text-white transition-colors">
                    {item.text}
                  </span>
                  <span className="text-slate-600 ml-3 select-none">•</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
