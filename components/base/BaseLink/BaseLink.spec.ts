import { mount } from '@vue/test-utils';
import BaseLink from './BaseLink';

describe('BaseLink', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseLink, {
      propsData: {
        ...propsData,
      },
      ...options,
      stubs: ['nuxt-link'],
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory({
      to: '/',
    }).html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Render as button if "isButton" prop is provided', () => {
    const wrapper = factory({
      to: '/',
      isButton: true,
    });
    const btn = wrapper.find('button');
    expect(btn.exists()).toBe(true);
  });

  it('Render as download link if url match file RegExp', () => {
    const wrapper = factory({
      to: '/test.doc',
    });
    const link = wrapper.find('a');
    expect(link.attributes().download).toBe('true');
  });

  it('Render as external link if url match external RegExp', () => {
    const wrapper = factory({
      to: 'https://www.google.com/',
    });
    const link = wrapper.find('a');
    expect(link.attributes().target).toBe('_blank');
  });

  it('Emit "click" event', () => {
    const wrapper = factory({
      isButton: true,
      to: '/',
    });
    wrapper.vm.onClick();
    expect(wrapper.emitted().click);
  });
});
