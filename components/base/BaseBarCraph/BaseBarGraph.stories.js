import { object, text } from '@storybook/addon-knobs';
import BaseBarGraph from './BaseBarGraph';

export default {
  title: 'BaseBarGraph',
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
      fontFamily: 'Rubik, system-ui, sans-serif',
    },
  },
  elements: {
    point: {
      radius: 5,
      hoverRadius: 4,
      borderWidth: 3,
      hoverBorderWidth: 3,
      backgroundColor: '#FFF',
    },
  },
};

const barGraphData = {
  labels: ['April', 'May', 'June'],
  datasets: [
    {
      barPercentage: 0.5,
      categoryPercentage: 0.3,
      label: 'Comfort',
      lineTension: 0.4,
      backgroundColor: '#2E5BFF',
      data: [60, 65, 85],
    },
    {
      barPercentage: 0.5,
      categoryPercentage: 0.3,
      label: 'Premium',
      backgroundColor: '#8C54FF',
      data: [70, 80, 90],
    },
  ],
};

const barGraphDataWithAverage = {
  labels: ['Mon', 'Tue', 'Fri', 'Thu', 'Wed', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Average',
      borderColor: '#F7C137',
      fill: false,
      lineTension: 0,
      data: [110, 80, 100, 110, 74, 55, 124],
      type: 'line',
    },
    {
      barPercentage: 0.5,
      categoryPercentage: 0.3,
      label: 'Comfort',
      backgroundColor: '#2E5BFF',
      data: [82, 65, 75, 130, 55, 62, 120],
    },
    {
      barPercentage: 0.5,
      categoryPercentage: 0.3,
      label: 'Premium',
      backgroundColor: '#8C54FF',
      data: [90, 75, 80, 60, 45, 117],
    },
  ],
};

export const Default = () => ({
  components: { BaseBarGraph },
  props: {
    chartData: {
      type: Object,
      default: object('chartData', barGraphData),
    },
    options: {
      type: Object,
      default: object('options', options),
    },
    fallbackText: {
      type: String,
      default: text('fallbackText', ''),
    },
  },
  template: `<base-bar-graph :chartData='this.chartData' :options='this.options' :fallbackText='this.fallbackText' />`,
});

export const WithAverageLine = () => ({
  components: { BaseBarGraph },
  props: {
    chartData: {
      type: Object,
      default: object('chartData', barGraphDataWithAverage),
    },
    options: {
      type: Object,
      default: object('options', options),
    },
    fallbackText: {
      type: String,
      default: text('fallbackText', ''),
    },
  },
  template: `<base-bar-graph :chartData='this.chartData' :options='this.options' :fallbackText='this.fallbackText' />`,
});
