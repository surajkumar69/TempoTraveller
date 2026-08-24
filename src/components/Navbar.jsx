import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Car, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Meghalaya Tours', href: '#meghalaya' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 border-b border-slate-800/80 shadow-2xl' : 'bg-slate-950/70 backdrop-blur-md py-5 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold font-['Outfit'] text-white tracking-tight leading-none">
                Tempo Traveller <span className="text-orange-500">&amp; Urbania</span> Co.
              </span>
              <span className="block text-[11px] text-slate-400 font-medium tracking-wide mt-1">
                Police Bazar, Shillong
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-orange-400 font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold hover:border-slate-700 hover:text-white transition-all"
              title="Call Us Directly"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>Call Us</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to inquire about renting a vehicle from Shillong.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-all"
              title="WhatsApp Chat"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs font-bold shadow-lg shadow-orange-500/20 hover:from-orange-500 hover:to-amber-400 hover:shadow-orange-500/35 transition-all transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-slate-200 hover:text-orange-400 font-medium py-2 border-b border-slate-900 text-sm"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 text-slate-200 font-semibold text-xs border border-slate-800"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I want to enquire about vehicle booking.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/20 text-center block cursor-pointer"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
