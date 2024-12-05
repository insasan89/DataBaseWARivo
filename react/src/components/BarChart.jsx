import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";
import { useInView } from "react-intersection-observer";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

const BarChart = () => {
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the chart is visible
  });

  // Update state when chart is in view
  React.useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const years = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const values = [
    21088, 25079, 74032, 93485, 115961, 104169, 90175, 71965, 52474, 78635,
    199790, 276935, 212518, 280556, 310000,
  ];

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Values by Year",
        data: isInView ? values : Array(values.length).fill(0), // Animate from 0
        backgroundColor: "rgba(244, 12, 63, 0.7)", // Bar color
        borderColor: "#F40C3F", // Bar border color
        borderWidth: 1, // Bar border thickness
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 2000, // Duration of the animation
      easing: "easeInOutCubic", // Animation easing function
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgb(243, 243, 243)", // Tooltip background
        titleColor: "#1a1a1a", // Tooltip title color
        bodyColor: "#1a1a1a", // Tooltip body color
        padding: 16,
        boxPadding: 8,
        usePointStyle: true,
        titleFont: {
          family: "Sintony",
          size: 16,
        },
        bodyFont: {
          family: "Sintony",
          size: 12,
        },
      },
      legend: {
        labels: {
          color: "white", // Legend text color
          font: {
            family: "Sintony",
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // X-axis label color
          font: {
            family: "Sintony",
            size: 14,
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)", // X-axis grid color
        },
      },
      y: {
        ticks: {
          color: "white", // Y-axis label color
          font: {
            family: "Sintony",
            size: 14,
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)", // Y-axis grid color
        },
      },
    },
  };

  return (
    <div
      ref={ref}
      style={{
        width: "800px",
        height: "400px",
        margin: "0 auto",
        opacity: isInView ? 1 : 0,
        transition: "opacity 1s",
      }}
    >
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
