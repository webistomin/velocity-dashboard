import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { passengerControllers } from 'controllers/passenger';

const router = Router();

/**
 * Passenger endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.post(serverUrls.passenger.signUp, passengerControllers.signUp);
};
