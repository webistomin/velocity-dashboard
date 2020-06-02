import { mount } from '@vue/test-utils';
import { LoginVideo } from './LoginVideo';

describe('LoginVideo', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(LoginVideo, {
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
