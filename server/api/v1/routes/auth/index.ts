import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { authControllers } from 'controllers/auth';
import signUpValidatorMiddleware from 'server/validators/auth/sign-up';
import signInValidatorMiddleware from 'server/validators/auth/sign-in';
import resetValidatorMiddleware from 'server/validators/auth/reset';

const router = Router();

/**
 * Auth endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.post(serverUrls.auth.signUp, signUpValidatorMiddleware, authControllers.signUp);

  router.post(serverUrls.auth.signIn, signInValidatorMiddleware, authControllers.signIn);

  router.post(serverUrls.auth.logout, authControllers.logout);

  router.post(serverUrls.auth.reset, resetValidatorMiddleware, authControllers.reset);
};
