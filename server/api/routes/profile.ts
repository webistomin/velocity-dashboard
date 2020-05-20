import { Router, Response } from 'express';
import User from '../../models/user';
import verifyToken, { ITokenRequest } from '../middlewares/verify-token';

const router = Router();

export default (app: Router) => {
  app.use('/profile', router);

  // @ts-ignore
  router.get('/own', verifyToken, async (req: ITokenRequest, res: Response) => {
    try {
      if (req?.decoded?._id) {
        const foundUser = await User.findOne({ _id: req.decoded._id });
        console.log(foundUser, 'here');
        if (foundUser) {
          await res.json({
            success: true,
            user: foundUser,
          });
        }
      }
    } catch (e) {
      await res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  });
};
