import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';

import User from 'server/models/user/user';
import { IVerifiedUserRequest } from 'middlewares/verify-token';
import { IOwnUserProfileResponseBody } from 'common/types/user/user';

export default async (req: IVerifiedUserRequest, res: Response<IOwnUserProfileResponseBody>) => {
  try {
    const userId = req.decodedUser._id;

    const foundUser = await User.findOneAndUpdate({ _id: userId }, { lastLogin: new Date() }, { new: true });

    if (foundUser) {
      return await res.status(HTTPStatuses.OK).json({
        success: true,
        user: foundUser,
      });
    } else {
      return res.status(HTTPStatuses.NOT_FOUND).json({
        success: false,
        message: 'User is not found',
      });
    }
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
