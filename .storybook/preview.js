import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';

// implement router-link
addDecorator(StoryRouter());

// simple implementation of nuxt-link
Vue.component('NuxtLink', {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
  template: '<a :href="to"><slot/></a>',
});
