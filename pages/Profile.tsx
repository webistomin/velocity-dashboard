import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Profile from 'components/ui/Profile';

@Component({
  name: 'ProfilePage',
})
export default class ProfilePage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Profile />
      </main>
    );
  }
}
