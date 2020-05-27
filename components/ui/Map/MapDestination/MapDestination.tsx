import Vue, { RenderContext, VNode, CreateElement, PropType } from 'vue';

import { BaseIcon } from 'components/base/BaseIcon/BaseIcon';
import { TripTypes } from 'common/types/trip/trip-types';
import { ITripInterface } from 'common/types/trip/trip-schema';

import './MapDestination.sass';

export interface IMapDestinationProps {
  type: TripTypes;
  distance: ITripInterface['trip']['distance'];
  approximateTime: ITripInterface['trip']['approximateTime'];
  price: ITripInterface['trip']['price'];
  startAddress: ITripInterface['trip']['startAddress'];
  endAddress: ITripInterface['trip']['endAddress'];
}

export const MapDestination = Vue.extend({
  functional: true,
  props: {
    type: {
      type: String as PropType<IMapDestinationProps['type']>,
      required: true,
    },
    distance: {
      type: Number as PropType<IMapDestinationProps['distance']>,
      required: true,
    },
    approximateTime: {
      type: Number as PropType<IMapDestinationProps['approximateTime']>,
      required: true,
    },
    price: {
      type: Number as PropType<IMapDestinationProps['price']>,
      required: true,
    },
    startAddress: {
      type: String as PropType<IMapDestinationProps['startAddress']>,
      required: true,
    },
    endAddress: {
      type: String as PropType<IMapDestinationProps['endAddress']>,
      required: true,
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IMapDestinationProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { type, distance, approximateTime, endAddress, price, startAddress } = ctx.props;

    const destinationNameStart = startAddress.slice(0, startAddress.indexOf(','));
    const streetNameStart = startAddress.slice(startAddress.indexOf(',') + 1);

    const destinationNameEnd = endAddress.slice(0, endAddress.indexOf(','));
    const streetNameEnd = endAddress.slice(endAddress.indexOf(',') + 1);

    return (
      <div class={`map-destination ${staticClass || ''} ${cls || ''}`}>
        <div class='map-destination__heading'>
          <div class='map-destination__point'>
            <BaseIcon class='map-destination__icon' name='icon-check' color='blue' size='xs' />
            <strong class='map-destination__name'>{destinationNameStart}</strong>
            <span class='map-destination__street'>{streetNameStart}</span>
          </div>
          <div class='map-destination__point'>
            <BaseIcon class='map-destination__icon' name='icon-pin' color='green' size='xs' />
            <strong class='map-destination__name'>{destinationNameEnd}</strong>
            <span class='map-destination__street'>{streetNameEnd}</span>
          </div>
        </div>
        <div class='map-destination__content'>
          <ul class='map-destination__info list'>
            <li class='map-destination__item list-item'>
              <strong class='map-destination__value'>{distance} miles</strong>
              <span class='map-destination__key'>Distance</span>
            </li>
            <li class='map-destination__item list-item'>
              <strong class='map-destination__value'>{approximateTime} min</strong>
              <span class='map-destination__key'>Time</span>
            </li>
            <li class='map-destination__item list-item'>
              <strong class='map-destination__value'>${price}</strong>
              <span class='map-destination__key'>Price</span>
            </li>
            <li class='map-destination__item list-item'>
              <strong class='map-destination__value'>{type}</strong>
              <span class='map-destination__key'>Trip type</span>
            </li>
          </ul>
        </div>
      </div>
    );
  },
});
