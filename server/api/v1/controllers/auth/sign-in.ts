import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';
import User from 'server/models/user';
import config from 'server/config';
import { WEEK } from 'common/consts/times';
import { IAuthSignInResponseBody } from 'common/types/auth/sign-in';

export default async (req: Request, res: Response<IAuthSignInResponseBody>) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      await res.status(HTTPStatuses.UNAUTHORIZED).json({
        success: false,
        message: 'Account does not exist',
      });
    } else if (foundUser.comparePassword(password) && config.jwt.secret) {
      const token = JWT.sign(foundUser.toJSON(), config.jwt.secret, {
        expiresIn: WEEK,
      });

      await res.json({
        success: true,
        token,
      });
    } else {
      res.status(HTTPStatuses.UNAUTHORIZED).json({
        success: false,
        message: 'Wrong email or password, please try again',
      });
    }
  } catch (e) {
    await res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: e.message,
    });
  }
};
