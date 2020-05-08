import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseNotify from 'components/base/BaseNotify';
import BaseOverlay from 'components/base/BaseOverlay';
import BaseSidebar from 'components/base/BaseSidebar';
import BaseButton from 'components/base/BaseButton';
import NotificationCenterItem, {
  INotificationCenterItemProps,
  NotificationCenterItemTypes,
} from './NotificationCenterItem';
import NotificationCenterWeather from './NotificationCenterWeather';

import './NotificationCenter.sass';

@Component({
  name: 'NotificationCenter',
})
export default class NotificationCenter extends VueComponent {
  isNotificationsVisible: boolean = false;

  notifications: INotificationCenterItemProps[] = [
    {
      type: NotificationCenterItemTypes.MESSAGE,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.APPLICATION,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: false,
    },
    {
      type: NotificationCenterItemTypes.COMPLAINT,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.MESSAGE,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.APPLICATION,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.APPLICATION,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: false,
    },
    {
      type: NotificationCenterItemTypes.MESSAGE,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.COMPLAINT,
      text: 'How may we assist you today?',
      time: Date.now(),
      id: Math.random(),
      isNew: false,
    },
  ];

  toggleNotificationVisibility() {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }

  get shouldLockBody(): boolean {
    return !!(this.isNotificationsVisible && window.matchMedia('(max-width: 1023px)').matches);
  }

  render(): VNode {
    return (
      <div class='notification-center' v-scroll-lock={this.shouldLockBody}>
        <button class='notification-center__btn btn' type='button' onClick={this.toggleNotificationVisibility}>
          <span class='notification-center__btn-content'>
            <BaseNotify class='notification-center__status' />
            <svg-icon name='icon-bell' width={20} height={22} />
          </span>
        </button>

        <BaseSidebar isVisible={this.isNotificationsVisible} class='notification-center__sidebar'>
          <div class='notification-center__heading'>
            <div class='notification-center__info'>
              <NotificationCenterWeather temperature={181} city='New York, NY' />
            </div>
            <BaseButton theme='gray' class='notification-center__clear-btn'>Clear</BaseButton>
          </div>
          <ul class='notification-center__list list'>
            {this.notifications.map((notification) => {
              return (
                <li class='notification-center__list-item list-item' key={notification.id}>
                  <NotificationCenterItem
                    type={notification.type}
                    text={notification.text}
                    time={notification.time}
                    id={notification.id}
                    isNew={notification.isNew}
                  />
                </li>
              );
            })}
          </ul>
        </BaseSidebar>

        <BaseOverlay
          class='notification-center__overlay'
          isVisible={this.isNotificationsVisible}
          onClick={this.toggleNotificationVisibility}
        />
      </div>
    );
  }
}
