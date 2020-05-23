import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { BaseThumbnail } from 'components/base/BaseThumbnail/BaseThumbnail';
import { BaseTitle } from 'components/base/BaseTitle/BaseTitle';
import BaseButton from 'components/base/BaseButton';

import './UserProfile.sass';
import { IUserInterface } from 'common/types/user/user-schema';
import { UserRoles } from 'common/types/user/user-roles';

export interface IUserProfileProps {
  info: IUserProfileInfo;
}

export interface IUserProfileInfo {
  firstName: IUserInterface['firstName'];
  lastName: IUserInterface['lastName'];
  email: IUserInterface['email'];
  location: IUserInterface['location'];
  bio: IUserInterface['bio'];
  avatar: IUserInterface['avatar'];
  role: IUserInterface['role'];
}

@Component({
  name: 'UserProfile',
})
export default class UserProfile extends VueComponent<IUserProfileProps> {
  @Prop()
  private readonly info!: IUserProfileProps['info'];

  public async logoutHandler(): Promise<void> {
    try {
      await this.$auth.logout();
    } catch (e) {
      console.log(e);
    }
  }

  public get getFullRoleName() {
    const role = this.info.role;

    switch (role) {
      case UserRoles.OPERATOR:
        return 'Operator';
      case UserRoles.ADMIN:
        return 'Administrator';
      default:
        return 'Not specified';
    }
  }

  render(): VNode {
    const { avatar = '/img/avatar.png', firstName, lastName, bio, location, email } = this.info;
    const fullName = `${firstName} ${lastName}`;

    return (
      <div class='user-profile'>
        <div class='user-profile__heading'>
          <BaseThumbnail class='user-profile__avatar' image={avatar} alt={fullName} size='xl' />
          <BaseTitle class='user-profile__title' level={3}>
            {fullName}
          </BaseTitle>
          <strong class='user-profile__post'>{this.getFullRoleName}</strong>
          <div class='user-profile__actions'>
            <BaseButton>
              <nuxt-link class='link' to='/profile'>
                Edit profile
              </nuxt-link>
            </BaseButton>
            <BaseButton theme='light' onClick={this.logoutHandler}>
              Logout
            </BaseButton>
          </div>
        </div>
        <ul class='user-profile__list list'>
          <li class='user-profile__item list-item' vShow={email}>
            <strong class='user-profile__key caption'>Email</strong>
            <span class='user-profile__value'>{email}</span>
          </li>
          <li class='user-profile__item list-item' vShow={location}>
            <strong class='user-profile__key caption'>Location</strong>
            <span class='user-profile__value'>{location}</span>
          </li>
          <li class='user-profile__item list-item' vShow={bio}>
            <strong class='user-profile__key caption'>Bio</strong>
            <span class='user-profile__value'>{bio}</span>
          </li>
        </ul>
      </div>
    );
  }
}
