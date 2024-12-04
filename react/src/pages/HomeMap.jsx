import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import countriesData from "../../json db/countries.json";
import conflictsData from "../../json db/conflicts.json";
import Filter from "../components/Filter"; // Import Filter component

// Function to apply systematic jittering to markers in the same location

const getJitteredPosition = (latitude, longitude, index, count) => {
  const radius = 2; // Define a radius for the circular pattern, adjust as needed

   // Generate a random angle and radius for each marker
  const randomAngle = Math.random() * 2 * Math.PI; // Random angle between 0 and 2*pi
  const randomRadius = Math.random() * radius; // Random distance from center within the circle's radius

  // Calculate the latitude and longitude offset using polar coordinates
  const latitudeOffset = randomRadius * Math.cos(randomAngle);  // Latitude offset
  const longitudeOffset = randomRadius * Math.sin(randomAngle); // Longitude offset

  // Return the new position
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
      const { dateFrom, dateTo, deathsRange, sideA, sideB } = filters;

      // Filter by date
      const year = conflict.year;
      if (dateFrom && year < parseInt(dateFrom)) return false;
      if (dateTo && year > parseInt(dateTo)) return false;

      // Filter by deaths
      const bd_best = conflict.bd_best;
      if (bd_best < deathsRange[0] || bd_best > deathsRange[1]) return false;

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

  const redDotIcon = L.divIcon({
    className: "custom-red-dot", // Class name for styling (optional)
    html: `<div style="background-color: #F40C3F; width: 8px; height: 8px; border-radius: 50%; "></div>`,
    iconSize: [8, 8], // Set the size of the icon to 8px by 8px
    iconAnchor: [4, 4], // Position the anchor in the center of the dot
    popupAnchor: [0, -8], // Adjust the popup to appear above the marker
  });

  return (

      <div className="mapWrapper">
        <div className="result">
          <h3>{filteredConflicts.length}</h3>
          <p>conflicts</p>
        </div>
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
          style={{ height: "100%", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'
          />

          {/* Add filtered markers with systematic jittering */}
          {Object.values(conflictsByLocation).map((conflicts, index) => {
            console.log(conflicts);
            // Apply jittering effect if more than one conflict at this location
            return conflicts.map((conflict, idx) => {
              const { latitude, longitude } = conflict;
              if (latitude && longitude) {
                const {
                  latitude: jitteredLatitude,
                  longitude: jitteredLongitude,
                } = getJitteredPosition(
                  latitude,
                  longitude,
                  idx,
                  conflicts.length
                );

                return (
                  <Marker
                    icon={redDotIcon}
                    key={`${index}-${idx}`}
                    position={[jitteredLatitude, jitteredLongitude]}
                  >
                    <Popup>
                      <div className="popup">
                        <div className="vsWrapper">
                          <strong className="popupvs">{conflict.side_a}</strong>
                          <p>vs</p>
                          <strong className="popupvs">{conflict.side_b}</strong>
                        </div>

                        <div className="dandd">
                          <div className="popupLine">
                            Deaths:{" "}
                            <strong className="popupDeaths">
                              {conflict.bd_best}
                            </strong>
                          </div>
                          <br />
                          <div className="popupLine">
                            Year:{" "}
                            <strong className="popupvs">{conflict.year}</strong>
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              }
            });
          })}
        </MapContainer>
      </div>
  
  );
};

export default HomeMap;
