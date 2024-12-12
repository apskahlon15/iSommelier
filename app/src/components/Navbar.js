"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false); // Close the menu after navigation on mobile
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg bg-blue-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-900 p-4 space-y-4">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className="text-gray-100 hover:text-yellow-400 w-full text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-gray-100 hover:text-yellow-400 w-full text-left"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/wishlist")}
                className="text-gray-100 hover:text-yellow-400 w-full text-left"
              >
                Wishlist
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/signup")}
                className="text-gray-100 hover:text-yellow-400 w-full text-left"
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/feedback")}
                className="text-gray-100 hover:text-yellow-400 w-full text-left"
              >
                Feedback
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
