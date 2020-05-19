import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { ChartData, ChartOptions } from 'chart.js';

import BaseBlock from 'components/base/BaseBlock';
import BaseCircularGraph from 'components/base/BaseCircularGraph';
import BaseTitle from 'components/base/BaseTitle';
import BaseStat from 'components/base/BaseStat/BaseStat';
import BaseLineChart from 'components/base/BaseLineChart';
import BaseMap from 'components/base/BaseMap';
import BaseList from 'components/base/BaseList';
import { IBaseList } from 'components/base/BaseList/BaseList';
import BaseBarGraph from 'components/base/BaseBarCraph';

import './Overview.sass';
import BaseTodo from 'components/base/BaseTodo';
import { IBaseTodo } from 'components/base/BaseTodo/BaseTodo';

@Component({
  name: 'Overview',
})
export default class Overview extends VueComponent {
  public datacollectionLinear: ChartData = {
    labels: ['', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    datasets: [
      {
        label: 'Today',
        borderColor: '#2E5BFF',
        pointBackgroundColor: '#ffffff',
        lineTension: 0,
        fill: true,
        data: [
          {
            x: 0,
            y: 30,
          },
          {
            x: 1,
            y: 20,
          },
          {
            x: 2,
            y: 60,
          },
          {
            x: 3,
            y: 55,
          },
          {
            x: 4,
            y: 118,
          },
          {
            x: 5,
            y: 35,
          },
          {
            x: 6,
            y: 70,
          },
          {
            x: 7,
            y: 55,
          },
          {
            x: 8,
            y: 90,
          },
        ],
      },
      {
        label: 'Yesterday',
        borderColor: '#8C54FF',
        pointBackgroundColor: '#ffffff',
        fill: true,
        lineTension: 0,
        data: [
          {
            x: 0,
            y: 20,
          },
          {
            x: 1,
            y: 40,
          },
          {
            x: 2,
            y: 50,
          },
          {
            x: 3,
            y: 26,
          },
          {
            x: 4,
            y: 65,
          },
          {
            x: 5,
            y: 5,
          },
          {
            x: 6,
            y: 60,
          },
          {
            x: 6.8,
            y: 26,
          },
          {
            x: 8,
            y: 80,
          },
        ],
      },
    ],
  };

  public options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#B0BAC9',
            borderDash: [3, 3],
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 125,
            fontColor: '#B0BAC9',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: '#B0BAC9',
            borderDash: [3, 3],
          },
          ticks: {
            fontColor: '#B0BAC9',
          },
        },
      ],
    },
    legend: {
      display: true,
      align: 'end',
      labels: {
        boxWidth: 10,
        usePointStyle: true,
        padding: 20,
        fontColor: '#B0BAC9',
        fontFamily: 'Rubik, system-ui, sans-serif',
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 4,
        borderWidth: 3,
        hoverBorderWidth: 3,
        backgroundColor: '#FFF',
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

  public barGraphData: ChartData = {
    labels: ['April', 'May', 'June'],
    datasets: [
      {
        barPercentage: 0.5,
        categoryPercentage: 0.3,
        label: 'Comfort',
        lineTension: 0.4,
        backgroundColor: '#2E5BFF',
        data: [60, 65, 85],
      },
      {
        barPercentage: 0.5,
        categoryPercentage: 0.3,
        label: 'Premium',
        backgroundColor: '#8C54FF',
        data: [70, 80, 90],
      },
    ],
  };

  public todos: IBaseTodo[] = [
    {
      title: 'Vehicle #11283',
      date: Date.now(),
      id: '1',
      isDone: false,
    },
    {
      title: 'Vehicle #11283',
      date: Date.now(),
      id: '2',
      isDone: false,
    },
    {
      title: 'Vehicle #11283',
      date: Date.now(),
      id: '3',
      isDone: false,
    },
    {
      title: 'Vehicle #11283',
      date: Date.now(),
      id: '4',
      isDone: false,
    },
    {
      title: 'Vehicle #11283',
      date: Date.now(),
      id: '5',
      isDone: false,
    },
    {
      title: 'Vehicle #11283',
      date: Date.now(),
      id: '6',
      isDone: false,
    },
  ];

  public updateTodo(event: Event): void {
    const target = event.target as HTMLInputElement;
    const id = target.value;
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index].isDone = !this.todos[index].isDone;
  }

  public render(): VNode {
    return (
      <section class='overview'>
        <div class='container'>
          <div class='overview__grid'>
            <BaseBlock class='overview__block' contentMix='overview__welcome'>
              <BaseCircularGraph value={55} />
              <div class='overview__desc'>
                <BaseTitle level={3} class='overview__welcome-title'>
                  Welcome <br /> to Velocity
                </BaseTitle>
                <p class='overview__text paragraph'>
                  All cars are operating well. There were 1,233 trips since your last login.
                </p>
              </div>
            </BaseBlock>
            <BaseBlock class='overview__block' title={`Today's Trips`}>
              <BaseLineChart
                chartData={this.datacollectionLinear}
                options={this.options}
                gradients={[
                  {
                    red: 46,
                    green: 91,
                    blue: 255,
                  },
                  {
                    red: 140,
                    green: 84,
                    blue: 255,
                  },
                ]}
                fallbackText={`Today's Trips`}
              />
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track'>
              <BaseStat value={1428} prevValue={1000} measure='cars' icon='icon-check' color='green' align='row' />
            </BaseBlock>
            <BaseBlock class='overview__block' title='Distance driven'>
              <BaseStat value={158.3} prevValue={190} measure='mi' icon='icon-pin' color='blue' align='row' />
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <BaseMap class='overview__map' />
            </BaseBlock>
            <BaseBlock class='overview__block' title='Top drivers'>
              <BaseList list={this.drivers} />
            </BaseBlock>
            <BaseBlock class='overview__block' title='Trips by type'>
              <BaseBarGraph chartData={this.barGraphData} options={this.options} />
            </BaseBlock>
            <BaseBlock class='overview__block' title='Service Reminders'>
              <BaseTodo todos={this.todos} onInput={(event: Event) => this.updateTodo(event)} />
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
