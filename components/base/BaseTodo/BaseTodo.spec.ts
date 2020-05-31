import { mount } from '@vue/test-utils';
import { todos } from './mocks/todos';
import BaseTodo from './BaseTodo';

describe('BaseTodo', () => {
  const todoSelector = '.base-todo__checkbox ';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseTodo, {
      propsData: {
        todos,
        ...propsData,
      },
      stubs: ['nuxt-link'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit "input" event', () => {
    const wrapper = factory();
    const input = wrapper.find(todoSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);
  });
});
