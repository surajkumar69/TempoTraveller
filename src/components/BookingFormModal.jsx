import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Users, Car, Phone, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { VEHICLES, BUSINESS_INFO } from '../data/fleetData';

export default function BookingFormModal({ isOpen, onClose, selectedVehicleId }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleId: selectedVehicleId || 'tt-13',
    pickup: 'Police Bazar, Shillong',
    drop: 'Cherrapunji (Sohra)',
    date: '',
    passengers: '1-4',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedVehicleId) {
      setFormData(prev => ({ ...prev, vehicleId: selectedVehicleId }));
    }
  }, [selectedVehicleId]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const veh = VEHICLES.find(v => v.id === formData.vehicleId) || VEHICLES[0];
    const text = `*DIRECT WEB BOOKING REQUEST*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${veh.name} (${veh.priceLabel})\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nDate: ${formData.date}\nPassengers: ${formData.passengers}\nNotes: ${formData.notes || 'None'}`;

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6 pb-4 border-b border-slate-800">
          <span className="text-xs uppercase font-extrabold tracking-wider text-orange-500">Tempo Traveller &amp; Urbania Co.</span>
          <h3 className="text-2xl font-bold font-['Outfit'] text-white mt-1">Book Your Vehicle</h3>
          <p className="text-xs text-slate-400 mt-1">Police Bazar Hub • Shillong, Meghalaya</p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white font-['Outfit']">Booking Request Sent!</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              We are connecting you directly to our WhatsApp booking desk to confirm rate &amp; driver details.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Vehicle Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Selected Vehicle *
              </label>
              <select
                value={formData.vehicleId}
                onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm font-medium focus:border-orange-500 outline-none cursor-pointer"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} — {v.priceLabel} ({v.seats} Seats)
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 69093 26969"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Pickup & Drop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  placeholder="e.g. Police Bazar or Guwahati Airport"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Drop Destination
                </label>
                <input
                  type="text"
                  value={formData.drop}
                  onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                  placeholder="e.g. Cherrapunji, Dawki"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Travel Date & Passengers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Passengers
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-orange-500 outline-none cursor-pointer"
                >
                  <option value="1-4">1-4 Passengers</option>
                  <option value="5-7">5-7 Passengers</option>
                  <option value="8-13">8-13 Passengers</option>
                  <option value="14-17">14-17 Passengers</option>
                  <option value="18-25">18-25 Passengers</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Trip Notes / Special Requests
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention sight-seeing spots, Guwahati airport pickup time, etc."
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-orange-500 outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm &amp; Send to WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
