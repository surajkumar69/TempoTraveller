import React, { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");

    if (type === "call") {
      setTimeout(() => {
        window.location.href = "tel:+916909326969";
      }, 3000);
    }

    if (type === "whatsapp") {
      setTimeout(() => {
        window.location.href =
          "https://wa.me/916909326969?text=Hello!%20I%20would%20like%20to%20inquire%20about%20renting%20a%20vehicle%20from%20Shillong.";
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
