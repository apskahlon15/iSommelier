"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg bg-blue-900">
      <div className="container mx-auto flex items-center justify-between space-x-6">
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/iSomillier-logo.png"
            alt="iSommelier Logo"
            width={80}
            height={80}
            className="h-auto w-auto"
          />
        </div>

        {/* Navigation Links */}
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

            {/* Feedback */}
            <li className="relative group">
              <button
                onClick={() => handleNavigation("/feedback")}
                className="text-gray-100 hover:text-yellow-400"
              >
                Feedback
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
