import { shallowMount } from '@vue/test-utils';
import Reminders from './Reminders';

describe('Reminders page', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Reminders, {
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
});
