import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { weatherControllers } from 'controllers/weather';

const router = Router();

/**
 * Weather endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.post(serverUrls.weather.current, weatherControllers.current);
};
