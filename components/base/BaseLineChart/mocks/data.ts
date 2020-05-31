import { ChartData } from 'chart.js';

export const lineGraphData: ChartData = {
  labels: [
    '',
    'Mar 1',
    'Mar 8',
    'Mar 15',
    'Mar 22',
    'Mar 29',
    'Apr 5',
    'Apr 12',
    'Apr 19',
    'Apr 26',
    'May 2',
    'May 9',
    'May 16',
    'May 23',
    'May 30',
    'Jun 5',
    'Jun 10',
    'Jun 19',
  ],
  datasets: [
    {
      label: 'Revenue',
      borderColor: '#2E5BFF',
      pointBackgroundColor: '#FFF',
      fill: true,
      lineTension: 0,
      data: [
        {
          x: 0,
          y: 8000,
        },
        {
          x: 1,
          y: 11500,
        },
        {
          x: 2,
          y: 9800,
        },
        {
          x: 3,
          y: 15100,
        },
        {
          x: 4,
          y: 23000,
        },
        {
          x: 5,
          y: 22000,
        },
        {
          x: 6,
          y: 16000,
        },
        {
          x: 7,
          y: 13800,
        },
        {
          x: 8,
          y: 16300,
        },
        {
          x: 9,
          y: 17000,
        },
        {
          x: 10,
          y: 24500,
        },
        {
          x: 11,
          y: 19000,
        },
        {
          x: 12,
          y: 12000,
        },
        {
          x: 13,
          y: 8900,
        },
        {
          x: 14,
          y: 16000,
        },
        {
          x: 15,
          y: 27000,
        },
        {
          x: 16,
          y: 22000,
        },
        {
          x: 17,
          y: 21000,
        },
      ],
    },
    {
      label: 'Trips',
      borderColor: '#8C54FF',
      pointBackgroundColor: '#FFF',
      fill: true,
      lineTension: 0,
      data: [
        {
          x: 0,
          y: 4800,
        },
        {
          x: 1,
          y: 5000,
        },
        {
          x: 2,
          y: 7500,
        },
        {
          x: 3,
          y: 7000,
        },
        {
          x: 4,
          y: 11500,
        },
        {
          x: 5,
          y: 13000,
        },
        {
          x: 6,
          y: 7500,
        },
        {
          x: 7,
          y: 8500,
        },
        {
          x: 8,
          y: 6000,
        },
        {
          y: 13700,
        },
        {
          x: 10,
          y: 18000,
        },
        {
          x: 11,
          y: 17600,
        },
        {
          x: 12,
          y: 2500,
        },
        {
          x: 13,
          y: 6000,
        },
        {
          x: 14,
          y: 9000,
        },
        {
          x: 15,
          y: 22500,
        },
        {
          x: 16,
          y: 14000,
        },
        {
          x: 17,
          y: 19000,
        },
      ],
    },
  ],
};
