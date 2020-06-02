import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { UserRoles } from 'common/types/user/user-roles';
import VScrollLock from 'v-scroll-lock';
import UserProfile from './UserProfile';

describe('UserProfile UI', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VScrollLock);
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
    return shallowMount(UserProfile, {
      localVue,
      store,
      propsData: {
        info: {
          firstName: 'Alexey',
          lastName: 'Istomin',
          email: 'mail@mail.ru',
          location: '',
          bio: '',
          avatar: '',
          role: UserRoles.ADMIN,
        },
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
