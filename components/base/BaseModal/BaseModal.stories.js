import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseModal from './BaseModal';

export default {
  title: 'BaseModal',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseModal },
  props: {
    isVisible: {
      type: Boolean,
      default: boolean('isVisible', true),
      required: true,
    },
    transitionName: {
      type: String,
      default: text('transitionName', 'modal-fade'),
      required: true,
    },
  },
  methods: {
    onClose: action('emit close'),
  },
  template: `<base-modal
    :isVisible='isVisible'
    :transitionName='transitionName'
    @close='onClose'
  >Modal Content</base-modal>`,
});
