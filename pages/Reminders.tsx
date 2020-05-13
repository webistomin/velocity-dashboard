import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Reminders from 'components/ui/Reminders';

@Component({
  name: 'RemindersPage',
})
export default class RemindersPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Reminders />
      </main>
    );
  }
}
