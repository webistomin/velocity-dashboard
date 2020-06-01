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
    });
  });

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Chat, {
      localVue,
      router,
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

  it('Hide chat on mobile', () => {
    const wrapper = factory();
    wrapper.setData({
      isMobileChatVisible: true,
    });
    wrapper.vm.hideChat();
    expect(wrapper.vm.isMobileChatVisible).toEqual(false);
  });
});
