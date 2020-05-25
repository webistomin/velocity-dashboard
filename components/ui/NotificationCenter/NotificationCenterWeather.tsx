import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';
import { ICurrentWeather } from 'common/types/weather/current';

export interface INotificationCenterWeatherProps {
  city: string;
  temperature: ICurrentWeather['temp'];
  icon: ICurrentWeather['weather']['icon'];
  description: ICurrentWeather['weather']['description'];
}

@Component({
  name: 'NotificationCenterWeather',
})
export default class NotificationCenterWeather extends VueComponent<INotificationCenterWeatherProps> {
  @Prop({ default: '' })
  private readonly city!: INotificationCenterWeatherProps['city'];

  @Prop({ default: 0 })
  private readonly temperature!: INotificationCenterWeatherProps['temperature'];

  @Prop({ default: '' })
  private readonly icon!: INotificationCenterWeatherProps['icon'];

  @Prop({ default: '' })
  private readonly description!: INotificationCenterWeatherProps['description'];

  public render(): VNode {
    return (
      <div class='notification-center__weather' title={this.description}>
        <BaseTitle level={3} class='notification-center__weather-title'>
          <span>{this.temperature}ºF</span>
          <v-lazy-image
            src={`/img/weather-icons/${this.icon}.png`}
            alt={this.description}
            width={48}
            height={48}
            class='notification-center__weather-icon image'
          />
        </BaseTitle>
        <strong class='notification-center__city'>{this.city}</strong>
      </div>
    );
  }
}
