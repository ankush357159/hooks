import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
const NonReactWidget = ({ data, chartLabel }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const combinedData = data.latitudes.map((lat, index) => ({
      x: lat,
      y: data.longitudes[index],
    }));
    const myChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: chartLabel,
            data: combinedData,
            backgroundColor: "rgba(66, 165, 245, 0.2)",
            borderColor: "#b870a6",
            pointBackgroundColor: "#b870a6",
            pointBorderColor: "#b870a6",
            pointRadius: 5,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Latitude vs Longitude Chart",
          },
          tooltip: {
            callbacks: {
              label: (context) => `Lat: ${context.raw.x}, Lng: ${context.raw.y}`,
            },
          },
        },
        scales: {
          x: {
            type: "linear",
            position: "bottom",
            title: {
              display: true,
              text: "Latitude",
            },
            min: -80,
            max: 40,
            grid: {
              color: "rgba(200, 200, 200, 0.2)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Longitude",
            },
            min: -200,
            max: 100,
            grid: {
              color: "rgba(200, 200, 200, 0.2)",
            },
          },
        },
      },
    });
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data, chartLabel]);
  return (
    <div style={{ display: "flex", justifyContent: "right", width: "100%" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default NonReactWidget;
