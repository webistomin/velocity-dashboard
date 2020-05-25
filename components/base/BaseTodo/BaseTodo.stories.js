import { number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseTodo from './BaseTodo';

export default {
  title: 'BaseTodo',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

const todos = [
  {
    title: 'Vehicle #11283',
    date: Date.now(),
    id: '1',
    isDone: false,
  },
  {
    title: 'Vehicle #11283',
    date: Date.now(),
    id: '2',
    isDone: false,
  },
  {
    title: 'Vehicle #11283',
    date: Date.now(),
    id: '3',
    isDone: false,
  },
  {
    title: 'Vehicle #11283',
    date: Date.now(),
    id: '4',
    isDone: false,
  },
  {
    title: 'Vehicle #11283',
    date: Date.now(),
    id: '5',
    isDone: false,
  },
  {
    title: 'Vehicle #11283',
    date: Date.now(),
    id: '6',
    isDone: false,
  },
];

export const Default = () => ({
  components: { BaseTodo },
  props: {
    todos: {
      type: Array,
      default: object('todos', todos),
      required: true,
    },
    limit: {
      type: Number,
      default: number('limit', 6),
    },
  },
  methods: {
    onInput: action('emit input'),
  },
  template: `<div style="padding: 40px;">
    <BaseTodo
      :todos="this.todos"
      :limit="this.limit"
      @input="onInput()"
    />
  </div>`,
});
