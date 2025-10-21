// ContactBar.tsx
import React from "react";

const ContactBar = () => (
  <div className="flex items-center justify-between px-12 py-2 bg-white">
    {/* Call Section */}
    <div className="flex items-center space-x-3">
      <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M2 2h20v20H2z" fill="none" />
        <path d="M6 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm6 8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm-6 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm6-8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z" />
      </svg>
      <div>
        <div className="text-lg font-semibold text-gray-700">Call Now</div>
        <div className="text-xl tracking-wide text-gray-800">+91-8077772817</div>
      </div>
    </div>

    {/* Logo and Brand Section */}
    <div className="text-center">
      <div className="text-6xl text-yellow-700 font-script mb-2">K</div>
      <div className="text-lg font-semibold text-yellow-700 tracking-wide">DR. KANUPRIYA</div>
      <div className="text-xs text-gray-700 tracking-wide">DERMATOLOGIST BAREILLY</div>
    </div>

    {/* Email Section */}
    <div className="flex items-center space-x-3">
      <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M21 5v14H3V5h18zm-9 7L3 7m18 0l-9 5" />
      </svg>
      <div>
        <div className="text-lg font-semibold text-gray-700">Email</div>
        <div className="text-xl tracking-wide text-gray-800">INFO@DERMATOLOGISTBAREILLY.IN</div>
      </div>
    </div>
  </div>
);

export default ContactBar;
