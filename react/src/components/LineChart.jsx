import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
} from "chart.js";

import { useInView } from "react-intersection-observer";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title
);

// Data for the chart
const uData = [
  55184, 80297, 70338, 53384, 44947, 38491, 36738, 28857, 41131, 40218, 80883,
  78635, 23592, 21111, 23186, 19639, 12150, 19718, 19212, 28703, 34604, 21088,
  25079, 74032, 93485, 115961, 104169, 90175, 71965, 54946, 52474, 73163,
  199790, 276935, 122518,
];

const xLabels = [
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
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
];

const LineChartComponent = () => {
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Percentage of chart visibility to trigger
  });

  // Update state when the chart enters the viewport
  React.useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const chartData = {
    labels: xLabels,
    datasets: [
      {
        label: "Deaths by Year",
        data: isInView ? uData : Array(uData.length).fill(0), // Animate from 0 to data
        borderColor: "#F40C3F",
        backgroundColor: "rgba(244, 12, 63, 0.2)",
        pointBackgroundColor: "#F40C3F",
        pointBorderColor: "#F40C3F",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#F40C3F",
        borderWidth: 2,
        tension: 0.4,
        pointBorderWidth: 5,
        pointHitRadius: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 2000, // Animation duration in ms
      easing: "easeInOutCubic", // Easing function
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgb(243, 243, 243)",
        titleColor: "#1a1a1a",
        bodyColor: "#1a1a1a",
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
    },
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            family: "Sintony",
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            family: "Sintony",
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
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
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChartComponent;
