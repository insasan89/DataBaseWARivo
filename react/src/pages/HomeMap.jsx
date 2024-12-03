import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import countriesData from "../../json db/countries.json";
import conflictsData from "../../json db/conflicts.json";
import Filter from "../components/Filter"; // Import Filter component

// Function to apply systematic jittering to markers in the same location
const getJitteredPosition = (latitude, longitude, index, count) => {
  const offsetDistance = 0.9; // Maximum offset distance for jittering
  const offsetStep = offsetDistance / count; // Divide the total offset by the number of markers

  const row = Math.floor(index / 2); // Create systematic rows for offsetting
  const col = index % 2; // Alternate between columns for each row

  const latitudeOffset = (row - Math.floor(count / 2)) * offsetStep; // Y-axis offset
  const longitudeOffset = (col - 0.5) * offsetStep; // X-axis offset

  return {
    latitude: latitude + latitudeOffset,
    longitude: longitude + longitudeOffset,
  };
};

const HomeMap = () => {
  // Match conflicts with their country coordinates
  const conflictsWithCoordinates = conflictsData.map((conflict) => {
    const country = countriesData.find(
      (c) => c.name.toLowerCase() === conflict.location_inc.toLowerCase()
    );
    return {
      ...conflict,
      latitude: country?.latitude,
      longitude: country?.longitude,
    };
  });

  // Extract unique filter values
  const uniqueSidesA = [...new Set(conflictsData.map((c) => c.side_a))];
  const uniqueSidesB = [...new Set(conflictsData.map((c) => c.side_b))];

  // State for filtered conflicts
  const [filteredConflicts, setFilteredConflicts] = useState(
    conflictsWithCoordinates
  );

  // Handle filter changes from the Filter component
  const handleFilterChange = (filters) => {
    const filtered = conflictsWithCoordinates.filter((conflict) => {
      const { dateFrom, dateTo, deathsFrom, deathsTo, sideA, sideB } = filters;

      // Filter by date
      const year = conflict.year;
      if (dateFrom && year < parseInt(dateFrom)) return false;
      if (dateTo && year > parseInt(dateTo)) return false;

      // Filter by deaths
      const bd_best = conflict.bd_best;
      if (deathsFrom && bd_best < parseInt(deathsFrom)) return false;
      if (deathsTo && bd_best > parseInt(deathsTo)) return false;

      // Filter by Side A
      if (sideA && conflict.side_a !== sideA) return false;

      // Filter by Side B
      if (sideB && conflict.side_b !== sideB) return false;

      return true;
    });

    setFilteredConflicts(filtered);
  };

  // Group conflicts by location (latitude and longitude)
  const conflictsByLocation = filteredConflicts.reduce((acc, conflict) => {
    const { latitude, longitude } = conflict;
    const key = `${latitude},${longitude}`;

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(conflict);
    return acc;
  }, {});

  return (
    <div className="mapWrapper">
      {/* Filter Component */}
      <Filter
        uniqueSidesA={uniqueSidesA}
        uniqueSidesB={uniqueSidesB}
        onFilterChange={handleFilterChange}
      />

      {/* Map */}
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'
        />

        {/* Add filtered markers with systematic jittering */}
        {Object.values(conflictsByLocation).map((conflicts, index) => {
          // Apply jittering effect if more than one conflict at this location
          return conflicts.map((conflict, idx) => {
            const { latitude, longitude } = conflict;
            const { latitude: jitteredLatitude, longitude: jitteredLongitude } =
              getJitteredPosition(latitude, longitude, idx, conflicts.length);

            return (
              <Marker
                key={`${index}-${idx}`}
                position={[jitteredLatitude, jitteredLongitude]}
              >
                <Popup>
                  <strong>Conflict Information</strong>
                  <br />
                  <strong>Side A:</strong> {conflict.side_a}
                  <br />
                  <strong>Side B:</strong> {conflict.side_b}
                  <br />
                  <strong>Best Estimate Deaths:</strong> {conflict.bd_best}
                  <br />
                  <strong>Year:</strong> {conflict.year}
                </Popup>
              </Marker>
            );
          });
        })}
      </MapContainer>
    </div>
  );
};

export default HomeMap;
