import { mount } from '@vue/test-utils';

import { pieOptions } from './mocks/options';
import { pieData } from './mocks/data';
import BasePieGraph from './BasePieGraph';

describe('BasePieGraph', () => {
  const factory = (propsData = {}, componentOptions = {}) => {
    return mount(BasePieGraph, {
      propsData: {
        options: pieOptions,
        chartData: pieData,
        ...propsData,
      },
      ...componentOptions,
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
    expect(ariaLabel).toEqual('Pie graph');
  });

  it('Set aria-label from props', async () => {
    const expectedAriaLabel = 'My brand new pie graph';
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
