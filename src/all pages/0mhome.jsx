import React, { useState } from "react";
import Snav from "./1snav";
import Main from "./1smain";

function FullPage() {
  const [sectionRefs, setSectionRefs] = useState({});

  // Function to scroll to a section
  const scrollToSection = (id) => {
    if (sectionRefs[id]) {
      sectionRefs[id].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar - No Extra Space */}
      <div className="w-64 bg-gray-100 h-screen fixed top-0 left-0">
        <Snav scrollToSection={scrollToSection} />
      </div>

      {/* Main Content - No Extra Gap */}
      <div className="flex-grow ml-64 overflow-auto h-screen">
        <Main setSectionRefs={setSectionRefs} />
      </div>
    </div>
  );
}

export default FullPage;
