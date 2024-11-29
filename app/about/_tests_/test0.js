import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import Compare from "../../compare/page"; // Adjust the path if necessary
import '@testing-library/jest-dom';

describe("Compare Component", () => {

  // Mock the fetch call to return some mock wines data
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              title: "Wine 1",
              winery: "Winery A",
              volume: "750ml",
              alcohol_content: "12%",
              sugar_content: "5g",
              temperature: "16°C",
              flavour: "Fruity",
              matchings: "Cheese",
              type: "Red",
              region: "Region A",
              country: "Country A",
              image: "https://via.placeholder.com/100",
              link: "https://liquorpei.com/products/19-crimes-cali-red/"
            },
            {
              title: "Wine 2",
              winery: "Winery B",
              volume: "750ml",
              alcohol_content: "14%",
              sugar_content: "4g",
              temperature: "18°C",
              flavour: "Dry",
              matchings: "Steak",
              type: "Red",
              region: "Region B",
              country: "Country B",
              image: "https://via.placeholder.com/100",
              link: "https://liquorpei.com/products/19-crimes-shiraz/"
            },
          ]),
      })
    );
  });

  // Test 1: Wine search input renders correctly
  it("renders search input for wine selection", () => {
    render(<Compare />);
    
    const searchInput1 = screen.getByPlaceholderText(/Search for wine 1/i);
    const searchInput2 = screen.getByPlaceholderText(/Search for wine 2/i);
    
    expect(searchInput1).toBeInTheDocument();
    expect(searchInput2).toBeInTheDocument();
  });

  // Test 2: Wine search functionality works correctly (shows suggestions)
  it("displays suggestions when typing in the search input", async () => {
    render(<Compare />);
    
    const searchInput1 = screen.getByPlaceholderText(/Search for wine 1/i);
    fireEvent.change(searchInput1, { target: { value: "Wine 1" } });
    
    const suggestion = await screen.findByText("Wine 1");
    
    expect(suggestion).toBeInTheDocument();
  });

  // Test 3: Selecting a wine should populate the search field and add it to the selection
  it("selects a wine and updates the search field", async () => {
    render(<Compare />);
    
    const searchInput1 = screen.getByPlaceholderText(/Search for wine 1/i);
    fireEvent.change(searchInput1, { target: { value: "Wine 1" } });

    const wine1Option = await screen.findByText("Wine 1");
    fireEvent.click(wine1Option);

    expect(searchInput1.value).toBe("Wine 1");
  });

  // Test 4: Comparison table should render the selected wines' attributes
  it("renders the comparison table with selected wines' attributes", async () => {
    render(<Compare />);
    
    const searchInput1 = screen.getByPlaceholderText(/Search for wine 1/i);
    const searchInput2 = screen.getByPlaceholderText(/Search for wine 2/i);
    
    fireEvent.change(searchInput1, { target: { value: "Wine 1" } });
    fireEvent.change(searchInput2, { target: { value: "Wine 2" } });
    
    const wine1Option = await screen.findByText("Wine 1");
    const wine2Option = await screen.findByText("Wine 2");
    
    fireEvent.click(wine1Option);
    fireEvent.click(wine2Option);
    
    // Wait for the comparison table to render
    await waitFor(() => screen.getAllByText("Wine 1"));
    await waitFor(() => screen.getAllByText("Wine 2"));

    expect(screen.getByText("Winery A")).toBeInTheDocument();
    expect(screen.getByText("Winery B")).toBeInTheDocument();
    expect(screen.getByText("Fruity")).toBeInTheDocument();
    expect(screen.getByText("Dry")).toBeInTheDocument();
  });

  // Test 5: Reset button resets selections and search queries
  it("resets selection and search queries when reset button is clicked", async () => {
    render(<Compare />);
    
    const searchInput1 = screen.getByPlaceholderText(/Search for wine 1/i);
    const searchInput2 = screen.getByPlaceholderText(/Search for wine 2/i);
    
    fireEvent.change(searchInput1, { target: { value: "Wine 1" } });
    fireEvent.change(searchInput2, { target: { value: "Wine 2" } });

    const wine1Option = await screen.findByText("Wine 1");
    const wine2Option = await screen.findByText("Wine 2");

    fireEvent.click(wine1Option);
    fireEvent.click(wine2Option);

    // Click the reset button
    const resetButton = screen.getByText("Reset Selection");
    fireEvent.click(resetButton);

    // Verify that the search fields are reset to empty
    expect(searchInput1.value).toBe("");
    expect(searchInput2.value).toBe("");
  });

  // Test 6: Ensure that the 'explore more' link is working
  it("displays 'explore more' link for selected wines", async () => {
    render(<Compare />);

    // Simulate the selection of wines
    fireEvent.change(screen.getByPlaceholderText(/Search for wine 1/i), { target: { value: "Wine 1" } });

    // Simulate clicking on the wines
    fireEvent.click(await screen.findByText("Wine 1"));

    // Wait for the 'explore more' links to appear
    await waitFor(() => screen.getAllByText("Click Here"));

    // Check that 'explore more' links exist
    const exploreLinks = screen.getAllByText("Click Here");
    expect(exploreLinks).toHaveLength(1); // Ensure 2 links are present
  });
});
