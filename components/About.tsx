// components/AboutCompany.tsx
import React from "react";

const AboutCompany: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Image */}
        <div className="flex justify-center items-center">
          <img
            src="aboutillustration.svg"
            alt="WinRAR Illustration"
            className="rounded-lg shadow-lg w-full md:max-w-md"
          />
        </div>
        {/* Right Side: Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About WinRAR
          </h2>
          <p className="text-gray-600 text-lg">
            WinRAR is the world's leading compression software, offering a fast,
            efficient, and user-friendly way to compress and decompress files.
            Trusted by millions, WinRAR simplifies file sharing and storage
            without compromising on security or performance.
          </p>
          <p className="text-gray-600 text-lg">
            With cutting-edge technology and a commitment to innovation, WinRAR
            has been helping users organize and secure their data for decades.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              Learn More
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
