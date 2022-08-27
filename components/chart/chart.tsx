import { FunctionComponent } from "react";
import styles from "./chart.module.css";
import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      data: [12, 3, 9, 4, 9, 5],
      label: "Transactions",
      backgroundColor: "transparent",
      borderColor: "black",
      pointRadius: 3,
      borderWidth: 0.3,
    },
    {
      data: [2, 5, 5, 6, 3, 3],
      backgroundColor: ["green", "green", "black", "red", "white", "purple"],
      label: "Transactions",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      borderWidth: 2,
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      spanGaps: true,
    },
  ],

  options: {
    scales: {
      x: {
        //? This enables the next chart to be stacked on the previous
        // ? False for now
        stacked: true,
      },
    },
  },
};
const ChartComponent: FunctionComponent = () => {
  return (
    <>
      <div className={styles.chart}>
        <Line data={data} />
        <Doughnut data={data} />
      </div>
    </>
  );
};

export default ChartComponent;
