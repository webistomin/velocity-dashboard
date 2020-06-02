import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// @ts-ignore
import vClickOutside from 'v-click-outside';
import VScrollLock from 'v-scroll-lock';
import { UserRoles } from 'common/types/user/user-roles';
import UserCenter from './UserCenter';

describe('UserCenter UI', () => {
  const localVue = createLocalVue();
  localVue.use(vClickOutside);
  localVue.use(VScrollLock);
  localVue.use(Vuex);
  let store: any;
  let state;

  beforeEach(() => {
    state = {
      user: {
        firstName: 'Alexey',
        lastName: 'Istomin',
        email: 'mail@mail.ru',
        location: '',
        bio: '',
        avatar: '',
        role: UserRoles.ADMIN,
      },
    };

    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          state,
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
    return shallowMount(UserCenter, {
      localVue,
      store,
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

  it('Toggle user center visibility', () => {
    const wrapper = factory();
    wrapper.setData({
      isUserProfileVisible: false,
    });
    wrapper.vm.toggleUserProfileVisibility();
    expect(wrapper.vm.isUserProfileVisible).toEqual(true);
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
});
