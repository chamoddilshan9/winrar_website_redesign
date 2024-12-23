"use client"
import React, { useState } from "react";

// FAQ data structure
type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I install WinRAR?",
    answer: "To install WinRAR, download the setup file from the official website and follow the on-screen instructions for installation."
  },
  {
    question: "What are the system requirements for WinRAR?",
    answer: "WinRAR is compatible with Windows, Linux, and Mac OS. Please refer to the respective system requirements section for more details."
  },
  {
    question: "Can I use WinRAR for free?",
    answer: "Yes, WinRAR offers a free trial version. However, to access all features, a license must be purchased after the trial period."
  },
  {
    question: "How can I recover damaged archives?",
    answer: "You can use the 'Repair' feature within WinRAR to attempt to repair a damaged archive. If successful, the repaired file will be saved in the same location as the original archive."
  }
];

const SupportPage: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", issue: "" });

  const toggleFAQ = (index: number) => {
    if (activeFAQ === index) {
      setActiveFAQ(null); // Close the FAQ if it’s already open
    } else {
      setActiveFAQ(index); // Open the selected FAQ
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16 lg:px-24">
      {/* Introduction */}
      <section className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Support Center</h1>
        <p className="mt-4 text-lg text-gray-600">
          Find answers to common questions, access our help center, or contact our support team for further assistance.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <button
                className="w-full text-left p-5 flex justify-between items-center text-lg font-medium text-gray-800 bg-gray-100 rounded-t-lg hover:bg-gray-200 transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-gray-500">
                  {activeFAQ === index ? "-" : "+"}
                </span>
              </button>
              {activeFAQ === index && (
                <div className="p-5 text-gray-600 bg-gray-50 rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Help Center Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Help Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Installation Issues</h3>
            <p className="text-gray-600 mb-4">
              If you are facing problems with installation, please check our detailed installation guide or contact support.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              View Guide
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Support</h3>
            <p className="text-gray-600 mb-4">
              Our support team is available 24/7 to assist you with any technical issues. Get in touch with us now.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              Contact Support
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">License Information</h3>
            <p className="text-gray-600 mb-4">
            Learn more about licensing options and how to activate your WinRAR software and enjoy full features
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Report an Issue</h2>
        <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <label className="block text-lg text-gray-800" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg text-gray-800" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg text-gray-800" htmlFor="issue">
                Issue Description
              </label>
              <textarea
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleFormChange}
                required
                rows={4}
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              Submit Issue
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SupportPage;
