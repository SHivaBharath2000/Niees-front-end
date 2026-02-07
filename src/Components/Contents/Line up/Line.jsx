import React from "react";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { lineUpData } from "../../../State&Api/Api";

const Line = () => {
  
    //Initially get the data from the database
      const dispatch=useDispatch()
      const  conferenceData=useSelector((state)=>state.Niees.lineUp)
      useEffect(()=>{
        dispatch(lineUpData())
      },[dispatch])

  //  conferenceData = [
  //   {
  //     id: "ICECATFE-2026",
  //     title: "Aquatic, Terrestrial and Food Ecosystem",
  //     subtitle: "International Conference on Emerging Contaminants In Aquatic, Terrestrial And Food Ecosystem",
  //     code: "(ICECATFE-2026)",
  //     brochureLink: "https://niees.org.in/wp-content/uploads/2025/11/TNFJU-FI-and-NIEES.pdf",
  //     registerLink: "https://forms.gle/CYGSJLsXuo8L1hbbA",
  //     status: "Register Now",
  //   },
  //   {
  //     id: "Status-Minerals",
  //     title: "NIEES - Presents an insightful session on",
  //     subtitle: "Status of placer minerals, material composition of coastal placer deposits between Chavara and Manavalakurichi, Kerala and Tamil Nadu coast India",
  //     code: "",
  //     brochureLink: "https://niees.org.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-10.16.58-PM.jpeg",
  //     registerLink: "#",
  //     status: "Completed",
  //     color:"bg-[#61CE70]"
  //   },
  //   {
  //     id: "ICMSWSN-2025",
  //     title: "Microplastic Chronicles",
  //     subtitle: "International Conference on Microplastic Chronicles: Emerging Contaminants of Soil, Water, Sediments, and Nutrition",
  //     code: "(ICMSWSN-2025)",
  //     brochureLink: "https://drive.google.com/file/d/1HgP_uwIDuTWT6jaeBcVvB3Pt5pjFRa4E/view?usp=drive_link",
  //     registerLink: "#",
  //     status: "Completed",
  //     color:"bg-[#61CE70]"
  //   },
  // ];

  return (
    /* Background matching --ast-global-color-5 (#F0F5FA) */
    <div className="bg-transparent py-12 font-['-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica_Neue,sans-serif']">
      <div className="max-w-[1200px] mx-auto px-6 space-y-8">
        {conferenceData.map((item) => (
          /* Card Container: Boxed layout with white background */
          <div
            key={item.id}
            className="bg-white  p-8 md:p-10   transition-all duration-300 hover:shadow-md"
          >
            {/* Title: Color --ast-global-color-2 (#1e293b) */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#eb0f0f] mb-4 font-['Roboto',sans-serif]">
              {item.title}
            </h2>

            {/* Subtitle & Code: Color --ast-global-color-3 (#334155) */}
            <div className="text-[#0a0a0b] text-base font-['Roboto',sans-serif] md:text-lg leading-[1.65] mb-8">
              <h5 className="font-medium inline">{item.subtitle}</h5><br/>
              {item.code && (
                <h5 className="font-bold ml-1 block md:inline text-[#1e293b]">
                  <strong>{item.code}</strong>
                </h5>
              )}
            </div>

            {/* Buttons Group */}
            <div className="flex flex-wrap gap-4 items-center ">
              {/* Primary Button: Color --ast-global-color-0 (#046bd2) */}
              <a
                href={item.brochureLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#61CE70] font-['Roboto',sans-serif] rounded-[30px] text-black hover:text-white hover:bg-[#045cb4]   py-3 px-8 rounded transition-colors duration-200 uppercase tracking-wide text-sm"
              >
                Brochure link
              </a>

              {/* Secondary/Action Button: Color --e-global-color-accent (#61CE70) */}
              <a
                href={item.registerLink}
                className={` font-['Roboto',sans-serif] rounded-[30px] ${
                  item.status === "Completed"
                    ? "bg-[#ea000088] text-black hover:text-white disabled"
                    : "bg-[#63B3F7]  text-black hover:text-white"
                }  py-3 px-8 rounded transition-colors duration-200 uppercase tracking-wide text-sm`}
              >
                {item.status}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Line;