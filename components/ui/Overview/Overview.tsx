import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { ChartData, ChartOptions } from 'chart.js';
import { eachHourOfInterval, format } from 'date-fns';

import BaseBlock from 'components/base/BaseBlock';
import BaseCircularGraph from 'components/base/BaseCircularGraph';
import BaseTitle from 'components/base/BaseTitle';
import BaseStat from 'components/base/BaseStat/BaseStat';
import BaseLineChart from 'components/base/BaseLineChart';
import BaseMap from 'components/base/BaseMap';
import BaseList from 'components/base/BaseList';
import { IBaseList } from 'components/base/BaseList/BaseList';
import BaseBarGraph from 'components/base/BaseBarCraph';
import BaseTodo from 'components/base/BaseTodo';
import { IBaseTodo } from 'components/base/BaseTodo/BaseTodo';
import { IPageHome } from 'common/types/pages/home';

import './Overview.sass';

export interface IHomePageProps {
  content: IPageHome | null;
}

@Component({
  name: 'Overview',
})
export default class Overview extends VueComponent<IHomePageProps> {
  @Prop()
  private readonly content!: IHomePageProps['content'];

  public chartOptions: ChartOptions = {
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

  public get getTopDrivers(): IBaseList[] | undefined {
    return this.content?.topDrivers.drivers
      .sort((a, b) => b.moneyYearned - a.moneyYearned)
      .map((driver) => {
        return {
          image: driver.avatar || '/img/avatar-placeholder.svg',
          name: `${driver.firstName} ${driver.lastName}`,
          text: `${driver.car.manufacturer} ${driver.car.model}`,
          statistic: `${driver.milesDriven} miles`,
          price: `$${driver.moneyYearned}`,
        };
      });
  }

  public get getOperatingScores(): IPageHome['operating'] | undefined {
    return this.content?.operating;
  }

  public get getTodayTripsData(): ChartData | undefined {
    const trips = this.content?.tripsComparison;
    const dataCollectionLinear: ChartData = {
      labels: [],
      datasets: [
        {
          label: 'Today',
          borderColor: '#2E5BFF',
          pointBackgroundColor: '#ffffff',
          lineTension: 0,
          fill: true,
          data: [],
        },
        {
          label: 'Yesterday',
          borderColor: '#8C54FF',
          pointBackgroundColor: '#ffffff',
          fill: true,
          lineTension: 0,
          data: [],
        },
      ],
    };

    if (!trips) {
      return undefined;
    }

    const dayTimeIntervals = eachHourOfInterval({
      start: new Date().setHours(0, 0, 0, 0),
      end: new Date().setHours(23, 0, 0, 0),
    });

    const hoursIntervals = dayTimeIntervals.map((time) => format(time, 'hh:mm bb'));
    const currentHour = format(new Date(), 'hh:00 bb');
    const currentHourIndex = hoursIntervals.indexOf(currentHour);
    const startIndex = currentHourIndex - trips.today.length > 0 ? currentHourIndex - trips.today.length : 0;

    dataCollectionLinear.labels = [...hoursIntervals.slice(startIndex, currentHourIndex)];
    dataCollectionLinear.datasets![0].data = trips.today;
    dataCollectionLinear.datasets![1].data = trips.yesterday;

    return dataCollectionLinear;
  }

  public get getVehiclesOnTrack(): IPageHome['vehiclesOnTrack'] | undefined {
    return this.content?.vehiclesOnTrack;
  }

  public get getDistanceDriven(): IPageHome['distanceDriver'] | undefined {
    return this.content?.distanceDriver;
  }

  public get getTripsTypeStat(): ChartData | undefined {
    const tripsStat = this.content?.tripsTypeStatistics;

    if (!tripsStat) {
      return undefined;
    }

    const barGraphData: ChartData = {
      labels: ['April', 'May', 'June'],
      datasets: [
        {
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          label: 'Comfort',
          lineTension: 0.4,
          backgroundColor: '#2E5BFF',
          data: [],
        },
        {
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          label: 'Premium',
          backgroundColor: '#8C54FF',
          data: [],
        },
      ],
    };

    barGraphData.datasets!.forEach((dataset, index) => {
      dataset.data = tripsStat.data[index];
    });

    barGraphData.labels = tripsStat.labels;

    return barGraphData;
  }

  public render(): VNode {
    return (
      <section class='overview'>
        <div class='container'>
          <div class='overview__grid'>
            {this.getOperatingScores ? (
              <BaseBlock class='overview__block' contentMix='overview__welcome'>
                <BaseCircularGraph value={this.getOperatingScores.score} />
                <div class='overview__desc'>
                  <BaseTitle level={3} class='overview__welcome-title'>
                    Welcome <br /> to Velocity
                  </BaseTitle>
                  <p class='overview__text paragraph'>
                    All cars are operating well. There were {this.getOperatingScores.tripsCount} trips since your last
                    login.
                  </p>
                </div>
              </BaseBlock>
            ) : null}
            {this.getTodayTripsData ? (
              <BaseBlock class='overview__block' title={`Today's Trips`}>
                <BaseLineChart
                  chartData={this.getTodayTripsData}
                  options={this.chartOptions}
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
            ) : null}
            {this.getVehiclesOnTrack ? (
              <BaseBlock class='overview__block' title='Vehicles on track'>
                <BaseStat
                  value={this.getVehiclesOnTrack.todayCount}
                  prevValue={this.getVehiclesOnTrack.yesterdayCount}
                  measure='cars'
                  icon='icon-check'
                  color='green'
                  align='row'
                />
              </BaseBlock>
            ) : null}
            {this.getDistanceDriven ? (
              <BaseBlock class='overview__block' title='Distance driven'>
                <BaseStat
                  value={this.getDistanceDriven.todayCount}
                  prevValue={this.getDistanceDriven.yesterdayCount}
                  measure='mi'
                  icon='icon-pin'
                  color='blue'
                  align='row'
                />
              </BaseBlock>
            ) : null}
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <BaseMap class='overview__map' />
            </BaseBlock>
            {this.getTopDrivers ? (
              <BaseBlock class='overview__block' title='Top drivers'>
                <BaseList list={this.getTopDrivers} />
              </BaseBlock>
            ) : null}
            {this.getTripsTypeStat ? (
              <BaseBlock class='overview__block' title='Trips by type'>
                <BaseBarGraph chartData={this.getTripsTypeStat} options={this.chartOptions} />
              </BaseBlock>
            ) : null}
            <BaseBlock class='overview__block' title='Service Reminders'>
              <BaseTodo todos={this.todos} onInput={(event: Event) => this.updateTodo(event)} />
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
