import React, { useContext, useState } from "react";
import { FaTh, FaThList } from "react-icons/fa"; // Icons for grid and list view
import { ThemeContext } from "../context/ThemeContext";

export function Filters({ onFilterChange, onSortChange, onViewToggle }) {
  const { theme, view, toggleView } = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState("");

  const handleFilterChange = (event) => {
    onFilterChange?.(event.target.value);
  };

  const handleSortChange = (event) => {
    onSortChange?.(event.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    onFilterChange?.(e.target.value);
  };

  return (
    <div
      className={`${theme ? "dark" : "light"} transition-colors duration-300 container flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto px-4 py-4 h-auto md:h-16 shadow-md sticky top-0 border-b z-10 border`}
    >
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <select
          className="p-2 rounded-md text-gray-700 w-full md:w-auto"
          onChange={handleFilterChange}
          defaultValue=""
          aria-label="Filter by Department"
        >
          <option value="">Select Department</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
          <option value="HR">HR</option>
        </select>

        <select
          className="p-2 rounded-md text-gray-700 w-full md:w-auto"
          onChange={handleSortChange}
          defaultValue=""
          aria-label="Sort Employees"
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="salary-asc">Salary (Low to High)</option>
          <option value="salary-desc">Salary (High to Low)</option>
        </select>
      </div>

      {/* Search Input Section */}
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <input
          type="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search Employee here..."
          className="p-2 rounded-md w-full md:w-80 text-gray-700 focus:outline-none"
          aria-label="Search Employees"
        />
      </div>

      {/* View Toggle Button */}
      <div
        className="view-toggle cursor-pointer flex justify-center md:justify-end w-full md:w-auto"
        onClick={toggleView}
        title="Toggle View"
      >
        {view ? <FaThList size={24} /> : <FaTh size={24} />}
      </div>
    </div>
  );
}
