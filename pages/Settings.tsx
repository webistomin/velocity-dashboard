import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import Settings from 'components/ui/Settings';

@Component({
  name: 'SettingsPage',
})
export default class SettingsPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Settings />
      </main>
    );
  }
}
