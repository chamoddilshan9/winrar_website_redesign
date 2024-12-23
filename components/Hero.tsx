// components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 py-10 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Powerful{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Compression
            </span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg lg:text-xl">
            Compress and archive your files with industry-leading speed and efficiency.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row gap-6 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              Buy Now
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              Start your free trial
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <img
            src="logo.png"
            alt="Software Illustration"
            className="w-full max-w-sm mx-auto lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
