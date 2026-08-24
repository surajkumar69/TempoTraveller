import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/fleetData';
import { ShieldCheck, CheckCircle2, ArrowRight, Wrench, MessageCircle } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Rental Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Tempo Traveller &amp; Urbania Rental for <span className="text-gradient">Shillong &amp; Guwahati</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Premium group travel solutions featuring <strong>Tempo Traveller for Shillong</strong>, <strong>Urbania for Guwahati</strong>, airport transfers, Cherrapunji excursions, Kaziranga safaris &amp; outstation travel across Meghalaya, Assam &amp; Arunachal Pradesh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 shadow-xl flex flex-col group"
            >
              {/* Service Image Header */}
              <div className="relative aspect-[16/10] min-h-[220px] overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-['Outfit'] text-white mt-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-900">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Starting Price & Action */}
                <div className="pt-4 border-t border-slate-900 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Starting Tariff</span>
                    <span className="text-lg font-bold text-orange-400 font-['Outfit']">
                      {service.startingPrice}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenBooking()}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs shadow-md shadow-orange-500/15 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello! I want to inquire about your ${service.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 font-semibold text-xs border border-slate-800 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
