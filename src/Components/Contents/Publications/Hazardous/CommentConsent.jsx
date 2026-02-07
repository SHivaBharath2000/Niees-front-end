import React, { useState } from 'react';

const CommentConsent = () => {
  const [saveDetails, setSaveDetails] = useState(false);

  return (
    <div className="bg-white  font-['Roboto',_sans-serif] antialiased">
      {/* Container matching your --wp--custom--ast-content-width-size: 750px */}
      <div className="max-w-[750px] mx-auto px-6 py-4">
        
        {/* Consent Section matching the .comment-form-cookies-consent class */}
        <div className="flex items-start gap-3 mb-[1.75em] group cursor-pointer">
          <div className="relative flex items-center h-6">
            <input
              id="wp-comment-cookies-consent"
              name="wp-comment-cookies-consent"
              type="checkbox"
              checked={saveDetails}
              onChange={() => setSaveDetails(!saveDetails)}
              className="w-4 h-4 mt-1 rounded border-[#D1D5DB] text-[#046bd2] focus:ring-[#046bd2] cursor-pointer transition-all"
            />
          </div>
          
          <label 
            htmlFor="wp-comment-cookies-consent" 
            className="text-[16px] leading-[1.65] text-[#334155] select-none cursor-pointer hover:text-[#1e293b] transition-colors"
          >
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* CSS Variable Reference Note (Optional for your dev reference) */}
        {/* --ast-global-color-0: #046bd2 (Primary Blue)
            --ast-global-color-3: #334155 (Body Text)
            --wp--custom--ast-content-width-size: 750px
        */}
      </div>
    </div>
  );
};

export default CommentConsent;