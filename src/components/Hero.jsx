import React from 'react';
import { ShieldCheck, Sparkles, Tag, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/images/shillong_hero.jpg';

export default function Hero() {
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
              <span>Tempo Traveller and Urbania Rental for Shillong &amp; Guwahati</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-white tracking-tight leading-[1.15]">
              Tempo Traveller &amp; Urbania <br className="hidden sm:inline" />
              <span className="text-gradient">Rental for Shillong &amp; Guwahati</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Book executive <strong>Tempo Traveller for Shillong</strong>, <strong>Urbania for Guwahati</strong>, airport pickups, Cherrapunji, Dawki, Kaziranga &amp; outstation Meghalaya, Assam &amp; Arunachal Pradesh tour packages.
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

              <div className="space-y-4 pt-2">
                <a
                  href="/thankyou?type=call"
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-lg shadow-xl shadow-orange-500/25 flex items-center justify-center gap-3 transition-all cursor-pointer relative z-50 pointer-events-auto"
                >
                  <span>Call Us Now</span>
                </a>

                <a
                  href="/thankyou?type=whatsapp"
                  className="w-full py-4 px-4 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-lg shadow-xl shadow-green-500/25 flex items-center justify-center gap-3 transition-all cursor-pointer relative z-50 pointer-events-auto"
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
