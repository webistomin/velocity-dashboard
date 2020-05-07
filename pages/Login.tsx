import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Login from 'components/ui/Login';

@Component({
  name: 'LoginPage',
  layout: 'login',
})
export default class LoginPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content'>
        <Login />
      </main>
    );
  }
}
