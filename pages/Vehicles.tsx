import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Vehicles from 'components/ui/Vehicles';

@Component({
  name: 'VehiclesPage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class VehiclesPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Vehicles />
      </main>
    );
  }
}
