import { object, number } from '@storybook/addon-knobs';
import BaseList from './BaseList';
import { listData } from './mocks/data';

export default {
  title: 'BaseList',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseList },
  props: {
    list: {
      type: Array,
      default: object('list', listData),
      required: true,
    },
    limit: {
      type: Number,
      default: number('limit', 6),
    },
  },
  template: `<base-list
    :list='this.list'
    :limit='this.limit'
  />`,
});
