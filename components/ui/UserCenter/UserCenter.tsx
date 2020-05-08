import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseThumbnail from 'components/base/BaseThumbnail';
import BaseSidebar from 'components/base/BaseSidebar';
import BaseOverlay from 'components/base/BaseOverlay';
import UserProfile, { IUserProfileInfo } from 'components/ui/UserCenter/UserProfile/UserProfile';

import './UserCenter.sass';

@Component({
  name: 'UserCenter',
})
export default class UserCenter extends VueComponent {
  isUserProfileVisible: boolean = false;
  info: IUserProfileInfo[] = [
    {
      key: 'Role',
      value: 'Administrator, Moderator',
    },
    {
      key: 'Email',
      value: 'invision@invisionapp.com',
    },
    {
      key: 'Phone',
      value: '+144–3412–4422',
    },
    {
      key: 'Twitter',
      value: '@invisionapp',
    },
    {
      key: 'Location',
      value: 'New York, NY',
    },
    {
      key: 'Bio',
      value:
        "This theme adds additional client and channel information. It's useful for Admins when you need any ID of a user without searching for it.",
    },
  ];

  toggleUserProfileVisibility() {
    this.isUserProfileVisible = !this.isUserProfileVisible;
  }

  get shouldLockBody(): boolean {
    return !!(this.isUserProfileVisible && window.matchMedia('(max-width: 1023px)').matches);
  }

  render(): VNode {
    return (
      <div class='user-center' v-scroll-lock={this.shouldLockBody}>
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

        <BaseOverlay
          class='user-center__overlay'
          isVisible={this.isUserProfileVisible}
          onClick={this.toggleUserProfileVisibility}
        />
      </div>
    );
  }
}
