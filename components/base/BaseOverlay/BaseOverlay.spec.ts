import { mount } from '@vue/test-utils';
import BaseOverlay from './BaseOverlay';

describe('BaseOverlay', () => {
  const overlaySelector = '.base-overlay';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseOverlay, {
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

  it('Emit "click" event', () => {
    const wrapper = factory();
    const input = wrapper.find(overlaySelector);
    input.trigger('click');
    expect(wrapper.emitted().click);
  });

  it('Set visible class if color visible is not provided', () => {
    const expectedResult = ['base-overlay_visible'];
    const wrapper = factory({
      isVisible: true,
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });
});
