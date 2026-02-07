// HeaderBar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsData } from "../../State&Api/Api";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  // Navigation items (internal routes)
  const items = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Focal areas", href: "/focal-areas/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "News", href: "/news/" },
    { label: "Publications", href: "/publications/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "Lineup", href: "/line-up/" },
  ];

  //Initially get the data from the database
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.Niees.contacts);
  useEffect(() => {
    dispatch(contactsData());
    console.log(contact);
  }, [dispatch]);

  return (
    <div className="w-full font-sans" id="header">
      {/* Top black contact bar */}
      <div className="w-full bg-black text-[13px] text-white flex items-center justify-between px-6 py-1">
        <h6 className="ml-10 min-h-[50px] text-[14px] pt-[10px] font-bold">
          <span className="text-[#b8e6bd]">Email: {contact[0]?.email}</span> |{" "}
          <span className="text-[#b8e6bd]">
            Phone No: {contact[0]?.phone_no}
          </span>
        </h6>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {/* X (Twitter) */}
          <a
            href={contact[0]?.twitter}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#557dbc] hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current"
            >
              <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={contact[0]?.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E1306C] hover:scale-110 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 fill-current"
            >
              {/* Instagram icon sariyaana path ithu thaan */}
              <path d="M224.1 141c-63.5 0-114.9 51.4-114.9 114.9s51.4 114.9 114.9 114.9S339 319.4 339 255.9 287.6 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href={contact[0]?.youtube}
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B64F6] hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-current"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={contact[0]?.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1285fe] hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 fill-current"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main green nav bar */}
      <div className="w-full bg-[#C1E9B8] px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <img
            src={contact[0]?.logo}
            alt="NIEES logo"
            className="w-[200px] md:w-[360px]"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-wrap gap-6 font-['Anek_Tamil',sans-serif] text-[16px] leading-[1.65] text-slate-700">
            {items.map((item) => (
              <li key={item.label} className="font-bold">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `inline-block py-2 transition-transform duration-150 hover:scale-105 no-underline ${
                      isActive
                        ? "text-[#0E4FA1] font-bold"
                        : "text-slate-800 hover:text-[#0E4FA1] hover:font-semibold"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-[#0E4FA1] font-bold text-xl mt-2"
            onClick={() => setShowMenu((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <ul className="flex flex-col gap-2 mt-4 font-bold font-['Anek_Tamil',sans-serif] text-[16px] text-slate-700 md:hidden">
            {items.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `inline-block py-2 transition-transform duration-150 hover:scale-105 no-underline  ${
                      isActive
                        ? "text-[#0E4FA1] font-bold"
                        : "text-slate-800 hover:text-[#0E4FA1] hover:font-semibold"
                    }`
                  }
                  onClick={() => setShowMenu(false)} // close menu after navigation
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
