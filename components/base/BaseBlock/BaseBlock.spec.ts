import { mount } from '@vue/test-utils';
import BaseBlock from './BaseBlock';

describe('BaseBlock', () => {
  const headingBarSelector = "[data-jest='base-block__heading']";
  const titleSelector = "[data-jest='base-block__title']";
  const optionsSelector = "[data-jest='base-block__options-block']";

  const factory = (propsData = {}) => {
    return mount(BaseBlock, {
      propsData: {
        ...propsData,
      },
      stubs: ['svg-icon'],
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Hide heading bar if props are not provided', () => {
    const wrapper = factory();
    const headingBar = wrapper.find(headingBarSelector);
    expect(headingBar.exists()).toBe(false);
  });

  it('Show heading bar if title prop is provided', () => {
    const wrapper = factory({
      title: 'Hello World!',
    });
    const headingBar = wrapper.find(headingBarSelector);
    expect(headingBar.exists()).toBe(true);
  });

  it('Show heading bar if hasOptions prop is provided', () => {
    const wrapper = factory({
      hasOptions: true,
    });
    const headingBar = wrapper.find(headingBarSelector);
    expect(headingBar.exists()).toBe(true);
  });

  it('Set simple class if prop simple is provided', () => {
    const expectedResult = ['base-block_simple'];
    const wrapper = factory({
      isSimple: true,
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Show title ans set text if title prop is provided', () => {
    const expectedResult = 'Hello World!';
    const wrapper = factory({
      title: expectedResult,
    });

    const titleEl = wrapper.find(titleSelector);
    expect(titleEl.exists()).toBe(true);
    expect(titleEl.text()).toEqual(expectedResult);
  });

  it('Does not show title if hasOption prop is provided and title prop is not', () => {
    const wrapper = factory({
      hasOptions: true,
    });

    const titleEl = wrapper.find(titleSelector);
    expect(titleEl.exists()).toBe(false);
  });

  it('Do not show options if hasOption prop is not provided', () => {
    const wrapper = factory();

    const optionsEl = wrapper.find(optionsSelector);
    expect(optionsEl.exists()).toBe(false);
  });
});
