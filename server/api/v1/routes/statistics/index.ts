import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { statisticsControllers } from 'controllers/statistics';

const router = Router();

/**
 * Statistics endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.get(serverUrls.statistics.tripsByType, statisticsControllers.tripsByType);
};
