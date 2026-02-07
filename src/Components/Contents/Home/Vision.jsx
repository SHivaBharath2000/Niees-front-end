import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
const VisionMission = () => {
  const navigate = useNavigate();
   const about = useSelector((state)=>state.Niees.about)
  return (
    <section className="bg-[#94C290] py-20 px-4 md:px-0 selection:bg-[#046bd2] selection:text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
          {/* Our Vision Column */}
          <div className="flex flex-col space-y-6 p-6 md:p-10 text-[#1e293b]">
            <h2 className="text-3xl  font-['Roboto_Slab',_sans-serif] font-semibold text-[#f8f8f8] pb-2 w-fit">
              Our Vision
            </h2>
            <div className="text-base leading-relaxed text-[#334155]">
              <p style={{ display: "-webkit-box", WebkitLineClamp: 10, WebkitBoxOrient: "vertical", overflow: "hidden" }} className="text-[#f8f8f8] font-['Roboto_Slab',_sans-serif]">
                {about[0]?.vision}
              </p>
            </div>
            <div>
              {/* <a 
                href="https://niees.org.in/about-us/" 
className="bg-[#61CE70] shadow-[9px_9px_10px_0_rgba(0,0,0,0.5)] rounded-[20px]  w-[100px] h-[200px] text-white"              >
                Read More
              </a> */}
              <button
                className="bg-[#61CE70] shadow-[9px_9px_10px_0_rgba(0,0,0,0.5)] rounded-[20px]  w-25 h-8.75 text-white hover:cursor-pointer font-semibold"
                onClick={() => navigate("/about-us/")}
              >
                {" "}
                Read More
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center p-0">
            <div className="overflow-hidden shadow-2xl rounded-[20px]">
              <img
                loading="lazy"
                src="https://niees.org.in/wp-content/uploads/2025/04/pexels-photo-8512667-8512667-5.jpg"
                alt="Botanist research"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 "
              />
            </div>
          </div>

          {/* Our Mission Column */}
          <div className="flex flex-col space-y-6 p-6 md:p-10 text-[#1e293b]">
            <h2   className="text-3xl font-bold text-[#f8f8f8] font-['Roboto_Slab',_sans-serif]  pb-2 w-fit">
              Our Mission
            </h2>
            <div className="text-base leading-relaxed text-[#334155]">
              <p style={{ display: "-webkit-box", WebkitLineClamp: 10, WebkitBoxOrient: "vertical", overflow: "hidden" }}  className="text-[#f8f8f8] font-['Roboto_Slab',_sans-serif]">
                {about[0]?.mission}
              </p>
            </div>
            <div>
              {/* <a 
                href="https://niees.org.in/about-us/" 
                className="inline-block bg-[#046bd2] hover:bg-[#045cb4] text-white font-semibold px-6 py-2.5 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Read More
              </a> */}
              <button
                className="bg-[#61CE70] shadow-[9px_9px_10px_0_rgba(0,0,0,0.5)] rounded-[20px]  w-25 h-8.75 text-white hover:cursor-pointer font-semibold"
                onClick={() => navigate("/about-us/")}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
