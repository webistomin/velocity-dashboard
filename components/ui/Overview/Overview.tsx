import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { ChartData, ChartOptions } from 'chart.js';

import BaseBlock from 'components/base/BaseBlock';
import BaseCircularGraph from 'components/base/BaseCircularGraph';
import BaseTitle from 'components/base/BaseTitle';

import './Overview.sass';
import BaseStat from 'components/base/BaseStat/BaseStat';
import BaseLineChart from 'components/base/BaseLineChart';
import BaseMap from 'components/base/BaseMap';
import BaseList from 'components/base/BaseList';
import { IBaseList } from 'components/base/BaseList/BaseList';

@Component({
  name: 'Overview',
})
export default class Overview extends VueComponent {
  datacollectionLinear: ChartData = {
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

  options: ChartOptions = {
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
  ];

  render(): VNode {
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
              <BaseStat value={1428} prevValue={1000} measure='cars' />
            </BaseBlock>
            <BaseBlock class='overview__block' title='Distance driven'>
              <BaseStat value={158.3} prevValue={190} measure='mi' />
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <BaseMap />
            </BaseBlock>
            <BaseBlock class='overview__block' title='Top drivers'>
              <BaseList list={this.drivers} />
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
