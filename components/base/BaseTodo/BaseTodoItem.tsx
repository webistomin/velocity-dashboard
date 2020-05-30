import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { add, compareAsc } from 'date-fns';

import { clientUrls } from 'common/urls/clientUrls';
import { IBaseTodo } from './BaseTodo';

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
  private readonly dueDate!: IBaseTodo['dueDate'];

  @Prop()
  private readonly isDone!: IBaseTodo['isDone'];

  public get getDeadline(): string {
    const taskDate = new Date(this.dueDate);
    const today = new Date();
    const onTimeDate = add(new Date(), { days: 5 });

    /* Compare the two dates and return 1 if the first date is after the second,
     * -1 if the first date is before the second
     * or 0 if dates are equal. */
    if (compareAsc(today, taskDate) === 1) {
      return 'overdue';
    } else if (compareAsc(onTimeDate, taskDate) === 1) {
      return 'due-soon';
    }

    return 'on-time';
  }

  @Emit('input')
  public onInput(event: Event): Event {
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
            aria-label={`Toggle task with name: ${this.title}`}
          />
          <label for={this.id} class='base-todo__label label' />
        </div>
        <nuxt-link to={`${clientUrls.reminders}/${this.id}`} class='base-todo__content link'>
          <strong class='base-todo__name'>{this.title}</strong>
          <time class={`base-todo__date base-todo__date_deadline_${this.getDeadline}`}>
            Due {new Date(this.dueDate).toLocaleString()}
          </time>
        </nuxt-link>
      </li>
    );
  }
}
