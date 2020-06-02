import { shallowMount } from '@vue/test-utils';
import LoginHeader from './LoginHeader';

describe('LoginHeader', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(LoginHeader, {
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
