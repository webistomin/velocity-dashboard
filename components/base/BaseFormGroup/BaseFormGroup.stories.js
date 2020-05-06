import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { email, required } from 'vuelidate/lib/validators';
import BaseFormGroup from './BaseFormGroup';

export default {
  title: 'BaseFormGroup',
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
  components: { BaseFormGroup },
  props: {
    type: {
      type: String,
      default: text('type', 'text'),
    },
    label: {
      type: String,
      default: text('label', 'label'),
    },
    id: {
      type: String,
      default: text('id', 'base-form-group'),
    },
    name: {
      type: String,
      default: text('name', ''),
    },
    placeholder: {
      type: String,
      default: text('placeholder', 'placeholder'),
    },
    autocomplete: {
      type: String,
      default: text('autocomplete', ''),
    },
  },
  data() {
    return {
      signInForm: {
        email: '',
        password: '',
      },
    };
  },
  validations: {
    signInForm: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    onInput: action('emit input'),
    onBlur: action('emit blur'),
  },
  template: `<base-form-group :type='this.type'
                              :label='this.label'
                              :id='this.id'
                              :placeholder='this.placeholder'
                              :validator='$v.signInForm.email'
                              @input='signInForm.email = $event, onInput()'
                              :value='signInForm.email'
                              @blur='$v.signInForm.email.$touch(), onBlur()'/>`,
});
