import React from 'react';
import { Users, Fuel, CheckCircle, Calendar, MessageCircle, ArrowUpRight, Luggage, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function VehicleCard({ vehicle, onBookNow }) {
  const handleWhatsAppEnquiry = () => {
    const text = `Hello Tempo Traveller and Urbania Co.,\n\nI want to inquire about renting: *${vehicle.name}*\nPrice: ${vehicle.priceLabel}\nSeating: ${vehicle.seats} Seater\n\nPlease let me know availability and daily package details for travel across Meghalaya, Assam & Arunachal Pradesh.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col group">
      
      {/* Image Header with Badge & Price Tag */}
      <div className="relative aspect-[16/10] min-h-[220px] overflow-hidden bg-slate-950 flex items-center justify-center p-2">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} - Tempo Traveller and Urbania Rental for Shillong & Guwahati`}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80 pointer-events-none" />

        {/* Top Left Badge */}
        {vehicle.badge && (
          <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-white/10 text-orange-400 text-[11px] font-bold px-3 py-1 rounded-full">
            {vehicle.badge}
          </div>
        )}

        {/* Bottom Left Vehicle Name Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-orange-400">
              {vehicle.type}
            </span>
            <h3 className="text-xl font-bold font-['Outfit'] text-white drop-shadow-md">
              {vehicle.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Specs Pill Bar */}
        <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
          <div className="flex items-center gap-1.5 font-medium">
            <Users className="w-4 h-4 text-orange-500" />
            <span>{vehicle.seats} Seats</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Luggage className="w-4 h-4 text-emerald-400" />
            <span>{vehicle.specifications.luggage}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Fuel className="w-4 h-4 text-amber-400" />
            <span>{vehicle.specifications.fuel}</span>
          </div>
        </div>

        {/* Price Box */}
        <div className="flex items-baseline justify-between pt-1">
          <span className="text-xs text-slate-400 font-medium">Starting Fare</span>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-orange-500 font-['Outfit']">
              {vehicle.priceLabel}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
          {vehicle.description}
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 gap-1.5 pt-1">
          {vehicle.features.slice(0, 4).map((feat, index) => (
            <div key={index} className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2">
          <button
            onClick={() => onBookNow(vehicle.id)}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs shadow-md shadow-orange-500/15 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>

          <button
            onClick={handleWhatsAppEnquiry}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
}
