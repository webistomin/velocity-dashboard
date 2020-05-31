import { mount } from '@vue/test-utils';
import { BaseIcon } from './BaseIcon';

describe('BaseEmpty', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseIcon, {
      propsData: {
        ...propsData,
        name: 'icon-bubble',
      },
      ...options,
      stubs: ['svg-icon'],
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set class from color prop', () => {
    const expectedResult = ['base-icon_color_green'];
    const wrapper = factory({
      color: 'green',
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set default color class if color prop is not provided', () => {
    const expectedResult = ['base-icon_color_default'];
    const wrapper = factory();
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set size from size prop', () => {
    const expectedResult = ['base-icon_size_xs'];
    const wrapper = factory({
      size: 'xs',
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set default size class if size prop is not provided', () => {
    const expectedResult = ['base-icon_size_s'];
    const wrapper = factory();
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });
});
