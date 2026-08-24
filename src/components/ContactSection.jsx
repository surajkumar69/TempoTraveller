import React, { useState } from 'react';
import { BUSINESS_INFO, VEHICLES } from '../data/fleetData';
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2, Map, Calendar, Users, Car } from 'lucide-react';

export default function ContactSection({ selectedVehicleId }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: 'Police Bazar, Shillong',
    drop: 'Cherrapunji / Local Sightseeing',
    date: '',
    passengers: '1-4',
    vehicleId: selectedVehicleId || 'tt-13',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const veh = VEHICLES.find(v => v.id === formData.vehicleId) || VEHICLES[0];
    const text = `*NEW WEBSITE BOOKING ENQUIRY*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nVehicle: ${veh.name}\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nDate: ${formData.date}\nPassengers: ${formData.passengers}\nMessage: ${formData.message || 'None'}`;
    
    // Auto trigger WhatsApp as well
    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    }, 1200);
  };

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
            Have a question or need a custom Meghalaya tour quote? Call us, drop by our Police Bazar hub, or fill out the enquiry form below.
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
                <span className="text-xs uppercase font-extrabold tracking-wider text-orange-500">Send Direct Message</span>
                <h3 className="text-2xl font-bold font-['Outfit'] text-white mt-1">Vehicle Booking &amp; Rate Enquiry</h3>
                <p className="text-xs text-slate-400 mt-1">We respond within minutes with transparent pricing and vehicle confirmation.</p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Outfit']">Enquiry Submitted Successfully!</h4>
                  <p className="text-xs text-emerald-200 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to Tempo Traveller and Urbania Co. We are redirecting your query to our WhatsApp desk for instant processing.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-orange-400 font-bold hover:underline"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Vehicle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Preferred Vehicle *
                      </label>
                      <select
                        value={formData.vehicleId}
                        onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                      >
                        {VEHICLES.map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.name} ({v.priceLabel})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pickup & Drop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        placeholder="e.g. Police Bazar or Guwahati Airport"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Drop / Tour Destination
                      </label>
                      <input
                        type="text"
                        value={formData.drop}
                        onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                        placeholder="e.g. Cherrapunji, Dawki, Mawlynnong"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Date & Passenger Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Journey Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Number of Passengers
                      </label>
                      <select
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                      >
                        <option value="1-4">1 to 4 Passengers</option>
                        <option value="5-7">5 to 7 Passengers</option>
                        <option value="8-13">8 to 13 Passengers</option>
                        <option value="14-17">14 to 17 Passengers</option>
                        <option value="18-25">18 to 25 Passengers</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Special Requirements / Tour Plan Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know if you need multi-day tour packages, Guwahati airport drop, luggage assistance, etc."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Enquiry</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
