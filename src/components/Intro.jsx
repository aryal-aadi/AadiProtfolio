import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PiDownloadSimple } from "react-icons/pi";

function Intro() {
  const [text] = useTypewriter({
    words: ["a Developer", "a Dreamer", "a Seeker", "an Explorer"],
    loop: true,
    delaySpeed: 1500,
  });

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div
      id="Intro"
      className="w-full min-h-screen bg-gradient-to-r from-slate-700 to-gray-900 px-8 flex flex-col justify-center items-start gap-4"
    >
      <h2 className="text-white text-xl font-light">{greeting}, I’m</h2>
      <h1 className="text-6xl font-bold text-white leading-tight">
        Aaditya Aryal
        <br />
        <span className="text-yellow-300 text-4xl">
          {text}
          <Cursor cursorStyle="|" />
        </span>
      </h1>

      <p className="text-white text-[18px] font-mono">
        always there for codes, numbers, and ideas
      </p>

      <button className="flex items-center border px-5 py-2 mt-4 scale-105 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
        Download CV <PiDownloadSimple className="ml-2" />
      </button>
    </div>
  );
}

export default Intro;
