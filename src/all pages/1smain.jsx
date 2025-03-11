import React, { useRef } from "react";
import Intro from "./1intro";
import AboutMe from "./2aboutme";
import WhatIDO from "./3whatido";
import Skills from "./4skill";
import Edu from "./5edu";
import Exp from "./6exp";
import Cont from "./9cont";

function Main({ setSectionRefs }) {
  // Creating Refs for Each Section
  const sections = {
    intro: useRef(null),
    aboutMe: useRef(null),
    whatIdo: useRef(null),
    mySkills: useRef(null),
    myEdu: useRef(null),
    myExp: useRef(null),
    myCont: useRef(null),
  };

  // Pass refs to parent
  setSectionRefs(sections);

  return (
    <div className="w-full h-screen overflow-auto">
      <div ref={sections.intro} id="intro" className="w-full min-h-screen">
        <Intro />
      </div>

      <div ref={sections.aboutMe} id="aboutMe" className="w-full min-h-screen">
        <AboutMe />
      </div>

      <div ref={sections.whatIdo} id="whatIdo" className="w-full min-h-screen">
        <WhatIDO />
      </div>

      <div
        ref={sections.mySkills}
        id="mySkills"
        className="w-full min-h-screen"
      >
        <Skills />
      </div>

      <div ref={sections.myEdu} id="myEdu" className="w-full min-h-screen">
        <Edu />
      </div>

      <div ref={sections.myExp} id="myExp" className="w-full min-h-screen">
        <Exp />
      </div>

      <div ref={sections.myCont} id="myCont" className="w-full min-h-screen">
        <Cont />
      </div>
    </div>
  );
}

export default Main;
