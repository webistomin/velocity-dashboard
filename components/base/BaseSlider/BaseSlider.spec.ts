import { mount } from '@vue/test-utils';
import BaseSlider from './BaseSlider';

describe('BaseSlider', () => {
  const sliderSelector = '.base-slider__slider';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseSlider, {
      propsData: {
        value: 0,
        min: 0,
        max: 100,
        labelStart: 'start',
        labelEnd: 'end',
        ...propsData,
      },
      stubs: ['VueSlider'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit "change" event', () => {
    const wrapper = factory();
    const input = wrapper.find(sliderSelector);
    input.trigger('change');
    expect(wrapper.emitted().change);
  });
});
