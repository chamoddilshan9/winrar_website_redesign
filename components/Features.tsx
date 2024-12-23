// components/FeaturesSection.tsx
import React from "react";
import {
  ArchiveBoxIcon,
  LockClosedIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <ArchiveBoxIcon className="text-blue-500 w-12 h-12 mb-4" />,
    title: "File Compression",
    description:
      "Compress RAR and ZIP files with industry-leading compression algorithms.",
  },
  {
    icon: <LockClosedIcon className="text-purple-500 w-12 h-12 mb-4" />,
    title: "AES Encryption",
    description:
      "Protect sensitive data with AES-256 bit encryption technology for security.",
  },
  {
    icon: <DocumentTextIcon className="text-green-500 w-12 h-12 mb-4" />,
    title: "Multivolume Archives",
    description:
      "Create split archives for large files, making them easier to store and share.",
  },
  {
    icon: <PuzzlePieceIcon className="text-yellow-500 w-12 h-12 mb-4" />,
    title: "File Recovery",
    description:
      "Recover damaged archives with WinRAR's advanced recovery technology.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section with Navigation Links */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">WinRAR Key Features</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover how WinRAR’s advanced tools help you manage and protect your data with ease.
          </p>
        
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
