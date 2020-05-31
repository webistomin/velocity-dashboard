import { mount } from '@vue/test-utils';
import { BaseEmpty } from './BaseEmpty';

describe('BaseEmpty', () => {
  const titleSelector = '.base-empty__title';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseEmpty, {
      propsData: {
        ...propsData,
      },
      ...options,
      stubs: ['v-lazy-image'],
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set default text if text prop is not provided', () => {
    const wrapper = factory();
    const expectedTitle = 'No data was provided';

    const title = wrapper.find(titleSelector);
    expect(title.text()).toEqual(expectedTitle);
  });

  it('Set custom text if text prop is provided', () => {
    const expectedTitle = 'Hello world';
    const wrapper = factory({
      text: expectedTitle,
    });

    const title = wrapper.find(titleSelector);
    expect(title.text()).toEqual(expectedTitle);
  });
});
