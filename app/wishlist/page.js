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

  const wineImages = {
    "Crimson Ridge Cabernet Sauvignon": "/red.webp",
    "Silver Oak Chardonnay": "/red2.webp",
    "Eclipse Estate Pinot Noir": "/wine3.webp",
    "Golden Harvest Merlot": "/wine4.webp",
  };

  const handleCompareClick = () => {
    localStorage.setItem("compare", JSON.stringify(wishlistItems));
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <h1 className="text-3xl font-bold text-center text-cyan-500 mb-8">
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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {wishlistItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border rounded-lg shadow-md bg-gray-50 p-4"
                >
                  <Image
                    src={wineImages[item]}
                    alt={item}
                    width={200}
                    height={300}
                    className="mb-4 rounded-lg"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 text-center">
                    {item}
                  </h2>
                </div>
              ))}
            </div>
            <Link
              href="/compare"
              onClick={handleCompareClick}
              className="block text-center bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition duration-300"
            >
              Ready to Compare
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
