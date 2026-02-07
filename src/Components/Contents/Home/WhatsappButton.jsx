import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Configuration
  const phoneNumber = "919442863233";
  const welcomeMessage = "Hello, Welcome to NIEES!";

  const toggleChat = () => setIsOpen(!isOpen);

  // FIXED: Optimized Scroll Logic
  useEffect(() => {
    const toggleVisibility = () => {
      // Check if user scrolled more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add listener when component mounts
    window.addEventListener("scroll", toggleVisibility);

    // CLEANUP: Remove listener when component unmounts to prevent memory leaks
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty array ensures this only runs once on mount

  return (
    <>
      {/* --- 1. WHATSAPP SECTION (Bottom Left) --- */}
      <div className="fixed bottom-4 left-4 z-[9999] font-['-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica_Neue,sans-serif'] antialiased">
        {/* CHAT BOX WIDGET */}
        <div
          className={`absolute bottom-full left-0 mb-4 w-[calc(100vw-24px)] max-w-[400px] overflow-hidden rounded-[32px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out origin-bottom-left
          ${
            isOpen
              ? "opacity-100 scale-100 max-h-[100vh]"
              : "opacity-0 scale-95 max-h-0 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="bg-[#25D366] p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.8-17-41.2-4.5-11-9.1-9.5-12.4-9.7-3.2-.1-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </div>
              <span className="font-bold text-lg font-['Roboto',_sans-serif]">
                Chat With NIEES
              </span>
            </div>
            <button
              onClick={toggleChat}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#25D366]/[0.04] p-6 min-h-[140px]">
            <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm inline-block relative max-w-[85%] border border-gray-100">
              <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
              <p className="text-[#334155] text-[15px] font-medium leading-relaxed font-['Roboto',_sans-serif]">
                Hello
                <br />
                Welcome to NIEES?
              </p>
              <span className="text-[10px] text-gray-400 mt-2 block text-right font-bold">
                1:31 PM
              </span>
            </div>
          </div>

          {/* Send Button */}
          <div className="p-4 bg-white border-t border-gray-50">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                welcomeMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-full font-bold transition-all shadow-md active:scale-95 font-['Roboto',_sans-serif]"
            >
              Open chat
            </a>
          </div>
        </div>

        {/* FLOATING WHATSAPP BUTTON */}
        <div onClick={toggleChat} className="flex items-left cursor-pointer group">
          <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[1px_6px_24px_0_rgba(7,94,84,0.3)] transition-all duration-300 transform group-hover:scale-110 active:scale-90 overflow-hidden">
            <svg className="w-[35px] h-[35px] fill-white" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.8-17-41.2-4.5-11-9.1-9.5-12.4-9.7-3.2-.1-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      {/* --- 2. SCROLL TO TOP SECTION (Bottom Right) --- */}
      {/* FIXED: Using a template literal for smoother opacity transition */}
      <div 
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9999] transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <a href="#header" className="flex items-center justify-center">
          <button className="bg-[#046bd2] p-3 md:p-4 text-white rounded-2xl md:rounded-full hover:cursor-pointer transition-all duration-300 hover:bg-[#045cb4] active:scale-90 shadow-lg">
            <FaChevronUp className="text-sm md:text-base" />
          </button>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;