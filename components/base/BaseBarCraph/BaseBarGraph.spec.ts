import { mount } from '@vue/test-utils';

import { options } from './mocks/options';
import { barGraphData } from './mocks/data';
import BaseBarGraph from './BaseBarGraph';

describe('BaseBarGraph', () => {
  const factory = (propsData = {}) => {
    return mount(BaseBarGraph, {
      propsData: {
        options,
        chartData: barGraphData,
        ...propsData,
      },
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory();
    const html = wrapper.html();
    expect(html).toMatchSnapshot();
  });

  it('Set default a11y attributes', async () => {
    const wrapper = factory();
    const vm = wrapper.vm;
    await vm.$nextTick();

    const canvas = vm.$refs.canvas as HTMLCanvasElement;
    const role = canvas.getAttribute('role');
    const ariaLabel = canvas.getAttribute('aria-label');

    expect(role).toEqual('img');
    expect(ariaLabel).toEqual('Bar graph');
  });

  it('Set aria-label from props', async () => {
    const expectedAriaLabel = 'My brand new bar graph';
    const wrapper = factory({
      fallbackText: expectedAriaLabel,
    });
    const vm = wrapper.vm;
    await vm.$nextTick();

    const canvas = vm.$refs.canvas as HTMLCanvasElement;
    const ariaLabel = canvas.getAttribute('aria-label');

    expect(ariaLabel).toEqual(expectedAriaLabel);
  });
});
