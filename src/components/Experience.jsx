import React from "react";

function Exp() {
  const experiences = [
    {
      role: "Warehouse Associate",
      company: "Amazon",
      location: "Cambridge, ON, Canada",
      duration: "Apr 2023 - Present",
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
    <div id="Exp" className="w-full h-screen bg-slate-300 px-7 py-3">
      <div className="text-2xl font-semibold">EXPERIENCE</div>
      <div className="py-5">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-5">
            <p>
              <strong>{exp.role}</strong>
              <br /> {exp.company} ({exp.location})
              <br /> {exp.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exp;
