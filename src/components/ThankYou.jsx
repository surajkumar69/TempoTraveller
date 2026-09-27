import React, { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    // We already have the logic in the component script, or we can put it in a useEffect here.
    // The instructions say to add this JavaScript:
    /*
    <script>
    var type = new URLSearchParams(window.location.search).get("type");
    var phone = "tel:+916909326969";
    var whatsapp = "https://wa.me/916909326969?text=Hello!%20I%20would%20like%20to%20inquire%20about%20renting%20a%20vehicle%20from%20Shillong.";
    if(type === "call"){
      setTimeout(function(){
        window.location.href = phone;
      }, 3000);
    }
    if(type === "whatsapp"){
      setTimeout(function(){
        window.location.href = whatsapp;
      }, 3000);
    }
    </script>
    */
    
    const type = new URLSearchParams(window.location.search).get("type");
    const phone = "tel:+916909326969";
    const whatsapp = "https://wa.me/916909326969?text=Hello!%20I%20would%20like%20to%20inquire%20about%20renting%20a%20vehicle%20from%20Shillong.";

    if (type === "call") {
      setTimeout(function() {
        window.location.href = phone;
      }, 3000);
    }

    if (type === "whatsapp") {
      setTimeout(function() {
        window.location.href = whatsapp;
      }, 3000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center font-sans">
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Thank You!</h2>
      <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#94a3b8' }}>Connecting you...</p>
    </div>
  );
}
