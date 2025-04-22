import React from "react";
import { PiDownloadSimple } from "react-icons/pi";

function Intro() {
  return (
    <div
      id="intro"
      className="w-full min-h-screen bg-slate-500 px-7 flex flex-col justify-center gap-2"
    >
      <div className="ima font-main text-5xl font-extrabold">
        I Am <br /> a Seeker
      </div>
      <div className="intro text-white text-[18px] font-extralight font-mono">
        ya this is it, below all are not true
      </div>
      <div className="flex border w-fit px-4 py-2 cursor-pointer content-evenly gap-2 border-black hover:border-white hover:text-white transition-all duration-300">
        <p className="">Download CV</p>
        <div className="downCVlogo">
          <PiDownloadSimple className="text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
