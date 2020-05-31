import { mount } from '@vue/test-utils';
import BaseList from './BaseList';
import { listData } from './mocks/data';

describe('BaseList', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseList, {
      propsData: {
        ...propsData,
        list: listData,
      },
      stubs: ['v-lazy-image'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
