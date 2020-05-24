import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { detectUserInput } from '~/plugins/detectUserInput';

@Component({
  name: 'LoginLayout',
})
export default class LoginLayout extends VueComponent {
  mounted(): void {
    detectUserInput();
  }

  render(): VNode {
    return (
      <div id='app'>
        <nuxt />
      </div>
    );
  }
}
