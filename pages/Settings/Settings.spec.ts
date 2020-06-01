import { shallowMount } from '@vue/test-utils';
import Settings from './Settings';

describe('Settings page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Settings, {
      propsData: {
        ...propsData,
      },
      stubs: ['notifications'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
