import { mount } from '@vue/test-utils';
import BaseSwitch from './BaseSwitch';

describe('BaseSwitch', () => {
  const switchSelector = '.base-switch__checkbox';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseSwitch, {
      propsData: {
        text: '',
        value: '',
        checked: false,
        label: 'label',
        ...propsData,
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
    const input = wrapper.find(switchSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);
  });
});
