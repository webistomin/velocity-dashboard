import { number, text } from '@storybook/addon-knobs';
import BaseStat from './BaseStat';

export default {
  title: 'BaseStat',
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
  components: { BaseStat },
  props: {
    value: {
      type: Number,
      default: number('value', 50),
      required: true,
    },
    prevValue: {
      type: Number,
      default: number('prevValue', 49),
    },
    measure: {
      type: String,
      default: text('measure', 'km'),
    },
    icon: {
      type: String,
      default: text('icon', 'icon-lightning'),
    },
    color: {
      type: String,
      default: text('color', 'blue'),
    },
    align: {
      type: String,
      default: text('align', 'row'),
    },
  },
  template: `<base-stat
              :value='this.value'
              :prevValue='this.prevValue'
              :measure='this.measure'
              :icon='this.icon'
              :color='this.color'
              :align='this.align'
            />
  `,
});
