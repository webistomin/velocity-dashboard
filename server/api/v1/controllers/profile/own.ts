import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import User from 'server/models/user';
import { IVerifiedUserRequest } from 'middlewares/verify-token';

export default async (req: IVerifiedUserRequest, res: Response) => {
  try {
    const userId = req?.decodedUser?._id;

    if (userId) {
      const foundUser = await User.findOne({ _id: userId });
      if (foundUser) {
        await res.status(HTTPStatuses.OK).json({
          success: true,
          user: foundUser,
        });
      }
    }
  } catch (e) {
    await res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: e.message,
    });
  }
};
