"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Retrieve wishlist from local storage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const handleRemoveClick = (itemToRemove) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.title !== itemToRemove.title
    );
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="mt-16"> {/* Added margin-top to create space from navbar */}
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Welcome to Your Wishlist!
        </h1>

        <div className="max-w-6xl mx-auto">
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center">
              <p className="text-center text-lg text-gray-600 animate-bounce">
                Your wishlist is empty. Please select your favorite wines!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {wishlistItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border rounded-lg shadow-md bg-gray-50 p-4"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={300}
                    className="mb-4 rounded-lg"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 text-center">
                    {item.title}
                  </h2>
                  <button
                    onClick={() => handleRemoveClick(item)}
                    className="bg-red-500 text-white mt-4 px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-full"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <Link href="/addwines">
            <div className="flex items-center justify-center">
              <button className="bg-[#004e89] text-white my-11 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#003765] transition duration-300 ease-in-out">
                Add Wines
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
