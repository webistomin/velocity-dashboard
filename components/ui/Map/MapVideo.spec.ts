import { shallowMount } from '@vue/test-utils';
import MapVideo from './MapVideo';

describe('MapVideo', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(MapVideo, {
      propsData: {
        ...propsData,
      },
      stubs: ['svg-icon'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
