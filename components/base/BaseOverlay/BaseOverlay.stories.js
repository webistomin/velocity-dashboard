import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseOverlay from './BaseOverlay';

export default {
  title: 'BaseOverlay',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseOverlay },
  props: {
    isVisible: {
      type: Boolean,
      default: boolean('isVisible', true),
    },
  },
  methods: {
    onClick: action('emit click'),
  },
  template: `<base-overlay
    :isVisible='this.isVisible'
    @click='this.onClick'
  />`,
});
