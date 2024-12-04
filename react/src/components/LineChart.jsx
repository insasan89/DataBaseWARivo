import { LineChart } from "@mui/x-charts/LineChart";

// Datos proporcionados
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

// Componente LineChartComponent
export default function LineChartComponent() {
  return (
    <LineChart
      width={800} // Ajusta el tamaño del gráfico
      height={400} // Ajusta el tamaño del gráfico
      series={[
        { data: uData, label: "Deaths by years" },
        
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]} // Eje X con los años
      yAxis={[{  scaleType: "linear" }]} // Eje Y con escala lineal
    />
  );
}