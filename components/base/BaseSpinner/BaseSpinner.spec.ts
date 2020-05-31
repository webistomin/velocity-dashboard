import { mount } from '@vue/test-utils';
import { BaseSpinner } from './BaseSpinner';

describe('BaseSpinner', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseSpinner, {
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

  it('Set class from size prop', () => {
    const expectedResult = ['base-spinner_size_m'];
    const wrapper = factory({
      size: 'm',
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set default size class if size prop is not provided', () => {
    const expectedResult = ['base-spinner_size_xs'];
    const wrapper = factory();
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });
});
