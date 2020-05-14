import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseBlock from 'components/base/BaseBlock';
import BaseMap from 'components/base/BaseMap';
import MapPassenger from './MapPassenger';
import MapDestination from './MapDestination';
import MapVideo from './MapVideo';

import './Map.sass';

@Component({
  name: 'Map',
})
export default class Map extends VueComponent {
  public render(): VNode {
    return (
      <section class='map'>
        <BaseMap class='map__map' />
        <div class='map__container container'>
          <div class='map__grid'>
            <BaseBlock class='map__block' title='Passenger info'>
              <MapPassenger />
            </BaseBlock>
            <BaseBlock class='map__block'>
              <MapDestination />
            </BaseBlock>
            <BaseBlock class='map__block'>
              <MapVideo />
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
