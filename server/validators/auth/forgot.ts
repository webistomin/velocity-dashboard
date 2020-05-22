import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Response } from 'express';

import { IAuthForgotValidatorRequest, IAuthForgotValidatorResponseBody } from 'common/types/auth/forgot';
import User from 'server/models/user/user';
import PasswordReset from 'server/models/auth/password-reset';

const ForgotSchema = Yup.object({
  email: Yup.string()
    .required()
    .email(),
});

export default async (
  req: IAuthForgotValidatorRequest,
  res: Response<IAuthForgotValidatorResponseBody>,
  next: NextFunction
) => {
  const { email } = req.body;

  try {
    /**
     * Validate body with Yup
     */
    await ForgotSchema.validate({ email });
    /**
     * Find user with this email in users collection
     */
    const foundUser = await User.findOne({ email });

    /**
     * If user is not found – return error
     */
    if (!foundUser) {
      return await res.status(HTTPStatuses.UNAUTHORIZED).json({
        success: false,
        message: 'Account does not exist',
      });
    }

    /**
     * Find existing reset link in password resets collection
     */
    const existingReset = await PasswordReset.findOne({ email });

    /**
     * If link exists – return error
     */
    if (existingReset) {
      return await res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: 'Reset link was already sent',
      });
    }
    /**
     * Pass user object to forgot controller
     */
    req.user = foundUser;

    return next();
  } catch (error) {
    return res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: error.message,
    });
  }
};
