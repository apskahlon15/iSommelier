"use client"; // Ensures the component is client-side rendered

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAppearanceActive, setIsAppearanceActive] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const toggleAppearance = () => {
    setIsAppearanceActive((prevState) => !prevState);
    console.log(
      "Appearance is",
      isAppearanceActive ? "Deactivated" : "Activated"
    );
  };

  return (
    <nav className="p-4 md:p-6 shadow-lg bg-blue-900">
      <div className="container mx-auto flex items-center justify-between space-x-6">
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/iSomillier-logo.png"
            alt="iSommelier Logo"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </div>

        {/* Navigation Links and Authentication */}
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <ul className="flex space-x-4 md:space-x-6 text-base md:text-lg font-medium">
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/")}
                className="text-gray-100 hover:text-yellow-400"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/about")}
                className="text-gray-100 hover:text-yellow-400"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/wishlist")}
                className="text-gray-100 hover:text-yellow-400"
              >
                Wishlist
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/signup")}
                className="text-gray-100 hover:text-yellow-400"
              >
                Sign Up
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </li>

            {/* Settings Dropdown */}
            <li className="relative group">
              <div
                className="text-gray-100 flex items-center hover:text-yellow-400 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Settings
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                  <ul className="text-black">
                    <li className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                      <span>Appearance</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={isAppearanceActive}
                          onChange={toggleAppearance}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition-all"></div>
                      </label>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleNavigation("/feedback")}
                    >
                      Feedback
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
