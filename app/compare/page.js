"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Compare = () => {
  const [wines, setWines] = useState([]);
  const [selectedWines, setSelectedWines] = useState([null, null, null]);
  const [searchQueries, setSearchQueries] = useState(["", "", ""]);

  // Fetch wines from the API
  useEffect(() => {
    const fetchWines = async () => {
      try {
        //const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/wines`);
        const response = await fetch("/api/wines");
        const data = await response.json();
        setWines(data);
      } catch (error) {
        console.error("Error fetching wines:", error);
      }
    };
    fetchWines();
  }, []);

  // Handle search input for each search box
  const handleSearchChange = (index, value) => {
    const newSearchQueries = [...searchQueries];
    newSearchQueries[index] = value;
    setSearchQueries(newSearchQueries);
  };

  // Handle wine selection for each search box
  const handleWineSelect = (index, wine) => {
    const newSelectedWines = [...selectedWines];
    newSelectedWines[index] = wine;
    setSelectedWines(newSelectedWines);
    const newSearchQueries = [...searchQueries];
    newSearchQueries[index] = wine.title; // Set the search box to the selected wine title
    setSearchQueries(newSearchQueries);
  };

  const resetSelection = () => {
    setSelectedWines([null, null, null]);
    setSearchQueries(["", "", ""]);
  };

  const renderComparison = () => {
    const attributes = [
      { label: "Image", key: "image" },
      { label: "Title", key: "title" },
      { label: "Winery", key: "winery" },
      { label: "Volume", key: "volume" },
      { label: "Alcohol Content", key: "alcohol_content" },
      { label: "Sugar Content", key: "sugar_content" },
      { label: "Temperature", key: "temperature" },
      { label: "Flavour", key: "flavour" },
      { label: "Matchings", key: "matchings" },
      { label: "Type", key: "type" },
      { label: "Region", key: "region" },
      { label: "Country", key: "country" },
    ];

    return (
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-800">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Attribute
              </th>
              {selectedWines.map((wine, idx) => (
                <th
                  key={idx}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {wine ? wine.title : `Wine ${idx + 1}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attributes.map((attr) => (
              <tr key={attr.label} className="border-b">
                <td className="border border-gray-300 px-4 py-2 font-semibold text-black">
                  {attr.label}
                </td>
                {selectedWines.map((wine, idx) => (
                  <td
                    key={idx}
                    className="border border-gray-300 px-4 py-2 text-black"
                  >
                    {wine ? (
                      attr.key === "image" ? (
                        <Image
                          src={wine.image} // Display image
                          alt={wine.title}
                          width={100}
                          height={100}
                          className="mx-auto mb-1" // Center the image and add margin
                        />
                      ) : (
                        wine[attr.key] || "N/A" // Display attribute value
                      )
                    ) : (
                      "N/A"
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold text-black">
                Explore More
              </td>
              {selectedWines.map((wine, idx) => (
                <td key={idx} className="border border-gray-300 px-4 py-2">
                  {wine ? (
                    <a
                      href={wine.link} // Assuming each wine object has a `link` property
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Security for links
                      className="text-blue-600 hover:underline"
                    >
                      Click Here
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl text-center font-bold py-8 text-black">
        Select up to 3 wines to compare
      </h1>

      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {[0, 1, 2].map((index) => (
          <div key={index} className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/4 relative">
            <input
              type="text"
              placeholder={`Search for wine ${index + 1}`}
              value={searchQueries[index]}
              onChange={(e) => handleSearchChange(index, e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#004e89] text-black"
            />
            {searchQueries[index] && !selectedWines[index] && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 z-10">
                {wines
                  .filter(
                    (wine) =>
                      wine.title &&
                      wine.title
                        .toLowerCase()
                        .includes(searchQueries[index].toLowerCase())
                  )
                  .slice(0, 5) // Limit suggestions to 5
                  .map((wine) => (
                    <div
                      key={wine.link}
                      onClick={() => handleWineSelect(index, wine)}
                      className="p-2 cursor-pointer hover:bg-gray-100 flex items-center text-black"
                    >
                      <Image
                        src={wine.image}
                        alt={wine.title}
                        width={50}
                        height={50}
                        className="mr-2"
                      />
                      {wine.title}{" "}
                      {/* Display wine title in the search suggestion */}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedWines.some((wine) => wine) && (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl mt-4">{renderComparison()}</div>
        </div>
      )}

      {selectedWines.some((wine) => wine) && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={resetSelection}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          >
            Reset Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default Compare;
