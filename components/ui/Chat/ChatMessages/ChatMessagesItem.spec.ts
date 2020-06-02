import { shallowMount } from '@vue/test-utils';
import { ChatMessagesItem } from './ChatMessagesItem';

describe('ChatMessagesItem', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(ChatMessagesItem, {
      propsData: {
        source: {
          id: 'message-1',
          sender: {
            type: 'other',
            avatar: '/img/avatar.png',
            name: 'Alexey Istomin',
          },
          messages: [
            {
              message: 'Hi, I have trouble with trip #12422',
              time: '10:00',
            },
          ],
        },
        index: 0,
        ...propsData,
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
