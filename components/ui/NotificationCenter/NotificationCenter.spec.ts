import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
// @ts-ignore
import vClickOutside from 'v-click-outside';
import VScrollLock from 'v-scroll-lock';
import NotificationCenter from './NotificationCenter';

describe('NotificationCenter UI', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(vClickOutside);
  localVue.use(VScrollLock);
  localVue.use(Vuex);
  let store: any;
  let state;
  let getters;
  let actions;
  const router = new VueRouter();

  beforeEach(() => {
    state = {
      coordinates: {
        lat: 1,
        lng: 1,
      },
    };

    getters = {
      getCurrentWeather: jest.fn(() => {
        return {
          cityName: '',
          countryCode: '',
          description: '',
          icon: '',
          temperature: 1,
        };
      }),
    };

    actions = {
      fetchCurrentWeather: jest.fn().mockImplementation(() => Promise.resolve('called')),
    };

    store = new Vuex.Store({
      modules: {
        weather: {
          namespaced: true,
          state,
          getters,
          actions,
        },
      },
    });
  });

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
    return shallowMount(NotificationCenter, {
      localVue,
      store,
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

  it('Toggle notifications visibility', () => {
    const wrapper = factory();
    wrapper.setData({
      isNotificationsVisible: false,
    });
    wrapper.vm.toggleNotificationVisibility();
    expect(wrapper.vm.isNotificationsVisible).toEqual(true);
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
      isNotificationsVisible: true,
    });
    await wrapper.vm.$router.push({ hash: '#' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isNotificationsVisible).toEqual(false);
  });
});
