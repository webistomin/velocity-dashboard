import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
// @ts-ignore
import vClickOutside from 'v-click-outside';
import VScrollLock from 'v-scroll-lock';
import MessagesCenter from './MessagesCenter';

describe('MessagesCenter UI', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(vClickOutside);
  localVue.use(VScrollLock);
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
    return shallowMount(MessagesCenter, {
      localVue,
      router,
      propsData: {
        ...propsData,
      },
      stubs: ['svg-icon'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Toggle messages visibility', () => {
    const wrapper = factory();
    wrapper.setData({
      isMessagesVisible: false,
    });
    wrapper.vm.toggleMessagesVisibility();
    expect(wrapper.vm.isMessagesVisible).toEqual(true);
  });

  it('Close modal on "Esc"', () => {
    const mockedCloseModal = jest.fn();
    const wrapper = factory(
      {},
      {
        attachToDocument: true,
        methods: {
          toggleModalVisibilityByKeyDown: mockedCloseModal,
        },
      }
    );
    wrapper.trigger('keydown.esc', { key: 'Escape' });
    expect(mockedCloseModal).toHaveBeenCalled();
  });

  it('Delete global event listeners on destroy', () => {
    const mockedCloseModal = jest.fn();
    const wrapper = factory(
      {},
      {
        attachToDocument: true,
        methods: {
          toggleModalVisibilityByKeyDown: mockedCloseModal,
        },
      }
    );
    wrapper.destroy();
    wrapper.trigger('keydown.esc', { key: 'Escape' });
    expect(mockedCloseModal).not.toHaveBeenCalled();
  });

  it('Close modal on route change', async () => {
    const wrapper = factory();
    wrapper.setData({
      isMessagesVisible: true,
    });
    await wrapper.vm.$router.push({ hash: '#' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isMessagesVisible).toEqual(false);
  });
});
