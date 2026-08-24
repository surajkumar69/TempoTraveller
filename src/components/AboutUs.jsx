import React from 'react';
import { BUSINESS_INFO } from '../data/fleetData';
import { ShieldCheck, MapPin, CheckCircle, Sparkles, Compass } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-950 relative border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual Hub Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-orange-500/60 p-0.5 overflow-hidden shadow-xl shadow-orange-500/20 bg-slate-950">
                <img src={logoImg} alt="Tempo Traveller & Urbania Co. Official Emblem" className="w-full h-full object-contain rounded-full" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                  Head Office in Police Bazar
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 border-t border-b border-slate-800 py-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="leading-normal">{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="leading-normal">Prime location opposite Hotel COURTYARD by Marriott</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-lg sm:text-xl font-bold text-orange-400 font-['Outfit']">100%</span>
                  <span className="text-[11px] text-slate-400">Sanitized Vehicles</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-lg sm:text-xl font-bold text-emerald-400 font-['Outfit']">24/7</span>
                  <span className="text-[11px] text-slate-400">Trip Support</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>About Our Company</span>
            </div>

            {/* Clear Heading with no overlays */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight leading-snug sm:leading-tight">
              Dedicated to Safe, Comfortable &amp; Reliable Travel Across <span className="text-gradient block sm:inline mt-1 sm:mt-0">Meghalaya, Assam &amp; Arunachal Pradesh</span>
            </h2>

            {/* Clean Paragraphs */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed sm:leading-relaxed">
              <strong className="text-white">Tempo Traveller and Urbania Co.</strong> is a premier vehicle rental and travel services provider headquartered at Police Bazar in Shillong, right opposite Hotel COURTYARD by Marriott. We specialize in group transportation, executive luxury travel, and personalized cab rentals for tourists, families, corporate delegations, and outstation trips across <strong className="text-slate-200">Meghalaya, Assam, and Arunachal Pradesh</strong>.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed sm:leading-relaxed">
              Our core mission is centered on passenger safety, absolute vehicle cleanliness, hill-trained driver professionalism, and transparent pricing with zero hidden fees. From 13, 17, and 25 seater Tempo Travellers to luxury 13 &amp; 16 seater Force Urbanias and premium SUVs like Innova Crysta, Ertiga, Brezza, and Swift Dzire, every vehicle is equipped to deliver a seamless journey throughout <strong className="text-slate-200">Meghalaya, Assam &amp; Arunachal Pradesh</strong>.
            </p>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>North-East Circuit Experts</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Experienced drivers for mountain curves, tea garden routes, and all destinations across Meghalaya, Assam &amp; Arunachal Pradesh.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Transparent Fixed Tariffs</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Clear pricing starting from ₹3,500 with zero surge fees or hidden extra charges.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
