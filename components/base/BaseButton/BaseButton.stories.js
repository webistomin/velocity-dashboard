import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseButton from './BaseButton.tsx';

export default {
  title: 'BaseButton',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseButton },
  props: {
    type: {
      type: String,
      default: text('type', 'button'),
    },
    isDisabled: {
      type: Boolean,
      default: boolean('isDisabled', false),
    },
    isLoading: {
      type: Boolean,
      default: boolean('isLoading', false),
    },
    icon: {
      type: String,
      default: text('icon', ''),
    },
    theme: {
      type: String,
      default: text('theme', 'default'),
    },
  },
  methods: {
    onClick: action('emit click'),
  },
  template: `<base-button
    :type='type'
    :isDisabled='isDisabled'
    :isLoading='isLoading'
    :icon='icon'
    :theme='theme'
    @click='onClick'
  >Button</base-button>`,
});
