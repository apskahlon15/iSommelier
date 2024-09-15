"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "" });
  const router = useRouter();

  useEffect(() => {
    // Load remembered values from local storage
    const savedName = localStorage.getItem("name") || "";
    const savedEmail = localStorage.getItem("email") || "";
    setName(savedName);
    setEmail(savedEmail);
  }, []);

  const handleSignUp = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

    // Basic validation
    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Save remembered values to local storage
      if (rememberMe) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
      }

      // Your sign-up logic here
      router.push("/compare");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-cyan-600">Sign Up</h1>
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <form className="flex flex-col space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-5 w-5 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
            />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm">
              Remember my name and email
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSignUp}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
