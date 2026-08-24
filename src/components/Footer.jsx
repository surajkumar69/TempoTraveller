import React from 'react';
import { BUSINESS_INFO, VEHICLES } from '../data/fleetData';
import { Mail, MapPin, Phone, MessageCircle, Heart, ChevronRight, Globe, Share2 } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Tempo Traveller & Urbania Co. Official Logo"
                className="w-12 h-12 object-contain rounded-full border-2 border-orange-500/60 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-extrabold font-['Outfit'] text-white">
                Tempo Traveller <span className="text-orange-500">&amp; Urbania</span> Co.
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Shillong's trusted name for Tempo Traveller, Force Urbania, and outstation cab rentals. Providing safe, comfortable, and reliable passenger transport across Meghalaya, Assam &amp; Arunachal Pradesh.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-0.5">
                Brand Tagline
              </span>
              <p className="text-sm font-semibold text-white font-['Outfit'] italic">
                "{BUSINESS_INFO.tagline}"
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#contact" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500/50 transition-colors" title="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500/50 transition-colors" title="WhatsApp Share">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500/50 transition-colors" title="Share">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-['Outfit'] text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About Us', 'Services', 'Vehicles', 'Meghalaya Tours', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '')}`}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Vehicle Fleet (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-['Outfit'] text-white uppercase tracking-wider">
              Vehicle Fleet &amp; Tariff
            </h4>
            <ul className="space-y-2 text-xs">
              {VEHICLES.map((v) => (
                <li key={v.id} className="flex items-center justify-between text-slate-400">
                  <a href="#vehicles" className="hover:text-orange-400 transition-colors truncate max-w-[170px]">
                    {v.name}
                  </a>
                  <span className="text-[11px] font-semibold text-orange-400 shrink-0">
                    {v.priceLabel.replace(' onwards', '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-['Outfit'] text-white uppercase tracking-wider">
              Contact Information
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-200 hover:text-orange-400 break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-400 font-bold hover:underline">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Local SEO Target Keywords Bar */}
        <div className="py-8 border-b border-slate-900 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              Popular Local Keyword Searches &amp; Rentals
            </h4>
            <span className="text-[11px] text-slate-400">Quick Book &amp; Outstation Service</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
            <a href="#vehicles" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-orange-500/30 text-slate-200 hover:text-orange-400 hover:border-orange-500 hover:bg-slate-850 transition-all font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Tempo traveller for shillong
            </a>
            <a href="#vehicles" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-orange-500/30 text-slate-200 hover:text-orange-400 hover:border-orange-500 hover:bg-slate-850 transition-all font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Tempo traveller for Guwahati
            </a>
            <a href="#vehicles" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-orange-500/30 text-slate-200 hover:text-orange-400 hover:border-orange-500 hover:bg-slate-850 transition-all font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Urbania for shillong
            </a>
            <a href="#vehicles" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-orange-500/30 text-slate-200 hover:text-orange-400 hover:border-orange-500 hover:bg-slate-850 transition-all font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Urbania for Guwahati
            </a>
            <a href="#vehicles" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-orange-500/30 text-slate-200 hover:text-orange-400 hover:border-orange-500 hover:bg-slate-850 transition-all font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Tempo traveller and Urbania rental for shillong
            </a>
            <a href="#vehicles" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-orange-500/30 text-slate-200 hover:text-orange-400 hover:border-orange-500 hover:bg-slate-850 transition-all font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Tempo traveller and Urbania rental for Guwahati
            </a>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">Force Urbania Shillong</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">Guwahati LGBI Airport Pickups</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">Cherrapunji &amp; Dawki Tours</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">Kaziranga Assam Safari</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">Tawang Arunachal Expedition</span>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>Tempo Traveller and Urbania Co.</strong> All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <span className="text-slate-400">Police Bazar, Shillong</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
