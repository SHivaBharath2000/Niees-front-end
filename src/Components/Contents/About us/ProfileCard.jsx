import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfileCard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const member = location.state?.member;

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <p className="mb-4 text-gray-600 font-medium">No profile data found.</p>
        <button 
          onClick={() => navigate('/about-us/')}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full transition-all shadow-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-10 font-sans text-gray-800">
      {/* Main Container - Flexbox for Left/Right layout */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* LEFT SIDE: Profile Image Container */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
          <div className="w-full max-w-[280px] aspect-[3/4] overflow-hidden rounded-xl shadow-lg border-4 border-white">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Content Information */}
        <div className="w-full md:w-2/3 lg:w-3/4 p-8 md:p-12 flex flex-col justify-center">
          
          {/* Header Info */}
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h1 className="text-3xl md:text-4xl font-black text-green-900 leading-tight">
              {member.name}
            </h1>
            <p className="text-xl text-green-700 font-semibold mt-2 italic">
              {member.role}
            </p>
          </div>

          {/* Contact Details */}
          <div className="mb-8">
            <p className="flex items-center gap-2 text-gray-700">
              <span className="font-bold text-green-900 uppercase text-xs tracking-widest">Email:</span> 
              <span className="hover:text-green-700 transition-colors">{member.email || "info@niees.org.in"}</span>
            </p>
          </div>

          {/* About Section - Integrated into the Right Side */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-green-900 uppercase tracking-wide">About</h2>
            </div>
            
            <p className="leading-relaxed text-gray-600 text-justify text-base md:text-lg italic font-light">
              "{member.description || `A dedicated specialist in Earth and Environmental Sciences research, contributing significantly to the NIEES mission through innovation and academic excellence.`}"
            </p>
          </div>

          {/* Optional: Add Social/Action Buttons here if needed */}
          <div className="mt-10">
            <button 
              onClick={() => navigate(-1)}
              className="text-sm font-bold text-green-900 hover:text-green-600 flex items-center gap-2 transition-all"
            >
              ← Back to Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;