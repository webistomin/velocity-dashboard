import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

@Component({
  name: 'CleanLayout',
})
export default class CleanLayout extends VueComponent {
  render(): VNode {
    return (
      <div id='app'>
        <nuxt />
      </div>
    );
  }
}
