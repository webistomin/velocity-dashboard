import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { State } from 'vuex-class';

import BaseThumbnail from 'components/base/BaseThumbnail';
import BaseSidebar from 'components/base/BaseSidebar';
import BaseOverlay from 'components/base/BaseOverlay';
import UserProfile, { IUserProfileInfo } from 'components/ui/UserCenter/UserProfile/UserProfile';

import './UserCenter.sass';
import { IUserInterfaceDB } from 'common/types/user/user-schema';

@Component({
  name: 'UserCenter',
})
export default class UserCenter extends VueComponent {
  public isUserProfileVisible: boolean = false;
  public info: IUserProfileInfo[] = [
    {
      key: 'Role',
      value: '',
    },
    {
      key: 'Email',
      value: '',
    },
    {
      key: 'Phone',
      value: '',
    },
    {
      key: 'Twitter',
      value: '',
    },
    {
      key: 'Location',
      value: '',
    },
    {
      key: 'Bio',
      value: '',
    },
  ];

  @State((state) => state.auth.user)
  getAuthUser!: IUserInterfaceDB;

  public toggleUserProfileVisibility() {
    this.isUserProfileVisible = !this.isUserProfileVisible;
  }

  public get shouldLockBody(): boolean {
    return this.isUserProfileVisible && window.matchMedia('(max-width: 1023px)').matches;
  }

  public onClickOutside(): void {
    this.isUserProfileVisible = false;
  }

  public render(): VNode {
    return (
      <div class='user-center' v-scroll-lock={this.shouldLockBody} v-click-outside={this.onClickOutside}>
        <button class='user-center__btn btn' onClick={this.toggleUserProfileVisibility}>
          <BaseThumbnail image='/img/avatar.png' size='s' alt='User' />
        </button>

        <BaseSidebar isVisible={this.isUserProfileVisible} class='user-center__sidebar'>
          <UserProfile
            name='Alexey Istomin'
            class={'user-center__profile'}
            avatar='/img/avatar.png'
            post='Sr. Customer Manager'
            info={this.info}
          />
        </BaseSidebar>

        <BaseOverlay class='user-center__overlay' isVisible={this.isUserProfileVisible} onClick={this.onClickOutside} />
      </div>
    );
  }
}
