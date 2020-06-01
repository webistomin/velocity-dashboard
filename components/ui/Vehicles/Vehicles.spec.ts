import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vehicles from './Vehicles';

describe('Vehicles UI', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Vehicles, {
      localVue,
      router,
      propsData: {
        isNavOpened: false,
        ...propsData,
      },
      ...options,
    });
  };

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

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
