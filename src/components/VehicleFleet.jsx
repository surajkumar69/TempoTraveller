import React, { useState } from 'react';
import { VEHICLES } from '../data/fleetData';
import VehicleCard from './VehicleCard';
import { Car, Filter, ShieldAlert } from 'lucide-react';

export default function VehicleFleet({ onBookNow }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'tempo-traveller', label: 'Tempo Traveller' },
    { id: 'urbania', label: 'Force Urbania' },
    { id: 'cabs', label: 'Cabs & SUVs' },
  ];

  const filteredVehicles = activeCategory === 'all'
    ? VEHICLES
    : VEHICLES.filter((v) => v.category === activeCategory);

  return (
    <section id="vehicles" className="py-20 bg-slate-950 relative border-t border-slate-800">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Car className="w-4 h-4" />
            <span>Our Premium Vehicle Fleet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Choose Your Ideal Vehicle for <span className="text-gradient">Meghalaya, Assam &amp; Arunachal Pradesh</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From 13-25 Seater Tempo Travellers &amp; Executive Force Urbania to luxury Innova Crysta, Ertiga, Brezza &amp; Swift Dzire cabs. Verified clean, comfortable, and ready for North-East mountain roads.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onBookNow={onBookNow} />
          ))}
        </div>

        {/* Bottom Vehicle Guarantee Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-4 h-4 text-orange-500 shrink-0" />
          <span>
            <strong>Exact Vehicle Guarantee:</strong> The vehicle model booked is the exact vehicle dispatched. Guaranteed clean, sanitized &amp; serviced with experienced mountain drivers.
          </span>
        </div>

      </div>
    </section>
  );
}
