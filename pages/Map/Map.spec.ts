import { shallowMount } from '@vue/test-utils';
import Map from './Map';

describe('Map page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Map, {
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
