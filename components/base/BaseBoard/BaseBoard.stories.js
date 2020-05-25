import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseBoard from './BaseBoard';

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

const boardData = [
  {
    title: 'Backlog',
    color: 'blue',
    tasks: [
      {
        title: 'Spire1',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire2',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire3',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire4',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire4',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire4',
        text: 'Tire replacement',
        date: 'June 12',
      },
    ],
  },
  {
    title: 'In progress',
    color: 'purple',
    tasks: [
      {
        title: 'Spire5',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire6',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire7',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire8',
        text: 'Tire replacement',
        date: 'June 12',
      },
    ],
  },
  {
    title: 'Validate',
    color: 'darkturquoise',
    tasks: [
      {
        title: 'Spire9',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire10',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire11',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire12',
        text: 'Tire replacement',
        date: 'June 12',
      },
    ],
  },
  {
    title: 'Complete',
    color: 'yellow',
    tasks: [
      {
        title: 'Spire13',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire14',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire15',
        text: 'Tire replacement',
        date: 'June 12',
      },
      {
        title: 'Spire16',
        text: 'Tire replacement',
        date: 'June 12',
      },
    ],
  },
];

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
