import BaseMap from './BaseMap';

export default {
  title: 'BaseMap',
  parameters: {
    options: {
      showPanel: true,
      selectedPanel: 'storybook/knobs/panel',
    },
  },
};

export const Default = () => ({
  components: { BaseMap },
  template: `<div :style="{height: '100vh'}"><base-map/></div>`,
});
