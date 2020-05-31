import { mount } from '@vue/test-utils';
import BaseCircularGraph from './BaseCircularGraph';

describe('BaseCircularGraph', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseCircularGraph, {
      propsData: {
        value: 100,
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory({
      graphId: 'id',
    }).html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set random id if graphId prop is not provided', () => {
    const wrapper = factory();
    const initialId = 'base-circular-graph-mask';
    const id = wrapper.vm.id;
    expect(id).not.toEqual(initialId);
  });

  it('Clamp value correctly', () => {
    const wrapper = factory();
    const result = wrapper.vm.clamp(0.3423423, 0, 1);
    expect(result).toEqual(0.3423423);
  });

  it('Draw progress correctly', () => {
    const expectedPath = 'M 0 0 v -50 A 50 50 1 0 1 50 -3.061616997868383e-15 z';
    const wrapper = factory();

    wrapper.vm.drawProgress(0.5);
    const bar = wrapper.vm.$refs.progressBar as SVGPathElement;
    const dAttr = bar.getAttribute('d');
    expect(dAttr).toEqual(expectedPath);
  });

  it('Return undefined and does not change path if number is not correct', () => {
    const wrapper = factory();
    const initialPath = 'M 0 0';

    const result = wrapper.vm.drawProgress(('abc' as unknown) as number);
    const bar = wrapper.vm.$refs.progressBar as SVGPathElement;
    const dAttr = bar.getAttribute('d');

    expect(dAttr).toEqual(initialPath);
    expect(result).toEqual(undefined);
  });
});
