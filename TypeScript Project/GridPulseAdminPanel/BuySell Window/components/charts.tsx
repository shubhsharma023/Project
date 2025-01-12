'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
    },
  },
}

const data = {
  labels: ['06:00', '12:00', '18:00', '00:00', '06:00', '12:00', '18:00'],
  datasets: [
    {
      label: 'Series 1',
      data: [15300, 15400, 15500, 15600, 15500, 15400, 15300],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Series 2',
      data: [15200, 15300, 15400, 15500, 15400, 15300, 15200],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
    {
      label: 'Series 3',
      data: [15100, 15200, 15300, 15400, 15300, 15200, 15100],
      borderColor: 'rgb(53, 162, 235)',
      tension: 0.1,
    },
  ],
}

export default function Chart() {
  return (
    <div className="flex-1 p-4 bg-gray-800">
      <Line options={options} data={data} />
    </div>
  )
}