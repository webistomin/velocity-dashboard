import { shallowMount } from '@vue/test-utils';
import ChatMessages from './ChatMessages';

describe('ChatMessages', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(ChatMessages, {
      propsData: {
        messages: [
          {
            id: 'message-1',
            sender: {
              type: 'other',
              avatar: '/img/avatar.png',
              name: 'Alexey Istomin',
            },
            messages: [
              {
                message: 'Hi, I have trouble with trip #12422',
                time: '02-06-2020',
              },
            ],
          },
        ],
        ...propsData,
      },
      stubs: ['VirtualList', 'svg-icon'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
