import { object, text } from '@storybook/addon-knobs';
import BaseLineGraph from './BaseLineChart';

export default {
  title: 'BaseLineGraph',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
      previewTabs: {
        actions: {
          hidden: true,
        },
      },
    },
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          color: '#B0BAC9',
          borderDash: [3, 3],
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125,
          fontColor: '#B0BAC9',
          callback: (value) => {
            let tempVal = value.toString();
            if (tempVal.length >= 4) tempVal = tempVal.substring(0, tempVal.length - 3) + 'k ';
            return '$' + tempVal;
          },
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          color: '#B0BAC9',
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: '#B0BAC9',
        },
      },
    ],
  },
  legend: {
    display: true,
    align: 'end',
    labels: {
      boxWidth: 10,
      usePointStyle: true,
      padding: 20,
      fontColor: '#B0BAC9',
    },
  },
  elements: {
    point: {
      radius: 5,
      hoverRadius: 4,
      borderWidth: 3,
      hoverBorderWidth: 3,
    },
  },
};

const lineGraphData = {
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

const gradients = [
  {
    red: 46,
    green: 91,
    blue: 255,
  },
  {
    red: 140,
    green: 84,
    blue: 255,
  },
];

export const Default = () => ({
  components: { BaseLineGraph },
  props: {
    chartData: {
      type: Object,
      default: object('chartData', lineGraphData),
    },
    options: {
      type: Object,
      default: object('options', options),
    },
    fallbackText: {
      type: String,
      default: text('fallbackText', ''),
    },
    gradients: {
      type: Array,
      default: object('gradients', gradients),
    },
  },
  template: `<base-line-graph
              :chartData='this.chartData'
              :options='this.options'
              :fallbackText='this.fallbackText'
              :gradients='this.gradients' />`,
});
