import { mount } from '@vue/test-utils';
import { SiteThemes } from 'common/types/theme/site-themes';
import BaseTheme from './BaseTheme';

describe('BaseTheme', () => {
  const themeSelector = '.base-theme__radio';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseTheme, {
      propsData: {
        theme: SiteThemes.SHELOB,
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
    const input = wrapper.find(themeSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);
  });
});
