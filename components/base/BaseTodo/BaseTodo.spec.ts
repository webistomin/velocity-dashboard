import { mount } from '@vue/test-utils';
import { todos } from './mocks/todos';
import BaseTodo from './BaseTodo';

describe('BaseTodo', () => {
  const itemSelector = "[data-jest='base-todo__item']";

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
    const input = wrapper.find(itemSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);

    const onInputMethod = wrapper.vm.onInput({} as Event);
    expect(onInputMethod).toEqual({});
  });
});
