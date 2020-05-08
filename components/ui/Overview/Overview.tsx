import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseBlock from 'components/base/BaseBlock';

import './Overview.sass';

@Component({
  name: 'Overview',
})
export default class Overview extends VueComponent {
  render(): VNode {
    return (
      <section class='overview'>
        <div class='container'>
          <div class='overview__grid'>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
              <h1>Здарова</h1>
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
