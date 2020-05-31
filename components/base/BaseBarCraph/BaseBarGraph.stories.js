import { object, text } from '@storybook/addon-knobs';

import BaseBarGraph from './BaseBarGraph';
import { options } from './mocks/options';
import { barGraphData } from './mocks/data';
import { barGraphDataWithAverage } from './mocks/data-with-average';

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

export const Default = () => ({
  components: { BaseBarGraph },
  props: {
    chartData: {
      type: Object,
      default: object('chartData', barGraphData),
      required: true,
    },
    options: {
      type: Object,
      default: object('options', options),
      required: true,
    },
    fallbackText: {
      type: String,
      default: text('fallbackText', 'Bar Graph'),
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
