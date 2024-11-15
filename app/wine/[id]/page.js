"use client";
import React from "react";
import Image from "next/image";
import prisma from "../../../lib/prisma";

export default function WineDetail({ wine }) {
  if (!wine) {
    return <p className="text-center text-red-500 font-semibold">Wine not found.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-6">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Main Flex Section with Image on the Left and Text on the Right */}
        <div className="flex flex-col lg:flex-row gap-6 p-6">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[600px] relative flex justify-center items-center">
            <Image
              src={wine.image}
              alt={wine.title}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <h1 className="text-4xl font-serif font-extrabold text-blue-900 mt-16 mb-24 tracking-wide">
              {wine.title}
            </h1>
            <h2 className="text-2xl font-sans font-semibold text-gray-800 mb-6">
              Description
            </h2>
            <p className="text-md font-sans text-gray-600 mb-8 leading-relaxed tracking-wide">
              {wine.description}
            </p>
          </div>
        </div>

        {/* Wine Details Section */}
        <div className="px-28 py-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-2">Wine Details</h2>
          <table className="w-full text-left text-gray-800 border-collapse">
            <tbody>
              {[
                { label: "Winery", value: wine.winery },
                { label: "Country", value: wine.country },
                { label: "Region", value: wine.region },
                { label: "Volume", value: wine.volume },
                { label: "Alcohol Content", value: wine.alcohol_content },
                { label: "Sugar Content", value: wine.sugar_content },
                { label: "Type", value: wine.type },
                { label: "Food Pairing", value: wine.matchings },
              ].map(({ label, value }) => (
                <tr key={label} className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-sm text-gray-700">{label}:</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Fetching wine data using Prisma on each request (SSR)
export async function getServerSideProps({ params }) {
  const { id } = params;  // Assuming wine's ID is passed in the URL as a parameter

  // Fetch the wine data from Prisma based on the wine ID
  const wine = await prisma.wine.findUnique({
    where: {
      id: Number(id),
    },
  });

  // Close Prisma Client after the query is done
  prisma.$disconnect();

  return {
    props: {
      wine: wine || null,  // Pass the fetched wine data or null if not found
    },
  };
}





