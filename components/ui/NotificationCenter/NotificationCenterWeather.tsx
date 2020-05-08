import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';

export interface INotificationCenterWeatherProps {
  city: string;
  temperature: number;
}

@Component({
  name: 'NotificationCenterWeather',
})
export default class NotificationCenterWeather extends VueComponent<INotificationCenterWeatherProps> {
  @Prop({ default: '' })
  private readonly city!: INotificationCenterWeatherProps['city'];

  @Prop({ default: 0 })
  private readonly temperature!: INotificationCenterWeatherProps['temperature'];

  render(): VNode {
    return (
      <div class='notification-center__weather'>
        <BaseTitle level={3} class='notification-center__weather-title'>
          <span>{this.temperature}ºF</span>
          <svg-icon name='icon-sun' width={22} height={22} class='notification-center__weather-icon' />
        </BaseTitle>
        <strong class='notification-center__city'>{this.city}</strong>
      </div>
    );
  }
}
