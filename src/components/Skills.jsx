import React from "react";

function Skills() {
  const skills = [
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "Game Development",
    "Leadership",
    "Communication",
    "Problem-solving",
    "Time Management",
  ];
  return (
    <div
      id="Skills"
      className="w-full h-screen bg-slate-700 px-7 py-3 flex-col content-center"
    >
      <div>
        <div className="text-sm font-thin py-6">MY SPECIALITY</div>
        <div className="text-2xl font-semibold">MY SKILLS</div>
      </div>
      <div className="py-10 grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div>{skill}</div>
            <div className="w-52 h-1 bg-slate-400">
              <div className="w-5/6 h-full bg-red-600"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
