import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 border-t border-slate-800 p-2.5 backdrop-blur-xl shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href="/thankyou?type=call"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-xs active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-orange-500" />
          <span>Call Now</span>
        </a>

        <a
          href="/thankyou?type=whatsapp"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs active:scale-95 transition-transform shadow-lg shadow-emerald-600/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
