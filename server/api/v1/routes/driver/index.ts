import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { driverControllers } from 'controllers/driver';

const router = Router();

/**
 * Driver endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.post(serverUrls.driver.signUp, driverControllers.signUp);
};
