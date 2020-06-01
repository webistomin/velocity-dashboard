import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import TheHeader from './TheHeader';

describe('TheHeader', () => {
  const toggleSelector = '.page-header__nav-toggle';
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(TheHeader, {
      localVue,
      router,
      propsData: {
        isNavOpened: false,
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit "openNav" event from button', () => {
    const wrapper = factory();
    const btn = wrapper.find(toggleSelector);
    btn.trigger('click');
    expect(wrapper.emitted().openNav);
  });

  it('Emit "openNav" event', () => {
    const wrapper = factory();
    wrapper.vm.onToggleClick();
    expect(wrapper.emitted().openNav);
  });
});
