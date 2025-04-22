import React from "react";
import Main from "../pages/Home";
import Snav from "../components/Navbar";

function FullPage() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-white">
      <div className="w-full max-w-[80%] flex flex-col lg:flex-row">
        <div className="w-full lg lg:w-1/4 lg:sticky top-0 h-screen">
          <Snav />
        </div>

        <div className="w-full lg:w-3/4">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default FullPage;
