import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { tripsControllers } from 'controllers/trips';

const router = Router();

/**
 * Trips endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.post(serverUrls.trips.add, tripsControllers.add);

  router.patch(serverUrls.trips.start, tripsControllers.start);

  router.patch(serverUrls.trips.end, tripsControllers.end);
};
