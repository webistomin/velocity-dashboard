import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import Analytics from 'components/ui/Analytics';

@Component({
  name: 'AnalyticsPage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class AnalyticsPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Analytics />
      </main>
    );
  }
}
