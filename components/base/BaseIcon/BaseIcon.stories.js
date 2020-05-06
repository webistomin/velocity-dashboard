import { text } from '@storybook/addon-knobs';
import { BaseIcon } from './BaseIcon';

export default {
  title: 'BaseIcon',
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
    size: {
      type: String,
      default: text('size', 'm'),
    },
    name: {
      type: String,
      default: text('name', 'icon-lightning'),
    },
    color: {
      type: String,
      default: text('color', 'gray'),
    },
  },
  render(h) {
    return h(BaseIcon, {
      props: {
        size: this.size,
        name: this.name,
        color: this.color,
      },
    });
  },
});
