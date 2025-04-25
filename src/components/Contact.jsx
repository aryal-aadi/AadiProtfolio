import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Cont() {
  return (
    <div
      id="Cont"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 px-7 py-10"
    >
      <div className="text-center">
        <div className="text-sm font-thin py-6 text-gray-600">GET IN TOUCH</div>
        <div className="text-3xl font-bold text-gray-800">CONTACT ME</div>
      </div>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500" size={24} />
            <p className="text-gray-700 text-lg">Waterloo, ON, Canada</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500" size={24} />
            <p className="text-gray-700 text-lg">
              Email:{" "}
              <a
                href="mailto:aadityaaryal201711@gmail.com"
                className="text-blue-500 hover:underline"
              >
                aadityaaryal201711@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-500" size={24} />
            <p className="text-gray-700 text-lg">+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-500" size={24} />
            <p className="text-gray-700 text-lg">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/aryal-aaditya/"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/aryal-aaditya
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cont;
