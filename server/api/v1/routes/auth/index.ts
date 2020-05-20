import { Router } from 'express';
import { authControllers } from '../../controllers/auth';
import { serverUrls } from '../../../../../common/urls/serverUrls';

const router = Router();

/**
 * Auth endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.post(serverUrls.auth.signUp, authControllers.signIn);

  router.post(serverUrls.auth.signIn, authControllers.signUp);

  router.post(serverUrls.auth.logout, authControllers.logout);
};
