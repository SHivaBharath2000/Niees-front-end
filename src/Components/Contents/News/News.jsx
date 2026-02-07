import React from "react";
import { newsData } from "../../../State&Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const News = () => {

  
  //Initially get the data
  const newsEntries = useSelector((state) => state.Niees.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsData());
  }, [dispatch]);

  // newsEntries = [
  //   {
  //     id: 1,
  //     text: "1, Dr. Ramamoorthy Ayyamperumal delivered a keynote address on the topic 'How to Write a Scientific Research Paper' at Annamalai University, Chidambaram, on 27th August 2024. The session provided valuable insights into the structure, clarity, and ethics of scientific writing, equipping participants with essential skills for publishing in reputed journals. This initiative reflects our commitment to promoting high-quality research and academic excellence.",
  //     image: "https://niees.org.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-22-at-2.28.00-PM-e1753207015398.jpeg",
  //     venue: "Annamalai University, Chidambaram, Tamil Nadu, India.",
  //   },
  //   {
  //     id: 2,
  //     text: "2, Dr. Ramamoorthy Ayyamperumal presented a paper titled 'Effects of Human Activities on Mountain Forests and Mercury Pollution During the Middle Holocene' at the Indian Colloquium on Micropaleontology and Stratigraphy, event held in University of Delhi, October 17 to 19, 2024. This presentation highlighted our ongoing efforts of Human activities, past environments, Historical timelines, paleoenvironmental changes and the long-term impact of anthropogenic activities on sensitive mountain ecosystems.",
  //     image: "https://niees.org.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-22-at-2.28.11-PM.jpeg",
  //     venue: "ICMS-2024, University of Delhi, New Delhi, India.",
  //   },
  //   {
  //     id: 3,
  //     text: "3, Dr. Ramamoorthy Ayyamperumal, delivered a Keynote (Eminent Speaker) address on Advanced Agricultural and Drone Technologies at PMC Tech, Hosur, Tamil Nadu, India. We are pleased to share that our research faculty recently visited PMC Tech, Hosur, and delivered a keynote address at a prestigious event held on July 18–19, 2025. The theme of the keynote was: 'Advanced Technology in Addressing the Agricultural Crisis'. This speech highlighted the cutting-edge innovations and strategic interventions to tackle current challenges in agriculture, including climate resilience, resource-efficient farming, and the integration of digital tools such as drones, IoT, and AI in precision farming. The session was well-received by students, researchers, and academic staff, opening avenues for collaborative research, student internships, and technological exchange between institutions. We thank PMC Tech for their kind invitation and reception accorded to Dr.Ramamoorthy Ayyamperumal and look forward to strengthening academic-industry linkages for sustainable geo-agricultural development.",
  //     image: "https://niees.org.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-22-at-2.28.21-PM-1.jpeg",
  //     extraImage: "https://niees.org.in/wp-content/uploads/2025/07/d7aad57f-0a10-4156-b86b-04f6d4954fc0.jpg",
  //     venue: "PMC Tech, Hosur, Tamil Nadu, India.",
  //   },
  // ];

  return (
    <div className="bg-white py-20 font-sans selection:bg-blue-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="space-y-32">
          {newsEntries.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 text-[#444] text-[16px] leading-[1.8] text-justify font-['Roboto',_sans-serif] pt-2">
                <div className="whitespace-pre-line">{item.text}</div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-[45%] flex flex-col items-center">
                <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={item.image}
                    alt="Event"
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>

                {item.extraImage && (
                  <div className="mt-4 rounded-lg overflow-hidden shadow-lg border border-gray-100 w-full">
                    <img
                      src={item.extraImage}
                      alt="Event Detail"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}

                <p className="mt-4 text-[#1e293b] text-[14px] font-bold text-center">
                  {item.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
