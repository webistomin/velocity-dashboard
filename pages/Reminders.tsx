import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Reminders from 'components/ui/Reminders';

@Component({
  name: 'RemindersPage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class RemindersPage extends VueComponent {
  public head() {
    return {
      title: 'Velocity:: Service',
    };
  }

  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Reminders />
      </main>
    );
  }
}
