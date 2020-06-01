import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TheNavigation from './TheNavigation';

describe('TheNavigation', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let store: any;
  let state;

  beforeEach(() => {
    state = {
      user: {
        role: 'admin',
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
    return shallowMount(TheNavigation, {
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

  it('Emit "openNav" event', () => {
    const wrapper = factory();
    wrapper.vm.onToggleClick();
    expect(wrapper.emitted().openNav);
  });

  it('Set class from isVisible prop', () => {
    const expectedResult = ['main-nav_visible'];
    const wrapper = factory({
      isNavOpened: true,
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set isAdmin to false if user role is not admin', () => {
    const wrapper = factory(
      {},
      {
        mocks: {
          $auth: {},
        },
      }
    );
    const isAdmin = wrapper.vm.isUserAdmin;
    expect(isAdmin).toEqual(false);
  });
});
