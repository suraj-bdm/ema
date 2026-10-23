'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarketTicker from '@/components/MarketTicker';
import AboutAndSponsorsSection from '@/components/AboutAndSponsorsSection';
import EventsAndNews from '@/components/EventsAndNews';
import MembershipBanner from '@/components/MembershipBanner';
import SponsorMarquee from '@/components/SponsorMarquee';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Footer from '@/components/Footer';

import LoginModal from '@/components/LoginModal';
import JoinMemberModal from '@/components/JoinMemberModal';
import EventModal from '@/components/EventModal';
import AdvertiseModal from '@/components/AdvertiseModal';

export default function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [advertiseModalOpen, setAdvertiseModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#181C32] font-sans antialiased selection:bg-[#DA251D] selection:text-white" id="top">
      {/* 1. Navbar */}
      <Navbar
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenJoin={() => setJoinModalOpen(true)}
        onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main>
        {/* 2. Hero Section: 100 Years of ECAM & ECAMEX 2026 Showcase */}
        <HeroSection
          onOpenJoin={() => setJoinModalOpen(true)}
          onOpenAbout={() => handleNavigateSection('about')}
          onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        />

        {/* 3. Live Market & Energy Ticker Strip */}
        <MarketTicker />

        {/* 4. Featured Sponsor Banner & About ECAM Overview Showcase */}
        <AboutAndSponsorsSection
          onOpenAbout={() => handleNavigateSection('about')}
          onOpenJoin={() => setJoinModalOpen(true)}
          onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        />

        {/* 5. Split Row: Upcoming Events (ECAMEX26) & Latest News */}
        <EventsAndNews
          onSelectEvent={(evt) => setSelectedEvent(evt)}
          onSelectNews={(news) => {
            setSelectedEvent({
              title: news.title,
              type: 'ECAM CIRCULAR',
              date: news.date,
              time: 'Official Release',
              venue: 'ECAM Secretariat, Stock Exchange Towers, Dalal St, Mumbai',
              desc: `Official documentation and circular regarding "${news.title}" published by the Electrical Contractors' Association of Maharashtra for all registered members.`,
            });
          }}
        />

        {/* 5. Dual Action Row: Membership CTA (Left) & Advertising CTA (Right) Side-by-Side in 1 Single Row */}
        <MembershipBanner
          onOpenJoin={() => setJoinModalOpen(true)}
          onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        />

        {/* 6. Continuous Marquee Banner Strip */}
        <SponsorMarquee
          onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        />

        {/* 7. Official Newsletter & Circulars Subscribe Section */}
        <NewsletterSubscribe />
      </main>

      {/* 7. Clean 4-Column Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenAdvertise={() => setAdvertiseModalOpen(true)}
      />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />


      <JoinMemberModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />

      <AdvertiseModal
        isOpen={advertiseModalOpen}
        onClose={() => setAdvertiseModalOpen(false)}
      />

      <EventModal
        isOpen={!!selectedEvent}
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
