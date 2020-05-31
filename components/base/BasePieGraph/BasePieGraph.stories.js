import { object, text } from '@storybook/addon-knobs';
import BasePieGraph from './BasePieGraph';
import { pieOptions } from './mocks/options';
import { pieData } from './mocks/data';

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
