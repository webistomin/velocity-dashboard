import { Router } from 'express';
import verifyToken from 'middlewares/verify-token';
import { serverUrls } from 'common/urls/serverUrls';
import { profileControllers } from 'controllers/profile';
import profileUpdateValidatorMiddleware from 'server/validators/profile/update';

const router = Router();

export default (app: Router) => {
  app.use(router);

  /**
   * Typescript can't extend request object with middlewares
   * https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5
   *
   * The hack from article helps, but during compilation app crashes anyway
   */
  // @ts-ignore
  router.get(serverUrls.profile.own, verifyToken, profileControllers.own);

  // @ts-ignore
  router.post(serverUrls.profile.update, profileUpdateValidatorMiddleware, profileControllers.update);
};
