"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function AddToWishlist() {
  const [wines, setWines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWines, setSelectedWines] = useState([]);
  const router = useRouter();

  // Fetch wines from the API
  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch('/api/wines');
        const data = await response.json();
        setWines(data);
      } catch (error) {
        console.error("Error fetching wines:", error);
      }
    };
    fetchWines();

    // Load wishlist from local storage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setSelectedWines(storedWishlist);
  }, []);

  const handleWineClick = (wine) => {
    setSelectedWines((prev) => {
      if (prev.some((item) => item.id === wine.id)) {
        return prev.filter((item) => item.id !== wine.id);
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
        {winesToDisplay.map((wine) => (
          <div
            key={wine.id}
            onClick={() => handleWineClick(wine)}
            className={`relative flex flex-col items-center gap-2 border-2 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out ${
              selectedWines.some((item) => item.id === wine.id)
                ? 'border-[#004e89]'
                : 'border-gray-300'
            }`}
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
