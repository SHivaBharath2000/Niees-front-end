import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { teamData } from "../../../State&Api/Api";

const MeetTheTeam = () => {
  const dispatch = useDispatch();
  
  // 1. Data-vai Redux-il irunthu edukkirom
  const team = useSelector((state) => state.Niees.team) || [];

  // 2. Data-vai sort mattrum slice seiya oru copy uruvakkugirom [...team]
  // Ithu thaan main fix. Direct-ah team.sort panna error varum.
  const teamMembers = [...team]
    .sort((a, b) => (a?.id || 0) - (b?.id || 0))
    .slice(0, 4);

  useEffect(() => {
    dispatch(teamData());
  }, [dispatch]);

  return (
    <section className="bg-[#FFf] py-[8%] px-[8%] font-['Roboto',_sans-serif]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-[#060606] drop-shadow-[4px_4px_11px_rgba(0,0,0,0.3)] font-['Roboto',_sans-serif] text-2xl md:text-3xl font-semibold leading-tight">
            Meet The Team
          </h2>
          <p className="text-[#334155] text-lg leading-[1.65]">
            Our dedicated team of researchers, scientists, and professionals
            work across diverse fields—geology, environmental science, climate
            change, GIS, agriculture, and urban studies. With a shared passion
            for innovation and interdisciplinary collaboration, we aim to create
            meaningful solutions for real-world environmental challenges.
          </p>
          <div className="pt-4">
            <a
              href="/about-us/"
              className="inline-flex items-center justify-center bg-[#61CE70] shadow-[9px_9px_10px_0_rgba(0,0,0,0.5)] rounded-[20px] w-[180px] h-[40px] text-white font-semibold transition-all hover:opacity-90"
            >
              Meet the Full Team
            </a>
          </div>
        </div>

        {/* Right Team Grid Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={member.id || index} // Unique ID payanpaduthuvathu nallathu
              className="bg-[#E1E1E1] h-[277px] w-[294px] p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="mb-4 h-[134px] w-[138px] rounded-[30px] overflow-hidden bg-gray-200 border-4 border-[#F0F5FA]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h6 className="mb-0 text-[#63BC55] font-bold">
                {member.name}
              </h6>
              <p className="text-[#7A7A7A] text-sm ">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;