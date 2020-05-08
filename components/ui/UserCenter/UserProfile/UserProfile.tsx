import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { BaseThumbnail } from 'components/base/BaseThumbnail/BaseThumbnail';
import { BaseTitle } from 'components/base/BaseTitle/BaseTitle';
import BaseButton from 'components/base/BaseButton';

import './UserProfile.sass';

export interface IUserProfileProps {
  avatar: string;
  name: string;
  post: string;
  info: IUserProfileInfo[];
}

export interface IUserProfileInfo {
  key: string;
  value: string;
}

@Component({
  name: 'UserProfile',
})
export default class UserProfile extends VueComponent<IUserProfileProps> {
  @Prop()
  private readonly avatar!: IUserProfileProps['avatar'];

  @Prop()
  private readonly name!: IUserProfileProps['name'];

  @Prop()
  private readonly post!: IUserProfileProps['post'];

  @Prop()
  private readonly info!: IUserProfileProps['info'];

  render(): VNode {
    return (
      <div class='user-profile'>
        <div class='user-profile__heading'>
          <BaseThumbnail class='user-profile__avatar' image={this.avatar} alt={this.name} size='xl' />
          <BaseTitle class='user-profile__title' level={3}>
            {this.name}
          </BaseTitle>
          <strong class='user-profile__post'>{this.post}</strong>
          <div class='user-profile__actions'>
            <BaseButton>
              <nuxt-link class='link' to='/profile'>
                Edit profile
              </nuxt-link>
            </BaseButton>
            <BaseButton theme='light'>Change status</BaseButton>
          </div>
        </div>
        <ul class='user-profile__list list'>
          {this.info.map((item) => {
            return (
              <li class='user-profile__item list-item' key={item.key}>
                <strong class='user-profile__key caption'>{item.key}</strong>
                <span class='user-profile__value'>{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
