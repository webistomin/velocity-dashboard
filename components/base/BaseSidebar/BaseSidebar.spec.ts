import { mount } from '@vue/test-utils';
import { BaseSidebar } from './BaseSidebar';

describe('BaseSidebar', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseSidebar, {
      propsData: {
        isVisible: false,
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set visible class if color visible is not provided', () => {
    const expectedResult = ['base-sidebar_visible'];
    const wrapper = factory({
      isVisible: true,
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });
});
