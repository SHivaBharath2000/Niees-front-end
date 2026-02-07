import React from 'react';
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { focalData } from "../../../State&Api/Api";
import { useNavigate } from 'react-router-dom';

const ThrustAreas = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
      //Call the focal area api for get the focal data
        useEffect(()=>{
           dispatch(focalData())
        },[dispatch])
  // const focalAreas = [
  //   {
  //     title: "Geology",
  //     description: "Our geology content is designed to explore the dynamic processes shaping the Earth, from its core to the crust..."
  //   },
  //   {
  //     title: "Atmospheric Sciences",
  //     description: "Atmospheric Sciences is the study of the Earth's atmosphere, its processes, interactions with other systems..."
  //   },
  //   {
  //     title: "Geography",
  //     description: "Geography is the study of Earth's landscapes, environments, and the relationships between people and their surroundings..."
  //   },
  //   {
  //     title: "Remote sensing and GIS",
  //     description: "Remote Sensing and Geographic Information Systems (GIS) are powerful tools for observing, analyzing, and understanding..."
  //   },
  //   {
  //     title: "Hydrology",
  //     description: "Hydrology is the scientific study of water in the environment—its distribution, movement, and quality across the Earth's surface..."
  //   },
  //   {
  //     title: "Coastal ecosystem",
  //     description: "Coastal ecosystems are dynamic environments where land meets the sea comprising mangroves, salt marshes, estuaries..."
  //   },
  // ];
    const focal=useSelector((state)=>state.Niees?.areas)
    const focalAreas=[...focal]
    // .sort((a, b) => (a?.id || 0) - (b?.id || 0))
    .slice(0, 6);
  

  return (
    /* Main Section: background-color: #94C290, padding: 120px */
    <section className="bg-[#94C290] py-[120px] px-4 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Heading and CTA */}
        <div className="bg-black rounded-[20px] h-full p-6 shadow-[32px_35px_15px_-8px_#FFF]  ">
          <h3 className=" text-3xl mt-[173px] font-['Roboto',_sans-serif] mb-[10px] mt-[50px] ml-[28px] font-semibold text-white  md: font-bold font-['Roboto',_sans-serif] leading-tight mt-[100px] text-white">
            Thrust Areas
          </h3>
          <p className="text-[#BDBDBD]  font-['Roboto',_sans-serif] mb-[20px] mt-[20px] ml-[28px]   leading-[1.65]">
            Providing expert solutions in research, analysis, and technology for 
            environmental and earth science advancements.
          </p>
          <div className="pt-4 w-[300px] h-[50px]">
           <button
                className="bg-[#61CE70] shadow-[9px_9px_10px_0_rgba(0,0,0,0.5)] rounded-[30px] ml-[28px]  w-50 h-[45px] text-white hover:cursor-pointer font-semibold"
               
                onClick={() => navigate("/gallery/")}
              >
               See More Thrust Areas
              </button>
          </div>
        </div>

        {/* Center and Right Columns: Focal Areas Grid */}
        <div className=" ml-[10px] md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
          {focalAreas.map((area, index) => (
            <div key={index} className="flex flex-col group">
              {/* Arrow Icon */}
              <div className="mb-4 text-black">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-black text-2xl font-semibold font-['Roboto',_sans-serif] mb-3 group-hover:translate-x-2 transition-transform duration-300">
                {area.title}
              </h3>
              <p style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}className="text-[#2C2B2B] text-base font-['Roboto',_sans-serif] leading-[1.65]">
                {area.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThrustAreas;