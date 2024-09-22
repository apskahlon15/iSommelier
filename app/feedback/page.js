"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter(); // Initialize the router for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set the submission status to true
  };

  useEffect(() => {
    if (submitted) {
      // Redirect to home page after 3 seconds
      const timer = setTimeout(() => {
        router.push("/"); // Redirect to the home page
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [submitted, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {submitted ? (
          <h1 className="text-2xl font-bold text-center text-green-500 py-8">
            Thank you for your feedback!
          </h1>
        ) : (
          <>
            <h1
              className="text-3xl font-bold text-center mb-8"
              style={{ color: "#03045e" }}
            >
              We Value Your Feedback
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your name"
                  required
                  style={{ color: "black" }}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your email"
                  required
                  style={{ color: "black" }}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                  style={{ color: "black" }}
                >
                  <option value="">Select a rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="comments"
                >
                  Comments
                </label>
                <textarea
                  id="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your feedback"
                  rows="4"
                  required
                  style={{ color: "black" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white p-3 rounded-md font-semibold hover:bg-cyan-600 transition duration-200"
              >
                Submit Feedback
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
