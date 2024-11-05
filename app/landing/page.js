
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 
import wines from "../data/wines.json"; 

const generateSlug = (title) => {
  return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};

export default function Landing() {
  const [wishlist, setWishlist] = useState([]);
  const router = useRouter();
  const [showAllWines, setShowAllWines] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
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

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const filteredWines = wines.filter((wine) =>
    wine.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const winesToDisplay = showAllWines ? filteredWines : filteredWines.slice(0, 4);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="relative flex-grow flex flex-col items-center text-center">
        {/* Header Image and Introduction */}
        <div className="relative w-full h-[50vh] overflow-hidden mb-8">
          <Image
            src="/wines.jpeg"
            alt="Wine"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-6">
            <h2 className="text-3xl font-bold mb-4">Discover the Perfect Wine</h2>
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
        <div className="mb-6 px-4 w-full max-w-screen-md relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-14 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M9 4a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for wines..."
            className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004e89]"
          />
        </div>

        {/* Wine List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 mb-6">
          {winesToDisplay.map((wine) => (
            <div
              key={wine.title} // Use wine.title for the key
              className="relative flex flex-col items-center gap-2 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
              onClick={() => router.push(`/wine/${generateSlug(wine.title)}`)} // Navigate using generated slug
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
              <p className="text-xs text-gray-500">{wine.volume}</p>
              <p className="text-xs text-gray-500">{wine.region}</p>
            </div>
          ))}
        </div>

        {/* "See More" / "See Less" Button */}
        {filteredWines.length > 4 && (
          <button
            onClick={() => setShowAllWines(!showAllWines)}
            className="bg-[#004e89] text-white px-8 py-3 mt-5 mb-11 rounded-lg text-lg shadow-lg font-semibold hover:bg-[#003765] transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            {showAllWines ? "See Less" : "See More"}
          </button>
        )}

        {/* Top Button */}
        {showAllWines && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-[#004e89] text-white p-3 rounded-full shadow-lg hover:bg-[#003765] transition-transform transform hover:scale-110 duration-300 ease-in-out flex items-center justify-center"
          >
            {/* Upward arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}

      </main>
    </div>
  );
}
