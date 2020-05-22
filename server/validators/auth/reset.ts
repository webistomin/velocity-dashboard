import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Response } from 'express';

import PasswordReset from 'server/models/auth/password-reset';
import User from 'server/models/user/user';
import { IAuthPasswordResetResponseBody, IAuthPasswordResetValidatorRequest } from 'common/types/auth/reset';
import { IUserSchema } from 'common/types/user/user-schema';

const ResetSchema = Yup.object({
  password: Yup.string().required(),
  token: Yup.string().required(),
});

export default async (
  req: IAuthPasswordResetValidatorRequest,
  res: Response<IAuthPasswordResetResponseBody>,
  next: NextFunction
) => {
  const { token, password } = req.body;

  try {
    /**
     * Validate body with Yup
     */
    await ResetSchema.validate({ password, token });
    /**
     * Find existing reset link in password resets collection
     */
    const existingReset = await PasswordReset.findOne({ token });

    /**
     * If link exists – return error
     */
    if (!existingReset) {
      throw new Yup.ValidationError('Invalid reset token', req.body, 'password');
    }

    /**
     * Find user with this email in users collection
     */
    const user = await User.findOne({ email: existingReset.email });

    if (!user) {
      await res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: 'Account does not exists',
      });
    }

    /**
     * Pass user object to reset controller
     */
    req.user = user as IUserSchema;
    return next();
  } catch (error) {
    res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: error.message,
    });
  }
};
