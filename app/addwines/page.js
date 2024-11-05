
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import wines from "../data/wines.json"; 
import { useRouter } from 'next/navigation'; 

export default function AddToWishlist() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWines, setSelectedWines] = useState([]);
  const router = useRouter();

  // Load wishlist from local storage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setSelectedWines(storedWishlist);
  }, []);

  const handleWineClick = (wine) => {
    setSelectedWines((prev) => {
      if (prev.some((item) => item.title === wine.title && item.image === wine.image)) {
        return prev.filter((item) => item.title !== wine.title || item.image !== wine.image);
      }
      return [...prev, wine];
    });
  };

  const winesToDisplay = wines.filter((wine) =>
    wine.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToWishlist = () => {
    localStorage.setItem("wishlist", JSON.stringify(selectedWines));
    router.push('/wishlist'); // Navigate to wishlist page after adding wines
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Add Wines to Your Wishlist</h1>

      {/* Search Bar and Add Wines Button */}
      <div className="mb-6 px-4 w-full max-w-screen-md flex items-center justify-between">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
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

        <div className="ml-4">
          <button
            onClick={handleAddToWishlist}
            className="bg-[#004e89] text-white px-4 py-2 rounded-lg text-md font-semibold hover:bg-[#003765] transition duration-300 ease-in-out"
          >
            Add Wines
          </button>
        </div>
      </div>

      {/* Wine List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 mb-6">
        {winesToDisplay.map((wine, index) => (
          <div
            key={index}
            onClick={() => handleWineClick(wine)}
            className={`relative flex flex-col items-center gap-2 border-2 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out ${selectedWines.some((item) => item.title === wine.title && item.image === wine.image) ? 'border-[#004e89]' : 'border-gray-300'}`}
          >
            <div className="relative w-full h-56">
              <Image
                src={wine.image}
                alt={wine.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between w-full px-4">
              <p className="text-sm font-semibold text-black">{wine.title}</p>
            </div>
            <p className="text-xs text-gray-500">{wine.region}</p>
          </div>
        ))}
      </div>

      {/* Add to Wishlist Button */}
      <button
         onClick={handleAddToWishlist}
         className="mt-6 bg-[#004e89] text-white text-lg shadow-lg px-8 py-4 mb-11 rounded-lg hover:bg-[#003765] transition"
       >
         Add Wines
       </button>
    </div>
  );
}
