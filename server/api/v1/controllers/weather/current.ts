import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import axios from 'axios';

import config from 'server/config';
import { IWeatherCurrentRequest, IWeatherCurrentResponseBody } from 'common/types/weather/current';

export default async (req: IWeatherCurrentRequest, res: Response<IWeatherCurrentResponseBody>) => {
  const { lat, lng } = req.body;
  const apiKey = config.weatherbit.key;

  try {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}&units=I`;
    const response = await axios.get(url);
    return res.json({
      success: true,
      weather: response?.data?.data[0],
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
