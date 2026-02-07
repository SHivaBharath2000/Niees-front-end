import React from 'react';
import { 
  FaYoutube, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp, 
  FaChevronUp 
} from 'react-icons/fa'; // npm install react-icons
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { contactsData } from '../../State&Api/Api';




const Footer = () => {
  const paths=["/","/about-us/","/focal-areas/","/gallery/","/news/","/publications/" ,"/contact-us/","/line-up/"]
  const Social=['']

   //Initially get the data from the database
    const dispatch=useDispatch()
    const contact=useSelector((state)=>state.Niees.contacts)
    useEffect(()=>{
      dispatch(contactsData())
     console.log(contact) 
    },[dispatch])
  
  return (
    <div className="font-sans">
    

      {/* 2. MAIN FOOTER SECTION */}
      <footer className="bg-[#C1E9B8] pt-16 pb-12 px-6 text-[#334155]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Logo & Motto */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src= {contact[0]?.logo}
              alt="NIEES Logo" 
              className="w-85 mb-6 max-w-full h-auto"
            />
            <h6 className="text-center md:text-left font-semibold  text-[#1e293b]  max-w-xs">
              "Innovating Earth’s Future through Research & Action"
            </h6>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h2 className="text-3xl font-medium text-[#1e293b] mb-6">Contact Info:</h2>
            <div className="space-y-4 text-lg">
              <p> {contact[0]?.address}</p>
              <p className="font-semibold text-[#1e293b] text-base">Phone No: {contact[0]?.phone_no}</p>
              <p className="font-semibold text-[#1e293b] text-base">Email: {contact[0]?.email}</p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1e293b] mb-6">Quick Links:</h2>
            <ul className="grid grid-cols-1 gap-2 text-base">
              {['Home', 'About Us', 'Focal areas', 'Gallery', 'News', 'Publications', 'Contact Us', 'Lineup'].map((link,index) => (
                <li key={link}>
                  <a href={paths[index]} className="text-[#44d434] hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* 3. BOTTOM COPYRIGHT BAR */}
      <div className="bg-black text-white py-4 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center relative">
          
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             
             <p className="font-bold"> {contact[0]?.year_data}</p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            
            <a href= {contact[0]?.youtube} className="flex items-center gap-2"><FaYoutube className="text-red-600 text-lg"/> youtube</a>
            <a href={contact[0]?.twitter}  className="flex items-center gap-2"><FaTwitter className="text-blue-400 text-lg"/> Twitter</a>
            <a href={contact[0]?.instagram} className="flex items-center gap-2"><FaInstagram className="text-pink-500 text-lg"/> Instagram</a>
            <a href={contact[0]?.linkedin} className="flex items-center gap-2"><FaLinkedin className="text-blue-700 text-lg"/> Linkedin</a>
          </div>

          {/* Scroll to Top Button */}
          {/* <button className="absolute -top-10 right-0 bg-[#046bd2] p-3 text-white">
            <FaChevronUp />
          </button> */}
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
      `}</style>
    </div>
  );
};

export default Footer;