import React from "react";

function AboutMe() {
  return (
    <div className="px-7 py-3 w-full bg-slate-400 h-screen">
      <div>
        <div className="text-sm font-thin py-6">ABOUT ME</div>
        <div className="text-2xl font-semibold">WHO I AM ?</div>
      </div>

      <div className="py-10">
        <p>
          <span className="font-bold"> Hi I'm Aaditya Aryal</span>A passionate
          programmer with experience in full-stack web development, UI/UX
          design, game development, and mobile app development. Currently
          pursuing a diploma in Computer Programming at Conestoga College, I am
          eager to explore Data Science and Quantum Computing.
        </p>
        {/* <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p> */}
      </div>
      {/*<div className="py-10 flex justify-around">
        graphic design, software, web design, application
        <div className="w-36 h-36 bg-red-500"></div>
        <div className="w-36 h-36 bg-red-500"></div>
        <div className="w-36 h-36 bg-red-500"></div>
      </div>
      <div className="bg-yellow-400 w-full h-fit p-4">
        <div className="pb-5">
          <p>
            <span>I'm happy to tell you&nbsp;</span>
            <span>that 300+ projects done succesfully</span>
          </p>
        </div>
        <div className="w-fit h-fit border-[1.5px] px-2 py-1 cursor-pointer">
          HIRE ME
        </div>
      </div>*/}
    </div>
  );
}

export default AboutMe;
