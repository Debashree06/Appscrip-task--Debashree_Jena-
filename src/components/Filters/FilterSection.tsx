"use client";
import { useState, useEffect } from "react";
import { Product } from "@/lib/types";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
    let filtered = [...products];

    Object.entries(filters).forEach(([key, values]) => {
      if (key === "customizable" && values !== null) {
        filtered = filtered.filter(
          (product) => product.customizable === values
        );
      } else if (Array.isArray(values) && values.length > 0) {
        filtered = filtered.filter((product) =>
          values.includes((product as any)[key])
        );
      }
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

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
        <span className="toggle-icon">
          {openFilters[keyName] ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
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
    </div>
  );
}
