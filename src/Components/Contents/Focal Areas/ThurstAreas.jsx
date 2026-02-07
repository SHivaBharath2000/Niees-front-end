import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { focalData } from "../../../State&Api/Api";

const ThrustAreas = () => {

  const dispatch=useDispatch()

  //Call the focal area api for get the focal data
    useEffect(()=>{
       dispatch(focalData())
    },[dispatch])
    
  const areas=useSelector((state)=>state.Niees?.areas)

  return (
    <div className="bg-[#fff] py-[100px] font-['-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica_Neue,sans-serif']">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="
  font-['Roboto',_sans-serif] 
  text-4xl 
  font-bold 
  text-center
  text-[#030303] 
  mix-blend-multiply 
  [text-shadow:6px_4px_20px_rgba(0,0,0,0.3)]
"
        >
          Thrust Areas
        </h2>

        <div className="space-y-32">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center py-16 px-4 ${
                 index%2 != 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-[60%] z-0">
                <div className="rounded-[30px] h-[500px] w-full max-w-[800px] shadow-[16px_18px_18px_18px_rgba(0,0,0,0.5)] overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover min-h-[400px]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Overlapping Dark Card */}
              <div
                className={`
                  w-full md:w-[35%] max-w-[500px] bg-[#212121] p-10 
                  rounded-lg shadow-[0_5px_50px_0_rgba(33,33,33,0.15)] 
                  transition-all duration-300 hover:shadow-2xl 
                  flex flex-col justify-center relative z-10 space-y-6
                  ${
                    index%2 == 0
                      ? "md:ml-[-100px] items-end text-right" // Box Left -> Align Right
                      : "md:mr-[-100px] items-start text-left" // Box Right -> Align Left
                  }
                `}
              >
                {/* Heading */}
                <h3 className="font-['Roboto',_sans-serif] text-2xl font-[600] text-white leading-tight">
                  {area.title}
                </h3>

                {/* White Divider - Start position adjusted for alignment */}
                <div
                  className={`
                  h-[2px] w-[300px] bg-[#fff] relative 
                  ${
                    index%2 == 0
                      ? "right-[-40px]" // Sticks out the right side
                      : "left-[-40px]" // Sticks out the left side
                  }
                `}
                ></div>

                {/* Description */}
                <div className="font-['Roboto',_sans-serif] text-[16px] leading-[1.65]">
                  <p className="text-[#BDBDBD]">
                    <strong className="text-[#BDBDBD] font-bold">
                      Our {area.title}
                    </strong>{" "}
                    {area.description}
                  </p>
                </div>

                {/* Green Button */}
                <div className="pt-2">
                  <Link
                    to="/focal-area/content"
                    state={{
                        coreAreas:area.content,
                        img:area.image,
                        heading:area.title,
                        last:area.contentLast,
                        desc:area.contentdesc
                    }}
                    className="inline-flex  font-['Roboto',_sans-serif] items-center justify-center bg-[#61CE70] text-white text-sm font-bold px-8 py-3 rounded-full transition-all duration-300 hover:hover:scale-105 shadow-lg"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThrustAreas;
