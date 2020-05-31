import { mount } from '@vue/test-utils';
import BaseButton from './BaseButton';

describe('BaseButton', () => {
  const buttonSelector = '.base-button';
  const buttonIconSelector = '.base-button__wrapper svg-icon-stub';
  const buttonContentSelector = '.base-button .base-button__content';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseButton, {
      propsData: {
        ...propsData,
      },
      ...options,
      stubs: ['svg-icon'],
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit click event', () => {
    const wrapper = factory();
    wrapper.vm.onClick();
    expect(wrapper.emitted().click);
  });

  it('Icon is hidden if icon prop is not provided', () => {
    const wrapper = factory();
    const icon = wrapper.find(buttonIconSelector);
    expect(icon.exists()).toBe(false);
  });

  it('Icon is visible if icon prop is provided', () => {
    const wrapper = factory({
      icon: 'icon-star',
    });
    const icon = wrapper.find(buttonIconSelector);
    expect(icon.exists()).toBe(true);
  });

  it('Set disabled class is disabled prop is provided', () => {
    const expectedResult = ['base-button_disabled'];
    const wrapper = factory({
      isDisabled: true,
    });
    const button = wrapper.find(buttonSelector);
    const classes = button.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set loading class is loading prop is provided', () => {
    const expectedResult = ['base-button_loading'];
    const wrapper = factory({
      isLoading: true,
    });
    const button = wrapper.find(buttonSelector);
    const classes = button.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set badge text correctly', () => {
    const expected = '123';
    const wrapper = factory(
      {},
      {
        slots: {
          default: [expected],
        },
      }
    );

    const content = wrapper.find(buttonContentSelector);
    expect(content.text()).toEqual(expected);
  });
});
