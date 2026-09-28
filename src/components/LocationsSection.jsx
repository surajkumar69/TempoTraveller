import React from 'react';
import { MapPin, Navigation, Car, ShieldCheck, Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';
import tempoImg from '../assets/images/tempo_traveller.jpg';
import urbaniaImg from '../assets/images/force_urbania.jpg';

export default function LocationsSection() {
  const shillongRoutes = [
    { name: 'Shillong Local Sightseeing', detail: 'Police Bazar, Ward\'s Lake, Elephant Falls, Laitlum Canyons', highlight: 'Ideal for 13/17 Seater Tempo Traveller & Urbania' },
    { name: 'Shillong to Cherrapunji (Sohra)', detail: 'Nohkalikai Falls, Mawsmai Cave, Seven Sisters Waterfalls', highlight: 'Smooth Hill Curve Driving' },
    { name: 'Shillong to Dawki & Mawlynnong', detail: 'Umngot Crystal River Boating & Living Root Bridge', highlight: 'Luxury Executive Urbania Choice' },
    { name: 'Shillong to Guwahati Airport / ISBT', detail: 'Direct highway transfer with zero delay guarantee', highlight: 'Punctual Drop Service' },
  ];

  const guwahatiRoutes = [
    { name: 'Guwahati LGBI Airport Pickup & Drop', detail: 'Direct pickup from Guwahati Airport to Shillong & Cherrapunji', highlight: 'Flight Tracking & Driver Waiting' },
    { name: 'Guwahati Local & Kamakhya Temple', detail: 'Kamakhya Temple, Brahmaputra River Cruise, Assam State Zoo', highlight: 'Comfortable Group Transport' },
    { name: 'Guwahati to Kaziranga National Park', detail: 'Wildlife safari tour packages across Assam tea gardens', highlight: 'Spacious Luggage Boot' },
    { name: 'Guwahati to Tawang & Arunachal Circuit', detail: 'Long-distance outstation tour across Sela Pass & Tawang Monastery', highlight: 'Heavy-Duty Mountain Van' },
  ];

  return (
    <section id="locations" className="py-20 bg-slate-950 relative border-t border-slate-800">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Dedicated Target Service Hubs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Tempo Traveller and Urbania Rental for <span className="text-gradient">Shillong &amp; Guwahati</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We operate top-maintained 13, 17, 25-seater Tempo Travellers and executive Force Urbania luxury vans across 
            <strong> Shillong</strong>, <strong>Guwahati</strong>, and outstation tourist circuits in Meghalaya, Assam &amp; Arunachal Pradesh.
          </p>
        </div>

        {/* Dual Location Hubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* HUB 1: SHILLONG */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  Primary Location Hub
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" /> Meghalaya Capital
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                Tempo Traveller &amp; Urbania Rental in Shillong
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Looking for a <strong>Tempo Traveller for Shillong</strong> or an <strong>Urbania for Shillong</strong>? Our local hub at Police Bazar provides luxury group vehicles for local Shillong sightseeing and day trips to Cherrapunji, Dawki, Mawlynnong &amp; Laitlum.
              </p>

              {/* Showcase Image Row */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800 p-1 flex items-center justify-center">
                  <img
                    src={tempoImg}
                    alt="Tempo Traveller for Shillong rental"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-1 left-2 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded">
                    Tempo Traveller for Shillong
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800 p-1 flex items-center justify-center">
                  <img
                    src={urbaniaImg}
                    alt="Urbania for Shillong executive rental"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-1 left-2 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded">
                    Urbania for Shillong
                  </div>
                </div>
              </div>

              {/* Route List */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Popular Shillong Routes &amp; Packages:
                </h4>
                {shillongRoutes.map((route, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center justify-between gap-2">
                        <span>{route.name}</span>
                        <span className="text-[10px] text-amber-400 font-normal">{route.highlight}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{route.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hub Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <a
                href="/thankyou?type=call"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-orange-500/20 text-center transition-all cursor-pointer flex items-center justify-center gap-2 relative z-50 pointer-events-auto"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="/thankyou?type=whatsapp"
                className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 font-semibold text-xs border border-slate-800 flex items-center gap-1.5 transition-all relative z-50 pointer-events-auto cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* HUB 2: GUWAHATI */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Gateway Location Hub
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" /> Assam Gateway
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                Tempo Traveller &amp; Urbania Rental in Guwahati
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Need a reliable <strong>Tempo Traveller for Guwahati</strong> or executive <strong>Urbania for Guwahati</strong>? We offer seamless LGBI Guwahati Airport pickups, Guwahati to Shillong highway transfers, and outstation tours to Kaziranga, Assam &amp; Arunachal Pradesh.
              </p>

              {/* Showcase Image Row */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800 p-1 flex items-center justify-center">
                  <img
                    src={tempoImg}
                    alt="Tempo Traveller for Guwahati airport rental"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-1 left-2 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded">
                    Tempo Traveller for Guwahati
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800 p-1 flex items-center justify-center">
                  <img
                    src={urbaniaImg}
                    alt="Urbania for Guwahati corporate travel"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-1 left-2 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded">
                    Urbania for Guwahati
                  </div>
                </div>
              </div>

              {/* Route List */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Popular Guwahati Routes &amp; Packages:
                </h4>
                {guwahatiRoutes.map((route, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center justify-between gap-2">
                        <span>{route.name}</span>
                        <span className="text-[10px] text-orange-400 font-normal">{route.highlight}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{route.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hub Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <a
                href="/thankyou?type=call"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-orange-500/20 text-center transition-all cursor-pointer flex items-center justify-center gap-2 relative z-50 pointer-events-auto"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="/thankyou?type=whatsapp"
                className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 font-semibold text-xs border border-slate-800 flex items-center gap-1.5 transition-all relative z-50 pointer-events-auto cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Regional Outstation Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-['Outfit']">
              Exploring Beyond Shillong &amp; Guwahati?
            </h4>
            <p className="text-xs text-slate-300">
              We provide full-service <strong>Tempo Traveller and Urbania rental</strong> for multi-day outstation packages across <strong>Meghalaya</strong>, <strong>Assam</strong>, and <strong>Arunachal Pradesh</strong>.
            </p>
          </div>
          <a
            href="/thankyou?type=call"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-orange-400 font-bold text-xs border border-slate-700 hover:border-orange-500/40 transition-all shrink-0 cursor-pointer flex items-center gap-2 relative z-50 pointer-events-auto"
          >
            <Phone className="w-4 h-4" />
            Call for Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
}
