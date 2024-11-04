"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-white py-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Welcome to Your Wishlist!
      </h1>

      <div className="max-w-2xl mx-auto px-4">
        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-center text-lg text-gray-600 animate-bounce">
              Your wishlist is empty. Please select your favorite wines!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {wishlistItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center border rounded-lg shadow-md bg-gray-50 p-4"
              >
                <Image
                  src={item.image} // Ensure each item has `image` and `title` properties
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
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
