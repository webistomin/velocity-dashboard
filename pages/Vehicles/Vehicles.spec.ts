import { shallowMount } from '@vue/test-utils';
import Vehicles from './Vehicles';

describe('Vehicles page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Vehicles, {
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
