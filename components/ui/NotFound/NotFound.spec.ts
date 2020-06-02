import { shallowMount } from '@vue/test-utils';
import { NotFound } from './NotFound';

describe('LoginSignIn', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(NotFound, {
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
