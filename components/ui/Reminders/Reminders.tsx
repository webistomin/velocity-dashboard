import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseBlock from 'components/base/BaseBlock';
import BaseBoard from 'components/base/BaseBoard';
import { ITaskBoard } from 'components/base/BaseBoard/BaseBoard';
import RemindersMap from './RemindersMap';

import './Reminders.sass';

@Component({
  name: 'Reminders',
})
export default class Reminders extends VueComponent {
  board: ITaskBoard[] = [
    {
      title: 'Backlog',
      color: 'blue',
      tasks: [
        {
          title: 'Spire1',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire2',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire3',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire4',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire4',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire4',
          text: 'Tire replacement',
          date: 'June 12',
        },
      ],
    },
    {
      title: 'In progress',
      color: 'purple',
      tasks: [
        {
          title: 'Spire5',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire6',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire7',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire8',
          text: 'Tire replacement',
          date: 'June 12',
        },
      ],
    },
    {
      title: 'Validate',
      color: 'darkturquoise',
      tasks: [
        {
          title: 'Spire9',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire10',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire11',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire12',
          text: 'Tire replacement',
          date: 'June 12',
        },
      ],
    },
    {
      title: 'Complete',
      color: 'yellow',
      tasks: [
        {
          title: 'Spire13',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire14',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire15',
          text: 'Tire replacement',
          date: 'June 12',
        },
        {
          title: 'Spire16',
          text: 'Tire replacement',
          date: 'June 12',
        },
      ],
    },
  ];

  public onSetBoard(board: ITaskBoard[]): void {
    this.board = board;
  }

  public render(): VNode {
    return (
      <section class='reminders'>
        <div class='reminders__container container'>
          <div class='reminders__grid'>
            <BaseBlock simple>
              <BaseBoard board={this.board} onSetBoard={(board: ITaskBoard[]) => this.onSetBoard(board)} />
            </BaseBlock>
            <BaseBlock title='service center'>
              <RemindersMap />
            </BaseBlock>
            <BaseBlock title='Vehicle Service Status' />
            <BaseBlock title='Top drivers' />
          </div>
        </div>
      </section>
    );
  }
}
