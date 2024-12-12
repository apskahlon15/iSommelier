"use client";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 text-blue-700 text-center mt-8"> {/* Added mt-8 */}
        <h1 className="text-4xl font-bold text-[#03045e] sm:text-3xl">About Us</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-8 max-w-screen-lg mx-auto">
        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e] sm:text-2xl">Our Mission</h2>
          <p className="text-lg text-black sm:text-base">
            At iSommelier, our mission is to provide wine enthusiasts with
            comprehensive, accurate, and accessible information about wines. We
            strive to enhance your wine experience by offering detailed reviews,
            comparisons, and recommendations tailored to your preferences.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e] sm:text-2xl">Our Story</h2>
          <p className="text-lg text-black sm:text-base">
            iSommelier was founded with the goal of simplifying the wine
            selection process. Our team of wine experts and enthusiasts work
            tirelessly to bring you the best recommendations and reviews,
            ensuring that every bottle you choose is a perfect match for your
            taste and occasion.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e] sm:text-2xl">Meet the Team</h2>
          <p className="text-lg text-black mb-4 sm:text-base">
            The iSommelier team consists of a talented group of individuals who are
            passionate about wine and technology. We worked under the guidance of
            Jonnatas Silverio to create this platform. The team members are:
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Team Members */}
            {[ 
              { name: "Armanpreet Singh", role: "Developer", initial: "A" },
              { name: "Chintan Madaar", role: "Developer", initial: "C" },
              { name: "Puneet Singh", role: "Developer", initial: "P" },
              { name: "Sarpreet Kaur", role: "Developer", initial: "S" },
              { name: "Supreet Kaur", role: "Developer", initial: "S" },
            ].map((member, index) => (
              <div key={index} className="text-center w-1/2 sm:w-1/3 lg:w-1/5">
                <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold mx-auto">
                  {member.initial}
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mt-4">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e] sm:text-2xl">Contact Us</h2>
          <p className="text-lg text-black mb-4 sm:text-base">
            Have questions? We’d love to hear from you! Whether you need help
            choosing a wine or have feedback about our service, feel free to get
            in touch.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-black sm:text-base">
              <strong>Email:</strong> contact@isommelier.com
            </p>
            <p className="text-lg text-black sm:text-base">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-lg text-black sm:text-base">
              <strong>Address:</strong> 123 Wine St, Napa Valley, CA 94558
            </p>
          </div>
        </section>

        {/* Return to Home */}
        <div className="text-center">
          <a
            href="/"
            className="text-lg font-semibold text-[#004e89] hover:underline sm:text-base"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
