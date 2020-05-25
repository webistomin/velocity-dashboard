import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';
import { ICurrentWeather } from 'common/types/weather/current';

export interface INotificationCenterWeatherProps {
  city: string;
  temperature: ICurrentWeather['temp'];
  icon: ICurrentWeather['weather']['icon'];
  description: ICurrentWeather['weather']['description'];
}

export const NotificationCenterWeather = Vue.extend({
  functional: true,
  props: {
    city: {
      type: String as PropType<INotificationCenterWeatherProps['city']>,
      required: true,
    },
    temperature: {
      type: Number as PropType<INotificationCenterWeatherProps['temperature']>,
      required: true,
    },
    icon: {
      type: String as PropType<INotificationCenterWeatherProps['icon']>,
      required: true,
    },
    description: {
      type: String as PropType<INotificationCenterWeatherProps['description']>,
      required: true,
    },
  },
  render(_h: CreateElement, ctx: RenderContext<INotificationCenterWeatherProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { city, temperature, icon, description } = ctx.props;
    return (
      <div class={`notification-center__weather ${staticClass || ''} ${cls || ''}`} title={description}>
        <BaseTitle level={3} class='notification-center__weather-title'>
          <span>{temperature}ºF</span>
          <v-lazy-image
            src={`/img/weather-icons/${icon}.png`}
            alt={description}
            width={48}
            height={48}
            class='notification-center__weather-icon image'
          />
        </BaseTitle>
        <strong class='notification-center__city'>{city}</strong>
      </div>
    );
  },
});
