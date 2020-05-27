import { action } from '@storybook/addon-actions';
import BaseClose from './BaseClose';

export default {
  title: 'BaseClose',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseClose },
  methods: {
    onClose: action('emit click'),
  },
  template: `<div style="background-color: #47494e; width: 100%; height: 100vh;"><base-close
    @click='onClose'
  >Modal Content</base-close></div>`,
});
