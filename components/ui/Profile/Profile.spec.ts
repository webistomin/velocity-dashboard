import { shallowMount } from '@vue/test-utils';
import Profile from './Profile';

describe('Profile UI', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Profile, {
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
