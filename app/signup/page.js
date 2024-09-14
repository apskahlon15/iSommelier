"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

    const handleSignUp = () => {
    // Your sign-up logic here
    router.push("/compare");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-11">
      <h1 className="text-2xl font-bold mb-20 text-cyan-500">Welcome to Sign Up Page</h1>
      <button
        onClick={handleSignUp}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;