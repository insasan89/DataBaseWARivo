import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Tipo 2", value: 46, color: "#00C49F" },
  { label: "Tipo 3", value: 1129, color: "#FF8042" },
  { label: "Tipo 4", value: 345, color: "#FFBB28" },
];

const PieChartComponent = () => {
  return (
    <div className="barWrapper">
      <PieChart
        series={[
          {
            data,
          },
        ]}
        
        height={400}
      />
    </div>
  );
};

export default PieChartComponent;