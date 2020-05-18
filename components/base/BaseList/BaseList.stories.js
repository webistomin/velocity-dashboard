import { object, number } from '@storybook/addon-knobs';
import BaseList from './BaseList';

export default {
  title: 'BaseList',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

const listData = [
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
  {
    image: '/img/avatar.png',
    name: 'Bebop',
    text: 'Volvo Intellisafe',
    statistic: '1,232 miles',
    price: '$6,432',
  },
];

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
