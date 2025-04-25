import React from "react";

function Exp() {
  const experiences = [
    {
      role: "Warehouse Associate",
      company: "Amazon",
      location: "Cambridge, ON, Canada",
      duration: "Apr 2024 - Present",
    },
    {
      role: "React/Angular Intern / Frontend Developer Intern",
      company: "Abhyam Robotics Institute of Business and Technology (ARIBT)",
      location: "Butwal, Nepal",
      duration: "Jan 2023 - Mar 2023",
    },
    {
      role: "Tutoring",
      company: "Hub IT Training and Solutions",
      location: "Butwal, Nepal",
      duration: "Nov 2022 - Dec 2022",
    },
  ];

  return (
    <div
      id="Exp"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 px-7 py-10"
    >
      <div className="text-center">
        <div className="text-sm font-thin py-6 text-gray-600">MY JOURNEY</div>
        <div className="text-3xl font-bold text-gray-800">EXPERIENCE</div>
      </div>

      <div className="py-10 flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-start gap-6 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-6 w-4 h-4 bg-blue-500 rounded-full"></div>
            {/* Timeline Line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-2 top-10 h-full w-1 bg-blue-300"></div>
            )}
            <div className="pl-10">
              <h3 className="text-lg font-semibold text-gray-800">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.location}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exp;
