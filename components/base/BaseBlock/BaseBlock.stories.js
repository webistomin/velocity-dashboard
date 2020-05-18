import { boolean, text } from '@storybook/addon-knobs';
import BaseBlock from './BaseBlock';

export default {
  title: 'BaseBlock',
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
  components: { BaseBlock },
  props: {
    title: {
      type: String,
      default: text('title', 'Caption'),
    },
    hasOptions: {
      type: Boolean,
      default: boolean('hasOptions', true),
    },
    contentMix: {
      type: String,
      default: text('contentMix', 'mix'),
    },
    simple: {
      type: Boolean,
      default: boolean('simple', false),
    },
  },
  template: `<base-block
              :title='this.title'
              :hasOptions='this.hasOptions'
              :contentMix='this.contentMix'
              :simple='this.simple'
            >
              Content
            </base-block>
  `,
});
