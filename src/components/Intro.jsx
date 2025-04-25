import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PiDownloadSimple } from "react-icons/pi";

function Intro() {
  const [text] = useTypewriter({
    words: ["a Developer", "a Dreamer", "a Seeker", "an Explorer"],
    loop: true,
    delaySpeed: 2000, // Slightly increased delay for smoother transitions
  });

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div
      id="Intro"
      className="w-full min-h-screen bg-gradient-to-r from-slate-700 via-gray-800 to-gray-900 px-8 flex flex-col justify-center items-start gap-6"
    >
      <h2 className="text-white text-2xl font-light">{greeting}, I’m</h2>
      <h1 className="text-6xl font-bold text-white leading-tight">
        Aaditya Aryal
        <br />
        <span className="text-yellow-300 text-4xl">
          {text}
          <Cursor cursorStyle="|" />
        </span>
      </h1>

      <p className="text-white text-lg font-mono max-w-xl">
        Always there for codes, numbers, and ideas. I strive to create impactful
        digital experiences and solve complex problems with innovative
        solutions.
      </p>

      <button
        className="flex items-center border px-6 py-3 mt-6 border-white text-white hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:scale-105 transition-all duration-300"
        aria-label="Download CV"
      >
        Download CV <PiDownloadSimple className="ml-2" />
      </button>
    </div>
  );
}

export default Intro;
