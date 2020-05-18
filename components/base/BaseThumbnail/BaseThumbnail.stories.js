import { text, boolean } from '@storybook/addon-knobs';
import { BaseThumbnail } from './BaseThumbnail';

export default {
  title: 'BaseThumbnail',
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
    alt: {
      type: String,
      default: text('alt', 'user'),
    },
    image: {
      type: String,
      default: text('color', '/img/avatar.png'),
    },
    isSquared: {
      type: Boolean,
      default: boolean('isSquared', false),
    },
  },
  render(h) {
    return h(BaseThumbnail, {
      props: {
        size: this.size,
        alt: this.alt,
        image: this.image,
        isSquared: this.isSquared,
      },
    });
  },
});
