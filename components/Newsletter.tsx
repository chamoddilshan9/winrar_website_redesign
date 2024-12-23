// components/NewsletterSignup.tsx
"use client"
import React, { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here, you would typically handle the form submission to an API or service
    }
  };

  return (
    <section className="bg-blue-100 py-16 px-6 md:px-16 text-blaxk">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Stay Updated with Our Latest News
        </h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter and get the latest updates, tips, and exclusive offers.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-72 border-2 border-white focus:outline-none focus:border-blue-200 transition duration-300"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <p className="text-xl font-semibold mt-4">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
