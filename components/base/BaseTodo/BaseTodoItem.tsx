import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import add from 'date-fns/add';
import compareAsc from 'date-fns/compareAsc';
import format from 'date-fns/format';

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

  public get getDeadline(): string | undefined {
    if (this.dueDate) {
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

    return undefined;
  }

  public get getDeadlineClass(): string {
    const deadline = this.getDeadline;

    if (deadline) {
      return `base-todo__date_deadline_${deadline}`;
    }

    return '';
  }

  public get getFormattedDate(): string | undefined {
    if (this.dueDate) {
      return format(new Date(this.dueDate), 'd MMM hh:mm');
    }

    return undefined;
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
          {this.dueDate ? (
            <time class={`base-todo__date ${this.getDeadlineClass}`}>Due {this.getFormattedDate}</time>
          ) : null}
        </nuxt-link>
      </li>
    );
  }
}
