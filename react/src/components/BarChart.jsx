import React, { useEffect, useState } from "react";

const BarChart = () => {
  const [animatedData, setAnimatedData] = useState([]);

  useEffect(() => {
    const data = [
      { year: "2010", value: 21088 },
      { year: "2011", value: 25079 },
      { year: "2012", value: 74032 },
      { year: "2013", value: 93485 },
      { year: "2014", value: 115961 },
      { year: "2015", value: 104169 },
      { year: "2016", value: 90175 },
      { year: "2017", value: 71965 },
      { year: "2018", value: 52474 },
      { year: "2019", value: 78635 },
      { year: "2020", value: 199790 },
      { year: "2021", value: 276935 },
      { year: "2022", value: 212518 },
      { year: "2023", value: 280556 },
      { year: "2024", value: 310000 },
    ];
    const animateBars = () => {
      const maxValue = 310000;
      const newData = data.map((item) => ({
        ...item,
        height: `${(item.value / maxValue) * 100}%`,
        displayValue: 0,
      }));

      setAnimatedData(newData);

      const interval = setInterval(() => {
        setAnimatedData((prevData) =>
          prevData.map((item) => {
            if (item.displayValue < item.value) {
              return {
                ...item,
                displayValue: Math.min(
                  item.value,
                  item.displayValue + Math.ceil(item.value / 100)
                ),
              };
            }
            return item;
          })
        );
      }, 20);

      return () => clearInterval(interval);
    };

    animateBars();
  }, []);

  return (
    <div className="chart-container">
      <div className="y-axis">
        {Array.from({ length: 7 }, (_, i) => {
          const value = Math.ceil((310000 / 6) * i);
          return <div key={i}>{value}</div>;
        })}
      </div>
      <div className="chart">
        {animatedData.map((item, index) => (
          <div key={index} className="bar" style={{ "--height": item.height }}>
            <div className="bar-value">{item.displayValue}</div>
            <div className="year-label">{item.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
