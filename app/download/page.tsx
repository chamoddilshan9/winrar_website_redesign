// components/DownloadPage.tsx
import React from "react";

interface Version {
  version: string;
  releaseDate: string;
  size: string;
  downloadLink: string;
}

const versions: Version[] = [
  { version: "6.23", releaseDate: "2024-12-20", size: "3.5 MB", downloadLink: "/downloads/winrar-6.23.exe" },
  { version: "6.22", releaseDate: "2024-10-15", size: "3.5 MB", downloadLink: "/downloads/winrar-6.22.exe" },
  { version: "6.21", releaseDate: "2024-08-10", size: "3.4 MB", downloadLink: "/downloads/winrar-6.21.exe" },
  { version: "6.20", releaseDate: "2024-06-05", size: "3.4 MB", downloadLink: "/downloads/winrar-6.20.exe" },
  { version: "6.19", releaseDate: "2024-04-01", size: "3.3 MB", downloadLink: "/downloads/winrar-6.19.exe" },
  { version: "6.18", releaseDate: "2024-02-20", size: "3.3 MB", downloadLink: "/downloads/winrar-6.18.exe" },
];

const DownloadPage: React.FC = () => {
  const latestVersion = versions[0];

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Heading Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Download WinRAR</h1>
          <p className="text-gray-600 text-lg">
            Get the latest version of WinRAR and explore previous releases.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="/buy"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
            >
              Buy Now
            </a>
            <a
              href="/free-trial"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>

        {/* Latest Version Download Section */}
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Latest Version: WinRAR {latestVersion.version}
            </h2>
            <p className="text-gray-600 mt-2">
              Released on: {latestVersion.releaseDate}
            </p>
          </div>
          <a
            href={latestVersion.downloadLink}
            className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            Download Now
          </a>
        </div>

        {/* Table of Previous Versions */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Version</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Release Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Size</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Download</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((version, index) => (
                <tr
                  key={version.version}
                  className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-4 py-3 text-sm text-gray-800">{version.version}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{version.releaseDate}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{version.size}</td>
                  <td className="px-4 py-3 text-sm">
                    <a
                      href={version.downloadLink}
                      className="text-blue-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DownloadPage;
