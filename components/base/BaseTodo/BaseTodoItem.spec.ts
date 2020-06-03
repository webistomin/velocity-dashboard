import { mount } from '@vue/test-utils';
import add from 'date-fns/add';
import sub from 'date-fns/sub';
import BaseTodoItem from './BaseTodoItem';

describe('BaseTodoItem', () => {
  const checkboxSelector = "[data-jest='base-todo__checkbox']";
  const itemSelector = "[data-jest='base-todo__item']";
  const dateSelector = "[data-jest='base-todo__date']";

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseTodoItem, {
      propsData: {
        id: '1',
        title: 'Title',
        isDone: false,
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
    const input = wrapper.find(checkboxSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);

    const onInputMethod = wrapper.vm.onInput({} as Event);
    expect(onInputMethod).toEqual({});
  });

  it('Set done class is "isDone" prop is provided', () => {
    const expectedResult = ['base-todo__item_done'];
    const wrapper = factory({
      isDone: true,
    });
    const todo = wrapper.find(itemSelector);
    const classes = todo.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Date is visible if "dueDate" prop is provided', () => {
    const wrapper = factory({
      dueDate: new Date('03-06-2020'),
    });
    const date = wrapper.find(dateSelector);
    expect(date.exists()).toBe(true);
  });

  it('Return undefined if "dueDate" prop is not provided', () => {
    const wrapper = factory();
    expect(wrapper.vm.getFormattedDate).toEqual(undefined);
  });

  it('Return formatted if "dueDate" prop is provided', () => {
    const wrapper = factory({
      dueDate: new Date('03-06-2020'),
    });
    expect(wrapper.vm.getFormattedDate).not.toEqual(undefined);
  });

  it('Return undefined if "dueDate" prop is not provided', () => {
    const wrapper = factory();
    expect(wrapper.vm.getDeadline).toEqual(undefined);
  });

  it('Return empty string if getDeadline returns undefined', () => {
    const wrapper = factory();
    expect(wrapper.vm.getDeadlineClass).toEqual('');
  });

  it('Return "overdue" if todo date is expired', () => {
    const wrapper = factory({
      dueDate: sub(new Date(), { days: 20 }),
    });
    expect(wrapper.vm.getDeadline).toEqual('overdue');
  });

  it('Return "due-soon" if todo date will expire soon', () => {
    const wrapper = factory({
      dueDate: add(new Date(), { days: 1 }),
    });
    expect(wrapper.vm.getDeadline).toEqual('due-soon');
  });

  it('Return "on-time" if todo date will not expire soon', () => {
    const wrapper = factory({
      dueDate: add(new Date(), { days: 22 }),
    });
    expect(wrapper.vm.getDeadline).toEqual('on-time');
  });
});
