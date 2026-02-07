import React from 'react';
import { useLocation } from 'react-router-dom';

const Content = () => {
//   const coreAreas = [
//     {
//       title: "Surface Water Hydrology",
//       desc: "Study of rivers, lakes, and runoff processes to understand flow dynamics, flood risks, and watershed behavior."
//     },
//     {
//       title: "Groundwater Hydrology (Hydrogeology)",
//       desc: "Investigation of subsurface water systems, aquifer characteristics, and sustainable groundwater extraction and recharge."
//     },
//     {
//       title: "Hydroclimatology",
//       desc: "Examination of the interaction between climate systems and the hydrological cycle, including the impact of extreme weather events."
//     },
//     {
//       title: "Water Quality and Contamination",
//       desc: "Analysis of water chemistry and pollutant transport to ensure clean water supplies and inform remediation efforts."
//     },
//     {
//       title: "Hydrological Modeling",
//       desc: "Development and application of computational models to simulate water flow, predict floods and droughts, and manage water resources."
//     },
//     {
//       title: "Urban Hydrology",
//       desc: "Focus on stormwater management, urban drainage systems, and the impact of land use and development on water flow and quality."
//     },
//     {
//       title: "Watershed and Catchment Management",
//       desc: "Integrated approaches to managing water within natural drainage basins, balancing ecological, agricultural, and community needs."
//     }
//   ];
  const location = useLocation();
  const { coreAreas,img,heading,last,desc} = location.state || {};

  return (
    <div className="bg-white font-['Roboto',_sans-serif] text-[#334155]">
      {/* Container matching --container-max-width: 1140px */}
      <section className="max-w-[1140px] mx-auto py-[50px] px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          
          {/* Image Container (Left Column) */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-[30px] shadow-[16px_18px_10px_0_rgba(0,0,0,0.5)] overflow-hidden">
              <img 
                src={img}
                alt={heading} 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content (Right Column) */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-[600] text-[#1e293b] leading-tight [text-shadow:0_0_5px_rgba(0,0,0,0.1)]">
             {heading}
            </h3>
            
            <div className="space-y-4 text-base leading-[1.65] text-[#334155]">
              <p>{desc}
              </p>

              <h4 className="text-xl font-bold text-[#1e293b] pt-4 border-t border-slate-100">
                Core Content Areas
              </h4>

              <ul className="space-y-6">
                {coreAreas?.map((area, index) => (
                  <li key={index} className="flex flex-col">
                    <strong className="text-[#1e293b] text-lg">{area.title}</strong>
                    <span className="text-[#7A7A7A] mt-1">{area.desc}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-6 font-medium text-[#1e293b]">
               {last}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;