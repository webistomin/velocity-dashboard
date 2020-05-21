import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import User from 'server/models/user/user';
import PasswordReset from 'server/models/auth/password-reset';
import { IAuthForgotResponseBody } from 'common/types/auth/forgot';

export default async (req: Request, res: Response<IAuthForgotResponseBody>) => {
  try {
    const { email } = req.body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      await res.status(HTTPStatuses.UNAUTHORIZED).json({
        success: false,
        message: 'Account does not exist',
      });
    } else {
      const existingReset = await PasswordReset.findOne({ email });

      if (existingReset) {
        await res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
          success: false,
          message: 'Reset link was already sent',
        });
      } else {
        await foundUser.forgotPassword();
        await res.json({
          message: 'Password reset link sent',
          success: true,
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
