"use client";

import FilterControls from "@/components/Filters/FilterControls";
import FilterSection from "@/components/Filters/FilterSection";
import ProductList from "@/components/Product/ProductList";
import { Product } from "@/lib/types";
import { useState } from "react";
import Footer from "./Footer";
import TopNav from "./Header/TopNav";

export default function ClientWrapper({ products }: { products: Product[] }) {
  const [showFilters, setShowFilters] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      <style jsx>{`
        .content-wrapper {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 40px 60px;
          gap: 50px;
        }

        .filter-panel {
          width: 280px;
          flex-shrink: 0;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
        }

        .product-display {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 30px;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
          }

          .filter-panel {
            width: 100%;
          }

          .product-display {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <div className="layout">
        <TopNav />

        <FilterControls
          productsCount={filteredProducts.length}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          setFilteredProducts={setFilteredProducts}
          filteredProducts={filteredProducts}
        />

        <div className="content-wrapper">
          {showFilters && (
            <div className="filter-panel">
              <FilterSection
                products={products}
                setFilteredProducts={setFilteredProducts}
              />
            </div>
          )}

          <div className="">
            <ProductList products={filteredProducts} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
