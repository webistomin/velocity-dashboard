import { mount } from '@vue/test-utils';
import BaseStat, { DynamicTypes } from './BaseStat';

describe('BaseStat', () => {
  const iconSelector = '.base-stat__icon';
  const measureSelector = '.base-stat__measure';
  const dynamicSelector = '.base-stat__dynamic';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseStat, {
      propsData: {
        value: 50,
        ...propsData,
      },
      stubs: ['svg-icon'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Return "Negative" if dynamic is negative', () => {
    const wrapper = factory({
      value: 20,
      prevValue: 40,
    });
    const result = wrapper.vm.getDynamic;
    const expected = DynamicTypes.NEGATIVE;
    expect(result).toEqual(expected);
  });

  it('Hide icon if props are not provided', () => {
    const wrapper = factory();
    const icon = wrapper.find(iconSelector);
    expect(icon.exists()).toBe(false);
  });

  it('Show icon if title prop is provided', () => {
    const wrapper = factory({
      icon: 'icon-bubble',
    });
    const icon = wrapper.find(iconSelector);
    expect(icon.exists()).toBe(true);
  });

  it('Hide measure if props are not provided', () => {
    const wrapper = factory();
    const measure = wrapper.find(measureSelector);
    expect(measure.exists()).toBe(false);
  });

  it('Show measure if title prop is provided', () => {
    const wrapper = factory({
      measure: 'km',
    });
    const measure = wrapper.find(measureSelector);
    expect(measure.exists()).toBe(true);
  });

  it('Set positive class if dynamic is positive', () => {
    const expectedResult = ['base-stat__dynamic_positive'];
    const wrapper = factory({
      value: 40,
      prevValue: 20,
    });
    const dynamic = wrapper.find(dynamicSelector);
    const classes = dynamic.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });
});
