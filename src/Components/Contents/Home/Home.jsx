import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AboutComponent from "./AboutComponent";
import VisionMission from "./Vision";
import MeetTheTeam from "./MeetTheTeam";
import EventPhotos from "./EventPhotos";
import ThrustAreas from "./ThurstAreas";
import ThoughtLeaders from "./ThoughtLeaders";
import CallToAction from "./CallToAction";
import { useDispatch,useSelector } from "react-redux";
import { focalData,homeLogoData,homeLeadersData,homePhotosData } from "../../../State&Api/Api";

// const slides = [
//   {
//     id: 1,
//     category: "NIEES ambition",
//     title: "Research And Development",
//     description:
//       "Driving innovation through interdisciplinary research in earth, environmental, and climate sciences to build a sustainable future.",
//     image:
//       "https://niees.org.in/wp-content/uploads/slider/cache/e0c08e8523f9dca36be5a9a68b137a2d/niees13.jpg",
//   },
//   {
//     id: 2,
//     category: "NIEES ambition",
//     title: "Environmental Sciences",
//     description:
//       "Exploring natural systems to understand, protect, and create sustainable solutions for our environment.",
//     image:
//       "https://niees.org.in/wp-content/uploads/slider/cache/0ba433de0eb7ea6a9510d52c476d0523/niees9.jpg",
//   },
//   {
//     id: 3,
//     category: "NIEES ambition",
//     title: "Geography",
//     description:
//       "Studying Earth's landscapes, places, and human-environment interactions to understand spatial patterns and processes.",
//     image:
//       "https://niees.org.in/wp-content/uploads/slider/cache/f4976212dd148b72ae5b84329a5210bc/niees12.jpg",
//   },
//   {
//     id: 4,
//     category: "NIEES ambition",
//     title: "Geology",
//     description: "Exploring Earth’s past to understand its future",
//     image:
//       "https://niees.org.in/wp-content/uploads/slider/cache/57da1716d124afc56219ee2b8a7a64c5/geology.jpg",
//   },
// ];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

const Home = () => {
   const areas=useSelector((state)=>state.Niees?.areas)
   const slides=areas.filter((cur)=>cur.shortDesc!=undefined)
  
  const [[page, direction], setPage] = useState([0, 0]);
  const current = Math.abs(page % slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const fontStyle = { fontFamily: "'Libre Franklin', sans-serif" };
  const dispatch=useDispatch()
  
    //Call the focal area api for get the focal data
      useEffect(()=>{
         dispatch(focalData())
         dispatch(homeLeadersData())
         dispatch(homeLogoData())
         dispatch(homePhotosData())
      },[dispatch])

  return (
    // Banner Section
    <>
      <div className="relative h-[600px] w-full overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[current]?.image})`,
                opacity: 0.4,
              }}
            />

            {/* Content Container - Items-end ensures even right alignment */}
            <div className="relative z-10 flex h-full w-full flex-col justify-center items-end px-8 md:px-24">
              <div className="flex flex-col items-end text-right w-full">
                {/* Category - whitespace-nowrap adds no line break */}
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-white font-bold uppercase tracking-[0.15em] text-[14px] mb-2 whitespace-nowrap ml-auto"
                  style={fontStyle}
                >
                  NIEES ambition
                </motion.span>

                {/* Title - Single line enforced */}
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="font-bold text-white text-[237.5%] leading-[1.1] mb-6 whitespace-nowrap ml-auto"
                  style={fontStyle}
                >
                  {slides[current]?.title}
                </motion.h2>

                {/* Description - Single line enforced */}
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 text-[112.5%] leading-[1.6] font-light mb-10 whitespace-nowrap ml-auto"
                  style={fontStyle}
                >
                  {slides[current]?.shortDesc}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="ml-auto"
                >
                  <a
                    href="/focal-areas/"
                    className="inline-block bg-[#28a745] hover:bg-[#218838] text-white px-10 py-4 rounded-[35px] font-bold uppercase tracking-widest text-[13px] transition-all duration-300 shadow-xl hover:scale-105"
                    style={fontStyle}
                  >
                    Read More
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 text-white/50 hover:text-white transition-all bg-black/10 hover:bg-black/30 rounded-full"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 text-white/50 hover:text-white transition-all bg-black/10 hover:bg-black/30 rounded-full"
        >
          <ChevronRight size={30} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index > current ? 1 : -1])}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                current === index ? "bg-[#28a745] w-10" : "bg-white/20 w-5"
              }`}
            />
          ))}
        </div>
      </div><br/><br/>
      <AboutComponent /><br/> <br/><br/>
      <VisionMission/>
      <MeetTheTeam/> 
      <EventPhotos/><br/><br/><br/><br/>
      <ThrustAreas/><br/><br/>
      <ThoughtLeaders/><br/><br/>
      <CallToAction/>
    </>
  );
};

export default Home;
