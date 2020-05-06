import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor from 'vuelidate-error-extractor';

import BaseFormGroup from '@/components/base/BaseFormGroup';

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

// JSX
addDecorator(() => ({
  render() {
    return (
      <div id='app'>
        <story />
      </div>
    );
  },
}));

// Global styles
addDecorator((getStory) => {
  require('../assets/sass/main.sass');
  return getStory();
});

// Svg-icon component
Vue.component('SvgIcon', {
  template:
    '<svg xmlns="http://www.w3.org/2000/svg" width="13.601" height="16.625" viewBox="0 0 13.601 16.625"><path d="M4.785,16.625a.756.756,0,0,1-.729-.955l1.252-4.587H.755A.756.756,0,0,1,.1,9.949L5.642.377A.759.759,0,0,1,6.3,0h4.535a.756.756,0,0,1,.637,1.162L8.681,5.541h4.165a.756.756,0,0,1,.578,1.243L5.363,16.356A.754.754,0,0,1,4.785,16.625ZM6.733,1.511h0L2.065,9.572H6.3a.755.755,0,0,1,.729.954l-.608,2.233,4.8-5.706H7.3a.755.755,0,0,1-.638-1.161L9.455,1.511H6.733Z"/></svg>',
});
