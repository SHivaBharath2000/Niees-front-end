import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EventPhotos = () => {
    const navigate=useNavigate()
    const Photos=useSelector((state)=>state.Niees.homePhotos)
    // Array of images from your gallery source
    const images=Photos.map((cur)=>cur.src)
  // const images = [
  //   "//niees.org.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-18-at-17.56.03-2.jpeg",
  //   "//niees.org.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-18-at-17.56.03.jpeg",
  //   "//niees.org.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-18-at-17.56.02-2.jpeg",
  //   "//niees.org.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-18-at-17.56.02.jpeg"
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1140px] h-[570px] w-full m-auto py-16 px-4 relative group">
      {/* Heading with Shadow */}
      <h2 className="text-center text-3xl font-bold mb-8 drop-shadow-[4px_4px_11px_rgba(0,0,0,0.3)]">
        Event Photos
      </h2>

      {/* Image Container */}
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-lg"
      ></div>

      {/* Left Arrow */}
      <div 
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>

      {/* Right Arrow */}
      <div 
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
       <br/>
       <button
                className="bg-[#61CE70] shadow-[9px_9px_10px_0_rgba(0,0,0,0.5)] rounded-[20px]  w-45 h-8.75 text-white hover:cursor-pointer font-semibold"
                style={{position:"relative", left:"40%"}}
                onClick={() => navigate("/gallery")}
              >
               See More Events
              </button>
    </div>
  );
};

export default EventPhotos;