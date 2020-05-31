import { mount } from '@vue/test-utils';
import { BaseTitle } from './BaseTitle';

describe('BaseTitle', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseTitle, {
      propsData: {
        level: 1,
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
