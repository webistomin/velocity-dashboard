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
import RemindersMap from './RemindersMap';

import './Reminders.sass';
import { BaseTitle } from 'components/base/BaseTitle/BaseTitle';

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

  pieData: ChartData = {
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

  pieOptions: ChartOptions = {
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

  drivers: IBaseList[] = [
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
          <BaseTitle level={3} class='reminders__title'>Service Reminders</BaseTitle>
          <div class='reminders__grid'>
            <BaseBlock simple class='reminders__block'>
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
