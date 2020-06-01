import { shallowMount } from '@vue/test-utils';
import Main from './Main';

describe('Main page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Main, {
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
