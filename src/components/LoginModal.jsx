'use client';

import { useState } from 'react';
import { X, Lock, ShieldCheck, UserCheck } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [membershipNo, setMembershipNo] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#E1E3EA] overflow-hidden animate-scale-up" onClick={(e) => e.stopPropagation()}>
        {/* Head */}
        <div className="bg-gradient-to-r from-[#273485] to-[#1E2970] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-amber-300">
              <Lock size={16} strokeWidth={2.2} />
            </span>
            <h3 className="text-base font-bold text-white tracking-tight">EMA Member&apos;s Login</h3>
          </div>
          <button className="text-slate-200 hover:text-white p-1 rounded-md cursor-pointer transition-colors" onClick={onClose} aria-label="Close modal">
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="p-6">
          {loggedIn ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAFFF1] text-[#17C653] flex items-center justify-center mx-auto mb-3 shadow-2xs border border-[#C5FAD7]">
                <UserCheck size={26} strokeWidth={2.2} />
              </div>
              <h4 className="text-base font-bold text-[#181C32] mb-1">
                Welcome to EMA Portal!
              </h4>
              <p className="text-xs text-[#7E8299] mb-5">
                Authenticated as Member #{membershipNo || 'EMA-1937'}. Accessing merchant directory, circulars, and trade services...
              </p>
              <button
                type="button"
                className="w-full py-2.5 rounded-lg bg-[#273485] hover:bg-[#1E2970] text-white text-xs font-bold transition-colors cursor-pointer"
                onClick={() => {
                  setLoggedIn(false);
                  onClose();
                }}
              >
                Enter Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#7E8299] leading-relaxed">
                Enter your registered EMA Membership Number or Email ID to access certified trade directories, circulars, and merchant services.
              </p>

              <div>
                <label className="block text-xs font-bold text-[#181C32] mb-1">Membership Number / Email</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. EMA-1937 or office@emamumbai.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E3EA] text-xs sm:text-sm text-[#181C32] placeholder-[#A1A5B7] focus:outline-none focus:border-[#273485] focus:ring-2 focus:ring-indigo-100 transition-all bg-[#F9F9F9] focus:bg-white"
                  value={membershipNo}
                  onChange={(e) => setMembershipNo(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#181C32] mb-1">Password / PIN</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E3EA] text-xs sm:text-sm text-[#181C32] placeholder-[#A1A5B7] focus:outline-none focus:border-[#273485] focus:ring-2 focus:ring-indigo-100 transition-all bg-[#F9F9F9] focus:bg-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#7E8299] pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-[#273485]" />
                  <span>Remember login</span>
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Please contact the EMA Secretariat at office@emamumbai.com / 022-2206 0625 for password recovery.');
                  }}
                  className="text-[#273485] hover:text-[#DB1E36] font-semibold hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#273485] to-[#1E2970] hover:brightness-110 text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
                disabled={loading}
              >
                {loading ? 'Authenticating...' : 'Sign In To Portal'}
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#A1A5B7]">
                <ShieldCheck size={14} strokeWidth={2} className="text-[#17C653]" />
                <span>256-Bit SSL Encrypted Authentication</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
