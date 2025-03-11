import React from "react";
import Photo from "../imgs/Aaditya.jpg";

function Snav({ scrollToSection }) {
  const navData = [
    { title: "Intro", id: "intro" },
    { title: "About", id: "aboutMe" },
    { title: "Services", id: "whatIdo" },
    { title: "Skills", id: "mySkills" },
    { title: "Education", id: "myEdu" },
    { title: "Experience", id: "myExp" },
    { title: "Contacts", id: "myCont" },
  ];

  return (
    <div className="w-1/6 h-screen fixed bg-slate-200 flex flex-col items-center justify-center px-4 py-4 text-black">
      {/* Profile Section */}
      <img src={Photo} className="rounded-full h-28 w-28" alt="Profile" />
      <div className="py-4 flex flex-col items-center">
        <p className="font-bold text-xl cursor-pointer">Aaditya Aryal</p>
        <p>
          <span className="cursor-pointer font-medium text-blue-400 text-xs hover:underline transition-all duration-700">
            STUDENT
          </span>
          <span className="text-xs font-light"> FROM NEPAL</span>
        </p>
      </div>

      {/* Navigation Links */}
      {navData.map((val, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(val.id)}
          className="text-sm text-gray-600 hover:text-blue-500 transition-all duration-700 cursor-pointer py-2"
        >
          {val.title}
        </button>
      ))}
    </div>
  );
}

export default Snav;
