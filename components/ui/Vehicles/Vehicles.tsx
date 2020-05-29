import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
// @ts-ignore
import { CollapseTransition } from 'vue2-transitions';
import sortBy from 'lodash.sortby';

import BaseBlock from 'components/base/BaseBlock';
import BaseTitle from 'components/base/BaseTitle';
import BaseTable from 'components/base/BaseTable';
import BaseButton from 'components/base/BaseButton';
import BaseSlider from 'components/base/BaseSlider';
import BaseSelect from 'components/base/BaseSelect';
import { IPageVehicles } from 'common/types/pages/vehicles';
import { IBaseTableConfig } from 'components/base/BaseTable/BaseTable';
import BaseEmpty from 'components/base/BaseEmpty';

import './Vehicles.sass';

export interface IVehiclesPageProps {
  content: IPageVehicles | null;
}

export interface IVehiclesUniqueKeys {
  manufacturer: string[];
  model: string[];
  location: string[];
  status: string[];
}

export interface IVehiclesFilters {
  status: string;
  location: string;
  model: string;
  manufacturer: string;
  tripsTaken: number;
  mileage: number;
}

@Component({
  name: 'Vehicles',
})
export default class Vehicles extends VueComponent<IVehiclesPageProps> {
  @Prop({ required: true })
  private readonly content!: IVehiclesPageProps['content'];

  public isFiltersVisible: boolean = false;

  public tableConfig = [
    {
      key: 'id',
      title: 'Id',
    },
    {
      key: 'manufacturer',
      title: 'Manufacturer',
    },
    {
      key: 'model',
      title: 'Model',
    },
    {
      key: 'location',
      title: 'Location',
    },
    {
      key: 'mileage',
      title: 'Mileage',
    },
    {
      key: 'date',
      title: 'Date of purchase',
    },
    {
      key: 'status',
      title: 'Status',
    },
    {
      key: 'tripsTaken',
      title: 'Trips taken',
    },
  ];

  public mileageSlider: number = 0;
  public tripsTakenSlider: number = 0;

  public vehicleModelSelect: string = '';
  public vehicleManufacturerSelect: string = '';
  public vehicleStatusSelect: string = '';
  public vehicleLocationSelect: string = '';

  public currentSortKey: string = '';

  public toggleFiltersVisibility(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
  }

  public mounted(): void {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.isFiltersVisible = true;
    }
  }

  public get getUniqueKeys(): IVehiclesUniqueKeys | undefined {
    const vehicles = this.content?.vehicles;
    const collectedUniqueKeys: IVehiclesUniqueKeys = {
      manufacturer: [],
      model: [],
      location: [],
      status: [],
    };

    if (!vehicles) {
      return undefined;
    }

    vehicles.forEach((vehicle) => {
      let key: keyof typeof collectedUniqueKeys;
      for (key in collectedUniqueKeys) {
        if (!collectedUniqueKeys[key].includes(vehicle[key])) {
          collectedUniqueKeys[key].push(vehicle[key]);
        }
      }
    });

    return collectedUniqueKeys;
  }

  public get getMaxMileage(): number | undefined {
    const vehicles = this.content?.vehicles;

    if (!vehicles) {
      return undefined;
    }

    return vehicles.map((vehicles) => vehicles.mileage).reduce((a, b) => (a > b ? a : b));
  }

  public get getMaxTrips(): number | undefined {
    const vehicles = this.content?.vehicles;

    if (!vehicles) {
      return undefined;
    }

    return vehicles.map((vehicles) => vehicles.tripsTaken).reduce((a, b) => (a > b ? a : b));
  }

  public get getSortedVehicles() {
    const vehicles = this.content?.vehicles;

    if (!vehicles) {
      return undefined;
    }

    const filters: IVehiclesFilters = {
      status: this.vehicleStatusSelect,
      location: this.vehicleLocationSelect,
      model: this.vehicleModelSelect,
      manufacturer: this.vehicleManufacturerSelect,
      tripsTaken: this.tripsTakenSlider,
      mileage: this.mileageSlider,
    };

    const filterKeys = Object.keys(filters) as Array<keyof typeof filters>;

    const filteredList = vehicles.filter((vehicle) => {
      return filterKeys.every((key) => {
        if (!filters[key]) {
          return vehicle;
        }

        if (key === 'mileage' || key === 'tripsTaken') {
          if (vehicle[key] >= filters[key]) {
            return vehicle;
          }
        }

        if (filters[key] === vehicle[key]) {
          return vehicle;
        }
      });
    });

    if (this.currentSortKey) {
      return sortBy(filteredList, this.currentSortKey).reverse();
    }

    return filteredList;
  }

  public onTableSort(field: IBaseTableConfig['key']) {
    const currentSort = this.currentSortKey;
    if (currentSort === field) {
      this.currentSortKey = '';
    } else {
      this.currentSortKey = field;
    }
  }

  public render(): VNode {
    return (
      <section class='vehicles'>
        <div class='vehicles__container container'>
          <div class='vehicles__grid'>
            <BaseBlock class='vehicles__block' isSimple={true}>
              <div class='vehicles__heading'>
                <BaseTitle level={3}>
                  Vehicles Dashboard
                  {this.getSortedVehicles ? (
                    <sup class='vehicles__counter'>{this.getSortedVehicles.length} Total</sup>
                  ) : null}
                </BaseTitle>
              </div>
            </BaseBlock>
            <BaseBlock class='vehicles__block' title='filter' contentMix='vehicles__filter-block'>
              <BaseButton class='vehicles__filters-toggle' theme='light' onClick={() => this.toggleFiltersVisibility()}>
                {this.isFiltersVisible ? 'Hide' : 'Show'} filter
              </BaseButton>
              <CollapseTransition>
                <div class='vehicles__filters' vShow={this.isFiltersVisible}>
                  {this.getMaxMileage ? (
                    <div class='vehicles__filter-group'>
                      <BaseSlider
                        value={this.mileageSlider}
                        onChange={(value: number) => (this.mileageSlider = value)}
                        min={0}
                        max={this.getMaxMileage}
                        labelStart='Mileage'
                        labelEnd={String(this.getMaxMileage)}
                      />
                    </div>
                  ) : null}

                  {this.getMaxTrips ? (
                    <div class='vehicles__filter-group'>
                      <BaseSlider
                        value={this.tripsTakenSlider}
                        onChange={(value: number) => (this.tripsTakenSlider = value)}
                        min={0}
                        max={this.getMaxTrips}
                        labelStart='Trips taken'
                        labelEnd={String(this.getMaxTrips)}
                      />
                    </div>
                  ) : null}

                  {this.getUniqueKeys ? (
                    <div class='vehicles__filter-group'>
                      <div class='vehicles__filter-group'>
                        <BaseSelect
                          label='Vehicle model'
                          id='vehicles-manufacturer-select'
                          value={this.vehicleManufacturerSelect}
                          options={this.getUniqueKeys.manufacturer}
                          onInput={(value: string) => (this.vehicleManufacturerSelect = value)}
                          placeholder='Vehicle manufacturer'
                        />
                      </div>
                      <div class='vehicles__filter-group'>
                        <BaseSelect
                          label='Vehicle model'
                          id='vehicles-model-select'
                          value={this.vehicleModelSelect}
                          options={this.getUniqueKeys.model}
                          onInput={(value: string) => (this.vehicleModelSelect = value)}
                          placeholder='Vehicle model'
                        />
                      </div>
                      <div class='vehicles__filter-group'>
                        <BaseSelect
                          label='Status'
                          id='vehicles-status-select'
                          value={this.vehicleStatusSelect}
                          options={this.getUniqueKeys.status}
                          onInput={(value: string) => (this.vehicleStatusSelect = value)}
                          placeholder='Status'
                        />
                      </div>
                      <div class='vehicles__filter-group'>
                        <BaseSelect
                          label='Location'
                          id='vehicles-location-select'
                          value={this.vehicleLocationSelect}
                          options={this.getUniqueKeys.location}
                          onInput={(value: string) => (this.vehicleLocationSelect = value)}
                          placeholder='Location'
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </CollapseTransition>
            </BaseBlock>
            <BaseBlock isSimple={true} class='vehicles__block' contentMix='vehicles__filter-block'>
              {this.getSortedVehicles ? (
                <BaseTable
                  tableConfig={this.tableConfig}
                  tableData={this.getSortedVehicles}
                  onSort={(field) => this.onTableSort(field)}
                  currentSort={this.currentSortKey}
                />
              ) : (
                <BaseEmpty />
              )}
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
