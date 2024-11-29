import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddToWishlist from "../../addwines/page"; // Adjust the path to your component
import { useRouter } from "next/navigation";

// Mock router to intercept navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("AddToWishlist Component", () => {
  const mockRouter = { push: jest.fn() };
  const mockWines = [
    { id: 1, title: "Chardonnay", image: "/wine1.jpg", region: "France" },
    { id: 2, title: "Merlot", image: "/wine2.jpg", region: "Italy" },
  ];

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);

    // Mock fetch API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockWines),
      })
    );

    // Mock localStorage
    global.localStorage = {
      getItem: jest.fn(() => JSON.stringify([])),
      setItem: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test 1: Verify Wines are Fetched Successfully
  it("should fetch and display wines on page load", async () => {
    render(<AddToWishlist />);

    // Wait for wine titles to appear
    await waitFor(() => expect(screen.getByText("Chardonnay")).toBeInTheDocument());
    expect(screen.getByText("Merlot")).toBeInTheDocument();
  });

  // Test 2: Verify Search Functionality
  it("should filter wines based on search query", async () => {
    render(<AddToWishlist />);

    // Wait for wine titles to appear
    await waitFor(() => screen.getByText("Chardonnay"));

    // Type into the search bar
    fireEvent.change(screen.getByPlaceholderText("Search for wines..."), {
      target: { value: "Merlot" },
    });

    // Verify filtered results
    expect(screen.queryByText("Chardonnay")).not.toBeInTheDocument();
    expect(screen.getByText("Merlot")).toBeInTheDocument();
  });

  // Test 3: Verify Adding and Removing Wines from Wishlist
  it("should toggle selection of wines", async () => {
    render(<AddToWishlist />);
  
    // Try matching with case-insensitive text search
    const wineCard = screen.getByText(/Chardonnay/i);  // Matches Chardonnay text in any casing
    
    // Verify the initial class
    expect(wineCard.closest("div")).toHaveClass("border-gray-300");
  
    // Simulate wine selection
    fireEvent.click(wineCard.closest("div"));
    await waitFor(() => expect(wineCard.closest("div")).toHaveClass("border-[#004e89]"));
  
    // Simulate deselection
    fireEvent.click(wineCard.closest("div"));
    await waitFor(() => expect(wineCard.closest("div")).toHaveClass("border-gray-300"));
  });
  
  // Test 4: Verify Wishlist Persistence
  it("should persist wishlist in localStorage", async () => {
    render(<AddToWishlist />);
  
    // Wait for wine titles to appear
    await waitFor(() => screen.getByText("Chardonnay"));
  
    const wineCard = screen.getByText("Chardonnay").closest("div");
  
    // Select the wine
    fireEvent.click(wineCard);
  
    // Click "Add Wines" to persist in localStorage
    fireEvent.click(screen.getByText("Add Wines"));
  
    // Wait for localStorage to be called
    await waitFor(() => {
      expect(global.localStorage.setItem).toHaveBeenCalledWith(
        "wishlist",
        JSON.stringify([{ id: 1, title: "Chardonnay", image: "/wine1.jpg", region: "France" }])
      );
    });
  });
  

  // Test 5: Verify Navigation to Wishlist Page
  it("should navigate to the wishlist page on button click", async () => {
    render(<AddToWishlist />);
  
    // Click the "Add Wines" button
    fireEvent.click(screen.getByText("Add Wines"));
  
    // Wait for navigation to be called
    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith("/wishlist");
    });
  });
  
});
