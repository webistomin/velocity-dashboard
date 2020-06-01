import { shallowMount } from '@vue/test-utils';
import Login from './Login';

describe('Login page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Login, {
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
