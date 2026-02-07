import React from "react";
import { Link, useLocation } from "react-router-dom";
// 1. DOMPurify import seiyavum
import DOMPurify from "dompurify";

const ResearchPublication = () => {
  const location = useLocation();
  
  // Destructuring location.state
  const { title, author, description, journal } = location.state || {};

  // 2. Description-ai sanitize seiyavum (Only if description exists)
  const sanitizedDescription = description ? DOMPurify.sanitize(description) : "";

  return (
    <main className="min-h-screen bg-white font-['Roboto',_sans-serif] antialiased">
      <article className="max-w-[750px] mx-auto px-6 py-10 md:py-16">
        {/* Header Section */}
        <header className="mb-8 border-b border-gray-100 pb-8">
          <h1 className="text-[32px] md:text-[42px] font-bold leading-tight text-[#1e293b] mb-4">
            {title || "Research Publication"}
          </h1>
        </header>

        {/* Content Body */}
        <div className="space-y-6 text-[#334155] leading-[1.65] text-[16px]">
          {/* Author/Journal Info Box */}
          <div className="bg-[#f0f5fa] p-5 rounded-lg border-l-4 border-[#046bd2] shadow-sm">
            <p className="mb-2">
              <strong>Author:</strong> {author || "N/A"}
            </p>
            <p>
              <strong>Journal:</strong>{" "}
              <span className="italic font-medium text-[#1e293b]">
                {journal || "N/A"}
              </span>{" "}
            </p>
          </div>

          {/* DYNAMIC CONTENT FROM DATABASE */}
          {description ? (
            <div 
              className="dynamic-html-content prose max-w-none" // added 'prose' for better typography if using Tailwind Typography
              // 3. Sanitize panna content-ai inge pass seiyavum
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }} 
            />
          ) : (
            <p className="italic text-gray-400">No content available.</p>
          )}
        </div> 

        {/* Post Navigation */}
        <nav className="mt-12 pt-8 border-t border-gray-100">
          <Link to="/publications" className="group block text-right">
            <span className="text-[12px] font-bold text-[#046bd2] uppercase tracking-widest flex items-center justify-end gap-2">
              Back to Publications
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
};

export default ResearchPublication;