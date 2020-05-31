import { mount } from '@vue/test-utils';
import { BaseLogo } from './BaseLogo';

describe('BaseLogo', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseLogo, {
      propsData: {
        ...propsData,
      },
      stubs: ['nuxt-link'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
