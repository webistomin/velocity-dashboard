import { object } from '@storybook/addon-knobs';
import { BaseTimeline } from './BaseTimeline';

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

const timeline = [
  {
    icon: 'icon-mail',
    color: 'blue',
    text: 'Conversation started',
  },
  {
    icon: 'icon-graph',
    color: 'darkturquoise',
    text: 'Trip #12422',
  },
  {
    icon: 'icon-forbidden',
    color: 'red',
    text: 'Refund issue #12422',
  },
  {
    icon: 'icon-check',
    color: 'green',
    text: 'Conversation resolved',
  },
  {
    icon: 'icon-mail',
    color: 'blue',
    text: 'Conversation reopened',
  },
];

export const Default = () => ({
  props: {
    timeline: {
      type: String,
      default: object('timeline', timeline),
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
