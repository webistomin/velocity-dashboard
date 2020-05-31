import { object, text } from '@storybook/addon-knobs';

import BaseLineGraph from './BaseLineChart';
import { options } from './mocks/options';
import { lineGraphData } from './mocks/data';
import { gradients } from './mocks/gradients';

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
