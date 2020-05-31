import { mount } from '@vue/test-utils';
import { BaseTimeline } from './BaseTimeline';
import { timeline } from './mocks/timeline';

describe('BaseTimeline', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseTimeline, {
      propsData: {
        timeline,
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
});
