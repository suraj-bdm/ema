'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, X } from 'lucide-react';

export default function DirectorySearchBar({ onSelectSearchItem, isHeaderMode = false }) {
  const [selectedRole, setSelectedRole] = useState('All');
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  const roles = [
    'Product/ Category',
    'Brand',
    'All Categories',
  ];

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setRoleDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setRoleDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setRoleDropdownOpen(false);
    if (onSelectSearchItem && searchQuery.trim()) {
      onSelectSearchItem({
        query: searchQuery,
        role: selectedRole === 'All Categories' ? null : selectedRole,
      });
    }
  };

  return (
    <div className={isHeaderMode ? 'w-full relative z-30' : 'w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-2 pb-1'}>
      {/* Search Pill Bar with "All ⌵" Dropdown */}
      <div className={isHeaderMode ? 'w-full relative z-30' : 'max-w-xl mx-auto relative z-30'}>
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white rounded-full border border-slate-300 shadow-[0_2px_12px_-2px_rgba(39,52,133,0.08)] flex items-stretch p-0.5 sm:p-1 transition-all hover:border-[#273485]/50 focus-within:border-[#273485] focus-within:ring-2 focus-within:ring-[#273485]/15"
        >
          {/* Left: Role Dropdown */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="h-full px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F8F9FA] hover:bg-slate-100 text-slate-800 text-[11px] sm:text-[13px] font-semibold flex items-center gap-1 sm:gap-1.5 transition-colors cursor-pointer border border-slate-200"
            >
              <span className="truncate max-w-[70px] sm:max-w-[130px]">{selectedRole}</span>
              <ChevronDown
                size={12}
                className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                  roleDropdownOpen ? 'rotate-180 text-[#273485]' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {roleDropdownOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-scale-up overflow-hidden">
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => {
                      setSelectedRole(role);
                      setRoleDropdownOpen(false);
                    }}
                    className={`w-full px-3.5 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#EEF2FF] transition-colors cursor-pointer ${
                      selectedRole === role ? 'text-[#273485] font-bold bg-[#EEF2FF]' : 'text-slate-700'
                    }`}
                  >
                    <span>{role}</span>
                    {selectedRole === role && <Check size={14} className="text-[#273485]" strokeWidth={2.4} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-[1px] bg-slate-200 my-1.5 ml-1 mr-0.5 shrink-0" />

          {/* Center: Search Input */}
          <div className="flex-1 flex items-center min-w-0 pl-1.5 pr-1.5 sm:pl-2 sm:pr-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Brands or Products"
              className="w-full bg-transparent text-xs sm:text-[13px] xl:text-[13.5px] text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer mr-1 shrink-0"
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Right: Signature EMA Royal Navy Blue Rounded Search Button */}
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-[#273485] to-[#1E2970] hover:from-[#1E2970] hover:to-[#16205B] active:scale-98 text-white px-3.5 sm:px-4.5 py-1.5 sm:py-2 flex items-center justify-center gap-1.5 shadow-xs transition-all hover:scale-102 cursor-pointer shrink-0 font-semibold text-xs border border-white/20"
            aria-label="Search directory"
          >
            <Search size={13} strokeWidth={2.4} />
            <span className="hidden sm:inline font-bold">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
}
