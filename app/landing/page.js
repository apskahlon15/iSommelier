
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Select from "react-select";

const generateSlug = (title) => {
  return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};

const wineTypes = [
  { value: 'White', label: 'White' },
  { value: 'Red', label: 'Red' },
  { value: 'Sparkling', label: 'Sparkling' },
  { value: 'Rose', label: 'Rosé' },
  { value: 'Dessert/Fruit', label: 'Dessert' }
];

const regions = [
  { value: 'Ontario', label: 'Ontario' },
  { value: 'Quebec', label: 'Quebec' },
  { value: 'British Columbia', label: 'British Columbia' },
  { value: 'Nova Scotia', label: 'Nova Scotia' },
  { value: 'Alberta', label: 'Alberta' },
  { value: 'NULL', label: 'Other' }
];

const volumes = [
  { value: '750 ML', label: '750 ml' },
  { value: '3 L', label: '3 L' },
  { value: '4 L', label: '4 L' },
  { value: '200 ML', label: '200 ml' },
  { value: 'NULL', label: 'Other' }
];

const getUniqueWines = (wines) => {
  const seen = new Set();
  return wines.filter((wine) => {
    const identifier = `${wine.title.toLowerCase()}|${wine.region.toLowerCase()}|${wine.volume}`;
    if (seen.has(identifier)) {
      return false;
    }
    seen.add(identifier);
    return true;
  });
};

export default function Landing() {
  const [wishlist, setWishlist] = useState([]);
  const [wines, setWines] = useState([]); // State to store wine data
  const [showAllWines, setShowAllWines] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedVolume, setSelectedVolume] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   // Fetch wine data from MongoDB when component mounts
  //   const fetchWines = async () => {
  //     const response = await fetch("/api/wines");
  //     const data = await response.json();
  //     setWines(data);
  //   };

  //   fetchWines();

  //   const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   setWishlist(storedWishlist);
  // }, []);
  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/wines`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setWines(data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching wines:", error);
      }
    };   

    fetchWines();
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleWishlistClick = (event, wine) => {
    event.stopPropagation();
    setWishlist((prevWishlist) => {
      const wineExists = prevWishlist.some(
        (item) => item.title === wine.title && item.image === wine.image
      );

      const updatedWishlist = wineExists
        ? prevWishlist.filter(
            (item) => item.title !== wine.title || item.image !== wine.image
          )
        : [...prevWishlist, wine];

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };


  
  // Filter wines based on the search query (case-insensitive)
  const filteredWines = wines.filter((wine) => {
    // Apply search query filter
    const matchesSearchQuery =
      wine.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.region.toLowerCase().includes(searchQuery.toLowerCase());

    // Apply type filter
    const matchesType =
      selectedType ? wine.type.toLowerCase() === selectedType.value.toLowerCase() : true;

    // Apply region filter
    const matchesRegion =
      selectedRegion ? wine.region.toLowerCase() === selectedRegion.value.toLowerCase() : true;

    // Apply volume filter
    const matchesVolume =
    selectedVolume ? wine.volume === selectedVolume.value : true;

    return matchesSearchQuery && matchesType && matchesRegion && matchesVolume;
  });

  const winesToDisplay = showAllWines ? filteredWines : filteredWines.slice(0, 4);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="relative flex-grow flex flex-col items-center text-center">
        <div className="relative w-full h-[50vh] overflow-hidden mb-8">
          <Image
            src="/wines.jpeg"
            alt="Wine"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-6">
            <h2 className="text-4xl font-bold mb-4">Discover the Perfect Wine</h2>
            <p className="text-lg mb-6 max-w-md">
              Explore our curated wine selections and find the best choices for every occasion.
            </p>
            <Link href="/signup" legacyBehavior>
              <button className="bg-[#f1f2f6] text-[#004e89] px-6 py-3 rounded-lg text-md font-semibold hover:bg-[#e0e2e7] transform hover:scale-105 duration-300">
                Compare
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-6 px-4 w-full max-w-screen-md relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for wines..."
            className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#004e89] text-black"
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap justify-center gap-4 w-full max-w-screen-md">
          <div className="flex-1">
            <Select
              options={wineTypes}
              value={selectedType}
              onChange={setSelectedType}
              placeholder="Select Type"
            />
          </div>
          <div className="flex-1">
            <Select
              options={regions}
              value={selectedRegion}
              onChange={setSelectedRegion}
              placeholder="Select Region"
            />
          </div>
          <div className="flex-1">
            <Select
              options={volumes}
              value={selectedVolume}
              onChange={setSelectedVolume}
              placeholder="Select Volume"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 mb-6">
          {winesToDisplay.map((wine) => (
            <div
              key={wine.title}
              className="relative flex flex-col items-center gap-2 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => router.push(`/wine/${generateSlug(wine.id)}`)}
            >
              <div className="relative w-full h-56">
                <Image
                  src={wine.image}
                  alt={wine.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={(event) => handleWishlistClick(event, wine)}
                >
                  <Image
                    src={wishlist.some(
                      (item) =>
                        item.title === wine.title && item.image === wine.image
                    )
                      ? "/heart-2.png"
                      : "/heart-1.png"}
                    alt="Heart Icon"
                    width={28}
                    height={28}
                    className="transform hover:scale-125 transition-transform duration-200"
                  />
                </div>
              </div>
              <p className="text-sm font-semibold text-black">{wine.title}</p>
              <p className="text-xs text-gray-500">{wine.volume}</p>
              <p className="text-xs text-gray-500">{wine.region}</p>
            </div>
          ))}
        </div>

        {filteredWines.length > 4 && (
          <button
            onClick={() => setShowAllWines(!showAllWines)}
            className="bg-[#004e89] text-white py-2 px-4 rounded-lg mb-6"
          >
            {showAllWines ? "Show Less" : "Show All Wines"}
          </button>
        )}

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#004e89] text-white p-4 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          ↑
        </button>
      </main>
    </div>
  );
}

