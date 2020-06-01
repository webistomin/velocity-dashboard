import { shallowMount } from '@vue/test-utils';
import Chat from './Chat';

describe('Chat page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Chat, {
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
