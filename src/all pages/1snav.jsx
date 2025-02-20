import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import Photo from "../imgs/Aaditya.jpg";

function Snav() {
  const [hoverData, setHoverData] = useState(false);
  const navData = [
    {
      title: "Home",
      id: "",
      pathname: "/",
    },
    {
      title: "About",
      id: "aboutMe",
      pathname: "/",
    },
    {
      title: "Services",
      id: "whatIdo",
      pathname: "/",
    },
    {
      title: "Skills",
      id: "mySkills",
      pathname: "/",
    },
    {
      title: "Education",
      id: "myEdu",
      pathname: "/",
    },
    {
      title: "Experience",
      id: "myExp",
      pathname: "/",
    },
    {
      title: "Work",
      id: "myWork",
      pathname: "/",
    },
    {
      title: "Blog",
      id: "myBlog",
      pathname: "/",
    },
    {
      title: "Contacts",
      id: "myCont",
      pathname: "/",
    },
  ];
  return (
    <div className="w-1/6 h-screen fixed">
      <div className=" h-screen">
        <div className="w-full h-full m-auto bg-slate-200 flex flex-col items-center justify-center px-4 py-4 text-black">
          <img src={Photo} className="rounded-full h-28 w-28" alt="nothing" />
          <div className="py-4 flex flex-col items-center justify-center">
            <p className="font-bold text-xl cursor-pointer">Aaditya Aryal</p>
            <p>
              <span className="cursor-pointer font-medium text-blue-400 text-xs hover:underline transition-all duration-700 ">
                STUDENT
              </span>
              <span className="text-xs font-light"> FROM NEPAL</span>
            </p>
          </div>

          {navData.map((val, i) => {
            return (
              <div
                className="py-2 flex flex-col justify-center items-center"
                key={i}
                onMouseLeave={() => setHoverData(false)}
                onMouseEnter={() => {
                  setHoverData(true);
                  setHoverData(val.title);
                }}
              >
                <div className="text-sm text-gray-600 hover:text-blue-500 transition-all duration-700  cursor-pointer">
                  <Link to={val.id} smooth={true} duration={500}>
                    {val.title}

                    <div
                      className={`w-full h-[1.5px] bg-blue-500 transition-all duration-300 ${
                        hoverData === "true" || hoverData === val.title
                          ? "scale-100"
                          : "scale-0"
                      }`}
                    ></div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Snav;
