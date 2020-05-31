import { mount } from '@vue/test-utils';
import BaseSelect from './BaseSelect';

describe('BaseSelect', () => {
  const selectSelector = '.base-select__select';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseSelect, {
      propsData: {
        options: ['1', '2', '3'],
        value: '',
        id: 'id',
        label: 'label',
        ...propsData,
      },
      stubs: ['VSelect'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit "input" event', () => {
    const wrapper = factory();
    const input = wrapper.find(selectSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);
  });
});
