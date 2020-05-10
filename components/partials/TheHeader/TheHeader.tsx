import { VueComponent } from 'types/vue-components';
import { Component, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseLogo from 'components/base/BaseLogo';
import NotificationCenter from 'components/ui/NotificationCenter';
import MessagesCenter from 'components/ui/MessagesCenter';
import UserCenter from 'components/ui/UserCenter';
import BaseToggle from 'components/base/BaseToggle';

import './TheHeader.sass';
import { Prop } from '~/node_modules/nuxt-property-decorator';

export interface IHeaderProps {
  isNavOpened: boolean;
}

@Component({
  name: 'TheHeader',
})
export default class TheHeader extends VueComponent<IHeaderProps> {
  @Prop({ default: false })
  private readonly isNavOpened!: IHeaderProps['isNavOpened'];

  @Emit('openNav')
  onToggleClick(): void {}

  public render(): VNode {
    return (
      <header class='page-header'>
        <div class='page-header__container container'>
          <BaseToggle class='page-header__nav-toggle' onClick={this.onToggleClick} isActive={this.isNavOpened} />
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
