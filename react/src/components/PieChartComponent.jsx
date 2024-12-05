import React, { useState, useEffect, useRef } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Interstate", value: 46, color: "#FFC9D5" },
  { label: "Internal", value: 1129, color: "#F40C3F" },
  { label: "International Internal", value: 345, color: "#FF839E" },
];

const PieChartComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 } // Adjust this threshold to control when the chart becomes visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="barWrapper" ref={chartRef}>
      {isVisible && ( // Render the chart only when it comes into view
        <PieChart
          series={[
            {
              data,
              innerRadius: 30,
              outerRadius: 200,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              sx: {
                color: "#FFC9D5", // Label text color
                fontSize: 14, // Label font size
                fontWeight: "bold", // Optional: bold labels
              },
              sliceStyle: {
                stroke: "none", // Remove stroke entirely
                strokeWidth: 0, // Ensure no border width
              },
              animation: {
                // Add animation properties
                duration: 50000, // Animation duration in ms
                easing: "easeOutCubic", // Animation easing
              },
            },
          ]}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
          slotProps={{
            legend: {
              labelStyle: {
                fontSize: 14,
                fontFamily: "Sintony",
                fill: "rgb(243, 243, 243)",
                direction: "column",
                position: { vertical: "middle", horizontal: "left" },
                padding: 0,
              },
            },
          }}
          height={400}
        />
      )}
    </div>
  );
};

export default PieChartComponent;
