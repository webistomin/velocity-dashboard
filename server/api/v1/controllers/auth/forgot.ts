import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import { IAuthForgotResponseBody, IAuthForgotValidatorRequest } from 'common/types/auth/forgot';

export default async (req: IAuthForgotValidatorRequest, res: Response<IAuthForgotResponseBody>) => {
  try {
    const { user } = req;
    await user
      .sendForgotPasswordMail()
      .then(() => {
        return res.json({
          message: 'Password reset link sent',
          success: true,
        });
      })
      .catch(() => {
        return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
          message: 'Error during sending mail',
          success: false,
        });
      });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
