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
      data: [10, 3, 9, 4, 9, 5],
      label: "LUXURY",
      backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      borderColor: "red",
      pointRadius: 0.7,
      borderWidth: 0.3,
    },
    {
      data: [1, 8, 3, 9, 3, 1],
      label: "BUDGET",
      backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      borderColor: "black",
      pointRadius: 0.7,
      borderWidth: 0.3,
    },
    {
      data: [2, 5, 5, 6, 3, 3],
      label: "MIDDLE-CLASS",
      pointBorderWidth: 2,
      borderColor: "limegreen",
      pointHoverRadius: 5,
      borderWidth: 0.3,
      pointHoverBorderWidth: 5,
      pointRadius: 0.7,
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
      <section className={styles.sectionCharts}>
        <h2>Our Metrics</h2>
        <div className={styles.charts}>
          <Line data={data} />
          <Doughnut data={data} />
        </div>
      </section>
    </>
  );
};

export default ChartComponent;
