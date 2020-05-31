import { mount } from '@vue/test-utils';
import BaseClose from './BaseClose';

describe('BaseClose', () => {
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

  it('Emit click event', () => {
    const wrapper = factory();
    wrapper.vm.onClose();
    expect(wrapper.emitted().click);
  });
});
