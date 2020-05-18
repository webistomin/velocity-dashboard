import { number } from '@storybook/addon-knobs';
import BaseCircularGraph from './BaseCircularGraph';

export default {
  title: 'BaseCircularGraph',
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
  components: { BaseCircularGraph },
  props: {
    value: {
      type: Number,
      default: number('value', 50),
    },
  },
  template: `<base-circular-graph
              :value='this.value'
            >
            </base-circular-graph>
  `,
});
