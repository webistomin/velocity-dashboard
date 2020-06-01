import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { ChartData, ChartOptions } from 'chart.js';
import formatDistance from 'date-fns/formatDistance';
// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration';

import BaseBlock from 'components/base/BaseBlock';
import BaseLineChart from 'components/base/BaseLineChart';
import BaseStat from 'components/base/BaseStat';
import BaseList from 'components/base/BaseList';
import BaseBarGraph from 'components/base/BaseBarCraph';
import { IPageAnalytics } from 'common/types/pages/analytics';
import { IBaseList } from 'components/base/BaseList/BaseList';
import BaseEmpty from 'components/base/BaseEmpty';

import './Analytics.sass';

export interface IAnalyticsPageProps {
  content: IPageAnalytics | null;
}

@Component({
  name: 'Analytics',
  components: { LazyHydrate },
})
export default class Analytics extends VueComponent<IAnalyticsPageProps> {
  @Prop({ required: true })
  private readonly content!: IAnalyticsPageProps['content'];

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

  public get getRevenueChartData(): ChartData | undefined {
    const revenue = this.content?.revenue;

    if (!revenue) {
      return undefined;
    }

    return {
      labels: revenue.labels,
      datasets: [
        {
          label: 'Revenue',
          borderColor: '#2E5BFF',
          pointBackgroundColor: '#FFF',
          fill: true,
          lineTension: 0,
          data: revenue.data[0],
        },
        {
          label: 'Trips',
          borderColor: '#8C54FF',
          pointBackgroundColor: '#FFF',
          fill: true,
          lineTension: 0,
          data: revenue.data[1],
        },
      ],
    };
  }

  public get getLatestTrips(): IBaseList[] | undefined {
    return this.content?.latestTrips?.trips?.map((trip) => {
      return {
        image: '/img/avatar-placeholder.svg',
        name: `${trip.trip.startAddress} ${trip.trip.endAddress}`,
        text: `${trip.trip.endTime ? formatDistance(new Date(trip.trip.endTime), new Date()) : ''}`,
        statistic: `${trip.trip.distance} miles`,
        price: `$${trip.trip.price}`,
      };
    });
  }

  public get getTripsByWeekdayChartData(): ChartData | undefined {
    const tripsByWeekday = this.content?.tripsByWeekday;

    if (!tripsByWeekday) {
      return undefined;
    }

    return {
      labels: ['Mon', 'Tue', 'Fri', 'Thu', 'Wed', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Average',
          borderColor: '#F7C137',
          fill: false,
          lineTension: 0,
          data: tripsByWeekday.datasets[0],
          type: 'line',
        },
        {
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          label: 'Comfort',
          backgroundColor: '#2E5BFF',
          data: tripsByWeekday.datasets[1],
        },
        {
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          label: 'Premium',
          backgroundColor: '#8C54FF',
          data: tripsByWeekday.datasets[2],
        },
      ],
    };
  }

  public render(): VNode {
    return (
      <section class='analytics'>
        <div class='container'>
          <div class='analytics__grid'>
            <BaseBlock class='analytics__block' title='Revenue'>
              {this.getRevenueChartData ? (
                <BaseLineChart
                  chartData={this.getRevenueChartData}
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
              ) : (
                <BaseEmpty />
              )}
            </BaseBlock>

            <BaseBlock class='analytics__block' title='Vehicles on track'>
              {this.content?.vehiclesOnTrack ? (
                <BaseStat
                  value={this.content.vehiclesOnTrack.todayCount}
                  prevValue={this.content.vehiclesOnTrack.yesterdayCount}
                  measure='$'
                  icon='icon-check'
                  color='green'
                  align='row'
                />
              ) : (
                <BaseEmpty />
              )}
            </BaseBlock>

            <BaseBlock class='analytics__block' title='Distance driven'>
              {this.content?.distanceDriven ? (
                <BaseStat
                  value={this.content.distanceDriven.todayCount}
                  prevValue={this.content.distanceDriven.yesterdayCount}
                  measure='mi'
                  icon='icon-pin'
                  color='blue'
                  align='row'
                />
              ) : (
                <BaseEmpty />
              )}
            </BaseBlock>

            <BaseBlock class='analytics__block' title='Energy consumed'>
              {this.content?.energyConsumed ? (
                <BaseStat
                  value={this.content.energyConsumed.todayCount}
                  prevValue={this.content.energyConsumed.yesterdayCount}
                  measure='kWh'
                  icon='icon-lightning'
                  color='purple'
                  align='row'
                />
              ) : (
                <BaseEmpty />
              )}
            </BaseBlock>

            <BaseBlock class='analytics__block' title='Total drive time'>
              {this.content?.totalDriveTime ? (
                <BaseStat
                  value={this.content.totalDriveTime.todayCount}
                  prevValue={this.content.totalDriveTime.yesterdayCount}
                  measure='h'
                  icon='icon-graph'
                  color='yellow'
                  align='row'
                />
              ) : (
                <BaseEmpty />
              )}
            </BaseBlock>

            <LazyHydrate when-visible>
              <BaseBlock class='analytics__block' title='Latest trips'>
                {this.getLatestTrips ? <BaseList list={this.getLatestTrips} /> : <BaseEmpty />}
              </BaseBlock>
            </LazyHydrate>

            <LazyHydrate when-visible>
              <BaseBlock class='analytics__block' title='Trips by weekday'>
                {this.getTripsByWeekdayChartData ? (
                  <BaseBarGraph chartData={this.getTripsByWeekdayChartData} options={this.mixedOptions} />
                ) : (
                  <BaseEmpty />
                )}
              </BaseBlock>
            </LazyHydrate>
          </div>
        </div>
      </section>
    );
  }
}
