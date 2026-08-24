import React from 'react';
import { MEGHALAYA_DESTINATIONS, BUSINESS_INFO } from '../data/fleetData';
import { MapPin, Navigation, ArrowRight, Compass } from 'lucide-react';
import heroBg from '../assets/images/shillong_hero.jpg';

export default function ShillongMeghalaya({ onOpenBooking }) {
  return (
    <section id="meghalaya" className="py-20 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Explore Meghalaya</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Explore Shillong &amp; Beyond in <span className="text-gradient">Ultimate Comfort</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Meghalaya's winding mountain roads, misty valleys, and crystal rivers require reliable vehicles and experienced local drivers. We ensure your journey is smooth and memorable.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
          <img
            src={heroBg}
            alt="Meghalaya Scenic Road Tour"
            className="w-full h-80 sm:h-96 object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent p-6 sm:p-12 flex flex-col justify-end">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Customized Meghalaya Itineraries Available
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
                Family Sightseeing, Group Tours &amp; Outstation Cab Services
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Whether you need a 1-day Shillong local tour, a 3-day Cherrapunji &amp; Dawki expedition, or airport transfers, our drivers ensure smooth navigation of hill curves.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-orange-500/20 inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Plan Your Trip Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEGHALAYA_DESTINATIONS.map((dest, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wide">
                    {dest.distance}
                  </span>
                  <Navigation className="w-4 h-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
                </div>

                <h4 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-orange-400 transition-colors">
                  {dest.name}
                </h4>

                <p className="text-xs font-semibold text-slate-400">
                  {dest.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {dest.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 space-y-2">
                <div className="text-[11px] text-slate-400">
                  Recommended: <strong className="text-slate-200">{dest.recommendedVehicle}</strong>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello! I am planning a tour to ${dest.name}. Please suggest available vehicles and pricing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-orange-400 text-xs font-bold border border-slate-800 text-center block transition-colors"
                >
                  Book for {dest.name}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
