import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import {
  ICurrentWeather,
  IWeatherCurrentCoordinates,
  IWeatherCurrentResponseBody,
  IGetCurrentWeatherResult,
} from 'common/types/weather/current';
import { serverUrls } from 'common/urls/serverUrls';
import { $axios } from '~/plugins/axios-instance';

export interface IWeatherVuexState {
  currentWeather: ICurrentWeather | null;
  coordinates: IWeatherCurrentCoordinates | null;
}

@Module({
  stateFactory: true,
  namespaced: true,
})
export default class WeatherModule extends VuexModule<IWeatherVuexState> {
  currentWeather: IWeatherVuexState['currentWeather'] = null;
  coordinates: IWeatherVuexState['coordinates'] = null;

  @Mutation
  setCurrentWeather(payload: IWeatherVuexState['currentWeather']) {
    this.currentWeather = payload;
  }

  @Mutation
  setUserCoordinates(payload: IWeatherVuexState['coordinates']) {
    this.coordinates = payload;
  }

  @Action({ commit: 'setCurrentWeather' })
  async fetchCurrentWeather() {
    const coordinates = this.coordinates;

    if (coordinates) {
      const response: IWeatherCurrentResponseBody = await $axios.$post(serverUrls.weather.current, coordinates);

      if (response.weather) {
        return response.weather;
      }
    }

    return null;
  }

  get getCurrentWeather(): IGetCurrentWeatherResult | null {
    const currentWeather = this.currentWeather;

    if (currentWeather) {
      return {
        cityName: currentWeather.city_name,
        countryCode: currentWeather.country_code,
        description: currentWeather.weather.description,
        icon: currentWeather.weather.icon,
        temperature: currentWeather.temp,
      };
    }

    return null;
  }
}
