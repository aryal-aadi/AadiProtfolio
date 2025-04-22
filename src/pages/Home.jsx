import React from "react";
import { PiDownloadSimple } from "react-icons/pi";
import AboutMe from "../components/About";
import WhatIDO from "../components/Services";
import Skills from "../components/Skills";
import Edu from "../components/Education";
import Exp from "../components/Experience";
import Cont from "../components/Contact";
function Main() {
  return (
    <div className="pt-16 lg:pt-0">
      <div className="w-3/4 h-screen relative left-64">
        <div className="w-full h-full bg-slate-500 px-7 flex flex-col justify-center gap-2">
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
        <div className="py-0">
          <AboutMe />
          <WhatIDO />
          <Skills />
          <Edu />
          <Exp />
          <Cont />
        </div>
      </div>
    </div>
  );
}
export default Main;
