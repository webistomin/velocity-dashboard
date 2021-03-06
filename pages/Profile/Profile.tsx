import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Profile from 'components/ui/Profile';

@Component({
  name: 'ProfilePage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class ProfilePage extends VueComponent {
  public head() {
    return {
      title: 'Velocity :: Profile',
    };
  }

  render(): VNode {
    return (
      <main class='page-content page-content_offset-top'>
        <Profile />
      </main>
    );
  }
}
