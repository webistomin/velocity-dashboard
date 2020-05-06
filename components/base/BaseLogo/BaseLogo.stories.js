import { BaseLogo } from './BaseLogo';

export default {
  title: 'BaseLogo',
  parameters: {
    options: { showPanel: false },
  },
};

export const Default = () => ({
  render(h) {
    return h(BaseLogo);
  },
});
