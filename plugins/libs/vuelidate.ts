import Vue from 'vue';
// @ts-ignore
import Vuelidate from 'vuelidate';
// @ts-ignore
import VuelidateErrorExtractor from 'vuelidate-error-extractor';
import BaseFormGroup from 'components/base/BaseFormGroup';

Vue.use(Vuelidate);
Vue.component('BaseFormGroup', BaseFormGroup);

Vue.use(VuelidateErrorExtractor, {
  messages: {
    required: 'The {attribute} field is required',
    email: 'Email is invalid',
  },
});
