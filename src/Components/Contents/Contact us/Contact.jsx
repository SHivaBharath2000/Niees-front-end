import React from "react";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { contactsData } from '../../../State&Api/Api';

const Contact = () => {

  //Initially get the data from the database
    const dispatch=useDispatch()
    const contact=useSelector((state)=>state.Niees.contacts)
    useEffect(()=>{
      dispatch(contactsData())
     console.log(contact) 
    },[dispatch])
  
  return (
    <div className="bg-white p-8 font-['Roboto',_sans-serif]">
      {/* Main Container:
          - max-width: 75% 
          - border-right: 1px solid #111111 
          - padding-right: 72px
      */}
      <div className="flex flex-col items-start justify-start w-full max-w-[75%] ml-[10%] min-h-[222px] font-['Roboto',_sans-serif] border-r border-[#111111] pr-[72px] font-['-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica_Neue,sans-serif'] selection:bg-blue-100">
        
        {/* TOP SECTION: Header & Description */}
        <div className="text-[#1e293b] w-full">
          <h2 className="text-[1.875rem] font-[600] leading-[1.3em] text-[#1e293b] mb-[20px] mt-0 ml-0 mr-0 [word-break:break-word]">
            <br />
            Contact Us
          </h2>
          <p className="text-[#334155] text-base leading-[1.65] mb-6">
            Start your journey with us — contact now.
          </p>
        </div>

        {/* DIVIDER 1 */}
        <div className="w-full border-t border-[#111111] mb-8"></div>

        {/* MIDDLE SECTION: Address (Full Width within container) */}
        <div className="flex items-start gap-4 text-[#334155] w-full mb-8">
          <div className="mt-1 text-[#0f0f10] w-5 h-5 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-[#1e293b] uppercase tracking-wider text-sm mb-1">Address:</p>
            <p className="leading-[1.65]">
              {contact[0]?.address}
            </p>
          </div>
        </div>

        {/* DIVIDER 2 */}
        <div className="w-full border-t border-[#111111] mb-8"></div>

        {/* BOTTOM SECTION: Phone & Email (Side-by-Side Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-8">
          {/* Phone Block */}
          <div className="flex items-start gap-4 text-[#334155]">
            <div className="mt-1 text-[#040404] w-5 h-5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1e293b] uppercase tracking-wider text-sm mb-1">Phone:</p>
              <p className="leading-[1.65]"> {contact[0]?.phone_no}</p>
            </div>
          </div>

          {/* Email Block */}
          <div className="flex items-start gap-4 text-[#334155] border-l border-[#111111] pl-8 md:pl-12">
            <div className="mt-1 text-[#000000] w-5 h-5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1e293b] uppercase tracking-wider text-sm mb-1">Email:</p>
              <p className="leading-[1.65]"> {contact[0]?.email}</p>
            </div>
          </div>
        </div>

        {/* DIVIDER 3 (Final bottom line as seen in image) */}
        <div className="w-full border-t border-[#111111]"></div>

      </div>
    </div>
  );
};

export default Contact;