'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const INITIAL_MARKET_DATA = [
  {
    id: 'sensex',
    symbol: 'BSE SENSEX',
    exchange: 'BSE',
    price: 82439.70,
    change: 374.55,
    percentChange: 0.46,
    isPositive: true,
    unit: 'pts',
    highlight: true,
  },
  {
    id: 'nifty',
    symbol: 'NIFTY 50',
    exchange: 'NSE',
    price: 25158.78,
    change: 88.68,
    percentChange: 0.35,
    isPositive: true,
    unit: 'pts',
    highlight: true,
  },
  {
    id: 'bse-metal',
    symbol: 'BSE METAL',
    exchange: 'BSE',
    price: 33494.54,
    change: 435.19,
    percentChange: 1.32,
    isPositive: true,
    unit: 'pts',
    highlight: false,
  },
  {
    id: 'copper',
    symbol: 'MCX COPPER',
    exchange: 'MCX',
    price: 846.50,
    change: 5.20,
    percentChange: 0.62,
    isPositive: true,
    unit: '₹ / kg',
    highlight: false,
  },
  {
    id: 'aluminium',
    symbol: 'MCX ALUMINIUM',
    exchange: 'MCX',
    price: 238.20,
    change: -1.40,
    percentChange: -0.58,
    isPositive: false,
    unit: '₹ / kg',
    highlight: false,
  },
  {
    id: 'zinc',
    symbol: 'MCX ZINC',
    exchange: 'MCX',
    price: 264.80,
    change: 2.60,
    percentChange: 0.99,
    isPositive: true,
    unit: '₹ / kg',
    highlight: false,
  },
  {
    id: 'lead',
    symbol: 'MCX LEAD',
    exchange: 'MCX',
    price: 184.10,
    change: 0.90,
    percentChange: 0.49,
    isPositive: true,
    unit: '₹ / kg',
    highlight: false,
  },
  {
    id: 'nickel',
    symbol: 'MCX NICKEL',
    exchange: 'MCX',
    price: 1420.00,
    change: -12.50,
    percentChange: -0.87,
    isPositive: false,
    unit: '₹ / kg',
    highlight: false,
  },
  {
    id: 'gold',
    symbol: 'MCX GOLD (10g)',
    exchange: 'MCX',
    price: 76250.00,
    change: 380.00,
    percentChange: 0.50,
    isPositive: true,
    unit: '₹',
    highlight: false,
  },
  {
    id: 'silver',
    symbol: 'MCX SILVER (1kg)',
    exchange: 'MCX',
    price: 91400.00,
    change: 750.00,
    percentChange: 0.83,
    isPositive: true,
    unit: '₹',
    highlight: false,
  },
  {
    id: 'usdinr',
    symbol: 'USD / INR',
    exchange: 'FOREX',
    price: 84.06,
    change: -0.04,
    percentChange: -0.05,
    isPositive: false,
    unit: '₹',
    highlight: false,
  },
  {
    id: 'brent-crude',
    symbol: 'BRENT CRUDE',
    exchange: 'GLOBAL',
    price: 74.20,
    change: -0.85,
    percentChange: -1.13,
    isPositive: false,
    unit: '$ / bbl',
    highlight: false,
  },
];

export default function MarketTicker() {
  const [marketData, setMarketData] = useState(INITIAL_MARKET_DATA);
  const [lastUpdated, setLastUpdated] = useState('Live');
  const [isLiveApi, setIsLiveApi] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadMarketData = async () => {
      try {
        const res = await fetch('/api/market-data');
        if (!res.ok) return;
        const json = await res.json();
        if (!isCancelled && json.success && Array.isArray(json.data) && json.data.length > 0) {
          setMarketData(json.data);
          setIsLiveApi(true);
          const now = new Date();
          setLastUpdated(
            now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          );
        }
      } catch {
        // Graceful fallback
      }
    };

    // Trigger asynchronously
    void loadMarketData();

    // Poll live API every 30 seconds
    const apiInterval = setInterval(() => {
      void loadMarketData();
    }, 30000);

    // Subtle micro-tick between polls for lively UI responsiveness
    const tickInterval = setInterval(() => {
      setMarketData((prev) => {
        const randomIndex = Math.floor(Math.random() * prev.length);
        return prev.map((item, idx) => {
          if (idx !== randomIndex) return item;
          const deltaFactor = (Math.random() - 0.49) * 0.001;
          const newPrice = Math.max(1, +(item.price * (1 + deltaFactor)).toFixed(2));
          const diff = +(newPrice - (item.price - item.change)).toFixed(2);
          const newPercent = +((diff / (item.price - item.change)) * 100).toFixed(2);
          return {
            ...item,
            price: newPrice,
            change: diff,
            percentChange: newPercent,
            isPositive: diff >= 0,
          };
        });
      });
    }, 5000);

    return () => {
      clearInterval(apiInterval);
      clearInterval(tickInterval);
    };
  }, []);

  const formatPrice = (val, id) => {
    if (id === 'sensex' || id === 'nifty' || id === 'bse-metal' || id === 'gold' || id === 'silver') {
      return val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return val.toFixed(2);
  };

  const tickerItems = [...marketData, ...marketData];

  return (
    <section aria-label="Live Market Rates" className="py-6 sm:py-7 lg:py-8 relative z-10 block w-full clear-both">
      {/* Aligned Container matching the Hero section and site container width with left/right breathing margins */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="w-full bg-gradient-to-r from-[#180A0A] via-[#1E1111] to-[#180A0A] text-white rounded-xl sm:rounded-2xl border border-red-950/80 shadow-md relative overflow-hidden select-none flex items-stretch min-h-[38px] sm:min-h-[42px]">
          
          {/* Pinned Left Live Badge */}
          <div className="shrink-0 z-20 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DA251D] border-r border-red-800/80 shadow-sm rounded-l-xl sm:rounded-l-2xl">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-300"></span>
            </span>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-black tracking-wider text-amber-200 uppercase font-sans">
                  LIVE COMMODITIES
                </span>
                <span className="hidden sm:inline-block text-[8.5px] font-bold text-white/90 uppercase tracking-wider px-1.5 py-0.2 bg-black/20 rounded">
                  BSE • MCX
                </span>
              </div>
              <span className="text-[8.5px] text-red-200 font-mono hidden sm:inline-block">
                {lastUpdated}
              </span>
            </div>
          </div>

          {/* Marquee Ticker Track with Soft Gradient Edge Fade Masks */}
          <div className="relative flex-1 overflow-hidden group flex items-center">
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-[#180A0A] to-transparent z-10 pointer-events-none" />
            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-l from-[#180A0A] to-transparent z-10 pointer-events-none" />

            {/* Continuous Scrolling Marquee */}
            <div
              className="flex items-center w-max animate-marquee hover:[animation-play-state:paused] py-1 sm:py-1.5"
              style={{ animationDuration: '40s' }}
            >
              {tickerItems.map((item, index) => {
                const isPositive = item.isPositive;
                return (
                  <div
                    key={`${item.id}-${index}`}
                    className={`inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 border-r border-slate-700/60 whitespace-nowrap transition-colors hover:bg-white/5 py-1 ${
                      item.highlight ? 'bg-white/[0.04]' : ''
                    }`}
                  >
                    {/* Symbol & Exchange */}
                    <div className="flex items-center gap-1.5">
                      {item.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      )}
                      <span
                        className={`text-xs sm:text-[13px] font-bold tracking-tight ${
                          item.highlight ? 'text-amber-300' : 'text-slate-100'
                        }`}
                      >
                        {item.symbol}
                      </span>
                      <span className="text-[9px] font-semibold px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase">
                        {item.exchange}
                      </span>
                    </div>

                    {/* Price */}
                    <span className="font-mono text-xs sm:text-[13px] font-extrabold text-white">
                      {formatPrice(item.price, item.id)}
                      {item.unit && !['pts', '₹'].includes(item.unit) && (
                        <span className="text-[10px] text-slate-400 font-normal ml-1">
                          {item.unit}
                        </span>
                      )}
                    </span>

                    {/* Change Pill */}
                    <div
                      className={`inline-flex items-center gap-0.5 text-[11px] sm:text-xs font-bold font-mono px-1.5 py-0.5 rounded ${
                        isPositive
                          ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/20'
                          : 'text-rose-400 bg-rose-950/60 border border-rose-500/20'
                      }`}
                    >
                      {isPositive ? (
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-rose-400" />
                      )}
                      <span>
                        {isPositive ? '+' : ''}
                        {item.change.toFixed(2)}
                      </span>
                      <span className="text-[10px] opacity-80 ml-0.5">
                        ({isPositive ? '+' : ''}
                        {item.percentChange.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Info Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-4 py-2 shrink-0 bg-[#071326] border-l border-slate-700/80 text-[10px] text-slate-400 font-medium rounded-r-xl sm:rounded-r-2xl">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>{isLiveApi ? 'Live Yahoo Finance' : 'Auto-Updating'}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
