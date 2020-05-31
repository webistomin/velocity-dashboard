import { mount } from '@vue/test-utils';
import { BaseThumbnail } from './BaseThumbnail';

describe('BaseThumbnail', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseThumbnail, {
      propsData: {
        image: '/img',
        alt: 'alt',
        ...propsData,
      },
      stubs: ['v-lazy-image'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set size from size prop', () => {
    const expectedResult = ['base-thumbnail_size_m'];
    const wrapper = factory({
      size: 'm',
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set default size class if size prop is not provided', () => {
    const expectedResult = ['base-thumbnail_size_s'];
    const wrapper = factory();
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set squared class from squared prop', () => {
    const expectedResult = ['base-thumbnail_squared'];
    const wrapper = factory({
      isSquared: true,
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });
});
