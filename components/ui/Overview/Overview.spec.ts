import { shallowMount } from '@vue/test-utils';
import Overview from './Overview';

describe('Overview UI', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Overview, {
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
