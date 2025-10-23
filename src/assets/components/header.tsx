// ContactBar.tsx

import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const ContactBar = () => (
  <React.Fragment>
    <div className="hidden sm:flex items-center justify-between px-12 py-3 bg-white overflow-x-auto">
      {/* Call Section */}
      <div className="flex items-center space-x-3">
        <svg
          className="w-6 h-6 text-yellow-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M2 2h20v20H2z" fill="none" />
          <path d="M6 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm6 8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm-6 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm6-8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z" />
        </svg>
        <div>
          <div className="text-[17px] font-semibold text-gray-700">
            Call Now
          </div>
          <div className="text-[16px] tracking-wide text-gray-800">
            +91-8077772817
          </div>
        </div>
      </div>

      {/* Logo and Brand Section */}
      <div className="text-center">
        <div className="text-6xl text-yellow-700 font-script mb-2">K</div>
        <div className="text-[20px] font-semibold text-yellow-700 tracking-wide">
          DR. KANUPRIYA
        </div>
        <div className="text-[10px] text-gray-700 tracking-wide">
          DERMATOLOGIST BAREILLY
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center space-x-3">
        <svg
          className="w-6 h-6 text-yellow-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M21 5v14H3V5h18zm-9 7L3 7m18 0l-9 5" />
        </svg>
        <div>
          <div className="text-[17px] font-semibold text-gray-700">Email</div>
          <div className="text-[16px] tracking-wide text-gray-800">
            INFO@DERMATOLOGISTBAREILLY.IN
          </div>
        </div>
      </div>
    </div>

    <div className="sm:hidden flex items-center justify-between bg-white py-5 px-3">
      {/* Logo and Brand Section */}
      <div className="text-center">
        <div className="text-[28px] break1:text-[38px] text-yellow-700 font-script">
          K
        </div>
        <div className="text-[14px] break1:text-[18px] font-semibold text-yellow-700 tracking-wide">
          DR. KANUPRIYA
        </div>
        <div className="text-[9px] break1:text-[11px] text-gray-700 tracking-wide">
          DERMATOLOGIST BAREILLY
        </div>
      </div>

      {/* Contact Section  */}
      <div className="flex flex-col gap-2 justify-end text-[9px]">
        <div className="flex justify-end text-[14px] break1:text-[18px] font-medium text-yellow-700 underline">
          Contact Us
        </div>
        <div className="flex items-center justify-end gap-1 break1:text-[11px]">
          <Mail className="h-4 w-4" />
          <span>INFO@DERMATOLOGISTBAREILLY.IN</span>
        </div>
        <div className="flex items-center justify-end gap-1 break1:text-[11px]">
          <Phone className="h-4 w-4" />
          <span> +91-8077772817</span>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ContactBar;
