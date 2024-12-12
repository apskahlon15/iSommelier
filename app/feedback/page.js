"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null); // For error handling if needed

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate name
    const nameRegex = /^[A-Za-z]{2,}$/; // At least 2 letters, no numbers or symbols
    if (!nameRegex.test(name)) {
      setError("Name must be at least 2 letters and contain no numbers or special symbols.");
      return;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear error if validation passes
    setError(null);

    const formData = {
      access_key: "46e6faf7-2cc8-4549-aebe-13b0a254a462", // Replace with your access key
      name: name,
      email: email,
      rating: rating,
      comments: comments,
      botcheck: "", // Honeypot field should be left empty
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true); // Show thank you message
      } else {
        setError("Something went wrong, please try again.");
      }
    } catch (error) {
      setError("Submission failed. Please check your network and try again.");
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push("/"); // Redirect to the home page after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {submitted ? (
          <h1 className="text-2xl font-bold text-center text-green-500 py-8">
            Thank you for your feedback!
          </h1>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center mb-8 text-[#03045e]">
              We Value Your Feedback
            </h1>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="46e6faf7-2cc8-4549-aebe-13b0a254a462"
              />
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
