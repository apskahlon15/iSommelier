"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Retrieve wishlist from local storage on component mount
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleWishlistClick = (wine) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(wine)
        ? prevWishlist.filter((item) => item !== wine)
        : [...prevWishlist, wine];

      // Update local storage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const wines = [
    {
      src: "/red.webp",
      alt: "Wine 1",
      name: "Crimson Ridge Cabernet Sauvignon",
    },
    { src: "/red2.webp", alt: "Wine 2", name: "Silver Oak Chardonnay" },
    { src: "/wine3.webp", alt: "Wine 3", name: "Eclipse Estate Pinot Noir" },
    { src: "/wine4.webp", alt: "Wine 4", name: "Golden Harvest Merlot" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="relative flex-grow flex flex-col items-center text-center">
        <div className="relative w-full h-[50vh] overflow-hidden mb-12">
          <Image
            src="/wines.jpeg"
            alt="Wine"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-6">
            <h2 className="text-4xl font-bold mb-4">
              Discover the Perfect Wine
            </h2>
            <p className="text-lg mb-8 max-w-md">
              Explore our curated wine selections and find the best choices for
              every occasion.
            </p>
            <Link
              href="/signup"
              className="bg-[#f1f2f6] text-[#004e89] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#e0e2e7] transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              Compare
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-nowrap justify-center gap-8 py-8 px-4 mb-8 overflow-x-auto">
          {wines.map((wine, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-4 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/6 transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-72 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={wine.src}
                  alt={wine.alt}
                  layout="intrinsic"
                  width={280}
                  height={210}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => handleWishlistClick(wine.name)}
                >
                  <Image
                    src={
                      wishlist.includes(wine.name)
                        ? "/heart-2.png"
                        : "/heart-1.png"
                    }
                    alt="Heart Icon"
                    width={28}
                    height={28}
                    className="transform hover:scale-125 transition-transform duration-200"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold text-black">{wine.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
