import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTodoItem from './BaseTodoItem';

import './BaseTodo.sass';

export interface IBaseTodo {
  id: string;
  title: string;
  date: DOMTimeStamp;
  isDone: boolean;
}

export interface IBaseTodoProps {
  todos: IBaseTodo[];
  limit?: number;
}

@Component({
  name: 'BaseTodo',
})
export default class BaseTodo extends VueComponent<IBaseTodoProps> {
  @Prop()
  private readonly todos!: IBaseTodoProps['todos'];

  @Prop({ default: 7 })
  private readonly limit!: IBaseTodoProps['limit'];

  @Emit('input')
  onInput(event: Event): Event {
    return event;
  }

  public render(): VNode {
    return (
      <div class='base-todo'>
        <ul class='base-todo__list list'>
          {this.todos.slice(0, this.limit).map((todo) => {
            return (
              <BaseTodoItem
                title={todo.title}
                key={todo.id}
                id={todo.id}
                date={todo.date}
                isDone={todo.isDone}
                onInput={(event: Event) => this.onInput(event)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
