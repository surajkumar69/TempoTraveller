import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Tag, MapPin, Calendar, Car, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/images/shillong_hero.jpg';
import { VEHICLES, BUSINESS_INFO } from '../data/fleetData';

export default function Hero({ onOpenBooking }) {
  const [pickup, setPickup] = useState('Police Bazar, Shillong');
  const [drop, setDrop] = useState('Cherrapunji (Sohra)');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('tt-13');

  const handleQuickBooking = (e) => {
    e.preventDefault();
    const selectedVeh = VEHICLES.find(v => v.id === vehicle) || VEHICLES[0];
    const message = `Hello Tempo Traveller and Urbania Co.,\n\nI want to book/enquire about a vehicle:\n- Pickup: ${pickup}\n- Drop: ${drop}\n- Date: ${date || 'Flexible'}\n- Vehicle: ${selectedVeh.name}\n\nPlease confirm availability and total rate.`;
    
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Layered Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Scenic Shillong Mountain Highway, Meghalaya"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Premium Meghalaya Travel Experience</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-white tracking-tight leading-[1.15]">
              Comfortable Rides, <br className="hidden sm:inline" />
              <span className="text-gradient">Memorable Journeys</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Reliable Tempo Traveller, Urbania &amp; Cab Rental Services for every journey and every occasion across Shillong, Cherrapunji, Dawki, and all of Meghalaya.
            </p>

            {/* Key Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Safe &amp; Reliable</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Clean &amp; Comfortable</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium backdrop-blur-md">
                <Tag className="w-4 h-4 text-orange-400" />
                <span>Affordable Pricing</span>
              </div>
            </div>

            {/* Micro proof line */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Local Hill Drivers</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant Booking</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Hidden Fees</span>
            </div>

          </div>

          {/* Right Column: Interactive Quick Booking Box */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 text-slate-900 relative">
              
              <div className="mb-6 border-b border-slate-200 pb-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-orange-600">Quick Booking Enquiry</span>
                <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900 mt-1">Book Your Ride</h3>
                <p className="text-xs text-slate-600 mt-0.5">Select details for instant quote &amp; availability</p>
              </div>

              <form onSubmit={handleQuickBooking} className="space-y-4">
                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-orange-500" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Police Bazar, Shillong or Guwahati Airport"
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Drop Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Drop / Tour Destination
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-emerald-600" />
                    <input
                      type="text"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      placeholder="e.g. Cherrapunji, Dawki, Mawlynnong, Guwahati"
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Date & Vehicle Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Journey Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3.5 top-3.5 text-orange-500" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Vehicle Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Vehicle Type
                    </label>
                    <div className="relative">
                      <Car className="w-4 h-4 absolute left-3.5 top-3.5 text-orange-500" />
                      <select
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        {VEHICLES.map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.name} ({v.priceLabel})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer"
                  >
                    <span>Book Now via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(vehicle)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-800 font-semibold text-xs text-center transition-all cursor-pointer"
                  >
                    Or Fill Detailed Web Booking Form
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
