"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import wines from "../data/wines.json"; // Adjust the path based on where your JSON file is located

export default function Landing() {
  const [wishlist, setWishlist] = useState([]);
  const [showAllWines, setShowAllWines] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    // Retrieve wishlist from local storage on component mount
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleWishlistClick = (wine) => {
    setWishlist((prevWishlist) => {
      const wineExists = prevWishlist.some(
        (item) => item.title === wine.title && item.image === wine.image
      );

      const updatedWishlist = wineExists
        ? prevWishlist.filter(
            (item) => item.title !== wine.title || item.image !== wine.image
          )
        : [...prevWishlist, wine];

      // Update local storage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  // Filter wines based on search query for first-letter match
  const filteredWines = wines.filter((wine) =>
    wine.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // Determine the wines to display
  const winesToDisplay = showAllWines
    ? filteredWines
    : filteredWines.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="relative flex-grow flex flex-col items-center text-center">
        {/* Header Image and Introduction */}
        <div className="relative w-full h-[40vh] overflow-hidden mb-8">
          <Image
            src="/wines.jpeg"
            alt="Wine"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-6">
            <h2 className="text-3xl font-bold mb-4">
              Discover the Perfect Wine
            </h2>
            <p className="text-md mb-6 max-w-md">
              Explore our curated wine selections and find the best choices for
              every occasion.
            </p>
            <Link
              href="/signup"
              className="bg-[#f1f2f6] text-[#004e89] px-6 py-3 rounded-lg text-md font-semibold hover:bg-[#e0e2e7] transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              Compare
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 px-4 w-full max-w-screen-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for wines..."
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004e89]"
          />
        </div>

        {/* Wine List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 mb-6">
          {winesToDisplay.map((wine, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-2 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            >
              <div className="relative w-full h-56">
                <Image
                  src={wine.image}
                  alt={wine.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => handleWishlistClick(wine)}
                >
                  <Image
                    src={
                      wishlist.some(
                        (item) =>
                          item.title === wine.title && item.image === wine.image
                      )
                        ? "/heart-2.png"
                        : "/heart-1.png"
                    }
                    alt="Heart Icon"
                    width={28}
                    height={28}
                    className="transform hover:scale-125 transition-transform duration-200"
                  />
                </div>
              </div>
              <p className="text-sm font-semibold text-black">{wine.title}</p>
              <p className="text-xs text-gray-500">{wine.winery}</p>
              <p className="text-xs text-gray-500">{wine.region}</p>
            </div>
          ))}
        </div>

        {/* "See More" Button */}
        {!showAllWines && filteredWines.length > 4 && (
          <button
            onClick={() => setShowAllWines(true)}
            className="bg-[#004e89] text-white px-6 py-3 rounded-lg text-md font-semibold hover:bg-[#003765] transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            See More
          </button>
        )}
      </main>
    </div>
  );
}
