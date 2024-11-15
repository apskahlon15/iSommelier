"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import prisma from "../../lib/prisma";

const generateSlug = (id) => {
  return id.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};

export default function Landing() {
  const [wishlist, setWishlist] = useState([]);
  const [wines, setWines] = useState([]); // State to store wine data
  const router = useRouter();
  const [showAllWines, setShowAllWines] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch wine data from MongoDB when component mounts
    const fetchWines = async () => {
      const response = await fetch("/api/wines");
      const data = await response.json();
      setWines(data);
    };

    fetchWines();

    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleWishlistClick = (event, wine) => {
    event.stopPropagation();
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

  // Filter wines based on the search query (case-insensitive)
  const filteredWines = searchQuery.length > 0
    ? wines.filter((wine) =>
        wine.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    : wines; // Show all wines when searchQuery is empty

  const winesToDisplay = showAllWines ? filteredWines : filteredWines.slice(0, 4);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="relative flex-grow flex flex-col items-center text-center">
        <div className="relative w-full h-[50vh] overflow-hidden mb-8">
          <Image
            src="/wines.jpeg"
            alt="Wine"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-6">
            <h2 className="text-4xl font-bold mb-4">Discover the Perfect Wine</h2>
            <p className="text-lg mb-6 max-w-md">
              Explore our curated wine selections and find the best choices for every occasion.
            </p>
            <Link href="/signup" legacyBehavior>
              <button className="bg-[#f1f2f6] text-[#004e89] px-6 py-3 rounded-lg text-md font-semibold hover:bg-[#e0e2e7] transform hover:scale-105 duration-300">
                Compare
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-6 px-4 w-full max-w-screen-md relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for wines..."
            className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#004e89] text-black"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 mb-6">
          {winesToDisplay.map((wine) => (
            <div
              key={wine.title}
              className="relative flex flex-col items-center gap-2 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => router.push(`/wine/${generateSlug(wine.title)}`)}
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
                  onClick={(event) => handleWishlistClick(event, wine)}
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

        {filteredWines.length > 4 && (
          <button
            onClick={() => setShowAllWines(!showAllWines)}
            className="bg-[#004e89] text-white px-8 py-3 mt-5 mb-11 rounded-lg text-lg shadow-lg font-semibold hover:bg-[#003765] transform hover:scale-105 transition duration-300"
          >
            {showAllWines ? "See Less" : "See More"}
          </button>
        )}

        {showAllWines && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-[#004e89] text-white p-3 rounded-full shadow-lg hover:bg-[#003765] transform hover:scale-110 transition duration-300"
          >
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
