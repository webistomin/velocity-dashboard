import { number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseTodo from './BaseTodo';
import { todos } from './mocks/todos';

export default {
  title: 'BaseTodo',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

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
