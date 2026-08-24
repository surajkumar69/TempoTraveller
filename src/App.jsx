import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleFleet from './components/VehicleFleet';
import Services from './components/Services';
import LocationsSection from './components/LocationsSection';
import WhyChooseUs from './components/WhyChooseUs';
import ShillongMeghalaya from './components/ShillongMeghalaya';
import AboutUs from './components/AboutUs';
import BookingCTA from './components/BookingCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingFormModal from './components/BookingFormModal';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState('tt-13');

  const handleOpenBooking = (vehicleId) => {
    if (vehicleId) {
      setSelectedVehicleId(vehicleId);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <LocationsSection onOpenBooking={handleOpenBooking} />
        <VehicleFleet onBookNow={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <ShillongMeghalaya onOpenBooking={handleOpenBooking} />
        <AboutUs />
        <BookingCTA onOpenBooking={handleOpenBooking} />
        <ContactSection selectedVehicleId={selectedVehicleId} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        selectedVehicleId={selectedVehicleId}
      />

      {/* Mobile Sticky Quick Contact */}
      <FloatingContact onOpenBooking={handleOpenBooking} />
    </div>
  );
}
