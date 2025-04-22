import React from "react";

import Intro from "../components/Intro";
import AboutMe from "../components/About";
import WhatIDO from "../components/Services";
import Skills from "../components/Skills";
import Edu from "../components/Education";
import Exp from "../components/Experience";
import Cont from "../components/Contact";
function Main() {
  return (
    <div className="pt-16 lg:pt-0">
      <Intro />
      <AboutMe />
      <WhatIDO />
      <Skills />
      <Edu />
      <Exp />
      <Cont />
    </div>
  );
}
export default Main;
