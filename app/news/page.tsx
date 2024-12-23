"use client"
import React, { useState } from "react";

// Sample data for release notes
const allReleaseNotes = [
  {
    version: "6.23",
    date: "2024-12-20",
    headline: "New Features and Bug Fixes",
    summary: "The latest release introduces performance improvements and new compression features.",
    link: "/news/6.23",
  },
  {
    version: "6.22",
    date: "2024-10-15",
    headline: "Major Update with Enhanced Security",
    summary: "Security features enhanced, plus minor bug fixes and UI improvements.",
    link: "/news/6.22",
  },
  {
    version: "6.21",
    date: "2024-08-10",
    headline: "Minor Update to Improve Stability",
    summary: "Bug fixes and stability improvements for a smoother user experience.",
    link: "/news/6.21",
  },
  {
    version: "6.20",
    date: "2024-06-25",
    headline: "New UI Enhancements",
    summary: "A new, more intuitive interface with improved performance.",
    link: "/news/6.20",
  },
  {
    version: "6.19",
    date: "2024-05-10",
    headline: "Improved Compression Speed",
    summary: "Significant performance improvements to compression speed.",
    link: "/news/6.19",
  },
  {
    version: "6.18",
    date: "2024-03-18",
    headline: "Bug Fixes and Security Patch",
    summary: "Various bug fixes and a security patch for better stability.",
    link: "/news/6.18",
  },
  {
    version: "6.17",
    date: "2024-02-01",
    headline: "Enhanced File Compatibility",
    summary: "Better compatibility with various file types and formats.",
    link: "/news/6.17",
  },
];

const NewsPage: React.FC = () => {
  const [visibleNews, setVisibleNews] = useState(3); // Initial number of visible news items

  const loadMoreNews = () => {
    setVisibleNews((prev) => Math.min(prev + 3, allReleaseNotes.length)); // Show 3 more news
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800">Latest News & Release Notes</h1>
          <p className="text-lg text-gray-600 mt-4">
            Stay updated with the latest features, updates, and bug fixes for WinRAR.
          </p>
        </div>

        {/* News Articles */}
        <div className="space-y-8">
          {allReleaseNotes.slice(0, visibleNews).map((release) => (
            <div key={release.version} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{release.headline}</h2>
                <span className="text-sm text-gray-500">{release.date}</span>
              </div>
              <p className="text-gray-600">{release.summary}</p>
              <a
                href={release.link}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleNews < allReleaseNotes.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreNews}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsPage;
