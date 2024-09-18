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

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const purpleColors = ['#723D9E', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'];

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
    },
    y: {
      type: 'linear',
      stacked: true,
      beginAtZero: true,
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
    },
    y: {
      type: 'category',
      beginAtZero: true,
    },
  },
};

export default function AttendeeDashboard() {
  const jobRolesData = {
    labels: ['C-Level Executives', 'Manager/Directors', 'VP/SVP','xyz' ,'Other Roles'],
    datasets: [{
      data: [30, 20, 25, 15, 10],
      backgroundColor: purpleColors,
    }],
  };

  const companySizeData = {
    labels: ['1-10 (start-up)', '11-50 (small)', '51-200 (mid-size)', '201-500 (large)', '500+'],
    datasets: [{
      data: [15, 25, 30, 20, 10],
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
    labels: ['Web & Mobile', 'AI & Machine Learning', 'Fintech', 'Healthcare', 'Others'],
    datasets: [{
      data: [40, 30, 20, 15, 10],
      backgroundColor: purpleColors,
    }],
  };

  return (
    <div className="w-full mx-auto h-full p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Web Summit Attendee Breakdown</h1>
      <p className="mb-6">
        <span className="font-semibold text-primary text-xl">2,000</span> # of Attendees Expected that match your goal and target audience
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="h-64 border border-primary border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Job Roles</h2>
          <Pie data={jobRolesData} options={pieOptions} />
        </div>
        <div className="h-64 border border-primary border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Company Size</h2>
          <Doughnut data={companySizeData} options={pieOptions} />
        </div>
        <div className="h-[250px] border border-primary border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Funding Stage</h2>
          <Bar data={fundingStageData} options={barOptions} />
        </div>
        <div className="h-[250px] border border-primary border-opacity-25 rounded-3xl px-4 pb-8">
          <h2 className="text-lg font-semibold mb-2">Domain</h2>
          <Bar data={domainData} options={horizontalBarOptions} />
        </div>
      </div>
    </div>
  );
}
