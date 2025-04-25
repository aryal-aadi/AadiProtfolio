import React from "react";

function Skills() {
  const technicalSkills = [
    { name: "Web Development", level: "90%" },
    { name: "UI/UX Design", level: "85%" },
    { name: "Mobile App Development", level: "80%" },
    { name: "Game Development", level: "75%" },
  ];

  const softSkills = [
    { name: "Leadership", level: "95%" },
    { name: "Communication", level: "90%" },
    { name: "Problem-solving", level: "85%" },
    { name: "Time Management", level: "80%" },
  ];

  return (
    <div
      id="Skills"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 px-7 py-10 text-white"
    >
      <div className="text-center">
        <div className="text-sm font-thin py-6 text-gray-400">
          MY SPECIALITY
        </div>
        <div className="text-3xl font-bold">MY SKILLS</div>
      </div>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Technical Skills
          </h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
            Soft Skills
          </h3>
          <div className="space-y-6">
            {softSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-yellow-500 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
