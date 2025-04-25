import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaDatabase,
  FaGamepad,
  FaCloud,
} from "react-icons/fa";

function WhatIDO() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern websites using the latest technologies.",
      icon: <FaCode size={40} className="text-blue-500" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating user-friendly mobile applications for Android and iOS.",
      icon: <FaMobileAlt size={40} className="text-green-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces.",
      icon: <FaPaintBrush size={40} className="text-yellow-500" />,
    },
    {
      title: "Database Management",
      description:
        "Efficiently managing and optimizing databases for scalability.",
      icon: <FaDatabase size={40} className="text-red-500" />,
    },
    {
      title: "Game Development",
      description:
        "Developing engaging and interactive games for various platforms.",
      icon: <FaGamepad size={40} className="text-purple-500" />,
    },
    {
      title: "Cloud Computing",
      description:
        "Leveraging cloud platforms to build scalable and secure solutions.",
      icon: <FaCloud size={40} className="text-indigo-500" />,
    },
  ];

  return (
    <div id="WhatIDO" className="w-full min-h-screen bg-slate-300 px-7 py-10">
      <div className="text-center">
        <div className="text-sm font-thin py-6 text-gray-600">WHAT I DO</div>
        <div className="text-3xl font-bold text-gray-800">
          HERE ARE SOME OF MY
          <br /> EXPERTISE
        </div>
      </div>
      <div className="expertise py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDO;
