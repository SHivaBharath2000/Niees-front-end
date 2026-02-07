import React from "react";
import { FaChevronUp } from "react-icons/fa";

function Bottom() {
  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button className="absolute -top-10 right-0 bg-[#046bd2] p-3 text-white rounded-2xl hover:cursor-pointer">
      <FaChevronUp />
      </button>
    </div>
  );
}

export default Bottom;
