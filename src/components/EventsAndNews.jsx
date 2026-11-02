'use client';

import { MapPin, ArrowRight } from 'lucide-react';

export default function EventsAndNews({ onSelectEvent, onSelectNews }) {
  const events = [
    {
      id: 'event-1',
      day: '01',
      monthYear: 'Oct 2026',
      date: '1st October 2026',
      type: 'GENNEXT CONCLAVE',
      title: 'EMA GenNEXT 5.0 – 2026',
      venue: 'The Electric Merchants’ Association, Mumbai',
      time: '10:00 AM – 06:00 PM IST',
      desc: 'Flagship GenNEXT 5.0 youth leadership conclave organized by EMA, bringing together emerging business leaders, technology pioneers, and innovators in the electrical trade.',
    },
    {
      id: 'event-2',
      day: '16',
      monthYear: 'Nov 2026',
      date: '16th November 2026',
      type: 'ANNUAL GET TOGETHER',
      title: 'NYGT – 2026',
      venue: 'The Electric Merchants’ Association, Mumbai',
      time: '05:30 PM Onwards',
      desc: 'Annual New Year Get Together (NYGT 2026) — flagship fellowship celebration, trade networking, and festive meet for all EMA members and families.',
    },
    {
      id: 'event-3',
      day: '28',
      monthYear: 'Nov 2026',
      date: '28th November 2026',
      type: 'STAFF WELFARE',
      title: 'Staff Welfare Entertainment Programme',
      venue: 'Mumbai Cultural Centre / EMA Auditorium',
      time: '06:00 PM – 10:00 PM',
      desc: 'Dedicated entertainment, cultural performance, and annual welfare celebration honoring the staff, employees, and teams across electrical trade houses.',
    },
    {
      id: 'event-4',
      day: '08',
      monthYear: 'Jan 2027',
      date: '8th January 2027',
      type: 'INDUSTRY TOUR',
      title: 'Jabalpur & Bandhavgarh',
      venue: 'Jabalpur & Bandhavgarh National Park, MP',
      time: 'Multi-Day Delegation Tour',
      desc: 'Annual recreational and industrial tour exploring Jabalpur electrical trade ties, marble rocks, and wild safari at Bandhavgarh for EMA members.',
    },
    {
      id: 'event-5',
      day: '07',
      monthYear: 'Feb 2027',
      date: '7th February 2027',
      type: 'SPORTS MEET',
      title: 'EPL-FCM',
      venue: 'Mumbai Sports Pavilion / Turf Ground',
      time: '08:00 AM – 06:00 PM',
      desc: 'EMA Premier League & Friendly Cricket Match (EPL-FCM 2027) tournament bringing together industry teams, sponsors, and electric merchants.',
    },
  ];

  const newsItems = [
    {
      id: 'news-1',
      date: '12 Aug 2022',
      title: 'EMA News — Janmabhoomi: Wholesale Electrical Trade Policy & GST Representation',
      image: '/images/ema-news-janmabhoomi.png',
    },
    {
      id: 'news-2',
      date: '14 Aug 2022',
      title: 'EMA News — Mid-Day: Electrical Merchants Market Review & Price Bulletin',
      image: '/images/ema-news-midday.png',
    },
    {
      id: 'news-3',
      date: 'Oct - Nov 2025',
      title: 'EMA Official Bi-Monthly Journal: Market Holidays, Directory & Trade Circulars',
      image: '/images/ema-news-midday-en.png',
    },
    {
      id: 'news-4',
      date: 'Granite Jubilee 2026-27',
      title: 'Official Circular: Schedule & Registrations for GenNEXT 5.0, NYGT 2026 & EPL-FCM',
      image: '/images/ema-news-midday.png',
    },
  ];

  return (
    <section className="py-8" id="events">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (7 cols): Events & Programs */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold text-[#273485] tracking-wider uppercase block mb-1">
              UPCOMING CONCLAVES &amp; EXPOS
            </span>
            <div className="flex items-center justify-between mb-5">
              <h2 className="fluid-section-title font-extrabold text-[#18181B] tracking-tight">
                EMA Events &amp; Conclaves
              </h2>
              <a
                href="#events"
                className="text-xs font-semibold text-[#273485] hover:text-[#DB1E36] hover:underline flex items-center gap-1 transition-colors"
              >
                <span>View All Events ({events.length})</span>
                <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>

            {/* 5 Events Grid: 1 Featured Row + 2x2 Subgrid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {events.map((evt, idx) => (
                <div
                  key={evt.id}
                  onClick={() => onSelectEvent && onSelectEvent(evt)}
                  className={`bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-[0_2px_12px_-2px_rgba(39,52,133,0.04)] hover:shadow-md hover:border-[#273485]/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between group cursor-pointer ${idx === 0
                      ? 'sm:col-span-2 bg-gradient-to-br from-white via-white to-amber-50/40 border-[#273485]/20'
                      : ''
                    }`}
                >
                  {idx === 0 && (
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#DB1E36]/10 text-[#DB1E36]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DB1E36] animate-pulse"></span>
                        NEXT UPCOMING CONCLAVE
                      </span>
                      <span className="text-[11px] font-bold text-[#273485] group-hover:text-[#DB1E36] group-hover:underline flex items-center gap-1 transition-colors">
                        View Details / RSVP <ArrowRight size={11} strokeWidth={2.5} />
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-3">
                    {/* Date Block */}
                    <div className="w-14 py-2 bg-[#F8FAFC] rounded-xl border border-slate-200/80 text-center shrink-0 shadow-2xs group-hover:border-[#273485] group-hover:bg-[#EEF2FF] transition-all">
                      <span className="text-2xl font-black text-[#DB1E36] leading-none block">
                        {evt.day}
                      </span>
                      <span className="text-[10px] font-bold text-[#273485] uppercase tracking-tight block mt-0.5">
                        {evt.monthYear}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                        {evt.type}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#273485] transition-colors leading-snug mt-1">
                        {evt.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1 truncate pr-2">
                      <MapPin size={11} className="text-[#273485]/70 shrink-0" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                    {idx !== 0 && (
                      <ArrowRight size={12} className="text-slate-300 group-hover:text-[#DB1E36] group-hover:translate-x-0.5 transition-all shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Latest News */}
          <div className="lg:col-span-5" id="news">
            <div className="flex items-center justify-between mb-5 pt-3 sm:pt-0">
              <h2 className="fluid-section-title font-extrabold text-[#18181B] tracking-tight">
                Latest News &amp; Circulars
              </h2>
              <a
                href="#news"
                className="text-xs font-semibold text-[#273485] hover:text-[#DB1E36] hover:underline flex items-center gap-1 transition-colors"
              >
                <span>View All Circulars</span>
                <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>

            {/* 3 News Stacked Rows */}
            <div className="space-y-3">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectNews && onSelectNews(item)}
                  className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-[0_2px_12px_-2px_rgba(39,52,133,0.04)] hover:shadow-md hover:border-[#273485]/40 transition-all flex items-center gap-3.5 group cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/80 shadow-2xs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold text-slate-400 block mb-0.5">
                      {item.date}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#273485] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={14}
                    strokeWidth={2}
                    className="text-slate-400 group-hover:text-[#DB1E36] group-hover:translate-x-0.5 transition-all shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
