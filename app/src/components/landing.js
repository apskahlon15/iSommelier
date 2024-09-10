// pages/landing.js (or src/pages/landing.js)
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="relative flex-grow flex flex-col items-center text-center">
        <div className="relative w-full h-[60vh] overflow-hidden mb-12">
          {/* Wine Image */}
          <Image
            src="/wines.jpeg" // Replace with your image path
            alt="Wine"
            layout="fill" // Makes the image cover the container
            objectFit="cover" // Ensures the image covers the container without distortion
            quality={100} // Set image quality to the highest
            className="absolute inset-0" // Positions the image absolutely within the container
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-3xl font-semibold mb-4">
              Discover the Perfect Wine
            </h2>
            <p className="text-lg mb-8">
              Explore our curated wine selections and find the best choices for
              every occasion.
            </p>
            <Link
              href="/app/src/pages/login.js"
              className="bg-blue-900 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Compare
            </Link>
          </div>
        </div>

        {/* Images Row */}
        <div className="w-full flex flex-nowrap justify-center gap-4 py-10 px-4 mb-8 overflow-x-auto">
          <div className="flex flex-col items-center gap-2 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/red.webp" // Replace with your image path
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold text-black">Wine Name 1</p>{" "}
            {/* Replace with the actual wine name */}
          </div>
          <div className="flex flex-col items-center gap-2 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/red2.webp" // Replace with your image path
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold text-black">Wine Name 2</p>{" "}
            {/* Replace with the actual wine name */}
          </div>
          <div className="flex flex-col items-center gap-2 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/wine3.webp" // Replace with your image path
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold text-black">Wine Name 3</p>{" "}
            {/* Replace with the actual wine name */}
          </div>
          <div className="flex flex-col items-center gap-2 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/wine4.webp" // Replace with your image path
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold text-black">Wine Name 4</p>{" "}
            {/* Replace with the actual wine name */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 w-full py-4 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} iSommelier. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
