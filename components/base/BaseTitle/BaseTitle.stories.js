import { number } from '@storybook/addon-knobs';
import { BaseTitle } from './BaseTitle';

export default {
  title: 'BaseTitle',
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
    level: {
      type: Number,
      default: number('level', 1),
    },
  },
  render(h) {
    return h(
      BaseTitle,
      {
        props: {
          level: this.level,
        },
      },
      [`Heading ${this.level}`]
    );
  },
});
