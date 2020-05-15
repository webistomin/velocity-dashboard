import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Chat from 'components/ui/Chat';

@Component({
  name: 'VehiclesPage',
})
export default class VehiclesPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content'>
        <Chat />
      </main>
    );
  }
}
