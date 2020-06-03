import { mount } from '@vue/test-utils';
import BaseClose from './BaseClose';

describe('BaseClose', () => {
  const closeSelector = "[data-jest='base-close']";

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseClose, {
      propsData: {
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
    const btn = wrapper.find(closeSelector);
    btn.trigger('click');
    expect(wrapper.emitted().click);
  });
});
