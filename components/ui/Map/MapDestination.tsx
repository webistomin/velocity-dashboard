import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { BaseIcon } from 'components/base/BaseIcon/BaseIcon';
import { VNode } from '~/node_modules/vue';

@Component({
  name: 'MapDestination',
})
export default class MapDestination extends VueComponent {
  public render(): VNode {
    return (
      <div class='map__destination'>
        <div class='map__destination-heading'>
          <div class='map__destination-point'>
            <BaseIcon class='map__destination-icon' name='icon-check' color='blue' size='xs' />
            <strong class='map__destination-name'>Jackson Heights</strong>
            <span class='map__destination-street'>37-27 74th Street</span>
          </div>
          <div class='map__destination-point'>
            <BaseIcon class='map__destination-icon' name='icon-pin' color='green' size='xs' />
            <strong class='map__destination-name'>Greenpoint</strong>
            <span class='map__destination-street'>81 Gate St Brooklyn</span>
          </div>
        </div>
        <div class='map__destination-content'>
          <ul class='map__destination-info list'>
            <li class='map__destination-item list-item'>
              <strong class='map__destination-value'>12.3 km</strong>
              <span class='map__destination-key'>Distance</span>
            </li>
            <li class='map__destination-item list-item'>
              <strong class='map__destination-value'>42 min</strong>
              <span class='map__destination-key'>Time</span>
            </li>
            <li class='map__destination-item list-item'>
              <strong class='map__destination-value'>$34.20</strong>
              <span class='map__destination-key'>Price</span>
            </li>
            <li class='map__destination-item list-item'>
              <strong class='map__destination-value'>12.4 kWh</strong>
              <span class='map__destination-key'>Energy</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
