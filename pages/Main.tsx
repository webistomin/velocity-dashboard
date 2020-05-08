import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import Overview from 'components/ui/Overview';

@Component({
  name: 'MainPage',
})
export default class MainPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Overview />
      </main>
    );
  }
}
