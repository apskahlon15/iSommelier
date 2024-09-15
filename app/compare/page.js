"use client";
import React, { useState } from "react";

// Mock wine data with comparison attributes
const wines = [
  {
    id: 1,
    name: "Wine 1",
    description: "A rich Chardonnay with hints of citrus and apple.",
    image: "/white.webp",
    rating: 4.5,
    volume: "750ml",
    alcohol: "13%",
    sugarContent: "2g/L",
    varietal: "Chardonnay",
    body: "Medium",
    sweetness: "Dry",
    flavourProfile: "Citrus, Apple",
    region: "Napa Valley",
  },
  {
    id: 2,
    name: "Wine 2",
    description: "A crisp Sauvignon Blanc with notes of grass and lime.",
    image: "/red.webp",
    rating: 4.2,
    volume: "750ml",
    alcohol: "12%",
    sugarContent: "3g/L",
    varietal: "Sauvignon Blanc",
    body: "Light",
    sweetness: "Off-dry",
    flavourProfile: "Grass, Lime",
    region: "Marlborough",
  },
  {
    id: 3,
    name: "Wine 3",
    description: "A full-bodied Pinot Noir with berry and oak flavors.",
    image: "/wine3.webp",
    rating: 4.0,
    volume: "750ml",
    alcohol: "14%",
    sugarContent: "4g/L",
    varietal: "Pinot Noir",
    body: "Full",
    sweetness: "Sweet",
    flavourProfile: "Berry, Oak",
    region: "Burgundy",
  },
  {
    id: 4,
    name: "Wine 4",
    description: "A delicate Riesling with floral and peach notes.",
    image: "/wine4.webp",
    rating: 4.3,
    volume: "750ml",
    alcohol: "11%",
    sugarContent: "8g/L",
    varietal: "Riesling",
    body: "Light",
    sweetness: "Sweet",
    flavourProfile: "Peach, Floral",
    region: "Mosel",
  },
  {
    id: 5,
    name: "Wine 5",
    description:
      "A robust Cabernet Sauvignon with flavors of blackcurrant and tobacco.",
    image: "/wine5.webp",
    rating: 4.6,
    volume: "750ml",
    alcohol: "15%",
    sugarContent: "1g/L",
    varietal: "Cabernet Sauvignon",
    body: "Full",
    sweetness: "Dry",
    flavourProfile: "Blackcurrant, Tobacco",
    region: "California",
  },
  {
    id: 6,
    name: "Wine 6",
    description: "A smooth Merlot with cherry and chocolate notes.",
    image: "/wine6.webp",
    rating: 4.4,
    volume: "750ml",
    alcohol: "13.5%",
    sugarContent: "2.5g/L",
    varietal: "Merlot",
    body: "Medium",
    sweetness: "Dry",
    flavourProfile: "Cherry, Chocolate",
    region: "Bordeaux",
  },
  {
    id: 7,
    name: "Wine 7",
    description: "An elegant Champagne with notes of apple and brioche.",
    image: "/wine7.webp",
    rating: 4.7,
    volume: "750ml",
    alcohol: "12%",
    sugarContent: "6g/L",
    varietal: "Champagne",
    body: "Light",
    sweetness: "Brut",
    flavourProfile: "Apple, Brioche",
    region: "Champagne",
  },
  {
    id: 8,
    name: "Wine 8",
    description: "A complex Shiraz with spicy and smoky undertones.",
    image: "/wine8.webp",
    rating: 4.3,
    volume: "750ml",
    alcohol: "14.5%",
    sugarContent: "3g/L",
    varietal: "Shiraz",
    body: "Full",
    sweetness: "Dry",
    flavourProfile: "Spicy, Smoky",
    region: "Barossa Valley",
  },
];

const Compare = () => {
  const [selectedWines, setSelectedWines] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const handleWineClick = (wine) => {
    if (!selectedWines.includes(wine)) {
      setSelectedWines([...selectedWines, wine]);
    } else {
      setSelectedWines(selectedWines.filter((w) => w !== wine));
    }
  };

  const resetSelection = () => {
    setSelectedWines([]);
    setShowComparison(false);
  };

  const handleCompare = () => {
    if (selectedWines.length > 1) {
      setShowComparison(true);
    }
  };

  const renderComparison = () => {
    if (selectedWines.length === 0) return null;

    const attributes = [
      "name",
      "rating",
      "volume",
      "alcohol",
      "sugarContent",
      "varietal",
      "body",
      "sweetness",
      "flavourProfile",
      "region",
    ];

    return (
      <div className="w-full max-w-6xl mt-8">
        <div className="flex flex-col">
          {/* Attribute Headers */}
          <div className="flex border-b-2 border-gray-300">
            {attributes.map((attr) => (
              <div
                key={attr}
                className="flex-1 text-lg font-bold text-center py-2 border-r border-gray-300"
                style={{ color: "#03045e" }}
              >
                {attr
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </div>
            ))}
          </div>

          {/* Data Rows */}
          <div className="flex flex-col">
            {selectedWines.map((wine) => (
              <div key={wine.id} className="flex border-b border-gray-300">
                {attributes.map((attr) => (
                  <div
                    key={attr}
                    className="flex-1 text-lg font-bold text-center py-2"
                    style={{ color: "black" }} // Set text color to black
                  >
                    {wine[attr] || "N/A"}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen p-8">
      {!showComparison && (
        <h1
          className="text-2xl text-center font-bold py-8"
          style={{ color: "#03045e" }}
        >
          {selectedWines.length < 2
            ? "Click on the wines to compare"
            : "Select wines and click Compare"}
        </h1>
      )}

      {!showComparison && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wines.map((wine) => (
            <div
              key={wine.id}
              onClick={() => handleWineClick(wine)}
              className={`cursor-pointer p-4 border rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out ${
                selectedWines.includes(wine)
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              <h2 className="text-lg font-semibold text-black">{wine.name}</h2>
              <p className="mt-2 text-black">{wine.description}</p>
              <img
                src={wine.image}
                alt={wine.name}
                className="w-48 h-auto mt-4"
              />
            </div>
          ))}
        </div>
      )}

      {selectedWines.length > 1 && !showComparison && (
        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={handleCompare}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          >
            Compare
          </button>
          <button
            onClick={resetSelection}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          >
            Reset Selection
          </button>
        </div>
      )}

      {showComparison && (
        <div className="flex flex-col items-center">
          <h2
            className="text-xl text-center font-bold py-4"
            style={{ color: "#03045e" }}
          >
            Wine Comparison
          </h2>
          <div className="flex justify-center w-full px-8 mb-4">
            {selectedWines.map((wine, index) => (
              <div
                key={wine.id}
                className={`flex-grow flex flex-col items-center p-4 ${
                  index !== selectedWines.length - 1
                    ? "border-r border-gray-300"
                    : ""
                }`}
              >
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-48 h-auto mt-4"
                />
                <h2 className="text-lg font-semibold text-black mt-4">
                  {wine.name}
                </h2>
                <p className="text-black mt-2">{wine.description}</p>
              </div>
            ))}
          </div>
          {selectedWines.length > 1 && (
            <div className="w-full max-w-6xl mt-4">{renderComparison()}</div>
          )}
          <button
            onClick={resetSelection}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          >
            Reset Comparison
          </button>
        </div>
      )}
    </div>
  );
};

export default Compare;
