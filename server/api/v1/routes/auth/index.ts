import { Router } from 'express';
import { serverUrls } from 'common/urls/serverUrls';
import { authControllers } from 'controllers/auth';
import signUpValidatorMiddleware from 'server/validators/auth/sign-up';
import signInValidatorMiddleware from 'server/validators/auth/sign-in';
import forgotValidatorMiddleware from 'server/validators/auth/forgot';
import resetValidatorMiddleware from 'server/validators/auth/reset';

const router = Router();

/**
 * Auth endpoints
 */
export default (app: Router) => {
  app.use(router);

  router.post(serverUrls.auth.signUp, signUpValidatorMiddleware, authControllers.signUp);

  /**
   * Typescript can't extend request object with middlewares
   * https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5
   *
   * The hack from article helps, but during compilation app crashes anyway
   */
  // @ts-ignore
  router.post(serverUrls.auth.signIn, signInValidatorMiddleware, authControllers.signIn);

  router.post(serverUrls.auth.logout, authControllers.logout);

  // @ts-ignore
  router.post(serverUrls.auth.forgot, forgotValidatorMiddleware, authControllers.forgot);

  // @ts-ignore
  router.post(serverUrls.auth.reset, resetValidatorMiddleware, authControllers.reset);
};
