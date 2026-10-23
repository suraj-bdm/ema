'use client';

import { useState } from 'react';
import { X, Megaphone, CheckCircle2, ShieldCheck, Layers, Phone, Mail } from 'lucide-react';

export default function AdvertiseModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    adFormat: 'Top Showcase Ribbon (700×180 px)',
    duration: '3 Months (Quarterly)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const adFormats = [
    {
      title: 'Top Showcase Ribbon',
      size: '3.8:1 Horizontal',
      dims: '700 × 180 px',
      placement: 'Premier Showcase Ribbons',
      desc: 'High-visibility horizontal banners placed prominently across sections.',
    },
    {
      title: 'Strategic Sponsor Card',
      size: 'Card Showcase',
      dims: '242 × 235 px',
      placement: 'About Section Sponsor Showcase Grid',
      desc: 'Prime sponsor showcase beside institutional pillars.',
    },
    {
      title: 'Hero Sponsor Sidebar',
      size: '3:2 Landscape',
      dims: '300 × 200 px',
      placement: 'Hero Section Sidebar',
      desc: 'Top-of-the-fold placement beside centenary hero slides.',
    },
    {
      title: 'Continuous Marquee Banner',
      size: '2:1 Horizontal',
      dims: '300 × 150 px',
      placement: 'Sliding Alliances & Sponsor Marquee',
      desc: 'Dynamic sliding partner cards with continuous infinite scroll.',
    },
    {
      title: 'IECT Magazine Feature',
      size: 'Print & Digital Gazette',
      dims: 'Full Page / Half Page',
      placement: 'Indian Electrical Contractor & Trader',
      desc: 'Monthly circular distributed to 3,000+ licensed contractors.',
    },
    {
      title: 'ECAMEX 2026 Sponsorship',
      size: 'Exhibition Stall & Pavilion',
      dims: 'Custom Space',
      placement: 'ECAMEX 2026 Mega Expo, Mumbai',
      desc: 'Title, Platinum, Gold & Silver expo partnership opportunities.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden animate-scale-up my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#B71C1C] via-[#DA251D] to-[#991B1B] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 border border-white/15">
              <Megaphone size={20} strokeWidth={2.2} />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Advertise With ECAM
              </h3>
              <p className="text-xs text-rose-100">
                Electrical Contractors&apos; Association of Maharashtra • Media, IECT &amp; ECAMEX 2026
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 max-h-[calc(90vh-100px)] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-[#EAFFF1] text-[#17C653] flex items-center justify-center mx-auto mb-4 border border-[#C5FAD7] shadow-sm">
                <CheckCircle2 size={32} strokeWidth={2.2} />
              </div>
              <h4 className="text-lg font-bold text-[#181C32] mb-1.5">
                Inquiry Submitted Successfully!
              </h4>
              <p className="text-sm text-slate-600 mb-2 leading-relaxed max-w-md mx-auto">
                Thank you, <strong className="text-black font-semibold">{formData.contactPerson || 'Partner'}</strong>. Your sponsorship inquiry for{' '}
                <strong className="text-black font-semibold">{formData.companyName || 'your organization'}</strong> regarding{' '}
                <span className="text-[#DA251D] font-semibold">{formData.adFormat}</span> has been received.
              </p>
              <p className="text-xs text-slate-500 mb-6 max-w-md mx-auto">
                The ECAM Sponsorship &amp; Media Secretariat will review your request and share the official media kit, tariff card, and onboarding guide within 24 business hours.
              </p>
              <button
                type="button"
                className="px-8 py-2.5 rounded-full bg-[#DA251D] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
              >
                Close &amp; Return to Website
              </button>
            </div>
          ) : (
            <div>
              {/* Introduction */}
              <div className="mb-6 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-[#DA251D] tracking-wider uppercase">
                    OFFICIAL SPONSORSHIP NETWORK
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-[11px] font-semibold text-amber-600">
                    3,000+ Licensed Contractors &amp; Engineers Reach
                  </span>
                </div>
                <h4 className="fluid-card-title font-bold text-[#18181B] mb-1">
                  Amplify Your Brand to Maharashtra&apos;s Electrical &amp; Engineering Fraternity
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ECAM provides strategic digital placements across the official ECAM portal, IECT (Indian Electrical Contractor &amp; Trader) Magazine, and premier ECAMEX 2026 expo spaces. Place your brand directly in front of accredited electrical contractors, wholesale stockists, panel builders, and corporate EPC buyers.
                </p>
              </div>

              {/* Supported Ad Formats Cards */}
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers size={13} className="text-[#DA251D]" />
                  <span>Standard Ad &amp; Sponsorship Specifications</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {adFormats.map((fmt, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD] hover:border-[#DA251D]/40 hover:bg-white transition-all shadow-2xs"
                    >
                      <span className="text-[10px] font-bold text-[#DA251D] uppercase block tracking-wider mb-0.5">
                        {fmt.size}
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 mb-1">
                        {fmt.title}
                      </h5>
                      <div className="bg-white px-2 py-1 rounded border border-slate-200 text-[11px] font-mono font-bold text-[#DA251D] mb-1.5">
                        {fmt.dims}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {fmt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Polycab, Havells, Schneider Electric, etc."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-white"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-white"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="corporate@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">
                      Desired Ad / Sponsorship Slot *
                    </label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-white cursor-pointer"
                      value={formData.adFormat}
                      onChange={(e) => setFormData({ ...formData, adFormat: e.target.value })}
                    >
                      <option value="Top Showcase Ribbon (700×180 px)">Top Showcase Ribbon (700×180 px)</option>
                      <option value="Strategic Sponsor Card (242×235 px)">Strategic Sponsor Card (242×235 px)</option>
                      <option value="Hero Sidebar Banner (300×200 px)">Hero Sidebar Banner (300×200 px)</option>
                      <option value="Continuous Marquee Card (300×150 px)">Continuous Marquee Card (300×150 px)</option>
                      <option value="IECT Magazine (Monthly Gazette Full Page)">IECT Magazine (Monthly Gazette Full Page)</option>
                      <option value="ECAMEX 2026 Mega Expo Title / Platinum Sponsor">ECAMEX 2026 Mega Expo Title / Platinum Sponsor</option>
                      <option value="Custom Strategic Partnership Package">Custom Strategic Partnership Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">
                      Campaign Duration *
                    </label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-white cursor-pointer"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    >
                      <option value="1 Month">1 Month</option>
                      <option value="3 Months (Quarterly)">3 Months (Quarterly - Popular)</option>
                      <option value="6 Months">6 Months</option>
                      <option value="12 Months (Annual)">12 Months (Annual Partnership)</option>
                      <option value="ECAMEX 2026 Event Duration">ECAMEX 2026 Event Duration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Special Requirements / Creative Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide details about your products, campaign, target audience, or stall requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck size={14} className="text-[#DA251D]" />
                    <span>Official ECAM Media Secretariat Review</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#DA251D] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    Submit Advertising Inquiry →
                  </button>
                </div>
              </form>

              {/* Direct Secretariat Contact Note */}
              <div className="mt-5 p-3 rounded-xl bg-[#FEF2F2] border border-red-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700">
                <span className="font-semibold text-slate-900">
                  ECAM Secretariat Media Helpline:
                </span>
                <div className="flex items-center gap-4">
                  <a href="tel:+918452828430" className="flex items-center gap-1 text-[#DA251D] hover:underline font-bold">
                    <Phone size={12} />
                    <span>+91 84528 28430 / 022 2272 3668</span>
                  </a>
                  <a href="mailto:ecamindia@gmail.com" className="flex items-center gap-1 text-[#DA251D] hover:underline font-bold">
                    <Mail size={12} />
                    <span>ecamindia@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
