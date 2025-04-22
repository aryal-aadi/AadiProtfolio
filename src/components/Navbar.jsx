import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Photo from "../imgs/Aaditya.jpg";

function Snav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      title: "Home",
      id: "Intro",
    },
    {
      title: "About",
      id: "AboutMe",
    },
    {
      title: "Services",
      id: "WhatIDO",
    },
    {
      title: "Skills",
      id: "Skills",
    },
    {
      title: "Education",
      id: "Edu",
    },
    {
      title: "Experience",
      id: "Exp",
    },
    {
      title: "Work",
      id: "Work",
    },
    {
      title: "Blog",
      id: "Blog",
    },
    {
      title: "Contacts",
      id: "Cont",
    },
  ];
  return (
    <>
      {/* Hamburger Icon - top left (mobile only) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <RxHamburgerMenu size={22} />
        )}
      </button>

      {/* Overlay background when menu is open on mobile */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar - Mobile Slide In */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-slate-100 shadow-md z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-start px-4 py-8 pt-16">
          <img
            src={Photo}
            alt="Aaditya Aryal"
            className="rounded-full h-32 w-32 object-cover border-2 border-blue-400"
          />
          <div className="mt-4 text-center">
            <p className="font-bold text-lg">Aaditya Aryal</p>
            <p className="text-sm text-blue-500">STUDENT</p>
            <p className="text-xs text-gray-600">FROM NEPAL</p>
          </div>

          <nav className="mt-8 w-full">
            {navItems.map((item, index) => (
              <div key={index} className="my-2">
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-sm py-2 font-medium text-gray-600 hover:font-bold hover:text-base hover:text-blue-400 transition-all cursor-pointer"
                  activeClass="text-blue-800 font-bold"
                  spy={true}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:flex flex-col items-center justify-start px-4 py-8 w-full h-full bg-slate-100 shadow-md transition-all duration-300">
        <img
          src={Photo}
          alt="Aaditya Aryal"
          className="rounded-full h-48 w-48 hover:h-64 hover:w-64 hover:border-red-700 object-cover border-2 border-blue-400 transition-all"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-xl"> Aaditya Aryal</p>
          <p className="text-sm text-blue-500"> STUDENT</p>
          <p className="text-xs text-gray-600"> FROM NEPAL </p>
        </div>

        <nav className="mt-5 w-full">
          {navItems.map((item, index) => (
            <div key={index} className="my-1">
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="block text-center text-sm py-2 font-medium text-gray-600 hover:font-bold hover:text-base hover:text-blue-400 transition-all cursor-pointer"
                activeClass="text-blue-800 font-bold"
                spy={true}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Snav;
