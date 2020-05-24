import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { State } from 'vuex-class';

import BaseThumbnail from 'components/base/BaseThumbnail';
import BaseSidebar from 'components/base/BaseSidebar';
import BaseOverlay from 'components/base/BaseOverlay';
import UserProfile, { IUserProfileInfo } from 'components/ui/UserCenter/UserProfile/UserProfile';
import { IUserInterfaceDB } from 'common/types/user/user-schema';
import { UserRoles } from 'common/types/user/user-roles';

import './UserCenter.sass';

@Component({
  name: 'UserCenter',
})
export default class UserCenter extends VueComponent {
  public isUserProfileVisible: boolean = false;
  public userInfo: IUserProfileInfo = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    bio: '',
    avatar: '',
    role: UserRoles.OPERATOR,
  };

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

  public toggleModalVisibilityByKeyDown(event: KeyboardEvent) {
    if (this.isUserProfileVisible && event.key === 'Escape') {
      this.onClickOutside();
    }
  }

  public mounted(): void {
    document.addEventListener('keydown', this.toggleModalVisibilityByKeyDown);
  }

  public beforeDestroy(): void {
    document.removeEventListener('keydown', this.toggleModalVisibilityByKeyDown);
  }

  public render(): VNode {
    const authUser = this.getAuthUser;
    this.userInfo.firstName = authUser.firstName;
    this.userInfo.lastName = authUser.lastName;
    this.userInfo.email = authUser.email;
    this.userInfo.location = authUser.location;
    this.userInfo.bio = authUser.bio;
    this.userInfo.avatar = authUser.avatar;
    this.userInfo.role = authUser.role;

    return (
      <div class='user-center' v-scroll-lock={this.shouldLockBody} v-click-outside={this.onClickOutside}>
        <button class='user-center__btn btn' onClick={this.toggleUserProfileVisibility}>
          <BaseThumbnail image={authUser.avatar} size='s' alt='User' />
        </button>

        <BaseSidebar isVisible={this.isUserProfileVisible} class='user-center__sidebar'>
          <UserProfile class={'user-center__profile'} info={this.userInfo} />
        </BaseSidebar>

        <BaseOverlay class='user-center__overlay' isVisible={this.isUserProfileVisible} onClick={this.onClickOutside} />
      </div>
    );
  }
}
