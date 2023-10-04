import React, { useEffect, useRef, useState } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import { useGetDataQuery } from "@/redux/services/dataApi";

function PieChart() {
  const { isLoading, isFetching, data, error } = useGetDataQuery(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  let [high, setHigh] = useState(0);
  let [medium, setMedium] = useState(0);
  let [low, setLow] = useState(0);

  useEffect(() => {
    const highCount = data?.filter((d): any => d.priority === "HIGH").length;
    if (highCount !== undefined) {
      setHigh(highCount);
    }

    const mediumCount = data?.filter(
      (d): any => d.priority === "MEDIUM"
    ).length;
    if (mediumCount !== undefined) {
      setMedium(mediumCount);
    }

    const lowCount = data?.filter((d): any => d.priority === "LOW").length;
    if (lowCount !== undefined) {
      setLow(lowCount);
    }

    
  }, [data]);

  useEffect(() => {
    const ctx = canvas.current!.getContext("2d");

    if (ctx) {
      let chartStatus = Chart.getChart(ctx as CanvasRenderingContext2D);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }
    }

    if (ctx !== null) {
      const chartConfig: ChartConfiguration = {
        type: "doughnut",
        data: {
          labels: ["High", "Medium", "Low"],
          datasets: [
            {
              label: "Dataset 1",
              data: [high, medium, low],
              backgroundColor: ["#EB5757", "#F2C94C", "#2F80ED"],
              borderColor: ["#EB5757", "#F2C94C", "#2F80ED"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "right",
              labels: {
                usePointStyle: true,
              },
            },
          },
        },
      };

      const chart = new Chart(ctx as CanvasRenderingContext2D, chartConfig);
    }
  }, [high, medium, low]);

  return (
    <div className="w-[250px] h-[250px]">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default PieChart;
