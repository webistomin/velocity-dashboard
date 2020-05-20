import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Map from 'components/ui/Map';

@Component({
  name: 'MapPage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class MapPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset-bottom'>
        <Map />
      </main>
    );
  }
}
