import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutData, teamData } from "../../../State&Api/Api";
import { Link } from "react-router-dom";

const About = () => {
  //Initially get the data from the database
  const dispatch = useDispatch();
  const teamMembers = useSelector((state) => state.Niees.team);
  const about = useSelector((state) => state.Niees.about);
  useEffect(() => {
    dispatch(aboutData());
    dispatch(teamData());
  }, [dispatch]);
  // const  = [
  //   {
  //     name: "Dr. Ramamoorthy Ayyamperumal",
  //     role: "Research Faculty",
  //     image: "https://niees.org.in/wp-content/uploads/2025/04/Ram-Photo-206x300.jpeg",
  //     width: "w-[106px]",
  //     height: "h-[141px]"
  //   },
  //   {
  //     name: "Dr. Mohana Perumal",
  //     role: "Research Faculty",
  //     image: "https://niees.org.in/wp-content/uploads/2025/04/1.-P.-Mohana-photo.jpg",
  //    width: "w-[106px]",
  //     height: "h-[141px]"
  //   },
  //   {
  //     name: "Mr. Manikanda Bharath",
  //     role: "Research Faculty",
  //     image: "https://niees.org.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-11-at-4.38.03-PM.jpeg",
  //    width: "w-[106px]",
  //     height: "h-[141px]"
  //   },
  //   {
  //     name: "Dr. Balamurugan Paneerselvam",
  //     role: "Visiting Research Faculty",
  //     image: "https://niees.org.in/wp-content/uploads/2025/06/balamurugan.jpeg",
  //     width: "w-[106px]",
  //     height: "h-[141px]" // Updated to requested size
  //   }
  // ];

  return (
    <div className="font-['-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica_Neue,sans-serif'] text-[#334155] leading-[1.65]">
      {/* SECTION: About NIEES */}
      <section className="max-w-[1200px] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="font-['Roboto',_sans-serif] text-3xl md:text-4xl font-[700] text-[#1e293b]">
            About NIEES
          </h2>
          <div className="text-[#7A7A7A]">
            <p className="font-['Roboto',_sans-serif] font-[700]">
              {about[0]?.niees}
            </p>
          </div>
        </div>
        <div className="rounded-[30px] shadow-[16px_18px_10px_0_rgba(0,0,0,0.5)] overflow-hidden">
          <img
            src="https://niees.org.in/wp-content/uploads/2025/04/niees15-1-1024x683.jpg"
            alt="About NIEES"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* SECTION: Our Vision */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[30px] shadow-[16px_18px_10px_0_rgba(0,0,0,0.5)] overflow-hidden">
            <img
              src="https://niees.org.in/wp-content/uploads/2025/04/niees18-1024x696.jpeg"
              alt="Our Vision"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-['Roboto',_sans-serif] text-3xl md:text-4xl font-[700] text-[#1e293b]">
              Our Vision
            </h2>
            <p className="font-['Roboto',_sans-serif] text-[#7A7A7A]">
              <strong className="text-[#7A7A7A]">{about[0]?.vision}</strong>,
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Our Mission */}
      <section className="max-w-[1200px] mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h2 className="font-['Roboto',_sans-serif] text-3xl md:text-4xl font-[700] text-[#1e293b]">
            Our Mission
          </h2>
          <div className="font-['Roboto',_sans-serif] text-[#7A7A7A] space-y-4">
            <p>
              <strong className="text-[#7A7A7A]">{about[0]?.mission}</strong>
            </p>
          </div>
        </div>
        <div className="rounded-[30px] shadow-[16px_18px_10px_0_rgba(0,0,0,0.5)] overflow-hidden">
          <img
            src="https://niees.org.in/wp-content/uploads/2025/04/niees16-1-1024x683.jpg"
            alt="Our Mission"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* SECTION: Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h2 className="[text-shadow:0_0_5px_rgba(0,0,0,0.3)] font-['Roboto',_sans-serif] text-[#1B1B1B] font-[700] text-3xl md:text-4xl mb-8">
            Meet Our Talented Team
          </h2>

          <p className="max-w-2xl mx-auto font-['Roboto',_sans-serif] text-[#7A7A7A] mb-12">
            “A <strong>passionate team</strong> of researchers and experts
            committed to advancing innovation in Earth and Environmental
            Sciences, driving sustainable development through impactful
            research,
            <strong> education, and collaboration.</strong>“
          </p>

          <div className="flex flex-wrap justify-center items-start gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
              >
                {/* Image Box */}
                <div
                  className={`w-[106px] h-[141px] rounded-[30px] shadow-[16px_18px_10px_0_rgba(0,0,0,0.5)] overflow-hidden bg-slate-200`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div className="mt-6 text-center max-w-[250px]">
                  <Link to="/about-profile/" state={{ member: member }}>
                    <h3 className="font-['Roboto',_sans-serif] font-bold text-[#6EC1E4] text-xm leading-tight">
                      {member.name}
                    </h3>
                  </Link>
                  <p className="font-['Roboto',_sans-serif] font-[400] text-[#334155] mt-1 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
