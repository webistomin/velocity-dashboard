import { mount } from '@vue/test-utils';
import BaseToggle from './BaseToggle';

describe('BaseToggle', () => {
  const toggleSelector = "[data-jest='base-toggle']";

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseToggle, {
      propsData: {
        isActive: false,
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit "input" event', () => {
    const wrapper = factory();
    const btn = wrapper.find(toggleSelector);
    btn.trigger('click');
    expect(wrapper.emitted().click);
  });

  it('Set class from color prop', () => {
    const expectedResult = ['base-toggle_active'];
    const wrapper = factory({
      isActive: true,
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });
});
