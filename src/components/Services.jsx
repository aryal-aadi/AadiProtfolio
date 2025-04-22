import React from "react";

function WhatIDO() {
  return (
    <div className="w-full h-screen bg-slate-300 px-7 py-3">
      <div>
        <div className="text-sm font-thin py-6">WHAT I DO</div>
        <div className="text-2xl font-semibold">
          HERE ARE SOME OF MY
          <br /> EXPERTISE
        </div>
      </div>
      <div className="expertise my-auto py-20 grid grid-rows-2 grid-cols-3 gap-7">
        <div className="w-36 h-36 bg-red-500"></div>
        <div className="w-36 h-36 bg-red-500"></div>
        <div className="w-36 h-36 bg-red-500"></div>
        <div className="w-36 h-36 bg-red-500"></div>
        <div className="w-36 h-36 bg-red-500"></div>
        <div className="w-36 h-36 bg-red-500"></div>
      </div>
    </div>
  );
}

export default WhatIDO;
