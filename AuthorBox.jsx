import React from 'react';

const AuthorBox = () => {
  return (
    <section className="bg-white w-full max-w-[1200px] mx-auto flex items-center gap-[50px] pt-[3em] pr-[3em] pb-[3em] pl-[3em] mb-[2em] text-left border-b-0 font-['Roboto',_sans-serif] antialiased">
      
      {/* Bio Section - Using flex-1 to push the avatar to the right or maintain gap */}
      <div className="flex-1 min-w-0">
        <h1 className="text-[26px] md:text-[32px] font-semibold leading-tight text-[#1e293b] m-0">
          Author name: <span className="text-[#046bd2]">nivethaniees_admin</span>
        </h1>
        {/* Placeholder for Bio text if needed, matching --ast-global-color-3 */}
       
      </div>

      {/* Avatar Section */}
      <div className="flex-shrink-0">
        <div className="w-[120px] h-[120px] overflow-hidden rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 ring-4 ring-[#f0f5fa]">
          <img 
            alt="Author Avatar" 
            src="https://secure.gravatar.com/avatar/b0b260d2d6bcce69d28cca464787ba8a068dd7d2f4a9f3b860cf663b3811f031?s=240&d=mm&r=g" 
            className="w-full h-full object-cover"
            decoding="async"
          />
        </div>
      </div>

      {/* Internal CSS Reference for Developer:
          --ast-global-color-0: #046bd2 (Primary Blue)
          --ast-global-color-2: #1e293b (Title Color)
          --ast-global-color-3: #334155 (Body Color)
          --ast-global-color-4: #FFFFFF (Background)
          --ast-global-color-5: #F0F5FA (Subtle Ring)
      */}
    </section>
  );
};

export default AuthorBox;