import React from 'react';
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
import FloatingContact from './components/FloatingContact';
import ThankYou from './components/ThankYou';

export default function App() {
  const path = window.location.pathname;

  if (path === '/thankyou' || path === '/thankyou/') {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <LocationsSection />
        <VehicleFleet />
        <Services />
        <WhyChooseUs />
        <ShillongMeghalaya />
        <AboutUs />
        <BookingCTA />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Contact */}
      <FloatingContact />
    </div>
  );
}
