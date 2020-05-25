/* eslint-disable camelcase */
import { Request } from 'express';

export interface ICurrentWeather {
  app_temp: number;
  aqi: number;
  city_name: string;
  clouds: number;
  country_code: string;
  datetime: string;
  dewpt: number;
  dhi: number;
  dni: number;
  elev_angle: number;
  ghi: number;
  h_angle: number;
  last_ob_time: string;
  lat: number;
  lon: number;
  ob_time: string;
  pod: string;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  solar_rad: number;
  state_code: string;
  station: string;
  sunrise: string;
  sunset: string;
  temp: number;
  timezone: string;
  ts: number;
  uv: number;
  vis: number;
  weather: {
    icon: string;
    code: string;
    description: string;
  };
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_spd: number;
}

export interface IWeatherCurrentCoordinates {
  lat: number;
  lng: number;
}

export interface IWeatherCurrentRequest extends Request {
  body: IWeatherCurrentCoordinates;
}

export interface IWeatherCurrentResponseBody {
  success: boolean;
  message?: string;
  weather?: ICurrentWeather;
}

export interface IGetCurrentWeatherResult {
  cityName: ICurrentWeather['city_name'];
  countryCode: ICurrentWeather['country_code'];
  temperature: ICurrentWeather['temp'];
  description: ICurrentWeather['weather']['description'];
  icon: ICurrentWeather['weather']['icon'];
}
