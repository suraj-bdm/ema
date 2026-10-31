'use client';

import { Users, Calendar, FileText, Megaphone, ArrowRight } from 'lucide-react';

export default function QuickFeatures({ onOpenMembership, onNavigateEvents, onNavigateResources, onNavigateNews }) {
  const features = [
    {
      id: 'membership',
      icon: <Users size={20} strokeWidth={2.2} />,
      title: 'EMA Membership',
      desc: 'Join premier electrical manufacturers, distributors, stockists & traders across India.',
      action: onOpenMembership,
    },
    {
      id: 'events',
      icon: <Calendar size={20} strokeWidth={2.2} />,
      title: '90th Jubilee & Events',
      desc: '90th Granite Jubilee Conclave, EMA Premier League, seminars & business networking meets.',
      action: onNavigateEvents,
    },
    {
      id: 'resources',
      icon: <FileText size={20} strokeWidth={2.2} />,
      title: 'EMA Circulars & Journal',
      desc: 'Official trade circulars, tax gazettes, government notifications & monthly EMA publications.',
      action: onNavigateResources,
    },
    {
      id: 'news',
      icon: <Megaphone size={20} strokeWidth={2.2} />,
      title: 'Market Holidays & Rates',
      desc: 'Mumbai wholesale electrical trade holidays calendar, MCX metal indices & market insights.',
      action: onNavigateNews,
    },
  ];

  return (
    <section className="py-3" id="resources">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((item) => (
            <div
              key={item.id}
              onClick={item.action}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_-4px_rgba(39,52,133,0.04)] hover:shadow-md hover:border-[#273485]/40 transition-all flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#EEF2FF] text-[#273485] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#273485] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[15px] font-bold text-[#18181B] leading-tight group-hover:text-[#273485] transition-colors">
                    {item.title}
                  </h4>
                  <ArrowRight size={14} strokeWidth={2} className="text-slate-400 group-hover:text-[#DB1E36] group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
