import { text } from '@storybook/addon-knobs';
import { BaseBadge } from './BaseBadge';

export default {
  title: 'BaseBadge',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  props: {
    color: {
      type: String,
      default: text('color', 'default'),
    },
  },
  render(h) {
    return h(
      BaseBadge,
      {
        props: {
          color: this.color,
        },
      },
      [`100`]
    );
  },
});
