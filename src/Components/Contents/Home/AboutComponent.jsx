import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { aboutData, homeLeadersData, homeLogoData, homePhotosData } from "../../../State&Api/Api";

export default function AboutComponent() {
  const dispatch = useDispatch();
  
  // Redux-ilirundhu data edukkirom
  const about = useSelector((state) => state.Niees.about);
  const logos = useSelector((state) => state.Niees.homeLogo);

  useEffect(() => {
    // Component load aagumpodhu ella data-vaiyum fetch panrom
    dispatch(aboutData());
    dispatch(homeLeadersData());
    dispatch(homeLogoData());
    dispatch(homePhotosData());
  }, [dispatch]);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto flex flex-col w-full h-full ml-[10px] mt-[70px] md:flex-row">
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://niees.org.in/wp-content/uploads/2025/04/niees14-e1744433545758.jpg"
            alt="Environment"
            className="w-full h-full object-cover rounded-[23px] shadow-[15px_15px_10px_0_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 w-full px-14 py-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 [text-shadow:4px_6px_10px_rgba(0,0,0,0.3)]">
            About Us
          </h2>

          <strong className="text-[15px] leading-7 text-gray-800 font-semibold text-justify max-w-xl">
            {about && about[0]?.niees}
          </strong>

          {/* BUTTON */}
          <div className="mt-8 [text-shadow:5px_5px_10px_rgba(0,0,0,0.5)]">
            <a
              href="/about-us/"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-[120px] shadow-md hover:bg-green-700 transition"
            >
              Read More
            </a>
          </div>

          {/* PARTNERS */}
          <h6 className="mt-14 mb-6 font-bold text-gray-900">
            Our Partners logo:
          </h6>

          {/* Logo data-vai props-ah anupuroam */}
          {logos && logos.length > 0 && <PartnerCarousel logos={logos} />}
        </div>
      </div>
    </section>
  );
}

// PartnerCarousel component
const PartnerCarousel = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite scroll kaaga array-vai double panrom
  const infiniteLogos = [...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="bg-[#f0f5fa] py-12 overflow-hidden rounded-xl">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-loop-scroll group-hover:paused">
            {infiniteLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-4" style={{ width: "200px" }}>
                <img 
                  src={logo.src} 
                  alt={logo.alt || "partner logo"} 
                  className="w-full h-auto object-contain" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 space-x-3">
          {logos.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#20ed83] w-6" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-loop-scroll {
          animation: loop-scroll 20s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};