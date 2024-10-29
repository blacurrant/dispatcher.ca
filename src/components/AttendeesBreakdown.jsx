import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Doughnut, Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const purpleColors = ["#723D9E", "#A16FCC", "#EDD4FC", "#EDE6F1", "#FBF9FC"];

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      type: "category",
      stacked: true,
      grid: {
        display: false, // Removes vertical grid lines
      },
    },
    y: {
      type: "linear",
      stacked: true,
      beginAtZero: true,
      grid: {
        display: false, // Removes vertical grid lines
      },
      ticks: {
        display: false, // Hides the Y-axis labels
      },
    },
  },
};

const horizontalBarOptions = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      type: "linear",
      beginAtZero: true,
      grid: {
        display: false, // Removes vertical grid lines
      },
      ticks: {
        display: false, // Hides the Y-axis labels
      },
    },
    y: {
      type: "category",
      beginAtZero: true,
      grid: {
        display: false, // Removes vertical grid lines
      },
    },
  },
};

export default function AttendeeDashboard() {
  const navigate = useNavigate();

  const jobRolesData = {
    labels: ["C-Level", "Manager/Directors", "VP/SVP", "Other Roles"],
    datasets: [
      {
        data: [5, 10, 20, 50],
        backgroundColor: purpleColors,
      },
    ],
  };

  const companySizeData = {
    labels: ["1-50", "51-250", "251-1000", "1000+"],
    datasets: [
      {
        data: [15, 25, 30, 30],
        backgroundColor: purpleColors,
      },
    ],
  };

  const fundingStageData = {
    labels: ["Seed", "Series A", "Series B", "Series C", "Public"],
    datasets: [
      {
        label: "Startups",
        data: [300, 250, 200, 150, 100],
        backgroundColor: purpleColors[0],
      },
    ],
  };

  const domainData = {
    labels: ["Healthcare", "Finance", "Marketing", "Development", "Others"],
    datasets: [
      {
        data: [40, 30, 20, 15, 10],
        backgroundColor: purpleColors,
      },
    ],
  };

  return (
    <div className="w-full mx-auto h-fit p-6 bg-white rounded-lg flex flex-col gap-4">
      <h1 className="text-3xl font-light">Web Summit Attendee Breakdown</h1>
      <p
        onClick={() => navigate("/attendees")}
        className="bg-white p-6 border border-primary border-opacity-30 rounded-3xl cursor-pointer shadow-md flex justify-between hover:bg-primary_light"
      >
        <div>
          <span className="font-semibold text-primary text-xl">238 </span>{" "}
          attendees match your goal and target audience
        </div>
        <div>
          <RightOutlined className="text-primary" />
        </div>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="h-[300px] border border-primary bg-white shadow-md border-opacity-25 rounded-3xl px-4 pb-8 pt-4 space-y-4">
          <h2 className="text-lg font-semibold ">Job Roles</h2>
          <Doughnut data={jobRolesData} options={pieOptions} />
        </div>
        <div className="h-[300px] border border-primary bg-white shadow-md border-opacity-25 rounded-3xl px-4 pb-10 pt-4 space-y-4">
          <h2 className="text-lg font-semibold ">Company Size</h2>
          <Doughnut data={companySizeData} options={pieOptions} />
        </div>
        <div className="h-[300px] border border-primary bg-white shadow-md border-opacity-25 rounded-3xl px-4 pb-10 pt-4 space-y-4">
          <h2 className="text-lg font-semibold ">Funding Stage</h2>
          <Bar data={fundingStageData} options={barOptions} />
        </div>
        <div className="h-[300px] w-full border border-primary bg-white shadow-md border-opacity-25 rounded-3xl px-4 pb-8 pt-4">
          <h2 className="text-lg font-semibold ">Industry</h2>
          <Bar
            className="relative"
            data={domainData}
            options={horizontalBarOptions}
          />
        </div>
      </div>
    </div>
  );
}
