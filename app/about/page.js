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
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">Our Mission</h2>
          <p className="text-lg text-black">
            At iSommelier, our mission is to provide wine enthusiasts with
            comprehensive, accurate, and accessible information about wines. We
            strive to enhance your wine experience by offering detailed reviews,
            comparisons, and recommendations tailored to your preferences.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">Our Story</h2>
          <p className="text-lg text-black">
            iSommelier was founded with the goal of simplifying the wine
            selection process. Our team of wine experts and enthusiasts work
            tirelessly to bring you the best recommendations and reviews,
            ensuring that every bottle you choose is a perfect match for your
            taste and occasion.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">Meet the Team</h2>
          <p className="text-lg text-black mb-4">
            The iSommelier team consists of a talented group of individuals who are
            passionate about wine and technology. We worked under the guidance of
            Jonnatas Silverio to create this platform. The team members are:
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
                A
              </div>
              <h3 className="text-xl font-semibold text-[#03045e]">Armanpreet Singh</h3>
              <p className="text-sm text-gray-500">Developer</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
                C
              </div>
              <h3 className="text-xl font-semibold text-[#03045e]">Chintan Madaar</h3>
              <p className="text-sm text-gray-500">Developer</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
                P
              </div>
              <h3 className="text-xl font-semibold text-[#03045e]">Puneet Singh</h3>
              <p className="text-sm text-gray-500">Developer</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
                S
              </div>
              <h3 className="text-xl font-semibold text-[#03045e]">Sarpreet Kaur</h3>
              <p className="text-sm text-gray-500">Developer</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
                S
              </div>
              <h3 className="text-xl font-semibold text-[#03045e]">Supreet Kaur</h3>
              <p className="text-sm text-gray-500">Developer</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">Contact Us</h2>
          <p className="text-lg text-black mb-4">
            Have questions? We’d love to hear from you! Whether you need help
            choosing a wine or have feedback about our service, feel free to get
            in touch.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-black">
              <strong>Email:</strong> contact@isommelier.com
            </p>
            <p className="text-lg text-black">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-lg text-black">
              <strong>Address:</strong> 123 Wine St, Napa Valley, CA 94558
            </p>
          </div>
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
