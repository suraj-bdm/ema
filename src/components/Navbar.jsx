'use client';

import { useState } from 'react';
import {
  User,
  Menu,
  X,
  Phone,
  Mail,
  Search,
  MousePointerClick,
  ChevronDown,
  Home,
} from 'lucide-react';
import DirectorySearchBar from '@/components/DirectorySearchBar';

export default function Navbar({
  onOpenLogin,
  onOpenJoin,
  onOpenAdvertise,
  onNavigateSection,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleFocusSearch = () => {
    const searchInput = document.querySelector('input[placeholder*="Search by Brands"]');
    if (searchInput) {
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // 100% Exact Navbar Menu Items from https://emamumbai.com/
  const navMenuItems = [
    {
      label: 'Home',
      isHomeIcon: true,
      href: '#top',
    },
    {
      label: 'About EMA',
      hasDropdown: true,
      href: '#about',
      items: [
        { label: "President's Desk", href: '#about' },
        { label: 'About us', href: '#about' },
        { label: 'Key Initiatives', href: '#about' },
        { label: 'Policy, Vision & Objective', href: '#about' },
        { label: 'History of EMA', href: '#about' },
        { label: 'Past President', href: '#about' },
        { label: 'Facility To Members', href: '#membership' },
      ],
    },
    {
      label: 'Committees',
      hasDropdown: true,
      href: '#about',
      items: [
        { label: 'Managing Committee', href: '#about' },
        { label: 'Website Committee', href: '#about' },
        { label: 'Activity Committee', href: '#events' },
      ],
    },
    {
      label: 'Members',
      hasDropdown: true,
      href: '#membership',
      items: [
        { label: 'Member Login', action: onOpenLogin },
        { label: 'Member Search', action: handleFocusSearch },
        { label: 'Become a Member', action: onOpenJoin },
      ],
    },
    { label: 'Upcomming Events', href: '#events' },
    { label: 'Gallery', href: '#events' },
    { label: 'Journal', href: '#news' },
    { label: 'Holidays', href: '#news' },
    { label: 'Useful Links', href: '#resources' },
    { label: 'Transport', href: '#resources' },
    { label: 'News', href: '#news' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (link) => {
    setActiveTab(link.label);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    if (link.action) {
      link.action();
      return;
    }
    if (onNavigateSection && link.href) {
      onNavigateSection(link.href.replace('#', ''));
    }
  };

  return (
    <header className="bg-white border-b border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] z-50 relative">
      {/* 1. Executive Top Utility Strip - Exact match to emamumbai.com */}
      <div className="bg-[#DB1E36] text-white shadow-xs">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-[34px] sm:h-[36px] lg:h-[38px] flex items-center justify-between text-xs sm:text-sm lg:text-[14.5px]">
          {/* Left: Exact Contact Info with Increased Font Size */}
          <div className="flex items-center gap-3.5 sm:gap-5 text-white">
            {/* Phone */}
            <a
              href="tel:02222060625"
              className="flex items-center gap-2 hover:underline text-white font-bold"
              title="Call EMA: 022-2206 0625"
            >
              <Phone size={15} className="text-white shrink-0 fill-white" />
              <span>022-2206 0625</span>
            </a>

            {/* Email */}
            <a
              href="mailto:office@emamumbai.com"
              className="flex items-center gap-2 hover:underline text-white font-semibold"
              title="Email: office@emamumbai.com"
            >
              <Mail size={15} className="text-white shrink-0" />
              <span>office@emamumbai.com</span>
            </a>
          </div>

          {/* Right: Exact Links with Increased Font Size */}
          <div className="flex items-center gap-3.5 sm:gap-6 text-white font-bold text-xs sm:text-sm lg:text-[14px]">
            <button
              type="button"
              onClick={onOpenLogin}
              className="hover:underline text-white transition-colors cursor-pointer"
            >
              Member&apos;s Login
            </button>
            <button
              type="button"
              onClick={handleFocusSearch}
              className="hover:underline text-white transition-colors cursor-pointer"
            >
              Member Search
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Top Header: Logo on Left, Search Bar on Right */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 lg:py-3 relative z-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 lg:gap-8">
          {/* Left Side: Official The Electric Merchants' Association Logo */}
          <div className="flex items-center justify-between shrink-0">
            <a
              href="#top"
              className="flex items-center gap-2 sm:gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick({ label: 'HOME', href: '#top' });
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ema-logo.png"
                alt="The Electric Merchant's Association (EMA Mumbai) — Estd. 1937"
                className="h-12 sm:h-14 md:h-[68px] lg:h-[76px] xl:h-[82px] w-auto max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[620px] object-contain transition-transform group-hover:scale-[1.01]"
              />
            </a>

            {/* Mobile Actions: Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg text-[#273485] hover:bg-[#EEF2FF] cursor-pointer border border-slate-200"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Right Side: Exact Pill Directory Search Bar - Expanded Width for Full Placeholder */}
          <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-[600px] 2xl:max-w-[640px] shrink-0 relative z-50">
            <DirectorySearchBar isHeaderMode={true} />
          </div>
        </div>
      </div>

      {/* 3. EMA Signature Royal Navy Navigation Bar with Red Top Border */}
      <div className="hidden lg:block border-t-3 border-[#DB1E36] bg-[#273485] sticky top-0 z-40 shadow-md">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-[38px] sm:h-[40px] lg:h-[42px] overflow-visible">
            {/* Navigation Links distributed across the full width with generous spacing between items */}
            <nav className="w-full flex items-center justify-between gap-1 lg:gap-2 xl:gap-3 2xl:gap-5 overflow-visible" aria-label="Main Navigation">
              {navMenuItems.map((item) => {
                const isActive = activeTab === item.label;
                const isDropdownOpen = openDropdown === item.label;

                if (item.isHomeIcon) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item);
                      }}
                      className={`text-[14px] font-bold py-1.5 px-3 rounded-md flex items-center justify-center transition-all shrink-0 ${
                        isActive
                          ? 'bg-[#DB1E36] text-white shadow-xs'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                      title="Home"
                    >
                      <Home size={17} className="text-white" />
                    </a>
                  );
                }

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative h-full flex items-center shrink-0"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : item.label)}
                        className={`text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-bold tracking-wide transition-all py-1.5 px-2.5 rounded-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'bg-[#DB1E36] text-white shadow-xs'
                            : isDropdownOpen
                            ? 'bg-[#1E2970] text-white'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={13} className={`transition-transform duration-200 shrink-0 ${isDropdownOpen ? 'rotate-180 text-white' : 'text-white/70'}`} />
                      </button>

                      {/* Dropdown Menu Popup with invisible hover bridge to eliminate jitter */}
                      {isDropdownOpen && (
                        <div className={`absolute top-full ${item.label === 'MORE LINKS' ? 'right-0' : 'left-0'} pt-0.5 z-50 min-w-[230px] animate-fade-in`}>
                          <div className="bg-white text-slate-800 rounded-b-xl shadow-2xl border-t-2 border-[#DB1E36] border-x border-b border-slate-200/90 py-1.5 overflow-hidden">
                            {item.items.map((sub) => (
                              <button
                                key={sub.label}
                                type="button"
                                onClick={() => handleLinkClick(sub)}
                                className="w-full text-left px-4 py-2 text-[13px] font-semibold hover:bg-[#EEF2FF] hover:text-[#273485] transition-colors cursor-pointer flex items-center justify-between block"
                              >
                                <span>{sub.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                    className={`text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-bold tracking-wide transition-all py-1.5 px-2.5 rounded-md whitespace-nowrap shrink-0 relative ${
                      isActive
                        ? 'bg-[#DB1E36] text-white shadow-xs'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 py-3 space-y-1 bg-white animate-fade-in px-4">
          {navMenuItems.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-[#EEF2FF]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className={openDropdown === item.label ? 'rotate-180 text-[#DB1E36]' : ''} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 py-1 space-y-1 bg-slate-50 rounded-lg">
                      {item.items.map((sub) => (
                        <button
                          key={sub.label}
                          type="button"
                          onClick={() => handleLinkClick(sub)}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#273485] hover:bg-[#EEF2FF] rounded"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                  }}
                  className={`block px-3 py-2 text-sm font-semibold rounded-lg ${
                    activeTab === item.label ? 'bg-[#EEF2FF] text-[#273485] font-bold border-l-4 border-[#DB1E36]' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.isHomeIcon ? (
                    <span className="flex items-center gap-2">
                      <Home size={15} />
                      <span>Home</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </a>
              )}
            </div>
          ))}

          {/* Mobile Quick Action Buttons in requested order */}
          <div className="pt-3 pb-2 space-y-2 border-t border-slate-100">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="py-2 px-3 rounded-lg bg-[#273485] hover:bg-[#1E2970] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <User size={13} /> MEMBER LOGIN
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleFocusSearch();
                }}
                className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
              >
                <Search size={13} /> MEMBER DIRECTORY
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {onOpenJoin && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoin();
                  }}
                  className="py-2 px-3 rounded-lg bg-[#DB1E36] hover:bg-[#990000] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  JOIN EMA
                </button>
              )}

              {onOpenAdvertise && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdvertise();
                  }}
                  className="py-2 px-3 rounded-lg bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  ADVERTISE WITH US
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
