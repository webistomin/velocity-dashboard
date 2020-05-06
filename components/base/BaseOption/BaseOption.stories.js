import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseOption from './BaseOption.tsx';

export default {
  title: 'BaseOption',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseOption },
  props: {
    type: {
      type: String,
      default: text('type', 'radio'),
    },
    label: {
      type: String,
      default: text('label', 'Text'),
    },
    id: {
      type: String,
      default: text('id', 'base-form-group'),
    },
    name: {
      type: String,
      default: text('name', 'storybook'),
    },
    value: {
      type: String,
      default: text('value', ''),
    },
    checked: {
      type: Boolean,
      default: boolean('checked', false),
    },
  },
  methods: {
    onInput: action('emit input'),
  },
  data() {
    return {
      selected: '',
      options: [
        {
          option: 'Option 1',
        },
        {
          option: 'Option 2',
        },
      ],
    };
  },
  template: `<div style="display: flex; padding: 40px;">
    <div v-for='option of options'>
      <base-option
        style="margin-right: 20px; padding: 20px; box-sizing: border-box"
        :type="type"
        :label="option.option"
        :value="option.option"
        :id="option.option"
        @input="selected = $event, onInput()"
        :checked="selected === option.option"
        :name="name"
      >
        {{option.option}}
      </base-option>
    </div>
  </div>`,
});
