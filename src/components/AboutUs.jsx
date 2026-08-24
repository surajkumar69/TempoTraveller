import React from 'react';
import { BUSINESS_INFO } from '../data/fleetData';
import { ShieldCheck, MapPin, CheckCircle, Car, Sparkles, Building2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 shadow-2xl space-y-6">
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-xl shadow-orange-500/25">
                <Building2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                  Head Office in Police Bazar
                </span>
                <h3 className="text-2xl font-bold font-['Outfit'] text-white mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-b border-slate-800 py-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prime location opposite Hotel COURTYARD by Marriott</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-xl font-bold text-orange-400 font-['Outfit']">100%</span>
                  <span className="text-[11px] text-slate-400">Sanitized Vehicles</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-xl font-bold text-emerald-400 font-['Outfit']">24/7</span>
                  <span className="text-[11px] text-slate-400">Trip Support</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight leading-snug">
              Dedicated to Safe, Comfortable &amp; <span className="text-gradient">Reliable Travel in Meghalaya</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>Tempo Traveller and Urbania Co.</strong> is a premier vehicle rental provider situated in the heart of Shillong at Police Bazar, right opposite Hotel COURTYARD by Marriott. We specialize in group transportation, executive luxury travel, and personalized cab rentals for tourists, families, and corporate travelers visiting Meghalaya.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Our core mission is centered on passenger safety, absolute vehicle cleanliness, driver professionalism, and transparent pricing with no unexpected hidden costs. From 13, 17, and 25 seater Tempo Travellers to luxury 13 &amp; 16 seater Force Urbanias and compact SUVs like Innova Crysta, Ertiga, Brezza, and Swift Dzire, every ride is maintained to the highest standards.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>Hill Road Specialists</span>
                </div>
                <p className="text-xs text-slate-400">
                  Drivers experienced with foggy mountain curves, steep inclines, and all Meghalaya tourist routes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>Transparent Fixed Tariff</span>
                </div>
                <p className="text-xs text-slate-400">
                  Clear pricing starting from ₹3,500 with zero surge pricing or surprise add-ons.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
