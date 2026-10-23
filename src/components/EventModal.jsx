'use client';

import { useState } from 'react';
import { X, Calendar, MapPin, Clock, CheckCircle2, Ticket } from 'lucide-react';

export default function EventModal({ isOpen, onClose, event }) {
  const [registered, setRegistered] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen || !event) return null;

  const handleRSVP = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#E1E3EA] overflow-hidden animate-scale-up" onClick={(e) => e.stopPropagation()}>
        {/* Head */}
        <div className="bg-[#DA251D] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-amber-300">
              <Calendar size={16} strokeWidth={2.2} />
            </span>
            <h3 className="text-base font-bold text-white tracking-tight">Event Details &amp; Registration</h3>
          </div>
          <button className="text-slate-200 hover:text-white p-1 rounded-md cursor-pointer transition-colors" onClick={onClose} aria-label="Close modal">
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="p-6">
          <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold text-[#DA251D] bg-red-50 border border-red-200 mb-2 uppercase tracking-wide">
            {event.type || event.category || 'ECAM EVENT'}
          </span>
          <h4 className="text-lg font-bold text-[#181C32] mb-3 leading-snug">
            {event.title}
          </h4>

          <div className="bg-[#F9F9F9] p-3.5 rounded-xl border border-[#E1E3EA] mb-4 space-y-2 text-xs text-[#5E6278]">
            <div className="flex items-center gap-2">
              <Calendar size={14} strokeWidth={2} className="text-[#DA251D]" /> <strong>Date:</strong> {event.date || `${event.day} ${event.monthYear}`}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} strokeWidth={2} className="text-[#DA251D]" /> <strong>Time:</strong> {event.time || '10:00 AM - 05:00 PM IST'}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} strokeWidth={2} className="text-[#DA251D]" /> <strong>Venue:</strong> {event.venue || 'Mumbai, Maharashtra'}
            </div>
          </div>

          <p className="text-xs text-[#7E8299] leading-relaxed mb-5">
            {event.desc || 'Join Maharashtra electrical contractors, industry manufacturers, BIS officials, and delegates for high-level technical sessions, safety demonstrations, and peer networking.'}
          </p>

          {registered ? (
            <div className="bg-[#EAFFF1] border border-[#C5FAD7] p-4 rounded-xl text-center text-[#17C653]">
              <CheckCircle2 size={28} strokeWidth={2.2} className="mx-auto mb-2 text-[#17C653]" />
              <strong className="text-sm text-[#181C32] block">RSVP Confirmed for {attendeeName || 'Delegate'}!</strong>
              <p className="text-xs text-[#7E8299] mt-1">
                Your entry pass details have been registered. Please carry your ECAM member card or ID proof.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRSVP} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#181C32] mb-1">Attendee / Representative Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E3EA] text-xs sm:text-sm text-[#181C32] placeholder-[#A1A5B7] focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-[#F9F9F9] focus:bg-white"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#181C32] mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E3EA] text-xs sm:text-sm text-[#181C32] placeholder-[#A1A5B7] focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 transition-all bg-[#F9F9F9] focus:bg-white"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#DA251D] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Ticket size={15} strokeWidth={2.2} /> Confirm Event Delegate Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
