import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { ChartData, ChartOptions } from 'chart.js';

import BaseBlock from 'components/base/BaseBlock';
import BaseLineChart from 'components/base/BaseLineChart';
import BaseStat from 'components/base/BaseStat';
import BaseList from 'components/base/BaseList';
import BaseBarGraph from 'components/base/BaseBarCraph';

import './Analytics.sass';

@Component({
  name: 'Analytics',
})
export default class Analytics extends VueComponent {
  public dataCollectionLinear: ChartData = {
    labels: [
      '',
      'Mar 1',
      'Mar 8',
      'Mar 15',
      'Mar 22',
      'Mar 29',
      'Apr 5',
      'Apr 12',
      'Apr 19',
      'Apr 26',
      'May 2',
      'May 9',
      'May 16',
      'May 23',
      'May 30',
      'Jun 5',
      'Jun 10',
      'Jun 19',
    ],
    datasets: [
      {
        label: 'Revenue',
        borderColor: '#2E5BFF',
        pointBackgroundColor: '#FFF',
        fill: true,
        lineTension: 0,
        data: [
          {
            x: 0,
            y: 8000,
          },
          {
            x: 1,
            y: 11500,
          },
          {
            x: 2,
            y: 9800,
          },
          {
            x: 3,
            y: 15100,
          },
          {
            x: 4,
            y: 23000,
          },
          {
            x: 5,
            y: 22000,
          },
          {
            x: 6,
            y: 16000,
          },
          {
            x: 7,
            y: 13800,
          },
          {
            x: 8,
            y: 16300,
          },
          {
            x: 9,
            y: 17000,
          },
          {
            x: 10,
            y: 24500,
          },
          {
            x: 11,
            y: 19000,
          },
          {
            x: 12,
            y: 12000,
          },
          {
            x: 13,
            y: 8900,
          },
          {
            x: 14,
            y: 16000,
          },
          {
            x: 15,
            y: 27000,
          },
          {
            x: 16,
            y: 22000,
          },
          {
            x: 17,
            y: 21000,
          },
        ],
      },
      {
        label: 'Trips',
        borderColor: '#8C54FF',
        pointBackgroundColor: '#FFF',
        fill: true,
        lineTension: 0,
        data: [
          {
            x: 0,
            y: 4800,
          },
          {
            x: 1,
            y: 5000,
          },
          {
            x: 2,
            y: 7500,
          },
          {
            x: 3,
            y: 7000,
          },
          {
            x: 4,
            y: 11500,
          },
          {
            x: 5,
            y: 13000,
          },
          {
            x: 6,
            y: 7500,
          },
          {
            x: 7,
            y: 8500,
          },
          {
            x: 8,
            y: 6000,
          },
          {
            y: 13700,
          },
          {
            x: 10,
            y: 18000,
          },
          {
            x: 11,
            y: 17600,
          },
          {
            x: 12,
            y: 2500,
          },
          {
            x: 13,
            y: 6000,
          },
          {
            x: 14,
            y: 9000,
          },
          {
            x: 15,
            y: 22500,
          },
          {
            x: 16,
            y: 14000,
          },
          {
            x: 17,
            y: 19000,
          },
        ],
      },
    ],
  };

  public lineOptions: ChartOptions = {
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
            callback: (value) => {
              let tempVal = value.toString();
              if (tempVal.length >= 4) tempVal = tempVal.substring(0, tempVal.length - 3) + 'k ';
              return '$' + tempVal;
            },
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
      },
    },
  };

  public trips = [
    {
      image: '/img/avatar.png',
      name: 'Chrysler Building - The High Line',
      text: '06/03/2018',
      statistic: '24min',
      price: '$28',
    },
    {
      image: '/img/avatar.png',
      name: 'Chrysler Building - The High Line',
      text: '06/03/2018',
      statistic: '24min',
      price: '$28',
    },
    {
      image: '/img/avatar.png',
      name: 'Chrysler Building - The High Line',
      text: '06/03/2018',
      statistic: '24min',
      price: '$28',
    },
    {
      image: '/img/avatar.png',
      name: 'Chrysler Building - The High Line',
      text: '06/03/2018',
      statistic: '24min',
      price: '$28',
    },
    {
      image: '/img/avatar.png',
      name: 'Chrysler Building - The High Line',
      text: '06/03/2018',
      statistic: '24min',
      price: '$28',
    },
    {
      image: '/img/avatar.png',
      name: 'Chrysler Building - The High Line',
      text: '06/03/2018',
      statistic: '24min',
      price: '$28',
    },
  ];

  public dataCollectionMixed: ChartData = {
    labels: ['Mon', 'Tue', 'Fri', 'Thu', 'Wed', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Average',
        borderColor: '#F7C137',
        fill: false,
        lineTension: 0,
        data: [110, 80, 100, 110, 74, 55, 124],
        type: 'line',
      },
      {
        barPercentage: 0.5,
        categoryPercentage: 0.3,
        label: 'Comfort',
        backgroundColor: '#2E5BFF',
        data: [82, 65, 75, 130, 55, 62, 120],
      },
      {
        barPercentage: 0.5,
        categoryPercentage: 0.3,
        label: 'Premium',
        backgroundColor: '#8C54FF',
        data: [90, 75, 80, 60, 45, 117],
      },
    ],
  };

  public mixedOptions: ChartOptions = {
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

  public render(): VNode {
    return (
      <section class='analytics'>
        <div class='container'>
          <div class='analytics__grid'>
            <BaseBlock class='analytics__block' title='Revenue'>
              <BaseLineChart
                chartData={this.dataCollectionLinear}
                options={this.lineOptions}
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
              />
            </BaseBlock>
            <BaseBlock class='analytics__block' title='Vehicles on track'>
              <BaseStat value={1428} measure='$' icon='icon-check' color='green' align='row' />
            </BaseBlock>
            <BaseBlock class='analytics__block' title='Distance driven'>
              <BaseStat value={158.3} measure='mi' icon='icon-pin' color='blue' align='row' />
            </BaseBlock>
            <BaseBlock class='analytics__block' title='Energy consumed'>
              <BaseStat value={87.4} measure='kWh' icon='icon-lightning' color='purple' align='row' />
            </BaseBlock>
            <BaseBlock class='analytics__block' title='Total drive time'>
              <BaseStat value={24.2} measure='h' icon='icon-graph' color='yellow' align='row' />
            </BaseBlock>
            <BaseBlock class='analytics__block'>
              <BaseList list={this.trips} />
            </BaseBlock>
            <BaseBlock class='analytics__block'>
              <BaseBarGraph chartData={this.dataCollectionMixed} options={this.mixedOptions} />
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
