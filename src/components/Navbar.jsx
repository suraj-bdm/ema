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
    const searchInput = document.querySelector('input[placeholder*="Electrical Contractors"]');
    if (searchInput) {
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Exact Menu items matching spreadsheet structure
  const navMenuItems = [
    { label: 'HOME', href: '#top' },
    {
      label: 'ABOUT ECAM',
      hasDropdown: true,
      items: [
        { label: "PRESIDENT DESK'S", href: '#about' },
        { label: 'HISTORY OF ECAM', href: '#about' },
        { label: 'POLICIES', href: '#about' },
        { label: 'VISION AND MISSION', href: '#about' },
        { label: 'PAST PRESIDENTS', href: '#about' },
      ],
    },
    {
      label: 'REGIONS',
      hasDropdown: true,
      items: [
        { label: 'Pune', href: '#contact' },
        { label: 'Pimpri Chinchwad', href: '#contact' },
        { label: 'Nashik', href: '#contact' },
        { label: 'Ahilyanagar', href: '#contact' },
        { label: 'Jalgaon', href: '#contact' },
        { label: 'Western Maharashtra', href: '#contact' },
        { label: 'Dhule Nandurbar', href: '#contact' },
        { label: 'Thane', href: '#contact' },
        { label: 'Konkan', href: '#contact' },
      ],
    },
    {
      label: 'COMMITTEES',
      hasDropdown: true,
      items: [
        { label: "PRESIDENT'S MESSAGE", href: '#about' },
        { label: "CHAIRMAN'S MESSAGE", href: '#about' },
        { label: 'MANAGING COMM', href: '#about' },
        { label: 'OTHER COMM', href: '#about' },
      ],
    },
    {
      label: 'MEMBERSHIP',
      hasDropdown: true,
      items: [
        { label: 'MEMBER DIRECTORY', action: handleFocusSearch },
        { label: 'BECOME A MEMBER', action: onOpenJoin },
        { label: 'MEMBERSHIP BENEFITS', href: '#membership' },
      ],
    },
    {
      label: 'GR',
      href: '#news',
    },
    {
      label: 'MAGAZINES',
      href: '#news',
    },
    {
      label: 'EVENTS',
      hasDropdown: true,
      items: [
        { label: 'PAST EVENTS', href: '#events' },
        { label: 'UPCOMING EVENTS', href: '#events' },
        { label: 'GALLERY', href: '#events' },
      ],
    },
    {
      label: 'NEWS & MEDIA',
      hasDropdown: true,
      items: [
        { label: 'PRESS RELEASE', href: '#news' },
        { label: 'PHOTO GALLERY', href: '#events' },
        { label: 'VIDEO GALLERY', href: '#events' },
      ],
    },
    {
      label: 'CSR/DSR',
      href: '#about',
    },
    {
      label: 'MORE LINKS',
      hasDropdown: true,
      items: [
        { label: 'DOWNLOAD FORM', action: onOpenJoin, href: '#membership' },
        { label: 'TENDER', href: '#news' },
      ],
    },
    {
      label: 'CONTACT US',
      href: '#contact',
    },
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
      {/* 1. Executive Top Utility Strip - ECAM Theme */}
      <div className="bg-[#DA251D] text-white border-b border-[#B71C1C] shadow-xs">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-[28px] sm:h-[30px] lg:h-[30px] xl:h-[32px] flex items-center justify-between text-[11px] sm:text-xs">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-2 sm:gap-4 text-white min-w-0">
            {/* Phone */}
            <a
              href="tel:+918452828430"
              className="flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2.5 py-0.5 rounded-full hover:bg-white/15 transition-all text-white font-bold tracking-wide shrink-0 text-[10.5px] sm:text-xs"
              title="Call ECAM Secretariat"
            >
              <Phone size={11} className="text-white shrink-0 fill-white" strokeWidth={2.4} />
              <span className="hidden sm:inline">+91 84528 28430 / 022 2272 3668</span>
              <span className="sm:hidden">+91 84528 28430</span>
            </a>

            <span className="text-white/40 hidden md:inline">•</span>

            {/* Email */}
            <a
              href="mailto:ecamindia@gmail.com"
              className="hidden md:flex items-center gap-2 px-2.5 py-0.5 rounded-full hover:bg-white/15 transition-all text-white font-medium"
              title="Official ECAM Email"
            >
              <Mail size={11} className="text-white" strokeWidth={2.2} />
              <span>ecamindia@gmail.com</span>
            </a>
          </div>

          {/* Right: Quick Action Links & Member Portal */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-white shrink-0">
            {/* 1. Member Login */}
            <button
              type="button"
              onClick={onOpenLogin}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold border border-white/30 shadow-xs hover:border-white transition-all cursor-pointer text-[10.5px] sm:text-xs whitespace-nowrap"
              title="Access ECAM Member Portal"
            >
              <User size={11} className="text-white shrink-0" strokeWidth={2.4} />
              <span>MEMBER LOGIN</span>
            </button>

            {/* 2. Member Directory */}
            <button
              type="button"
              onClick={handleFocusSearch}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-white font-semibold hover:bg-white/15 transition-all cursor-pointer text-[11px] sm:text-xs"
              title="Search ECAM Member Directory"
            >
              <Search size={11} className="text-white" strokeWidth={2.2} />
              <span>MEMBER DIRECTORY</span>
            </button>

            {/* 3. Join ECAM */}
            {onOpenJoin && (
              <button
                type="button"
                onClick={onOpenJoin}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-white hover:bg-white/15 font-bold transition-all cursor-pointer text-[10.5px] sm:text-xs"
                title="Apply for ECAM Membership"
              >
                <span>JOIN ECAM</span>
              </button>
            )}

            {/* 4. Advertise With Us */}
            {onOpenAdvertise && (
              <button
                type="button"
                onClick={onOpenAdvertise}
                className="hidden lg:flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-full text-white hover:bg-white/15 transition-all font-bold text-[11px] sm:text-xs cursor-pointer tracking-wide"
                title="Advertise with ECAM"
              >
                <span>ADVERTISE WITH US</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Top Header: Logo on Left, Search Bar on Right */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 lg:py-3 relative z-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 lg:gap-8">
          {/* Left Side: Prominent Larger ECAM Logo & Organization Title */}
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
                src="/images/ecam-logo.png"
                alt="ECAM Logo - Electrical Contractors' Association of Maharashtra"
                className="h-14 sm:h-16 md:h-[78px] lg:h-[90px] xl:h-[98px] w-auto max-w-[340px] sm:max-w-[460px] md:max-w-[580px] lg:max-w-[680px] object-contain transition-transform group-hover:scale-[1.01]"
              />
            </a>

            {/* Mobile Actions: Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer border border-slate-200"
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

      {/* 3. Original Clean Primary Navigation Bar - Visible on desktop, hidden on mobile */}
      <div className="hidden lg:block border-t border-b border-slate-200/90 bg-[#FAFBFD] sticky top-0 z-40 shadow-xs">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-[36px] sm:h-[38px] lg:h-[40px] xl:h-[42px] overflow-visible">
            {/* Navigation Links distributed across the full width with generous spacing between items */}
            <nav className="w-full flex items-center justify-between gap-1.5 lg:gap-2.5 xl:gap-4 2xl:gap-6 overflow-visible" aria-label="Main Navigation">
              {navMenuItems.map((item) => {
                const isActive = activeTab === item.label;
                const isDropdownOpen = openDropdown === item.label;

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
                        className={`text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] font-bold tracking-wide transition-colors py-1.5 px-1 sm:px-1.5 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'text-[#DA251D] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#DA251D] after:rounded-full'
                            : isDropdownOpen
                            ? 'text-[#DA251D]'
                            : 'text-slate-700 hover:text-[#DA251D]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={12} className={`transition-transform duration-200 shrink-0 ${isDropdownOpen ? 'rotate-180 text-[#DA251D]' : 'text-slate-400'}`} />
                      </button>

                      {/* Dropdown Menu Popup with invisible hover bridge to eliminate jitter */}
                      {isDropdownOpen && (
                        <div className={`absolute top-full ${item.label === 'MORE LINKS' ? 'right-0' : 'left-0'} pt-0.5 z-50 min-w-[220px] animate-fade-in`}>
                          <div className="bg-white text-slate-800 rounded-b-xl shadow-xl border border-slate-200/90 py-1.5 overflow-hidden">
                            {item.items.map((sub) => (
                              <button
                                key={sub.label}
                                type="button"
                                onClick={() => handleLinkClick(sub)}
                                className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-red-50 hover:text-[#DA251D] transition-colors cursor-pointer flex items-center justify-between block"
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
                    className={`text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] font-bold tracking-wide transition-colors py-2 px-1 sm:px-1.5 whitespace-nowrap shrink-0 relative ${
                      isActive
                        ? 'text-[#DA251D] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#DA251D] after:rounded-full'
                        : 'text-slate-700 hover:text-[#DA251D]'
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
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className={openDropdown === item.label ? 'rotate-180 text-[#DA251D]' : ''} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 py-1 space-y-1 bg-slate-50 rounded-lg">
                      {item.items.map((sub) => (
                        <button
                          key={sub.label}
                          type="button"
                          onClick={() => handleLinkClick(sub)}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#DA251D]"
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
                    activeTab === item.label ? 'bg-red-50 text-[#DA251D]' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
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
                className="py-2 px-3 rounded-lg bg-[#DA251D] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
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
                  className="py-2 px-3 rounded-lg bg-[#B71C1C] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  JOIN ECAM
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
