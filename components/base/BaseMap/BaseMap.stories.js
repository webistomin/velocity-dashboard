import { object } from '@storybook/addon-knobs';
import BaseMap from './BaseMap';
import { trips } from './mocks/trips';

export default {
  title: 'BaseMap',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseMap },
  props: {
    trips: {
      type: Array,
      default: object('trips', trips),
      required: true,
    },
  },
  template: `<div :style="{height: '100vh'}"><base-map :trips='trips'/></div>`,
});
