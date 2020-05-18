import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseSwitch from './BaseSwitch';

export default {
  title: 'BaseSwitch',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseSwitch },
  props: {
    label: {
      type: String,
      default: text('label', 'Text'),
    },
    id: {
      type: String,
      default: text('id', 'base-form-group'),
    },
    text: {
      type: String,
      default: text('text', ''),
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
      <base-switch
        style="margin-right: 20px; padding: 20px; box-sizing: border-box"
        :label="option.option"
        :text="this.text"
        :id="option.option"
        @input="selected = $event, onInput()"
        :checked="this.checked"
      />
    </div>
  </div>`,
});
