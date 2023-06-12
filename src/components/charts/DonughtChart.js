import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ graph_data }) {
  console.log(graph_data);
  const labels = graph_data
    ? graph_data.map((item) => {
        return item.status;
      })
    : [];
  const values = graph_data
    ? graph_data.map((item) => {
        return item.count;
      })
    : [];
  const data = {
    labels: labels && labels,
    datasets: [
      {
        label: "Activity 2022 (M)",
        data: values ? values : [],
        backgroundColor: [
          "#690375",
          "#AFB42B",
          "#00BCD4",
          "#D32F2F",
          "#5D4037",
          "#FFA000",
          "#757575",
          "#4CAF50",
          "#212121",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
