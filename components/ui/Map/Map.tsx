import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseBlock from 'components/base/BaseBlock';
import BaseMap from 'components/base/BaseMap';
import { IPageMap } from 'common/types/pages/map';
import { ITripInterfaceDB } from 'common/types/trip/trip-schema';
import BaseModal from 'components/base/BaseModal';
import MapPassenger from './MapPassenger';
import MapDestination from './MapDestination';
import MapVideo from './MapVideo';
import BaseTitle from 'components/base/BaseTitle';

import './Map.sass';

export interface IMapPageProps {
  content: IPageMap | null;
}

@Component({
  name: 'Map',
})
export default class Map extends VueComponent<IMapPageProps> {
  @Prop({ required: true })
  private readonly content!: IMapPageProps['content'];

  public currentTripId: ITripInterfaceDB['_id'] | null = null;
  public isVideoModalVisible: boolean = false;

  public created(): void {
    const id = this.$route.params.id;
    if (id) {
      this.currentTripId = id;
    }
  }

  public onMarkerClick(tripId: ITripInterfaceDB['_id']): void {
    if (tripId === this.currentTripId) {
      this.currentTripId = null;
      history.pushState({}, '', `/map`);
    } else {
      history.pushState({}, '', `/map/${tripId}`);
      this.currentTripId = tripId;
    }
  }

  public onVideoClick(): void {
    this.isVideoModalVisible = true;
  }

  public onVideoClose(): void {
    this.isVideoModalVisible = false;
  }

  public get getCurrentTrip(): ITripInterfaceDB | undefined {
    const trips = this.content?.trips;

    if (!trips) {
      return undefined;
    }

    const id = this.currentTripId;
    const tripIndex = trips.findIndex((trip) => trip._id === id);
    return trips[tripIndex];
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

  public render(): VNode {
    return (
      <section class='map'>
        {this.content?.trips ? (
          <BaseMap
            initialTripId={this.currentTripId}
            trips={this.content.trips}
            shouldOpenSidebar={false}
            onMarkerClick={(tripId) => this.onMarkerClick(tripId)}
            class='map__map'
          />
        ) : null}
        <div class='map__container container'>
          {this.getCurrentTrip ? (
            <div class='map__grid'>
              <BaseBlock class='map__block' title='Passenger info'>
                <MapPassenger />
              </BaseBlock>
              <BaseBlock class='map__block'>
                {this.getCurrentTripInfo ? (
                  <MapDestination
                    type={this.getCurrentTripInfo.type}
                    distance={this.getCurrentTripInfo.distance}
                    approximateTime={this.getCurrentTripInfo.approximateTime}
                    price={this.getCurrentTripInfo.price}
                    startAddress={this.getCurrentTripInfo.startAddress}
                    endAddress={this.getCurrentTripInfo.endAddress}
                  />
                ) : null}
              </BaseBlock>
              <BaseBlock class='map__block'>
                <MapVideo onVideoClick={this.onVideoClick} />
              </BaseBlock>
            </div>
          ) : (
            <BaseBlock class='map__placeholder' title='Hint'>
              <BaseTitle level={3}>Information about trip will be available after click on marker</BaseTitle>
            </BaseBlock>
          )}
        </div>
        <BaseModal isVisible={this.isVideoModalVisible} onClose={this.onVideoClose}>
          <video preload='auto' muted playsInline autoPlay='autoplay' loop='loop' class='map__driver-video'>
            <source src='/video/car-driving.webm' type='video/webm; codecs="vp8, vorbis"' />
            <source src='/video/car-driving.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            Video tag is not supported in this browser.
          </video>
        </BaseModal>
      </section>
    );
  }
}
