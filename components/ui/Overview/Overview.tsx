import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseBlock from 'components/base/BaseBlock';
import BaseCircularGraph from 'components/base/BaseCircularGraph';
import BaseTitle from 'components/base/BaseTitle';

import './Overview.sass';
import BaseStat from 'components/base/BaseStat/BaseStat';

@Component({
  name: 'Overview',
})
export default class Overview extends VueComponent {
  render(): VNode {
    return (
      <section class='overview'>
        <div class='container'>
          <div class='overview__grid'>
            <BaseBlock class='overview__block' contentMix='overview__welcome'>
              <BaseCircularGraph value={55} />
              <div class='overview__desc'>
                <BaseTitle level={3} class='overview__welcome-title'>
                  Welcome <br /> to Velocity
                </BaseTitle>
                <p class='overview__text paragraph'>
                  All cars are operating well. There were 1,233 trips since your last login.
                </p>
              </div>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track'>
              <h1>Здарова</h1>
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track'>
              <BaseStat value={1428} prevValue={1000} measure='cars' />
            </BaseBlock>
            <BaseBlock class='overview__block' title='Distance driven'>
              <BaseStat value={158.3} prevValue={190} measure='mi' />
            </BaseBlock>
            <BaseBlock class='overview__block' title='vehicles on track' hasOptions={true}>
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
