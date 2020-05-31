import { mount } from '@vue/test-utils';
import BaseTable from './BaseTable';
import { data } from './mocks/data';
import { config } from './mocks/config';

describe('BaseTable', () => {
  const sortSelector = '.base-table__sort';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseTable, {
      propsData: {
        tableData: data,
        tableConfig: config,
        ...propsData,
      },
      stubs: ['VirtualList', 'svg-icon'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit "sort" event', () => {
    const wrapper = factory();
    const btn = wrapper.find(sortSelector);
    btn.trigger('click');
    expect(wrapper.emitted().sort);
  });
});
