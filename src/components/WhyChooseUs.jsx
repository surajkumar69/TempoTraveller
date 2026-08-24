import React from 'react';
import { ShieldCheck, UserCheck, Heart, Clock, Tag, Headphones, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/fleetData';

export default function WhyChooseUs() {
  const iconMap = [
    <ShieldCheck className="w-6 h-6 text-orange-500" />,
    <UserCheck className="w-6 h-6 text-amber-500" />,
    <Heart className="w-6 h-6 text-orange-400" />,
    <Clock className="w-6 h-6 text-emerald-400" />,
    <Tag className="w-6 h-6 text-amber-400" />,
    <Headphones className="w-6 h-6 text-orange-500" />
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800 overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Why Travelers Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Your Journey is <span className="text-gradient">Our Priority</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We take pride in offering clean, comfortable, and reliable vehicle rentals with experienced drivers who know the mountain terrain of Meghalaya, Assam &amp; Arunachal Pradesh inside out.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-orange-500/50 transition-all">
                {iconMap[index]}
              </div>

              <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Local Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h4 className="text-xl font-bold font-['Outfit'] text-white">
              Based at Police Bazar, Opp. Hotel COURTYARD by Marriott, Shillong
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Instant vehicle pickup &amp; drop-off across all major hotels, homestays, Guwahati Airport &amp; Shillong Airport.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:from-orange-500 hover:to-amber-400 transition-all"
          >
            Contact Police Bazar Hub
          </a>
        </div>

      </div>
    </section>
  );
}
