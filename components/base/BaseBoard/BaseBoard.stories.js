import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import BaseBoard from './BaseBoard';
import { boardData } from './mocks/data';

export default {
  title: 'BaseBoard',
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
  components: { BaseBoard },
  props: {
    board: {
      type: Object,
      default: object('board', boardData),
      required: true,
    },
  },
  methods: {
    onSetBoard: action('emit onSetBoard'),
  },
  template: `<base-board
              :board='this.board'
              @setBoard='this.onSetBoard'
            >
            </base-board>
  `,
});
