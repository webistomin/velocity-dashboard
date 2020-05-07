import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseLogo from 'components/base/BaseLogo';
import NotificationCenter from 'components/ui/NotificationCenter';
import MessagesCenter from 'components/ui/MessagesCenter';
import UserCenter from 'components/ui/UserCenter';
import BaseToggle from 'components/base/BaseToggle';

import './TheHeader.sass';

@Component({
  name: 'TheHeader',
})
export default class TheHeader extends VueComponent {
  public render(): VNode {
    return (
      <header class='page-header'>
        <div class='page-header__container'>
          <BaseToggle class='page-header__nav-toggle' />
          <BaseLogo class='page-header__logo' />
          <h2 class='page-header__title title'>Page title</h2>
          <ul class='page-header__user-list list'>
            <li class='page-header__user-item page-header__user-item_notification list-item'>
              <NotificationCenter />
            </li>
            <li class='page-header__user-item page-header__user-item_messages list-item'>
              <MessagesCenter />
            </li>
            <li class='page-header__user-item page-header__user-item_user list-item'>
              <UserCenter />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
