"use client";
import { useState, useEffect } from "react";
import { Product } from "@/lib/types";

interface FilterSectionProps {
  products: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

export default function FilterSidebar({
  products,
  setFilteredProducts,
}: FilterSectionProps) {
  const [filters, setFilters] = useState({
    customizable: null as boolean | null,
    idealFor: [] as string[],
    occasion: [] as string[],
    work: [] as string[],
    fabric: [] as string[],
    segment: [] as string[],
    suitableFor: [] as string[],
    rawMaterials: [] as string[],
    pattern: [] as string[],
  });

  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>({
    customizable: false,
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleOption = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const current = prev[key] as string[];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  const toggleFilterVisibility = (key: string) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    setFilteredProducts(products); // Placeholder logic
  }, [filters]);

  const FilterBlock = ({
    title,
    keyName,
    options,
    type = "multi",
  }: {
    title: string;
    keyName: keyof typeof filters;
    options?: string[];
    type?: "multi" | "boolean";
  }) => (
    <div className="filter-block">
      <div
        className="filter-block-header"
        onClick={() => toggleFilterVisibility(keyName)}
      >
        <h4>{title}</h4>
        <span className="toggle-icon">{openFilters[keyName] ? "▲" : "▼"}</span>
      </div>

      {openFilters[keyName] && type === "multi" && options && (
        <div className="filter-options">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={(filters[keyName] as string[]).includes(option)}
                onChange={() => toggleOption(keyName, option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {openFilters[keyName] && type === "boolean" && (
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              checked={filters.customizable === true}
              onChange={() =>
                setFilters({
                  ...filters,
                  customizable: filters.customizable === true ? null : true,
                })
              }
            />
            Yes
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.customizable === false}
              onChange={() =>
                setFilters({
                  ...filters,
                  customizable: filters.customizable === false ? null : false,
                })
              }
            />
            No
          </label>
        </div>
      )}
    </div>
  );

  return (
    <div className="filter-sidebar">
      <h3 className="filter-title">FILTER BY</h3>

      <FilterBlock title="Customizable" keyName="customizable" type="boolean" />
      <FilterBlock
        title="Ideal For"
        keyName="idealFor"
        options={["Men", "Women", "Baby & Kids"]}
      />
      <FilterBlock
        title="Occasion"
        keyName="occasion"
        options={["Casual", "Party", "Festive"]}
      />
      <FilterBlock
        title="Work"
        keyName="work"
        options={["Office", "Field", "Remote"]}
      />
      <FilterBlock
        title="Fabric"
        keyName="fabric"
        options={["Cotton", "Silk", "Linen"]}
      />
      <FilterBlock
        title="Segment"
        keyName="segment"
        options={["Premium", "Budget"]}
      />
      <FilterBlock
        title="Suitable For"
        keyName="suitableFor"
        options={["Summer", "Winter"]}
      />
      <FilterBlock
        title="Raw Materials"
        keyName="rawMaterials"
        options={["Wool", "Synthetic", "Natural"]}
      />
      <FilterBlock
        title="Pattern"
        keyName="pattern"
        options={["Striped", "Plain", "Printed"]}
      />

      <style jsx>{`
        .filter-sidebar {
          width: 260px;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .filter-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .filter-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-bottom: 1px solid #eee;
          padding-bottom: 16px;
        }

        .filter-block-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 4px 0;
        }

        .filter-block h4 {
          font-size: 15px;
          font-weight: 600;
          margin: 0;
          color: #333;
        }

        .toggle-icon {
          font-size: 12px;
          cursor: pointer;
          color: #666;
        }

        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 8px;
          margin-top: 8px;
        }

        label {
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #555;
          cursor: pointer;
        }

        input[type="checkbox"] {
          cursor: pointer;
          accent-color: #000;
        }
      `}</style>
    </div>
  );
}
