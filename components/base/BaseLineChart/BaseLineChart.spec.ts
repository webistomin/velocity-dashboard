import { mount } from '@vue/test-utils';

import { options } from './mocks/options';
import { lineGraphData } from './mocks/data';
import { gradients } from './mocks/gradients';
import BaseLineChart from './BaseLineChart';

describe('BaseLineChart', () => {
  const factory = (propsData = {}, componentOptions = {}) => {
    return mount(BaseLineChart, {
      propsData: {
        options,
        chartData: lineGraphData,
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
    expect(ariaLabel).toEqual('Linear graph');
  });

  it('Set aria-label from props', async () => {
    const expectedAriaLabel = 'My brand new line graph';
    const wrapper = factory({
      fallbackText: expectedAriaLabel,
    });
    const vm = wrapper.vm;
    await vm.$nextTick();

    const canvas = vm.$refs.canvas as HTMLCanvasElement;
    const ariaLabel = canvas.getAttribute('aria-label');

    expect(ariaLabel).toEqual(expectedAriaLabel);
  });

  it('Call gradient fn if gradient prop is provided', () => {
    const mockedConstructGradients = jest.fn();
    factory(
      {
        gradients,
      },
      {
        methods: {
          constructGradients: mockedConstructGradients,
        },
      }
    );
    expect(mockedConstructGradients).toHaveBeenCalled();
  });

  it('Set gradients if gradient fn called', () => {
    const wrapper = factory({
      gradients,
    });
    const datasets = wrapper.vm.chartData.datasets;
    wrapper.vm.constructGradients(gradients);
    expect(datasets![0].backgroundColor).not.toEqual(undefined);
  });
});
