import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { ITripInterfaceDB } from 'common/types/trip/trip-schema';
import MapDestination from 'components/ui/Map/MapDestination/';
import BaseLink from 'components/base/BaseLink';
import BaseClose from 'components/base/BaseClose';
import { SiteThemes } from 'common/types/theme/site-themes';

import './BaseMap.sass';

export interface IBaseMapProps {
  trips: ITripInterfaceDB[];
}

@Component({
  name: 'BaseMap',
})
export default class BaseMap extends VueComponent<IBaseMapProps> {
  @Prop({ required: true })
  private readonly trips!: IBaseMapProps['trips'];

  public mapUrl: string = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';

  public isSidebarVisible: boolean = false;
  public currentTripId: ITripInterfaceDB['_id'] | null = null;

  public get getPrimaryColor(): string {
    if (process.client) {
      return `rgb(${getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary')
        .trim()})`;
    }

    return 'rgb(46, 91, 255)';
  }

  public onMarkerClick(tripId: ITripInterfaceDB['_id']) {
    if (tripId === this.currentTripId || this.currentTripId === null) {
      this.isSidebarVisible = !this.isSidebarVisible;
    }

    this.currentTripId = tripId;
  }

  public closeSidebar(): void {
    this.isSidebarVisible = false;
    this.currentTripId = null;
  }

  public get getCurrentTrip() {
    const id = this.currentTripId;
    const tripIndex = this.trips.findIndex((trip) => trip._id === id);
    return this.trips[tripIndex];
  }

  public get getCurrentTripInfo() {
    const trip = this.getCurrentTrip;

    if (!trip) {
      return undefined;
    }

    return {
      id: trip._id,
      type: trip.trip.type,
      distance: trip.trip.distance,
      approximateTime: trip.trip.approximateTime,
      price: trip.trip.price,
      startAddress: trip.trip.startAddress,
      endAddress: trip.trip.endAddress,
    };
  }

  public get getCurrentTheme(): SiteThemes | null {
    if (process.client) {
      return localStorage.getItem('theme') as SiteThemes;
    }

    return SiteThemes.SHELOB;
  }

  public render(): VNode {
    return (
      <div class='base-map'>
        <div class={`base-map__sidebar ${this.isSidebarVisible ? 'base-map__sidebar_visible' : ''}`}>
          <BaseClose class='base-map__close' onClick={this.closeSidebar} />
          {this.getCurrentTripInfo ? (
            <div class='base-map__holder'>
              <MapDestination
                type={this.getCurrentTripInfo.type}
                distance={this.getCurrentTripInfo.distance}
                approximateTime={this.getCurrentTripInfo.approximateTime}
                price={this.getCurrentTripInfo.price}
                startAddress={this.getCurrentTripInfo.startAddress}
                endAddress={this.getCurrentTripInfo.endAddress}
              />
              <BaseLink class='base-map__link' to={`/map/${this.getCurrentTripInfo.id}`}>
                Learn more
              </BaseLink>
            </div>
          ) : null}
        </div>
        <client-only>
          <L-Map zoom={10} center={[50.516518, 6.993713]} class='base-map__map'>
            <L-Tile-Layer url={this.mapUrl} subdomains='abcd' maxZoom={20} />
            <L-Marker-Cluster
              options={{
                showCoverageOnHover: false,
              }}>
              {this.trips.map((trip) => {
                return (
                  <L-Marker lat-lng={trip.path[0]} onClick={() => this.onMarkerClick(trip._id)}>
                    <L-Icon
                      icon-url={`/img/map-marker-${this.getCurrentTheme}.svg`}
                      icon-size={[24, 24]}
                      icon-anchor={[12, 12]}
                    />
                  </L-Marker>
                );
              })}
            </L-Marker-Cluster>
            {/* <L-Hotline */}
            {/*  weight={2} */}
            {/*  outline-width={0} */}
            {/*  outline-color={this.getPrimaryColor} */}
            {/*  palette={{ */}
            {/*    0.0: this.getPrimaryColor, */}
            {/*    0.5: this.getPrimaryColor, */}
            {/*    1.0: this.getPrimaryColor, */}
            {/*  }} */}
            {/*  latLngs={[ */}
            {/*    [55.751244, 37.618423, 1], */}
            {/*    [55.851244, 37.618423, 1], */}
            {/*    [55.851244, 37.118423, 1], */}
            {/*  ]} */}
            {/* /> */}
          </L-Map>
        </client-only>
      </div>
    );
  }
}
