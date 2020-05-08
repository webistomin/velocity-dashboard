import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import BaseBlock from 'components/base/BaseBlock';

@Component({
  name: 'MainPage',
})
export default class MainPage extends VueComponent {
  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <div class='container'>
          <BaseBlock title='vehicles on track' hasOptions={true}>
            Здарова
          </BaseBlock>
        </div>
      </main>
    );
  }
}
