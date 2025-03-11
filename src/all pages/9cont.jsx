import React from "react";

function Cont() {
  return (
    <div className="px-7 py-10">
      <div className="text-2xl font-semibold">CONTACT</div>
      <div className="py-7 flex flex-col gap-5">
        <p className="text-gray-700">
          📍 318 Garth Massey Drive, Cambridge, ON
        </p>
        <p className="text-gray-700">
          📧 Email:{" "}
          <a
            href="mailto:aadityaaryal201711@gmail.com"
            className="text-blue-500 hover:underline"
          >
            aadityaaryal201711@gmail.com
          </a>
        </p>
        <p className="text-gray-700">📞 Phone: (226) 880-4646</p>
        <p className="text-gray-700">
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/aaditya-aryal/"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/aaditya-aryal
          </a>
        </p>
      </div>
    </div>
  );
}

export default Cont;
