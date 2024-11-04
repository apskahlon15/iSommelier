"use client";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 text-blue-700 text-center">
        <h1 className="text-4xl font-bold text-[#03045e]">About Us</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-8 max-w-screen-lg mx-auto">
        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">
            Our Mission
          </h2>
          <p className="text-lg text-black">
            At iSommelier, our mission is to provide wine enthusiasts with
            comprehensive, accurate, and accessible information about wines. We
            strive to enhance your wine experience by offering detailed reviews,
            comparisons, and recommendations tailored to your preferences.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">
            Our Story
          </h2>
          <p className="text-lg text-black">
            iSommelier was founded with the goal of simplifying the wine
            selection process. Our team of wine experts and enthusiasts work
            tirelessly to bring you the best recommendations and reviews,
            ensuring that every bottle you choose is a perfect match for your
            taste and occasion.
          </p>
        </section>

        {/* Return to Home */}
        <div className="text-center">
          <a
            href="/"
            className="text-lg font-semibold text-[#004e89] hover:underline"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
