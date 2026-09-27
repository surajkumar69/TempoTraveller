import React from 'react';
import { BUSINESS_INFO } from '../data/fleetData';
import { Mail, MapPin, Phone, MessageCircle, Map } from 'lucide-react';

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Contact &amp; Hub Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Get in Touch with <span className="text-gradient">Tempo Traveller and Urbania Co.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a question or need a custom Meghalaya, Assam &amp; Arunachal Pradesh tour quote? Call us, drop by our Police Bazar hub, or fill out the enquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Details & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold font-['Outfit'] text-white border-b border-slate-800 pb-4">
                {BUSINESS_INFO.name}
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs uppercase tracking-wider text-slate-400">Address</span>
                    <p className="font-medium text-slate-200 mt-0.5 leading-relaxed">
                      Police Bazar, Jail Road<br />
                      Opp. Hotel COURTYARD by Marriott<br />
                      Shillong, Meghalaya – 793001
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 pt-2">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs uppercase tracking-wider text-slate-400">Email Address</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-orange-400 font-semibold hover:underline text-sm break-all">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-center gap-3.5 pt-2">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs uppercase tracking-wider text-slate-400">Direct Phone &amp; WhatsApp</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-400 font-bold hover:underline text-sm">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

              </div>

              {/* Tagline Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-xs italic text-orange-400 font-serif">
                  "{BUSINESS_INFO.tagline}"
                </span>
              </div>
            </div>

            {/* Embedded Google Maps Placeholder / iFrame */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Map className="w-4 h-4 text-orange-500" />
                  <span>Police Bazar Location Map</span>
                </div>
                <span className="text-[10px] text-slate-400">Shillong, Meghalaya</span>
              </div>

              <div className="w-full h-64 bg-slate-950 relative">
                <iframe
                  title="Police Bazar Shillong Location Map"
                  src={BUSINESS_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

              {/* Right Column: Professional Booking & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-orange-500">Fast Booking</span>
                <h3 className="text-2xl font-bold font-['Outfit'] text-white mt-1">Book Your Vehicle Instantly</h3>
                <p className="text-xs text-slate-400 mt-1">Contact us directly via Call or WhatsApp for quick booking, transparent pricing, and vehicle confirmation.</p>
              </div>

              <div className="space-y-4 pt-4">
                <a
                  href="/thankyou?type=call"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-lg shadow-xl shadow-orange-500/25 flex items-center justify-center gap-3 transition-all cursor-pointer"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Us Now</span>
                </a>
                
                <a
                  href="/thankyou?type=whatsapp"
                  className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold text-lg shadow-xl shadow-green-500/25 flex items-center justify-center gap-3 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6" />
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
