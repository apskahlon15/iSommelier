"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAluYjiHKvNZp3fpg4J0NZIuME3hy_fsOU",
  authDomain: "isommelier-407eb.firebaseapp.com",
  projectId: "isommelier-407eb",
  storageBucket: "isommelier-407eb.appspot.com",
  messagingSenderId: "743577851125",
  appId: "1:743577851125:web:170abc6a978d532c15e1bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Load remembered values from local storage
    const savedName = localStorage.getItem("name") || "";
    const savedEmail = localStorage.getItem("email") || "";
    setName(savedName);
    setEmail(savedEmail);

    // Initialize analytics on client side
    if (typeof window !== "undefined") {
      const analytics = getAnalytics(app);
    }
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { name: "", email: "" };
    setServerError("");
    setSuccessMessage("");

    // Basic validation
    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        await set(ref(db, "users/" + name), {
          name: name,
          email: email,
        });

        if (rememberMe) {
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
        } else {
          localStorage.removeItem("name");
          localStorage.removeItem("email");
        }

        setSuccessMessage("Congratulations! You have successfully signed up.");
        setTimeout(() => {
          router.push("/compare");
        }, 2000);
      } catch (error) {
        console.error("Error writing to database:", error);
        setServerError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-cyan-600">Sign Up</h1>
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <form
          id="signUpForm"
          className="flex flex-col space-y-6"
          onSubmit={handleSignUp}
        >
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

          {serverError && (
            <p className="text-red-500 text-sm mt-1">{serverError}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm mt-1">{successMessage}</p>
          )}

          <button
            type="submit"
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
