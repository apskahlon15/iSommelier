"use client"; // Ensures the component is client-side rendered

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    // Handle search logic here, e.g., router.push(`/search?query=${searchQuery}`);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav className="p-6 shadow-lg" style={{ backgroundColor: "#03045e" }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/iSomillier-logo.png"
            alt="iSommelier Logo"
            width={110}
            height={110}
          />
        </div>

        {/* Centered Content */}
        <div className="flex-grow flex justify-center">
          <div className="relative w-full max-w-lg">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center"
            >
              <input
                type="text"
                className="w-full h-12 p-4 pr-16 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-lg text-black transition-transform duration-300 ease-in-out hover:shadow-xl"
                placeholder="Search for wines, regions, or varietals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-300 ease-in-out"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Links and Authentication */}
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg font-semibold">
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/")}
                className="text-gray-200 flex items-center hover:text-yellow-400"
              >
                <span className="relative">Home</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/about")}
                className="text-gray-200 flex items-center hover:text-yellow-400"
              >
                <span className="relative">About</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/wishlist")}
                className="text-gray-200 flex items-center hover:text-yellow-400"
              >
                <span className="relative">Wishlist</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/feedback")}
                className="text-gray-200 flex items-center hover:text-yellow-400"
              >
                <span className="relative">Feedback</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/signup")}
                className="text-gray-200 flex items-center hover:text-yellow-400"
              >
                <span className="relative">Sign Up</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
