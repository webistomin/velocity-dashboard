import { shallowMount } from '@vue/test-utils';
import ChatList from './ChatList';

describe('ChatList', () => {
  const ItemSelector = '.chat-list__item';

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(ChatList, {
      propsData: {
        chats: [
          {
            name: 'Alexey Istomin',
            avatar: '/img/avatar.png',
            message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
            id: 'abc132',
            time: '02/06/2020',
          },
        ],
        ...propsData,
      },
      stubs: ['nuxt-link'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Have no children if chats is not provided', () => {
    const wrapper = factory({
      chats: null,
    });
    const item = wrapper.find(ItemSelector);
    expect(item.exists()).toEqual(false);
  });
});
