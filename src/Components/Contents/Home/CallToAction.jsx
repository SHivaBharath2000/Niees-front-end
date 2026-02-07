import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate=useNavigate()
  return (
    <section className="relative bg-[#94C290] py-[80px] px-4 md:px-0 font-sans overflow-hidden transition-all duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center space-y-5">
          
          {/* Sub-heading: Create Change */}
          <div className="w-full">
            <h3 className="text-black text-3xl md:text-3xl font-semibold ">
              create change
            </h3>
          </div>

          {/* Divider Line */}
          <div className="w-24 border-t-2 text-black my-2"></div>

          {/* Main Heading */}
          <div className="w-full max-w-3xl">
            <h2 className="text-[#1C8EBD] text-3xl md:text-4xl font-semibold leading-tight">
              Let’s Build a Better Planet Together
            </h2>
          </div>

          {/* Description Text */}
          <div className="w-full max-w-2xl">
            <p className="text-black/90 text-base md:text-lg leading-relaxed">
              Join hands with NIEES to support impactful research, promote 
              sustainability, and drive real-world environmental change.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button
                className="bg-[#49A055] shadow-[9px_9px_10px_0_rgba(0,0,0,0.5)] rounded-[30px] ml-[28px]  w-50 h-[45px] text-white hover:cursor-pointer font-semibold"
               
                onClick={() => navigate("/contact-us/")}
              >
               Get Involved
              </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;