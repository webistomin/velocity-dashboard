import { array, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import BaseSelect from './BaseSelect';

export default {
  title: 'BaseSelect',
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
  components: { BaseSelect },
  data() {
    return {
      selected: this.value,
    };
  },
  props: {
    options: {
      type: Array,
      default: array('options', ['1', '2', '3']),
      required: true,
    },
    value: {
      type: String,
      default: text('value', ''),
      required: true,
    },
    label: {
      type: String,
      default: text('label', 'Text'),
      required: true,
    },
    id: {
      type: String,
      default: text('id', 'base-form-group'),
      required: true,
    },
    placeholder: {
      type: String,
      default: text('placeholder', 'placeholder'),
    },
  },
  methods: {
    onInput: action('emit input'),
  },
  template: `<base-select
              :options='this.options'
              :label='this.label'
              :id='this.id'
              :placeholder='this.placeholder'
              @input='selected = $event, this.onInput'
              :value='this.selected'
  />`,
});
