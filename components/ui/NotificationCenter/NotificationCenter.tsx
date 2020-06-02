import { VueComponent } from 'types/vue-components';
import { Component, Watch } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { Getter, Action, State } from 'vuex-class';

import BaseNotify from 'components/base/BaseNotify';
import BaseOverlay from 'components/base/BaseOverlay';
import BaseSidebar from 'components/base/BaseSidebar';
import BaseButton from 'components/base/BaseButton';
import { IGetCurrentWeatherResult, IWeatherCurrentCoordinates } from 'common/types/weather/current';
import { BaseSpinner } from 'components/base/BaseSpinner/BaseSpinner';
import NotificationCenterItem, {
  INotificationCenterItemProps,
  NotificationCenterItemTypes,
} from './NotificationCenterItem';
import { NotificationCenterWeather } from './NotificationCenterWeather';

import './NotificationCenter.sass';

@Component({
  name: 'NotificationCenter',
})
export default class NotificationCenter extends VueComponent {
  public isNotificationsVisible: boolean = false;

  public notifications: INotificationCenterItemProps[] = [
    {
      type: NotificationCenterItemTypes.MESSAGE,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '1',
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.APPLICATION,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '2',
      isNew: false,
    },
    {
      type: NotificationCenterItemTypes.COMPLAINT,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '3',
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.MESSAGE,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '4',
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.APPLICATION,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '5',
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.APPLICATION,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '6',
      isNew: false,
    },
    {
      type: NotificationCenterItemTypes.MESSAGE,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '7',
      isNew: true,
    },
    {
      type: NotificationCenterItemTypes.COMPLAINT,
      text: 'How may we assist you today?',
      time: 1591086090152,
      id: '8',
      isNew: false,
    },
  ];

  @Action('weather/fetchCurrentWeather') private readonly fetchCurrentWeather!: () => void;

  @Getter('weather/getCurrentWeather') getCurrentWeather!: IGetCurrentWeatherResult;

  @State((state) => state.weather.coordinates)
  private readonly getUserCoordinates!: IWeatherCurrentCoordinates;

  @Watch('$route')
  public onRouteChanged() {
    this.isNotificationsVisible = false;
  }

  public toggleNotificationVisibility() {
    if (!this.isNotificationsVisible && !this.getCurrentWeather) {
      this.fetchCurrentWeather();
    }

    this.isNotificationsVisible = !this.isNotificationsVisible;
  }

  public get shouldLockBody(): boolean {
    return this.isNotificationsVisible && window.matchMedia('(max-width: 1023px)').matches;
  }

  public onClickOutside(): void {
    this.isNotificationsVisible = false;
  }

  public toggleModalVisibilityByKeyDown(event: KeyboardEvent) {
    if (this.isNotificationsVisible && event.key === 'Escape') {
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
    return (
      <div class='notification-center' v-scroll-lock={this.shouldLockBody} v-click-outside={this.onClickOutside}>
        <button
          class={`notification-center__btn btn ${this.isNotificationsVisible ? 'notification-center__btn_active' : ''}`}
          type='button'
          onClick={this.toggleNotificationVisibility}
          aria-label='Toggle notification center'>
          <span class='notification-center__btn-content'>
            <BaseNotify class='notification-center__status' />
            <svg-icon name='icon-bell' width={20} height={22} />
          </span>
        </button>

        <BaseSidebar isVisible={this.isNotificationsVisible} class='notification-center__sidebar'>
          <div class='notification-center__heading'>
            <div class='notification-center__info'>
              {this.getCurrentWeather ? (
                <NotificationCenterWeather
                  temperature={this.getCurrentWeather.temperature}
                  city={`${this.getCurrentWeather.cityName}, ${this.getCurrentWeather.countryCode}`}
                  icon={this.getCurrentWeather.icon}
                  description={this.getCurrentWeather.description}
                />
              ) : this.getUserCoordinates ? (
                <BaseSpinner size='s' />
              ) : null}
            </div>
            <BaseButton theme='gray' class='notification-center__clear-btn'>
              Clear
            </BaseButton>
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
          onClick={this.onClickOutside}
        />
      </div>
    );
  }
}
