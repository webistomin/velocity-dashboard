import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { UserRoles } from 'common/types/user/user-roles';
import { SiteThemes } from 'common/types/theme/site-themes';
import Settings from './Settings';

describe('Settings UI', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let store: any;
  let state;

  beforeEach(() => {
    state = {
      user: {
        firstName: '',
        lastName: '',
        role: UserRoles.OPERATOR,
        email: '',
        password: '',
        theme: SiteThemes.SHELOB,
        notifications: {
          isEmailNotificationsEnabled: true,
          isPushNotificationsEnabled: true,
          isMonthlyNotificationsEnabled: true,
          isQuarterNotificationsEnabled: true,
        },
        avatar: '',
        phone: '',
        socials: {
          twitter: '',
        },
        location: '',
        bio: '',
        dob: '',
        lastLogin: new Date(),
      },
    };
    store = new Vuex.Store({
      modules: {
        auth: {
          state,
        },
      },
    });
  });

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Settings, {
      localVue,
      store,
      propsData: {
        isNavOpened: false,
        ...propsData,
      },
      mocks: {
        $auth: {
          user: {
            role: 'admin',
          },
        },
      },
      stubs: ['svg-icon', 'nuxt-link'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
