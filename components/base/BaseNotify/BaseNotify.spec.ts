import { mount } from '@vue/test-utils';
import { BaseNotify } from './BaseNotify';

describe('BaseNotify', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseNotify, {
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
