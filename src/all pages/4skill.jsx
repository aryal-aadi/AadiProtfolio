import React from "react";

function Skills() {
  return (
    <div className="w-full h-screen bg-slate-700 px-7 py-3 flex-col content-center">
      <div>
        <div className="text-sm font-thin py-6">MY SPECIALITY</div>
        <div className="text-2xl font-semibold">MY SKILLS</div>
      </div>
      <div className="py-10">
        <p>
          <span className="font-bold"> Hi I'm Jackson Ford </span>
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country.
        </p>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
      <div className="skillmeter px-14 grid grid-cols-2 grid-rows-3 gap-14">
        <div className="flex flex-col gap-2">
          <div>SKill1</div>
          <div className="w-52 h-1 bg-slate-400">
            <div className="w-5/6 h-full p-0 bg-red-600"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">SKill2</div>
          <div className="w-52 h-1 bg-slate-400 ">
            <div className="w-5/6 h-full p-0 bg-red-600"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>SKill3</div>
          <div className="w-52 h-1 bg-slate-400">
            <div className="w-5/6 h-full p-0 bg-red-600"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>SKill4</div>
          <div className="w-52 h-1 bg-slate-400">
            <div className="w-5/6 h-full p-0 bg-red-600"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>SKill5</div>
          <div className="w-52 h-1 bg-slate-400">
            <div className="w-5/6 h-full p-0 bg-red-600"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>SKill6</div>
          <div className="w-52 h-1 bg-slate-400">
            <div className="w-5/6 h-full p-0 bg-red-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
