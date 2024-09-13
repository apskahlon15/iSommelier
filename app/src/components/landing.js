"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  // State to manage wishlist items
  const [wishlist, setWishlist] = useState([]);

  // Function to handle click event
  const handleWishlistClick = (wineName) => {
    setWishlist((prevWishlist) => {
      // Check if wine is already in the wishlist
      if (prevWishlist.includes(wineName)) {
        // Remove from wishlist
        return prevWishlist.filter((item) => item !== wineName);
      } else {
        // Add to wishlist
        return [...prevWishlist, wineName];
      }
    });
  };

  // Array of wines
  const wines = [
    {
      src: "/red.webp",
      alt: "Wine 1",
      name: "Crimson Ridge Cabernet Sauvignon",
    },
    { src: "/red2.webp", alt: "Wine 2", name: "Silver Oak Chardonnay" },
    { src: "/wine3.webp", alt: "Wine 3", name: "Eclipse Estate Pinot Noir" },
    { src: "/wine4.webp", alt: "Wine 4", name: "Golden Harvest Merlot" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="relative flex-grow flex flex-col items-center text-center">
        <div className="relative w-full h-[50vh] overflow-hidden mb-12">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-6">
            <h2 className="text-4xl font-bold mb-4">
              Discover the Perfect Wine
            </h2>
            <p className="text-lg mb-8 max-w-md">
              Explore our curated wine selections and find the best choices for
              every occasion.
            </p>
            <Link
              href="/login"
              className="bg-[#f1f2f6] text-[#004e89] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#e0e2e7] transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              Compare
            </Link>
          </div>
        </div>

        {/* Images Row */}
        <div className="w-full flex flex-nowrap justify-center gap-8 py-8 px-4 mb-8 overflow-x-auto">
          {wines.map((wine, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-4 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/6 transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-72 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={wine.src}
                  alt={wine.alt}
                  layout="intrinsic"
                  width={280} // Adjust width to make image smaller
                  height={210} // Adjust height to maintain aspect ratio
                  objectFit="cover"
                  className="rounded-lg"
                />
                {/* Heart Icon */}
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => handleWishlistClick(wine.name)}
                >
                  <Image
                    src={
                      wishlist.includes(wine.name)
                        ? "/heart-2.png"
                        : "/heart-1.png"
                    }
                    alt="Heart Icon"
                    width={28} // Adjust width as needed
                    height={28} // Adjust height as needed
                    className="transform hover:scale-125 transition-transform duration-200"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold text-black">{wine.name}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-[#03045e] text-white">
        <div className="max-w-screen-lg mx-auto px-4">
          <p className="text-sm md:text-base font-light">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold">iSommelier</span>. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link
              href="/about"
              className="text-sm md:text-base hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/privacy"
              className="text-sm md:text-base hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm md:text-base hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
