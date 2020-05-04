import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor from 'vuelidate-error-extractor';

import BaseFormGroup from '@/components/base/BaseFormGroup/BaseFormGroup';

Vue.use(Vuelidate);
Vue.component('BaseFormGroup', BaseFormGroup);
Vue.use(VuelidateErrorExtractor, {
  messages: {
    required: 'The {attribute} field is required',
    email: 'Email is invalid',
  },
});

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
