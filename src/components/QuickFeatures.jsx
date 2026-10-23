'use client';

import { Users, Calendar, FileText, Megaphone, ArrowRight } from 'lucide-react';

export default function QuickFeatures({ onOpenMembership, onNavigateEvents, onNavigateResources, onNavigateNews }) {
  const features = [
    {
      id: 'membership',
      icon: <Users size={20} strokeWidth={2.2} />,
      title: 'ECAM Membership',
      desc: 'Join 3,000+ licensed electrical contractors, engineers, panel builders & traders across Maharashtra.',
      action: onOpenMembership,
    },
    {
      id: 'events',
      icon: <Calendar size={20} strokeWidth={2.2} />,
      title: 'ECAMEX & Events',
      desc: 'ECAMEX 2026 Mega Expo, Renewable Seminars, Safety Workshops & Centenary Meets.',
      action: onNavigateEvents,
    },
    {
      id: 'resources',
      icon: <FileText size={20} strokeWidth={2.2} />,
      title: 'GR & Circulars',
      desc: 'PWD Licensing norms, MSEDCL technical circulars, CEIG compliance & BIS/NEC guidelines.',
      action: onNavigateResources,
    },
    {
      id: 'news',
      icon: <Megaphone size={20} strokeWidth={2.2} />,
      title: 'IECT & Circulars',
      desc: 'Official IECT Magazines, MCX metal rates, government gazettes & electrical trade notifications.',
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
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DA251D]/30 transition-all flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#FEF2F2] text-[#DA251D] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#DA251D] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[15px] font-bold text-[#18181B] leading-tight group-hover:text-[#DA251D] transition-colors">
                    {item.title}
                  </h4>
                  <ArrowRight size={14} strokeWidth={2} className="text-slate-400 group-hover:text-[#DA251D] group-hover:translate-x-0.5 transition-all" />
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
