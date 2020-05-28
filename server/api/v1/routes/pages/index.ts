import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { pageControllers } from 'controllers/pages';

const router = Router();

/**
 * Pages endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.get(serverUrls.pages.home, pageControllers.home);

  router.get(serverUrls.pages.analytics, pageControllers.analytics);
};
