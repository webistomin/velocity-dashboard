import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { ChartData, ChartOptions } from 'chart.js';

import BaseBlock from 'components/base/BaseBlock';
import BaseBoard from 'components/base/BaseBoard';
import { ITaskBoard } from 'components/base/BaseBoard/BaseBoard';
import BasePieGraph from 'components/base/BasePieGraph';
import BaseList from 'components/base/BaseList';
import { IBaseList } from 'components/base/BaseList/BaseList';
import BaseTitle from 'components/base/BaseTitle';
import RemindersMap from './RemindersMap';

import './Reminders.sass';

@Component({
  name: 'Reminders',
})
export default class Reminders extends VueComponent {
  public board: ITaskBoard[] = [
    {
      title: 'Backlog',
      color: 'blue',
      tasks: [
        {
          title: 'Invest in the Stock Market',
          text: 'People who insist on picking their teeth with their elbows are so annoying!',
          date: 'June 12',
        },
        {
          title: 'Group the users',
          text: 'She saw the brake lights, but not in time.',
          date: 'June 12',
        },
        {
          title: 'Create a list of contacts',
          text: 'He quietly entered the museum as the super bowl started.',
          date: 'June 1',
        },
        {
          title: 'Import contacts from a spreadsheet',
          text: 'The delicious aroma from the kitchen was ruined by cigarette smoke.',
          date: 'June 5',
        },
        {
          title: "Calculate employee's tax deduction",
          text: 'He uses onomatopoeia as a weapon of mental destruction.',
          date: 'June 12',
        },
        {
          title: 'Manage contacts',
          text: 'The swirled lollipop had issues with the pop rock candy.',
          date: 'June 11',
        },
      ],
    },
    {
      title: 'In progress',
      color: 'purple',
      tasks: [
        {
          title: 'Check cars',
          text: 'My Mum tries to be cool by saying that she likes all the same things that I do.',
          date: 'May 12',
        },
        {
          title: 'Add avatar',
          text: 'He poured rocks in the dungeon of his mind.',
          date: 'June 1',
        },
      ],
    },
    {
      title: 'Validate',
      color: 'darkturquoise',
      tasks: [
        {
          title: 'Assign tasks to Anna',
          text: 'He put heat on the wound to see what would grow.',
          date: 'June 3',
        },
      ],
    },
    {
      title: 'Complete',
      color: 'yellow',
      tasks: [
        {
          title: 'Send follow-up emails to the group of users',
          text: 'We will not allow you to bring your pet armadillo along.',
          date: 'June 10',
        },
      ],
    },
  ];

  public pieData: ChartData = {
    labels: ['Fully serviced', 'In service', 'Waiting', 'Service needed'],
    datasets: [
      {
        fill: true,
        weight: 5,
        hoverBorderWidth: 10,
        borderWidth: 0,
        hoverBorderColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
        hoverBackgroundColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
        backgroundColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
        data: [57.8, 5, 20, 17.2],
      },
    ],
  };

  public pieOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    legend: {
      display: true,
      position: 'right',
      align: 'center',
      labels: {
        boxWidth: 10,
        usePointStyle: true,
        padding: 30,
        fontColor: '#2e384d',
      },
    },
  };

  public drivers: IBaseList[] = [
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
    {
      image: '/img/avatar.png',
      name: 'Bebop',
      text: 'Volvo Intellisafe',
      statistic: '1,232 miles',
      price: '$6,432',
    },
  ];

  public onSetBoard(board: ITaskBoard[]): void {
    this.board = board;
  }

  public render(): VNode {
    return (
      <section class='reminders'>
        <div class='reminders__container container'>
          <BaseTitle level={3} class='reminders__title'>
            Service Reminders
          </BaseTitle>
          <div class='reminders__grid'>
            <BaseBlock isSimple class='reminders__block'>
              <BaseBoard board={this.board} onSetBoard={(board: ITaskBoard[]) => this.onSetBoard(board)} />
            </BaseBlock>
            <BaseBlock title='service center' class='reminders__block'>
              <RemindersMap />
            </BaseBlock>
            <BaseBlock title='Vehicle Service Status' class='reminders__block'>
              <BasePieGraph chartData={this.pieData} options={this.pieOptions} />
            </BaseBlock>
            <BaseBlock title='Top drivers' class='reminders__block'>
              <BaseList list={this.drivers} limit={3} />
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
