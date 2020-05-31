import { mount } from '@vue/test-utils';
import BaseBoard from './BaseBoard';
import { boardData } from './mocks/data';

describe('BaseBoard', () => {
  const draggableSelector = '.base-board .base-board__col .base-board__draggable';
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseBoard, {
      propsData: {
        board: boardData,
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit setBoard event', () => {
    const wrapper = factory();
    wrapper.vm.setBoard();
    expect(wrapper.emitted().setBoard);
  });

  it('Toggle collapsed state correctly', () => {
    const wrapper = factory(
      {},
      {
        data() {
          return {
            collapsed: true,
          };
        },
      }
    );
    wrapper.vm.toggleBoard();
    expect(wrapper.vm.collapsed).toEqual(false);

    wrapper.vm.toggleBoard();
    expect(wrapper.vm.collapsed).toEqual(true);
  });

  it('Have 4 element is column if is collapsed', () => {
    const wrapper = factory(
      {},
      {
        data() {
          return {
            collapsed: true,
          };
        },
      }
    );

    const draggableEl = wrapper.find(draggableSelector);
    const draggableItems = draggableEl.findAll('.base-board__item');
    expect(draggableItems.length).toEqual(4);
  });

  it('Have more than 4 element is column if is not collapsed', () => {
    const wrapper = factory(
      {},
      {
        data() {
          return {
            collapsed: false,
          };
        },
      }
    );

    const draggableEl = wrapper.find(draggableSelector);
    const draggableItems = draggableEl.findAll('.base-board__item');
    expect(draggableItems.length).toBeGreaterThanOrEqual(4);
  });
});
