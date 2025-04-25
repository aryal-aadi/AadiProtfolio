import React from "react";

function Edu() {
  const educationData = [
    {
      degree: "Diploma in Computer Programming",
      institution: "Conestoga College, Waterloo, Canada",
      duration: "Sep 2023 - Present",
    },
    {
      degree: "High School",
      institution: "Horizon Gautam Buddha School, Tilottama, Nepal",
      duration: "Jul 2020 - Aug 2022",
    },
  ];

  return (
    <div
      id="Edu"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 px-7 py-10"
    >
      <div className="text-center">
        <div className="text-sm font-thin py-6 text-gray-600">MY JOURNEY</div>
        <div className="text-3xl font-bold text-gray-800">EDUCATION</div>
      </div>

      <div className="py-10 flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative flex items-start gap-6 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-6 w-4 h-4 bg-blue-500 rounded-full"></div>
            {/* Timeline Line */}
            {index !== educationData.length - 1 && (
              <div className="absolute left-2 top-10 h-full w-1 bg-blue-300"></div>
            )}
            <div className="pl-10">
              <h3 className="text-lg font-semibold text-gray-800">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edu;
