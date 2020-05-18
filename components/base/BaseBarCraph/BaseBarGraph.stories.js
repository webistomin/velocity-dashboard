import { object } from '@storybook/addon-knobs';
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
  },
  template: `<base-bar-graph :chartData='this.chartData' :options='this.options' />`,
});
