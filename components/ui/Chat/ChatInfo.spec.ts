import { shallowMount } from '@vue/test-utils';
import ChatInfo from './ChatInfo';

describe('ChatInfo', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(ChatInfo, {
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
