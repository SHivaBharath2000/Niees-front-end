import React from 'react';

const GeologyCard = () => {
  return (
    /* Outer Container providing space for the negative margin effect */
    <div className="w-full flex justify-center items-center py-16 px-4">
      
      {/* The Main Card 
         - bg-[#212121]: Matching your background-color: #212121
         - shadow-[0_5px_50px_0_rgba(33,33,33,0.15)]: Matching your box-shadow
         - md:ml-[-100px]: Replicating the --e-column-margin-left: -100px
      */}
      <div className="
        w-[25%]
        max-w-[500px] 
        bg-[#212121] 
        p-10 
        rounded-lg 
        shadow-[0_5px_50px_0_rgba(33,33,33,0.15)] 
        transition-all 
        duration-300 
        hover:shadow-2xl 
        md:ml-[-100px] 
        flex 
        flex-col 
        justify-center 
        items-start 
        space-y-6
        relative
        z-10
      ">
        
        {/* Heading: Using Roboto and White color for contrast on dark bg */}
        <h3 className="
          font-['Roboto',_sans-serif] 
          text-3xl 
          font-[600] 
          text-white 
          leading-tight
        ">
          Geology
        </h3>

        {/* Divider Segment */}
        <div className="w-92 h-[2px] relative left-[90px] bg-[#fff]"></div>

        {/* Text Content */}
        <div className="font-['Roboto',_sans-serif] text-[1rem] leading-[1.65]">
          <p className="text-[#BDBDBD]">
            <strong className="text-[#BDBDBD] font-bold">Our Geology</strong> content is designed to explore the dynamic processes shaping the Earth, from its core to the crust, and to investigate the rich history preserved in rocks, minerals, and landscapes. We aim to bridge foundational knowledge.
          </p>
        </div>

        {/* Button Wrapper */}
        <div className="pt-2">
          <a 
            href="https://niees.org.in/elementor-360/" 
            className="
              inline-flex 
              items-center 
              justify-center 
              bg-green-600 
              text-white 
              text-sm 
              font-semibold 
              px-8 
              py-3 
              rounded-full 
              transition-all 
              duration-300 
              hover:bg-green-600 
              hover:scale-105 
              shadow-lg
            "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeologyCard;