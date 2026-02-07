import React from 'react';
import { useSelector } from 'react-redux';
const ThoughtLeaders = () => {
   const leaders=useSelector((state)=>state.Niees.homeLeaders)

  // leaders = [
  //   { name: "Dr.S Raju", position: "Geological Survey of India (Retd)", img: "https://niees.org.in/wp-content/uploads/2025/04/raju-150x150.jpg" },
  //   { name: "Prof.R.S.Kumar", position: "Annamalai University, Chidambaram", img: "https://niees.org.in/wp-content/uploads/2025/04/R.S.-Kumar-150x150.jpg" },
  //   { name: "Prof.G.Bhaskaran (Retd)", position: "University of Madras, Chennai", img: "https://niees.org.in/wp-content/uploads/2025/04/Bhaskaran-Retd-150x150.jpg" },
  //   { name: "Dr.Renuka Sharma", position: "SGT University, Haryana", img: "https://niees.org.in/wp-content/uploads/2025/04/Renuka-Sharma-150x150.jpg" },
  //   { name: "Prof.Neptune Srimal", position: "Florida International University, USA", img: "https://niees.org.in/wp-content/uploads/2025/04/Prof-Neptune-Srimal-150x150.jpg" },
  //   { name: "Prof.Ravindran Balasubramani", position: "Kyonggi University, Korea", img: "https://niees.org.in/wp-content/uploads/2025/04/Ravindran-Balasubramani-150x150.jpg" },
  //   { name: "Prof.Rajendra Prasad Singh", position: "Southeast University, China", img: "https://niees.org.in/wp-content/uploads/2025/04/rajendra-prasad-singh-150x150.jpg" },
  //   { name: "Prof.Umesh Chandra Dumka", position: "ARIES, India", img: "https://niees.org.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-20-at-08.28.53-e1745125724664-150x150.jpeg" },
  //   { name: "Dr.Zhenhua Zhang", position: "Lanzhou University, China", img: "https://niees.org.in/wp-content/uploads/2025/04/Zhenhua-Zhang-150x150.jpg" },
  //   { name: "Dr. Kuan Shiong Khoo", position: "Yuan Ze University, Taiwan", img: "https://niees.org.in/wp-content/uploads/2025/05/taiwan_person-150x150.jpg" },
  // ];

  return (
    /* Main Container: bg-[#F5F5F5], padding-bottom: 50px */
    <section className="bg-[#F5F5F5] pb-[50px] pt-12 px-4 font-['-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica_Neue,sans-serif']">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* h2 Title: Astra Global Color 2 (#1e293b) */}
          <h2 className=" text-3xl font-['Roboto',_sans-serif] font-semibold text-[#030303] drop-shadow-[6px_3px_11px_rgba(0,0,0,0.3)] md:text-4xl font-bold mb-4">
            Thought Leaders Behind Us
          </h2>
          {/* Text Editor: Astra Global Color 3 (#334155) */}
          <p className="text-[#334155] font-['Roboto',_sans-serif] text-lg">
            “Trusted by respected minds who believe in our vision”
          </p>
        </div>

        {/* Leaders Grid: Replaces complex e-con layout with a responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="flex flex-col items-left text-center p-6   transition-transform duration-300 hover:-translate-y-2  "
            >
              {/* Leader Image: 150x150, circular style */}
              <div className="w-[150px] h-[150px] rounded-2xl overflow-hidden mb-5 text-left ">
                <img 
                  src={leader.img} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Leader Name: Astra Global Color 2 (#1e293b) */}
              <h2 className="text-xl font-bold tracking-wide text-left font-['Roboto',sans-serif] my-[5px] uppercase text-[#1e293b]  mb-2">
                {leader.name}
              </h2>

              {/* Position: Astra Global Color 3 (#334155) */}
              <h3 className="text-sm font-normal tracking-wider mt-[5px] mb-[10px] font-['Roboto',sans-serif] uppercase text-left text-[#334155]">
                {leader.position}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ThoughtLeaders;