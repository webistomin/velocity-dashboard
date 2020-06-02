import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Chat from './Chat';

describe('Chat UI', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        };
      }),
      writable: true,
    });
  });

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Chat, {
      localVue,
      router,
      propsData: {
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

  it('Hide chat on mobile', () => {
    const wrapper = factory();
    wrapper.setData({
      isMobileChatVisible: true,
    });
    wrapper.vm.hideChat();
    expect(wrapper.vm.isMobileChatVisible).toEqual(false);
  });

  it('Set chat id if it exists in params', () => {
    const wrapper = factory(
      {},
      {
        beforeCreate() {
          this._route = {
            params: {
              id: 1,
            },
          };
        },
      }
    );
    expect(wrapper.vm.isMobileChatVisible).toEqual(true);
    expect(wrapper.vm.selectedChat).toEqual(1);
  });

  it('Return false if not on mobile device and chat selected', () => {
    const wrapper = factory();
    wrapper.setData({
      isMobile: false,
      selectedChat: '1',
    });
    expect(wrapper.vm.isEmptyBlockVisible).toEqual(false);
  });

  it('Return true if not on mobile device and chat is not selected', () => {
    const wrapper = factory();
    wrapper.setData({
      isMobile: false,
      selectedChat: null,
    });
    expect(wrapper.vm.isEmptyBlockVisible).toEqual(true);
  });

  it('Detect mobile devices', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: false,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        };
      }),
    });
    const wrapper = factory();
    expect(wrapper.vm.isMobile).toEqual(true);
  });
});
