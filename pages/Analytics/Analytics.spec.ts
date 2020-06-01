import { shallowMount } from '@vue/test-utils';
import Analytics from './Analytics';

describe('Analytics page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Analytics, {
      propsData: {
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
