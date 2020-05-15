import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { IBaseTodo } from './BaseTodo';
import { addDaysToDate } from '~/utils/add-days';

export interface IBaseTodoItem extends IBaseTodo {
  onInput?: (event: Event) => void;
}

@Component({
  name: 'BaseTodoItem',
})
export default class BaseTodoItem extends VueComponent<IBaseTodoItem> {
  @Prop()
  private readonly id!: IBaseTodo['id'];

  @Prop()
  private readonly title!: IBaseTodo['title'];

  @Prop()
  private readonly date!: IBaseTodo['date'];

  @Prop()
  private readonly isDone!: IBaseTodo['isDone'];

  get getDeadline(): string {
    const taskDate = this.date;
    const today = Date.now();
    const onTimeDate = addDaysToDate(new Date(today), 5);

    if (new Date(today) > new Date(taskDate)) {
      return 'overdue';
    } else if (new Date(taskDate) > onTimeDate) {
      return 'due-soon';
    }

    return 'on-time';
  }

  @Emit('input')
  onInput(event: Event): Event {
    return event;
  }

  public render(): VNode {
    return (
      <li class={`list-item base-todo__item ${this.isDone ? 'base-todo__item_done' : ''}`}>
        <div class='base-todo__actions'>
          <input
            type='checkbox'
            class='base-todo__checkbox visually-hidden'
            id={this.id}
            onInput={this.onInput}
            value={this.id}
            checked={this.isDone}
          />
          <label for={this.id} class='base-todo__label label' />
        </div>
        <nuxt-link to={this.id} class='base-todo__content link'>
          <strong class='base-todo__name'>{this.title}</strong>
          <time class={`base-todo__date base-todo__date_deadline_${this.getDeadline}`}>
            Due {new Date(this.date).toLocaleString()}
          </time>
        </nuxt-link>
      </li>
    );
  }
}
