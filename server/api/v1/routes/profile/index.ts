import { Router } from 'express';
import verifyToken from '../../middlewares/verify-token';
import { serverUrls } from '../../../../../common/urls/serverUrls';
import { profileControllers } from '../../controllers/profile';

const router = Router();

export default (app: Router) => {
  app.use(router);

  // @ts-ignore
  router.get(serverUrls.profile.own, verifyToken, profileControllers.own);
};
