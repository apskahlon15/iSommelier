"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here, like redirecting to a search page
    console.log("Search Query:", searchQuery);
  };

  return (
    <nav className="bg-blue-600 p-6">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl flex-shrink-0">
          <Link href="/">Isomiller</Link>
        </div>

        {/* Centered Content */}
        <div className="flex-grow flex justify-center">
          <div className="relative w-full max-w-md ml-8">
            {/* Added margin-left here */}
            <form
              onSubmit={handleSearch}
              className="relative flex items-center ml-8 pl-4"
            >
              <input
                type="text"
                className="w-full h-6 p-2 pl-4 pr-16 rounded-md text-black"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black px-4 rounded-md hover:bg-gray-300"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Links and Authentication */}
        <div className="flex space-x-12 items-center flex-shrink-0">
          <ul className="flex space-x-12 text-lg">
            <li>
              <Link href="/" className="text-gray-200 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-200 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                className="text-gray-200 hover:text-white flex items-center"
              >
                <span className="ml-2">Wishlist</span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-6">
            <Link
              href="/login"
              className="text-gray-200 hover:text-white flex items-center"
            >
              <span className="mr-2">Login</span>
              <Image src="/login.png" alt="Login Icon" width={24} height={24} />
            </Link>
            <Link
              href="/signup"
              className="text-gray-200 hover:text-white flex items-center"
            >
              <span className="mr-2">Sign Up</span>
              <Image
                src="/sign up.png"
                alt="Sign Up Icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
