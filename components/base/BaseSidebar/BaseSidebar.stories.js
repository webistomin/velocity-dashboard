import { boolean } from '@storybook/addon-knobs';
import { BaseSidebar } from './BaseSidebar';

export default {
  title: 'BaseSidebar',
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
  props: {
    isVisible: {
      type: Boolean,
      default: boolean('isVisible', true),
    },
  },
  render(h) {
    return h(
      BaseSidebar,
      {
        props: {
          isVisible: this.isVisible,
        },
      },
      ['Content']
    );
  },
});
