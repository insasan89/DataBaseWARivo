import React, { useState } from "react";

const Filter = ({ uniqueSidesA, uniqueSidesB, onFilterChange }) => {
  // Local filter states
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    deathsFrom: "",
    deathsTo: "",
    sideA: "",
    sideB: "",
  });

  // Handle filter input changes
  const handleFilterChange = (e) => {
    const updatedFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Send updates to parent
  };

  return (
    <div className="filter">
      <h2>Filter conflicts</h2>

      {/* Date Filters */}
      <div>
        <label>Date</label>
        <div>
          <select name="dateFrom" onChange={handleFilterChange}>
            <option value="">From</option>
            {[...new Set(uniqueSidesA.map((c) => c.year))]
              .sort()
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
          <select name="dateTo" onChange={handleFilterChange}>
            <option value="">To</option>
            {[...new Set(uniqueSidesA.map((c) => c.year))]
              .sort()
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Deaths Filters */}
      <div className="dbBest">
        <label>Deaths</label>
        <div>
          <input
            type="number"
            name="deathsFrom"
            placeholder="From"
            onChange={handleFilterChange}
          />
          <input
            className="dbBest"
            type="number"
            name="deathsTo"
            placeholder="To"
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Side A Filter */}
      <div>
        <label>Side A</label>
        <select name="sideA" onChange={handleFilterChange}>
          <option value="">Select Side A</option>
          {uniqueSidesA.map((side) => (
            <option key={side} value={side}>
              {side}
            </option>
          ))}
        </select>
      </div>

      {/* Side B Filter */}
      <div>
        <label>Side B</label>
        <select name="sideB" onChange={handleFilterChange}>
          <option value="">Select Side B</option>
          {uniqueSidesB.map((side) => (
            <option key={side} value={side}>
              {side}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
