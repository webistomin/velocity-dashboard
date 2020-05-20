import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { healthCheckControllers } from 'controllers/healthcheck';

const router = Router();

/**
 * Health Check endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.get(serverUrls.healthcheck.status, healthCheckControllers.sendOk);

  router.head(serverUrls.healthcheck.status, healthCheckControllers.sendOk);
};
