import React, { useState } from "react";
import { Range } from "react-range";

const Filter = ({
  uniqueSidesA,
  uniqueSidesB,
  onFilterChange,
  filteredConflicts,
}) => {
  // Local filter states
  const minDeaths = 0;
  const maxDeaths = 163000; // Matches the slider's max value
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    deathsRange: [minDeaths, maxDeaths],
    sideA: "",
    sideB: "",
  });

  // Generate years from 1989 to 2023
  const years = Array.from({ length: 2023 - 1989 + 1 }, (_, i) => 1989 + i);

  // Handle filter input changes
  const handleFilterChange = (e) => {
    const updatedFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Send updates to parent
  };

  const handleDeathsRangeChange = (range) => {
    const updatedFilters = {
      ...filters,
      deathsRange: range,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Send updates to parent
  };

  return (
    <div className="filter">
      <h2>Filter conflicts</h2>

      <div className="results">
        <p></p>
      </div>

      {/* Date Filters */}
      <div>
        <br />
        <br /><br />
        <label>Date</label>
        <div className="filterDateWrapper">
          <select name="dateFrom" onChange={handleFilterChange}>
            <option value="">From</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select name="dateTo" onChange={handleFilterChange}>
            <option value="">To</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      {/* Deaths Filters with Slider */}
      <div>
        <label>Deaths</label>
        <br />
        <div
          style={{
            margin: "20px 0",
            padding: "0 20px",
            fontFamily: "Sintony",
            fontWeight: "700",
          }}
        >
          <Range
            step={20} // Step value
            min={minDeaths} // Minimum value
            max={maxDeaths} // Maximum value
            values={filters.deathsRange}
            onChange={handleDeathsRangeChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  background: "#ddd",
                  position: "relative",
                }}
              >
                {children}
                <div
                  style={{
                    position: "absolute",
                    height: "6px",
                    background: "#F40C3F",
                    borderRadius: "3px",
                    left: `${
                      ((filters.deathsRange[0] - minDeaths) /
                        (maxDeaths - minDeaths)) *
                      100
                    }%`,
                    right: `${
                      100 -
                      ((filters.deathsRange[1] - minDeaths) /
                        (maxDeaths - minDeaths)) *
                        100
                    }%`,
                  }}
                />
              </div>
            )}
            renderThumb={({ props, index }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "16px",
                  width: "16px",
                  background: "#F40C3F",
                  borderRadius: "50%",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    translate: "-10px",
                    top: "-28px",
                    color: "#1a1a1a",
                    fontSize: "12px",
                  }}
                >
                  {filters.deathsRange[index]}
                </span>
              </div>
            )}
          />
        </div>
        <br />
      </div>

      {/* Side A Filter */}
      <div>
        <label>Governments</label>
        <select name="sideA" onChange={handleFilterChange}>
          <option value="">Select</option>
          {uniqueSidesA.map((side) => (
            <option key={side} value={side}>
              {side}
            </option>
          ))}
        </select>
      </div>

      <br />

      {/* Side B Filter */}
      <div>
        <label>Organizations</label>
        <select name="sideB" onChange={handleFilterChange}>
          <option value="">Select</option>
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
