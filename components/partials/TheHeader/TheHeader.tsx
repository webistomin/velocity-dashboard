import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseLogo from 'components/base/BaseLogo';

import './TheHeader.sass';

@Component({
  name: 'TheHeader',
})
export default class TheHeader extends VueComponent {
  render(): VNode {
    return (
      <header class='page-header'>
        <div class='page-header__container container'>
          <BaseLogo />
        </div>
      </header>
    );
  }
}
