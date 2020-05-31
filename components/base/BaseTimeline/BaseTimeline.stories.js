import { object } from '@storybook/addon-knobs';
import { BaseTimeline } from './BaseTimeline';
import { timeline } from './mocks/timeline';

export default {
  title: 'BaseTimeline',
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
    timeline: {
      type: String,
      default: object('timeline', timeline),
      required: true,
    },
  },
  render(h) {
    return h(BaseTimeline, {
      props: {
        timeline: this.timeline,
      },
    });
  },
});
