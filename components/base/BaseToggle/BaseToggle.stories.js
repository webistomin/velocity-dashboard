import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseToggle from './BaseToggle';

export default {
  title: 'BaseToggle',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseToggle },
  props: {
    size: {
      type: String,
      default: text('size', 'xs'),
    },
    isActive: {
      type: Boolean,
      default: boolean('isActive', false),
    },
  },
  methods: {
    onClick: action('emit click'),
  },
  template: `<div style="display: flex; padding: 40px;">
      <base-toggle
        @click="onClick()"
        :size="this.size"
        :isActive="this.isActive"
      />
  </div>`,
});
