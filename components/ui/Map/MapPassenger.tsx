import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseThumbnail from 'components/base/BaseThumbnail';

@Component({
  name: 'MapPassenger',
})
export default class MapPassenger extends VueComponent {
  public render(): VNode {
    return (
      <div class='map__passenger'>
        <div class='map__passenger-col map__passenger-col_left'>
          <div class='map__passenger-heading'>
            <BaseThumbnail class='map__passenger-avatar' image='/img/avatar.png' alt='User' size='m' />
            <div class='map__passenger-info'>
              <strong class='map__passenger-name'>Nora M. Buchanan</strong>
              <span class='map__passenger-count'>4 interactions</span>
            </div>
          </div>
          <ul class='map__passenger-list list'>
            <li class='map__passenger-item list-item'>
              <strong class='map__passenger-caption caption'>Email</strong>
              <span class='map__passenger-value'>invision@invisionapp.com</span>
            </li>
            <li class='map__passenger-item list-item'>
              <strong class='map__passenger-caption caption'>Phone</strong>
              <span class='map__passenger-value'>+144–3412–4422</span>
            </li>
            <li class='map__passenger-item list-item'>
              <strong class='map__passenger-caption caption'>Location</strong>
              <span class='map__passenger-value'>New York, NY</span>
            </li>
          </ul>
        </div>
        <div class='map__passenger-col map__passenger-col_right'>
          <ul class='map__passenger-payments list'>
            <li class='map__passenger-payment list-item' tabIndex={0}>
              <img src='/img/visa.svg' alt='Visa' class='map__passenger-payment-logo image' />
              <div class='map__passenger-payment-details'>1111 1111 1111 1111</div>
            </li>
            <li class='map__passenger-payment list-item' tabIndex={0}>
              <img src='/img/visa.svg' alt='Visa' class='map__passenger-payment-logo image' />
              <div class='map__passenger-payment-details'>1111 1111 1111 1111</div>
            </li>
            <li class='map__passenger-payment list-item' tabIndex={0}>
              <img src='/img/visa.svg' alt='Visa' class='map__passenger-payment-logo image' />
              <div class='map__passenger-payment-details'>1111 1111 1111 1111</div>
            </li>
            <li class='map__passenger-payment list-item' tabIndex={0}>
              <img src='/img/visa.svg' alt='Visa' class='map__passenger-payment-logo image' />
              <div class='map__passenger-payment-details'>1111 1111 1111 1111</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
