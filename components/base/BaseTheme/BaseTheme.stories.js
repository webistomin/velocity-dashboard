import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseTheme from './BaseTheme';

export default {
  title: 'BaseTheme',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseTheme },
  props: {
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
    text: {
      type: String,
      default: text('text', ''),
      required: true,
    },
    theme: {
      type: String,
      default: text('theme', ''),
      required: true,
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
      currentTheme: '',
    };
  },
  template: `<div style="padding: 40px;">
    <BaseTheme
      :id="'setting-theme-shelob'"
      :theme="'shelob'"
      :value="'shelob'"
      :label="'shelob'"
      :checked="this.currentTheme === 'shelob'"
      @input="onInput(), currentTheme = 'shelob'"
    />
    <BaseTheme
      :id="'setting-theme-denethor'"
      :theme="'denethor'"
      :value="'denethor'"
      :label="'denethor'"
      :checked="this.currentTheme === 'denethor'"
      @input="onInput(), currentTheme = 'denethor'"
    />
  </div>`,
});
