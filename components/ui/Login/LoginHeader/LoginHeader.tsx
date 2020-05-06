import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseLogo from 'components/base/BaseLogo';

import './LoginHeader.sass';

@Component({
  name: 'LoginHeader',
})
export default class LoginHeader extends VueComponent {
  render(): VNode {
    return (
      <header class='login__header'>
        <div class='login__header-container container'>
          <BaseLogo />
        </div>
      </header>
    );
  }
}
