import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { LeafletKeyboardEvent } from 'leaflet';
import { ITripInterfaceDB } from 'common/types/trip/trip-schema';
import MapDestination from 'components/ui/Map/MapDestination/';
import BaseLink from 'components/base/BaseLink';
import BaseClose from 'components/base/BaseClose';
import { SiteThemes } from 'common/types/theme/site-themes';

import './BaseMap.sass';

export interface IBaseMapProps {
  trips: ITripInterfaceDB[];
  shouldOpenSidebar?: boolean;
  onMarkerClick?: (tripId: ITripInterfaceDB['_id']) => void;
  initialTripId?: ITripInterfaceDB['_id'] | null;
}

@Component({
  name: 'BaseMap',
})
export default class BaseMap extends VueComponent<IBaseMapProps> {
  @Prop({ required: true })
  private readonly trips!: IBaseMapProps['trips'];

  @Prop({ default: true })
  private readonly shouldOpenSidebar!: IBaseMapProps['shouldOpenSidebar'];

  @Prop()
  private readonly initialTripId!: IBaseMapProps['initialTripId'];

  public mapUrl: string = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';

  public isSidebarVisible: boolean = false;
  public currentTripId: ITripInterfaceDB['_id'] | null = this.initialTripId || null;
  public zoomLevel: number = 10;

  public created(): void {
    if (this.currentTripId) {
      this.zoomLevel = 18;
    }
  }

  public mounted(): void {
    document.addEventListener('keydown', this.closeSidebarByEsc);
  }

  public beforeDestroy() {
    document.removeEventListener('keydown', this.closeSidebarByEsc);
  }

  @Emit('markerClick')
  public onMarkerClick(tripId: ITripInterfaceDB['_id']) {
    const isIdsEqual = tripId === this.currentTripId;

    if ((isIdsEqual || this.currentTripId === null) && this.shouldOpenSidebar) {
      this.isSidebarVisible = !this.isSidebarVisible;
    }

    if (isIdsEqual) {
      this.currentTripId = null;
    } else {
      this.currentTripId = tripId;
    }

    return tripId;
  }

  public closeSidebarByEsc(event: KeyboardEvent) {
    if (this.isSidebarVisible && event.key === 'Escape') {
      this.closeSidebar();
    }
  }

  public onMarkerKeyDown(event: LeafletKeyboardEvent, tripId: ITripInterfaceDB['_id']) {
    if (event.originalEvent.key === 'Enter') {
      this.onMarkerClick(tripId);
    }
  }

  public closeSidebar(): void {
    this.isSidebarVisible = false;
    this.currentTripId = null;
  }

  public get getPrimaryColor(): string {
    if (process.client) {
      return `rgb(${getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary')
        .trim()})`;
    }

    return 'rgb(46, 91, 255)';
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

  public get getCurrentTripPath(): number[][] | undefined {
    const info = this.getCurrentTrip;

    if (!info) {
      return undefined;
    }

    return info.path.map((point) => [point.lat, point.lng, 1]);
  }

  public get getCurrentTheme(): SiteThemes | null {
    if (process.client) {
      return localStorage.getItem('theme') as SiteThemes;
    }

    return SiteThemes.SHELOB;
  }

  public get getIcon() {
    return {
      iconUrl: `/img/map-marker-${this.getCurrentTheme}.svg`,
      iconRetinaUrl: `/img/map-marker-${this.getCurrentTheme}.svg`,
      shadowUrl: '',
      iconSize: [24, 24],
      shadowSize: [0, 0],
      iconAnchor: [12, 12],
    };
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
          <L-Map zoom={this.zoomLevel} center={[50.516518, 6.993713]} class='base-map__map'>
            <L-Tile-Layer url={this.mapUrl} subdomains='abcd' maxZoom={20} />
            <L-Marker-Cluster
              onClusterkeydown={(cluster: any) => cluster.layer.zoomToBounds({ padding: [20, 20] })}
              options={{
                showCoverageOnHover: false,
              }}>
              {this.trips.map((trip) => {
                return (
                  <L-Marker
                    lat-lng={trip.path[0]}
                    onClick={() => this.onMarkerClick(trip._id)}
                    onKeydown={(event: LeafletKeyboardEvent) => this.onMarkerKeyDown(event, trip._id)}>
                    <L-Icon
                      iconUrl={`/img/map-marker-${this.getCurrentTheme}.svg`}
                      iconRetinaUrl={`/img/map-marker-${this.getCurrentTheme}.svg`}
                      shadowUrl=''
                      iconSize={[24, 24]}
                      shadowSize={[0, 0]}
                      iconAnchor={[12, 12]}
                    />
                  </L-Marker>
                );
              })}
            </L-Marker-Cluster>
            {this.getCurrentTripPath ? (
              <L-Hotline
                weight={2}
                outline-width={0}
                outline-color={this.getPrimaryColor}
                palette={{
                  0.0: this.getPrimaryColor,
                  0.5: this.getPrimaryColor,
                  1.0: this.getPrimaryColor,
                }}
                latLngs={this.getCurrentTripPath}
              />
            ) : null}
          </L-Map>
        </client-only>
      </div>
    );
  }
}
