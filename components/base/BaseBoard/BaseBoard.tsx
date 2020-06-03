import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import Draggable from 'vuedraggable';

import BaseBadge from 'components/base/BaseBadge';

import './BaseBoard.sass';

export interface ITask {
  title: string;
  text: string;
  date: string;
}

export interface ITaskBoard {
  title: string;
  color?: string;
  tasks: ITask[];
}

export interface IBaseBoardProps {
  board: ITaskBoard[];
  onSetBoard?: (board: ITaskBoard[]) => void;
}

@Component({
  name: 'BaseBoard',
  components: { Draggable },
})
export default class BaseBoard extends VueComponent<IBaseBoardProps> {
  @Prop({ required: true })
  private readonly board!: IBaseBoardProps['board'];

  public currentBoard = this.board;
  public collapsed = true;

  @Emit('setBoard')
  public setBoard(): IBaseBoardProps['board'] {
    return this.currentBoard;
  }

  public toggleBoard() {
    this.collapsed = !this.collapsed;
  }

  public render(): VNode {
    return (
      <div class='base-board'>
        <div class='base-board__wrapper'>
          {this.currentBoard.map((column) => {
            return (
              <div class='base-board__col'>
                <div class='base-board__heading'>
                  <strong class='base-board__caption caption'>{column.title}</strong>
                  <BaseBadge color={column.color}>{column.tasks.length}</BaseBadge>
                </div>
                <Draggable
                  data-jest='base-block__draggable'
                  class='base-board__draggable'
                  group='tasks'
                  animation={200}
                  disabled={false}
                  ghostClass='base-board__item_ghost'
                  list={column.tasks}
                  onChange={this.setBoard}>
                  {column.tasks.slice(0, this.collapsed ? 4 : column.tasks.length).map((task) => {
                    return (
                      <div class={`base-board__item base-board__item_color_${column.color || 'default'}`}>
                        <div class='base-board__item-row'>
                          <strong class='base-board__name'>{task.title}</strong>
                        </div>
                        <div class='base-board__item-row'>
                          <span class='base-board__text'>{task.text}</span>
                          <time class='base-board__date'>{task.date}</time>
                        </div>
                      </div>
                    );
                  })}
                </Draggable>
              </div>
            );
          })}
        </div>
        <button class='base-board__toggle btn caption' type='button' onClick={this.toggleBoard}>
          <span class='base-board__toggle-text'>{this.collapsed ? 'Expand' : 'Collapse'} boards</span>
        </button>
      </div>
    );
  }
}
