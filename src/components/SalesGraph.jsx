/* eslint-disable react/prop-types */
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function SalesGraph({ darkMode }) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          7500, 15000, 5000, 25000, 9000, 45000, 9000, 18000, 31000, 5900,
          30000, 26000,
        ],
        backgroundColor: darkMode ? "#f5f5f5a7" : "#34caa51a",
        hoverBackgroundColor: darkMode ? "#f5f5f5" : "#34caa5",
        opacity: "10%",
        borderRadius: { topLeft: 200, topRight: 200 },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
        position: "average",
        backgroundColor: darkMode ? "#fff" : "#090c2c",
        titleColor: darkMode ? "#000" : "#fff",
        bodyColor: darkMode ? "#000" : "#fff",
        titleFont: {
          size: 12,
          style: "bold",
          family: "Arial",
        },
        bodyFont: {
          size: 12,
          family: "Arial",
        },
        displayColors: false,
        callbacks: {
          title: function () {
            return "";
          },

          label: function (context) {
            var label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false, // This will display the grid lines on the x-axis
        },
      },
      y: {
        ticks: {
          suggestedMin: 5000,
          min: 5000,
          max: 50000,
          stepSize: 10000,
          callback: function (value, index, values) {
            return value.toLocaleString();
          },
        },
        beginAtZero: true,
        grid: {
          display: true, // This will hide the grid lines on the y-axis
          borderDash: [2, 2],
          color: "#e5eaef",
        },
      },
    },
  };

  return (
    <>
      <div
        className={` ${
          darkMode ? "dark border-[#edf2f675] " : "border-[#edf2f7]"
        } max-w-[900px] cols-span-1 p-5 rounded-[14px] border bg-[#fff]  `}
      >
        <div className="graphText flex justify-between ">
          <p
            className={`${
              darkMode ? "text-[#f5f5f5]" : ""
            } text-[#26282c] font-JakartaSmBd text-[18px] `}
          >
            Sales Trend
          </p>
          <div>
            <label
              className={` ${
                darkMode ? "dark" : ""
              } text-[#3a3f51] font-Jakarta-Md `}
            >
              Sort by:
            </label>
            <select
              className={` ${
                darkMode ? "dark border-[#edf2f675]   " : "border-[#edf2f7]"
              } ml-1 border rounded-[52px] p-2 cursor-pointer `}
            >
              <option>Weekly</option>
              <option>Monthly</option>
              {/* <option>3 months</option> */}
            </select>
          </div>
        </div>
        <Bar data={data} options={options} />
      </div>
    </>
  );
}

export default SalesGraph;
