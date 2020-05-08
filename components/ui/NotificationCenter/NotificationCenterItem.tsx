import { VNode } from 'vue';
import { BaseIcon } from 'components/base/BaseIcon/BaseIcon';
import { VueComponent } from 'types/vue-components';
import { BaseNotify } from 'components/base/BaseNotify/BaseNotify';
import { Component, Prop } from '~/node_modules/nuxt-property-decorator';

export enum NotificationCenterItemTypes {
  MESSAGE = 'message',
  APPLICATION = 'application',
  COMPLAINT = 'complaint',
}

export interface INotificationCenterItemProps {
  id: string | number;
  type: NotificationCenterItemTypes;
  text: string;
  time: DOMTimeStamp;
  isNew: boolean;
}

@Component({
  name: 'NotificationCenterItem',
})
export default class NotificationCenterItem extends VueComponent<INotificationCenterItemProps> {
  @Prop({ default: NotificationCenterItemTypes.APPLICATION })
  private readonly type!: INotificationCenterItemProps['type'];

  @Prop({ default: '' })
  private readonly text!: INotificationCenterItemProps['text'];

  @Prop({ default: '' })
  private readonly time!: INotificationCenterItemProps['time'];

  @Prop({ default: '' })
  private readonly id!: INotificationCenterItemProps['id'];

  @Prop({ default: false })
  private readonly isNew!: INotificationCenterItemProps['isNew'];

  get getIconName() {
    switch (this.type) {
      case NotificationCenterItemTypes.MESSAGE:
        return 'icon-bubble';
      case NotificationCenterItemTypes.APPLICATION:
        return 'icon-mail';
      case NotificationCenterItemTypes.COMPLAINT:
        return 'icon-lightning';
      default:
        return 'icon-mail';
    }
  }

  render(): VNode {
    return (
      <div class='notification-center__item'>
        <nuxt-link to='/test' class='notification-center__item-link link'>
          <div class='notification-center__col notification-center__col_left'>
            {this.isNew ? <BaseNotify/> : null}
            <BaseIcon
              class={`notification-center__item-icon ${this.isNew ? 'notification-center__item-icon_new' : ''}`}
              name={this.getIconName}
              size='xs'
            />
          </div>
          <div class='notification-center__col notification-center__col_right'>
            <strong class='notification-center__caption caption'>{this.type.toUpperCase()}</strong>
            <p class='notification-center__text paragraph'>{this.text}</p>
            <time class='notification-center__time'>{this.time}</time>
          </div>
        </nuxt-link>
      </div>
    );
  }
}
