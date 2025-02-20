import React from "react";

function Cont() {
  return (
    <div>
      <div className="py-7 flex-col items-start justify-start gap-5">
        <p className="font-thin text-gray-500">Get In Touch</p>
        <p className="text-3xl">CONTACT</p>
      </div>
      <div className="flex">
        <div className="flex-col gap-2">
          <div className="py-6">
            {/* mail image here */}
            <p>info@domain.com</p>
          </div>
          <div className="py-6">
            {/* address image here */}
            <p>info@domain.com</p>
          </div>
          <div className="py-6">
            {/* phone image here */}
            <p>info@domain.com</p>
          </div>
        </div>
        <div className="flex-col gap-2">
          <input
            className="w-28 h-8 px-2 placeholder:text-gray-400 font-thin"
            placeholder="Name"
          ></input>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Cont;
