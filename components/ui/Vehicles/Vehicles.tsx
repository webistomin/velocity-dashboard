import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseBlock from 'components/base/BaseBlock';
import BaseTitle from 'components/base/BaseTitle';
import BaseTable from 'components/base/BaseTable';
import BaseButton from 'components/base/BaseButton';
import BaseSlider from 'components/base/BaseSlider';
import BaseSelect from 'components/base/BaseSelect';
// @ts-ignore
import { CollapseTransition } from 'vue2-transitions';

import './Vehicles.sass';

@Component({
  name: 'Vehicles',
})
export default class Vehicles extends VueComponent {
  public isFiltersVisible: boolean = false;

  public tableData = [
    {
      id: '#2178',
      subject: 'Refund request',
      date: '05/04/2018',
      status: 'Active',
    },
    {
      id: '#2179',
      subject: 'Active request',
      date: '05/04/2018',
      status: 'Active',
    },
    {
      id: '#2180',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2181',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2182',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2183',
      subject: 'Refund request',
      date: '05/11/2018',
      status: 'Active',
    },
    {
      id: '#2184',
      subject: 'Active request',
      date: '05/03/2018',
      status: 'Active',
    },
    {
      id: '#2185',
      subject: 'Refund request',
      date: '02/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2186',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2187',
      subject: 'Refund request',
      date: '01/04/2019',
      status: 'Unresolved',
    },
  ];

  public tableConfig = [
    {
      key: 'id',
      title: 'Id',
    },
    {
      key: 'subject',
      title: 'Subject',
    },
    {
      key: 'date',
      title: 'Latest update',
    },
    {
      key: 'status',
      title: 'Status',
    },
  ];

  public slider1: number = 0;
  public slider2: number = 0;

  public select1: string = '';
  public select2: string = '';
  public select3: string = '';

  public toggleFiltersVisibility(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
  }

  public mounted(): void {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.isFiltersVisible = true;
    }
  }

  public render(): VNode {
    return (
      <section class='vehicles'>
        <div class='vehicles__container container'>
          <div class='vehicles__grid'>
            <BaseBlock class='vehicles__block' simple={true}>
              <div class='vehicles__heading'>
                <BaseTitle level={3}>
                  Vehicles Dashboard
                  <sup class='vehicles__counter'>1192 Total</sup>
                </BaseTitle>
              </div>
            </BaseBlock>
            <BaseBlock class='vehicles__block' title='filter' contentMix='vehicles__filter-block'>
              <BaseButton class='vehicles__filters-toggle' theme='light' onClick={() => this.toggleFiltersVisibility()}>
                {this.isFiltersVisible ? 'Hide' : 'Show'} filter
              </BaseButton>
              <CollapseTransition>
                <div class='vehicles__filters' vShow={this.isFiltersVisible}>
                  <div class='vehicles__filter-group'>
                    <BaseSlider
                      value={this.slider1}
                      onChange={(value: number) => (this.slider1 = value)}
                      min={0}
                      max={753}
                      labelStart='Trips taken'
                      labelEnd='753'
                    />
                  </div>
                  <div class='vehicles__filter-group'>
                    <BaseSlider
                      value={this.slider2}
                      onChange={(value: number) => (this.slider2 = value)}
                      min={0}
                      max={14}
                      labelStart='Trips taken'
                      labelEnd='14 days'
                    />
                  </div>
                  <div class='vehicles__filter-group'>
                    <BaseSelect
                      label='Vehicle model'
                      id='vehicles-model-select'
                      value={this.select1}
                      options={['1', '2', '3']}
                      onInput={(value: string) => (this.select1 = value)}
                      placeholder='Vehicle model'
                    />
                  </div>
                  <div class='vehicles__filter-group'>
                    <BaseSelect
                      label='Status'
                      id='vehicles-status-select'
                      value={this.select2}
                      options={['1', '2', '3']}
                      onInput={(value: string) => (this.select2 = value)}
                      placeholder='Status'
                    />
                  </div>
                  <div class='vehicles__filter-group'>
                    <BaseSelect
                      label='Location'
                      id='vehicles-location-select'
                      value={this.select3}
                      options={['1', '2', '3']}
                      onInput={(value: string) => (this.select3 = value)}
                      placeholder='Location'
                    />
                  </div>
                </div>
              </CollapseTransition>
            </BaseBlock>
            <BaseBlock simple={true} class='vehicles__block' contentMix='vehicles__filter-block'>
              <BaseTable tableConfig={this.tableConfig} tableData={this.tableData} />
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
