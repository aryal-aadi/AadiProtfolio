import React, { useEffect } from "react";
import "./About.css"; // Import custom CSS for animations

function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-target");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="AboutMe"
      className="relative w-full h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-parallax"></div>

      {/* Content */}
      <div className="text-center max-w-3xl z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-target">
          About Me
        </h2>
        <p className="text-lg text-gray-600 mb-8 fade-in-target">
          <span className="font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
            Hi, I'm Aaditya Aryal.
          </span>{" "}
          I am a passionate programmer with expertise in full-stack web
          development, UI/UX design, game development, and mobile app
          development. Currently pursuing a diploma in Computer Programming at
          Conestoga College, I am driven by a curiosity to explore emerging
          fields like Data Science and Quantum Computing.
        </p>
        <p className="text-lg text-gray-600 fade-in-target">
          My journey is fueled by a love for solving complex problems and
          creating impactful digital experiences. I thrive on learning new
          technologies and collaborating with others to bring innovative ideas
          to life.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
