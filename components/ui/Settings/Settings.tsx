import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';
import BaseBlock from 'components/base/BaseBlock';
import SettingsData from './SettingsData';

import './Settings.sass';

@Component({
  name: 'Settings',
})
export default class Settings extends VueComponent {
  render(): VNode {
    return (
      <section class='settings'>
        <div class='container settings__container'>
          <BaseTitle class='settings__title' level={3}>Settings</BaseTitle>
          <form class='settings__grid'>
            <BaseBlock title='Personal Data'>
              <SettingsData />
            </BaseBlock>
            <BaseBlock title='Notifications' />
            <BaseBlock title='Theme' />
          </form>
        </div>
      </section>
    );
  }
}
