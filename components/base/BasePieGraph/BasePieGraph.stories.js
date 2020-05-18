import { object, text } from '@storybook/addon-knobs';
import BasePieGraph from './BasePieGraph';

export default {
  title: 'BasePieGraph',
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

const pieData = {
  labels: ['Fully serviced', 'In service', 'Waiting', 'Service needed'],
  datasets: [
    {
      fill: true,
      weight: 5,
      hoverBorderWidth: 10,
      borderWidth: 0,
      hoverBorderColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
      hoverBackgroundColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
      backgroundColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
      data: [57.8, 5, 20, 17.2],
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateScale: true,
  },
  legend: {
    display: true,
    position: 'right',
    align: 'center',
    labels: {
      boxWidth: 10,
      usePointStyle: true,
      padding: 30,
      fontColor: '#2e384d',
    },
  },
};

export const Default = () => ({
  components: { BasePieGraph },
  props: {
    chartData: {
      type: Object,
      default: object('chartData', pieData),
    },
    options: {
      type: Object,
      default: object('options', pieOptions),
    },
    fallbackText: {
      type: String,
      default: text('fallbackText', ''),
    },
  },
  template: `<base-pie-graph :chartData='this.chartData' :options='this.options' :fallbackText='this.fallbackText' />`,
});
