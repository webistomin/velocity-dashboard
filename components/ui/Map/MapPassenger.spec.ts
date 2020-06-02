import { shallowMount } from '@vue/test-utils';
import MapPassenger from './MapPassenger';

describe('MapPassenger', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(MapPassenger, {
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
