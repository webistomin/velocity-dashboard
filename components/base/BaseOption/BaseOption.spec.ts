import { mount } from '@vue/test-utils';
import BaseOption from './BaseOption';

describe('BaseOption', () => {
  const optionSelector = '.base-option__input';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseOption, {
      propsData: {
        ...propsData,
        type: 'radio',
        value: '',
        name: 'jest-options',
        id: 'jest-options',
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
    const input = wrapper.find(optionSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);
  });
});
