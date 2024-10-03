import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const purpleColors = ['#723D9E', '#A16FCC', '#EDD4FC', '#EDE6F1', '#ede9fe'];

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    x: {
      type: 'category',
      stacked: true,
      grid: {
        display: false, // Removes vertical grid lines
      },
    },
    y: {
      type: 'linear',
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
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
    },
  },
  scales: {
    x: {
      type: 'linear',
      beginAtZero: true,
      grid: {
        display: false, // Removes vertical grid lines
      },
      ticks: {
        display: false, // Hides the Y-axis labels
      },
    },
    y: {
      type: 'category',
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
    labels: ['C-Level Executives', 'Manager/Directors', 'VP/SVP' ,'Other Roles'],
    datasets: [{
      data: [30, 30, 25, 15],
      backgroundColor: purpleColors,
    }],
  };

  const companySizeData = {
    labels: ['1-10 (start-up)', '11-50 (small)', '51-200 (mid-size)', '200+ (large)'],
    datasets: [{
      data: [15, 25, 30, 30],
      backgroundColor: purpleColors,
    }],
  };

  const fundingStageData = {
    labels: ['Seed', 'Series A', 'Series B', 'Series C', 'Public'],
    datasets: [
      {
        label: 'Startups',
        data: [300, 250, 200, 150, 100],
        backgroundColor: purpleColors[0],
      },
      {
        label: 'Investors',
        data: [50, 100, 150, 200, 250],
        backgroundColor: purpleColors[2],
      },
    ],
  };

  const domainData = {
    labels: ['Healthcare', 'Finance', 'Marketing', 'Development', 'Others'],
    datasets: [{
      data: [40, 30, 20, 15, 10],
      backgroundColor: purpleColors,
    }],
  };

  return (
    <div className="w-full mx-auto h-fit p-6 bg-purple-50 rounded-lg flex flex-col gap-4">
      <h1 className="text-3xl font-light">Web Summit Attendee Breakdown</h1>
      <p onClick={() => navigate("/attendees")} className="bg-white p-6 border border-primary border-opacity-30 rounded-3xl cursor-pointer shadow-md">
        <span className="font-semibold text-primary text-xl">2,000</span> # of Attendees Expected that match your goal and target audience
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="h-[300px] border border-primary bg-white shadow-md  border-opacity-30 border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Job Roles</h2>
          <Pie data={jobRolesData} options={pieOptions} />
        </div>
        <div className="h-[300px] border border-primary bg-white shadow-md  border-opacity-30 border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Company Size</h2>
          <Doughnut data={companySizeData} options={pieOptions} />
        </div>
        <div className="h-[300px] border border-primary bg-white shadow-md  border-opacity-30 border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Funding Stage</h2>
          <Bar data={fundingStageData} options={barOptions} />
        </div>
        <div className="h-[300px] w-full border border-primary bg-white shadow-md  border-opacity-30 border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Domain</h2>
          <Bar className='relative' data={domainData} options={horizontalBarOptions} />
        </div>
      </div>
    </div>
  );
}
