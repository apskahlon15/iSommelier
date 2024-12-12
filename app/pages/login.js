import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      if (response.ok) {
        setServerMessage(data.message || "User added successfully!");
      } else {
        throw new Error(data.message || "Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
      setServerMessage("Failed to add user");
    }
  };

  return (
    <div className="bg-white px-6 sm:px-10 py-12 sm:py-20 rounded-3xl border-2 border-blue-200 max-w-md sm:max-w-lg mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold text-blue-800 text-center">
        iSommelier - Uncork the Best Choices
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-lg sm:text-xl font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-blue-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="text-lg sm:text-xl font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-blue-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            type="submit"
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-900 text-white text-lg sm:text-xl font-bold"
          >
            Sign up
          </button>
        </div>
        {serverMessage && (
          <p className="text-green-500 text-sm mt-4">{serverMessage}</p>
        )}
      </form>

      <div className="mt-8 flex justify-center items-center">
        <p className="font-medium text-base sm:text-lg">Already have an account?</p>
        <button className="text-blue-800 text-base sm:text-lg font-medium ml-2 hover:underline transition-all">
          Sign in
        </button>
      </div>
    </div>
  );
}
