import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

@Component({
  name: 'MainPage',
})
export default class MainPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content'>
        <h1>Main</h1>
      </main>
    );
  }
}
