import React from 'react';
import { BUSINESS_INFO } from '../data/fleetData';
import { Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-900/40 via-slate-950 to-amber-950/40 relative border-t border-b border-orange-500/20 overflow-hidden">
      
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
          Ready to Start Your Journey?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Book your preferred vehicle today for a comfortable and hassle-free travel experience across Meghalaya, Assam &amp; Arunachal Pradesh.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/thankyou?type=call"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-xl shadow-orange-500/30 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Phone className="w-5 h-5 text-white" />
            <span>Call Now</span>
          </a>

          <a
            href="/thankyou?type=whatsapp"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        <div className="pt-2 text-xs text-slate-400">
          📍 Police Bazar, Jail Road, Opp. Hotel COURTYARD by Marriott, Shillong – 793001
        </div>

      </div>
    </section>
  );
}
