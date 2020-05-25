import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseLink from './BaseLink';

export default {
  title: 'BaseLink',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseLink },
  props: {
    to: {
      type: String,
      default: text('to', '/home'),
    },
    type: {
      type: String,
      default: text('type', 'button'),
    },
    isButton: {
      type: Boolean,
      default: boolean('isButton', false),
    },
    theme: {
      type: String,
      default: text('theme', 'default'),
    },
  },
  methods: {
    onClick: action('emit click'),
  },
  template: `<base-link
    :to='to'
    :theme='theme'
    :isButton='isButton'
    :type='type'
    @click='onClick'
  >{{isButton ? 'Button' : 'Link'}}</base-link>`,
});
