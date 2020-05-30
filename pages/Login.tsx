import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Login from 'components/ui/Login';

@Component({
  name: 'LoginPage',
  layout: 'login',
})
export default class LoginPage extends VueComponent {
  public head() {
    return {
      title: 'Velocity:: Authentication',
    };
  }

  render(): VNode {
    return (
      <main class='page-content'>
        <Login />
        <notifications group='auth' position='top left' animation-name='v-popup-fade-left' />
      </main>
    );
  }
}
