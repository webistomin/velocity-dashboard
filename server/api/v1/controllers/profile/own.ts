import { ITokenRequest } from 'server/api/v1/middlewares/verify-token';
import { Response } from 'express';
import User from '../../../../models/user';

export default async (req: ITokenRequest, res: Response) => {
  try {
    if (req?.decoded?._id) {
      const foundUser = await User.findOne({ _id: req.decoded._id });
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
};
