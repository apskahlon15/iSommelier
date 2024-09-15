"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">
            Meet the Team
          </h2>
          <div className="flex flex-wrap gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <Image
                src="/download.png" // Replace with your team member image path
                alt="Team Member 1"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-black">
                Jane Doe
              </h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <Image
                src="/download.png" // Replace with your team member image path
                alt="Team Member 2"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-black">
                John Smith
              </h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#03045e]">
            Contact Us
          </h2>
          <p className="text-lg text-black">
            We would love to hear from you! Feel free to reach out with any
            questions, feedback, or inquiries.
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-black">Email:</p>
            <p className="text-lg text-black">support@isommelier.com</p>
            <p className="text-lg font-semibold text-black mt-2">Phone:</p>
            <p className="text-lg text-black">1-800-123-4567</p>
          </div>
        </section>

        {/* Additional Information */}
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
          <Link
            href="/"
            className="text-lg font-semibold text-[#004e89] hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
