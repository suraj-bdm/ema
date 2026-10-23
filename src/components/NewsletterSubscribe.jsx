'use client';

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section className="py-4 sm:py-5" id="newsletter">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-[#170B0B] via-[#220E0E] to-[#120707] border border-[#DA251D]/25 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] p-4 sm:p-5 lg:px-7 lg:py-4.5 text-white">
          
          {/* Subtle Ambient Red Glow on Right Corner */}
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-[#DA251D]/15 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
            
            {/* Left: Clean Text */}
            <div className="max-w-xl">
              <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>Newsletter &amp; Official Circulars</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 mt-0.5 leading-snug">
                Subscribe to receive official notifications, regulatory updates, and technical publications.
              </p>
            </div>

            {/* Right: Unified Pill Form */}
            <div className="w-full md:w-auto md:min-w-[340px] lg:min-w-[420px]">
              {subscribed ? (
                <div className="flex items-center justify-between gap-2 bg-emerald-950/70 border border-emerald-500/35 rounded-full px-4 py-2 text-xs text-emerald-300 shadow-xs animate-fade-in">
                  <div className="flex items-center gap-2 truncate">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span className="truncate font-semibold">Subscribed: {email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubscribed(false);
                      setEmail('');
                    }}
                    className="text-[11px] text-emerald-400 hover:text-white underline shrink-0 cursor-pointer ml-2"
                  >
                    Change
                  </button>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleSubmit} className="relative flex items-center bg-black/45 border border-white/20 hover:border-white/30 focus-within:border-[#DA251D] focus-within:ring-2 focus-within:ring-[#DA251D]/20 rounded-full p-1 pl-3.5 shadow-inner transition-all">
                    <Mail size={15} className="text-slate-400 shrink-0" />
                    
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email address"
                      className="bg-transparent text-white placeholder-slate-400 text-xs sm:text-[13px] px-2.5 py-1.5 focus:outline-none flex-1 min-w-0"
                    />

                    <button
                      type="submit"
                      className="rounded-full px-4.5 sm:px-5 py-2 bg-gradient-to-r from-[#DA251D] via-[#B71C1C] to-[#991B1B] hover:brightness-110 active:scale-98 text-white font-bold text-xs sm:text-[12.5px] shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 border border-white/15"
                    >
                      <span>Subscribe</span>
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </button>
                  </form>

                  {error && (
                    <p className="text-[11px] text-red-400 mt-1 pl-3 font-medium animate-fade-in">
                      {error}
                    </p>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
