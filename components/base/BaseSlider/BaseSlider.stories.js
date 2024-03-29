import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import BaseSlider from './BaseSlider';

export default {
  title: 'BaseSlider',
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
  components: { BaseSlider },
  data() {
    return {
      sliderValue: this.value,
    };
  },
  props: {
    value: {
      type: Number,
      default: number('value', 0),
      required: true,
    },
    min: {
      type: Number,
      default: number('min', 0),
      required: true,
    },
    max: {
      type: Number,
      default: number('max', 100),
      required: true,
    },
    labelStart: {
      type: String,
      default: text('labelStart', 'start'),
      required: true,
    },
    labelEnd: {
      type: String,
      default: text('labelEnd', 'end'),
      required: true,
    },
  },
  methods: {
    onChange: action('emit change'),
  },
  template: `<base-slider
              :value='this.value'
              @change='this.onChange, sliderValue = $event'
              :min='this.min'
              :max='this.max'
              :labelStart='this.labelStart'
              :labelEnd='this.labelEnd'
  />`,
});
