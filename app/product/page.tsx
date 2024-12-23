"use client"
import React, { useState } from "react";

// Define the structure of the platform data
type PlatformData = {
  title: string;
  description: string;
  features: string[];
  systemRequirements: string[];
  screenshot: string; // Add screenshot property
};

type Platforms = "windows" | "linuxMac" | "android";

const ProductPage: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<Platforms>("windows");

  // Platform data with explicit types and screenshots
  const platformData: Record<Platforms, PlatformData> = {
    windows: {
      title: "RAR Products - Windows",
      description: `
        The amount of data that businesses and individuals need to process on a daily basis is growing exponentially every year. 
        The increasing and ever-changing requirements for the protection of sensitive information, new government regulations, 
        limits on storage capacity, safeguarding of intellectual property and a global workforce all present new challenges to individuals and companies alike.
      `,
      features: [
        "Compression – Fastest compression tools.",
        "Encryption – Military-grade AES 256-bit encryption technology.",
        "RAR Files – Only software to create RAR archives.",
        "Password Manager – Keeps track of passwords.",
        "Perpetual License – Valid for a lifetime, no subscription.",
        "Recovery Record – Recovers damaged files.",
        "Split Archives – Split archives into smaller files.",
        "Backup – Advanced backup options.",
        "Drag-and-drop – Fully supported.",
        "Language Version – Available in over 40 languages.",
        "Virus Scan – Built-in virus scanner.",
        "Multivolume Archives – Supports multivolume and SFX archives.",
        "Unicode – Supports Unicode file names.",
        "Compliance – Complete control over passwords."
      ],
      systemRequirements: [
        "Windows 11", "Windows 10", "Windows 8", "Windows 7"
      ],
      screenshot: "https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/c3152528-96bf-11e6-b8e7-00163ed833e7/3394193314/winrar-64bit-winrar-5.60.png" // Add the screenshot path
    },
    linuxMac: {
      title: "RAR for Linux & Mac",
      description: `
        WinRAR products for Linux & Mac are only available in the Command Line version. 
        Command line is a text interface for your computer that passes commands to the operating system.
      `,
      features: [
        "Commands – Full list of commands available in Help menu.",
        "Archiving – Compress and store files in RAR archives.",
        "Complete Support – Supports .rar, .zip, and other popular file types.",
        "Solid Archiving – Increases compression rate by 10-50%.",
        "Recovery & Repair – Repairs damaged archives."
      ],
      systemRequirements: [
        "MacOS – Command Line Only",
        "Linux – Command Line Only",
        "FreeBSD – Command Line Only"
      ],
      screenshot: "https://mac-cdn.softpedia.com/screenshots/RAR-for-Mac-OS-X_2.jpg" // Add the screenshot path
    },
    android: {
      title: "RAR for Android",
      description: `
        RAR for Android is RARLAB’s original program for compression, archiving, and extracting, with a free and paid ad-free option.
      `,
      features: [
        "File & Archive Support – ZIP, RAR, and almost all other types.",
        "Create Multivolume Archives – Easily store and send large data.",
        "Compression Levels – Six levels of compression.",
        "Repair Tool – Repairs damaged archives.",
        "Favourites – Add folders for quick access.",
        "Speed – Fastest compression speed.",
        "User Manual – Quick help included.",
        "Delete Function – Automatically deletes compressed files.",
        "Password Protection – AES 256-bit encryption."
      ],
      systemRequirements: [
        "Android 4.4 and up"
      ],
      screenshot: "https://www.win-rar.com/fileadmin/images/android/rar-android-09.png" // Add the screenshot path
    }
  };

  const handleToggle = (platform: Platforms) => setActivePlatform(platform);

  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">WinRAR Products</h1>
        <p className="text-gray-600 mt-4">Explore the best compression solutions for various platforms.</p>
      </div>

      {/* Platform Toggle */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => handleToggle("windows")}
          className={`px-6 py-3 rounded-lg transition duration-300 ${activePlatform === "windows" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"}`}
        >
          Windows
        </button>
        <button
          onClick={() => handleToggle("linuxMac")}
          className={`px-6 py-3 rounded-lg transition duration-300 ${activePlatform === "linuxMac" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"}`}
        >
          Linux & Mac
        </button>
        <button
          onClick={() => handleToggle("android")}
          className={`px-6 py-3 rounded-lg transition duration-300 ${activePlatform === "android" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"}`}
        >
          Android
        </button>
      </div>

      {/* Platform Details */}
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-2xl font-semibold text-gray-800">{platformData[activePlatform].title}</h2>
        <p className="text-gray-600">{platformData[activePlatform].description}</p>

        {/* Screenshot */}
        <div className="text-center">
          <img
            src={platformData[activePlatform].screenshot}
            alt={`${activePlatform} Screenshot`}
            className="mx-auto w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Features List */}
        <ul className="space-y-3 text-gray-600">
          {platformData[activePlatform].features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L8 14l-4-4" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* System Requirements */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">System Requirements</h3>
          <ul className="mt-3 text-gray-600">
            {platformData[activePlatform].systemRequirements.map((requirement, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L8 14l-4-4" />
                </svg>
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
