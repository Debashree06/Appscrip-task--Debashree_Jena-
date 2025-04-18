// components/Filters/FilterControls.tsx
"use client";

import { useState } from "react";
import Modal from "@/components/UI/Modal";
import { Product } from "@/lib/types";

interface FilterControlsProps {
  productsCount: number;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  setFilteredProducts: (products: Product[]) => void;
  filteredProducts: Product[];
}

export default function FilterControls({
  productsCount,
  showFilters,
  setShowFilters,
  setFilteredProducts,
  filteredProducts,
}: FilterControlsProps) {
  const [showModal, setShowModal] = useState(false);
  const [sortOption, setSortOption] = useState("Recommended");

  const handleSort = (option: string) => {
    setSortOption(option);
    setShowModal(false);

    // Create a new array to avoid mutating state directly
    const sortedProducts = [...filteredProducts];

    switch (option) {
      case "Newest First":
        sortedProducts.sort((a, b) => b.id - a.id); // Assuming higher ID = newer
        break;
      case "Popular":
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "Price: High to Low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Price: Low to High":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default: // 'Recommended' (default sorting)
        // You might want to implement your recommendation algorithm here
        // For now, we'll sort by rating (popular) as recommended
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="filter-controls">
      <div className="product-count">
        <span style={{ marginRight: 4 }}>{productsCount} Items</span>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="toggle-btn"
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </button>
      </div>

      <div className="sort-options">
        <button onClick={() => setShowModal(!showModal)}>{sortOption} ▼</button>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ul style={{ cursor: "pointer" }} className="sort-dropdown">
              <li onClick={() => handleSort("Recommended")}>
                Recommended (Reset)
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("Newest First")}
              >
                Newest First
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("Popular")}
              >
                Popular
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("Price: High to Low")}
              >
                Price: High to Low
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("Price: Low to High")}
              >
                Price: Low to High
              </li>
            </ul>
          </Modal>
        )}
      </div>
    </div>
  );
}
